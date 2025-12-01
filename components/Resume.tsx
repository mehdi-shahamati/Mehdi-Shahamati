import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl max-w-[21cm] mx-auto min-h-[29.7cm] relative flex flex-col md:flex-row print:flex-row overflow-hidden print:shadow-none print:max-w-full print:h-auto print:overflow-visible">
      {/* Decorative Top Accent for Mobile / Left Accent for Desktop */}
      <div className="h-4 md:h-auto md:w-3 print:h-auto print:w-3 bg-teal-600 flex-shrink-0"></div>

      <div className="flex-grow p-8 md:p-12 print:p-12 flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="border-b border-teal-100 pb-8 flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif-custom text-slate-900 tracking-tight mb-2">
              Zinat <span className="text-teal-600 font-light">(Setareh)</span> Parsa
            </h1>
            <p className="text-lg text-slate-500 font-sans-custom tracking-wide uppercase text-sm font-medium">
              Contemporary Painter &middot; Tehran, Iran
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-sans-custom mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-teal-600" /> Born 8 Sept 1963
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" /> Tehran, Iran
            </span>
          </div>
        </header>

        {/* Main Content Columns */}
        <div className="flex flex-col md:grid md:grid-cols-12 print:grid print:grid-cols-12 gap-10">
          
          {/* Left Column (Narrower) */}
          <div className="md:col-span-4 print:col-span-4 flex flex-col gap-10">
            
            {/* Bio Summary */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4 border-l-2 border-teal-600 pl-3">
                About
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Contemporary painter specializing in Impressionism, Figurative Abstraction, and Conceptual Art. 
                With a career spanning decades, Zinat has participated in over 155 international exhibitions 
                across Europe, the Middle East, Russia, North America, and East Asia.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4 border-l-2 border-teal-600 pl-3">
                Education
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-serif-custom text-lg text-slate-800 font-semibold">M.A. in Painting</h3>
                  <p className="text-teal-600 text-xs font-medium uppercase mb-1">2016 &middot; Islamic Azad University</p>
                  <p className="text-xs text-slate-500 italic">Research: Persian miniature & symbolism of water/color.</p>
                </div>
                <div>
                  <h3 className="font-serif-custom text-lg text-slate-800 font-semibold">B.A. in Painting</h3>
                  <p className="text-teal-600 text-xs font-medium uppercase">1993 &middot; Islamic Azad University</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-auto">
               <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4 border-l-2 border-teal-600 pl-3">
                Contact
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-500" />
                  <a href="mailto:contact@zinatparsa.art" className="hover:text-teal-600 transition-colors">contact@zinatparsa.art</a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-500" />
                  <a href="https://www.zinatparsa.art" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">www.zinatparsa.art</a>
                </li>
                 <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-500" />
                  <a href="tel:+989122458916" className="hover:text-teal-600 transition-colors">+98 912 245 8916</a>
                </li>
              </ul>
            </section>

          </div>

          {/* Right Column (Wider) */}
          <div className="md:col-span-8 print:col-span-8 flex flex-col gap-10">
            
            {/* Artistic Statement */}
            <section className="bg-slate-50 print:bg-slate-50 p-6 rounded-r-lg border-l-4 border-teal-200">
              <blockquote className="font-serif-custom text-xl md:text-2xl italic text-slate-700 leading-relaxed">
                “My art must speak; otherwise, a camera can capture reality better than a brush. 
                <span className="text-teal-600 font-medium"> Turquoise</span> is the color of purity 
                and the spiritual memory of my culture.”
              </blockquote>
            </section>

            {/* Selected Exhibitions */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full print-color-adjust-exact"></span> Selected Exhibitions
              </h2>
              
              <div className="relative border-l border-slate-200 ml-1 space-y-6">
                {[
                  { title: "Katara Qatar International Art Festival", loc: "Qatar", years: "2019–2024" },
                  { title: "World Art Dubai", loc: "Dubai, UAE", years: "2017–2024" },
                  { title: "Padova, Parma, Genoa Art Fairs", loc: "Italy", years: "Selected Years" },
                  { title: "National Museum of Iran", loc: "Tehran", years: "2024" },
                ].map((ex, i) => (
                  <div key={i} className="pl-6 relative">
                     <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white bg-teal-400 print-color-adjust-exact"></span>
                     <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-semibold text-slate-800 font-serif-custom text-lg">{ex.title}</h3>
                        <span className="text-xs font-mono text-slate-400 bg-slate-100 print:bg-slate-100 px-2 py-0.5 rounded">{ex.years}</span>
                     </div>
                     <p className="text-sm text-slate-500">{ex.loc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards & Recognition */}
            <section>
               <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full print-color-adjust-exact"></span> Awards & Honors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { title: "5× Qatar Art Oscar", year: "2021–2024", desc: "Excellence in Painting" },
                   { title: "Tehran National Peace Award", year: "2024", desc: "Cultural contribution" },
                   { title: "Moscow Art Oscar", year: "2019", desc: "International Jury Selection" },
                   { title: "Medallion Award", year: "2019", desc: "Padova, Italy" },
                 ].map((award, i) => (
                   <div key={i} className="border border-slate-100 p-4 rounded hover:border-teal-100 transition-colors bg-white shadow-sm break-inside-avoid">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">{award.year}</span>
                      </div>
                      <h3 className="font-serif-custom font-semibold text-slate-800 text-lg leading-tight mb-1">{award.title}</h3>
                      <p className="text-xs text-slate-400">{award.desc}</p>
                   </div>
                 ))}
              </div>
            </section>

            {/* Media */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 bg-teal-600 rounded-full print-color-adjust-exact"></span> Media & Publications
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zinat’s work has been featured in over 10 international art books. Notable press coverage includes 
                <span className="italic"> Asr Iran</span>, <span className="italic">Jam-e Jam Online</span>, and <span className="italic">Soroush Cinema</span>. 
                Her work was academically reviewed by Prof. Paolo Gelsomino in <span className="font-semibold">NoesisArcadi</span> (2024).
              </p>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-center">
          <p className="text-xs text-slate-300 font-sans-custom uppercase tracking-widest">
            © 2024 Zinat Parsa Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;