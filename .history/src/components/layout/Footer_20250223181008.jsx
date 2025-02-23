import React from "react";
import { Instagram, Phone, Linkedin, Send, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Phone, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Send, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-4">
            <h2 className="text-[#F94917] text-2xl font-bold mb-4">KALORIZE</h2>
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
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Makanan</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Untuk Personal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Untuk Event
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Untuk Perusahaan
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Produk</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Chatbot
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Enterprise Management System
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Gym App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Membership Gym Tracker
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Bermitra</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Gym
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Katering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Rumah Sakit
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Tentang Kami</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Lainnya</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Trengginas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © Copyright 2025 PT Pilihan Rekomendasi Unggul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
