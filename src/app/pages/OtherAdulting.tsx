import { BookOpen, CheckCircle2, Clock, CreditCard, Shield, FileText, Fingerprint, Mail, Globe, Building, Heart } from "lucide-react";

const adultingTopics = [
  {
    title: "National ID (PhilSys)",
    icon: CreditCard,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    desc: "The Philippine Identification System (PhilSys) is the national ID system. It serves as a valid government ID for ALL transactions.",
    details: [
      { label: "Cost", value: "FREE" },
      { label: "Validity", value: "Lifetime (update every 10 years)" },
      { label: "Where", value: "PSA registration centers" },
    ],
    steps: [
      "Pre-register online at register.philsys.gov.ph or walk-in at registration centers",
      "Bring supporting documents (birth certificate, any valid ID)",
      "Biometric capture (fingerprints, iris scan, photo)",
      "Receive PhilSys Number (PSN) and ePhilID or physical card",
    ],
    tip: "The National ID is accepted for ALL government and private transactions. It can replace multiple IDs.",
  },
  {
    title: "NBI Clearance",
    icon: Fingerprint,
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
    desc: "Required for employment, travel, business registration, and many legal transactions.",
    details: [
      { label: "Cost", value: "PHP 155 (online)" },
      { label: "Validity", value: "1 year" },
      { label: "Where", value: "NBI Clearance centers" },
    ],
    steps: [
      "Apply online at clearance.nbi.gov.ph",
      "Pay the fee online (GCash, Maya, bank) or at 7-Eleven/Bayad Center",
      "Visit your chosen NBI branch on your scheduled date",
      "Bring valid ID + printed/digital reference number",
      "Biometric capture (photo, fingerprints)",
      "If no 'hit' (no matching criminal record), clearance is released same day",
      "If with 'hit', wait 5-10 working days for verification",
    ],
    tip: "Apply online first! Walk-in applications are no longer accepted in most branches. Book early as slots fill up fast.",
  },
  {
    title: "Police Clearance",
    icon: Shield,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    desc: "Certificate from PNP that you have no pending criminal case. Often required alongside NBI Clearance.",
    details: [
      { label: "Cost", value: "PHP 150-200" },
      { label: "Validity", value: "6 months" },
      { label: "Where", value: "Local police station" },
    ],
    steps: [
      "Go to your local police station or city/municipal police office",
      "Bring valid ID and 2 recent 1x1 or 2x2 photos",
      "Fill out application form",
      "Pay the fee",
      "Wait for processing (usually same day)",
    ],
    tip: "Some employers accept police clearance instead of NBI clearance. Check with your employer first.",
  },
  {
    title: "Postal ID",
    icon: Mail,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    desc: "One of the most affordable and widely accepted government IDs. Great as a secondary ID.",
    details: [
      { label: "Cost", value: "PHP 504 (basic) / PHP 804 (rush)" },
      { label: "Validity", value: "3 years" },
      { label: "Where", value: "Any Post Office" },
    ],
    steps: [
      "Visit any PhilPost office",
      "Bring 1 valid ID + photocopy, or 2 secondary IDs",
      "Fill out application form",
      "Photo and biometrics taken on-site",
      "Pay the fee",
      "Regular processing: 15-20 working days / Rush: 5-7 days",
    ],
    tip: "The Postal ID is widely accepted in banks, telcos, and government agencies. Good backup ID to have.",
  },
  {
    title: "Passport",
    icon: Globe,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
    desc: "Required for international travel. Also serves as a primary valid ID for domestic transactions.",
    details: [
      { label: "Cost", value: "PHP 950 (regular) / PHP 1,200 (expedite)" },
      { label: "Validity", value: "10 years (adult) / 5 years (minor)" },
      { label: "Where", value: "DFA offices" },
    ],
    steps: [
      "Book an appointment online at passport.gov.ph (slots open every month)",
      "Fill out the online application form",
      "Visit DFA on your scheduled date with requirements",
      "Bring PSA birth certificate, valid ID, old passport (if renewal)",
      "Biometric capture and interview",
      "Regular processing: 15 working days / Expedite: 7 working days",
      "Pick up at DFA or have it delivered",
    ],
    tip: "DFA passport slots are EXTREMELY competitive. Set an alarm for when slots open. Use DFA satellite offices in malls for shorter processing.",
  },
  {
    title: "Voter's ID / Voter Registration",
    icon: CheckCircle2,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    desc: "Register as a voter to exercise your right to vote. Voter's ID also serves as a valid government ID.",
    details: [
      { label: "Cost", value: "FREE" },
      { label: "Validity", value: "Until deactivated" },
      { label: "Where", value: "COMELEC offices" },
    ],
    steps: [
      "Visit your local COMELEC office during registration period",
      "Bring valid ID and proof of residence",
      "Fill out voter registration form",
      "Biometric capture (photo, fingerprints)",
      "Receive voter's registration record",
      "Check voter status online at comelec.gov.ph",
    ],
    tip: "Registration period is usually suspended before elections. Register early! You can also use the iRehistro online system for pre-registration.",
  },
  {
    title: "PhilSys / ePhilID",
    icon: CreditCard,
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
    desc: "The digital version of the National ID. Can be stored on your phone and used for transactions.",
    details: [
      { label: "Cost", value: "FREE" },
      { label: "Format", value: "Digital (printable)" },
      { label: "Where", value: "Online or PSA offices" },
    ],
    steps: [
      "If you've already registered for PhilSys, check your PhilSys Number",
      "Download or print your ePhilID",
      "Use it as valid ID for government and private transactions",
    ],
    tip: "The ePhilID is valid even as a printed copy. Keep a digital copy on your phone for convenience.",
  },
];

const insuranceInfo = [
  {
    title: "Life Insurance",
    desc: "Protects your family financially if something happens to you. Consider term life insurance for affordable coverage.",
    keyPoints: [
      "Term life: Pure protection, more affordable, covers specific period",
      "Whole life: Protection + savings component, more expensive",
      "VUL (Variable Unit-Linked): Insurance + investment, most expensive",
      "Recommended coverage: 10x your annual income",
    ],
  },
  {
    title: "Health Insurance (HMO)",
    desc: "Supplements PhilHealth coverage. Most employers provide HMO as a benefit.",
    keyPoints: [
      "Covers outpatient consultations, annual physical exams",
      "Higher room accommodations than PhilHealth",
      "Pre-existing conditions may have waiting periods",
      "Common providers: Maxicare, Intellicare, Medicard",
    ],
  },
  {
    title: "Car Insurance",
    desc: "CTPL is mandatory. Comprehensive insurance is highly recommended.",
    keyPoints: [
      "CTPL (Compulsory Third Party Liability): Required for LTO registration",
      "Comprehensive: Covers own damage, theft, natural disasters",
      "Acts of Nature: Additional coverage for floods, earthquakes",
      "Compare quotes from multiple insurers for best rates",
    ],
  },
];

const emergencyFund = {
  title: "Emergency Fund Basics",
  desc: "Before investing, build your emergency fund first!",
  tips: [
    "Save 3-6 months of monthly expenses (6-12 months if freelancer)",
    "Keep it in a high-yield savings account or digital bank (higher interest)",
    "Do NOT invest your emergency fund in stocks or mutual funds",
    "Automate your savings: set up auto-transfer on payday",
    "Start small: even PHP 500/month adds up over time",
    "Digital banks like Maya, GCash Save, CIMB, Tonik, and ING offer higher interest rates (3-6% vs traditional banks' 0.25%)",
  ],
};

export function OtherAdulting() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 sm:p-8 border border-pink-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-pink-100 rounded-xl">
            <BookOpen className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-pink-900">Other Adulting Essentials</h1>
        </div>
        <p className="text-sm text-pink-700 leading-relaxed max-w-2xl">
          Government IDs, clearances, insurance, emergency funds, and everything else
          they didn't teach you in school but you definitely need as a working adult.
        </p>
      </div>

      {/* Government IDs & Documents */}
      <div>
        <h2 className="text-gray-900 mb-1">Government IDs & Documents</h2>
        <p className="text-sm text-gray-500 mb-4">Essential documents every Filipino adult should have</p>
        <div className="space-y-4">
          {adultingTopics.map((topic) => (
            <div key={topic.title} className={`rounded-xl border p-5 ${topic.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <topic.icon className={`w-5 h-5 ${topic.iconColor}`} />
                <h3 className="text-gray-900">{topic.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{topic.desc}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {topic.details.map((detail) => (
                  <div key={detail.label} className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500">{detail.label}</div>
                    <div className="text-sm text-gray-800">{detail.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/70 rounded-lg p-4 mb-3">
                <h4 className="text-gray-800 mb-2">Steps</h4>
                <ol className="space-y-1.5">
                  {topic.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white/50 rounded-lg p-3 text-sm text-gray-600">
                <strong className="text-gray-700">Pro Tip:</strong> {topic.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance */}
      <div>
        <h2 className="text-gray-900 mb-1">Insurance You Should Consider</h2>
        <p className="text-sm text-gray-500 mb-4">Beyond government-mandated coverage</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {insuranceInfo.map((ins) => (
            <div key={ins.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-pink-500" />
                <h3 className="text-gray-900">{ins.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{ins.desc}</p>
              <ul className="space-y-1.5">
                {ins.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Fund */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Building className="w-5 h-5 text-green-600" />
          <h2 className="text-green-900">{emergencyFund.title}</h2>
        </div>
        <p className="text-sm text-green-700 mb-4">{emergencyFund.desc}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {emergencyFund.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-green-700 bg-white/70 p-3 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              {tip}
            </div>
          ))}
        </div>
      </div>

      {/* PSA Documents */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">PSA Documents You Should Secure</h2>
        <p className="text-sm text-gray-500 mb-4">
          Request these from PSA (Philippine Statistics Authority) online at psaserbilis.com.ph
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { doc: "PSA Birth Certificate", cost: "PHP 365", use: "Required for almost everything - TIN, passport, IDs" },
            { doc: "PSA Marriage Certificate", cost: "PHP 365", use: "Needed for spousal benefits, legal transactions" },
            { doc: "CENOMAR (Certificate of No Marriage)", cost: "PHP 420", use: "Required for marriage license, some visa applications" },
            { doc: "PSA Death Certificate", cost: "PHP 365", use: "Needed for claiming benefits, estate settlement" },
          ].map((item) => (
            <div key={item.doc} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-gray-800">{item.doc}</h4>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{item.cost}</span>
              </div>
              <p className="text-xs text-gray-500">{item.use}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Order online at psaserbilis.com.ph for delivery. Processing time: 4-6 working days (Metro Manila) or 6-14 days (provincial).
        </p>
      </div>

      {/* Adulting Checklist */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 p-5 sm:p-6">
        <h2 className="text-indigo-900 mb-3">Filipino Adulting Checklist</h2>
        <p className="text-sm text-indigo-600 mb-4">How many have you completed?</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Get your TIN (Tax Identification Number)",
            "Register with SSS",
            "Register with PhilHealth",
            "Register with Pag-IBIG",
            "Get PSA Birth Certificate",
            "Get National ID (PhilSys)",
            "Get NBI Clearance",
            "Get Passport",
            "Register as a Voter",
            "Get a Postal ID (backup ID)",
            "Open a savings account",
            "Build emergency fund (3-6 months expenses)",
            "Get your first driver's license",
            "Understand your payslip deductions",
            "File your first income tax return",
            "Get health insurance (HMO)",
            "Start saving for retirement",
            "Learn basic investing",
            "Create a monthly budget",
            "Get your Community Tax Certificate (Cedula)",
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 text-sm text-indigo-700 bg-white/70 p-3 rounded-lg cursor-pointer hover:bg-white/90 transition-colors">
              <input type="checkbox" className="w-4 h-4 accent-indigo-600 rounded" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
