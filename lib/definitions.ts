export type INavlink = {
  id: number;
  name: string;
  href: string;
};

export type IAccountInfo = {
  id: number;
  label: string;
  input: string;
  icon: () => JSX.Element;
};

export type ITestimonial = {
  id: number;
  name: string;
  text: string;
  src: string;
};

export type IPricing = {
  id: number;
  title: string;
  price: string;
  isRecommended: boolean;
  features: { id: number; title: string; isActive: boolean }[];
  comment: string;
};

export type IFooterSocial = {
  id: number;
  title: string;
  icon: () => JSX.Element;
};
