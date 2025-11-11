const companyInfo = [
  { label: "会社名", value: "ライチョウテックパートナーズ株式会社" },
  { label: "代表者", value: "高木 悠" },
  { label: "設立", value: "2025年10月1日" },
  { label: "所在地", value: "〒380-0824 長野県長野市南石堂町1423-4" },
  { label: "資本金", value: "1,000,000円" },
  {
    label: "事業内容",
    value:
      "システム導入・運用コンサルティング / Webサービス・SaaSのM&Aアドバイザリー",
  },
];

export function Company() {
  const address = "長野県長野市南石堂町1423-4";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section id="company" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            会社概要
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 overflow-hidden rounded-lg border">
            <table className="w-full">
              <tbody>
                {companyInfo.map((info, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 even:bg-muted/50"
                  >
                    <th className="w-32 px-6 py-4 text-center font-semibold md:w-40">
                      {info.label}
                    </th>
                    <td className="px-6 py-4 text-center">{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="会社所在地"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
