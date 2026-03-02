import { ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Heart, Car, Home, Umbrella, Baby, Plane, DollarSign } from "lucide-react";

const hmoProviders = [
  {
    name: "Maxicare",
    type: "Largest HMO",
    highlights: [
      "Widest hospital network (1,000+ hospitals/clinics)",
      "Maxicare Prima (premium tier) and EReady (affordable)",
      "App-based teleconsultation available",
      "Dental coverage options",
      "Annual Physical Exam (APE) included",
    ],
    plans: "Individual plans start at ~PHP 5,000-15,000/year",
    bestFor: "Those who want the widest network coverage",
  },
  {
    name: "Intellicare",
    type: "Popular Corporate HMO",
    highlights: [
      "700+ accredited hospitals and clinics",
      "Known for good customer service",
      "Corporate and individual plans",
      "Emergency care coverage nationwide",
      "Preventive care benefits included",
    ],
    plans: "Individual plans start at ~PHP 6,000-12,000/year",
    bestFor: "Corporate employees and families",
  },
  {
    name: "Medicard",
    type: "Comprehensive HMO",
    highlights: [
      "800+ partner hospitals and clinics",
      "Free-standing clinics for outpatient consultations",
      "Comprehensive diagnostic coverage",
      "Emergency care in all major cities",
      "Wellness programs included",
    ],
    plans: "Individual plans start at ~PHP 5,500-14,000/year",
    bestFor: "Those who prefer clinic-based consultations",
  },
  {
    name: "Pacific Cross",
    type: "HMO + Insurance Hybrid",
    highlights: [
      "Combines HMO benefits with insurance features",
      "International coverage options available",
      "Higher room and board limits",
      "Outpatient and inpatient coverage",
      "OFW-friendly plans",
    ],
    plans: "Plans start at ~PHP 8,000-20,000/year",
    bestFor: "Travelers and those wanting international coverage",
  },
  {
    name: "Cocolife Healthcare",
    type: "Affordable HMO",
    highlights: [
      "Budget-friendly individual plans",
      "500+ hospitals and clinics",
      "Basic outpatient and inpatient coverage",
      "Maternity benefits available",
      "Group plans for SMEs",
    ],
    plans: "Individual plans start at ~PHP 4,000-10,000/year",
    bestFor: "Budget-conscious individuals and small businesses",
  },
];

const insuranceTypes = [
  {
    title: "Term Life Insurance",
    icon: Heart,
    color: "bg-red-50 border-red-200 text-red-600",
    desc: "Pure protection for a specific period. Most affordable life insurance type.",
    details: [
      "Coverage: Typically 10, 15, 20, or 30 years",
      "Cost: PHP 3,000-15,000/year for PHP 1M coverage",
      "No savings/investment component (pure insurance)",
      "Pays out lump sum if you die within the term",
      "Ideal for: Breadwinners, parents with young children",
    ],
    providers: ["Sun Life", "AXA Philippines", "Pru Life UK", "Manulife", "FWD"],
    recommended: "10x your annual income as minimum coverage",
  },
  {
    title: "Whole Life Insurance",
    icon: Umbrella,
    color: "bg-blue-50 border-blue-200 text-blue-600",
    desc: "Lifetime coverage with a savings component that builds cash value over time.",
    details: [
      "Coverage: Lifetime (until age 100+)",
      "Cost: 5-15x more expensive than term life",
      "Builds cash value you can borrow against",
      "Guaranteed death benefit regardless of when you die",
      "Ideal for: Estate planning, long-term wealth transfer",
    ],
    providers: ["Sun Life", "Insular Life", "Pru Life UK", "AIA Philippines"],
    recommended: "Consider only after maxing out term life and emergency fund",
  },
  {
    title: "VUL (Variable Unit-Linked)",
    icon: DollarSign,
    color: "bg-purple-50 border-purple-200 text-purple-600",
    desc: "Insurance + investment in one product. Your premiums go to both protection and investment funds.",
    details: [
      "Combines life insurance with mutual fund-like investment",
      "Higher premiums (PHP 20,000-100,000+/year)",
      "Investment portion is subject to market risk",
      "Multiple fund options (equity, bond, balanced)",
      "Charges: Insurance charges, admin fees, fund management fees",
      "Ideal for: Those who want insurance + investment in one",
    ],
    providers: ["Sun Life", "AXA Philippines", "Pru Life UK", "Manulife", "FWD"],
    recommended: "Understand all charges first. Separate insurance + investment may be more cost-effective",
  },
  {
    title: "Car Insurance",
    icon: Car,
    color: "bg-teal-50 border-teal-200 text-teal-600",
    desc: "Protect your vehicle from accidents, theft, and natural disasters.",
    details: [
      "CTPL: Compulsory Third Party Liability (PHP 600-900/year) - required for LTO",
      "Comprehensive: Covers own damage + third party (PHP 15,000-50,000/year)",
      "Acts of Nature: Additional coverage for floods, typhoons, earthquakes",
      "Theft protection included in comprehensive plans",
      "Ideal for: All car/motorcycle owners",
    ],
    providers: ["Standard Insurance", "Malayan Insurance", "OONA (formerly Mapfre)", "Pioneer Insurance", "FPG Insurance"],
    recommended: "Get comprehensive if you can afford it. CTPL alone is bare minimum",
  },
  {
    title: "Home/Property Insurance",
    icon: Home,
    color: "bg-amber-50 border-amber-200 text-amber-600",
    desc: "Protect your home and belongings from fire, natural disasters, and theft.",
    details: [
      "Fire insurance: Required for mortgaged properties",
      "Comprehensive: Fire + natural disasters + theft",
      "Coverage based on property value/replacement cost",
      "Cost: ~0.1-0.5% of property value annually",
      "Ideal for: Homeowners, condo owners, renters",
    ],
    providers: ["BPI/MS Insurance", "Pioneer Insurance", "Malayan Insurance", "Sun Life Grepa"],
    recommended: "If you own property, this is non-negotiable especially in typhoon-prone PH",
  },
  {
    title: "Travel Insurance",
    icon: Plane,
    color: "bg-sky-50 border-sky-200 text-sky-600",
    desc: "Coverage for medical emergencies, trip cancellation, and lost luggage while traveling.",
    details: [
      "Medical coverage abroad (PHP 1M-5M)",
      "Trip cancellation/interruption reimbursement",
      "Lost/delayed luggage coverage",
      "Emergency evacuation and repatriation",
      "Cost: PHP 500-3,000 per trip (depends on destination/duration)",
    ],
    providers: ["Pacific Cross", "AXA", "Malayan Insurance", "Standard Insurance", "Travel Guard"],
    recommended: "ALWAYS get travel insurance for international trips. Required for Schengen visa",
  },
  {
    title: "Critical Illness Insurance",
    icon: Heart,
    color: "bg-rose-50 border-rose-200 text-rose-600",
    desc: "Lump sum payout upon diagnosis of covered critical illnesses like cancer, stroke, or heart attack.",
    details: [
      "Covers 30-60+ critical illnesses depending on plan",
      "Lump sum payout (not reimbursement-based)",
      "Use the money for anything: treatment, bills, lost income",
      "Can be standalone or rider on life insurance",
      "Cost depends on age, coverage, and health status",
    ],
    providers: ["Sun Life", "AXA", "Pru Life UK", "FWD", "AIA Philippines"],
    recommended: "Consider if family history includes cancer or heart disease. Supplements HMO",
  },
];

const hmoVsPhilhealth = [
  { feature: "Type", philhealth: "Government health insurance", hmo: "Private health insurance" },
  { feature: "Cost", philhealth: "5% of salary (shared with employer)", hmo: "PHP 4,000-50,000+/year" },
  { feature: "Coverage", philhealth: "Basic (case rate system)", hmo: "Comprehensive (room & board, diagnostics)" },
  { feature: "Outpatient", philhealth: "Limited (PHP 2,500/year)", hmo: "Extensive (consultations, labs, etc.)" },
  { feature: "Hospital Choice", philhealth: "Any PhilHealth-accredited", hmo: "Network hospitals only" },
  { feature: "Annual Check-up", philhealth: "Not covered", hmo: "Usually included (APE)" },
  { feature: "Dental", philhealth: "Not covered", hmo: "Some plans include it" },
  { feature: "Dependents", philhealth: "Up to 4 (free)", hmo: "Additional cost per dependent" },
  { feature: "Pre-existing Conditions", philhealth: "Covered", hmo: "Waiting period (6-12 months)" },
  { feature: "Emergency", philhealth: "Covered (case rate)", hmo: "Covered (up to plan limit)" },
];

const stepsToGetInsurance = [
  {
    step: "1. Assess Your Needs",
    detail: "Determine what you need: health coverage (HMO), income protection (life), asset protection (car/home). A single professional needs different coverage than a parent with dependents.",
  },
  {
    step: "2. Set Your Budget",
    detail: "Allocate 5-10% of your monthly income for insurance premiums. Prioritize: HMO > Term Life > Critical Illness > Others.",
  },
  {
    step: "3. Research and Compare",
    detail: "Get quotes from at least 3 providers. Compare coverage limits, exclusions, waiting periods, and premium costs. Ask about what's NOT covered.",
  },
  {
    step: "4. Choose the Right Type",
    detail: "For life insurance: Term life first (affordable, pure protection). VUL is okay if you understand the charges. Avoid whole life unless you have a specific estate planning need.",
  },
  {
    step: "5. Read the Fine Print",
    detail: "Understand exclusions (pre-existing conditions, suicide clause, hazardous activities), waiting periods, claim procedures, and renewal terms.",
  },
  {
    step: "6. Apply and Undergo Assessment",
    detail: "Fill out application forms honestly. You may need a medical exam or health declaration. Non-disclosure can void your policy later.",
  },
  {
    step: "7. Keep Records and Review Annually",
    detail: "Keep your policy documents safe. Review coverage annually - life changes (marriage, kids, new home) may require adjustments.",
  },
];

export function Insurance() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-rose-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-rose-100 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-rose-600" />
          </div>
          <h1 className="text-rose-900">Insurance & HMO Guide</h1>
        </div>
        <p className="text-sm text-rose-700 leading-relaxed max-w-2xl">
          Beyond PhilHealth, you need additional coverage to truly protect yourself and your family.
          This guide covers HMOs, life insurance, car insurance, and every type of protection
          a working Filipino should consider.
        </p>
      </div>

      {/* Priority Order */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Insurance Priority Order (What to Get First)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { priority: "1st", name: "Emergency Fund", desc: "3-6 months expenses first!", color: "bg-green-50 border-green-200 text-green-700" },
            { priority: "2nd", name: "HMO / Health", desc: "Supplement PhilHealth coverage", color: "bg-blue-50 border-blue-200 text-blue-700" },
            { priority: "3rd", name: "Term Life", desc: "If you have dependents", color: "bg-purple-50 border-purple-200 text-purple-700" },
            { priority: "4th", name: "Critical Illness", desc: "Lump sum for major illnesses", color: "bg-rose-50 border-rose-200 text-rose-700" },
          ].map((item) => (
            <div key={item.priority} className={`rounded-xl border p-4 text-center ${item.color}`}>
              <div className="text-2xl mb-1">{item.priority}</div>
              <div className="text-sm mb-1">{item.name}</div>
              <div className="text-xs opacity-75">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps to Get Insurance */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">How to Get Insurance (Step by Step)</h2>
        <div className="space-y-3">
          {stepsToGetInsurance.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center text-sm shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="text-gray-800 mb-1">{item.step}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PhilHealth vs HMO */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">PhilHealth vs HMO Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Feature</th>
                <th className="text-left py-3 px-3 text-gray-500">PhilHealth</th>
                <th className="text-left py-3 px-3 text-gray-500">HMO</th>
              </tr>
            </thead>
            <tbody>
              {hmoVsPhilhealth.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{row.feature}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.philhealth}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.hmo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Bottom line: PhilHealth is mandatory basic coverage. HMO is supplementary and covers what PhilHealth doesn't (outpatient, dental, annual check-ups).
        </p>
      </div>

      {/* HMO Providers */}
      <div>
        <h2 className="text-gray-900 mb-1">Top HMO Providers in the Philippines</h2>
        <p className="text-sm text-gray-500 mb-4">Compare and choose the right one for you</p>
        <div className="space-y-4">
          {hmoProviders.map((provider) => (
            <div key={provider.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-gray-900">{provider.name}</h3>
                <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-xs">{provider.type}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-1.5">
                    {provider.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Starting Price</div>
                    <div className="text-sm text-gray-800">{provider.plans}</div>
                  </div>
                  <div className="p-3 bg-rose-50 rounded-lg">
                    <div className="text-xs text-rose-500 mb-1">Best For</div>
                    <div className="text-sm text-rose-700">{provider.bestFor}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Types */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Insurance Explained</h2>
        <p className="text-sm text-gray-500 mb-4">Understand each type to make informed decisions</p>
        <div className="space-y-4">
          {insuranceTypes.map((ins) => (
            <div key={ins.title} className={`rounded-xl border p-5 ${ins.color.split(' ').slice(0, 2).join(' ')}`}>
              <div className="flex items-center gap-3 mb-3">
                <ins.icon className={`w-5 h-5 ${ins.color.split(' ')[2]}`} />
                <h3 className="text-gray-900">{ins.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{ins.desc}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Key Details</h4>
                  <ul className="space-y-1.5">
                    {ins.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3 h-3 shrink-0 mt-1.5" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="text-gray-800 mb-2">Providers</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {ins.providers.map((p) => (
                        <span key={p} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Recommendation</div>
                    <p className="text-sm text-gray-700">{ins.recommended}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-red-900">Common Insurance Mistakes to Avoid</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Buying VUL as your first and only insurance product without understanding fees",
            "Not reading exclusions - know what's NOT covered",
            "Underinsuring - getting a coverage amount too low for your needs",
            "Lying on your health declaration - this can void your entire policy",
            "Not disclosing pre-existing conditions to your HMO",
            "Paying for insurance before building an emergency fund",
            "Getting pressured by agents into expensive plans you can't maintain",
            "Not comparing at least 3 different providers before deciding",
          ].map((mistake, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-red-700 bg-white/70 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              {mistake}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-rose-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Do I need HMO if my employer already provides one?",
              a: "Your employer-provided HMO is great, but it ends when you leave the company. Consider getting your own individual HMO or health insurance that stays with you regardless of employment. At minimum, make sure you know your current HMO coverage limits.",
            },
            {
              q: "VUL or term life + mutual fund - which is better?",
              a: "For most people, buying term life insurance separately + investing in mutual funds or index funds separately (BTID - Buy Term Invest the Difference) is more cost-effective. VUL has higher charges and less flexibility. However, VUL is simpler for those who don't want to manage investments separately.",
            },
            {
              q: "How much life insurance do I need?",
              a: "A good rule of thumb: 10x your annual income. If you earn PHP 30,000/month (PHP 360,000/year), aim for at least PHP 3.6 million in coverage. Adjust based on debts, dependents, and lifestyle needs.",
            },
            {
              q: "Can I get insurance if I have a pre-existing condition?",
              a: "Yes, but expect waiting periods (6-12 months), exclusions for the specific condition, or higher premiums. Always disclose pre-existing conditions honestly - non-disclosure can void your entire policy when you need it most.",
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
