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

  const DecorativeCircle = ({ className }) => (
    <div
      className={`absolute w-6 h-6 rounded-full bg-[#2A85FF] opacity-50 ${className}`}
    />
  );

  return (
    <section className="pt-[164px] pb-20 px-4 relative">
      {/* Decorative circles with custom positioning */}
      <DecorativeCircle className="top-40 left-20" />
      <DecorativeCircle className="bottom-20 right-32" />
      <DecorativeCircle className="top-60 right-20" />

      <h2 className="text-[24px] font-inter font-extrabold leading-[100%] text-center text-[#565656] mb-12">
        Partner Kami
      </h2>

      <div className="max-w-8xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="relative py-4">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-[140px] h-[140px] min-w-full min-h-full object-contain transition-shadow duration-200 hover:shadow-xl rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
