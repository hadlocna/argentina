import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  ChevronDown,
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
  ShieldCheck,
  Phone,
  DollarSign,
  MessageCircle,
  Coffee,
  Home,
  AlertCircle,
  ArrowUpRight,
  BookOpen,
  Plane,
  Wine,
  ShoppingBag,
  Camera,
  Building,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Circle,
  Wallet,
  CreditCard,
  Banknote
} from 'lucide-react';

const BASE_ADDRESS = 'República Árabe Siria 3026, Palermo, Buenos Aires';

const DESTINATIONS = {
  ultra: {
    id: 'ultra',
    title: 'Ultra Buenos Aires',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    description: "One of the world's premier electronic music festivals. Multiple stages, top-tier international DJs, and a high-production light show at Parque de la Ciudad.",
    distance: '12 km',
    driveTime: '25-30 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Parque+de+la+Ciudad,+Buenos+Aires`,
    website: 'https://ultrabuenosaires.com/',
    contact: 'N/A - Official App Only',
    why: "It's the heart of the trip. The energy is UNREAL, but getting an Uber/Cabify back is a nightmare—leave 20 mins before the headliner ends OR walk 10 mins away from the main gate before calling a ride. Trust me on this.",
    tips: 'Screenshot your QR code. Cell signal = zero once 40,000+ people show up. Bring a portable charger or your phone is dead by 6 PM. The water stations are free but the lines are long—fill up early.'
  },
  'bad-bunny': {
    id: 'bad-bunny',
    title: 'Bad Bunny @ River Plate',
    category: 'Concert',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
    description: "The 'Most Wanted Tour' at El Monumental stadium. Reggaeton at its absolute peak. This stadium is where Messi played, where Argentina won the World Cup vibes live on—it's iconic.",
    distance: '3.5 km',
    driveTime: '12 mins',
    walkTime: '40 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Estadio+Mâs+Monumental`,
    website: 'https://www.cariola.com.ar/',
    why: "Because it's Bad Bunny. At River Plate. In South America. If the traffic gets blocked post-show (it will), just walk back to Palermo—it's faster, safer, and you'll burn off some empanada guilt.",
    tips: 'Enter through the Belgrano side streets. Avoid Avenida del Libertador like the plague if driving. The merch lines are 90 minutes long—skip it or buy on the way out.'
  },
  'don-julio': {
    id: 'don-julio',
    title: 'Don Julio Parrilla',
    category: 'Steakhouse',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: "World's #1 Steakhouse (World's 50 Best Restaurants). Grass-fed Argentine beef, wine cellar that'll make you weep, service that makes you feel like royalty. This is THE dinner.",
    distance: '1.2 km',
    driveTime: '5 mins',
    walkTime: '15 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Don+Julio,+Guatemala+4699`,
    website: 'https://www.parrilladonjulio.com/',
    contact: '+54 11 4832-3654',
    why: "It's the mandatory 'Big Meal'. The wine cellar alone is worth the Uber fare. You'll order the bife de chorizo, drink a $15 Malbec that tastes like $150, and understand why Argentina is obsessed with beef.",
    tips: "Book 90 days out or you're not getting in. If it's full, try 'El Preferido de Palermo' across the street (same owners, more casual). Go hungry. Like, skip-lunch hungry."
  },
  polo: {
    id: 'polo',
    title: 'Polo Day Estancia',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1551698618-1fed5d971203?auto=format&fit=crop&w=800&q=80',
    description: 'Head to a private ranch outside the city. Watch a pro polo match, take lessons from actual pros, unlimited asado lunch with Malbec flowing like water. Best hangover cure ever invented.',
    distance: '70 km',
    driveTime: '1 hour (Van provided)',
    directions: 'Transport provided from Palermo center.',
    website: 'https://argentinapoloday.com.ar/',
    contact: '+54 9 11 6688-2922',
    why: 'Best way to reset after Ultra weekend. Fresh air, elite horses, unlimited wine, and you get to hit a ball on horseback like a complete legend. Great for Instagram too.',
    tips: "Wear jeans and closed-toe shoes. They'll have you playing polo in 30 mins—it's easier than it looks. The asado lunch is massive, so pace yourself on the wine."
  },
  'la-bomba': {
    id: 'la-bomba',
    title: 'La Bomba de Tiempo',
    category: 'Nightlife',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&w=800&q=80',
    description: 'Improvisational percussion show at CC Konex. Every Monday for 15+ years. An old factory turned into a drum rave. 20+ percussionists improvising for 2 hours straight. Locals only vibe.',
    distance: '4.5 km',
    driveTime: '15 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Ciudad+Cultural+Konex`,
    website: 'https://www.cckonex.org/',
    why: "It's where porteños (locals) actually go. Massive energy, great for meeting people, and it's a Monday tradition in BA. Think warehouse rave meets drum circle meets art installation.",
    tips: 'Buy tickets online 1 week ahead. Doors at 7 PM, show starts at 8 PM, sold out by 6:45 PM. Get there early for a good spot on the dance floor.'
  },
  colonia: {
    id: 'colonia',
    title: 'Colonia del Sacramento (Uruguay)',
    category: 'Day Trip',
    image: 'https://images.unsplash.com/photo-1590013330452-9769910d3257?auto=format&fit=crop&w=800&q=80',
    description: 'Ferry across the Río de la Plata to Uruguay. Cobblestone streets, Portuguese colonial vibes, rent a golf cart and cruise. Perfect recovery day after the festival madness.',
    distance: '6 km (to Ferry Terminal)',
    driveTime: '20 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Buquebus,+Buenos+Aires`,
    website: 'https://www.buquebus.com/',
    why: 'Best recovery day. Golf cart around a UNESCO World Heritage town, eat incredible uruguayan food, walk off the weekend. Plus you get another stamp in the passport.',
    tips: 'You MUST bring your physical passport. Ferry check-in is like TSA—arrive 1 hour early. Book the fast ferry (1 hour) not the slow one (3 hours). Rent a golf cart the second you arrive.'
  },
  faena: {
    id: 'faena',
    title: 'Faena Hotel Pool & Library',
    category: 'Luxe',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: "The most exclusive hotel in Puerto Madero. Red velvet everything, Philippe Starck design, the pool is a scene. This is where celebrities and futbol players hang.",
    distance: '8 km',
    driveTime: '25 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Faena+Hotel+Buenos+Aires`,
    why: 'The ultimate flex. High-end crowd, Instagram gold, and honestly just fun to see how the other half lives in BA. Great for a chill afternoon.',
    tips: "Book a 'Day Pass' ($80-100 USD) or reserve a table at Rojo Tango bar to access the pool. Dress code is real—no flip flops."
  },
  'tres-monos': {
    id: 'tres-monos',
    title: 'Tres Monos',
    category: 'Cocktail Bar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    description: "Award-winning cocktail bar with a buzzy crowd. Inventive drinks, great music, and that 'cool kids' vibe without being pretentious.",
    distance: '2.3 km',
    driveTime: '9 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Tres+Monos,+Buenos+Aires`,
    website: 'https://www.instagram.com/tresmonosbar/',
    why: "Perfect nightcap after polo. Top 50 bars energy without the tourist crush. Bartenders actually chat with you here.",
    tips: 'Arrive before 10 PM or face a 30-min wait. Ask for a custom drink—tell them what you like and let them freestyle. Cash only sometimes, bring backup.'
  },
  'floreria-atlantico': {
    id: 'floreria-atlantico',
    title: 'Florería Atlántico',
    category: 'Speakeasy',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    description: "Walk into a flower shop. Open the fridge door. Descend into one of the world's best cocktail bars. James Bond vibes.",
    distance: '5.2 km',
    driveTime: '18 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Florería+Atlántico,+Buenos+Aires`,
    why: "Because the entrance is literally through a refrigerator in a flower shop. And the drinks are world-class. And it's just cool.",
    tips: 'Make a reservation or arrive right at 8 PM when they open. The mezcal cocktails here are unreal. Pricey but worth every peso.'
  },
  'la-cabrera': {
    id: 'la-cabrera',
    title: 'La Cabrera',
    category: 'Steakhouse',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    description: "Backup steak option if Don Julio is booked. Still incredible, more casual, portions are MASSIVE, and they bring like 12 free side dishes.",
    distance: '800m',
    driveTime: '4 mins',
    walkTime: '10 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/La+Cabrera,+Cabrera+5099`,
    why: "Because Don Julio might be full. This is Plan B, but honestly it's still a 9/10 steak experience. The portions are stupid big.",
    tips: 'They have two locations on the same block—both are good. Arrive at 8:30 PM or make a reservation. The chorizo steak is the move.'
  },
  'club-araoz': {
    id: 'club-araoz',
    title: 'Club Araoz',
    category: 'Nightlife',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80',
    description: 'Small underground club with house and techno. No phones on the dance floor policy. Locals only. Best vibes in Palermo.',
    distance: '1.8 km',
    driveTime: '8 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Club+Araoz,+Palermo`,
    why: "Real deal nightlife. Not touristy, great music, and the crowd is actually there to dance, not take Instagram stories.",
    tips: 'Cash only at the door. Gets good after 2 AM. They have a strict no-photos rule on the floor—respect it.'
  },
  'pony-line': {
    id: 'pony-line',
    title: 'Pony Line (Four Seasons)',
    category: 'Late Night Eats',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Best burger in BA. Located in the Four Seasons. Open late. Perfect drunk food after La Bomba or any night out.',
    distance: '3.2 km',
    driveTime: '12 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Four+Seasons+Buenos+Aires`,
    why: 'Sometimes you just need a perfect burger at midnight. This is that place. Hotel bar vibe but the food is legit.',
    tips: 'Open until 1 AM. The truffle fries are mandatory. Dress code is casual but no tank tops/flip flops.'
  }
};

const NEIGHBORHOODS = [
  {
    name: 'Palermo Soho',
    vibe: 'Hip, artsy, tons of bars and restaurants',
    why: "Where you're staying. Best area for nightlife, food, and walking around. Think Brooklyn but with better steak.",
    highlights: ['Plaza Serrano', 'Street art', 'Boutique shopping', 'Craft beer bars']
  },
  {
    name: 'Palermo Hollywood',
    vibe: 'Media district turned foodie paradise',
    why: 'Slightly more upscale than Soho. Home to many top restaurants and cocktail bars.',
    highlights: ['Don Julio', 'Tres Monos', 'TV studios', 'Trendy restaurants']
  },
  {
    name: 'San Telmo',
    vibe: 'Historic, cobblestone, antique markets',
    why: 'Old-school Buenos Aires. Sunday market is incredible. Tango shows every night.',
    highlights: ['Sunday Market', 'Plaza Dorrego', 'Antique shops', 'Street tango']
  },
  {
    name: 'Puerto Madero',
    vibe: 'Waterfront, modern, upscale',
    why: "BA's newest neighborhood. Great for a sunset walk, fancy dinners, Faena Hotel.",
    highlights: ['Puente de la Mujer', 'Waterfront walks', 'High-end restaurants', 'Faena']
  },
  {
    name: 'Recoleta',
    vibe: 'Paris vibes, cemetery, old money',
    why: 'Fancy neighborhood with European architecture. Home to the famous cemetery where Evita is buried.',
    highlights: ['Recoleta Cemetery', 'Teatro Colón', 'Museums', 'Cafés']
  }
];

const FOOD_GUIDE = [
  {
    dish: 'Bife de Chorizo',
    description: 'The king of Argentine steaks. Basically a strip steak but better.',
    where: 'Don Julio, La Cabrera',
    price: '$$$'
  },
  {
    dish: 'Empanadas',
    description: 'Meat pies. Get carne (beef), jamón y queso (ham & cheese), or humita (corn).',
    where: 'Literally everywhere. El Sanjuanino is solid.',
    price: '$'
  },
  {
    dish: 'Choripán',
    description: 'Chorizo sandwich. Best drunk food ever invented.',
    where: 'Street carts, Costanera Norte on weekends',
    price: '$'
  },
  {
    dish: 'Milanesa',
    description: 'Breaded meat cutlet the size of your head. Napolitana style = with tomato sauce & cheese.',
    where: 'Any bodegón (classic restaurant)',
    price: '$$'
  },
  {
    dish: 'Asado',
    description: 'The whole barbecue experience. Ribs, sausages, sweetbreads, everything.',
    where: 'Polo day, Don Julio, La Cabrera',
    price: '$$$'
  },
  {
    dish: 'Medialunas',
    description: 'Argentine croissants. Sweet or savory. Breakfast staple.',
    where: 'Any café. Order with a cortado.',
    price: '$'
  },
  {
    dish: 'Dulce de Leche',
    description: 'Caramel crack. In everything. On everything. Buy jars to bring home.',
    where: 'Havanna stores, any supermarket',
    price: '$'
  }
];

const SPANISH_PHRASES = [
  { spanish: '¡Hola! ¿Cómo estás?', english: 'Hey! How are you?', phonetic: 'OH-lah KOH-moh ehs-TAHS' },
  { spanish: 'Una cerveza, por favor', english: 'A beer, please', phonetic: 'OO-nah sehr-VEH-sah por fah-VOR' },
  { spanish: 'La cuenta, por favor', english: 'The check, please', phonetic: 'Lah KWEN-tah por fah-VOR' },
  { spanish: '¿Cuánto sale?', english: 'How much is it?', phonetic: 'KWAN-toh SAH-leh' },
  { spanish: 'Está buenísimo', english: "This is awesome/delicious", phonetic: 'ehs-TAH bweh-NEE-see-moh' },
  { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', phonetic: 'DOHN-deh ehs-TAH el BAH-nyoh' },
  { spanish: 'No entiendo', english: "I don't understand", phonetic: 'noh en-tee-EN-doh' },
  { spanish: 'Boludo/Che', english: 'Dude/Hey (very Argentine)', phonetic: 'boh-LOO-doh / cheh' },
  { spanish: '¿Todo bien?', english: 'All good? / Everything okay?', phonetic: 'TOH-doh bee-EN' }
];

const MONEY_TIPS = [
  {
    title: 'Use the "Blue" Dollar Rate',
    content: "Argentina has two exchange rates: official and 'blue' (street rate). Blue is ~40% better. Use Western Union or bring USD cash to exchange at 'cuevas' (exchange houses). Never exchange at the airport.",
    icon: <DollarSign className="w-5 h-5 text-green-500" />
  },
  {
    title: 'Bring USD Cash',
    content: "Seriously. Bring $500+ in clean USD bills. You'll get WAY more pesos exchanging cash than using ATMs. Argentines prefer $100 bills (best rate) but $50s and $20s work too.",
    icon: <Banknote className="w-5 h-5 text-green-500" />
  },
  {
    title: 'Credit Cards = Tourist Price',
    content: "Cards get the official rate, which sucks. Use cash whenever possible. Save cards for hotels and big purchases only.",
    icon: <CreditCard className="w-5 h-5 text-yellow-500" />
  },
  {
    title: 'ATMs = Rip-off (but necessary)',
    content: "ATM fees are brutal ($10-15 per withdrawal) and daily limits are low. Use Banco Galicia ATMs for best limits. Only use if you run out of USD to exchange.",
    icon: <Wallet className="w-5 h-5 text-red-500" />
  },
  {
    title: 'Argentina is CHEAP (with blue rate)',
    content: "With the blue dollar rate: Empanadas = $1, Beer = $2, Nice dinner = $30, Taxi across town = $5. Budget $100-150/day and you'll live like a king.",
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />
  }
];

const EMERGENCY_INFO = [
  { label: 'Emergency Number', value: '911', icon: <Phone /> },
  { label: 'Tourist Police', value: '0800-999-5000', icon: <ShieldCheck /> },
  { label: 'US Embassy', value: '+54 11 5777-4533', icon: <AlertCircle /> },
  { label: 'Poison Control', value: '0800-333-0160', icon: <AlertCircle /> },
  { label: 'Hospital Alemán (English)', value: '+54 11 4827-7000', icon: <AlertCircle /> }
];

const BOOKINGS_CHECKLIST = [
  { id: 'don-julio', item: 'Don Julio Reservation (Lunch)', date: 'Feb 16, 11:30 AM', priority: 'critical', bookBy: '90 days before' },
  { id: 'ultra', item: 'Ultra Buenos Aires Tickets', date: 'Feb 14-15', priority: 'critical', bookBy: 'ASAP - selling out' },
  { id: 'bad-bunny', item: 'Bad Bunny @ River Plate', date: 'Feb 15, 8:00 PM', priority: 'critical', bookBy: 'Already on sale' },
  { id: 'polo', item: 'Polo Day Estancia', date: 'Feb 17, 9:00 AM', priority: 'high', bookBy: '2-3 weeks before' },
  { id: 'la-bomba', item: 'La Bomba de Tiempo Tickets', date: 'Feb 17, 12:30 AM', priority: 'high', bookBy: '1 week before' },
  { id: 'colonia', item: 'Buquebus Ferry (Colonia)', date: 'Feb 18', priority: 'high', bookBy: '1 week before' },
  { id: 'aramburu', item: 'Aramburu Dinner (Confirmed)', date: 'Feb 20, 9:00 PM', priority: 'high', bookBy: 'ASAP (set menu)' },
  { id: 'movistar', item: 'Movistar Arena Show', date: 'Feb 19, 8:00 PM', priority: 'medium', bookBy: 'ASAP' },
  { id: 'el-preferido', item: 'El Preferido de Palermo', date: 'Feb 21, 9:00 PM', priority: 'medium', bookBy: '1-2 weeks before' },
  { id: 'cabify', item: 'Download Cabify App', date: 'Before arrival', priority: 'critical', bookBy: 'Now' }
];

const CAST_MEMBERS = [
  {
    name: 'Nate',
    title: 'The OG BA Expert',
    description: 'The man, the myth, the guy who actually knows where we are going. Birthday boy trading Hawaii for South American chaos.',
    bullets: [
      'Last visited BA in 2012, still claims he could run the city',
      '28-hour flight strategist with layovers he calls “me time”',
      'May never return (his words, not ours)'
    ]
  },
  {
    name: 'Nasir',
    title: 'The Future Groom',
    description: 'Bachelor party edition. The man Ava put a ring on and the diplomat of the group.',
    bullets: [
      'Columbus, OH’s finest export to Argentina',
      'Will be scouting the “finest bars of the city” for research',
      'Currently practicing his tango for the wedding'
    ]
  },
  {
    name: 'Nathan',
    title: 'Dad Mode Activated',
    description: 'The responsible one who loves a clean bed and a reasonable bedtime.',
    bullets: [
      'Lives in Lisbon, sleeps in Lisbon time',
      'Fab owes him about six months for the 11-day single dad stint',
      'Gets bedroom #1 because there’s no hot tub'
    ]
  }
];

const FAQS = [
  {
    question: 'Why Buenos Aires?',
    answer: "Nate’s birthday + Nasir’s bachelor party + Nathan needed a vacation from his vacation as a single dad."
  },
  {
    question: "Who’s in charge?",
    answer: 'Technically Nate because he knows BA. Realistically, chaos is in charge.'
  },
  {
    question: 'Will we go to Uruguay?',
    answer: 'Maybe? Probably? We booked something fully refundable just in case.'
  },
  {
    question: 'What should we expect?',
    answer: 'Three grown men acting like college kids, excellent Argentine wine, street tango, someone definitely getting lost, Nathan in bed by 9 PM, and memories that will fuel group chats for years.'
  }
];

const DEFINITELY_HAPPEN = [
  'Nathan going to bed first every night',
  'Someone saying “This could be you again” while looking at old photos',
  'Nate getting bored at the Houston airport and loving every minute',
  'Nasir trying to coordinate everything then saying “any date is cool on my end”',
  'All of us pretending we’re younger than we actually are',
  'Booking things that are “100% refundable”',
  'The moms judging us via WhatsApp'
];

const PROBABLY_NOT = [
  'Anyone making it to breakfast',
  'Responsible decision-making after 10 PM',
  'Nathan staying up past midnight',
  'All of us agreeing on anything without a three-week WhatsApp debate',
  'Coming home with money left over'
];

const LOGISTICS = [
  {
    title: 'Base Camp',
    description: 'República Árabe Siria 3026, Palermo.',
    href: 'https://www.google.com/maps/search/Rep%C3%BAblica+%C3%81rabe+Siria+3026,+Palermo',
    linkLabel: 'Open in Maps',
    icon: <Home className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'The Money Move',
    description: 'Use Visa/Mastercard for everything. You automatically get the tourist rate (MEP), which is nearly double the official rate.',
    href: 'https://www.visa.com.ar/en_AR/support/consumer/travel-support/exchange-rate-calculator.html',
    linkLabel: 'Visa Exchange Rate',
    icon: <Banknote className="w-5 h-5 text-green-400" />
  },
  {
    title: 'Getting Around',
    description: 'Download Cabify or use Uber. Safer than street taxis and cheaper than NYC.',
    href: 'https://cabify.com/ar',
    linkLabel: 'Download Cabify',
    icon: <Navigation className="w-5 h-5 text-purple-400" />
  }
];

const ITINERARY_DAYS = [
  {
    day: 'FRI',
    date: 'FEB 13',
    title: 'The Solo Landing',
    description: 'Nate lands first. Use this quiet night to scope the neighborhood and stock supplies.',
    summary: [
      {
        time: '9:30 PM',
        label: 'Arrival at EZE Airport',
        location: 'Cabify to base (~$25 USD)',
        icon: <Plane />,
        href: 'https://cabify.com/ar'
      },
      {
        time: '10:30 PM',
        label: 'Check-in & Supply Run',
        location: 'Jumbo (Palermo)',
        icon: <ShoppingBag />
      },
      {
        time: '11:30 PM',
        label: 'Midnight Warm-up @ Club Lucero',
        location: 'Palermo',
        icon: <Music />,
        href: 'https://www.instagram.com/clublucero/'
      }
    ],
    schedule: [
      {
        time: '9:30 PM',
        label: 'Arrival at EZE Airport',
        location: 'Ezeiza International Airport',
        note: 'Grab a Cabify to base (~$25 USD).',
        sellingPoint: 'Fastest way in without haggling.',
        icon: <Plane />,
        href: 'https://cabify.com/ar'
      },
      {
        time: '10:30 PM',
        label: 'Check-in & Supply Run',
        location: 'Jumbo (Palermo)',
        note: 'Water, Gatorade, Malbec, and snacks.',
        sellingPoint: 'Set up the whole weekend in one trip.',
        icon: <ShoppingBag />
      },
      {
        time: '11:30 PM',
        label: 'Midnight Warm-up @ Club Lucero',
        location: 'Palermo',
        note: 'Event listings via Eventbrite.',
        sellingPoint: 'Hidden gem with the “volate la peluca” Friday series.',
        icon: <Music />,
        href: 'https://www.instagram.com/clublucero/',
        links: [
          { label: 'Event Listings', href: 'https://www.eventbrite.ca/d/argentina/events/' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Under Club',
        time: 'Late night',
        location: 'Niceto Vega 5699',
        href: 'https://venti.com.ar/evento/ana-hagen-manu-oubi-a-quest',
        sellingPoint: 'The city’s legendary dark techno basement.'
      },
      {
        title: 'Virasoro Bar',
        time: '8:30 PM',
        location: 'Guatemala 4328',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'High-end jazz in an intimate Art Deco building.'
      },
      {
        title: 'Lomond (San Telmo) – Chef Gino’s Italian Pop-Up',
        time: '7:00 PM',
        location: 'Carlos Calvo 463',
        href: 'https://www.eventbrite.com/e/cena-italiana-pop-up-en-san-telmo-tickets-1981867986498',
        sellingPoint: 'Three-course modern Italian with wine pairings.'
      },
      {
        title: 'Teatro Ciego',
        time: '11:00 PM',
        location: 'Pasaje Zelaya 3122',
        href: 'https://teatrociego.org/carteleratc/',
        sellingPoint: 'A play performed in 100% total darkness.'
      },
      {
        title: 'Solo Travelers Hangout (Meetup Palermo)',
        time: 'Various',
        location: 'Palermo',
        href: 'https://www.eventbrite.com/d/argentina--buenos-aires/events/',
        sellingPoint: 'Low-key networking before the storm.'
      }
    ]
  },
  {
    day: 'SAT',
    date: 'FEB 14',
    title: 'The Boys Unite + Ultra Day 1',
    badge: 'Festival',
    description: 'The crew unites. Drop the bags, hydrate, and head south for the first massive festival leg.',
    summary: [
      {
        time: '7:20 AM',
        label: 'Eagle & Nasir Land (EZE)',
        location: 'Direct Uber to Palermo',
        icon: <Plane />
      },
      {
        time: '12:00 PM',
        label: 'Fuel & Strategy @ Cafe Tortoni',
        location: 'Classic BA cafe',
        icon: <Coffee />,
        href: 'https://www.cafetortoni.com.ar/'
      },
      {
        time: '4:00 PM',
        label: 'Ultra Buenos Aires',
        location: 'Parque de la Ciudad',
        icon: <Music />,
        destId: 'ultra'
      }
    ],
    schedule: [
      {
        time: '7:20 AM',
        label: 'Eagle & Nasir Land (EZE)',
        location: 'Ezeiza International Airport',
        note: 'Direct Uber to Palermo.',
        sellingPoint: 'Get settled early and save energy for the night.',
        icon: <Plane />
      },
      {
        time: '12:00 PM',
        label: 'Fuel & Strategy @ Cafe Tortoni',
        location: 'Avenida de Mayo 825',
        note: 'Classic BA vibes at the city’s oldest cafe.',
        sellingPoint: 'A historic pit stop with serious atmosphere.',
        icon: <Coffee />,
        href: 'https://www.cafetortoni.com.ar/'
      },
      {
        time: '4:00 PM',
        label: 'Ultra Buenos Aires',
        location: 'Parque de la Ciudad',
        note: 'Headliners and stages listed online.',
        sellingPoint: 'The massive Resistance Stage in a brutalist industrial park.',
        icon: <Music />,
        destId: 'ultra',
        links: [
          { label: 'Lineup', href: 'https://ultrabuenosaires.com/lineup/' },
          { label: 'Festival Site', href: 'https://ultrabuenosaires.com/' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Chinese New Year (Barrio Chino)',
        time: 'Afternoon',
        location: 'Barrio Chino',
        href: 'https://turismo.buenosaires.gob.ar/es/eventos',
        sellingPoint: 'Street food, lion dances, and huge crowds.'
      },
      {
        title: 'Palacio Libertad (CCK) – Outdoor Music',
        time: '6:00 PM - 10:00 PM',
        location: 'Explanada',
        href: 'https://palaciolibertad.gob.ar/agenda/',
        sellingPoint: 'Free outdoor music at a world-class cultural center.'
      },
      {
        title: 'Fiesta 505',
        time: 'Midnight',
        location: 'Niceto Bar',
        href: 'https://nicetoclub.com/agenda/',
        sellingPoint: 'When you need a break from techno.'
      },
      {
        title: 'Patricio Carpossi Trio',
        time: '8:30 PM & 11:00 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Sophisticated escape from the festival noise.'
      },
      {
        title: 'Flechazo Party',
        time: 'Midnight',
        location: 'Ciudad Cultural Konex',
        href: 'https://www.cckonex.org/',
        sellingPoint: 'Iconic open-air patio with the city’s coolest crowd.'
      }
    ]
  },
  {
    day: 'SUN',
    date: 'FEB 15',
    title: 'The Iron Man Challenge',
    badge: 'Epic Day',
    description: 'The most physical day of the trip. Pace yourself in the morning; save energy for the stadium.',
    summary: [
      {
        time: '11:00 AM',
        label: 'San Telmo Market Walk',
        location: 'Defensa Street',
        icon: <MapPin />,
        href: 'https://turismo.buenosaires.gob.ar/es/atractivo/feria-de-san-telmo'
      },
      {
        time: '4:00 PM',
        label: 'Ultra Day 2 (Early Exit)',
        location: 'Parque de la Ciudad',
        icon: <Music />,
        destId: 'ultra'
      },
      {
        time: '8:00 PM',
        label: 'Bad Bunny @ River Plate',
        location: 'Estadio River Plate',
        icon: <Zap />,
        destId: 'bad-bunny'
      }
    ],
    schedule: [
      {
        time: '11:00 AM',
        label: 'Feria de San Telmo',
        location: 'Defensa Street',
        note: 'Walk the historic market district.',
        sellingPoint: 'Street tango, rare antiques, peak local flavor.',
        icon: <MapPin />,
        href: 'https://turismo.buenosaires.gob.ar/es/atractivo/feria-de-san-telmo'
      },
      {
        time: '4:00 PM',
        label: 'Ultra Day 2 (Early Exit)',
        location: 'Parque de la Ciudad',
        note: 'Catch afternoon energy. Leave by 7 PM to beat traffic.',
        sellingPoint: 'All the hype with a clean exit plan.',
        icon: <Music />,
        destId: 'ultra'
      },
      {
        time: '8:00 PM',
        label: 'Bad Bunny @ River Plate',
        location: 'Estadio River Plate',
        note: 'Doors at 8 PM.',
        sellingPoint: 'One of the biggest nights of the tour.',
        icon: <Zap />,
        destId: 'bad-bunny',
        links: [
          { label: 'Tour Info', href: 'https://www.livenation.lat/' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Boca Juniors vs Platense',
        time: '2:30 PM',
        location: 'La Bombonera',
        href: 'https://www.ligaprofesional.ar/torneo-apertura-2026/',
        sellingPoint: 'The most intense sporting atmosphere in the world.'
      },
      {
        title: 'Karaoke del Amor',
        time: '5:00 PM - 7:00 PM',
        location: 'Plaza Seca',
        href: 'https://palaciolibertad.gob.ar/events/karaoke-del-amor/',
        sellingPoint: 'Mass singalong of Latin romantic hits.'
      },
      {
        title: 'Lans 4tet',
        time: '8:30 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Complex, intimate musical narrative.'
      },
      {
        title: 'Charlotte de Witte After-Hours',
        time: '1:00 AM',
        location: 'Crobar',
        href: 'https://ra.co/events/ar/buenosaires/techno',
        sellingPoint: 'Keep the Resistance Stage energy alive.'
      },
      {
        title: 'Zabal Techno',
        time: 'Late night',
        location: 'Buenos Aires',
        href: 'https://ra.co/events/2353011',
        sellingPoint: 'Dark, industrial techno for the purists.'
      }
    ]
  },
  {
    day: 'MON',
    date: 'FEB 16',
    title: 'Carnival Peak & The Steak Ritual',
    description: 'National holiday. The highlight is the lunch Nate’s been planning for over a decade.',
    summary: [
      {
        time: '11:30 AM',
        label: 'Don Julio Lunch',
        location: 'Guatemala 4699',
        icon: <Utensils />,
        destId: 'don-julio'
      },
      {
        time: '4:00 PM',
        label: 'Carnival at Plaza Unidad Latinoamericana',
        location: 'Almagro',
        icon: <Sparkles />,
        href: 'https://www.puraciudad.com.ar/confirmaron-el-cronograma-de-corsos-del-carnaval-porteno-2026-sedes-fechas-y-barrios/'
      },
      {
        time: '12:30 AM',
        label: 'La Bomba de Tiempo',
        location: 'Ciudad Cultural Konex',
        icon: <Music />,
        destId: 'la-bomba'
      }
    ],
    schedule: [
      {
        time: '11:30 AM',
        label: 'Don Julio Lunch',
        location: 'Guatemala 4699',
        note: 'The gold standard of Argentine steak.',
        sellingPoint: 'A 20-minute walk from the apartment and worth every bite.',
        icon: <Utensils />,
        destId: 'don-julio'
      },
      {
        time: '4:00 PM',
        label: 'Carnival at Plaza Unidad Latinoamericana',
        location: 'Almagro',
        note: 'Traditional carnival troupes with drums and cymbals.',
        sellingPoint: 'Peak holiday energy in the streets.',
        icon: <Sparkles />,
        href: 'https://www.puraciudad.com.ar/confirmaron-el-cronograma-de-corsos-del-carnaval-porteno-2026-sedes-fechas-y-barrios/'
      },
      {
        time: '12:30 AM (Tue)',
        label: 'La Bomba de Tiempo',
        location: 'Ciudad Cultural Konex',
        note: 'Legendary percussion rave at an old factory.',
        sellingPoint: 'The most iconic Monday night in BA.',
        icon: <Music />,
        destId: 'la-bomba',
        links: [
          { label: 'Tickets', href: 'https://www.labombadetiempo.com/' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Corso de Boedo',
        time: 'From 6:30 PM',
        location: 'Av. Boedo',
        href: 'https://www.puraciudad.com.ar/confirmaron-el-cronograma-de-corsos-del-carnaval-porteno-2026-sedes-fechas-y-barrios/',
        sellingPoint: 'The political and satirical heart of Carnival.'
      },
      {
        title: 'Buenos Aires Extremo',
        time: 'Evening',
        location: 'Costanera',
        href: 'https://turismo.buenosaires.gob.ar/es/eventos',
        sellingPoint: 'BMX, skate, and live bands on the river.'
      },
      {
        title: 'Yamile Burich Trio',
        time: '8:30 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Smooth holiday evening vibes.'
      },
      {
        title: 'Cafe San Bernardo',
        time: 'Late night',
        location: 'Av. Corrientes 5436',
        href: 'https://www.instagram.com/cafesanbernardo/',
        sellingPoint: 'Historic pool hall with locals-only energy.'
      },
      {
        title: 'Polenta en Hache',
        time: 'Midnight',
        location: 'Hache Club',
        href: 'https://www.cafaccess.com/evento/1602-polenta-en-hache',
        sellingPoint: 'High-intensity dance party with free churros at 4 AM.'
      }
    ]
  },
  {
    day: 'TUE',
    date: 'FEB 17',
    title: 'The Polo Flex',
    badge: 'Elite',
    description: 'The ultimate holiday reset. Fresh air, open fields, and the “Sport of Kings.”',
    summary: [
      {
        time: '9:00 AM',
        label: 'Puesto Viejo Polo Day',
        location: 'Countryside',
        icon: <Star />,
        destId: 'polo'
      },
      {
        time: '7:00 PM',
        label: 'El Ateneo Grand Splendid',
        location: 'Av. Santa Fe 1860',
        icon: <BookOpen />,
        href: 'https://turismo.buenosaires.gob.ar/en/otros-establecimientos/el-ateneo-grand-splendid'
      },
      {
        time: '10:00 PM',
        label: 'Tres Monos',
        location: 'Guatemala 4899',
        icon: <GlassWater />,
        destId: 'tres-monos'
      }
    ],
    schedule: [
      {
        time: '9:00 AM',
        label: 'Puesto Viejo Polo Day',
        location: 'Countryside estancia',
        note: 'Lessons, match, and a massive asado lunch.',
        sellingPoint: 'Learn to play while riding polo ponies in the countryside.',
        meta: 'Price: ~$295 each.',
        icon: <Star />,
        destId: 'polo',
        links: [
          { label: 'Polo Day Info', href: 'https://puestoviejo.com/en/lp-polo-day/' }
        ]
      },
      {
        time: '7:00 PM',
        label: 'El Ateneo Grand Splendid',
        location: 'Av. Santa Fe 1860',
        note: 'One of the world’s most beautiful bookstores.',
        sellingPoint: 'A grand old theater turned into a literary cathedral.',
        icon: <BookOpen />,
        href: 'https://turismo.buenosaires.gob.ar/en/otros-establecimientos/el-ateneo-grand-splendid'
      },
      {
        time: '10:00 PM',
        label: 'Tres Monos',
        location: 'Guatemala 4899',
        note: 'Warm hospitality and house-made spirits.',
        sellingPoint: 'Voted a top bar in the world.',
        icon: <GlassWater />,
        destId: 'tres-monos',
        links: [
          { label: 'World’s 50 Best', href: 'https://www.theworlds50best.com/bars/the-list/tres-monos.html' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Los Fabulosos Cadillacs Tribute',
        time: '7:00 PM',
        location: 'CCK Auditorio Nacional',
        href: 'https://palaciolibertad.gob.ar/events/carnaval-toda-la-orquesta-homenaje-a-los-fabulosos-cadillacs-por-la-orquesta-escuela-juvenil-de-san-telmo/',
        sellingPoint: 'A symphonic twist on Argentine rock legends.'
      },
      {
        title: 'Villa Urquiza Murgas',
        time: 'From 6:30 PM',
        location: 'Av. Triunvirato',
        href: 'https://www.puraciudad.com.ar/confirmaron-el-cronograma-de-corsos-del-carnaval-porteno-2026-sedes-fechas-y-barrios/',
        sellingPoint: 'Catch the closing energy of the long weekend.'
      },
      {
        title: 'Hierro Bodegon',
        time: '9:00 PM',
        location: 'Fitz Roy 1722',
        href: 'https://www.timeout.com/es/buenos-aires/aperturas-nuevos-restaurantes-hierro-bodegon-mambo-burdo',
        sellingPoint: 'Modern techniques applied to classic barrio food.'
      },
      {
        title: 'Teatro Ciego “Odd Man Out”',
        time: '6:00 PM',
        location: 'Teatro Ciego',
        href: 'https://teatrociego.org/carteleratc/',
        sellingPoint: 'A story told via non-visual senses.'
      },
      {
        title: 'West Coast Swing',
        time: '6:00 PM',
        location: 'Puerto San Carlos',
        href: 'https://barilocheinforma.gob.ar/agenda-cultural-bariloche-todas-las-actividades-del-9-al-15-de-febrero/',
        sellingPoint: 'Open-air participatory dance on the waterfront.'
      }
    ]
  },
  {
    day: 'WED',
    date: 'FEB 18',
    title: 'Uruguay Escape',
    description: 'Fast ferry to Colonia, cobblestones, and a clean reset day.',
    summary: [
      {
        time: '8:30 AM',
        label: 'Fast Ferry to Colonia',
        location: 'Buquebus Terminal',
        icon: <Plane />,
        destId: 'colonia'
      },
      {
        time: '12:00 PM',
        label: 'Golf Cart Exploration',
        location: 'Colonia Historic Quarter',
        icon: <Camera />
      },
      {
        time: '8:00 PM',
        label: 'Floreria Atlantico',
        location: 'Arroyo 872',
        icon: <Wine />,
        destId: 'floreria-atlantico'
      }
    ],
    schedule: [
      {
        time: '8:30 AM',
        label: 'Fast Ferry to Colonia',
        location: 'Buquebus Terminal',
        note: 'Buy tickets online for the fast crossing.',
        sellingPoint: 'One-hour ferry to a UNESCO-protected town.',
        icon: <Plane />,
        destId: 'colonia',
        links: [
          { label: 'Buquebus', href: 'https://www.buquebus.com/' }
        ]
      },
      {
        time: '12:00 PM',
        label: 'Golf Cart Exploration',
        location: 'Colonia Historic Quarter',
        note: 'Rent a cart at the terminal to cruise the lighthouse and coast.',
        sellingPoint: 'The most relaxed way to see everything quickly.',
        meta: 'Price: ~$60 USD.',
        icon: <Camera />
      },
      {
        time: '8:00 PM',
        label: 'Floreria Atlantico',
        location: 'Arroyo 872',
        note: 'Enter through the refrigerator door in a flower shop.',
        sellingPoint: 'Voted top 50 in the world.',
        icon: <Wine />,
        destId: 'floreria-atlantico',
        links: [
          { label: 'World’s 50 Best', href: 'https://www.theworlds50best.com/bars/the-list/floreria-atlantico.html' },
          { label: 'Official Site', href: 'http://www.floreriaatlantico.com.ar/' }
        ]
      }
    ],
    alternatives: [
      {
        title: 'Anchoita Cava',
        time: 'Opens 6:00 PM',
        location: 'Juan Ramirez de Velasco 1456',
        href: 'https://starwinelist.com/wine-guide/great-wine-bars-and-wine-restaurants-in-buenos-aires',
        sellingPoint: '52 wines by the glass and 110 aged cheeses.'
      },
      {
        title: 'Afters BA',
        time: 'Evening',
        location: 'Costanera Rafael Obligado 7010',
        href: 'https://turismo.buenosaires.gob.ar/es/eventos',
        sellingPoint: 'Open-air electronic beats as the sun hits the river.'
      },
      {
        title: 'Mayumana',
        time: 'Evening',
        location: 'Teatro Gran Rex',
        href: 'https://turismo.buenosaires.gob.ar/es/eventos',
        sellingPoint: 'Mind-blowing percussion and physical theater.'
      },
      {
        title: 'Jazz Voyeur Club',
        time: '8:30 PM',
        location: 'Posadas 1557',
        href: 'https://www.facebook.com/jazzvoyeurBA',
        sellingPoint: 'Free entry with luxury bites in a Recoleta basement.'
      },
      {
        title: 'Teatro Ciego “Amores de Pelicula”',
        time: '7:00 PM',
        location: 'CCK',
        href: 'https://palaciolibertad.gob.ar/events/amores-de-pelicula-con-ana-maria-bovo/',
        sellingPoint: 'Cinematic love stories narrated in total darkness.'
      }
    ]
  },
  {
    day: 'THU',
    date: 'FEB 19',
    title: 'Arena Vibes & Modern Villa Crespo',
    description: 'Leather district by day, arena energy by night, and a late-night fuel stop.',
    summary: [
      {
        time: 'Day',
        label: 'Leather District Shopping',
        location: 'Murillo 666',
        icon: <ShoppingBag />,
        href: 'https://www.murillo666.com.ar/'
      },
      {
        time: '8:00 PM',
        label: 'Movistar Arena',
        location: 'Humboldt 450',
        icon: <Music />,
        href: 'https://www.movistararena.com.ar/'
      },
      {
        time: '11:00 PM',
        label: 'Post-Show Fuel @ Los Bohemios',
        location: 'Humboldt 538',
        icon: <Utensils />,
        href: 'https://www.caatlanta.com.ar/los-bohemios-restaurante/'
      }
    ],
    schedule: [
      {
        time: 'Day',
        label: 'Leather District Shopping',
        location: 'Murillo 666',
        note: 'Custom-made leather jackets.',
        sellingPoint: 'One of the best bargains in the city.',
        meta: 'Price: $200-400.',
        icon: <ShoppingBag />,
        href: 'https://www.murillo666.com.ar/',
        links: [
          { label: 'Price Guide', href: 'https://www.rexby.com/solsalute/ttd/leather-jackets-and-accessories-in-buenos-aires' }
        ]
      },
      {
        time: '8:00 PM',
        label: 'Movistar Arena',
        location: 'Villa Crespo',
        note: 'High-energy alternative dance in the city’s newest indoor arena.',
        sellingPoint: 'Big production, great sound, no chaos.',
        icon: <Music />,
        href: 'https://www.movistararena.com.ar/'
      },
      {
        time: '11:00 PM',
        label: 'Post-Show Fuel @ Los Bohemios',
        location: 'Humboldt 538',
        note: 'Shared milanesas inside a local soccer club hall.',
        sellingPoint: 'Monumental portions and neighborhood energy.',
        icon: <Utensils />,
        href: 'https://www.caatlanta.com.ar/los-bohemios-restaurante/'
      }
    ],
    alternatives: [
      {
        title: 'Track at Moly Club',
        time: '10:00 PM',
        location: 'Niceto Vega 5534',
        href: 'https://www.passline.com/eventos/track-19226',
        sellingPoint: 'Free entry for the new generation of clubbers.'
      },
      {
        title: 'Cielo Sky Bar',
        time: 'Opens 6:00 PM',
        location: 'Grand Brizo Hotel',
        href: 'https://www.instagram.com/cielo.skybar/',
        sellingPoint: 'Best skyline sunset without a reservation.'
      },
      {
        title: 'Casa SaltShaker',
        time: '8:00 PM',
        location: 'Recoleta',
        href: 'https://www.casasaltshaker.com/schedule-reservations/',
        sellingPoint: 'Secret five-course wine-paired communal dinner.'
      },
      {
        title: 'Vino con Gente Equis',
        time: '8:30 PM',
        location: 'Palermo Wine Club',
        href: 'https://www.eventbrite.com/d/argentina--buenos-aires/events/',
        sellingPoint: 'Best way to meet local expat and creative community.'
      },
      {
        title: 'Famin Lombardo de Urquiza',
        time: '11:00 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Deep, soulful sax improvisations.'
      }
    ]
  },
  {
    day: 'FRI',
    date: 'FEB 20',
    title: 'The Grand Finale',
    badge: 'Final Bash',
    description: 'Football tension followed by a two-Michelin-star marathon.',
    summary: [
      {
        time: '8:00 PM',
        label: 'Boca Juniors vs Racing Club',
        location: 'La Bombonera',
        icon: <Star />,
        href: 'https://www.facebook.com/lxfargentina/'
      },
      {
        time: '9:00 PM',
        label: 'Aramburu (Confirmed)',
        location: 'Vicente Lopez 1661',
        icon: <Utensils />,
        href: 'https://arambururesto.com.ar/'
      },
      {
        time: '1:00 AM',
        label: 'Tequila Club',
        location: 'Costanera Norte',
        icon: <Music />,
        href: 'https://www.instagram.com/tequilaclubofficial/'
      }
    ],
    schedule: [
      {
        time: '8:00 PM',
        label: 'Boca Juniors vs Racing Club',
        location: 'La Bombonera',
        note: 'If you do not have tickets, watch at Locos x el Futbol (Av. Las Heras 2101).',
        sellingPoint: 'The city will be electric.',
        icon: <Star />,
        href: 'https://www.facebook.com/lxfargentina/'
      },
      {
        time: '9:00 PM',
        label: 'Aramburu (Confirmed)',
        location: 'Vicente Lopez 1661',
        note: 'Technique-led 18-course tasting menu.',
        sellingPoint: 'One of the top fine-dining experiences in the city.',
        icon: <Utensils />,
        href: 'https://arambururesto.com.ar/',
        links: [
          { label: 'Michelin Guide', href: 'https://guide.michelin.com/en/ciudad-autonoma-de-buenos-aires/buenos-aires_777009/restaurant/aramburu' }
        ]
      },
      {
        time: '1:00 AM',
        label: 'Tequila Club',
        location: 'Costanera Norte',
        note: 'Dress sharp or do not bother showing up.',
        sellingPoint: 'The most exclusive club in BA.',
        icon: <Music />,
        href: 'https://www.instagram.com/tequilaclubofficial/'
      }
    ],
    alternatives: [
      {
        title: 'Crystal Bar',
        time: 'Opens 6:00 PM',
        location: 'Alvear Icon, 32nd floor',
        href: 'https://www.instagram.com/crystal.skybar/',
        sellingPoint: 'Stunning panoramic views of the river and Uruguay.'
      },
      {
        title: 'Buena Vibra Previa',
        time: '8:00 PM',
        location: 'Complejo C Art Media',
        href: 'https://nosonhoras.com.ar/la-previa-buena-vibra-art-media-2026/',
        sellingPoint: 'Gathering spot for the city’s alternative music youth.'
      },
      {
        title: 'Alambre Gonzalez Trio',
        time: '11:00 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Gritty, high-level instrumental evening.'
      },
      {
        title: 'Uptown BA',
        time: 'Opens 8:30 PM',
        location: 'Arevalo 2030',
        href: 'http://www.uptownba.com/',
        sellingPoint: 'You enter through a subway train car.'
      },
      {
        title: 'Paladium Latin Club',
        time: 'Midnight',
        location: 'Niceto Club',
        href: 'https://nicetoclub.com/agenda/',
        sellingPoint: 'Burn off the Aramburu meal on the dance floor.'
      }
    ]
  },
  {
    day: 'SAT',
    date: 'FEB 21',
    title: 'The Flex Day',
    description: 'Street art by day, farewell dinner by night.',
    summary: [
      {
        time: '3:00 PM',
        label: 'Graffitimundo Street Art Tour',
        location: 'Starts in Colegiales',
        icon: <Camera />,
        href: 'https://graffitimundo.com/graffiti-street-art-tours-buenos-aires/'
      },
      {
        time: '9:00 PM',
        label: 'Farewell Dinner @ El Preferido',
        location: 'Borges 2108',
        icon: <Utensils />,
        href: 'https://www.instagram.com/elpreferidodepalermo/'
      },
      {
        time: '11:55 PM',
        label: 'Eagle Departs (EZE)',
        location: 'Airport run',
        icon: <Plane />
      }
    ],
    schedule: [
      {
        time: '3:00 PM',
        label: 'Graffitimundo Street Art Tour',
        location: 'Starts in Colegiales',
        note: 'World-class mural scene in off-the-beaten-path neighborhoods.',
        sellingPoint: 'The best way to understand BA’s street art culture.',
        icon: <Camera />,
        href: 'https://graffitimundo.com/graffiti-street-art-tours-buenos-aires/'
      },
      {
        time: '9:00 PM',
        label: 'Farewell Dinner @ El Preferido de Palermo',
        location: 'Borges 2108',
        note: 'Iconic pink building and legendary schnitzel.',
        sellingPoint: 'A final night meal that feels classic BA.',
        icon: <Utensils />,
        href: 'https://www.instagram.com/elpreferidodepalermo/'
      },
      {
        time: '11:55 PM',
        label: 'Eagle Departs (EZE)',
        location: 'Airport run',
        note: 'Adios, legend.',
        sellingPoint: 'The first farewell of the trip.',
        icon: <Plane />
      }
    ],
    alternatives: [
      {
        title: 'Cumbia Konex',
        time: '12:30 AM',
        location: 'Ciudad Cultural Konex',
        href: 'https://reventick.com/event/cumbia-konex-ciudad-cultural-konex-21-02-2026',
        sellingPoint: 'Final heavy night with cumbia beats.'
      },
      {
        title: 'Boom Boom Kid',
        time: '8:30 PM',
        location: 'Niceto Club',
        href: 'https://nicetoclub.com/agenda/',
        sellingPoint: 'High-energy Argentine punk/indie icon.'
      },
      {
        title: 'Tardes de Folclore',
        time: '7:00 PM',
        location: 'Plaza Seca',
        href: 'https://palaciolibertad.gob.ar/events/tardes-de-folclore-nomas-asi-presenta-de-muchas-formas-lo-mismo/',
        sellingPoint: 'Authentic Argentine country music in an urban setting.'
      },
      {
        title: 'Barbie Martinez Trio',
        time: '8:30 PM',
        location: 'Virasoro Bar',
        href: 'https://www.virasorobar.com.ar/eventos.php',
        sellingPoint: 'Classy vocal standards for a relaxed final night.'
      },
      {
        title: 'Playon San Lorenzo',
        time: 'From 6:30 PM',
        location: 'Av. La Plata 1700',
        href: 'https://www.puraciudad.com.ar/confirmaron-el-cronograma-de-corsos-del-carnaval-porteno-2026-sedes-fechas-y-barrios/',
        sellingPoint: 'The city’s largest local carnival closing.'
      }
    ]
  },
  {
    day: 'SUN',
    date: 'FEB 22',
    title: 'Departure Day',
    description: 'Recovery brunch and the final airport run.',
    summary: [
      {
        time: '12:00 PM',
        label: 'Recovery Brunch @ Cafe Crespin',
        location: 'Vera 699',
        icon: <Coffee />,
        href: 'https://www.cafecrespin.com.ar/'
      },
      {
        time: '8:55 PM',
        label: 'Nasir Departs (EZE)',
        location: 'Airport run',
        icon: <Plane />
      }
    ],
    schedule: [
      {
        time: '12:00 PM',
        label: 'Recovery Brunch @ Cafe Crespin',
        location: 'Vera 699',
        note: 'Best medialunas and cinnamon rolls in Villa Crespo.',
        sellingPoint: 'Perfect reset after the long week.',
        icon: <Coffee />,
        href: 'https://www.cafecrespin.com.ar/'
      },
      {
        time: '8:55 PM',
        label: 'Nasir Departs (EZE)',
        location: 'Airport run',
        note: 'From bachelor to husband.',
        sellingPoint: 'The second farewell of the trip.',
        icon: <Plane />
      }
    ],
    alternatives: [
      {
        title: 'Salon 1923',
        time: '8:00 PM shift',
        location: '16th floor',
        href: 'https://salon1923.com/en/',
        sellingPoint: 'Best view of the National Congress dome.'
      },
      {
        title: 'Nirvana Unplugged Tribute',
        time: '8:00 PM',
        location: 'Niceto Club',
        href: 'https://nicetoclub.com/agenda/',
        sellingPoint: 'Nostalgic rock cover show in a world-class venue.'
      },
      {
        title: 'Tardes de Groove',
        time: '6:00 PM',
        location: 'CCK Plaza Seca',
        href: 'https://palaciolibertad.gob.ar/events/tardes-de-groove-mariu-fernandez/',
        sellingPoint: 'Perfect outdoor finale vibes.'
      },
      {
        title: 'Chakras Meditation',
        time: '6:00 PM',
        location: 'Teatro Ciego',
        href: 'https://teatrociego.org/carteleratc/',
        sellingPoint: '360-sound tech in darkness, ultimate mental recovery.'
      },
      {
        title: 'Crepusculares',
        time: '7:30 PM',
        location: 'CCK La Cupula',
        href: 'https://palaciolibertad.gob.ar/events/crepusculares-instalacion-i-por-arquitectura-y-cuarteto/',
        sellingPoint: 'High-art dance inside the iconic glass dome.'
      }
    ]
  },
  {
    day: 'MON',
    date: 'FEB 23',
    title: 'The Last Man Standing',
    description: 'Nate’s solo exit and one last lap through the city.',
    summary: [
      {
        time: 'Morning',
        label: 'Final Walk Through Parque Tres de Febrero',
        location: 'Palermo',
        icon: <MapPin />,
        href: 'https://turismo.buenosaires.gob.ar/es/atractivo/parque-tres-de-febrero'
      },
      {
        time: 'Later',
        label: 'Nate Departs (EZE)',
        location: 'Airport run',
        icon: <Plane />
      }
    ],
    schedule: [
      {
        time: 'Morning',
        label: 'Final Walk Through Parque Tres de Febrero',
        location: 'Palermo',
        note: 'One last walk before heading to EZE.',
        sellingPoint: 'The calmest possible sendoff.',
        icon: <MapPin />,
        href: 'https://turismo.buenosaires.gob.ar/es/atractivo/parque-tres-de-febrero'
      },
      {
        time: 'Later',
        label: 'Nate Departs (EZE)',
        location: 'Airport run',
        note: 'Recovery begins. Memories forever.',
        sellingPoint: 'The final exit.',
        icon: <Plane />
      }
    ],
    alternatives: []
  }
];


const App = () => {
  const [selectedDest, setSelectedDest] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [checkedBookings, setCheckedBookings] = useState([]);
  const bookingIds = BOOKINGS_CHECKLIST.map((booking) => booking.id);

  useEffect(() => {
    const saved = localStorage.getItem('ba-bookings');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return;
      const hasIndexValues = parsed.some((value) => typeof value === 'number');
      const normalized = hasIndexValues
        ? parsed.map((index) => bookingIds[index]).filter(Boolean)
        : parsed.filter((id) => bookingIds.includes(id));
      setCheckedBookings([...new Set(normalized)]);
    } catch {
      setCheckedBookings([]);
    }
  }, []);

  const toggleBooking = (id) => {
    const updated = checkedBookings.includes(id)
      ? checkedBookings.filter((savedId) => savedId !== id)
      : [...checkedBookings, id];
    setCheckedBookings(updated);
    localStorage.setItem('ba-bookings', JSON.stringify(updated));
  };

  const ItineraryItem = ({ item, variant = 'compact' }) => {
    const isDestination = Boolean(item.destId);
    const isExternal = Boolean(item.href);
    const isClickable = isDestination || isExternal;
    const wrapperClasses = `flex items-start gap-3 p-4 rounded-xl transition-all border border-transparent w-full text-left ${
      isClickable
        ? 'bg-white/5 hover:bg-white/10 hover:border-white/10 cursor-pointer group'
        : 'bg-slate-800/30'
    }`;

    const content = (
      <>
        <div className="text-blue-500 bg-blue-500/10 p-2 rounded-lg mt-0.5">{item.icon}</div>
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-100">
            {item.time && <span className="text-blue-400">{item.time}</span>}
            {item.time ? ' — ' : ''}
            {item.label}
          </p>
          {item.location && <p className="text-xs text-slate-500">{item.location}</p>}
          {variant === 'detailed' && item.note && (
            <p className="text-xs text-slate-400 mt-1">{item.note}</p>
          )}
          {variant === 'detailed' && item.meta && (
            <p className="text-xs text-slate-500 mt-1">{item.meta}</p>
          )}
          {variant === 'detailed' && item.sellingPoint && (
            <p className="text-xs text-emerald-300 mt-1">Selling Point: {item.sellingPoint}</p>
          )}
          {variant === 'detailed' && item.links?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        {isDestination && (
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
        )}
        {isExternal && !isDestination && (
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
        )}
      </>
    );

    if (isExternal) {
      return (
        <a href={item.href} target="_blank" rel="noreferrer" className={wrapperClasses}>
          {content}
        </a>
      );
    }

    if (isDestination) {
      return (
        <button
          type="button"
          onClick={() => setSelectedDest(DESTINATIONS[item.destId])}
          className={wrapperClasses}
        >
          {content}
        </button>
      );
    }

    return <div className={wrapperClasses}>{content}</div>;
  };

  const DayCard = ({ day, date, title, summary, schedule, alternatives, badge, description }) => (
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
        {summary.map((item) => (
          <ItineraryItem key={`${item.time}-${item.label}`} item={item} variant="compact" />
        ))}
      </div>
      <details className="mt-4 group">
        <summary className="flex items-center justify-between cursor-pointer bg-slate-800/40 px-4 py-3 rounded-2xl text-xs uppercase tracking-widest font-bold text-slate-300">
          Dive Deeper: Full Schedule + Alternatives
          <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3">Full Schedule</h4>
            <div className="space-y-3">
              {schedule.map((item) => (
                <ItineraryItem key={`${item.time}-${item.label}`} item={item} variant="detailed" />
              ))}
            </div>
          </div>
          {alternatives?.length > 0 && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-3">Top Alternatives</h4>
              <div className="space-y-3">
                {alternatives.map((alt) => (
                  <a
                    key={`${alt.title}-${alt.time}`}
                    href={alt.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-slate-800/30 border border-slate-700/50 rounded-2xl p-4 hover:border-slate-500 transition-all"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-bold text-slate-100">{alt.title}</p>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {alt.time} · {alt.location}
                    </p>
                    <p className="text-xs text-emerald-300 mt-2">Selling Point: {alt.sellingPoint}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </details>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans pb-24">
      {/* Header */}
      <header className="relative h-72 sm:h-80 md:h-96 flex items-end p-6 sm:p-8 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] brightness-[0.5]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80"
        >
          <source src="https://cdn.midjourney.com/video/aca202ff-e5a3-4428-9253-780be28e2d06/2.mp4" type="video/mp4" />
        </video>
        <img
          src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="BA skyline"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 w-full">
          <div className="flex gap-2 mb-3">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Feb 13 - 23, 2026
            </span>
            <span className="bg-green-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              11 DAYS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            BA{' '}
            <span className="text-blue-500 underline decoration-4 underline-offset-8 decoration-blue-500/50">
              UNLEASHED
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mt-3 font-semibold tracking-wide uppercase">
            Three Idiots Take Buenos Aires
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            A bachelor party, a birthday, and one guy who just wants to go to bed.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-red-500" /> Base: {BASE_ADDRESS}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Your guide to surviving and thriving in Buenos Aires. Everything you need, nothing you don't.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <nav className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl border-b border-slate-800 overflow-x-auto shadow-2xl">
        <div className="flex min-w-max">
          {['itinerary', 'bookings', 'neighborhoods', 'food', 'money', 'spanish', 'emergency', 'secrets', 'packing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 sm:py-5 px-4 sm:px-6 text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab === 'itinerary' && <Calendar className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'bookings' && <CheckCircle2 className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'neighborhoods' && <Building className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'food' && <Utensils className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'money' && <DollarSign className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'spanish' && <MessageCircle className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'emergency' && <Phone className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'secrets' && <Zap className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab === 'packing' && <Briefcase className="inline-block w-4 h-4 mb-1 mr-2" />}
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* ITINERARY TAB */}
        {activeTab === 'itinerary' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-6 rounded-3xl mb-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Welcome to Your BA Adventure
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                This isn't just an itinerary—it's your survival guide. We've packed Ultra, Bad Bunny, world-class steaks,
                polo on horseback, and enough insider tips to make you feel like a local. Click any item with an arrow to see full details,
                navigation, and pro tips. Ready? Let's go.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
              <h2 className="text-2xl font-black text-white mb-3">Meet the cast of characters</h2>
              <p className="text-sm text-slate-400 mb-6">
                Official trip motto: <span className="text-blue-400 font-semibold">“We’re not getting any younger, but we’re definitely getting dumber together.”</span>
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {CAST_MEMBERS.map((member) => (
                  <div key={member.name} className="bg-black/40 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">{member.title}</p>
                    <h3 className="text-xl font-black text-white mt-2">{member.name}</h3>
                    <p className="text-xs text-slate-400 mt-2">{member.description}</p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      {member.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <Circle className="w-3 h-3 text-blue-500 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
              <h3 className="text-xl font-black text-white mb-4">Logistics & Tactical Mobility</h3>
              <div className="space-y-3">
                {LOGISTICS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 hover:border-slate-500 transition-all"
                  >
                    <div className="bg-slate-900/60 p-2 rounded-xl">{item.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                      <span className="inline-block mt-3 text-[10px] uppercase tracking-widest font-bold text-blue-400">
                        {item.linkLabel}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
              <h3 className="text-xl font-black text-white mb-4">FAQ (a.k.a. the chaos brief)</h3>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-sm font-semibold text-blue-400">{faq.question}</p>
                    <p className="text-sm text-slate-300 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-black text-white mb-3">Things that will definitely happen</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {DEFINITELY_HAPPEN.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-black text-white mb-3">Things that probably won’t happen</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {PROBABLY_NOT.map((item) => (
                    <li key={item} className="flex gap-2">
                      <X className="w-4 h-4 text-red-400 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {ITINERARY_DAYS.map((day) => (
              <DayCard key={`${day.day}-${day.date}`} {...day} />
            ))}
          </div>
        )}

        {/* BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div className="animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 p-6 rounded-3xl mb-6">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Booking Tracker
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check off items as you book them. This list is saved in your browser. Red = critical, Yellow = important, Green = nice to have.
              </p>
            </div>

            <div className="space-y-3">
              {BOOKINGS_CHECKLIST.map((booking, idx) => (
                <div
                  key={booking.id}
                  onClick={() => toggleBooking(booking.id)}
                  className={`bg-slate-900/60 border rounded-2xl p-5 cursor-pointer transition-all ${
                    checkedBookings.includes(booking.id)
                      ? 'border-green-500/50 bg-green-500/5'
                      : booking.priority === 'critical'
                      ? 'border-red-500/30 hover:border-red-500/50'
                      : booking.priority === 'high'
                      ? 'border-yellow-500/30 hover:border-yellow-500/50'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {checkedBookings.includes(booking.id) ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-bold text-white ${checkedBookings.includes(booking.id) ? 'line-through opacity-50' : ''}`}>
                          {booking.item}
                        </h3>
                        <span
                          className={`text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${
                            booking.priority === 'critical'
                              ? 'bg-red-600 text-white'
                              : booking.priority === 'high'
                              ? 'bg-yellow-600 text-white'
                              : 'bg-slate-600 text-white'
                          }`}
                        >
                          {booking.priority}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-1">{booking.date}</p>
                      <p className="text-xs text-slate-500">Book by: {booking.bookBy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase">Pro Booking Tips</h3>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• Don Julio books out 90 days in advance. Set a calendar alert.</li>
                <li>• Ultra and Bad Bunny sell out. Get tickets ASAP once on sale.</li>
                <li>• La Bomba de Tiempo tickets go live 1 week before—buy online or it's sold out.</li>
                <li>• Colonia ferry: book the "fast ferry" (1 hour), not the slow one (3 hours).</li>
                <li>• Download Cabify NOW. You'll need it for Ultra and Bad Bunny rides.</li>
              </ul>
            </div>
          </div>
        )}

        {/* NEIGHBORHOODS TAB */}
        {activeTab === 'neighborhoods' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 p-6 rounded-3xl">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-purple-400" />
                BA Neighborhood Guide
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Buenos Aires is HUGE (48 neighborhoods!). Here are the ones you'll actually spend time in.
              </p>
            </div>

            {NEIGHBORHOODS.map((hood, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-black text-white mb-2">{hood.name}</h3>
                <p className="text-sm text-blue-400 mb-3 italic">{hood.vibe}</p>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">{hood.why}</p>
                <div className="flex flex-wrap gap-2">
                  {hood.highlights.map((highlight, i) => (
                    <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOOD GUIDE TAB */}
        {activeTab === 'food' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 p-6 rounded-3xl">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-400" />
                What to Eat (and Where)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Argentina = beef, wine, and carbs. Here's what to order and where to find it. Come hungry.
              </p>
            </div>

            {FOOD_GUIDE.map((food, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-black text-white">{food.dish}</h3>
                  <span className="text-green-400 font-bold text-sm">{food.price}</span>
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">{food.description}</p>
                <p className="text-xs text-slate-500">
                  <span className="font-bold text-blue-400">Where:</span> {food.where}
                </p>
              </div>
            ))}

            <div className="bg-yellow-600/10 border border-yellow-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Food Pro Tips
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• Argentines eat dinner at 10 PM. If you show up at 7 PM, the restaurant will be empty.</li>
                <li>• "Cubierto" = table charge ($2-5). It's normal. Includes bread.</li>
                <li>• Tipping: 10% is standard. Servers make low wages—don't skip this.</li>
                <li>• Wine is cheaper than water. Embrace it. Malbec from Mendoza is the move.</li>
                <li>• Street food is safe and delicious. Get the choripán from street carts.</li>
                <li>• Vegetarian? Good luck. But Hierbabuena and Artemisia have you covered.</li>
              </ul>
            </div>
          </div>
        )}

        {/* MONEY TAB */}
        {activeTab === 'money' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 p-6 rounded-3xl">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Money in Argentina (Read This!)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Argentina's economy is... complicated. Follow these tips and you'll save 40%+. Ignore them and you're getting ripped off.
              </p>
            </div>

            {MONEY_TIPS.map((tip, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                  {tip.icon}
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{tip.content}</p>
              </div>
            ))}

            <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase">Sample Daily Budget (with Blue Rate)</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Breakfast (café + medialunas)</span>
                  <span className="font-bold">$5</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Lunch (empanadas + beer)</span>
                  <span className="font-bold">$10</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Dinner (nice restaurant + wine)</span>
                  <span className="font-bold">$40</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Drinks / nightlife</span>
                  <span className="font-bold">$25</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Transport (Cabify / taxis)</span>
                  <span className="font-bold">$15</span>
                </div>
                <div className="flex justify-between pt-2 font-black text-green-400">
                  <span>TOTAL PER DAY</span>
                  <span>$95</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Add ~$300 for Don Julio dinner, ~$150 for polo day, ~$200 for Ultra tickets. You're looking at $1,500-2,000 for
                the entire 11-day trip (excluding flights/accommodation).
              </p>
            </div>
          </div>
        )}

        {/* SPANISH TAB */}
        {activeTab === 'spanish' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 p-6 rounded-3xl">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-pink-400" />
                Essential Spanish Phrases
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most porteños speak some English, but knowing a few phrases goes a long way. Argentine Spanish has a unique accent
                and uses "vos" instead of "tú"—but don't stress, they'll understand you.
              </p>
            </div>

            {SPANISH_PHRASES.map((phrase, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <div className="flex-1">
                    <p className="text-lg font-black text-white mb-1">{phrase.spanish}</p>
                    <p className="text-sm text-slate-400 mb-1">{phrase.english}</p>
                    <p className="text-xs text-slate-600 italic">{phrase.phonetic}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-yellow-600/10 border border-yellow-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase">Language Pro Tips</h3>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• "Boludo" = dude/bro. You'll hear it constantly. It's friendly (usually).</li>
                <li>• "Che" = hey. Very Argentine. Think "ey, che boludo!"</li>
                <li>• Porteños speak FAST. Don't worry—most will slow down if you ask.</li>
                <li>• "Y" and "LL" sound like "sh" or "zh" in BA. "Yo" = "sho", "calle" = "ca-she".</li>
                <li>• Google Translate works great for menus and signs. Download offline Spanish.</li>
                <li>• Learn "Disculpa" (excuse me) and "Gracias" (thanks)—you'll use them 100x/day.</li>
              </ul>
            </div>
          </div>
        )}

        {/* EMERGENCY TAB */}
        {activeTab === 'emergency' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 p-6 rounded-3xl">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-400" />
                Emergency Contacts
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Buenos Aires is generally safe, especially in Palermo. But save these numbers just in case. Screenshot this page.
              </p>
            </div>

            <div className="space-y-3">
              {EMERGENCY_INFO.map((info, idx) => (
                <a
                  key={idx}
                  href={`tel:${info.value}`}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-red-500/30 transition-all"
                >
                  <div className="text-red-500 bg-red-500/10 p-3 rounded-lg">{info.icon}</div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">{info.label}</p>
                    <p className="text-blue-400 font-mono text-sm">{info.value}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </a>
              ))}
            </div>

            <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase">Safety Tips</h3>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• Palermo, Recoleta, Puerto Madero = very safe. La Boca = sketchy after dark (avoid unless guided tour).</li>
                <li>• The "fake wallet" trick: carry a small decoy wallet with $20-30 in case of pickpockets.</li>
                <li>• Don't flash expensive watches, jewelry, or cameras on the street.</li>
                <li>• Use Cabify/Uber from the app—never hail street taxis at night.</li>
                <li>• Keep your phone charged and share live location with the group when out late.</li>
                <li>• Hospitals: Hospital Alemán and Swiss Medical both have English-speaking staff.</li>
                <li>• Pharmacies ("Farmacia") are everywhere. Most meds available over-the-counter.</li>
              </ul>
            </div>
          </div>
        )}

        {/* SECRETS TAB */}
        {activeTab === 'secrets' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Pro Tip: The Cabify Hack
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Uber is 50/50 in BA. <strong>Cabify</strong> is 100%. Download it now. You can book rides in advance, drivers are
                professional, and it's the ONLY way to get home from Ultra without getting scammed by street taxis charging 5x the normal fare.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold">DOWNLOAD NOW</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold">PRE-BOOK RIDES</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold">ENGLISH APP</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> Artlab (Chacarita)
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  If Ultra feels too mainstream, head to Artlab. Digital arts center with the best sound system in South America
                  and deep techno vibes. Locals only. Open Friday/Saturday nights.
                </p>
                <a
                  href={`https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Artlab+Buenos+Aires`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  Get directions →
                </a>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-green-500" /> Casa Saltshaker (Puerta Cerrada)
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Hidden "closed-door" restaurant. You eat in a chef's living room with 10 strangers. Multi-course tasting menu.
                  Best way to meet people. Book 1-2 weeks ahead via their website.
                </p>
                <a
                  href="https://www.casasaltshaker.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  Book here →
                </a>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800" onClick={() => setSelectedDest(DESTINATIONS['floreria-atlantico'])}>
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2 cursor-pointer">
                  <MapPin className="w-4 h-4 text-red-500" /> Florería Atlántico
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Walk into a flower shop on Arroyo street. Open the refrigerator door. Walk down into one of the world's best
                  cocktail bars. James Bond vibes. Make a reservation or arrive at 8 PM sharp.
                </p>
                <button className="text-blue-400 text-xs hover:underline">See full details →</button>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-500" /> Café Secreto Morning Routine
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Skip Starbucks. Go to "LAB" or "Lattente" for proper cortados. Order "medialunas de manteca" (butter croissants)
                  and a cortado ($3 total). Stand at the bar like a local. Perfect hangover cure.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Wine className="w-4 h-4 text-purple-500" /> Wine Shop Hack
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  "Winery" wine shop in Palermo lets you buy bottles at store price and drink them there for a small corkage fee ($5).
                  Perfect for a pre-dinner wine tasting. Try Malbecs from Mendoza and Cafayate.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h4 className="font-black text-white mb-2 uppercase flex items-center gap-2">
                  <Music className="w-4 h-4 text-pink-500" /> Post-Ultra 24hr Spots
                </h4>
                <p className="text-xs text-slate-400">
                  If you're still awake at 5 AM: <strong>El Cuartito</strong> (pizza), <strong>Calle Florida</strong> (24hr
                  empanadas), or just grab street choripán. BA nightlife goes until the sun comes up—embrace it.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PACKING TAB */}
        {activeTab === 'packing' && (
          <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 animate-in fade-in duration-500">
            <h3 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-2">
              <ShieldCheck className="text-green-500" /> The Survival Kit
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Physical Passport',
                  desc: 'MANDATORY for Colonia ferry and some club entries. Check expiration date (needs 6+ months validity).'
                },
                {
                  title: 'Portable Power Bank (20,000+ mAh)',
                  desc: 'Ultra kills phone batteries in 4 hours. Bad Bunny concert = no signal = constant searching = dead phone. Bring a beefy one.'
                },
                {
                  title: 'Earplugs (Loop or similar)',
                  desc: 'Stadium and festival acoustics are brutal. Protect your hearing. You can still hear music, just not the ringing.'
                },
                {
                  title: '$500+ USD Cash (Clean Bills)',
                  desc: 'For blue dollar exchange. $100 bills get best rate. Must be clean (no tears, marks, or old bills).'
                },
                {
                  title: 'Backup "Fake" Wallet',
                  desc: 'Small wallet with $20-30 USD and an old credit card. In case of pickpockets (rare but possible).'
                },
                {
                  title: 'Comfortable Walking Shoes',
                  desc: "You'll walk 10+ miles some days. Bring broken-in sneakers. Save dress shoes for nice dinners only."
                },
                {
                  title: 'Light Jacket',
                  desc: "BA in February = summer but evenings can be cool (60-65°F). Light jacket or hoodie for late nights."
                },
                {
                  title: 'Sunscreen + Sunglasses',
                  desc: "Southern hemisphere sun hits different. SPF 50 minimum. You'll be outside a LOT."
                },
                {
                  title: 'Portable Phone Charger Cable',
                  desc: 'Bring USB-C and Lightning cables. Everyone will forget theirs and borrow yours.'
                },
                {
                  title: 'Daypack / Small Backpack',
                  desc: 'For festivals, polo day, Colonia trip. Something light that can hold water, charger, sunscreen.'
                },
                {
                  title: 'Advil / Ibuprofen',
                  desc: 'For obvious reasons. You can buy it there but just bring a bottle.'
                },
                {
                  title: 'Nice Outfit for Clubs',
                  desc: 'Tequila and Faena have dress codes. Button-down shirt, nice jeans, leather shoes. No sneakers/flip-flops.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 border-b border-slate-800 pb-4">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-500 cursor-pointer" />
                  <div>
                    <p className="font-bold text-sm text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
              <h3 className="text-sm font-black text-white mb-3 uppercase">Don't Bring / Not Needed</h3>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Plug adapter:</strong> Argentina uses Type I plugs (same as Australia). Buy one at EZE airport if needed.</li>
                <li>• <strong>Lots of electronics:</strong> Laptop stays home unless you're working remote. This is vacation mode.</li>
                <li>• <strong>Fancy camera:</strong> Phone cameras are great and less conspicuous. Leave the DSLR at home.</li>
                <li>• <strong>Winter clothes:</strong> It's summer in BA (75-85°F). No need for heavy jackets.</li>
                <li>• <strong>Tons of toiletries:</strong> Buy shampoo/deodorant there. It's cheap and saves luggage space.</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-black animate-in fade-in duration-300 overflow-y-auto">
          <div className="relative min-h-screen pb-20">
            <button
              onClick={() => setSelectedDest(null)}
              className="fixed top-6 right-6 z-50 bg-black/50 hover:bg-black p-3 rounded-full backdrop-blur-md border border-white/10 transition-all"
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
                <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-8">{selectedDest.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-white/5 p-4 rounded-3xl flex flex-col justify-center items-center border border-white/5">
                    <Navigation className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Distance</p>
                    <p className="text-white font-bold text-sm text-center">{selectedDest.distance}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-3xl flex flex-col justify-center items-center border border-white/5">
                    <Clock className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Drive</p>
                    <p className="text-white font-bold text-sm text-center">{selectedDest.driveTime}</p>
                  </div>
                  {selectedDest.price && (
                    <div className="bg-white/5 p-4 rounded-3xl flex flex-col justify-center items-center border border-white/5">
                      <DollarSign className="w-5 h-5 text-green-500 mb-2" />
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Price</p>
                      <p className="text-white font-bold text-sm">{selectedDest.price}</p>
                    </div>
                  )}
                </div>

                {selectedDest.vibe && (
                  <div className="bg-purple-600/10 p-5 rounded-3xl border border-purple-600/20 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <h4 className="text-purple-300 font-black uppercase text-xs tracking-widest">The Vibe</h4>
                    </div>
                    <p className="text-sm text-slate-200 italic">"{selectedDest.vibe}"</p>
                  </div>
                )}

                <div className="space-y-6 mb-10">
                  <div className="bg-blue-600/5 p-6 rounded-3xl border border-blue-600/20">
                    <h4 className="flex items-center gap-2 text-blue-400 font-black mb-3 uppercase text-xs tracking-widest">
                      <Zap className="w-4 h-4" /> Why This Is a Win
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

                {selectedDest.directions.startsWith('http') && (
                  <a
                    href={selectedDest.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black transition-all shadow-xl shadow-blue-600/20 text-sm sm:text-base mb-4"
                  >
                    <MapPin className="w-5 h-5" /> OPEN NAVIGATION FROM BASE
                  </a>
                )}

                {selectedDest.website && (
                  <a
                    href={selectedDest.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-4 sm:py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-3xl font-black transition-all text-sm sm:text-base"
                  >
                    <Star className="w-5 h-5" /> VISIT WEBSITE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-md border-t border-slate-800 p-4 text-center z-20">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          Wolfpack BA 2026 // No Regrets
        </p>
      </footer>
    </div>
  );
};

export default App;
