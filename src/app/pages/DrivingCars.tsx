import { useState } from "react";
import {
  Car,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  CreditCard,
  Shield,
  ArrowRight,
  Calculator,
  HelpCircle,
  Ban,
  Fuel,
  Wrench,
  Search,
} from "lucide-react";

/* ─────────── LICENSE TYPES ─────────── */
const licenseTypes = [
  {
    type: "Student Permit",
    validity: "1 year",
    fee: "PHP 272.63",
    requirements: [
      "At least 16 years old (17 for 4-wheel vehicles)",
      "Accomplished Application Form (ADL)",
      "PSA Birth Certificate (original + photocopy)",
      "Medical Certificate from accredited clinic",
      "TIN or valid government-issued ID",
      "Negative drug test result",
    ],
  },
  {
    type: "Non-Professional License",
    validity: "5 years",
    fee: "PHP 585.00",
    requirements: [
      "Must have held Student Permit for at least 1 month",
      "Accomplished Application Form",
      "Student Permit (original + photocopy)",
      "Medical Certificate",
      "Comprehensive Driver's Education (CDE) Certificate",
      "Practical Driving Course (PDC) — 15 hours for manual, 8 hours for automatic",
      "Drug test result",
    ],
  },
  {
    type: "Professional License",
    validity: "5 years",
    fee: "PHP 585.00",
    requirements: [
      "At least 18 years old",
      "Must have held Non-Pro License for at least 6 months OR Student Permit for at least 5 months with PDC",
      "Comprehensive Driver's Education (CDE) Certificate",
      "Practical Driving Course (PDC) — higher requirements",
      "Written and practical exams at LTO",
      "Medical Certificate & drug test",
    ],
  },
];

/* ─────────── VEHICLE REGISTRATION ─────────── */
const registrationSteps = [
  {
    title: "Brand New Vehicle",
    steps: [
      "Get Sales Invoice and Certificate of Stock Reported from dealer",
      "Secure PNP-HPG clearance",
      "Pay registration fees at LTO (around PHP 5,000-15,000 depending on vehicle type)",
      "Get your Official Receipt (OR) and Certificate of Registration (CR)",
      "Plate number will be assigned (temporary conduction sticker provided)",
    ],
  },
  {
    title: "Vehicle Registration Renewal",
    steps: [
      "Go to any MVIS (Motor Vehicle Inspection System) private center",
      "Pass vehicle inspection (smoke emission, safety check)",
      "Present OR/CR at LTO or use LTO online portal (LTMS)",
      "Pay renewal fee + MVUC (Motor Vehicle User's Charge)",
      "Get new sticker for your plate",
      "Renewal is due on the anniversary month of first registration",
    ],
  },
];

/* ─────────── TRAFFIC VIOLATIONS ─────────── */
const violations = [
  { violation: "No helmet (motorcycle)", fine: "PHP 1,500 (1st) / 3,000 (2nd)", law: "RA 10054" },
  { violation: "No seatbelt", fine: "PHP 1,000", law: "RA 8750" },
  { violation: "Reckless driving", fine: "PHP 2,000 (1st)", law: "RA 4136" },
  { violation: "Driving without license", fine: "PHP 3,000", law: "RA 4136" },
  { violation: "Expired registration", fine: "PHP 10,000+", law: "RA 4136" },
  { violation: "No OR/CR", fine: "PHP 3,000+", law: "RA 4136" },
  { violation: "Obstruction (illegal parking)", fine: "PHP 2,000", law: "RA 4136" },
  { violation: "Using phone while driving (Anti-Distracted Driving)", fine: "PHP 5,000 (1st) / 10,000 (2nd) / 15,000+ (3rd)", law: "RA 10913" },
  { violation: "Drunk driving (BAC 0.05%+)", fine: "PHP 20,000-500,000 + possible jail time", law: "RA 10586" },
  { violation: "Smoke belching", fine: "PHP 2,000 (1st)", law: "RA 8749" },
  { violation: "Beating the red light", fine: "PHP 1,000–3,000", law: "RA 4136" },
  { violation: "Illegal counterflow", fine: "PHP 2,000 (1st) / 3,000 (2nd)", law: "RA 4136" },
  { violation: "Overloading (motorcycle, 2 passengers max)", fine: "PHP 2,000–5,000", law: "RA 4136" },
  { violation: "No child car seat (under 12 yrs old)", fine: "PHP 1,000 (1st) / 2,000 (2nd) / 5,000 (3rd)", law: "RA 11229" },
  { violation: "Colorum (unregistered public transport)", fine: "PHP 50,000–120,000 + impound", law: "RA 4136" },
  { violation: "Failure to use signal lights / illegal U-turn", fine: "PHP 1,000–2,000", law: "RA 4136" },
];

/* ─────────── DRIVING LAWS ─────────── */
const drivingLaws = [
  {
    law: "RA 10586 — Anti-Drunk and Drugged Driving Act",
    what: "Prohibits driving under the influence of alcohol (BAC 0.05% and above) or dangerous drugs.",
    penalties: [
      "First offense: 3-month license suspension + PHP 20,000-80,000 fine",
      "Second offense: license revocation + PHP 80,000-120,000 fine",
      "Third offense: imprisonment (3 months - 2 years) + PHP 200,000-500,000 fine",
      "If a person is killed: reckless imprudence resulting in homicide — up to 12 years imprisonment",
      "Refusal to take a breathalyzer/sobriety test: automatic revocation of license + fine",
    ],
    tips: [
      "Don't drink and drive — call a ride-hailing service or designate a sober driver",
      "Even 2-3 beers can push you over the 0.05% BAC limit",
      "Checkpoints are legal and common, especially on weekends and holidays",
    ],
  },
  {
    law: "RA 10913 — Anti-Distracted Driving Act",
    what: "Prohibits use of electronic communication devices (phone, tablet, etc.) while driving. Covers texting, calling, browsing, using GPS (unless hands-free/dashboard-mounted).",
    penalties: [
      "First offense: PHP 5,000",
      "Second offense: PHP 10,000",
      "Third offense: PHP 15,000 + 3-month license suspension",
      "Fourth offense: PHP 20,000 + license revocation",
    ],
    tips: [
      "Use a dashboard mount for GPS/Waze — holding your phone is an instant ticket",
      "Set your destination BEFORE you start driving",
      "Use Bluetooth or hands-free for calls",
      "Pull over safely if you need to use your phone",
    ],
  },
  {
    law: "RA 11229 — Child Safety in Motor Vehicles Act",
    what: "Requires all children 12 years old and below (or shorter than 4'11\") to use a child car seat when riding a motor vehicle. Children under 12 cannot sit in the front seat.",
    penalties: [
      "First offense: PHP 1,000",
      "Second offense: PHP 2,000",
      "Third offense: PHP 5,000 + driver's license suspension",
    ],
    tips: [
      "Invest in a proper child car seat — it can save your child's life",
      "Car seats should be rear-facing for infants, forward-facing for toddlers, booster for older kids",
      "Children must always ride in the BACK seat until age 12",
    ],
  },
  {
    law: "RA 10054 — Motorcycle Helmet Act",
    what: "All motorcycle riders and back riders must wear standard protective helmets at all times while on the road.",
    penalties: [
      "First offense: PHP 1,500 fine",
      "Second offense: PHP 3,000 fine",
      "Third offense: PHP 5,000 fine + confiscation of the motorcycle",
    ],
    tips: [
      "Use DOT/ECE-certified helmets — not just any hard hat",
      "Both driver AND passenger must wear helmets",
      "Half-face helmets are legal but full-face offers better protection",
    ],
  },
  {
    law: "RA 10666 — Children's Safety on Motorcycles Act",
    what: "Prohibits children below the age of reason (generally under 7) from riding motorcycles. Children must be able to reach the foot pegs and hold on to the driver.",
    penalties: [
      "First offense: PHP 3,000 fine",
      "Second offense: PHP 5,000 fine",
      "Third offense: PHP 10,000 fine + license suspension",
    ],
    tips: [
      "Children must be able to naturally reach the foot pegs — if they can't, they shouldn't ride",
      "Always provide a properly-sized helmet for the child",
      "Maximum of 2 people total on a motorcycle (driver + 1 passenger)",
    ],
  },
  {
    law: "RA 8750 — Seat Belt Use Act",
    what: "All motor vehicle occupants must wear seat belts at all times when the vehicle is in motion.",
    penalties: [
      "First offense: PHP 1,000 fine",
      "Subsequent offenses: PHP 2,000 fine",
      "Driver responsible for ensuring all passengers are buckled up",
    ],
    tips: [
      "ALL passengers — front AND back — must wear seat belts",
      "The driver gets the ticket if passengers aren't buckled up",
      "Seat belts reduce death risk by 45% in front seats and 25% in rear seats",
    ],
  },
  {
    law: "RA 4136 — Land Transportation and Traffic Code",
    what: "The comprehensive traffic and vehicle law. Covers speed limits, right of way, signaling, overtaking, parking, and general driving rules.",
    penalties: [
      "Speed limits: 60 kph on national highways, 30-40 kph in residential/city streets (varies by LGU)",
      "Reckless driving: PHP 2,000 (1st), PHP 3,000 (2nd), license revocation (3rd)",
      "Racing on highways: PHP 2,000-5,000 + impound",
      "Driving without lights at night: PHP 1,000",
    ],
    tips: [
      "Always yield to pedestrians on crosswalks",
      "Use turn signals 30 meters before making a turn",
      "Don't counterflow — it's one of the leading causes of fatal accidents",
      "Follow the 3-second following distance rule",
    ],
  },
];

/* ─────────── CAR BUYING GUIDE ─────────── */
const carCategories = [
  {
    category: "Budget-Friendly (₱500K - ₱800K)",
    best: "First-time car buyers, daily commuters, small families",
    cars: [
      { name: "Toyota Wigo", price: "₱568,000 - ₱658,000", fuel: "~15-18 km/L", type: "Hatchback", why: "Most affordable Toyota. Reliable, cheap maintenance, high resale value. Best seller in its class." },
      { name: "Suzuki S-Presso", price: "₱564,000 - ₱648,000", fuel: "~18-22 km/L", type: "Mini Crossover", why: "Very fuel efficient. Surprisingly spacious inside. Affordable parts." },
      { name: "Suzuki Celerio", price: "₱598,000 - ₱648,000", fuel: "~20-25 km/L", type: "Hatchback", why: "Among the most fuel-efficient cars in PH. Great for city driving." },
      { name: "Mitsubishi Mirage", price: "₱694,000 - ₱780,000", fuel: "~15-20 km/L", type: "Hatchback", why: "Affordable, reliable, easy to maintain. Mirage G4 sedan variant also available." },
    ],
  },
  {
    category: "Mid-Range (₱800K - ₱1.3M)",
    best: "Small to medium families, mixed city/highway driving",
    cars: [
      { name: "Toyota Vios", price: "₱681,000 - ₱1,091,000", fuel: "~12-16 km/L", type: "Sedan", why: "The #1 best-selling car in PH. Extremely reliable. Parts available everywhere. Excellent resale." },
      { name: "Honda City", price: "₱898,000 - ₱1,138,000", fuel: "~14-18 km/L", type: "Sedan", why: "Great interior quality and ride comfort. Reliable Honda engine. Good safety features." },
      { name: "Suzuki Ertiga", price: "₱748,000 - ₱1,048,000", fuel: "~12-16 km/L", type: "MPV (7-seater)", why: "Best value 7-seater. Affordable and fuel-efficient for a family vehicle." },
      { name: "Toyota Avanza", price: "₱807,000 - ₱1,067,000", fuel: "~10-14 km/L", type: "MPV (7-seater)", why: "Toyota reliability in a 7-seater. Affordable maintenance." },
    ],
  },
  {
    category: "SUV / Pickup (₱1M - ₱2M+)",
    best: "Larger families, provincial driving, rough roads, floods",
    cars: [
      { name: "Toyota Rush", price: "₱1,008,000 - ₱1,120,000", fuel: "~10-14 km/L", type: "SUV", why: "Entry-level Toyota SUV. Good ground clearance for floods. 7-seater." },
      { name: "Mitsubishi Xpander", price: "₱1,023,000 - ₱1,280,000", fuel: "~10-14 km/L", type: "MPV/Crossover", why: "Best-selling MPV. Stylish design, spacious, reliable." },
      { name: "Toyota Hilux", price: "₱942,000 - ₱1,956,000", fuel: "~8-12 km/L", type: "Pickup", why: "Most popular pickup truck. Nearly indestructible. Great for business use." },
      { name: "Ford Territory", price: "₱1,100,000 - ₱1,370,000", fuel: "~10-14 km/L", type: "Compact SUV", why: "Feature-packed for the price. Modern design, good tech." },
      { name: "Toyota Fortuner", price: "₱1,757,000 - ₱2,414,000", fuel: "~8-12 km/L", type: "Mid-size SUV", why: "The aspirational SUV. Strong resale value, diesel reliability, high ground clearance." },
    ],
  },
  {
    category: "Motorcycle (₱50K - ₱200K)",
    best: "Budget-conscious, single riders, city commuters",
    cars: [
      { name: "Honda Beat", price: "₱68,900 - ₱73,900", fuel: "~45-60 km/L", type: "Scooter", why: "Best-selling scooter in PH. Very fuel efficient, easy to ride, cheap maintenance." },
      { name: "Yamaha Mio", price: "₱69,900 - ₱89,900", fuel: "~40-55 km/L", type: "Scooter", why: "Iconic Filipino scooter. Reliable, parts everywhere, good resale." },
      { name: "Honda Click 125i", price: "₱79,900 - ₱89,900", fuel: "~40-50 km/L", type: "Scooter", why: "Higher-end scooter with better features. Smart key, LED lights." },
      { name: "Yamaha NMAX", price: "₱149,000 - ₱169,000", fuel: "~35-45 km/L", type: "Maxi-Scooter", why: "Premium scooter for longer rides. Comfortable, ABS, good storage." },
    ],
  },
];

/* ─────────── OWNERSHIP COSTS ─────────── */
const ownershipCosts = [
  { item: "Gas/Fuel (monthly)", small: "₱3,000–₱5,000", mid: "₱5,000–₱8,000", suv: "₱8,000–₱15,000", notes: "Based on ~30-50 km/day in Metro Manila" },
  { item: "Insurance (CTPL + Comprehensive/yr)", small: "₱5,000–₱10,000", mid: "₱10,000–₱20,000", suv: "₱20,000–₱40,000", notes: "CTPL is mandatory. Comprehensive is optional but recommended" },
  { item: "Registration Renewal (annual)", small: "₱3,000–₱5,000", mid: "₱5,000–₱8,000", suv: "₱8,000–₱15,000", notes: "Includes MVUC, CTPL, emission test" },
  { item: "PMS / Maintenance (per visit)", small: "₱2,000–₱5,000", mid: "₱3,000–₱8,000", suv: "₱5,000–₱12,000", notes: "Every 5,000-10,000 km. Oil change, filters, fluids" },
  { item: "Tires (set of 4)", small: "₱8,000–₱16,000", mid: "₱12,000–₱24,000", suv: "₱20,000–₱40,000", notes: "Replace every 40,000-60,000 km or 3-5 years" },
  { item: "Parking (monthly, if no garage)", small: "₱3,000–₱5,000", mid: "₱3,000–₱5,000", suv: "₱3,000–₱5,000", notes: "Condo parking, office parking, or rented garage" },
  { item: "Toll fees (monthly, if applicable)", small: "₱1,000–₱5,000", mid: "₱1,000–₱5,000", suv: "₱1,000–₱5,000", notes: "NLEX, SLEX, TPLEX, Skyway, etc." },
  { item: "Car wash (monthly)", small: "₱400–₱800", mid: "₱400–₱800", suv: "₱500–₱1,000", notes: "Weekly exterior wash. Interior detailing quarterly" },
];

/* ─────────── DRIVING TIPS ─────────── */
const drivingTips = [
  {
    title: "For New Drivers",
    tips: [
      "Practice in empty parking lots before going on actual roads",
      "Learn to drive MANUAL transmission first — you can drive both manual and automatic with a manual license",
      "If you learned automatic only, your license is restricted to automatic transmission vehicles",
      "Always check mirrors before changing lanes or making turns",
      "Use the 3-second rule: maintain at least 3 seconds of distance from the car in front of you",
      "Avoid driving on EDSA or major highways during your first weeks — practice on smaller roads first",
      "Drive with an experienced driver beside you until you're confident",
      "Learn to parallel park — it's a critical skill in the Philippines where parking is tight",
    ],
  },
  {
    title: "Defensive Driving",
    tips: [
      "Always assume other drivers will do something unexpected — NEVER assume they'll follow rules",
      "Watch out for motorcycles weaving through traffic — they appear out of nowhere",
      "Keep headlights ON even during daytime for visibility (DRL)",
      "Don't tailgate — maintain proper following distance, especially in rain",
      "When a bus or jeepney stops suddenly, check your mirrors before braking — the vehicle behind you might not stop",
      "At night, watch for pedestrians wearing dark clothes — especially on provincial roads without streetlights",
      "Slow down in residential areas — children may run into the street",
      "Never assume a green light is safe — always check for red light runners before proceeding",
    ],
  },
  {
    title: "Flood & Rain Driving",
    tips: [
      "If water is above your tire's halfway point, DO NOT attempt to cross — turn around",
      "Keep your engine RPM up when crossing shallow floodwater to prevent water from entering the exhaust",
      "After crossing a flood, pump your brakes gently to dry them",
      "Don't use cruise control in rain — it can cause hydroplaning",
      "Turn on your headlights in rain (it's the law, not just courtesy)",
      "Reduce speed by at least 30% in heavy rain — stopping distance doubles on wet roads",
      "If your car stalls in a flood, DO NOT restart the engine — you'll cause hydrolocking (destroyed engine, ₱100,000+ repair)",
      "Avoid roads known for flooding: España, Lacson, Recto, NLEX (certain sections), C5 near Pasig",
    ],
  },
  {
    title: "Avoiding Fixers & Scams",
    tips: [
      "Never transact with fixers at LTO — they charge 2-3x the actual fee",
      "LTO fees are posted on their website and in their offices — know the correct amounts",
      "If an MMDA/traffic enforcer asks you to 'settle' on the spot, that's bribery — both you and the enforcer are liable",
      "Always ask for the official violation ticket (TVR) — don't accept informal settlements",
      "When buying a secondhand car: check OR/CR, verify LTO records, get a PNP-HPG clearance, and have a mechanic inspect it",
      "Beware of 'carnapped' vehicles — always check the chassis and engine number against LTO records",
      "For secondhand cars, check if there's an existing chattel mortgage (loan) — you don't want to buy someone's debt",
      "Use LTMS Portal for appointments — skip the long lines and avoid fixers entirely",
    ],
  },
];

/* ─────────── SECONDHAND CAR TIPS ─────────── */
const secondhandChecklist = [
  { check: "Verify OR/CR (original, not photocopy)", why: "Confirm the seller actually owns the vehicle" },
  { check: "Check LTO records / LTMS verification", why: "Confirm no alarms, liens, or encumbrances" },
  { check: "PNP-HPG clearance", why: "Verify the vehicle is not stolen/carnapped" },
  { check: "Match chassis & engine numbers (OR/CR vs actual vehicle)", why: "Tampered numbers = possible stolen vehicle" },
  { check: "Check for existing chattel mortgage", why: "Don't buy someone else's loan — verify with the bank" },
  { check: "Mechanic inspection (independent, not seller's)", why: "Check engine, transmission, suspension, electrical" },
  { check: "Flood damage check (musty smell, water lines, rust under seats)", why: "Flood-damaged cars have hidden electrical/mechanical issues" },
  { check: "Test drive (at least 30 minutes, highway + city)", why: "Feel for vibrations, noises, alignment, AC, brakes" },
  { check: "Check accident history (body panel gaps, repainted areas, mismatched paint)", why: "Major accidents affect structural integrity" },
  { check: "Service records / maintenance history", why: "Well-maintained cars last longer. PMS records are a good sign" },
];

/* ─────────── CAR LOAN CALCULATOR ─────────── */
function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate, setInterestRate] = useState(7);

  const dpAmount = carPrice * (downPayment / 100);
  const loanAmount = carPrice - dpAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPayment = monthlyRate > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    : loanAmount / numPayments;
  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - loanAmount;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-purple-600" />
        <h2 className="text-gray-900">Car Loan Calculator</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Car Price (PHP)</label>
          <input type="number" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Down Payment (%)</label>
          <select value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value={10}>10%</option><option value={15}>15%</option><option value={20}>20%</option><option value={30}>30%</option><option value={40}>40%</option><option value={50}>50%</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Loan Term (years)</label>
          <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value={3}>3 years</option><option value={4}>4 years</option><option value={5}>5 years</option><option value={6}>6 years</option><option value={7}>7 years</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Interest Rate (%/yr)</label>
          <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <div className="text-xs text-purple-600 mb-1">Down Payment</div>
          <div className="text-purple-900">₱{dpAmount.toLocaleString()}</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-xs text-blue-600 mb-1">Monthly Amortization</div>
          <div className="text-blue-900">₱{Math.round(monthlyPayment).toLocaleString()}</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 text-center">
          <div className="text-xs text-amber-600 mb-1">Total Interest Paid</div>
          <div className="text-amber-900">₱{Math.round(totalInterest).toLocaleString()}</div>
        </div>
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <div className="text-xs text-red-600 mb-1">Total Cost</div>
          <div className="text-red-900">₱{Math.round(dpAmount + totalPaid).toLocaleString()}</div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-3">
        * Estimates only. Actual bank rates range from 5-12% depending on credit score and loan term. Banks: BDO, BPI, EastWest, PSBank, Autokid.
      </p>
    </div>
  );
}

/* ─────────── MAIN COMPONENT ─────────── */
export function DrivingCars() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-purple-100 rounded-xl">
            <Car className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-purple-900">Driving, Cars & LTO Guide</h1>
        </div>
        <p className="text-sm text-purple-700 leading-relaxed max-w-2xl">
          Everything about getting your driver's license, Philippine driving laws and fines,
          what car to buy at every budget, ownership costs, car loan calculator, secondhand car
          tips, and practical driving advice for Filipino roads.
        </p>
      </div>

      {/* License Types */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Driver's License</h2>
        <p className="text-sm text-gray-500 mb-4">Know which one you need</p>
        <div className="space-y-4">
          {licenseTypes.map((license) => (
            <div key={license.type} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-gray-900">{license.type}</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {license.validity}
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1">
                    <CreditCard className="w-3 h-3" /> {license.fee}
                  </span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {license.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> {req}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* License Renewal */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <h2 className="text-blue-900 mb-3">Driver's License Renewal</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-blue-800 mb-2">Requirements</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Current driver's license (original)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Medical Certificate from LTO-accredited clinic</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Drug test result</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> CDE Certificate (Comprehensive Driver's Education)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Payment of renewal fee</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-blue-800 mb-2">Pro Tips</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Renew BEFORE expiry to avoid penalties</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Use LTMS Portal for online appointment</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Go to LTO satellite offices (malls) for shorter lines</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Medical clinics near LTO offer faster processing</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Penalty for late renewal: PHP 75-150/year</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Driving Laws */}
      <div>
        <h2 className="text-gray-900 mb-1">Philippine Driving Laws You Must Know</h2>
        <p className="text-sm text-gray-500 mb-4">Ignorance of the law is not an excuse — know these before you drive</p>
        <div className="space-y-4">
          {drivingLaws.map((law) => (
            <details key={law.law} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Shield className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="text-gray-900 text-sm">{law.law}</h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
                <p className="text-sm text-gray-500 mt-2 ml-12">{law.what}</p>
              </summary>
              <div className="px-5 pb-5 space-y-3">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="text-red-800 text-sm mb-2 flex items-center gap-2"><Ban className="w-4 h-4" /> Penalties</h4>
                  <ul className="space-y-1">
                    {law.penalties.map((p, i) => (
                      <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 shrink-0 mt-1.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-green-800 text-sm mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Tips</h4>
                  <ul className="space-y-1">
                    {law.tips.map((t, i) => (
                      <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 shrink-0 mt-1.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Traffic Violations & Fines */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">Traffic Violations & Fines Quick Reference</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Violation</th>
                <th className="text-left py-3 px-3 text-gray-500">Fine</th>
                <th className="text-left py-3 px-3 text-gray-500 hidden sm:table-cell">Law</th>
              </tr>
            </thead>
            <tbody>
              {violations.map((v, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{v.violation}</td>
                  <td className="py-2.5 px-3"><span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-md text-xs">{v.fine}</span></td>
                  <td className="py-2.5 px-3 text-gray-400 text-xs hidden sm:table-cell">{v.law}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Fines may vary by LGU and increase for repeat offenses. Always request the official violation ticket (TVR).
        </p>
      </div>

      {/* Vehicle Registration */}
      <div>
        <h2 className="text-gray-900 mb-1">Vehicle Registration</h2>
        <p className="text-sm text-gray-500 mb-4">New and renewal registration guide</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {registrationSteps.map((reg) => (
            <div key={reg.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-900 mb-3">{reg.title}</h3>
              <ol className="space-y-2">
                {reg.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Car Buying Guide */}
      <div>
        <h2 className="text-gray-900 mb-1">What Car Should I Buy? (2025-2026 Budget Guide)</h2>
        <p className="text-sm text-gray-500 mb-4">Recommendations based on budget, reliability, fuel efficiency, and resale value</p>
        <div className="space-y-4">
          {carCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-gray-900 mb-1">{cat.category}</h3>
              <p className="text-xs text-gray-500 mb-4">Best for: {cat.best}</p>
              <div className="space-y-3">
                {cat.cars.map((car) => (
                  <div key={car.name} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="flex-1">
                        <h4 className="text-gray-800">{car.name}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{car.why}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 shrink-0">
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{car.price}</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs flex items-center gap-1"><Fuel className="w-3 h-3" /> {car.fuel}</span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{car.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Loan Calculator */}
      <CarLoanCalculator />

      {/* Ownership Costs */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Annual Ownership Costs (Beyond the Purchase Price)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Expense</th>
                <th className="text-left py-3 px-3 text-gray-500">Small Car</th>
                <th className="text-left py-3 px-3 text-gray-500">Midsize</th>
                <th className="text-left py-3 px-3 text-gray-500">SUV/Pickup</th>
              </tr>
            </thead>
            <tbody>
              {ownershipCosts.map((row) => (
                <tr key={row.item} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.item}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.small}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.mid}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.suv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Rule of thumb:</strong> Budget 20-30% of your car's value per year for total ownership costs (fuel, insurance, maintenance, registration, parking). A ₱800K car costs roughly ₱160K-240K/year to own and operate.
          </p>
        </div>
      </div>

      {/* Secondhand Car Checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Secondhand Car Buying Checklist</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Before buying ANY used car, check ALL of these:</p>
        <div className="space-y-2">
          {secondhandChecklist.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
              <div>
                <div className="text-sm text-gray-800">{item.check}</div>
                <div className="text-xs text-gray-400">{item.why}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">
            <strong>Red flags:</strong> Seller refuses PNP-HPG clearance, mismatched OR/CR name, no original keys, suspiciously low price, odometer rollback (check wear on steering wheel/pedals vs. mileage shown), and sellers who rush you into deciding.
          </p>
        </div>
      </div>

      {/* Driving Tips */}
      <div>
        <h2 className="text-gray-900 mb-1">Practical Driving Tips for Filipino Roads</h2>
        <p className="text-sm text-gray-500 mb-4">Survival guide for Philippine driving conditions</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {drivingTips.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Important Documents */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Documents to Always Have in Your Car</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { title: "Driver's License", desc: "Must carry ORIGINAL while driving. Photocopy is NOT acceptable. Penalty for not carrying: PHP 3,000." },
            { title: "OR/CR", desc: "Official Receipt & Certificate of Registration. Keep originals in the vehicle at all times. No OR/CR: PHP 3,000+ fine + possible impound." },
            { title: "Insurance (CTPL)", desc: "Compulsory Third Party Liability insurance. Required for registration. Covers third-party injuries/death." },
            { title: "Emission Test Certificate", desc: "Required for vehicle registration renewal. Valid for 1 year." },
            { title: "Deed of Sale (if secondhand)", desc: "Proof of ownership if the OR/CR hasn't been transferred to your name yet." },
            { title: "Emergency Kit", desc: "Early warning device (triangle), spare tire, jack, basic tools. EWD is required by law — penalty for not having one: PHP 500." },
          ].map((doc) => (
            <div key={doc.title} className="p-4 bg-purple-50 rounded-xl">
              <h4 className="text-purple-800 mb-1">{doc.title}</h4>
              <p className="text-xs text-purple-600">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Should I buy a car or just commute?",
              a: "Rule of thumb: Only buy a car if your monthly income is at least 4-5x the monthly amortization. A PHP 15,000/month car payment means you need at least PHP 60,000-75,000/month income to afford it comfortably (including gas, insurance, parking, maintenance). If you live near public transport and work in the city center, commuting may be smarter financially.",
            },
            {
              q: "Brand new or secondhand?",
              a: "Brand new: warranty, peace of mind, latest features, but 15-20% depreciation in year 1. Secondhand (1-3 years old): 20-40% cheaper, someone else absorbed the depreciation. Sweet spot: 2-3 year old car with low mileage (<30,000 km) from a reputable dealer. Always get a mechanic inspection for used cars.",
            },
            {
              q: "Automatic or manual transmission?",
              a: "Automatic is much easier, especially in Metro Manila traffic. Manual gives you more control and slightly better fuel economy. If you get a manual license, you can drive both. If you get automatic-only, you're restricted. Most new car buyers in PH now choose automatic (70%+).",
            },
            {
              q: "Can I drive with a Student Permit alone?",
              a: "NO. A Student Permit holder must ALWAYS be accompanied by a licensed driver (at least Non-Professional, held for 1+ year) sitting beside them. Driving alone with a Student Permit is a violation — PHP 3,000 fine.",
            },
            {
              q: "How do I check if a car is carnapped/stolen?",
              a: "Get a PNP-HPG Motor Vehicle Clearance (PHP 250). This checks if the vehicle is in the stolen vehicle database. Also verify the chassis and engine numbers on the actual vehicle match the OR/CR. Never skip this step for secondhand purchases.",
            },
            {
              q: "What should I do if I get into an accident?",
              a: "1) Stop immediately — fleeing is a criminal offense. 2) Check for injuries — call 911 if anyone is hurt. 3) Move vehicles to the side if possible (don't block traffic). 4) Take photos of everything — damage, plates, location, other driver's license. 5) Exchange info with the other driver. 6) File a police report (within 24 hours). 7) Report to your insurance company ASAP. DO NOT admit fault at the scene.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-gray-800 mb-2">{item.q}</h4>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
