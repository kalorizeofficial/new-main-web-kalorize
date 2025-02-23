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
    <section className="py-[164px] px-4">
      <h2 className="text-[32px] font-extrabold leading-[100%] text-center text-[#565656] mb-4">
        Partner Kami
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="relative">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-[150px] h-[150px] min-w-full min-h-full object-contain transition-shadow duration-200 hover:shadow-xl rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
