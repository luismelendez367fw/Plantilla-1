import { siteConfig } from "@/config/site";

export function whatsappScheduleUrl(message) {
  const { phone, whatsapp } = siteConfig.contact;
  if (message && phone) {
    const digits = phone.replace(/\D/g, "");
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  }
  return whatsapp;
}

export function serviceSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
