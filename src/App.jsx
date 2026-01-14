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
  ShieldCheck,
  Coffee,
  Pizza,
  Wine,
  Flame,
  Sparkles,
  Camera,
  Phone,
  DollarSign,
  AlertCircle,
  MessageCircle,
  Heart,
  BookOpen,
  Sunrise,
  Moon,
  TrendingUp
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
    why: "Look, this is THE reason you're here. 40,000 people losing their minds to Armin, Hardwell, Tiësto. The production is INSANE - lasers, pyro, the whole shebang. But real talk: leaving is chaos. Walk 10 mins away from the gates before ordering a Cabify or you'll be standing there for 2 hours watching your battery die.",
    tips: '💡 SCREENSHOT YOUR QR CODE NOW. Like right now. Signal is non-existent once everyone arrives. Also bring a portable charger, sunscreen (it's HOT), and hide a backup 5000 peso note in your shoe. Trust me.',
    mustTry: 'Position yourself near the main stage for closing sets. The energy is unreal.',
    price: '$$$$',
    vibe: 'Mass euphoria with 40K of your closest friends'
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
    why: "El Monumental is LEGENDARY - this is where Maradona played, where Argentina won championships. And now? Bad Bunny turning it into the biggest reggaeton party in South America. The stadium is close enough to Palermo that if traffic gets insane (which it will), you can literally walk home in 40 minutes. Some nights that's faster than waiting for a ride.",
    tips: '🚶 Hot tip: Enter through the quiet side streets of Belgrano (not the main avenue). After the show, walk AWAY from Libertador before calling a ride - you'll save an hour of waiting. The streets get absolutely mobbed.',
    mustTry: 'Get there early to see the crowd energy build up. Argentines go HARD for reggaeton.',
    price: '$$$',
    vibe: 'Stadium-sized reggaeton madness with 70,000 singing along'
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
    why: "This is it. THE meal. Ranked #1 steakhouse in the world. The beef is grass-fed perfection, aged to hell, grilled over wood fire. The wine cellar has 6,000+ bottles. You'll see couples getting engaged here. It's that kind of vibe.",
    tips: "📅 Book 90 DAYS out (I'm not kidding). If it's full, hit up 'El Preferido de Palermo' across the street - same owners, more casual, still incredible. Order the 'bife de chorizo' medium-rare and the mollejas (sweetbreads). Trust.",
    mustTry: 'Bife de Chorizo (prime strip) + Malbec from Catena Zapata. Let the waiter choose your wine.',
    price: '$$$$',
    vibe: 'Refined carnivore temple where beef is religion'
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
    why: "After Ultra and Bad Bunny, you NEED this. Fresh country air, badass horses, unlimited Malbec, and the best asado you'll eat all week. They'll teach you to hit the ball and you'll feel like a damn champion. Plus the photos are fire.",
    tips: '🐴 Wear jeans and closed shoes (no sandals). They provide helmets. Don't stress about skill - they'll have you whacking balls within 20 mins. Pace yourself on the wine at lunch or the afternoon lessons get interesting lol.',
    mustTry: 'The asado is unlimited - chorizo, short ribs, chimichurri. Eat ALL of it.',
    price: '$$$',
    vibe: 'Bougie cowboy energy with unlimited wine'
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
    why: "Every. Single. Monday. For 15+ years. This isn't a tourist trap - it's where porteños (BA locals) go to dance to 20 drummers improvising for 2 hours straight. The crowd is mixed - students, families, old hippies, travelers. Everyone loses their mind together. It's beautiful chaos.",
    tips: '🎫 Buy tickets online 1 week before - it ALWAYS sells out by Monday at 7 PM. Doors at 7:30, drums start at 8:30. Get there early for good spots. Bring cash for drinks (beer is cheap). The vibe builds slowly then EXPLODES.',
    mustTry: 'Stand near the drums for the full sensory overload. The bass rattles your ribs.',
    price: '$',
    vibe: 'Sweaty drum circle that turns into a 2000-person dance party'
  },
  colonia: {
    id: 'colonia',
    title: 'Colonia del Sacramento',
    category: 'Day Trip',
    image:
      'https://images.unsplash.com/photo-1590013330452-9769910d3257?auto=format&fit=crop&w=800&q=80',
    description: 'Ferry across the Rio de la Plata to a Portuguese colonial town in Uruguay.',
    distance: '6 km (to Ferry)',
    driveTime: '20 mins to port',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Buquebus,+Buenos+Aires`,
    website: 'https://www.buquebus.com/',
    why: "Perfect recovery day. You'll ferry across the massive Rio de la Plata (it's basically an ocean) to this cute colonial Portuguese town. Rent a golf cart, cruise cobblestone streets, eat ice cream, take photos. It's a whole different vibe from BA's chaos.",
    tips: '🛂 BRING YOUR PASSPORT (for real - it's customs). Ferry check-in is like an airport - arrive 1 hour early. Book round-trip in advance. In Colonia, rent a golf cart at the port (~$40 USD for 4 hours). Hit the lighthouse and the historic quarter.',
    mustTry: 'Get alfajores at a local shop and eat them by the water. Peak vacation vibes.',
    price: '$$',
    vibe: 'Chill coastal town where you accidentally end up in Uruguay'
  },
  faena: {
    id: 'faena',
    title: 'Faena Hotel Pool',
    category: 'Luxe',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: 'The most exclusive hotel in Puerto Madero. The pool is a scene.',
    distance: '8 km',
    driveTime: '25 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Faena+Hotel+Buenos+Aires`,
    why: "If you want to feel like a baller for a day, this is it. Philippe Starck designed everything. The pool is all white with red velvet curtains and models everywhere. The vibe is 'I definitely have a Swiss bank account.' Great for Instagram and people watching.",
    tips: "💳 Book a 'Day Pass' ($80-120 USD) or just reserve a table at Rojo Tango for drinks - that gets you pool access too. Dress code is resort casual (aka look good). Go late afternoon when the lighting is perfect.",
    mustTry: 'Order a cocktail at the Library Lounge and pretend you own a yacht.',
    price: '$$$$',
    vibe: 'Ultra-luxury eye candy where everyone is suspiciously attractive'
  },
  'tres-monos': {
    id: 'tres-monos',
    title: 'Tres Monos',
    category: 'Cocktail Bar',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    description: 'Award-winning cocktail den with inventive drinks and buzzy crowd.',
    distance: '2.3 km',
    driveTime: '9 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Tres+Monos,+Buenos+Aires`,
    website: 'https://www.tresmonosbar.com/',
    why: "Part of the World's 50 Best Bars list. The cocktails are next-level - they'll make you something custom based on your mood. The crowd is young, cool, and actually local. Perfect spot after polo day when you're feeling fancy but not stuffy.",
    tips: '🍸 Arrive before 10 PM or you'll wait 30+ mins. Sit at the bar and tell them what flavors you like - they'll create something wild. Cash or card both work. Budget ~$15 USD per cocktail.',
    mustTry: 'Ask for their off-menu creations. The bartenders are artists.',
    price: '$$$',
    vibe: 'Moody cocktail lab where drinks come with smoke and flowers'
  },
  'la-cabrera': {
    id: 'la-cabrera',
    title: 'La Cabrera Parrilla',
    category: 'Steakhouse',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    description: 'Casual parrilla with MASSIVE portions and incredible value.',
    distance: '1.8 km',
    driveTime: '7 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/La+Cabrera,+Buenos+Aires`,
    why: 'If Don Julio is booked or you want something more chill, La Cabrera is the move. The steaks are HUGE (easily shareable) and come with like 10 side dishes. Great wine list, fun atmosphere, and way easier to get a table.',
    tips: "🥩 The portions are INSANE - one steak feeds 2 people. Seriously. Order one, share, and get more if you're still hungry. Show up at 7:30 PM or 10:30 PM to avoid the 9 PM dinner rush.",
    mustTry: 'Ojo de Bife (ribeye) with the included sides (they bring like 8 little dishes!)',
    price: '$$$',
    vibe: 'Lively parrilla where portions are absurd and everyone is happy'
  },
  'el-cuartito': {
    id: 'el-cuartito',
    title: 'El Cuartito Pizza',
    category: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    description: 'Legendary Argentine pizza spot open since 1934.',
    distance: '4.2 km',
    driveTime: '15 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/El+Cuartito,+Buenos+Aires`,
    why: "Argentine pizza is its own thing - thick, LOADED with cheese, kinda greasy in the best way. El Cuartito has been doing it since 1934. The walls are covered in football (soccer) memorabilia. It's a classic BA experience and perfect for a late-night munchies run.",
    tips: '🍕 Order "muzzarella" (cheese) or "napolitana" (cheese, tomato, garlic). Portions are huge. Grab a Quilmes beer. Cash only! There's usually a wait but it moves fast. Stand at the bar if you want to eat quick.',
    mustTry: 'Muzzarella pizza + fernet con coca (the local drink - tastes like medicine but you'll grow to love it).',
    price: '$',
    vibe: 'Old-school pizzeria where everyone argues about football'
  },
  'ninina-bakery': {
    id: 'ninina-bakery',
    title: 'Ninina Bakery',
    category: 'Cafe',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    description: 'Instagram-perfect bakery with the best croissants and pastries.',
    distance: '2.1 km',
    driveTime: '8 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Ninina+Bakery,+Buenos+Aires`,
    why: "This is where you cure your hangover with carbs. The croissants are French-level good, the vibes are immaculate (all white interior, flowers everywhere), and the coffee is strong. It's the perfect 'I need to feel human again' spot after Ultra weekend.",
    tips: '☕ Get there before 10 AM on weekends or you'll wait. Order at the counter, grab a table. The almond croissant is STUPID good. They have oat milk. Bring your camera - everything is photogenic.',
    mustTry: 'Almond croissant + flat white. Get a pain au chocolat for the road.',
    price: '$$',
    vibe: 'Parisian bakery vibes where everyone looks good eating carbs'
  },
  'lattente': {
    id: 'lattente',
    title: 'L\'Attenté Café',
    category: 'Cafe',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Specialty coffee roaster with insane brunch.',
    distance: '1.6 km',
    driveTime: '6 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/L\'Attenté,+Buenos+Aires`,
    why: 'Best coffee in Palermo, hands down. They roast their own beans, the baristas actually know what they're doing, and the brunch menu is fire. Good vibes, fast WiFi if you need to answer emails (lol who works on vacation).',
    tips: '🥑 Brunch gets PACKED 10 AM - 1 PM on weekends. Go early or go late. The avocado toast is huge. They have cold brew on tap. Solid spot to plan your day while caffeinating.',
    mustTry: 'Flat white + the salmon toast. Their house blend is smooth.',
    price: '$$',
    vibe: 'Third-wave coffee shop where everyone is on their MacBook'
  },
  'floreria-atlantico': {
    id: 'floreria-atlantico',
    title: 'Florería Atlántico',
    category: 'Speakeasy',
    image:
      'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80',
    description: 'Hidden bar behind a flower shop. Ranked in World's 50 Best.',
    distance: '5.1 km',
    driveTime: '18 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Florería+Atlántico,+Buenos+Aires`,
    why: "This is THE speakeasy everyone talks about. You walk into what looks like a flower shop, open the cooler door, and descend into this underground cocktail bar. It's been on the World's 50 Best list multiple times. The drinks are incredible and the whole thing feels like a secret mission.",
    tips: "🌹 Reserve online a few days ahead. It's small and always packed. When you arrive, act like you're buying flowers, then someone will let you through the cooler. Cocktails run ~$12-15 USD. Dress nice-ish.",
    mustTry: 'Let the bartender surprise you. They're wizards.',
    price: '$$$',
    vibe: 'Hidden underground bar that feels like you discovered a secret'
  },
  'boticario': {
    id: 'boticario',
    title: 'Boticario Bar',
    category: 'Bar',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    description: 'Neighborhood bar in Palermo with craft cocktails and chill vibes.',
    distance: '900 m',
    driveTime: '4 mins',
    walkTime: '11 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Boticario,+Buenos+Aires`,
    why: 'Super close to your base, perfect for a nightcap without committing to a big night out. The cocktails are solid, the crowd is mixed locals and travelers, and the vibe is relaxed. Good spot to decompress after Ultra Day 1.',
    tips: '🍹 No reservations needed. Just walk in. Sit at the bar if you want to chat with bartenders. They have a good whiskey selection and make a mean gin and tonic.',
    mustTry: 'Old fashioned or ask what gin they recommend.',
    price: '$$',
    vibe: 'Cozy neighborhood bar where you end up staying longer than planned'
  },
  'uptown': {
    id: 'uptown',
    title: 'Uptown Speakeasy',
    category: 'Speakeasy',
    image:
      'https://images.unsplash.com/photo-1570649236495-42fa5fe5c48d?auto=format&fit=crop&w=800&q=80',
    description: 'Subway-themed speakeasy with creative cocktails.',
    distance: '5.8 km',
    driveTime: '20 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Uptown,+Buenos+Aires`,
    why: "Themed like a 1920s NYC subway station. You enter through a hidden door, everything is vintage tiles and old train signs, and the cocktails are theatrical as hell (smoke, fire, the works). It's fun without being too touristy.",
    tips: "🚇 Reserve a few days ahead. The entrance is tricky - look for the 'Downtown Matías' sign. Password changes weekly (check their Instagram). Cocktails are pricey but huge.",
    mustTry: 'Anything with mezcal. The presentation is always wild.',
    price: '$$$',
    vibe: 'Subway-themed speakeasy where drinks come with a show'
  },
  'pony-line': {
    id: 'pony-line',
    title: 'Pony Line Burgers',
    category: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Late-night gourmet burgers at the Four Seasons.',
    distance: '6.2 km',
    driveTime: '22 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Four+Seasons+Buenos+Aires`,
    why: "After La Bomba or a night out, you'll want something greasy and delicious. Pony Line serves fancy burgers until 2 AM. It's at the Four Seasons so the vibe is upscale, but the burgers are LEGIT. Perfect drunk food that doesn't feel like a mistake.",
    tips: '🍔 Open late (until 2 AM!). The truffle burger is the move. Pair with their fries and a beer. Expect to pay ~$25 USD for burger + drink but it's worth it.',
    mustTry: 'Truffle burger + a pint. Add bacon.',
    price: '$$$',
    vibe: 'Upscale burger joint that saves you at 1 AM'
  },
  'cafe-tortoni': {
    id: 'cafe-tortoni',
    title: 'Café Tortoni',
    category: 'Historic Cafe',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    description: 'Historic café open since 1858. BA institution.',
    distance: '6.8 km',
    driveTime: '25 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Cafe+Tortoni,+Buenos+Aires`,
    why: "It's the oldest café in BA (since 1858!). Super touristy but worth it once for the history. Gorgeous interior, old-school waiters in vests, and you can feel the weight of everyone who's sat in those same chairs for 165 years. Get a coffee and a slice of cake, people-watch.",
    tips: '☕ Touristy AF so keep expectations realistic. Go mid-afternoon to avoid crowds. Order the hot chocolate and a slice of their classic cake. Cash preferred. Take photos but don't Instagram the whole time - just vibe.',
    mustTry: 'Chocolate caliente (hot chocolate) and a slice of rogel cake.',
    price: '$$',
    vibe: 'Old-world elegance where history is palpable'
  },
  'san-telmo-market': {
    id: 'san-telmo-market',
    title: 'San Telmo Market',
    category: 'Market',
    image:
      'https://images.unsplash.com/photo-1555529669-2269763671c0?auto=format&fit=crop&w=800&q=80',
    description: 'Historic indoor market with antiques, crafts, and street food.',
    distance: '7.2 km',
    driveTime: '28 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Mercado+de+San+Telmo,+Buenos+Aires`,
    why: "San Telmo is the oldest neighborhood in BA, and this market has been here since 1897. It's a maze of antique stalls, vintage finds, and food vendors. Great for souvenirs, people-watching, and soaking in old Buenos Aires vibes. Sundays there's a MASSIVE outdoor market too.",
    tips: '🛍️ Go Wednesday afternoon for fewer crowds, or Sunday for the full street fair experience. Bring cash for small vendors. Lots of pickpockets so keep your wallet front pocket. Stop for empanadas and fresh juice.',
    mustTry: 'Grab empanadas from one of the food stalls inside. Wander aimlessly.',
    price: '$',
    vibe: 'Vintage treasure hunt in a historic indoor market'
  },
  'tea-connection': {
    id: 'tea-connection',
    title: 'Tea Connection',
    category: 'Cafe',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    description: 'Local coffee/tea chain with good WiFi and solid food.',
    distance: 'Multiple locations - closest is 800m',
    driveTime: '3 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Tea+Connection+Palermo`,
    why: "It's a chain but it's GOOD and reliable. Great for breakfast, coffee, and actually has fast WiFi if you need to do any trip planning or answer messages. They have tons of locations so there's probably one close to wherever you are.",
    tips: '☕ Get the medialunas (Argentine croissants) with your coffee. They have oat milk and almond milk. Good spot to caffeinate and make a game plan for the day.',
    mustTry: 'Flat white + 3 medialunas (they're small, you'll want more than one).',
    price: '$',
    vibe: 'Reliable cafe chain that doesn't disappoint'
  },
  'elena': {
    id: 'elena',
    title: 'Elena at Four Seasons',
    category: 'Fine Dining',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    description: 'High-end steakhouse at the Four Seasons hotel.',
    distance: '6.2 km',
    driveTime: '22 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Four+Seasons+Buenos+Aires`,
    why: "If Don Julio and La Cabrera are both fully booked, Elena is the backup plan. It's in the Four Seasons so the service is flawless, the steaks are excellent, and the wine list is deep. More formal vibe but still worth it.",
    tips: '🍷 Book a few days ahead. Dress code is smart casual. The bife de lomo (tenderloin) is butter-soft. Splurge on a nice Malbec.',
    mustTry: 'Bife de lomo + grilled provoleta (cheese) appetizer.',
    price: '$$$$',
    vibe: 'Polished hotel restaurant where everything is perfect'
  },
  'tequila-nightclub': {
    id: 'tequila-nightclub',
    title: 'Tequila Nightclub',
    category: 'Nightclub',
    image:
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    description: 'Exclusive nightclub in Puerto Madero. The place to close out the trip.',
    distance: '8.5 km',
    driveTime: '28 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Tequila+Buenos+Aires`,
    why: "Tequila is where the beautiful people go. It's hard to get in, the drinks are expensive, but if you're doing one big club night, this is it. DJs, lights, bottle service, models everywhere. Very much the 'look how cool we are' energy.",
    tips: '🎉 Dress to impress (no sneakers, no shorts). Arrive before midnight to skip the worst of the line. Cover is usually $20-30 USD. Drinks are $$ inside. Go with confidence and act like you belong.',
    mustTry: 'Get a table if you can split the cost. Bottle service gets you space and clout.',
    price: '$$$$',
    vibe: 'Elite nightclub where everyone is trying to look cooler than they are'
  },
  'casa-saltshaker': {
    id: 'casa-saltshaker',
    title: 'Casa SaltShaker',
    category: 'Puerta Cerrada',
    image:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    description: 'Hidden dinner in a chef\'s home. Closed-door restaurant.',
    distance: 'Location revealed upon booking',
    driveTime: '~15 mins from Palermo',
    directions: 'Address sent after reservation',
    website: 'http://www.casasaltshaker.com/',
    why: "This is a wild experience. You book online, they send you a secret address, you show up at someone's apartment, and eat a multi-course meal with 10 strangers around a dining table. The chef (Dan) is American and hilarious. Food is incredible. You'll make friends.",
    tips: '🍽️ Book at LEAST 2 weeks ahead (it's tiny and popular). BYOB (bring your own wine - there's a shop nearby). Expect 3+ hours. Come hungry and ready to chat. One of the most unique meals you'll have.',
    mustTry: 'Everything - it's a tasting menu. Dan changes it based on what's fresh.',
    price: '$$$',
    vibe: 'Secret dinner party where you make 10 new friends'
  },
  'anchoita': {
    id: 'anchoita',
    title: 'Anchoita',
    category: 'Trendy Restaurant',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'The coolest restaurant in BA right now. Super hard to book.',
    distance: '3.8 km',
    driveTime: '14 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Anchoita,+Buenos+Aires`,
    why: "Everyone is talking about Anchoita. It's tiny, the food is creative and delicious, the vibes are immaculate. If you can get a reservation (big if), it's the flex of the trip. Think small plates, natural wine, industrial-chic interior.",
    tips: '📲 Reservations open 30 days out on their website - SET AN ALARM. It books out in minutes. If you can't get in, try walk-in at 6 PM right when they open. Expect to spend ~$50-70 USD per person with drinks.',
    mustTry: 'Whatever the special is. The tuna and the grilled octopus are standouts.',
    price: '$$$',
    vibe: 'Hot restaurant where everyone is stylish and the food is fire'
  },
  'ocho-ceballos': {
    id: 'ocho-ceballos',
    title: '878 Bar (Ocho Siete Ocho)',
    category: 'Cocktail Bar',
    image:
      'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?auto=format&fit=crop&w=800&q=80',
    description: 'Experimental cocktail bar with molecular gastronomy vibes.',
    distance: '4.7 km',
    driveTime: '17 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/878+Buenos+Aires`,
    why: 'If you want WEIRD cocktails (in a good way), this is your spot. They do molecular mixology - drinks that smoke, freeze, foam, change colors. It's like a science experiment you can drink. Super creative, fun date spot or "wow" moment.',
    tips: '🧪 Reservations recommended. Tell them you want the "experimental" cocktails. Budget $15-20 per drink. The bartenders will explain the process - it's part of the show.',
    mustTry: 'Ask for their most theatrical drink. Commit to the experience.',
    price: '$$$',
    vibe: 'Mad scientist cocktail bar where drinks come with a chemistry lesson'
  },
  'la-carniceria': {
    id: 'la-carniceria',
    title: 'La Carnicería',
    category: 'Casual Dining',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    description: 'Casual meat-focused spot. Great for a solo first-night dinner.',
    distance: '1.4 km',
    driveTime: '6 mins',
    walkTime: '17 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/La+Carnicería+Palermo`,
    why: "Perfect spot for your first night when you arrive solo. It's casual, the food is great (meat-focused, duh), and it's close to your base. You won't feel weird eating alone. Just get a steak, a beer, and decompress from travel.",
    tips: '🥩 No reservation needed usually. Sit at the bar if solo. Order the "parrillada" if you want a mix of meats. Good house wine. Cash or card.',
    mustTry: 'Chorizo steak + a Quilmes. Keep it simple.',
    price: '$$',
    vibe: 'Neighborhood spot where solo dining feels natural'
  },
  'milion': {
    id: 'milion',
    title: 'Milion',
    category: 'Bar & Restaurant',
    image:
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
    description: 'Stunning mansion turned bar with an epic garden.',
    distance: '2.7 km',
    driveTime: '11 mins',
    directions: `https://www.google.com/maps/dir/${encodeURIComponent(BASE_ADDRESS)}/Milion,+Buenos+Aires`,
    why: "This place is GORGEOUS. It's a restored 1920s mansion with crystal chandeliers, multiple bars, and a massive outdoor garden. Great for drinks with a group, date night, or just impressing yourself. The whole place feels like old-money Buenos Aires.",
    tips: '🏛️ Reservations for dinner. For drinks, just walk in and head upstairs or to the garden. Dress nicely. Cocktails are pricey but you're paying for the ambiance. Go at sunset for the best lighting.',
    mustTry: 'Get a drink in the garden then explore the whole mansion.',
    price: '$$$',
    vibe: 'Opulent mansion bar that feels like Gatsby's house'
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

      <nav className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl border-b border-slate-800 overflow-x-auto shadow-2xl">
        <div className="flex min-w-max">
          {['itinerary', 'food', 'nightlife', 'secrets', 'money', 'emergency', 'spanish', 'packing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 sm:py-5 px-3 sm:px-6 text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab === 'itinerary' && <Calendar className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'food' && <Utensils className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'nightlife' && <Music className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'secrets' && <Zap className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'money' && <DollarSign className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'emergency' && <Phone className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'spanish' && <MessageCircle className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab === 'packing' && <Briefcase className="inline-block w-4 h-4 mb-1 mr-1" />}
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {activeTab === 'itinerary' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DayCard
              day="FRI"
              date="FEB 13"
              title="The Solo Landing"
              description="You're here first. Flight lands evening, check into the base, decompress. This is your night to scout Palermo, grab dinner solo, and prep for the chaos ahead. Stock up on water, Gatorade, and a nice bottle of Malbec."
              items={[
                { icon: <MapPin />, label: 'Check-in at Base', sub: 'República Árabe Siria 3026 - Your home for 10 days' },
                {
                  icon: <Utensils />,
                  label: 'Solo Dinner (8-9 PM)',
                  sub: "La Carnicería - Casual parrilla, 17-min walk",
                  destId: 'la-carniceria'
                },
                {
                  icon: <Briefcase />,
                  label: 'Supply Run',
                  sub: 'Jumbo or Carrefour - Water, snacks, beer, Malbec, sunscreen'
                },
                {
                  icon: <Coffee />,
                  label: 'Morning Coffee (optional)',
                  sub: 'Find a local cafe, get your bearings',
                  destId: 'tea-connection'
                }
              ]}
            />
            <DayCard
              day="SAT"
              date="FEB 14"
              title="The Boys Arrive → ULTRA DAY 1"
              badge="Festival"
              description="The crew lands in the morning. Drop bags, quick shower, grab empanadas for the road. Gates open at 2 PM but go by 4 PM. Lineup is stacked. This is what you came for. Bring portable charger, sunscreen, and good vibes. Get ready to lose your mind."
              items={[
                { icon: <Clock />, label: 'Friend Arrival (~10 AM)', sub: 'Cabify from EZE airport to base (1 hour)' },
                { icon: <Coffee />, label: 'Quick Breakfast/Lunch', sub: 'Grab empanadas or medialunas to-go' },
                { icon: <Music />, label: 'Ultra Day 1 (2 PM-1 AM)', sub: 'Parque de la Ciudad - Gates open 2PM, leave by 3:45', destId: 'ultra' },
                { icon: <GlassWater />, label: 'Post-Festival Wind-Down (IF awake)', sub: "Boticario for a nightcap - 11 min walk from base", destId: 'boticario' }
              ]}
            />
            <DayCard
              day="SUN"
              date="FEB 15"
              title="ULTRA DAY 2 → BAD BUNNY"
              badge="LEGENDARY"
              description="This is the sickest day and also the most brutal. Ultra closing sets in the afternoon, then straight to River Plate for Bad Bunny at 8 PM. 70,000 people singing reggaeton. You'll be DESTROYED by midnight. Pace yourself. Hydrate. This is the story you'll tell for years."
              items={[
                { icon: <Sunrise />, label: 'Late Wake-Up + Fuel', sub: 'Sleep til 11, get croissants + coffee', destId: 'ninina-bakery' },
                { icon: <Music />, label: 'Ultra Day 2 (2-8 PM)', sub: 'Closing sets - Don't miss the finales!', destId: 'ultra' },
                { icon: <Clock />, label: '⚡ CRITICAL WINDOW', sub: 'Leave Ultra by 6:30 PM, Cabify straight to River Plate' },
                {
                  icon: <Music />,
                  label: 'Bad Bunny @ River Plate (8 PM)',
                  sub: 'Doors at 7, show at 8. Go EARLY to get in. 12-min drive from base',
                  destId: 'bad-bunny'
                },
                { icon: <GlassWater />, label: 'Late Night Food (if alive)', sub: 'Pony Line burgers til 2 AM', destId: 'pony-line' }
              ]}
            />
            <DayCard
              day="MON"
              date="FEB 16"
              title="Recovery → La Bomba"
              description="Your bodies are WRECKED. Sleep til noon minimum. Gentle day - walk around Palermo, get coffee, maybe hit a museum if you're feeling cultured lol. Tonight is La Bomba - THE Monday night tradition in BA. 20 drummers, 2000 people dancing. Doors 7:30, drums start 8:30. Buy tickets NOW."
              items={[
                { icon: <Clock />, label: 'Sleep Until Noon', sub: 'Mandatory. Your body needs this.' },
                { icon: <Coffee />, label: 'Slow Brunch (1-2 PM)', sub: 'L\'Attenté for coffee + proper food', destId: 'lattente' },
                { icon: <MapPin />, label: 'Explore Palermo (optional)', sub: 'Walk around, window shop, be tourists' },
                {
                  icon: <Music />,
                  label: 'La Bomba de Tiempo (8:30 PM)',
                  sub: '20 drummers improvising for 2 hours. LOCALS ONLY vibe. 🎫 Buy tix online NOW!',
                  destId: 'la-bomba'
                },
                { icon: <Utensils />, label: 'Late Night Burger (1 AM)', sub: 'Pony Line burgers to close it out', destId: 'pony-line' }
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
              title="The Grand Finale"
              badge="ALL OUT"
              description="Last big night in BA. Go full luxury mode. Day pass at Faena to feel like millionaires, dinner at the hottest spot (if you got that reservation), then close it out at Tequila - the most exclusive club in the city. Dress to impress. This is the victory lap."
              items={[
                { icon: <Sunrise />, label: 'Morning: Café Tortoni', sub: 'Historic café since 1858. Tourist trap but worth it once.', destId: 'cafe-tortoni' },
                { icon: <Sparkles />, label: 'Faena Pool (3-7 PM)', sub: 'Day pass $80-120. Pool, drinks, luxury vibes.', destId: 'faena' },
                { icon: <Utensils />, label: 'Dinner: Anchoita (9 PM)', sub: 'If you got the rez. Otherwise La Cabrera.', destId: 'anchoita' },
                { icon: <GlassWater />, label: 'Pre-Game: Milion (11 PM)', sub: '1920s mansion bar. Drinks in the garden.', destId: 'milion' },
                { icon: <Music />, label: 'Tequila Nightclub (1 AM)', sub: 'Dress code. No sneakers. Bottle service if you ball out.', destId: 'tequila-nightclub' }
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

        {activeTab === 'food' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 p-6 rounded-3xl">
              <h2 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <Utensils className="text-orange-500" /> The Food Bible
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Listen, BA is a MEAT city, but there's so much more. Here's the definitive guide broken down by vibe.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <Flame className="text-red-500" /> Steakhouses (Parrillas)
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['don-julio'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Don Julio</h4>
                  <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">$$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">World #1. THE meal. Book 90 days out or cry.</p>
                <p className="text-xs text-blue-400">👉 Bife de Chorizo + Catena Zapata Malbec</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['la-cabrera'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">La Cabrera</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">More casual, HUGE portions, tons of sides. Easier to book.</p>
                <p className="text-xs text-blue-400">👉 One steak feeds 2 people (seriously)</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['elena'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Elena (Four Seasons)</h4>
                  <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">$$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Backup plan. Flawless service, excellent steaks.</p>
                <p className="text-xs text-blue-400">👉 Bife de lomo + provoleta appetizer</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <Coffee className="text-yellow-500" /> Breakfast & Cafes
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['ninina-bakery'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Ninina Bakery</h4>
                  <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Hangover cure HQ. French croissants, Instagram heaven.</p>
                <p className="text-xs text-blue-400">👉 Almond croissant + flat white</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['lattente'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">L'Attenté</h4>
                  <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Best coffee in Palermo. Killer brunch menu.</p>
                <p className="text-xs text-blue-400">👉 Salmon toast + house blend coffee</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['tea-connection'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Tea Connection</h4>
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Reliable chain. Good WiFi, solid medialunas.</p>
                <p className="text-xs text-blue-400">👉 3 medialunas + coffee (they're small!)</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <Pizza className="text-red-500" /> Pizza & Casual
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['el-cuartito'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">El Cuartito</h4>
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Since 1934. Thick, cheesy Argentine pizza perfection.</p>
                <p className="text-xs text-blue-400">👉 Muzzarella + fernet con coca</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['pony-line'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Pony Line</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Late night burgers at Four Seasons. Open til 2 AM!</p>
                <p className="text-xs text-blue-400">👉 Truffle burger + bacon</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <Sparkles className="text-purple-500" /> Special Experiences
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['casa-saltshaker'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Casa SaltShaker</h4>
                  <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">SECRET</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Secret dinner party in chef's apartment. BYOB. Make friends.</p>
                <p className="text-xs text-blue-400">👉 Book 2 weeks ahead. Bring wine!</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['anchoita'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Anchoita</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">THE hot spot. Books out in minutes. Small plates, natural wine.</p>
                <p className="text-xs text-blue-400">👉 Set alarm for 30 days out!</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nightlife' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/30 p-6 rounded-3xl">
              <h2 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <Moon className="text-purple-500" /> Night Progression Guide
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Here's how a proper night out works in BA: Dinner at 9 PM → Drinks at 11 PM → Club at 1 AM → After-party at 5 AM. Yes, really.
              </p>
              <div className="bg-purple-600/10 p-4 rounded-2xl border border-purple-600/20">
                <p className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-2">PRO TIP</p>
                <p className="text-sm text-slate-300">Porteños don't even THINK about clubbing before 1 AM. If you show up at 11 PM, you'll be alone with the staff.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <GlassWater className="text-blue-500" /> Bars & Cocktails
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['floreria-atlantico'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Florería Atlántico</h4>
                  <span className="text-xs bg-gold-600/20 text-yellow-400 px-2 py-1 rounded">WORLD'S 50 BEST</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">THE speakeasy. Enter through flower shop cooler. Reserve ahead.</p>
                <p className="text-xs text-blue-400">👉 Let bartender surprise you</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['tres-monos'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Tres Monos</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Custom cocktails based on your mood. Young, cool crowd.</p>
                <p className="text-xs text-blue-400">👉 Arrive before 10 PM</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['uptown'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Uptown</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Subway-themed speakeasy. Theatrical cocktails (smoke, fire!).</p>
                <p className="text-xs text-blue-400">👉 Check Instagram for weekly password</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['ocho-ceballos'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">878 Bar</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Molecular mixology. Science experiments you can drink.</p>
                <p className="text-xs text-blue-400">👉 Ask for most theatrical drink</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['milion'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Milion</h4>
                  <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded">$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">1920s mansion with garden. Feels like Gatsby's house.</p>
                <p className="text-xs text-blue-400">👉 Go at sunset for best vibes</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
                <Music className="text-pink-500" /> Clubs & Live Music
              </h3>
              <div onClick={() => setSelectedDest(DESTINATIONS['la-bomba'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">La Bomba de Tiempo</h4>
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">MONDAYS</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">20 drummers, 2000 people, pure chaos. Locals' favorite.</p>
                <p className="text-xs text-blue-400">👉 Buy tickets 1 week ahead!</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
              <div onClick={() => setSelectedDest(DESTINATIONS['tequila-nightclub'])} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white text-lg">Tequila</h4>
                  <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">$$$$</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">THE exclusive club. Models everywhere. Dress to impress.</p>
                <p className="text-xs text-blue-400">👉 Arrive before midnight, dress code enforced</p>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" /> Hidden Gems
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Artlab (Chacarita)</strong> - Digital arts center with best sound system in SA. Deep techno vibes if Ultra feels too mainstream.</p>
                <p><strong className="text-white">INcanto Club</strong> - Underground electronic spot. No tourists, just locals and serious music heads.</p>
                <p><strong className="text-white">Niceto Club</strong> - Thursday's "Club 69" party is legendary. Been running for 20+ years.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'money' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/30 p-6 rounded-3xl">
              <h2 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <DollarSign className="text-green-500" /> Money & Currency Pro Tips
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Argentina's economy is... interesting. Here's how to not get ripped off.
              </p>
            </div>

            <div className="bg-blue-600/10 p-6 rounded-3xl border border-blue-500/30">
              <h3 className="text-xl font-black text-white mb-4 uppercase">The Blue Dollar Rate</h3>
              <p className="text-sm text-slate-300 mb-4">
                There are TWO exchange rates in Argentina: Official (bad) and Blue Dollar (good). The blue dollar is the street rate, and it's WAY better (like 30-50% better).
              </p>
              <div className="bg-blue-600/20 p-4 rounded-2xl mb-4">
                <p className="text-xs text-blue-300 font-bold uppercase mb-2">HOW IT WORKS</p>
                <p className="text-sm text-slate-200 mb-3">Change money at "casas de cambio" (exchange houses) or "arbolitos" (street money changers on Florida Street). Western Union also gives good rates.</p>
                <p className="text-xs text-slate-400">💡 Check the current rate on "dolarblue.net" before exchanging.</p>
              </div>
              <div className="bg-red-600/20 p-4 rounded-2xl border border-red-600/30">
                <p className="text-xs text-red-300 font-bold uppercase mb-2">⚠️ AVOID</p>
                <p className="text-sm text-slate-200">ATMs give you the official rate (scam). Only use ATMs if you're desperate.</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" /> What Stuff Costs (Feb 2026)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Coffee</span>
                  <span className="text-white font-bold">~$2-3 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Beer (bar)</span>
                  <span className="text-white font-bold">~$3-5 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Pizza slice</span>
                  <span className="text-white font-bold">~$2-3 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Empanadas (dozen)</span>
                  <span className="text-white font-bold">~$8-12 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Casual dinner</span>
                  <span className="text-white font-bold">~$15-25 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Nice steakhouse</span>
                  <span className="text-white font-bold">~$60-100 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Cocktail (nice bar)</span>
                  <span className="text-white font-bold">~$10-15 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Cabify ride (Palermo)</span>
                  <span className="text-white font-bold">~$3-8 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Bottle of wine (shop)</span>
                  <span className="text-white font-bold">~$5-15 USD</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase">Credit Cards & Tipping</h3>
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-bold text-white mb-2">💳 Credit Cards</p>
                  <p>Some tourist places give you the blue rate on cards now (as of 2025-2026). Always ask "¿Dan el dólar blue?" before paying. Cash is still king though.</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">🙏 Tipping</p>
                  <p>Standard is 10% in restaurants. Round up for taxis/Cabify. Bartenders appreciate 10-20 pesos per drink.</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">💵 How Much Cash to Bring</p>
                  <p>Bring USD cash (crisp, new bills - they won't accept worn ones). ~$100-150 USD per day should cover everything comfortably.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 p-6 rounded-3xl">
              <h2 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <AlertCircle className="text-red-500" /> Emergency & Important Info
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hopefully you won't need this, but here's everything just in case.
              </p>
            </div>

            <div className="bg-red-600/10 p-6 rounded-3xl border border-red-500/30">
              <h3 className="text-xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <Phone className="text-red-400" /> Emergency Numbers
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-900 p-4 rounded-2xl">
                  <p className="text-xs text-slate-400 uppercase mb-1">Police</p>
                  <p className="text-2xl font-black text-white">911</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl">
                  <p className="text-xs text-slate-400 uppercase mb-1">Ambulance</p>
                  <p className="text-2xl font-black text-white">107</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl">
                  <p className="text-xs text-slate-400 uppercase mb-1">Tourist Police (English)</p>
                  <p className="text-2xl font-black text-white">+54 11 5050-9260</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl">
                  <p className="text-xs text-slate-400 uppercase mb-1">US Embassy</p>
                  <p className="text-xl font-black text-white">+54 11 5777-4533</p>
                  <p className="text-xs text-slate-400 mt-1">Colombia 4300, Palermo</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" /> Hospitals & Pharmacies
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-white mb-1">Hospital Alemán</p>
                  <p className="text-slate-400">Best private hospital. English spoken.</p>
                  <p className="text-blue-400">Av. Pueyrredón 1640 - +54 11 4827-7000</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Farmacity (Pharmacy Chain)</p>
                  <p className="text-slate-400">24/7 locations everywhere. Like Walgreens.</p>
                  <p className="text-blue-400">Use their app to find closest one</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" /> Safety Tips
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p>✅ Palermo (your base) is super safe. Relax.</p>
                <p>✅ Keep phone in front pocket, don't flash jewelry</p>
                <p>✅ Use Cabify not street taxis (way safer)</p>
                <p>✅ Don't exchange money on random streets - use established cambios</p>
                <p>✅ After midnight, stick to main streets</p>
                <p>⚠️ Avoid: La Boca at night, Constitución station area</p>
                <p>💡 Pickpockets exist but violent crime against tourists is rare</p>
              </div>
            </div>

            <div className="bg-blue-600/10 p-6 rounded-3xl border border-blue-500/30">
              <h3 className="font-black text-white mb-4 uppercase">Lost/Stolen Stuff</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <p className="font-bold text-white mb-1">Lost Phone</p>
                  <p>Report to police for insurance. Most carriers have international plans. WiFi is everywhere.</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Lost Passport</p>
                  <p>Call US Embassy immediately (+54 11 5777-4533). They'll issue emergency travel docs.</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Lost Credit Card</p>
                  <p>Call your bank ASAP (use Google Voice over WiFi if needed). Most have 24/7 international lines.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'spanish' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 p-6 rounded-3xl">
              <h2 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-2">
                <MessageCircle className="text-yellow-500" /> Spanish 101
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Most people in BA speak some English, but knowing a few phrases = instant respect points.
              </p>
              <p className="text-xs text-slate-400 italic">
                BTW: Argentine Spanish is DIFFERENT. They say "vos" instead of "tú" and pronounce "ll" and "y" like "sh". Don't worry about it, just vibe.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase">Essential Phrases</h3>
              <div className="space-y-3">
                <div className="bg-slate-800/50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-white mb-1">¿Cuánto sale?</p>
                  <p className="text-sm text-slate-400 italic">KWAN-toh SAH-leh</p>
                  <p className="text-xs text-blue-400 mt-2">= How much is it?</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-white mb-1">¿Dan el dólar blue?</p>
                  <p className="text-sm text-slate-400 italic">dahn el DOH-lar BLOO</p>
                  <p className="text-xs text-blue-400 mt-2">= Do you give the blue dollar rate? (CRITICAL)</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-white mb-1">Una cerveza, por favor</p>
                  <p className="text-sm text-slate-400 italic">OO-nah ser-VEH-sah por fah-VOR</p>
                  <p className="text-xs text-blue-400 mt-2">= One beer, please</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-white mb-1">La cuenta, por favor</p>
                  <p className="text-sm text-slate-400 italic">lah KWEN-tah por fah-VOR</p>
                  <p className="text-xs text-blue-400 mt-2">= The check, please</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-white mb-1">¿Dónde está el baño?</p>
                  <p className="text-sm text-slate-400 italic">DON-deh es-TAH el BAH-nyo</p>
                  <p className="text-xs text-blue-400 mt-2">= Where's the bathroom?</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase">Ordering Food</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-slate-800">
                  <div>
                    <p className="text-white font-bold">Bife de chorizo</p>
                    <p className="text-slate-400 text-xs">BEE-feh deh cho-REE-so</p>
                  </div>
                  <span className="text-blue-400 text-xs">= Strip steak</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-slate-800">
                  <div>
                    <p className="text-white font-bold">Ojo de bife</p>
                    <p className="text-slate-400 text-xs">OH-ho deh BEE-feh</p>
                  </div>
                  <span className="text-blue-400 text-xs">= Ribeye</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-slate-800">
                  <div>
                    <p className="text-white font-bold">Jugoso</p>
                    <p className="text-slate-400 text-xs">hoo-GO-so</p>
                  </div>
                  <span className="text-blue-400 text-xs">= Medium rare</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-slate-800">
                  <div>
                    <p className="text-white font-bold">Chimichurri</p>
                    <p className="text-slate-400 text-xs">chee-mee-CHOO-ree</p>
                  </div>
                  <span className="text-blue-400 text-xs">= Herb sauce (mandatory)</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-bold">Empanadas de carne</p>
                    <p className="text-slate-400 text-xs">em-pah-NAH-dahs deh CAR-neh</p>
                  </div>
                  <span className="text-blue-400 text-xs">= Beef empanadas</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="font-black text-white mb-4 uppercase">Slang You'll Hear</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-white">Che!</p>
                  <p className="text-slate-400">= Hey! / Dude! (Very Argentine. Think "Che Guevara")</p>
                </div>
                <div>
                  <p className="font-bold text-white">Boludo/a</p>
                  <p className="text-slate-400">= Dude/idiot (term of endearment between friends)</p>
                </div>
                <div>
                  <p className="font-bold text-white">Copado/a</p>
                  <p className="text-slate-400">= Cool, awesome</p>
                </div>
                <div>
                  <p className="font-bold text-white">Quilombo</p>
                  <p className="text-slate-400">= Mess, chaos (you'll say this after Ultra)</p>
                </div>
                <div>
                  <p className="font-bold text-white">Fernet con coca</p>
                  <p className="text-slate-400">= THE local drink. Tastes like medicine but you'll love it by day 3</p>
                </div>
                <div>
                  <p className="font-bold text-white">Dale</p>
                  <p className="text-slate-400">= OK / Let's go / Alright (used constantly)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 p-6 rounded-3xl border border-blue-500/30">
              <p className="text-sm text-slate-300 mb-3">
                <span className="font-bold text-white">Pro tip:</span> If someone says something you don't understand, just smile and say "dale" or "sí, sí". You'll be fine lol.
              </p>
              <p className="text-xs text-slate-400 italic">
                Download Google Translate and enable offline Spanish. The camera translation feature is clutch for menus.
              </p>
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

                {selectedDest.mustTry && (
                  <div className="bg-orange-600/10 p-5 rounded-3xl border border-orange-600/20 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-orange-400" />
                      <h4 className="text-orange-300 font-black uppercase text-xs tracking-widest">Must Try</h4>
                    </div>
                    <p className="text-sm text-slate-200">{selectedDest.mustTry}</p>
                  </div>
                )}

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
