"use client";

import { useState } from "react";
import { FaCalendarAlt, FaWhatsapp, FaYoutube, FaChevronDown, FaChevronUp, FaLinkedin, FaTiktok } from "react-icons/fa";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index: any) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      title: "🚀 MVP Express con IA (1 hora) - $45 USD",
      details: [
        "✔️ Revisión de idea y definición del alcance.",
        "✔️ Elección de tecnología ideal según el caso de uso (OpenAI, Hugging Face, Anthropic, Groq, etc.).",
        "✔️ Sugerencia de stack para Web (Next.js) o Mobile (Flutter)."
      ],
      paymentLink: "https://www.paypal.com/ncp/payment/879H2FSJQR5V6",
    },
    {
      title: "⚡ Prototipo Funcional en Web o Mobile (3 horas) - $120 USD",
      details: [
        "✔️ Todo lo de la sesión Express.",
        "✔️ Implementación de un MVP con API de IA (OpenAI, Hugging Face, Anthropic o Groq).",
        "✔️ Conexión a un modelo multimodal (texto, imagen o audio).",
        "✔️ Deploy básico en Vercel o Firebase."
      ],
      paymentLink: "https://www.paypal.com/ncp/payment/879H2FSJQR5V6",
    },
    {
      title: "🔥 MVP Completo con IA y Multimodalidad (5 horas) - $180 USD",
      details: [
        "✔️ Todo lo del Prototipo Funcional.",
        "✔️ Integración con 2 APIs de IA (ej: OpenAI + Hugging Face).",
        "✔️ Soporte para imágenes, audio o generación de texto.",
        "✔️ Documentación básica para escalar el MVP.",
        "✔️ Ajustes finales y recomendaciones de optimización.",
        "✔️ Desarrollo con una interfaz atractiva y escalable en Flutter para mobile o React/Next.js para frontend, asegurando una presencia digital sólida para el negocio."
      ],
      paymentLink: "https://www.paypal.com/ncp/payment/879H2FSJQR5V6",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6 transition-all duration-300 ease-in-out">
      {/* Header */}
      <header className="w-full max-w-3xl text-center py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-cyan-400">🚀 Consultoría en IA y MVPs</h1>
        <p className="text-gray-300 mt-2">Crea y valida tu idea con inteligencia artificial en tiempo récord.</p>
      </header>

      {/* Servicios */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-xl animate-slide-in">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Nuestros Servicios</h2>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="p-4 bg-gray-700 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleService(index)}>
                <strong className="text-cyan-200">{service.title}</strong>
                {openService === index ? <FaChevronUp className="text-cyan-400" /> : <FaChevronDown className="text-cyan-400" />}
              </div>
              {openService === index && (
                <div className="mt-2 text-gray-300 text-sm">
                  {service.details.map((detail, i) => (
                    <p key={i} className="mb-1">{detail}</p>
                  ))}
                  <a href={service.paymentLink} className="mt-2 inline-block bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg">Pagar con PayPal</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <div className="flex gap-4 mt-6 animate-fade-in">
        <a href="https://calendly.com/devjaime" className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-600 transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <FaCalendarAlt /> Agendar en Calendly
        </a>
        <a href="https://wa.me/56936418650" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-600 transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> Contactar por WhatsApp
        </a>
      </div>

      {/* Redes Sociales */}
      <div className="flex gap-4 mt-6 animate-fade-in">
        <a href="https://www.linkedin.com/in/devjaime" className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-800 transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.tiktok.com/@devjaime" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-gray-800 transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <FaTiktok /> TikTok
        </a>
      </div>

      {/* Sección de Videos */}
      <div className="w-full max-w-3xl mt-10 animate-slide-in">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
          <FaYoutube className="text-red-500" /> Nuestros Trabajos en Video
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <VideoPlayer url="https://www.youtube.com/watch?v=CHNAl6_7SGM&t=59s" />
          <VideoPlayer url="https://www.youtube.com/watch?v=i7ORxbjkU9c&t=1294s" />
        </div>
      </div>

        {/* Acerca de mí */}
          <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg mt-10 animate-slide-in text-center">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Acerca de mí</h2>
        <p className="text-gray-300 text-lg">
          Soy un apasionado por la inteligencia artificial y el desarrollo de MVPs con IA. Me especializo en convertir ideas innovadoras en productos funcionales en tiempo récord.
        </p>
        <p className="text-gray-400 mt-4">
          Con experiencia en tecnologías como OpenAI, Hugging Face, Anthropic y Groq, ayudo a startups y empresas a desarrollar soluciones con IA y potenciar sus negocios.
        </p>
      </div>
    </div>
  );
}
