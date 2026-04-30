export interface Benefit {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  howTo: string;
  emoji: string;
  color: string;
  accentColor: string;
  textColor: string;
  tag: string;
}

export const benefits: Benefit[] = [
  {
    id: "dental-checkup",
    number: 1,
    title: "Dental Health Check-Up",
    tagline: "Smile big, it's FREE!",
    description:
      "As an enrolled AdDU student, you get access to free dental check-ups through the university's Health Services Unit. Keep those teeth healthy without spending a centavo!",
    howTo: "Head to the AdDU Clinic with your valid student ID. Schedule an appointment at the clinic during operating hours.",
    emoji: "🦷",
    color: "#E8F4FD",
    accentColor: "#2196F3",
    textColor: "#0D47A1",
    tag: "Health",
  },
  {
    id: "dental-cleaning",
    number: 2,
    title: "Dental Cleaning",
    tagline: "Squeaky clean & scholar-ready.",
    description:
      "Beyond check-ups, enrolled AdDU students also enjoy free prophylaxis (dental cleaning) services. Say goodbye to plaque and hello to a fresh, confident smile between classes!",
    howTo: "Visit the AdDU Health Services Unit with your student ID. Ask the dental staff to schedule your prophylaxis session.",
    emoji: "✨",
    color: "#FFF8E1",
    accentColor: "#FFC107",
    textColor: "#E65100",
    tag: "Health",
  },
  {
    id: "gemini-pro",
    number: 3,
    title: "Free Gemini Advanced",
    tagline: "Google AI? Yes, for free.",
    description:
      "Your AdDU Google Workspace account comes with access to Gemini Advanced — Google's most capable AI assistant. Use it for research, writing, brainstorming, and more, powered by Gemini 1.5 Pro.",
    howTo: "Sign in to your AdDU Google Workspace account (@addu.edu.ph). Visit gemini.google.com and your premium access should be automatically activated.",
    emoji: "🤖",
    color: "#E8F5E9",
    accentColor: "#4CAF50",
    textColor: "#1B5E20",
    tag: "AI & Tech",
  },
  {
    id: "canva-pro",
    number: 4,
    title: "Free Canva Pro",
    tagline: "Design like a pro. Budget like a student.",
    description:
      "AdDU students can unlock Canva for Education — which gives you access to Canva Pro features for FREE. Premium templates, background remover, Brand Kit, and all the design tools you need for presentations, posters, and more.",
    howTo: "Go to canva.com/education and sign up or log in with your AdDU student email. Verify your student status to unlock Pro features instantly. (May sometimes need to be added by other existing AdDU Canva pro users, so if you don't see Pro features right away, ask a classmate to share their Canva Pro access with you.)",
    emoji: "🎨",
    color: "#FCE4EC",
    accentColor: "#E91E63",
    textColor: "#880E4F",
    tag: "Design",
  },
  {
    id: "myaddu",
    number: 5,
    title: "MyADDU App",
    tagline: "Your campus in your pocket.",
    description:
      "The official MyADDU mobile app is your all-in-one student portal. View grades, check your schedule, see announcements, access e-services, and stay connected with the university, all from your phone.",
    howTo: "Download MyADDU from the Google Play Store or Apple App Store. Log in using your official AdDU student credentials.",
    emoji: "📱",
    color: "#EDE7F6",
    accentColor: "#673AB7",
    textColor: "#311B92",
    tag: "University App",
  },
  {
    id: "microsoft-365",
    number: 6,
    title: "Free Microsoft 365",
    tagline: "Word, Excel, PowerPoint — all yours.",
    description:
      "Through the Microsoft Student Advantage program, all enrolled AdDU students get the full Microsoft 365 suite for FREE. That's Word, Excel, PowerPoint, Teams, OneDrive (1TB cloud storage), and more,  on up to 5 devices!",
    howTo: "Go to microsoft365.com and sign in with your AdDU student email (@addu.edu.ph). Follow the prompts to activate your free subscription and download the apps.",
    emoji: "💻",
    color: "#E3F2FD",
    accentColor: "#1565C0",
    textColor: "#0D47A1",
    tag: "Productivity",
  },
  {
    id: "counseling",
    number: 7,
    title: "Free Counseling Services",
    tagline: "Your mental health matters here.",
    description:
      "The AdDU Student Development Center (SDC) offers free, confidential counseling services for all enrolled students. Whether you're dealing with academic stress, personal challenges, or just need someone to talk to, the SDC has qualified guidance counselors ready to help.",
    howTo:
      "Get your respective cluster's counseler contact info by emailing cwtc@addu.edu.ph, visit the Student Development Center office on campus during operating hours, or inquire at the Office of Student Affairs (OSA) for scheduling details and appointment procedures. Check the MyADDU app or the official AdDU OSA Facebook page for current schedules.",
    emoji: "💬",
    color: "#F3E5F5",
    accentColor: "#9C27B0",
    textColor: "#4A148C",
    tag: "Wellness",
  },
];
