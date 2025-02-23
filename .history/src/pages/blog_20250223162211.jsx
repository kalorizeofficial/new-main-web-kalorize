// Komponen Blog: Menampilkan carousel blog posts dengan navigasi
// dan tombol eksplorasi. Komponen ini menggunakan state untuk
// mengatur slide yang aktif.

import React, { useState } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

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

  // Calculate the number of slides needed (1 slide = 3 cards)
  const totalSlides = Math.ceil(blogPosts.length / 3);

  // Fungsi untuk berpindah ke slide berikutnya
  // Menggunakan modulo untuk kembali ke awal jika sudah di slide terakhir
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  // Menggunakan modulo dan penambahan length untuk handling negative index
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Fungsi untuk langsung berpindah ke slide tertentu
  // Digunakan oleh navigation dots
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-white">
      {/* Container utama dengan max-width dan centering */}
      <div className="max-w-5xl mx-auto rounded-2xl">
        {/* Judul section */}
        <h2 className="text-[24px] font-bold text-center text-[#1F1C14] pt-8 mb-12">
          Blog
        </h2>

        <div className="relative px-0">
          {/* Carousel container with overflow hidden */}
          <div className="overflow-hidden">
            {/* Sliding container */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group posts into sets of 3 */}
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div key={slideIndex} className="flex gap-5 min-w-full">
                  {blogPosts
                    .slice(slideIndex * 3, (slideIndex + 1) * 3)
                    .map((post, index) => (
                      <div
                        key={slideIndex * 3 + index}
                        className="w-[330px] h-[500px] flex-none bg-white rounded-lg overflow-hidden shadow-md p-5"
                      >
                        <div className="h-[40%] relative rounded-lg overflow-hidden">
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
                            <h3 className="mt-2 text-lg font-semibold text-gray-800">
                              {post.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi dot dan arrow */}
          <div className="flex justify-between items-center my-8">
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-red-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 text-gray-800"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-red-500 rounded-full p-2 shadow-md hover:bg-red-600 text-white"
              >
                <ChevronRight className="w-6 h-6" />
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
