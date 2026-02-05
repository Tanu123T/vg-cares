const hospitals = [
  {
    id: 1,
    name: "Sheba Medical Center",
    country: "India",
    specialist: "Cardiology",
    rating: "4.9",
    address: "Kerala, India",
    phone: "+91-11-6620-6630",
    img: "https://images.unsplash.com/photo-1587350859728-117699f4a1ec?q=80&w=600",
    desc: "India's premier cardiac facility specializing in non-invasive surgery."
  },
  {
    id: 2,
    name: "Mayo Clinic",
    country: "USA",
    specialist: "Oncology",
    rating: "5.0",
    address: "Rochester, USA",
    phone: "+1-507-284-2511",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
    desc: "World-renowned center for complex cancer research and personalized therapy."
  },
  {
    id: 3,
    name: "Cleveland Clinic",
    country: "UAE",
    specialist: "Cardiology",
    rating: "4.8",
    address: "Abu Dhabi, UAE",
    phone: "+971-800-8-2223",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600",
    desc: "Top-tier heart care facility in the Middle East."
  },
  {
    id: 4,
    name: "Mount Elizabeth Hospital",
    country: "Singapore",
    specialist: "Neurology",
    rating: "4.7",
    address: "Orchard, Singapore",
    phone: "+65-6735-5000",
    img: "https://images.unsplash.com/photo-1586773860418-d319a221f52c?q=80&w=600",
    desc: "Advanced neurosurgery and robotic-assisted brain operations."
  },
  {
    id: 5,
    name: "The Royal Marsden",
    country: "UK",
    specialist: "Oncology",
    rating: "4.8",
    address: "London, UK",
    phone: "+44-20-7352-8171",
    img: "https://images.unsplash.com/photo-1504813184591-01592fd03cf7?q=80&w=600",
    desc: "World’s first hospital dedicated to cancer treatment."
  },
  {
    id: 6,
    name: "Charité Berlin",
    country: "Germany",
    specialist: "Orthopedics",
    rating: "4.6",
    address: "Berlin, Germany",
    phone: "+49-30-450-50",
    img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600",
    desc: "Europe’s largest university hospital for bone and joint care."
  },
  {
    id: 7,
    name: "Apollo Hospitals",
    country: "India",
    specialist: "Gastroenterology",
    rating: "4.5",
    address: "Chennai, India",
    phone: "+91-44-2829-3333",
    img: "https://plus.unsplash.com/premium_photo-1681993033519-79774a38779b?q=80&w=600",
    desc: "Leader in digestive disease management and liver transplants."
  },
  {
    id: 8,
    name: "Great Ormond Street Hospital",
    country: "UK",
    specialist: "Pediatrics",
    rating: "4.9",
    address: "London, UK",
    phone: "+44-20-7405-9200",
    img: "https://images.unsplash.com/photo-1538108197017-c1a966b9339d?q=80&w=600",
    desc: "Global leader in pediatric care."
  },
  {
    id: 9,
    name: "Cedars-Sinai",
    country: "USA",
    specialist: "Cardiology",
    rating: "4.7",
    address: "Los Angeles, USA",
    phone: "+1-310-423-3277",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600",
    desc: "Top-rated heart institute on the US West Coast."
  },
  {
    id: 10,
    name: "Gleneagles Hospital",
    country: "Singapore",
    specialist: "Gastroenterology",
    rating: "4.6",
    address: "Singapore",
    phone: "+65-6473-7222",
    img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=600",
    desc: "Renowned for liver transplants and abdominal surgeries."
  },
  {
    id: 11,
    name: "Fortis Memorial",
    country: "India",
    specialist: "Neurology",
    rating: "4.4",
    address: "Gurgaon, India",
    phone: "+91-124-4921-021",
    img: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=600",
    desc: "Comprehensive neuro-rehabilitation and trauma care."
  },
  {
    id: 12,
    name: "Burjeel Hospital",
    country: "UAE",
    specialist: "Orthopedics",
    rating: "4.5",
    address: "Dubai, UAE",
    phone: "+971-4-501-1111",
    img: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=600",
    desc: "Advanced sports medicine and joint reconstruction."
  },
  {
    id: 13,
    name: "Mass General Hospital",
    country: "USA",
    specialist: "Neurology",
    rating: "4.9",
    address: "Boston, USA",
    phone: "+1-617-726-2000",
    img: "https://images.unsplash.com/photo-1511174511135-2426743840ca?q=80&w=600",
    desc: "Harvard-affiliated leader in brain research."
  },
  {
    id: 14,
    name: "King’s College Hospital",
    country: "UK",
    specialist: "Cardiology",
    rating: "4.4",
    address: "London, UK",
    phone: "+44-20-3299-9000",
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600",
    desc: "Premier NHS cardiac emergency facility."
  },
  {
    id: 15,
    name: "Medanta – The Medicity",
    country: "India",
    specialist: "Cardiology",
    rating: "4.7",
    address: "Gurgaon, India",
    phone: "+91-124-4141-414",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600",
    desc: "Large-scale cardiac institute focusing on robotic surgeries."
  },
  {
    id: 16,
    name: "Heidelberg University Hospital",
    country: "Germany",
    specialist: "Oncology",
    rating: "4.8",
    address: "Heidelberg, Germany",
    phone: "+49-6221-56-0",
    img: "https://images.unsplash.com/photo-1533333534819-044701200502?q=80&w=600",
    desc: "Leading center for precision cancer therapy."
  },
  {
    id: 17,
    name: "Raffles Hospital",
    country: "Singapore",
    specialist: "Orthopedics",
    rating: "4.5",
    address: "Singapore",
    phone: "+65-6311-1111",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600",
    desc: "Full-service private hospital for international patients."
  },
  {
    id: 18,
    name: "Aster DM Healthcare",
    country: "UAE",
    specialist: "Pediatrics",
    rating: "4.3",
    address: "Dubai, UAE",
    phone: "+971-4-440-0500",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    desc: "Child-friendly pediatric specialized care."
  },
  {
    id: 19,
    name: "Max Super Specialty Hospital",
    country: "India",
    specialist: "Oncology",
    rating: "4.6",
    address: "Delhi, India",
    phone: "+91-11-2651-5050",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=600",
    desc: "Comprehensive cancer center with advanced radiotherapy."
  },
  {
    id: 20,
    name: "NewYork-Presbyterian Hospital",
    country: "USA",
    specialist: "Gastroenterology",
    rating: "4.8",
    address: "New York, USA",
    phone: "+1-212-305-2500",
    img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600",
    desc: "Ivy-league affiliated digestive health specialist."
  }
];

export const hospitalData = hospitals;
export default hospitals;
