import { BreadcrumbItem } from "@/components/ui/breadcrumbs";

interface BreadcrumbListProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export function BreadcrumbListSchema({
  items,
  baseUrl = "https://raicho-tech.jp",
}: BreadcrumbListProps) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
