// Komponen Blog: Menampilkan carousel blog posts dengan navigasi
// dan tombol eksplorasi. Komponen ini menggunakan state untuk
// mengatur slide yang aktif.

import React, { useState } from "react";
import { Clock, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const Blog = () => {
  // State untuk mengontrol slide yang sedang aktif
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data blog posts yang akan ditampilkan dalam carousel
  const blogPosts = [
    {
      image: "/images/blog/blog1.jpeg",
      category: "Design",
      title: "Figma UI UX Design..",
      description:
        "Bagaimana tips dan trik menguasai figma untuk UI UX Design hanya dengan hitungan jam saja",
      readTime: "3 mins",
    },
    {
      image: "/images/blog/blog2.jpeg",
      category: "Other",
      title: "Cara Mendapatkan Kerja",
      description:
        "Beberapa orang pada saat ini mulai merasakan kesulitannya dalam mencari kerja",
      readTime: "2 mins",
    },
    {
      image: "/images/blog/blog3.jpeg",
      category: "Design",
      title: "Membangun User Interface.",
      description:
        "Belajarlah bagaimana membangun ui ux yang benar berdasarkan panduan yang ada",
      readTime: "2 mins",
    },
  ];

  // Fungsi untuk berpindah ke slide berikutnya
  // Menggunakan modulo untuk kembali ke awal jika sudah di slide terakhir
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  // Menggunakan modulo dan penambahan length untuk handling negative index
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  // Fungsi untuk langsung berpindah ke slide tertentu
  // Digunakan oleh navigation dots
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white px-4 md:px-0">
      <div className="max-w-5xl mx-auto rounded-2xl">
        <h2 className="text-[20px] md:text-[24px] font-inter font-extrabold text-center text-[#413D66] pt-8 mb-8 md:mb-12">
          Blog
        </h2>

        <div className="relative">
          {/* Carousel blog posts */}
          <div className="flex overflow-x-auto gap-5 md:flex-row">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`min-w-[280px] md:w-[330px] h-auto md:h-[500px] flex-none bg-white rounded-lg overflow-hidden shadow-md transition-opacity duration-300 p-4 md:p-5 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-50 md:opacity-100"
                }`}
              >
                <div className="h-[200px] md:h-[45%] relative rounded-lg overflow-hidden pb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-md px-2 py-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>

                <div className="h-[60%]">
                  <div className="mt-5">
                    <span className="text-purple-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <h3 className="mt-2 text-xl font-inter font-semibold text-[#101828]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-[#667085] font-inter text-sm line-clamp-8">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots and arrows */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 my-8">
            <div className="flex gap-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-red-500"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 text-gray-800"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-red-500 rounded-full p-2 shadow-md hover:bg-red-600 text-white"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Tombol Explore All */}
        <div className="text-center pb-8">
          <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors">
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
