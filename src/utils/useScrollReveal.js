import { useEffect } from "react";

/**
 * useNavbarScroll
 * Adds `.vg-scrolled` to the navbar element when scrollY > offset.
 */
export function useNavbarScroll(selector = ".navbar", offset = 30) {
  useEffect(() => {
    const navbar = document.querySelector(selector);
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > offset) {
        navbar.classList.add("vg-scrolled");
      } else {
        navbar.classList.remove("vg-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selector, offset]);
}

/**
 * useCountUp
 * Animates numeric innerHTML from `start` to `end` over `duration` ms,
 * but only kicks off once the element is visible in the viewport.
 *
 * @param {React.RefObject} ref  - ref attached to the element
 * @param {number} end           - target value
 * @param {number} duration      - ms
 * @param {number} start         - starting vale (default 0)
 */
export function useCountUp(ref, end, duration = 2000, start = 0) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    let raf;
    let started = false;

    const run = (startTime, now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(start + (end - start) * eased);

      if (progress < 1) {
        raf = requestAnimationFrame((t) => run(startTime, t));
      } else {
        el.textContent = end;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          raf = requestAnimationFrame((t) => run(t, t));
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, end, duration, start]);
}

/**
 * addRipple
 * Call this inside an onClick handler to create a ripple effect.
 * The button must have `position:relative; overflow:hidden`.
 *
 * @param {MouseEvent} e - the click event
 */
export function addRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;
  const rect = btn.getBoundingClientRect();

  circle.style.cssText = `
    width: ${diameter}px;
    height: ${diameter}px;
    left: ${e.clientX - rect.left - radius}px;
    top: ${e.clientY - rect.top - radius}px;
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    pointer-events: none;
    transform: scale(0);
    animation: vg-ripple 0.6s linear forwards;
  `;

  // Remove old ripples
  btn.querySelectorAll(".vg-ripple-circle").forEach((r) => r.remove());
  circle.classList.add("vg-ripple-circle");
  btn.appendChild(circle);

  circle.addEventListener("animationend", () => circle.remove());
}

/**
 * useParallax
 * Binds a scroll+mousemove parallax shift to elements with `data-vg-parallax` attribute.
 * The attribute value (e.g. "0.15") controls the intensity.
 */
export function useParallax() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-vg-parallax]");
    if (!elements.length) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-vg-parallax")) || 0.1;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
