import React from "react";
import {
  Instagram,
  Phone,
  Linkedin,
  Send,
  Mail,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/kalorize" },
    { icon: Facebook, href: "https://facebook.com/kalorize" },
    { icon: Twitter, href: "https://twitter.com/kalorize" },
    { icon: Youtube, href: "https://youtube.com/kalorize" },
    { icon: Linkedin, href: "https://linkedin.com/company/kalorize" },
    { icon: Send, href: "https://t.me/kalorize" },
  ];

  const navigationLinks = [
    {
      title: "Makanan",
      links: [
        { name: "Untuk Personal", href: "/personal" },
        { name: "Untuk Event", href: "/event" },
        { name: "Untuk Perusahaan", href: "/corporate" },
      ],
    },
    {
      title: "Produk",
      links: [
        { name: "Chatbot", href: "/products/chatbot" },
        { name: "Enterprise Management System", href: "/products/ems" },
        { name: "Gym App", href: "/products/gym-app" },
        { name: "Membership Gym Tracker", href: "/products/gym-tracker" },
      ],
    },
    {
      title: "Bermitra",
      links: [
        { name: "Gym", href: "/partners/gym" },
        { name: "Katering", href: "/partners/catering" },
        { name: "Rumah Sakit", href: "/partners/hospital" },
      ],
    },
    {
      title: "Tentang Kami",
      links: [
        { name: "Tentang Kami", href: "/about" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      title: "Lainnya",
      links: [{ name: "Trengginas", href: "/trengginas" }],
    },
  ];

  return (
    <footer className="bg-[#F8F8F8] py-6 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-[#F94917]">KALORIZE</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kalorize adalah platform rekomendasi makanan yang menyediakan
              solusi makanan sesuai dengan kebutuhan dan preferensi gizi
              pengguna.
            </p>
            <address className="text-sm text-gray-600 not-italic leading-relaxed">
              Bandung Techno Park, Gedung D, Lt 2<br />
              Jl. Telekomunikasi No1, Sukapura, Kec. Dayeuhkolot,
              <br />
              Kabupaten Bandung, Jawa Barat 40257
            </address>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            {navigationLinks.map((section) => (
              <div key={section.title}>
                <h2 className="text-[15px] font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[13px] text-gray-600 hover:text-gray-900"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 shadow-sm"
              >
                <social.icon className="w-4 h-4 text-[#F53838]" />
              </a>
            ))}
          </div>

          {/* Mobile Copyright */}
          <div className="text-xs text-gray-400 pt-4">
            <p>© Copyright 2025</p>
            <p>PT Pilihan Rekomendasi Unggul.</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-10 gap-20">
            {/* Logo and Description */}
            <div className="col-span-4">
              <h2 className="text-[#F94917] text-2xl font-bold mb-4">
                KALORIZE
              </h2>
              <p className="text-gray-600 mb-8">
                Kalorize adalah platform rekomendasi makanan yang menyediakan
                solusi makanan sesuai dengan kebutuhan dan preferensi gizi
                pengguna.
              </p>

              <div className="mb-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bandung Techno Park, Gedung D, Lt. 2
                  <br />
                  Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Kabupaten
                  <br />
                  Bandung, Jawa Barat 40257
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
                  >
                    <social.icon className="w-5 h-5 text-[#F53838]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Navigation Links */}
            <div className="col-span-6 pl-36">
              <div className="grid grid-cols-2 gap-x-0">
                {navigationLinks.map((section) => (
                  <div key={section.title} className="space-y-8">
                    <div>
                      <h2 className="text-[15px] font-inter font-extrabold text-gray-900 mb-3">
                        {section.title}
                      </h2>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <a
                              href={link.href}
                              className="text-[13px] text-gray-600 font-inter hover:text-gray-900"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
