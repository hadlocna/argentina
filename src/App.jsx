import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  ChevronRight,
  X,
  Music,
  Utensils,
  GlassWater,
  Navigation,
  Info,
  Star,
  Calendar,
  Zap,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

const BASE_ADDRESS = 'República Árabe Siria 3026, Palermo, Buenos Aires';

const DESTINATIONS = {
  ultra: {
    id: 'ultra',
    title: 'Ultra Buenos Aires',
    category: 'Festival',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    description:
      "One of the world's premier electronic music festivals. Multiple stages, top-tier international DJs, and a high-production light show at Parque de la Ciudad.",
    distance: '12 km',
    driveTime: '25-30 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Parque+de+la+Ciudad,+Buenos+Aires`,
    website: 'https://ultrabuenosaires.com/',
    contact: 'N/A - Official App Only',
    why: "It's the heart of the trip. The energy is unmatched, but getting an Uber/Cabify back is a nightmare—leave 20 mins early or walk 10 mins away from the gate before calling a ride.",
    tips: 'Screenshot your QR code. Signal in Parque de la Ciudad is non-existent once 40,000 people arrive.'
  },
  'bad-bunny': {
    id: 'bad-bunny',
    title: 'Bad Bunny @ River Plate',
    category: 'Concert',
    image:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
    description:
      "The 'Most Wanted Tour' at El Monumental stadium. Reggaeton at its absolute peak.",
    distance: '3.5 km',
    driveTime: '12 mins',
    walkTime: '40 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Estadio+Mâs+Monumental`,
    website: 'https://www.cariola.com.ar/',
    why: "The stadium is historic. Because it's so close to Palermo, if the traffic is blocked, walking back is actually faster and safer.",
    tips: 'Enter through the side streets of Belgrano. Avoid the main Avenida del Libertador if arriving by car.'
  },
  'don-julio': {
    id: 'don-julio',
    title: 'Don Julio Parrilla',
    category: 'Steakhouse',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description:
      "World's #1 Steakhouse (World's 50 Best). Incredible grass-fed beef and elite service.",
    distance: '1.2 km',
    driveTime: '5 mins',
    walkTime: '15 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Don+Julio,+Guatemala+4699`,
    website: 'https://www.parrilladonjulio.com/',
    contact: '+54 11 4832-3654',
    why: "It's the mandatory 'Big Meal'. The wine cellar alone is worth the trip.",
    tips: "Book 90 days out. If full, try 'El Preferido' across the street (same owners, different vibe)."
  },
  polo: {
    id: 'polo',
    title: 'Polo Day Estancia',
    category: 'Adventure',
    image:
      'https://images.unsplash.com/photo-1551698618-1fed5d971203?auto=format&fit=crop&w=800&q=80',
    description:
      'Head to a private ranch outside the city. Asado lunch, pro match, and polo lessons.',
    distance: '70 km',
    driveTime: '1 hour (Van provided)',
    directions: 'Transport provided from Palermo center.',
    website: 'https://argentinapoloday.com.ar/',
    contact: '+54 9 11 6688-2922',
    why: 'Best way to clear the head after the festival weekend. Fresh air, elite horses, and unlimited Malbec.',
    tips: "Wear jeans. Don't worry about skill; they'll have you hitting the ball within 30 minutes."
  },
  'la-bomba': {
    id: 'la-bomba',
    title: 'La Bomba de Tiempo',
    category: 'Nightlife',
    image:
      'https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&w=800&q=80',
    description:
      'Improvisational percussion at CC Konex. An old factory turned massive drum rave.',
    distance: '4.5 km',
    driveTime: '15 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Ciudad+Cultural+Konex`,
    website: 'https://www.cckonex.org/',
    why: "Every Monday for 15+ years. It's where the locals go. Massive energy and great for meeting people.",
    tips: 'Buy tickets online 1 week before. It always sells out by 7 PM on Monday.'
  },
  colonia: {
    id: 'colonia',
    title: 'Colonia (Uruguay)',
    category: 'Day Trip',
    image:
      'https://images.unsplash.com/photo-1590013330452-9769910d3257?auto=format&fit=crop&w=800&q=80',
    description: 'Ferry across the Rio de la Plata to a Portuguese colonial town.',
    distance: '6 km (to Ferry)',
    driveTime: '20 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Buquebus,+Buenos+Aires`,
    website: 'https://www.buquebus.com/',
    why: 'Best recovery day. Rent a golf cart and cruise the coast of Uruguay.',
    tips: 'You MUST have your passport. The ferry check-in is like an airport; arrive 1 hour early.'
  },
  faena: {
    id: 'faena',
    title: 'Faena Pool & Library',
    category: 'Luxe',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: 'The most exclusive hotel in Puerto Madero. The pool is a scene.',
    distance: '8 km',
    driveTime: '25 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Faena+Hotel+Buenos+Aires`,
    why: 'The ultimate flex. High-end crowd and great for a mid-week chill.',
    tips: "Book a 'Day Pass' or a table for drinks at the Library Lounge to get access."
  },
  'tres-monos': {
    id: 'tres-monos',
    title: 'Tres Monos',
    category: 'Cocktail Bar',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    description: 'Award-winning cocktail den with a buzzy crowd and inventive drinks.',
    distance: '2.3 km',
    driveTime: '9 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Tres+Monos,+Buenos+Aires`,
    website: 'https://www.tresmonosbar.com/',
    why: 'Perfect nightcap after polo. Top 50 bars energy without the tourist crush.',
    tips: 'Arrive before 10 PM to avoid the line. Ask the bartenders for a custom drink.'
  }
};

const App = () => {
  const [selectedDest, setSelectedDest] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');

  const DayCard = ({ day, date, title, items, badge, description }) => (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-6 hover:border-blue-500/30 transition-all shadow-xl">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
        <div>
          <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">
            {day} — {date}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black mt-1 text-white">{title}</h3>
        </div>
        {badge && (
          <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-lg">
            {badge}
          </span>
        )}
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">{description}</p>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => (item.destId ? setSelectedDest(DESTINATIONS[item.destId]) : null)}
            className={`flex items-center gap-3 p-4 rounded-xl transition-all border border-transparent ${
              item.destId
                ? 'bg-white/5 hover:bg-white/10 hover:border-white/10 cursor-pointer group'
                : 'bg-slate-800/30'
            }`}
          >
            <div className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">{item.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-100">{item.label}</p>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
            {item.destId && (
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans pb-24">
      <header className="relative h-72 sm:h-80 md:h-96 flex items-end p-6 sm:p-8 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          alt="BA skyline"
        />
        <div className="relative z-10 w-full">
          <div className="flex gap-2 mb-3">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Feb 13 - 22, 2026
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            BA{' '}
            <span className="text-blue-500 underline decoration-4 underline-offset-8 decoration-blue-500/50">
              UNLEASHED
            </span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-red-500" /> Base: {BASE_ADDRESS}
          </p>
        </div>
      </header>

      <nav className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl border-b border-slate-800 flex shadow-2xl">
        {['itinerary', 'secrets', 'packing'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 sm:py-5 px-3 sm:px-4 text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all ${
              activeTab === tab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab === 'itinerary' && <Calendar className="inline-block w-4 h-4 mb-1 mr-2" />}
            {tab === 'secrets' && <Zap className="inline-block w-4 h-4 mb-1 mr-2" />}
            {tab === 'packing' && <Briefcase className="inline-block w-4 h-4 mb-1 mr-2" />}
            {tab}
          </button>
        ))}
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {activeTab === 'itinerary' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DayCard
              day="FRI"
              date="FEB 13"
              title="The Solo Landing"
              description="User arrives Friday night. A quiet night to scope the neighborhood and stock the fridge."
              items={[
                { icon: <MapPin />, label: 'Check-in at Base', sub: 'República Árabe Siria 3026' },
                {
                  icon: <Utensils />,
                  label: 'Solitary Steak',
                  sub: "Casual dinner at 'La Carnicería' (Walkable)"
                },
                {
                  icon: <Briefcase />,
                  label: 'Supply Run',
                  sub: 'Water, electrolytes, and Malbec at Jumbo Supermarket'
                }
              ]}
            />
            <DayCard
              day="SAT"
              date="FEB 14"
              title="The Boys Arrive"
              badge="Festival"
              description="The two other guys arrive morning. We drop bags and head straight to Ultra."
              items={[
                { icon: <Clock />, label: 'Friend Arrival (Morning)', sub: 'Airport pickup / Uber to base' },
                { icon: <Music />, label: 'Ultra Day 1', sub: 'Parque de la Ciudad', destId: 'ultra' },
                { icon: <GlassWater />, label: 'Palermo Nightcap', sub: "Drinks at 'Boticario' if energy remains" }
              ]}
            />
            <DayCard
              day="SUN"
              date="FEB 15"
              title="The Iron Man Combo"
              badge="Epic Day"
              description="The biggest physical challenge. Ultra afternoon then Bad Bunny at 8 PM."
              items={[
                { icon: <Music />, label: 'Ultra Day 2', sub: 'Final sets', destId: 'ultra' },
                {
                  icon: <Zap />,
                  label: 'Bad Bunny @ Monumental',
                  sub: '8:00 PM - Reggaeton madness',
                  destId: 'bad-bunny'
                }
              ]}
            />
            <DayCard
              day="MON"
              date="FEB 16"
              title="Monday Night Fever"
              description="Recovery morning followed by the legendary Monday night ritual."
              items={[
                { icon: <Clock />, label: 'Sleep In', sub: 'Mandatory recovery until noon' },
                {
                  icon: <Music />,
                  label: 'La Bomba de Tiempo',
                  sub: 'Percussion rave at CC Konex',
                  destId: 'la-bomba'
                },
                { icon: <Utensils />, label: 'Late Night Burger', sub: 'Pony Line @ Four Seasons' }
              ]}
            />
            <DayCard
              day="TUE"
              date="FEB 17"
              title="The Polo Flex"
              badge="Elite"
              description="Country air to cure the hangover. Best day of the trip for photos."
              items={[
                {
                  icon: <Star />,
                  label: 'Private Polo Day',
                  sub: 'Horses and Unlimited Asado',
                  destId: 'polo'
                },
                {
                  icon: <GlassWater />,
                  label: 'Tres Monos Cocktails',
                  sub: "World's Top 50 bar",
                  destId: 'tres-monos'
                }
              ]}
            />
            <DayCard
              day="WED"
              date="FEB 18"
              title="Old School BA"
              description="San Telmo antiques and the ultimate steak night."
              items={[
                { icon: <MapPin />, label: 'San Telmo Market', sub: 'Wander the antique halls' },
                { icon: <Utensils />, label: 'Don Julio Dinner', sub: 'The main event', destId: 'don-julio' }
              ]}
            />
            <DayCard
              day="THU"
              date="FEB 19"
              title="Uruguay Escape"
              description="International waters. A peaceful town for a change of pace."
              items={[
                {
                  icon: <Navigation />,
                  label: 'Colonia del Sacramento',
                  sub: 'Ferry day trip',
                  destId: 'colonia'
                },
                { icon: <GlassWater />, label: 'Uptown', sub: 'Subway-themed speakeasy' }
              ]}
            />
            <DayCard
              day="FRI"
              date="FEB 20"
              title="Closing Night"
              badge="Final Bash"
              description="One last massive night. High-end vibes only."
              items={[
                { icon: <Zap />, label: 'Faena Pool Party', sub: 'Day pass or lunch', destId: 'faena' },
                { icon: <Utensils />, label: 'Anchoita', sub: 'The coolest dinner in town (if we can book)' },
                { icon: <Music />, label: 'Tequila Nightclub', sub: 'The most exclusive spot in the city' }
              ]}
            />
            <DayCard
              day="SAT"
              date="FEB 21"
              title="The Flex Day"
              description="No plans. Walk Palermo, buy leather jackets, drink coffee."
              items={[
                { icon: <Briefcase />, label: 'Leather Shopping', sub: 'Murillo 666 district' },
                { icon: <MapPin />, label: 'Teatro Colón Tour', sub: 'World-class opera house tour' }
              ]}
            />
            <DayCard
              day="SUN"
              date="FEB 22"
              title="Departure"
              items={[{ icon: <Navigation />, label: 'EZE Airport', sub: 'Travel day. Recovery begins.' }]}
            />
          </div>
        )}

        {activeTab === 'secrets' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-xl font-black text-white mb-4 uppercase">Pro Tip: The Cabify Hack</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Uber is 50/50 in BA. <strong>Cabify</strong> is 100%. Download it now. You can book rides in
                advance and the drivers are professional. It's the only way to get home from Ultra without getting
                scammed by street taxis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold">CABIFY APP</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold">PRE-BOOKING</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> Artlab (Chacarita)
                </h4>
                <p className="text-xs text-slate-400">
                  If Ultra is too 'mainstream', head to Artlab. It's a digital arts center with the best sound
                  system in South America and deep techno vibes.
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-green-500" /> Puerta Cerrada
                </h4>
                <p className="text-xs text-slate-400">
                  Hidden 'closed-door' restaurants. <strong>Casa Saltshaker</strong> is the go-to. You eat in a
                  chef's living room with 10 strangers. Best way to meet people.
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" /> Florería Atlántico
                </h4>
                <p className="text-xs text-slate-400">
                  Walk into a flower shop, open the refrigerator door, and walk down into a world-class basement
                  bar.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'packing' && (
          <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 animate-in fade-in duration-500">
            <h3 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-2">
              <ShieldCheck className="text-green-500" /> The Survival Kit
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-500" />
                <div>
                  <p className="font-bold text-sm">Physical Passport</p>
                  <p className="text-xs text-slate-500">Needed for Colonia ferry and some clubs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-500" />
                <div>
                  <p className="font-bold text-sm">Portable Power Bank</p>
                  <p className="text-xs text-slate-500">Ultra kills batteries in 4 hours searching for signal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-500" />
                <div>
                  <p className="font-bold text-sm">Earplugs (Loop/Pro)</p>
                  <p className="text-xs text-slate-500">Stadium acoustics are brutal. Protect the ears.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-500" />
                <div>
                  <p className="font-bold text-sm">The 'Fake' Wallet</p>
                  <p className="text-xs text-slate-500">
                    Carry a small amount of cash in a separate pocket for quick buys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-black animate-in fade-in duration-300 overflow-y-auto">
          <div className="relative min-h-screen pb-20">
            <button
              onClick={() => setSelectedDest(null)}
              className="fixed top-6 right-6 z-50 bg-black/50 hover:bg-black p-3 rounded-full backdrop-blur-md border border-white/10"
              aria-label="Close destination details"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <img src={selectedDest.image} className="w-full h-64 sm:h-80 md:h-96 object-cover" alt={selectedDest.title} />

            <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-10">
              <div className="bg-[#0c0c0c] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-white/10 shadow-2xl">
                <span className="text-blue-500 font-black text-xs uppercase tracking-[0.2em]">
                  {selectedDest.category}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-6 leading-tight">
                  {selectedDest.title}
                </h2>
                <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-8">
                  {selectedDest.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-5 rounded-3xl flex items-center gap-4 border border-white/5">
                    <Navigation className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Distance</p>
                      <p className="text-white font-bold">{selectedDest.distance}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-5 rounded-3xl flex items-center gap-4 border border-white/5">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Drive</p>
                      <p className="text-white font-bold">{selectedDest.driveTime}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="bg-blue-600/5 p-6 rounded-3xl border border-blue-600/20">
                    <h4 className="flex items-center gap-2 text-blue-400 font-black mb-3 uppercase text-xs tracking-widest">
                      <Zap className="w-4 h-4" /> Why this is a win
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{selectedDest.why}</p>
                  </div>
                  <div className="bg-yellow-600/5 p-6 rounded-3xl border border-yellow-600/20">
                    <h4 className="flex items-center gap-2 text-yellow-500 font-black mb-3 uppercase text-xs tracking-widest">
                      <Info className="w-4 h-4" /> Pro Tip
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{selectedDest.tips}</p>
                  </div>
                </div>

                <a
                  href={selectedDest.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 w-full py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black transition-all shadow-xl shadow-blue-600/20 text-sm sm:text-base"
                >
                  <MapPin className="w-5 h-5" /> OPEN NAVIGATION FROM BASE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-md border-t border-slate-800 p-4 text-center">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          Wolfpack BA 2026 // No Regrets
        </p>
      </footer>
    </div>
  );
};

export default App;
