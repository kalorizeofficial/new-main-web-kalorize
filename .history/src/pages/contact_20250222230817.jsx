function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
