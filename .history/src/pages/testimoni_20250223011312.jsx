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

        <div className="relative h-[400px]">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div
            className="w-full h-full relative"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {testimonials.map((testimonial, index) => {
              const rotation = (index - currentSlide) * 45;
              const translateZ = rotation === 0 ? 200 : 0;
              const opacity = rotation === 0 ? 1 : 0.5;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-[320px] transition-all duration-500"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                    opacity,
                  }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg">
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
