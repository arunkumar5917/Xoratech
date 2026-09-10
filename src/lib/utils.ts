import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const APP_NAME = "XORA Technologies";
export const APP_TAGLINE = "Innovate | Build | Grow";
export const WEBSITE = "www.xoratechnologies.in";
export const WEBSITE_URL = "https://www.xoratechnologies.in";
export const PHONE = "9894279003";
export const PHONE_DISPLAY = "+91 98942 79003";
export const WHATSAPP_LINK = "https://wa.me/919894279003";
export const TEL_LINK = "tel:+919894279003";
export const LINKEDIN_URL = "https://www.linkedin.com/in/xoratech";
export const INSTAGRAM_URL = "https://www.instagram.com/xoratechnologies?stkn=ajh1eXp2b3FtdHI=";

export const ADDRESS = "Bengaluru, Karnataka, India";
export const MAPS_QUERY = "XORA Technologies Bengaluru";
export const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

export function generateApplicationId(prefix = "XORA") {
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  const numeric = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("");
  return `${prefix}-${randomPart}${numeric}`;
}
