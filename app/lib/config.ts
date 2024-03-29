import {
  IconPhone,
  IconPerson,
  IconMail,
  IconCard,
  IconPassword,
  IconLock,
} from "../ui/icons";

export const navlinks = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "Features", href: "/" },
  { id: 2, name: "Pricing", href: "/" },
  { id: 3, name: "Partners", href: "/" },
  { id: 4, name: "About us", href: "/" },
];

export const accountInfo = [
  { id: 0, label: "Username", input: "+1 (456) 453-3456", icon: IconPerson },
  {
    id: 1,
    label: "Phone numbers",
    input: "+1 (456) 453-3456",
    icon: IconPhone,
  },
  { id: 2, label: "Email address", input: "+1 (456) 453-3456", icon: IconMail },
  { id: 3, label: "Credit card", input: "+1 (456) 453-3456", icon: IconCard },
  { id: 4, label: "Password", input: "Kas3345-r32", icon: IconPassword },
  { id: 5, label: "One-time passcode", input: "Kas3345-r32", icon: IconLock },
];

export const testimonials = [
  {
    id: 0,
    name: "Cameron Williamson",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Identity thieves use personal information found online to impersonate their.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 4,
    name: "Darrell Steward",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 5,
    name: "Floyd Miles",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
  {
    id: 7,
    name: "Cody Fisher",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
    src: "/images/cameron-williamson.png",
  },
];

export const pricing = [
  {
    id: 0,
    title: "Start here",
    price: "0",
    isRecommended: false,
    features: [
      { id: 0, title: "Type of threat", isActive: true },
      { id: 1, title: "Online presence", isActive: true },
      { id: 2, title: "Access to all modules", isActive: true },
      { id: 3, title: "Notability", isActive: false },
      { id: 4, title: "Optimize existing websites", isActive: false },
      { id: 5, title: "Search autocomplete", isActive: false },
    ],
    comment: "It’s free so why not",
  },
  {
    id: 1,
    title: "Single",
    price: "56",
    isRecommended: true,
    features: [
      { id: 0, title: "Type of threat", isActive: true },
      { id: 1, title: "Online presence", isActive: true },
      { id: 2, title: "Access to all modules", isActive: true },
      { id: 3, title: "Notability", isActive: true },
      { id: 4, title: "Optimize existing websites", isActive: true },
      { id: 5, title: "Search autocomplete", isActive: true },
    ],
    comment: "Save $23per year",
  },
  {
    id: 2,
    title: "Family",
    price: "124",
    isRecommended: false,
    features: [
      { id: 0, title: "Type of threat", isActive: true },
      { id: 1, title: "Online presence", isActive: true },
      { id: 2, title: "Access to all modules", isActive: true },
      { id: 3, title: "Notability", isActive: true },
      { id: 4, title: "Optimize existing websites", isActive: true },
      { id: 5, title: "Search autocomplete", isActive: true },
    ],
    comment: "Save $23per year",
  },
];
