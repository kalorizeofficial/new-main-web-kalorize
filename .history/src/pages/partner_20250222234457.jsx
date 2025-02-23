function Partner() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold"> 1</h3>
            <p className="mt-2">Description of partnership</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Partner 2</h3>
            <p className="mt-2">Description of partnership</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Partner 3</h3>
            <p className="mt-2">Description of partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
