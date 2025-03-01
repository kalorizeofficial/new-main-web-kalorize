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
      <section className="max-w-5xl mx-4 md:mx-auto bg-[#FFF7F2] rounded-2xl px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[20px] md:text-[24px] font-inter font-extrabold text-center text-[#1F1C14] mb-0">
            Dipercaya oleh Ribuan Pelanggan di Indonesia
          </h2>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-1 md:p-1.5 shadow-md hover:bg-opacity-90 z-20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-[#413D66] rounded-full p-1 md:p-1.5 shadow-md hover:bg-opacity-90 z-20"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            <div className="overflow-hidden">
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="flex gap-2 items-center justify-center">
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
                        className="absolute transition-all duration-500 w-[280px]"
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
                        <div className="bg-white rounded-lg px-5 py-5 shadow-lg text-center">
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
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
