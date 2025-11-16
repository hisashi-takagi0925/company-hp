interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  founder?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function OrganizationSchema({
  name,
  url,
  logo,
  founder,
  address,
}: OrganizationSchemaProps) {
  const organization: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
  };

  if (logo) {
    organization.logo = logo;
  }

  if (founder) {
    organization.founder = {
      "@type": "Person",
      name: founder,
    };
  }

  if (address) {
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      ...(address.addressRegion && { addressRegion: address.addressRegion }),
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
