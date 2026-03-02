import { Plane, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle, Globe, DollarSign, Shield, Clock, MapPin, Star, FileText } from "lucide-react";

const visaTypes = [
  {
    country: "Japan",
    flag: "🇯🇵",
    visaRequired: "Yes (for most Filipinos)",
    color: "bg-red-50 border-red-200",
    difficulty: "Moderate",
    processing: "5-7 working days",
    validity: "Single entry (15 days) / Multiple entry (varies)",
    cost: "FREE (no visa fee for Filipinos!)",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Visa application form (download from embassy website)",
      "2x2 photo (white background, recent)",
      "PSA Birth Certificate",
      "Daily schedule/itinerary (detailed, day-by-day)",
      "Bank certificate + 3 months bank statements (show sufficient funds)",
      "Certificate of Employment with compensation + approved leave",
      "ITR (BIR Form 2316) — latest year",
      "Hotel booking confirmations",
      "Flight itinerary (round trip)",
      "For self-employed: DTI/SEC registration, financial statements",
    ],
    tips: [
      "Japan visa for Filipinos is FREE — no processing fee",
      "Apply through accredited travel agencies ONLY (you cannot apply directly at the embassy)",
      "Show strong ties to PH: stable job, property, family",
      "Bank balance: at least PHP 100,000+ recommended (no hard rule)",
      "ITR is very important — shows you pay taxes and have income",
      "Detailed itinerary is crucial — show you've planned the trip",
      "First-time travelers: apply for single entry first",
    ],
    budget: "PHP 3,000-8,000/day (mid-range) | PHP 1,500-3,000/day (budget)",
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    visaRequired: "Yes (unless you have OECD visa sticker or meet exemptions)",
    color: "bg-blue-50 border-blue-200",
    difficulty: "Moderate",
    processing: "5-7 working days",
    validity: "Single entry (59 days max stay)",
    cost: "PHP 1,800 (single) / PHP 3,600 (multiple)",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Visa application form",
      "2x2 photo (white background)",
      "PSA Birth Certificate",
      "Bank certificate + 3 months bank statements",
      "Certificate of Employment with compensation",
      "ITR (BIR Form 2316)",
      "Hotel reservations",
      "Round-trip flight booking",
      "Detailed travel itinerary",
      "For visa-free entry: valid visa/entry stamp from OECD countries (US, Japan, Canada, Australia, EU/Schengen)",
    ],
    tips: [
      "If you have an OECD visa/entry stamp (US, Japan, Schengen, etc.), you may be eligible for visa-free entry for 30 days",
      "K-ETA (Korea Electronic Travel Authorization) required for visa-exempt travelers",
      "Apply through Korean Embassy or accredited agencies",
      "Strong financials are key — show stable income and savings",
      "Winter trips (Dec-Feb) are popular but expensive; spring (Mar-May) and fall (Sep-Nov) are ideal",
    ],
    budget: "PHP 3,000-7,000/day (mid-range) | PHP 1,500-3,000/day (budget)",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    visaRequired: "Yes (B1/B2 Tourist Visa)",
    color: "bg-indigo-50 border-indigo-200",
    difficulty: "Hard",
    processing: "Varies (weeks to months for interview slots)",
    validity: "10 years (multiple entry)",
    cost: "USD 185 (~PHP 10,360)",
    requirements: [
      "Philippine passport (valid 6+ months beyond intended stay)",
      "DS-160 online application form (completed and submitted)",
      "DS-160 confirmation page with barcode",
      "Visa appointment confirmation",
      "2x2 photo (US spec: white background)",
      "Proof of financial capacity (bank statements, properties, business docs)",
      "Proof of ties to Philippines (employment, family, properties)",
      "Travel history (passport with previous stamps)",
      "Certificate of Employment (if employed)",
      "ITR / Business registration (if self-employed)",
      "Invitation letter (if visiting someone in the US)",
    ],
    tips: [
      "The US visa interview is the MOST important part — be confident, honest, and concise",
      "Common interview questions: Purpose of trip? Who's paying? When are you returning? What's your job?",
      "Show STRONG ties to the Philippines — the presumption is that you're an immigrant until you prove otherwise",
      "Travel history matters — having visited other countries (Japan, Korea, Schengen) significantly helps",
      "Dress professionally for the interview",
      "Be prepared for denial — many Filipinos get denied on first attempt. You can reapply",
      "If approved, your visa is valid for 10 years — worth the investment",
    ],
    budget: "PHP 5,000-15,000/day (mid-range) | PHP 3,000-7,000/day (budget)",
  },
  {
    country: "Schengen Area (Europe)",
    flag: "🇪🇺",
    visaRequired: "Yes (Schengen Visa)",
    color: "bg-yellow-50 border-yellow-200",
    difficulty: "Hard",
    processing: "15-45 calendar days",
    validity: "Up to 90 days within 180-day period",
    cost: "EUR 80 (~PHP 4,960) + VFS service charge (~PHP 1,500-2,000)",
    requirements: [
      "Philippine passport (valid 3+ months beyond planned departure from Schengen, 2 blank pages)",
      "Completed Schengen visa application form",
      "2 passport-size photos (Schengen spec: 35x45mm, white background)",
      "Travel insurance with minimum EUR 30,000 coverage (mandatory!)",
      "Round-trip flight reservation",
      "Hotel bookings for entire stay",
      "Detailed day-by-day itinerary",
      "Bank certificate + 6 months bank statements",
      "Certificate of Employment with approved leave and compensation",
      "ITR (latest year)",
      "Proof of accommodation for entire trip",
      "For self-employed: DTI/SEC registration, audited financial statements, latest ITR",
    ],
    tips: [
      "Apply at the embassy of the country where you'll spend the MOST nights (main destination rule)",
      "Travel insurance is MANDATORY — must cover EUR 30,000 minimum with repatriation coverage",
      "Apply at VFS Global center (authorized service center)",
      "Processing takes 15-45 days — apply early (up to 6 months before trip)",
      "Schengen visa allows travel to ALL 27 Schengen countries",
      "Having a US or Japan visa greatly helps your application",
      "Show complete itinerary — they want to see you've planned thoroughly",
    ],
    budget: "PHP 5,000-12,000/day (mid-range) | PHP 3,000-6,000/day (budget)",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    visaRequired: "No (30-day visa-free for Filipinos!)",
    color: "bg-green-50 border-green-200",
    difficulty: "Easy",
    processing: "N/A (visa-free)",
    validity: "30 days upon arrival",
    cost: "FREE",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Return/onward flight ticket",
      "Hotel booking or accommodation proof",
      "Sufficient funds for the trip",
      "SG Arrival Card (electronic, submit before arrival at eservices.ica.gov.sg)",
    ],
    tips: [
      "Visa-free for 30 days — just bring passport and arrival card",
      "SG Arrival Card is electronic now — submit online 3 days before arrival",
      "One of the safest countries in the world",
      "Very expensive for accommodation and food — budget PHP 4,000-8,000/day minimum",
      "MRT/public transport is excellent — no need for taxis/Grab unless late at night",
    ],
    budget: "PHP 4,000-10,000/day (mid-range) | PHP 2,500-4,000/day (budget)",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    visaRequired: "No (30-day visa-free for Filipinos)",
    color: "bg-orange-50 border-orange-200",
    difficulty: "Easy",
    processing: "N/A (visa-free)",
    validity: "30 days upon arrival",
    cost: "FREE",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Return/onward flight ticket",
      "Proof of accommodation",
      "Proof of funds (20,000 THB or ~PHP 32,000 equivalent per person)",
    ],
    tips: [
      "Visa-free for 30 days — very easy entry",
      "One of the most affordable travel destinations from PH",
      "Street food is amazing and cheap (PHP 50-150 per meal)",
      "Bangkok is a great starting point; Chiang Mai for nature; Phuket/Krabi for beaches",
      "Grab (ride-hailing) works well in Bangkok",
      "Be cautious of common tourist scams (tuk-tuk tours, gem shops, closed temple scam)",
    ],
    budget: "PHP 2,000-5,000/day (mid-range) | PHP 1,000-2,000/day (budget)",
  },
  {
    country: "Taiwan",
    flag: "🇹🇼",
    visaRequired: "No (14-day visa-free via online travel authorization)",
    color: "bg-teal-50 border-teal-200",
    difficulty: "Easy",
    processing: "Online (instant-2 days)",
    validity: "14 days",
    cost: "FREE (online travel authorization)",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Online Travel Authorization via Taiwan's BOCA website",
      "Return/onward flight ticket",
      "Hotel/accommodation booking",
      "Must hold a valid visa or resident card from: US, Canada, Japan, Korea, UK, Schengen, Australia, NZ",
      "OR: have visited these countries in the last 10 years (entry stamp proof)",
    ],
    tips: [
      "The visa-free entry requires either a valid visa from select countries OR a recent entry stamp from those countries",
      "If you have a valid US/Japan/Schengen visa, you qualify automatically",
      "Apply for the online travel authorization at least 3 days before departure",
      "Taiwan is very tourist-friendly with excellent public transport (MRT, HSR)",
      "Night markets are a must — amazing street food",
    ],
    budget: "PHP 2,500-6,000/day (mid-range) | PHP 1,500-3,000/day (budget)",
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    visaRequired: "No (21-day visa-free) or e-Visa (90 days)",
    color: "bg-lime-50 border-lime-200",
    difficulty: "Easy",
    processing: "N/A (visa-free) or 3 days (e-Visa)",
    validity: "21 days (visa-free) / 90 days (e-Visa)",
    cost: "FREE (visa-free) / USD 25 (e-Visa)",
    requirements: [
      "Philippine passport (valid 6+ months)",
      "Return/onward flight ticket",
      "For e-Visa: apply at evisa.xuatnhapcanh.gov.vn",
    ],
    tips: [
      "21-day visa-free for Filipinos — very easy",
      "If staying longer than 21 days, get an e-Visa before departure",
      "One of the cheapest travel destinations in Southeast Asia",
      "Ho Chi Minh City for urban; Hanoi for culture; Da Nang for beaches; Sapa for mountains",
      "Street food is incredible and dirt cheap",
      "Grab works throughout major cities",
    ],
    budget: "PHP 1,500-4,000/day (mid-range) | PHP 800-1,500/day (budget)",
  },
];

const firstTimerCountries = [
  { country: "Singapore", flag: "🇸🇬", why: "Visa-free, English-speaking, extremely safe, clean, efficient. Perfect first international trip." },
  { country: "Thailand", flag: "🇹🇭", why: "Visa-free, very affordable, amazing food, tourist-friendly. Great value for money." },
  { country: "Vietnam", flag: "🇻🇳", why: "Visa-free (21 days), very cheap, incredible food and culture. Budget-friendly." },
  { country: "Hong Kong", flag: "🇭🇰", why: "Visa-free (14 days), Disneyland, shopping, easy to navigate, English widely spoken." },
  { country: "Taiwan", flag: "🇹🇼", why: "Visa-free (with qualifying visa), safe, excellent public transport, amazing night markets." },
  { country: "Malaysia", flag: "🇲🇾", why: "Visa-free (30 days), affordable, diverse culture, KL is modern and tourist-friendly." },
];

const offloadingTips = [
  {
    title: "Documents to Prepare",
    items: [
      "Valid passport with sufficient validity (6+ months)",
      "Printed round-trip flight tickets",
      "Hotel/accommodation bookings (printed)",
      "Printed travel itinerary (day-by-day)",
      "Proof of funds: bank certificate, credit cards, cash",
      "Travel insurance (especially for Schengen)",
      "Visa (if required) — make sure it's valid",
      "Certificate of Employment or business documents",
    ],
  },
  {
    title: "At the Immigration Counter",
    items: [
      "Be confident but polite — answer questions directly",
      "Know your itinerary — immigration officers will ask about your plans",
      "Know your hotel name and address",
      "Know your return flight date",
      "Don't over-share or give unnecessary information",
      "Have all documents organized and ready (don't fumble through your bag)",
      "Dress appropriately — looking like a tourist is fine, looking unkempt is not",
      "Travel with companions if possible (especially first-timers)",
    ],
  },
  {
    title: "Common Reasons for Offloading",
    items: [
      "No return ticket or clear travel plans",
      "Insufficient funds for the trip",
      "First-time traveler with no clear purpose",
      "Passport validity less than 6 months",
      "No hotel booking or proof of accommodation",
      "Unable to answer basic questions about the trip",
      "Traveling to a country known for illegal recruitment (be prepared for extra questions)",
      "Derogatory records (immigration hold orders, warrants)",
    ],
  },
];

const budgetBreakdown = [
  { category: "Flight", tip: "Book 2-3 months ahead for best prices. Use Skyscanner or Google Flights. Consider budget airlines (Cebu Pacific, AirAsia, Jetstar)." },
  { category: "Accommodation", tip: "Hostels: PHP 500-1,500/night. Budget hotels: PHP 1,500-3,000/night. Airbnb can be cheaper for groups. Book on Agoda or Booking.com." },
  { category: "Food", tip: "Street food > restaurants for budget travel. In SEA countries, eat where locals eat. Convenience stores (7-Eleven, FamilyMart) for cheap meals in Japan/Korea." },
  { category: "Transport", tip: "Use public transport (trains, buses). Get day passes if available. Grab/Uber for groups can be cheaper than individual train tickets." },
  { category: "Activities", tip: "Research free activities (parks, temples, markets). Book tours on Klook or KKDay for discounts. Walking tours are often free (tip-based)." },
  { category: "Pocket Money", tip: "Carry mix of cash + card. Withdraw from ATMs abroad (check your bank's forex rate). Wise/Revolut cards have good exchange rates." },
  { category: "Travel Insurance", tip: "PHP 500-2,000 per trip. Always get it — medical costs abroad can bankrupt you. Claims for flight delays/lost luggage are a bonus." },
  { category: "SIM/WiFi", tip: "Buy a local SIM at the airport (cheapest option). Pocket WiFi: PHP 200-500/day rental. eSIM: Airalo app (convenient if your phone supports it)." },
];

export function Travel() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-sky-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-sky-100 rounded-xl">
            <Plane className="w-6 h-6 text-sky-600" />
          </div>
          <h1 className="text-sky-900">International Travel Guide for Filipinos</h1>
        </div>
        <p className="text-sm text-sky-700 leading-relaxed max-w-2xl">
          Everything first-time and seasoned Filipino travelers need to know — visa requirements
          for popular destinations, how to avoid getting offloaded, budget planning, which
          countries to visit first, and practical travel tips.
        </p>
      </div>

      {/* First-Timer Countries */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-amber-500" />
          <h2 className="text-gray-900">Best Countries for First-Time Travelers</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Start with these visa-free or easy-to-enter countries to build your travel history</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {firstTimerCountries.map((c) => (
            <div key={c.country} className="p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border border-sky-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{c.flag}</span>
                <h4 className="text-gray-800">{c.country}</h4>
              </div>
              <p className="text-sm text-gray-600">{c.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Pro tip:</strong> Build your passport stamps with visa-free countries first.
            Having stamps from Singapore, Japan, Korea, or Schengen countries significantly
            helps when applying for harder visas (US, Canada, Australia).
          </p>
        </div>
      </div>

      {/* Visa Guide by Country */}
      <div>
        <h2 className="text-gray-900 mb-1">Visa Requirements by Country</h2>
        <p className="text-sm text-gray-500 mb-4">Detailed requirements and tips for each destination</p>
        <div className="space-y-4">
          {visaTypes.map((visa) => (
            <details key={visa.country} className={`rounded-xl border overflow-hidden group ${visa.color}`}>
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{visa.flag}</span>
                    <div>
                      <h3 className="text-gray-900">{visa.country}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          visa.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                          visa.difficulty === "Moderate" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {visa.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">Cost: {visa.cost}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-4">
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><Shield className="w-3 h-3" /> Visa Required</div>
                    <div className="text-sm text-gray-800">{visa.visaRequired}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Processing</div>
                    <div className="text-sm text-gray-800">{visa.processing}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><DollarSign className="w-3 h-3" /> Cost</div>
                    <div className="text-sm text-gray-800">{visa.cost}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><FileText className="w-3 h-3" /> Validity</div>
                    <div className="text-sm text-gray-800">{visa.validity}</div>
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Requirements</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {visa.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" /> {req}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Tips & Advice</h4>
                  <ul className="space-y-1.5">
                    {visa.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Estimated Daily Budget</div>
                  <p className="text-sm text-gray-700">{visa.budget}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* How NOT to Get Offloaded */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-red-900">How NOT to Get Offloaded at Immigration</h2>
        </div>
        <p className="text-sm text-red-700 mb-4">
          Philippine immigration at NAIA/airports can be strict with Filipino travelers.
          Here's how to pass smoothly:
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {offloadingTips.map((section) => (
            <div key={section.title} className="bg-white/80 rounded-xl p-4">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Show Money Guide */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">How Much "Show Money" Do You Need?</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Immigration may ask to see proof of funds. While there's no official "show money" amount for Philippine immigration,
          here are recommended amounts to have:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Destination</th>
                <th className="text-left py-3 px-3 text-gray-500">Recommended Amount</th>
                <th className="text-left py-3 px-3 text-gray-500">Per Day</th>
                <th className="text-left py-3 px-3 text-gray-500">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dest: "Southeast Asia (SG, TH, VN, MY)", amount: "PHP 30,000 - 80,000", perDay: "PHP 2,000-5,000", notes: "Thailand officially requires 20,000 THB (~PHP 32K)" },
                { dest: "Japan", amount: "PHP 50,000 - 150,000", perDay: "PHP 3,000-8,000", notes: "Show bank certificate with healthy balance" },
                { dest: "South Korea", amount: "PHP 50,000 - 150,000", perDay: "PHP 3,000-7,000", notes: "Bank statement with consistent deposits matters" },
                { dest: "Europe (Schengen)", amount: "PHP 80,000 - 200,000", perDay: "PHP 5,000-12,000", notes: "Show 6 months bank statements + travel insurance" },
                { dest: "United States", amount: "PHP 100,000 - 300,000+", perDay: "PHP 5,000-15,000", notes: "Strong financials crucial for US visa interview" },
                { dest: "Hong Kong / Taiwan", amount: "PHP 30,000 - 80,000", perDay: "PHP 3,000-6,000", notes: "Moderate requirements" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{row.dest}</td>
                  <td className="py-2.5 px-3 text-green-700">{row.amount}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.perDay}</td>
                  <td className="py-2.5 px-3 text-xs text-gray-400">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          These are recommendations, not strict rules. Show money can be in the form of: bank certificate, credit cards,
          cash, traveler's checks, or a combination. Having a bank certificate is the strongest proof.
        </p>
      </div>

      {/* Budget Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Travel Budget Breakdown</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {budgetBreakdown.map((item) => (
            <div key={item.category} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-2">{item.category}</h4>
              <p className="text-sm text-gray-600">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Tips */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200 p-5 sm:p-6">
        <h2 className="text-sky-900 mb-3">Flight Booking Tips</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-gray-800 mb-2">Best Budget Airlines from Manila</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Cebu Pacific — cheapest fares to SEA, Japan, Korea, Australia",
                "AirAsia — great for Malaysia, Thailand, and regional",
                "Jetstar — budget option for Japan and Australia",
                "Scoot — Singapore Airlines' budget arm, good for SG and beyond",
                "Philippine Airlines (PAL) — look for promo fares; full-service",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gray-800 mb-2">When to Book</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Domestic flights: 1-2 months ahead for normal; seat sales as they come",
                "SEA countries: 2-3 months ahead for best prices",
                "Japan/Korea: 2-4 months ahead; watch for seat sales",
                "US/Europe: 3-6 months ahead for best prices",
                "Use Google Flights to track price trends and set alerts",
                "Tuesday/Wednesday flights are often cheapest",
                "Red-eye (overnight) flights save on accommodation",
                "Use incognito mode when searching — prices may increase with repeated searches",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 text-sky-400 shrink-0 mt-1.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Travel Checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Pre-Travel Checklist</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-xl">
            <h4 className="text-green-800 mb-2">Before Booking</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {[
                "Check passport validity (6+ months)",
                "Research visa requirements",
                "Set your budget",
                "Check weather/season for destination",
                "Compare flight prices across platforms",
                "Read travel advisories (DFA website)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <h4 className="text-blue-800 mb-2">1-2 Weeks Before</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {[
                "Print all documents (flight, hotel, itinerary)",
                "Buy travel insurance",
                "Notify your bank about foreign travel",
                "Exchange some cash (or bring USD)",
                "Download offline maps (Google Maps)",
                "Buy SIM/eSIM or reserve pocket WiFi",
                "Pack according to airline baggage limits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl">
            <h4 className="text-amber-800 mb-2">Day of Departure</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {[
                "Arrive at airport 3 hours early (international)",
                "Have documents organized (passport, tickets, visa, hotel booking)",
                "Carry proof of funds (bank certificate, cash, cards)",
                "Charged phone with offline maps downloaded",
                "Copy of passport saved in phone/email",
                "Emergency contacts written down",
                "Don't forget: travel adapter, medicines, charger",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-sky-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "I'm a first-time traveler with a fresh passport. Will I get offloaded?",
              a: "Not necessarily, but you'll face more scrutiny. Prepare ALL documents: printed round-trip ticket, hotel booking, detailed itinerary, bank certificate showing sufficient funds, and proof of employment. Start with visa-free countries (Singapore, Thailand, Vietnam) to build your passport stamps before applying for visa-required destinations.",
            },
            {
              q: "How much pocket money should I bring?",
              a: "For SEA countries: PHP 2,000-5,000/day is comfortable. For Japan/Korea: PHP 3,000-8,000/day. For US/Europe: PHP 5,000-15,000/day. Bring a mix: 70% in debit/credit card, 30% cash. Withdraw from ATMs abroad for better rates. Wise/Revolut cards have excellent forex rates.",
            },
            {
              q: "I got denied a US/Schengen visa. Can I reapply?",
              a: "Yes, you can reapply immediately. However, you should address the reasons for denial first. Common fixes: build more travel history (visit visa-free countries), improve financial documents, get promoted/change jobs for better employment proof. Each application is evaluated independently.",
            },
            {
              q: "Do I need to book a non-refundable flight before getting a visa?",
              a: "NO! For visa applications, you only need a flight RESERVATION/ITINERARY — not a confirmed ticket. Many travel agencies offer 'dummy' flight bookings for visa purposes. You can also book refundable tickets. Never book non-refundable flights until your visa is approved.",
            },
            {
              q: "Is travel insurance really necessary?",
              a: "YES, absolutely. Hospital visits abroad can cost PHP 50,000-500,000+. Travel insurance costs only PHP 500-2,000 per trip and covers: medical emergencies, trip cancellation, lost luggage, flight delays, and emergency evacuation. It's MANDATORY for Schengen visa applications. Get it for every international trip.",
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
