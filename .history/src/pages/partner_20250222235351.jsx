function Partner() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">
        Partner Kami
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-xl p-8 w-40 h-40 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {partner.isNew && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  New!
                </span>
              )}

              {partner.hasIndicator && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partner;
