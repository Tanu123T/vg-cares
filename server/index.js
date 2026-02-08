import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json({ limit: '1mb' }));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/ai/chat', async (req, res) => {
  try {
    if (!OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server.' });
    }

    const { history, userInput } = req.body || {};

    if (typeof userInput !== 'string' || userInput.trim() === '') {
      return res.status(400).json({ error: 'userInput is required.' });
    }

    const safeHistory = Array.isArray(history) ? history : [];

    const systemMessage = {
      role: 'system',
      content: [
        'You are the VG CARES AI assistant for a healthcare services platform.',
        'Your job is to answer questions in a way that matches the VG CARES website experience.',
        '',
        'Platform context:',
        '- The site includes sections/pages for: Doctors, Hospitals, Blogs, Contact, and a Medical Map.',
        '- The assistant should guide users to find doctors/specialists, hospitals, services, and general health guidance.',
        '',
        'Rules:',
        '- Be accurate, concise, and practical.',
        '- If the user asks for medical diagnosis/treatment, give general guidance and advise consulting a qualified clinician.',
        '- If user asks about emergencies, advise local emergency services immediately.',
        '- If the user asks about platform actions (finding doctors, hospitals, map, contact), answer with steps on how to do it on VG CARES.',
      ].join('\n'),
    };

    const historyMessages = safeHistory
      .slice(-12)
      .filter((m) => m && typeof m.text === 'string' && m.text.trim() !== '')
      .map((m) => ({
        role: m.type === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

    const messages = [systemMessage, ...historyMessages, { role: 'user', content: userInput }];

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages,
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      return res.status(502).json({
        error: `Upstream AI error: ${response.status}`,
        details: errText,
      });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (typeof content !== 'string') {
      return res.status(502).json({ error: 'Invalid AI response format.' });
    }

    return res.json({ reply: content.trim() });
  } catch (e) {
    return res.status(500).json({ error: 'Server error', details: e?.message || String(e) });
  }
});

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => {
  console.log(`VG CARES AI server running on http://localhost:${port}`);
});
