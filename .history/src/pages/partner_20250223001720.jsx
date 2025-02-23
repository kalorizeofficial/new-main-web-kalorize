const Partner = () => {
  const partners = [
    {
      name: "Zoom",
      logo: "/images/partners/zoom.png",
    },
    {
      name: "Adobe Creative Cloud",
      logo: "/images/partners/adobe.png",
    },
    {
      name: "Slack",
      logo: "/images/partners/slack.png",
    },
    {
      name: "Dropbox",
      logo: "/images/partners/dropbox.png",
    },
    {
      name: "Google Drive",
      logo: "/images/partners/gdrive.png",
    },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">
        Partner Kami
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-40 h-40 object-contain transition-shadow duration-200 hover:shadow-xl rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
