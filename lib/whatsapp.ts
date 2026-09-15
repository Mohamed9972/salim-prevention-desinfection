import { whatsappLink } from "./site";

export function buildQuoteMessage(
  locale: "fr" | "ar",
  data: {
    name: string;
    phone: string;
    pest: string;
    place: string;
    address: string;
    message: string;
  },
) {
  if (locale === "ar") {
    const lines = [
      "مرحباً، أريد طلب تدخل لمكافحة الحشرات.",
      `الاسم: ${data.name}`,
      `الهاتف: ${data.phone}`,
      `نوع الحشرة: ${data.pest}`,
      `نوع المكان: ${data.place}`,
      `المنطقة: ${data.address}`,
    ];
    if (data.message.trim()) lines.push(`تفاصيل: ${data.message.trim()}`);
    return whatsappLink(lines.join("\n"));
  }
  const lines = [
    "Bonjour, je souhaite demander une intervention.",
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone}`,
    `Type de nuisible : ${data.pest}`,
    `Type de local : ${data.place}`,
    `Zone : ${data.address}`,
  ];
  if (data.message.trim()) lines.push(`Détails : ${data.message.trim()}`);
  return whatsappLink(lines.join("\n"));
}
