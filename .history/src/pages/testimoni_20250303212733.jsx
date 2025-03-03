import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Andrew",
      role: "Wiraswasta",
      image: "/images/testerProfile/34px.png",
      content:
        "Sebagai seseorang yang sibuk, sehingga mempercayai saya dalam mengkoordinasi menu makan yang sehat tanpa harus bingung.",
    },
    {
      name: "Darlene Robertson",
      role: "Mahasiswa",
      image: "/images/testerProfile/14px.png",
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
    <section className="py-8 md:py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <section className="max-w-5xl mx-auto bg-[#FFF7F2] rounded-2xl py-6 md:py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[20px] md:text-[24px] font-inter font-extrabold text-center text-[#1F1C14] mb-0">
              Dipercaya oleh Ribuan Pelanggan di Indonesia
            </h2>

            <div className="relative">
              {/* Desktop navigation buttons - hidden on mobile */}
              <button
                onClick={prevSlide}
                className="hidden md:block absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-1 md:p-1.5 shadow-md hover:bg-opacity-90 z-20"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="hidden md:block absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-1 md:p-1.5 shadow-md hover:bg-opacity-90 z-20"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>

              <div className="overflow-hidden">
                <div className="flex items-center justify-center min-h-[350px] md:min-h-[400px]">
                  <div className="relative w-full md:flex md:gap-4 md:items-center md:justify-center">
                    {/* Mobile wrapper - modified for centering */}
                    <div
                      className="flex md:hidden transition-transform duration-300 ease-in-out w-full"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 flex justify-center items-center px-4"
                        >
                          <div className="bg-white rounded-lg px-3 py-4 shadow-lg text-center w-full max-w-[280px]">
                            <div className="flex flex-col items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-[48px] h-[48px] rounded-full object-cover mb-2"
                              />
                              <h3 className="font-inter font-extrabold text-[#1F1C14] text-base mb-1">
                                {testimonial.name}
                              </h3>
                              <p className="text-gray-600 text-xs font-inter mb-4">
                                {testimonial.role}
                              </p>
                              <p className="text-[#1F1C14B2] font-inter text-sm leading-relaxed">
                                {testimonial.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop view */}
                    {testimonials.map((testimonial, index) => {
                      let position = index - currentSlide;
                      if (position < 0) position += testimonials.length;

                      const isActive = index === currentSlide;
                      const isPrev = position === testimonials.length - 1;
                      const isNext = position === 1;

                      return (
                        <div
                          key={index}
                          className="hidden md:block md:absolute transition-all duration-500 w-[280px]"
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
                          <div className="bg-white rounded-lg px-3 md:px-5 py-4 md:py-5 shadow-lg text-center">
                            <div className="flex flex-col items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-[48px] h-[48px] rounded-full object-cover mb-2"
                              />
                              <h3 className="font-inter font-extrabold text-[#1F1C14] text-base mb-1">
                                {testimonial.name}
                              </h3>
                              <p className="text-gray-600 text-xs font-inter mb-4">
                                {testimonial.role}
                              </p>
                              <p className="text-[#1F1C14B2] font-inter text-sm leading-relaxed">
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

              {/* Mobile navigation buttons */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="bg-[#413D66] rounded-full p-1.5 shadow-md hover:bg-opacity-90"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#413D66] rounded-full p-1.5 shadow-md hover:bg-opacity-90"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
