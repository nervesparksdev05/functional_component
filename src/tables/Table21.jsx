export default function Table21() {
  const data = [
    {
      sr: 1,
      websiteLink: 'www.apollo.io',
      title: 'Apollo.io - Outbound, Inbound & Automation',
      description: 'Accelerate B2B sales with Apollo.io—an AI sales platform for prospecting, lead gen, and deal execution. Close more deals, faster, with smart data.',
    },
  ];

  return (
    <div className="w-[833px] h-[136px]">
      <table className="w-full h-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-16">
              Sr.
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-48">
              Website link
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-56">
              Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sr} className="bg-white">
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900 align-top">
                {item.sr}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900 align-top">
                {item.websiteLink}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900 align-top">
                {item.title}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 align-top leading-relaxed">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}