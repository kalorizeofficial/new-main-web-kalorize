import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Andrew",
      role: "Wiraswasta",
      image: "/images/testerProfile/24px.png",
      content:
        "Sebagai seseorang yang sibuk, sehingga mempercayai saya dalam mengkoordinasi menu makan yang sehat tanpa harus bingung.",
    },
    {
      name: "Darlene Robertson",
      role: "Mahasiswa",
      image: "/images/testerProfile/24px.png",
      content:
        "Saya tidak pernah menyangka bisa mendapatkan sebuah yang bagus, bahkan dapat membaca dengan lebih efisien dengan perangkat dan maksimal.",
    },
    {
      name: "John Doe",
      role: "PetaniSPM",
      image: "/images/testerProfile/24px.png",
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

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-2 shadow-md hover:bg-opacity-90 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-2 shadow-md hover:bg-opacity-90 z-20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="overflow-hidden">
            <div className="flex items-center justify-center min-h-[500px]">
              <div className="flex gap-3 items-center justify-center">
                {testimonials.map((testimonial, index) => {
                  let position = index - currentSlide;
                  if (position < 0) {
                    position += testimonials.length;
                  }

                  const isActive = index === currentSlide;
                  const isPrev = position === testimonials.length - 1;
                  const isNext = position === 1;

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-500 w-[320px]"
                      style={{
                        transform: `translateX(${
                          position === 0
                            ? "0%"
                            : position === 1
                            ? "100%"
                            : position === testimonials.length - 1
                            ? "-100%"
                            : "200%"
                        }) scale(${isActive ? 1 : 0.8})`,
                        opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0,
                        zIndex: isActive ? 10 : 0,
                      }}
                    >
                      <div className="bg-white rounded-lg px-6 py-8 shadow-lg text-center">
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-[63px] h-[63px] rounded-full object-cover mb-[3px]"
                          />
                          <h3 className="font-semibold text-gray-800 text-lg mb-[3px]">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-medium mb-6">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {testimonial.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
