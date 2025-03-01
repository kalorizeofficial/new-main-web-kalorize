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
      className={`absolute w-3 h-3 rounded-full bg-[#2A85FF] opacity-100 ${className}`}
    />
  );

  return (
    <section className="pt-[100px] md:pt-[164px] pb-8 px-4 relative">
      {/* Decorative circles - hidden on mobile */}
      <DecorativeCircle className="hidden md:block top-80 left-72" />
      <DecorativeCircle className="hidden md:block bottom-8 right-72" />

      <h2 className="text-[20px] md:text-[24px] font-inter font-extrabold leading-[100%] text-center text-[#565656] mb-8 md:mb-12">
        Partner Kami
      </h2>

      <div className="max-w-8xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="relative py-2 md:py-4">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-full min-h-full object-contain transition-shadow duration-200 hover:shadow-xl rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
