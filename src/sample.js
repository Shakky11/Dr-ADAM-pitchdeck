import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const fundingData = [
  { name: "Infra & Hosting", value: 60 },
  { name: "Hiring", value: 40 },
];

const marketData = [
  { name: "India HealthTech (₹15B)", value: 15 },
  { name: "Unserved Population (1B)", value: 1000 },
  { name: "Rural Clinics Without Access (%)", value: 65 },
];

const COLORS = ["#00BFFF", "#0088FE", "#00C49F"];

export default function PitchDeck() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <header className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-16 text-center px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="absolute inset-0 bg-opacity-20 bg-black"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Dr. ADAM by InnoSolve Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl italic text-blue-100">
            The Future of Clinical AI
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
          🩺 Our Product
        </h2>
        <p className="text-base sm:text-lg">
          Dr. ADAM is an AI-powered clinical assistant designed for fresh MBBS
          doctors, interns, and patients in Tier-2/3 cities. It provides
          real-time diagnosis, red flag alerts, drug interactions, and NEET PG
          support with clinical reasoning. Built for India, self-hosted for
          privacy, and zero per-query cost.
        </p>
      </section>

      <section className="bg-gradient-to-br from-red-50 to-red-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🚨 Problem</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li>
              Fresh MBBS doctors and interns face decision-making challenges in
              real-time.
            </li>
            <li>
              Lack of accessible, structured, and up-to-date treatment
              protocols.
            </li>
            <li>Overload of non-contextual information on the internet.</li>
            <li>
              Patients seek quick, affordable clinical guidance before visiting
              doctors.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
          💡 Solution{" "}
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li>Symptom analysis & differential diagnosis</li>
            <li>Drug interaction checks</li>
            <li>Red flag identification</li>
            <li>Treatment & investigation recommendations</li>
            <li>AI-powered learning support for NEET PG</li>
            <li>
              Language-aware and region-specific support for India and beyond
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center gap-2">
          🎯 Unique Value Proposition{" "}
        </h2>
        <p className="text-base sm:text-lg mb-4 font-semibold">
          “Your AI Clinical Ally for Smarter Decisions & Safer Care.”
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
          <li>
            Combines clinical AI, language detection, and doctor-level reasoning
          </li>
          <li>
            Offline & real-time mode with zero per-query cost (via self-hosted
            AI)
          </li>
          <li>
            AI-backed NEET PG preparation with clinical case-based learning
          </li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
          👥 Customer Segments{" "}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">B2C:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-base sm:text-lg">
              <li>MBBS students, interns, NEET PG aspirants</li>
              <li>Young general practitioners</li>
              <li>Patients in Tier-2/3 cities (as a self-help guide)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">B2B:</p>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
              <li>Medical colleges</li>
              <li>Clinics, hospitals, telemedicine apps</li>
              <li>Edtech platforms (for NEET/medical learning)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-2">
          💰 Revenue Streams{" "}
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold mb-2">Freemium model (B2C):</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-base sm:text-lg">
              <li>Free: Basic diagnosis and learning</li>
              <li>
                Paid: Pro diagnosis with case-based AI, NEET PG tutor mode,
                priority answers
              </li>
            </ul>
            <p className="font-semibold mb-2">Subscriptions:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-base sm:text-lg">
              <li>₹199–₹499/month for students</li>
              <li>₹999/month for clinics and pros</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">B2B licensing:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-base sm:text-lg">
              <li>API integration for clinics, hospitals, edtech</li>
              <li>White-labeled assistant for institutions</li>
            </ul>
            <p className="font-semibold mb-2">Consultation affiliate:</p>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
              <li>
                Redirect users to verified telehealth services with commission
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 flex items-center gap-2">
          📢 Channels{" "}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
          <li>Mobile app (Android/iOS)</li>
          <li>Web-based AI portal</li>
          <li>Partner clinics and edtech platforms</li>
          <li>YouTube, Instagram Reels (case-based clinical content)</li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🧱 Cost Structure{" "}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
          <li>
            GPU server costs (RunPod/Hetzner initially, later shift to
            on-premise)
          </li>
          <li>LLM fine-tuning & inference infrastructure</li>
          <li>Team (medical content creators, developers, ML engineers)</li>
          <li>Compliance & data privacy (HIPAA/GDPR/NDHM)</li>
          <li>Marketing and community building</li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-cyan-50 to-cyan-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-800 mb-6 flex items-center gap-2">
          📊 Key Metrics{" "}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
          <li>MAUs (Monthly Active Users)</li>
          <li>Query volume per day</li>
          <li>NEET PG mock test completions</li>
          <li>Subscription conversions</li>
          <li>Doctor feedback accuracy ratings</li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-green-50 to-green-100 py-14 px-6 sm:px-10 lg:px-14 rounded-xl shadow-md max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          🤝 Key Partners
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li>RunPod/Hetzner (for hosting)</li>
            <li>Medical colleges (early adopters)</li>
            <li>Edtech players (distribution)</li>
            <li>Doctors & specialists (validation)</li>
            <li>Regulatory advisors (NDHM alignment)</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
          Market Opportunity
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={marketData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                dataKey="value"
              >
                {marketData.map((entry, index) => (
                  <Cell
                    key={`cell-m-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 text-center mb-12">
            Roadmap
          </h2>
          <div className="relative flex flex-col items-center">
            <div className="absolute w-1 bg-blue-300 h-full left-1/2 transform -translate-x-1/2 z-0"></div>
            <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-lg shadow mb-10 sm:mb-14 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900">Launch Phase</h3>
              <p className="text-sm text-gray-700 mt-2">
                WhatsApp & Android App
              </p>
              <p className="text-sm text-gray-700">Initial Disease Modules</p>
            </div>
            <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-lg shadow mb-10 sm:mb-14 border-l-4 border-blue-500 self-end">
              <h3 className="text-xl font-bold text-blue-900">
                Integration Phase
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Hospital Integrations
              </p>
              <p className="text-sm text-gray-700">Vitals Monitoring Sync</p>
            </div>
            <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-lg shadow mb-10 sm:mb-14 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900">
                Expansion Phase
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
          Financials & Ask
        </h2>
        <p className="text-base sm:text-lg mb-4">
          Grant Ask: ₹30 Lakhs (~$36K) for Product Development & Public
          Deployment
        </p>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={fundingData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                dataKey="value"
              >
                {fundingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
          👨‍⚕️ Our Team
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
          <li>
            <strong>Dr. Debanjan Barman</strong> – The Product Guy
          </li>
          <li>
            <strong>Dr. Sayak Barman</strong> – The Marketing Guy
          </li>
          <li>
            <strong>Prabhat Singh</strong> – Our Tech Advisor
          </li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
          Contact
        </h2>
        <p className="text-base sm:text-lg">
          📩 contact@innosolvesolutions.org
          <br />
          🌐 www.innosolvesolutions.org
          <br />
          📍 India
        </p>
        <p className="mt-4 text-blue-700 font-semibold text-base sm:text-lg">
          Join us in transforming the future of AI-powered healthcare.
        </p>
      </section>

      <footer className="bg-blue-900 text-white py-4 text-center text-sm sm:text-base">
        &copy; 2025 InnoSolve Solutions Pvt. Ltd.
      </footer>
    </div>
  );

}