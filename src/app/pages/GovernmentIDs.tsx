import { CreditCard, CheckCircle2, AlertTriangle, Clock, DollarSign, MapPin, Star, ArrowRight } from "lucide-react";

const allIDs = [
  {
    name: "Philippine National ID (PhilSys)",
    agency: "Philippine Statistics Authority (PSA)",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-600",
    accentBg: "bg-blue-100",
    cost: "FREE",
    validity: "Lifetime (update photo every 10 years)",
    processing: "Walk-in or online pre-registration",
    priority: "Must-Have",
    description: "The Philippine Identification System (PhilSys) ID is the government's single national ID. It is accepted for ALL transactions - government, banks, employment, and private sector.",
    requirements: [
      "PSA Birth Certificate (original)",
      "Any valid government-issued ID (if available)",
      "For minors: accompanied by parent with valid ID",
      "Marriage certificate (if married, for name change)",
    ],
    steps: [
      "Pre-register online at register.philsys.gov.ph OR walk in at any PSA registration center",
      "Fill out the demographic information form",
      "Submit supporting documents (birth certificate + any valid ID)",
      "Biometric capture: fingerprints (10 fingers), iris scan, front-facing photo",
      "Receive your PhilSys Number (PSN) via transaction slip",
      "Wait for physical PhilSys card delivery OR download ePhilID",
      "ePhilID can be printed and is equally valid",
    ],
    tips: [
      "The National ID is meant to be the ONLY ID you'll ever need",
      "It's accepted by ALL government agencies, banks, and private companies",
      "Keep your ePhilID saved on your phone as backup",
      "No need for cedula if you have a National ID",
    ],
  },
  {
    name: "Unified Multi-Purpose ID (UMID)",
    agency: "SSS / GSIS",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    accentBg: "bg-sky-100",
    cost: "FREE (through SSS/GSIS)",
    validity: "No expiry",
    processing: "2-4 weeks",
    priority: "Must-Have",
    description: "The UMID card serves as your SSS/GSIS ID and is one of the most widely accepted government IDs. It also functions as an ATM card for pension claims.",
    requirements: [
      "Active SSS or GSIS membership",
      "SSS/GSIS number",
      "Any 2 valid IDs (primary or secondary)",
      "PSA Birth Certificate",
    ],
    steps: [
      "Visit any SSS branch (for private sector) or GSIS branch (for government employees)",
      "Fill out the UMID application form",
      "Submit your valid IDs and birth certificate",
      "Biometric capture (photo, fingerprints, signature)",
      "Receive transaction number/acknowledgment receipt",
      "Wait 2-4 weeks for card to be available for pickup",
      "Check status online at member.sss.gov.ph",
    ],
    tips: [
      "Apply for UMID as soon as you get your SSS number",
      "It doubles as an ATM card (UnionBank) for pension withdrawals",
      "One of the strongest IDs - accepted everywhere",
      "No renewal needed",
    ],
  },
  {
    name: "Driver's License",
    agency: "Land Transportation Office (LTO)",
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-600",
    accentBg: "bg-purple-100",
    cost: "PHP 585 (Non-Pro/Pro) | PHP 272.63 (Student Permit)",
    validity: "5 years (license) | 1 year (student permit)",
    processing: "Same day (if complete requirements)",
    priority: "If you drive",
    description: "Your driver's license is both a driving authorization and one of the most accepted government IDs. Even non-drivers sometimes get it just for the ID.",
    requirements: [
      "Student Permit: At least 16 years old, PSA birth certificate, medical certificate, drug test",
      "Non-Pro: Student permit (held 1 month), CDE certificate, PDC (15 hrs manual/8 hrs auto)",
      "Professional: Non-pro (held 6 months) OR student permit (5 months + PDC), written & practical exam",
      "Renewal: Current license, medical certificate, CDE, drug test",
    ],
    steps: [
      "Book appointment via LTMS Portal (portal.lto.gov.ph)",
      "Get medical certificate from LTO-accredited clinic",
      "Get drug test from DOH-accredited testing center",
      "Complete CDE seminar (online or in-person)",
      "For new license: Complete PDC from accredited driving school",
      "Visit LTO on your appointment date with all documents",
      "Pay the fees and have your photo taken",
      "Receive your license card (usually same day)",
    ],
    tips: [
      "Book LTMS appointment early - slots fill up fast",
      "LTO satellite offices in malls often have shorter lines",
      "Medical + drug test clinics near LTO offices offer bundled pricing",
      "Keep your old license during renewal process",
    ],
  },
  {
    name: "Passport",
    agency: "Department of Foreign Affairs (DFA)",
    color: "bg-teal-50 border-teal-200",
    accent: "text-teal-600",
    accentBg: "bg-teal-100",
    cost: "PHP 950 (regular) | PHP 1,200 (expedite)",
    validity: "10 years (adult) | 5 years (minor)",
    processing: "15 working days (regular) | 7 working days (expedite)",
    priority: "Must-Have",
    description: "Your passport is required for international travel and serves as the strongest form of government ID for domestic transactions.",
    requirements: [
      "New: PSA Birth Certificate (on security paper), valid ID, completed online application",
      "Renewal: Old passport, PSA Birth Certificate, completed online application",
      "Minor: PSA Birth Certificate, parent/guardian with valid ID, marriage certificate of parents",
      "Married: PSA Marriage Certificate (for name change)",
    ],
    steps: [
      "Create an account at passport.gov.ph",
      "Book an appointment (slots open monthly - set an alarm!)",
      "Fill out online application form",
      "Visit DFA office/consular on appointment date",
      "Present requirements and payment",
      "Biometric capture (photo, fingerprints)",
      "Brief interview",
      "Wait for processing and pick up or delivery",
    ],
    tips: [
      "DFA appointment slots are EXTREMELY competitive - book the moment they open",
      "DFA satellite offices in malls have shorter wait times",
      "Check for courtesy lane eligibility (senior citizens, PWDs, OFWs, solo parents)",
      "Keep a photocopy + photo of your passport data page in your phone",
    ],
  },
  {
    name: "NBI Clearance",
    agency: "National Bureau of Investigation (NBI)",
    color: "bg-red-50 border-red-200",
    accent: "text-red-600",
    accentBg: "bg-red-100",
    cost: "PHP 155",
    validity: "1 year",
    processing: "Same day (no hit) | 5-10 days (with hit)",
    priority: "Must-Have",
    description: "The NBI Clearance certifies that you have no pending criminal case or derogatory record. Required for employment, travel, business permits, and many transactions.",
    requirements: [
      "Valid government-issued ID (original + photocopy)",
      "Online payment reference number",
      "Appointment confirmation",
      "For renewal: Previous NBI clearance (if available)",
    ],
    steps: [
      "Go to clearance.nbi.gov.ph and create an account",
      "Apply for NBI Clearance online",
      "Pay the fee (GCash, Maya, bank, 7-Eleven, Bayad Center)",
      "Book an appointment at your preferred NBI branch",
      "Visit the NBI branch on your scheduled date",
      "Present your valid ID and reference number",
      "Biometric capture (photo, fingerprints)",
      "If no 'hit': clearance released within the day",
      "If with 'hit': return after 5-10 working days for verification",
    ],
    tips: [
      "A 'hit' means your name matches someone in the database - it's common for common names",
      "Apply online first! Walk-in is no longer accepted in most branches",
      "Early morning appointments = shorter waiting time",
      "Renew before it expires if you need it regularly for work",
    ],
  },
  {
    name: "Police Clearance",
    agency: "Philippine National Police (PNP)",
    color: "bg-green-50 border-green-200",
    accent: "text-green-600",
    accentBg: "bg-green-100",
    cost: "PHP 150-200",
    validity: "6 months",
    processing: "Same day",
    priority: "Often Required",
    description: "A certificate from PNP confirming you have no pending criminal case at the local level. Often required alongside NBI Clearance for employment and other transactions.",
    requirements: [
      "Valid government-issued ID",
      "2 recent 1x1 or 2x2 ID photos",
      "Cedula / Community Tax Certificate (sometimes required)",
      "Barangay Clearance (sometimes required)",
    ],
    steps: [
      "Visit your local police station or city/municipal police office",
      "Fill out the police clearance application form",
      "Submit your valid ID and photos",
      "Pay the processing fee",
      "Undergo name verification in the database",
      "Receive your police clearance (usually within 1-2 hours)",
    ],
    tips: [
      "Get this from your LOCAL police station (where you reside)",
      "Much faster to process than NBI Clearance",
      "Some employers accept this as alternative to NBI",
      "Validity is only 6 months, so don't get it too early",
    ],
  },
  {
    name: "Postal ID",
    agency: "Philippine Postal Corporation (PHLPost)",
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-600",
    accentBg: "bg-orange-100",
    cost: "PHP 504 (regular) | PHP 804 (rush)",
    validity: "3 years",
    processing: "15-20 working days (regular) | 5-7 days (rush)",
    priority: "Recommended",
    description: "One of the most affordable government IDs and widely accepted. Great as a backup or secondary ID. Useful while waiting for other IDs to process.",
    requirements: [
      "1 primary valid ID OR 2 secondary IDs",
      "Accomplished application form (available at post office)",
      "For first-time: PSA Birth Certificate (photocopy)",
      "No appointment needed - walk-in",
    ],
    steps: [
      "Visit any PHLPost (Post Office) branch nationwide",
      "Fill out the Postal ID application form",
      "Submit your supporting IDs",
      "Have your photo and biometrics captured on-site",
      "Pay the fee (PHP 504 regular / PHP 804 rush)",
      "Receive claim stub with estimated release date",
      "Return on release date to claim your Postal ID",
    ],
    tips: [
      "Walk-in only - no need for online appointment",
      "Go early in the morning for shorter lines",
      "Rush processing is worth it if you need the ID quickly",
      "Accepted by most banks and government agencies",
    ],
  },
  {
    name: "Voter's ID / Voter Registration",
    agency: "Commission on Elections (COMELEC)",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-600",
    accentBg: "bg-amber-100",
    cost: "FREE",
    validity: "Until deactivated (no voting for 2 consecutive elections)",
    processing: "Registration: same day | ID delivery: varies",
    priority: "Civic Duty",
    description: "Register as a voter to exercise your right to vote. Your voter's registration also serves as a valid government ID through the Voter's Certificate.",
    requirements: [
      "Filipino citizen, at least 18 years old on election day",
      "Resident of the Philippines for at least 1 year",
      "Resident of the city/municipality for at least 6 months",
      "Any valid ID or certification from barangay captain",
    ],
    steps: [
      "Check registration schedule at comelec.gov.ph (registration period varies)",
      "Pre-register online at iRehistro (irehistro.comelec.gov.ph) if available",
      "Visit your local COMELEC office during registration period",
      "Submit valid ID and fill out voter registration form",
      "Biometric capture (photo, fingerprints, signature)",
      "Receive voter registration acknowledgment",
      "Verify your registration status at comelec.gov.ph before elections",
    ],
    tips: [
      "Registration is usually suspended months before an election",
      "Register EARLY - don't wait for the deadline rush",
      "If you moved, update your voter's registration to your new address",
      "You can request a Voter's Certificate from COMELEC as a valid ID",
    ],
  },
  {
    name: "PRC ID (Professional License)",
    agency: "Professional Regulation Commission (PRC)",
    color: "bg-indigo-50 border-indigo-200",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-100",
    cost: "PHP 600-900 (varies by profession)",
    validity: "3 years",
    processing: "2-4 weeks after board exam results",
    priority: "For Licensed Professionals",
    description: "If you passed a PRC board exam (CPA, nurse, engineer, architect, teacher, etc.), your PRC license card is a primary valid ID and proof of your professional qualifications.",
    requirements: [
      "Board exam passing certificate",
      "Transcript of Records",
      "NSO/PSA Birth Certificate",
      "Valid ID",
      "Professional Tax Receipt (PTR) - for renewal",
      "Continuing Professional Development (CPD) units - for renewal",
    ],
    steps: [
      "After passing board exam: Register at prc.gov.ph",
      "Create PRC online account if you don't have one",
      "Apply for initial registration online",
      "Pay the registration and license fees",
      "Submit required documents",
      "Claim your PRC ID card",
      "For renewal: Complete required CPD units, pay PTR and renewal fee",
    ],
    tips: [
      "Renew before expiry to avoid penalty fees",
      "Complete your CPD units early - don't cram before renewal",
      "PRC ID is one of the strongest primary IDs - always valid for bank, government, and employment",
      "Keep your PTR (Professional Tax Receipt) updated - pay at your city/municipal hall every January",
    ],
  },
  {
    name: "Senior Citizen ID",
    agency: "OSCA (Office for Senior Citizens Affairs) / Local Government",
    color: "bg-rose-50 border-rose-200",
    accent: "text-rose-600",
    accentBg: "bg-rose-100",
    cost: "FREE",
    validity: "Lifetime",
    processing: "Same day to 1 week",
    priority: "For 60+ years old",
    description: "Senior citizens (60 years old and above) are entitled to a Senior Citizen ID card, granting discounts and privileges under RA 9994 (Expanded Senior Citizens Act).",
    requirements: [
      "At least 60 years old",
      "Any valid government ID",
      "PSA Birth Certificate or baptismal certificate",
      "1x1 or 2x2 ID photo",
      "Barangay Certificate of Residency",
    ],
    steps: [
      "Visit the OSCA office in your city/municipality hall",
      "Fill out the Senior Citizen registration form",
      "Submit valid ID and supporting documents",
      "Have your photo taken (or submit ID photos)",
      "Receive your Senior Citizen ID",
    ],
    tips: [
      "20% discount on medicines, medical and dental services",
      "20% discount on restaurants, recreation, transportation",
      "12% VAT exemption on certain goods and services",
      "Priority lanes in all establishments",
      "Free PhilHealth coverage (Lifetime member status)",
    ],
  },
  {
    name: "PWD ID",
    agency: "Local Government / DSWD",
    color: "bg-cyan-50 border-cyan-200",
    accent: "text-cyan-600",
    accentBg: "bg-cyan-100",
    cost: "FREE",
    validity: "3 years (renewable)",
    processing: "1-2 weeks",
    priority: "For Persons with Disability",
    description: "Persons with Disability are entitled to a PWD ID granting them 20% discount and VAT exemption on select goods and services under RA 10754.",
    requirements: [
      "Medical certificate or clinical abstract specifying the disability",
      "Barangay Certificate of Residency",
      "1x1 or 2x2 ID photo",
      "Any valid ID (if available)",
    ],
    steps: [
      "Obtain medical certificate from a licensed physician",
      "Visit the PDAO (Persons with Disability Affairs Office) in your city/municipality",
      "Fill out the PWD registration form",
      "Submit medical certificate and supporting documents",
      "Receive your PWD ID card",
    ],
    tips: [
      "20% discount on medicines, medical services, transportation, restaurants",
      "12% VAT exemption on select goods and services",
      "Priority lanes in all government and private establishments",
      "Additional tax exemption of PHP 25,000 (for employed PWDs)",
    ],
  },
  {
    name: "Barangay ID / Barangay Clearance",
    agency: "Barangay Hall",
    color: "bg-lime-50 border-lime-200",
    accent: "text-lime-600",
    accentBg: "bg-lime-100",
    cost: "FREE - PHP 100",
    validity: "6 months - 1 year",
    processing: "Same day",
    priority: "Basic Requirement",
    description: "Your barangay clearance/ID is the most basic government document. Required for employment, business permits, NBI clearance, and many other transactions.",
    requirements: [
      "Proof of residency in the barangay",
      "Any valid ID",
      "Community Tax Certificate (Cedula) - sometimes required",
      "1x1 or 2x2 ID photo (for Barangay ID)",
    ],
    steps: [
      "Visit your barangay hall during office hours",
      "Request for Barangay Clearance or Barangay ID",
      "Fill out the application form",
      "Pay the minimal fee (if any)",
      "Receive your clearance/ID (usually same day)",
    ],
    tips: [
      "This is usually the FIRST document you get as it's required for almost everything else",
      "Get this before applying for NBI Clearance, Police Clearance, or business permits",
      "Very quick to process - usually within 30 minutes",
      "Some barangays issue free IDs; others charge PHP 50-100",
    ],
  },
  {
    name: "TIN ID (BIR)",
    agency: "Bureau of Internal Revenue (BIR)",
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-600",
    accentBg: "bg-orange-100",
    cost: "FREE",
    validity: "No expiry",
    processing: "1-3 weeks (for physical card)",
    priority: "Must-Have",
    description: "Your TIN (Tax Identification Number) card is issued by BIR when you register as a taxpayer. It serves as a valid government ID and is required for employment and financial transactions.",
    requirements: [
      "BIR Form 1902 (employee) or 1901 (self-employed) or 1904 (non-earner)",
      "PSA Birth Certificate",
      "Valid government ID",
      "For employees: Employment certificate from employer",
    ],
    steps: [
      "Determine which BIR form to use (1902 for employees, 1901 for self-employed, 1904 for non-earners)",
      "Visit the BIR Revenue District Office (RDO) for your area",
      "Submit the accomplished form with supporting documents",
      "Receive your TIN immediately",
      "Apply for the physical TIN ID card (may take 1-3 weeks)",
      "Alternative: Apply online at ereg.bir.gov.ph",
    ],
    tips: [
      "You only get ONE TIN for life - it's illegal to have multiple TINs",
      "Your employer can process your TIN for you (first-time employees)",
      "If you lost your TIN number, call BIR hotline 8538-3200",
      "TIN ID is accepted as a valid ID but is not one of the strongest - get a UMID or National ID too",
    ],
  },
];

export function GovernmentIDs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-cyan-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-cyan-100 rounded-xl">
            <CreditCard className="w-6 h-6 text-cyan-600" />
          </div>
          <h1 className="text-cyan-900">Complete Guide to Government IDs</h1>
        </div>
        <p className="text-sm text-cyan-700 leading-relaxed max-w-2xl">
          Every government ID available to Filipino citizens - what they are, how much they cost,
          where to get them, and step-by-step instructions. From the new National ID to
          barangay clearance, we've got you covered.
        </p>
      </div>

      {/* ID Priority */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Which IDs Should You Get First?</h2>
        <p className="text-sm text-gray-500 mb-4">Recommended order for building your ID portfolio</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { order: "1st", name: "Barangay ID", reason: "Needed for everything else" },
            { order: "2nd", name: "National ID", reason: "Universal, free, lifetime" },
            { order: "3rd", name: "TIN", reason: "Required for employment" },
            { order: "4th", name: "UMID (SSS)", reason: "Strong ID, no expiry" },
            { order: "5th", name: "Passport", reason: "Strongest ID + travel" },
          ].map((item) => (
            <div key={item.order} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 text-center border border-blue-100">
              <div className="text-xl text-blue-700 mb-1">{item.order}</div>
              <div className="text-sm text-gray-800 mb-1">{item.name}</div>
              <div className="text-xs text-gray-500">{item.reason}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Quick Reference: All Government IDs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">ID</th>
                <th className="text-left py-3 px-3 text-gray-500">Cost</th>
                <th className="text-left py-3 px-3 text-gray-500">Validity</th>
                <th className="text-left py-3 px-3 text-gray-500">Processing</th>
                <th className="text-left py-3 px-3 text-gray-500">Priority</th>
              </tr>
            </thead>
            <tbody>
              {allIDs.map((id, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{id.name}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-md text-xs ${id.cost === "FREE" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {id.cost}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{id.validity}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{id.processing}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      id.priority === "Must-Have" ? "bg-red-100 text-red-700" :
                      id.priority === "Recommended" ? "bg-blue-100 text-blue-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {id.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* All IDs Detailed */}
      <div>
        <h2 className="text-gray-900 mb-1">Detailed Guide for Each ID</h2>
        <p className="text-sm text-gray-500 mb-4">Click to expand each section</p>
        <div className="space-y-4">
          {allIDs.map((id) => (
            <details key={id.name} className={`rounded-xl border overflow-hidden group ${id.color}`}>
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${id.accentBg}`}>
                      <CreditCard className={`w-4 h-4 ${id.accent}`} />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{id.name}</h3>
                      <p className="text-xs text-gray-500">{id.agency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-xs ${id.cost === "FREE" ? "bg-green-100 text-green-700" : "bg-white text-gray-600"}`}>
                      {id.cost}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                  </div>
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-4">
                <p className="text-sm text-gray-600">{id.description}</p>

                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><DollarSign className="w-3 h-3" /> Cost</div>
                    <div className="text-sm text-gray-800">{id.cost}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Validity</div>
                    <div className="text-sm text-gray-800">{id.validity}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Processing</div>
                    <div className="text-sm text-gray-800">{id.processing}</div>
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Requirements</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {id.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 ${id.accent} shrink-0 mt-0.5`} />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Step-by-Step Process</h4>
                  <ol className="space-y-2">
                    {id.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className={`w-6 h-6 ${id.accentBg} ${id.accent} rounded-full flex items-center justify-center text-xs shrink-0`}>
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2 flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500" /> Pro Tips
                  </h4>
                  <ul className="space-y-1.5">
                    {id.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Valid ID Tiers */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Understanding ID Tiers</h2>
        <p className="text-sm text-gray-500 mb-4">Not all IDs are created equal. Banks and agencies classify IDs into tiers:</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="text-green-800 mb-2">Primary / Tier 1 IDs</h4>
            <p className="text-xs text-green-600 mb-2">Accepted alone for most transactions</p>
            <ul className="text-sm text-green-700 space-y-1">
              {["Philippine Passport", "Driver's License", "UMID", "National ID (PhilSys)", "PRC ID", "Voter's ID (with photo)"].map((id) => (
                <li key={id} className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> {id}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="text-blue-800 mb-2">Secondary / Tier 2 IDs</h4>
            <p className="text-xs text-blue-600 mb-2">Usually need 2 of these, or 1 + primary</p>
            <ul className="text-sm text-blue-700 space-y-1">
              {["Postal ID", "NBI Clearance", "Police Clearance", "Barangay ID", "TIN ID", "Senior Citizen ID", "PWD ID"].map((id) => (
                <li key={id} className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> {id}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="text-amber-800 mb-2">Supporting Documents</h4>
            <p className="text-xs text-amber-600 mb-2">Not IDs but often required alongside</p>
            <ul className="text-sm text-amber-700 space-y-1">
              {["PSA Birth Certificate", "PSA Marriage Certificate", "Cedula", "Barangay Clearance", "Company ID", "School ID"].map((id) => (
                <li key={id} className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> {id}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-amber-900">Important Reminders</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Always bring ORIGINAL IDs + at least 1 photocopy for any government transaction",
            "Keep digital photos of ALL your IDs on your phone (in case of loss)",
            "Never laminate original government documents (some agencies reject laminated docs)",
            "Report lost/stolen IDs immediately to the issuing agency AND police station",
            "Keep a secure folder at home with all your original documents",
            "Some IDs need to be renewed - set calendar reminders before expiry dates",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-amber-700 bg-white/70 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
