function Blog() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Blog Post Title 1</h3>
            <p className="mt-2 text-gray-600">
              Short description of the blog post...
            </p>
            <button className="mt-4 text-blue-600">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Blog Post Title 2</h3>
            <p className="mt-2 text-gray-600">
              Short description of the blog post...
            </p>
            <button className="mt-4 text-blue-600">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Blog Post Title 3</h3>
            <p className="mt-2 text-gray-600">
              Short description of the blog post...
            </p>
            <button className="mt-4 text-blue-600">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
