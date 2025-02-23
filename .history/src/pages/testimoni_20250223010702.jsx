import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Andrew",
      role: "Wiraswasta",
      image: "/api/placeholder/64/64",
      content:
        "Sebagai seseorang yang sibuk, sehingga mempercayai saya dalam mengkoordinasi menu makan yang sehat tanpa harus bingung.",
    },
    {
      name: "Darlene Robertson",
      role: "Mahasiswa",
      image: "/api/placeholder/64/64",
      content:
        "Saya tidak pernah menyangka bisa mendapatkan sebuah yang bagus, bahkan dapat membaca dengan lebih efisien dengan perangkat dan maksimal.",
    },
    {
      name: "John Doe",
      role: "PetaniSPM",
      image: "/api/placeholder/64/64",
      content:
        "Kamilah benar benar membantu saya memilih makanan yang sesuai dengan kebutuhan gizi saya.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 bg-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Dipercaya oleh Ribuan Pelanggan di Indonesia
        </h2>

        <div className="relative overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center items-center">
            {testimonials.map((testimonial, index) => {
              const isPrevious =
                (currentSlide - 1 + testimonials.length) %
                  testimonials.length ===
                index;
              const isNext = (currentSlide + 1) % testimonials.length === index;
              const isCurrent = currentSlide === index;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    isCurrent
                      ? "opacity-100 z-20 translate-x-0 scale-100"
                      : isPrevious
                      ? "opacity-50 z-10 -translate-x-[calc(100%+2rem)] scale-90"
                      : isNext
                      ? "opacity-50 z-10 translate-x-[calc(100%+2rem)] scale-90"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm w-[400px]">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
