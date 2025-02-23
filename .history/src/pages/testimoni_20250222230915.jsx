function Testimoni() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="italic">"Great service! Highly recommended!"</p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="italic">"Amazing experience working with them!"</p>
            <p className="mt-4 font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
