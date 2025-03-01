import React from "react";

function Contact() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <section className="max-w-5xl mx-auto bg-[#FFF7F2] rounded-2xl px-4 md:px-8 py-8 mb-8 md:mb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-16">
            {/* Left side - Stacked images */}
            <div className="relative -mb-0 md:-mb-24 scale-100 md:scale-100">
              {/* Circle background */}
              <div className="bg-[#F94917] rounded-full w-[350px] md:w-[400px] h-[350px] md:h-[400px] translate-y-0" />

              {/* Phone image positioned on top of circle */}
              <img
                src="/phone.png" // Replace with your actual image path
                alt="Kalorize App"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[234px] md:w-[240px]"
              />
            </div>

            {/* Right side - Content */}
            <div
              className="flex flex-col space-y-4 md:space-y-6 max-w-[300px] md:max-w-[400px] text-center md:text-left -mt-16 md:mt-0 
                          md:bg-transparent bg-[#FFF7F2] rounded-lg p-4 relative z-10"
            >
              <h1 className="text-xl md:text-2xl font-extrabold text-[#413D66] leading-[1.4] font-inter">
                Penuhi Kebutuhan Gizi Kamu dengan Kalorize
              </h1>
              <p className="text-xs md:text-sm font-bold text-[#F94917] leading-normal font-inter">
                Pilihan Sehat, Rekomendasi Tepat
              </p>
              <button className="bg-[#413D66] text-white rounded-[30px] py-[15px] px-[30px] flex items-center justify-center gap-1 mx-auto md:mx-0 hover:bg-[#363156] transition-colors">
                <svg
                  width="50"
                  height="30"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5834 7.35111C35.2634 3.02969 29.511 0.662109 23.3891 0.662109C10.7755 0.662109 0.495224 10.891 0.495224 23.4415C0.495224 27.4641 1.5579 31.3717 3.54466 34.8197L0.31041 46.6346L12.4388 43.4625C15.7886 45.2784 19.5542 46.2438 23.3891 46.2438C36.0026 46.2438 46.2829 36.015 46.2829 23.4645C46.2829 17.3731 43.9034 11.6495 39.5834 7.35111ZM23.3891 42.3821C19.97 42.3821 16.6202 41.4627 13.6863 39.7387L12.9933 39.325L5.78553 41.2099L7.70297 34.222L7.24094 33.5095C5.34659 30.4983 4.33011 27.0043 4.33011 23.4415C4.33011 13.0057 12.8778 4.50081 23.366 4.50081C28.4483 4.50081 33.2304 6.47763 36.8112 10.0635C40.4151 13.6493 42.3787 18.4075 42.3787 23.4645C42.4249 33.9002 33.8773 42.3821 23.3891 42.3821ZM33.8311 28.2226C33.2535 27.9468 30.4351 26.5676 29.9269 26.3607C29.3955 26.1768 29.0259 26.0849 28.6332 26.6366C28.2404 27.2112 27.1546 28.4985 26.8312 28.8662C26.5078 29.257 26.1613 29.303 25.5837 29.0042C25.0062 28.7283 23.158 28.1077 20.9865 26.1768C19.2769 24.6598 18.145 22.7979 17.7984 22.2232C17.475 21.6486 17.7522 21.3497 18.0526 21.0509C18.3067 20.7981 18.6301 20.3843 18.9073 20.0625C19.1845 19.7407 19.3001 19.4878 19.4849 19.1201C19.6697 18.7293 19.5773 18.4075 19.4387 18.1317C19.3001 17.8558 18.145 15.0515 17.6829 13.9022C17.2209 12.7988 16.7358 12.9368 16.3892 12.9138C16.0427 12.9138 15.6731 12.9138 15.2803 12.9138C14.8876 12.9138 14.287 13.0517 13.7556 13.6264C13.2474 14.201 11.7689 15.5802 11.7689 18.3845C11.7689 21.1888 13.8249 23.9012 14.1022 24.269C14.3794 24.6598 18.145 30.4063 23.8742 32.8658C25.2372 33.4635 26.2999 33.8083 27.1315 34.0611C28.4945 34.4979 29.742 34.4289 30.7354 34.291C31.8443 34.1301 34.1314 32.9118 34.5934 31.5786C35.0785 30.2454 35.0786 29.1191 34.9168 28.8662C34.7551 28.6134 34.4086 28.4985 33.8311 28.2226Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xl font-bold">Hubungi Kami</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
