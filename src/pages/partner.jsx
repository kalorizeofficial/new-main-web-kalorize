const Partner = () => {
  const partners = [
    { name: "Partner 1" },
    { name: "Partner 2" },
    { name: "Partner 3" },
    { name: "Partner 4" },
    { name: "Partner 5" },
  ];

  const DecorativeCircle = ({ className }) => (
    <div
      className={`absolute w-3 h-3 rounded-full bg-[#2A85FF] opacity-100 ${className}`}
    />
  );

  return (
    <section className="pt-[100px] md:pt-[164px] pb-24 relative">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Decorative circles - hidden on mobile */}
        <DecorativeCircle className="hidden md:block top-80 left-72" />
        <DecorativeCircle className="hidden md:block bottom-40 right-72" />

        <h2 className="text-[20px] md:text-[24px] font-inter font-extrabold leading-[100%] text-center text-[#565656] mb-8 md:mb-12">
          Partner Kami
        </h2>

        <div className="w-full max-w-8xl mx-auto overflow-x-auto">
          <div className="w-fit mx-auto flex justify-center items-center gap-4 md:gap-20 md:flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative py-2 md:py-4 flex-shrink-0 w-[60px] h-[60px] md:w-[140px] md:h-[140px] bg-gray-100 rounded-[15px] md:rounded-[25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
