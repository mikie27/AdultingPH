import {
  Heart,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

const seniorBenefits = [
  { benefit: "20% discount on medicines", details: "All essential medicines, whether branded or generic. Must present Senior Citizen ID. VAT-exempt on top of the 20% discount.", law: "RA 9994" },
  { benefit: "20% discount on medical/dental services", details: "Professional fees for doctors, dentists, and other medical professionals in all hospitals, clinics, and laboratories.", law: "RA 9994" },
  { benefit: "20% discount on hospital charges", details: "Room rates, laboratory tests, diagnostic imaging, and other hospital services.", law: "RA 9994" },
  { benefit: "20% discount on food & restaurants", details: "Applies to food establishments, including fast food, restaurants, and cafeterias. For dine-in only (per some LGU interpretations). For the senior citizen's personal consumption only.", law: "RA 9994" },
  { benefit: "20% discount on transportation", details: "All public transport: buses, jeepneys, MRT/LRT, taxis, TNVS (Grab), domestic airlines (at their option), and inter-island vessels.", law: "RA 9994" },
  { benefit: "20% discount on utilities", details: "Electricity: 5% discount on monthly consumption of ≤100 kWh. Water: 5% discount on monthly consumption of ≤30 cubic meters.", law: "RA 9994" },
  { benefit: "Free influenza & pneumococcal vaccines", details: "DOH provides free flu and pneumonia vaccines through health centers.", law: "RA 9994" },
  { benefit: "20% discount on hotel & recreation", details: "Hotels, resorts, movie theaters, concert halls, circuses, leisure and amusement places, swimming pools, funeral services.", law: "RA 9994" },
  { benefit: "Income tax exemption", details: "Minimum wage earners who are senior citizens are exempt from income tax. Senior citizens receiving pension from GSIS/SSS are also tax-exempt.", law: "RA 9994" },
  { benefit: "Priority lanes in all establishments", details: "Banks, hospitals, government offices, and commercial establishments must provide priority lanes for senior citizens.", law: "RA 9994" },
  { benefit: "PhilHealth coverage", details: "Automatic PhilHealth membership for all senior citizens. Government shoulders the premium for indigent seniors.", law: "RA 9994" },
];

const seniorIDRequirements = [
  "Must be 60 years old or above",
  "PSA Birth Certificate (or baptismal certificate if PSA is unavailable)",
  "Any valid government-issued ID",
  "1x1 or 2x2 ID photo (recent)",
  "Proof of residence in the LGU (barangay certificate or any utility bill)",
  "Apply at: OSCA (Office of Senior Citizens Affairs) in your city/municipality",
  "Processing time: 1-2 weeks (varies by LGU)",
  "Cost: FREE",
];

const pwdBenefits = [
  { benefit: "20% discount on medicines", details: "Same as senior citizens. Essential medicines prescribed by a physician. Cannot be combined with senior citizen discount if the person is both senior and PWD — only one 20% discount applies.", law: "RA 7277 (Magna Carta for PWDs)" },
  { benefit: "20% discount on medical/dental services", details: "Professional fees, diagnostics, laboratory tests. Applies to both inpatient and outpatient services.", law: "RA 7277" },
  { benefit: "20% discount on transportation", details: "All public transport (same coverage as senior citizens). Domestic air transport and sea vessels.", law: "RA 7277" },
  { benefit: "20% discount on restaurants/food", details: "Food and beverage establishments. For the PWD's personal consumption only.", law: "RA 7277" },
  { benefit: "20% discount on entertainment & recreation", details: "Movie theaters, sports venues, amusement parks, fitness gyms, resorts.", law: "RA 7277" },
  { benefit: "20% discount on funeral services", details: "Funeral and burial services for the deceased PWD.", law: "RA 7277" },
  { benefit: "Educational assistance", details: "Scholarship programs, special education classes. CHED and DepEd have programs for PWD students.", law: "RA 7277" },
  { benefit: "Tax exemptions", details: "Income tax exemption for minimum wage earners. Importation of assistive devices (wheelchairs, hearing aids, etc.) is duty-free.", law: "RA 7277" },
  { benefit: "5% VAT exemption on goods/services", details: "On top of the 20% discount, purchases are exempt from 12% VAT.", law: "RA 7277" },
  { benefit: "Employment incentives for employers", details: "Employers hiring PWDs get additional 25% deduction on PWD employee's salary as tax benefit.", law: "RA 7277" },
  { benefit: "Accessibility rights", details: "Buildings, streets, and public spaces must be accessible to PWDs (ramps, railings, braille signs, accessible restrooms).", law: "BP 344 (Accessibility Law)" },
  { benefit: "Priority lanes and parking", details: "Reserved parking spots, priority lanes in all establishments and government offices.", law: "RA 7277" },
];

const pwdIDRequirements = [
  "Medical certificate from a licensed physician specifying the type and degree of disability",
  "Barangay certificate or proof of residence",
  "PSA Birth Certificate",
  "Valid government-issued ID",
  "1x1 or 2x2 ID photo (recent)",
  "Apply at: City/Municipal Social Welfare and Development Office (CSWDO) or PDAO (Persons with Disability Affairs Office)",
  "Processing time: 1-4 weeks",
  "Cost: FREE",
  "Validity: 3 years (must be renewed)",
];

const pwdTypes = [
  { type: "Psychosocial disability", examples: "Depression, anxiety disorder, bipolar disorder, PTSD, schizophrenia, ADHD (with proper diagnosis)" },
  { type: "Physical disability", examples: "Mobility impairment, amputation, paralysis, chronic pain conditions" },
  { type: "Visual disability", examples: "Blindness, low vision (even with corrective lenses)" },
  { type: "Hearing disability", examples: "Deafness, hearing loss (partial or total)" },
  { type: "Speech/language disability", examples: "Speech impediments, aphasia, stuttering (severe)" },
  { type: "Intellectual disability", examples: "Down syndrome, autism spectrum disorder, developmental delays" },
  { type: "Learning disability", examples: "Dyslexia, dyscalculia, dysgraphia (with proper assessment)" },
  { type: "Chronic illness", examples: "Cancer, kidney disease (dialysis), epilepsy, lupus, heart disease — if it substantially limits daily activities" },
];

const caregiverTips = [
  {
    title: "Financial Support",
    tips: [
      "Apply for SSS/GSIS pension on behalf of your parent/relative — don't leave money unclaimed",
      "Check if they qualify for PhilHealth as an indigent member (free coverage)",
      "Apply for DSWD Social Pension: ₱1,000/month for indigent senior citizens (77 years old and above)",
      "Some LGUs provide additional monthly cash assistance for seniors — check your barangay/city",
      "Maximize the 20% discount on all eligible purchases — it adds up significantly over time",
    ],
  },
  {
    title: "Health & Well-being",
    tips: [
      "Get free annual check-ups at the nearest health center",
      "Take advantage of free flu and pneumonia vaccines from DOH",
      "PhilHealth covers cataract surgery, hip/knee replacements, and many geriatric procedures",
      "Mental health support: some health centers offer free counseling for senior citizens",
      "Maintain-medication list and make sure prescriptions are always updated",
    ],
  },
  {
    title: "Legal Preparedness",
    tips: [
      "Help them create a will (even a simple holographic will is valid)",
      "Consider a Special Power of Attorney (SPA) if they become unable to manage their own affairs",
      "Keep all important documents organized: IDs, property titles, bank books, insurance policies",
      "Know their SSS, GSIS, Pag-IBIG, and PhilHealth numbers and login credentials",
      "Discuss their wishes regarding end-of-life care early — it's uncomfortable but important",
    ],
  },
];

export function SeniorPWD() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-amber-100 rounded-xl">
            <Users className="w-6 h-6 text-amber-600" />
          </div>
          <h1 className="text-amber-900">Senior Citizen & PWD Benefits</h1>
        </div>
        <p className="text-sm text-amber-700 leading-relaxed max-w-2xl">
          Complete guide to discounts, privileges, and benefits for senior citizens (60+) and persons
          with disabilities under Philippine law. Includes how to apply for IDs, caregiver tips, and
          maximizing government benefits.
        </p>
      </div>

      {/* Senior Benefits */}
      <div>
        <h2 className="text-gray-900 mb-1">Senior Citizen Benefits & Discounts</h2>
        <p className="text-sm text-gray-500 mb-4">Under RA 9994 (Expanded Senior Citizens Act of 2010)</p>
        <div className="space-y-2">
          {seniorBenefits.map((item) => (
            <div key={item.benefit} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-gray-800 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> {item.benefit}</h4>
                <p className="text-xs text-gray-500 mt-0.5 ml-6">{item.details}</p>
              </div>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded text-xs shrink-0">{item.law}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How to Get Senior ID */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-amber-600" />
          <h2 className="text-gray-900">How to Get a Senior Citizen ID</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {seniorIDRequirements.map((req, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> {req}
            </div>
          ))}
        </div>
      </div>

      {/* PWD Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <h2 className="text-blue-900 mb-1">PWD (Persons with Disability) Benefits</h2>
        <p className="text-sm text-blue-700 mb-4">Under RA 7277 (Magna Carta for Persons with Disability)</p>
      </div>

      {/* PWD Types */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Who Qualifies as a PWD?</h2>
        <p className="text-sm text-gray-500 mb-4">Many people don't realize they may qualify for a PWD ID. Here are the categories:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {pwdTypes.map((item) => (
            <div key={item.type} className="p-3 bg-blue-50 rounded-lg">
              <h4 className="text-blue-800 text-sm">{item.type}</h4>
              <p className="text-xs text-blue-600 mt-0.5">{item.examples}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Important:</strong> Mental health conditions like depression, anxiety, and ADHD can qualify for PWD status
            if they substantially limit daily activities. You need a diagnosis from a licensed psychiatrist or psychologist.
            Don't be ashamed — it's your legal right and can significantly help with medication costs.
          </p>
        </div>
      </div>

      {/* PWD Benefits List */}
      <div>
        <h2 className="text-gray-900 mb-4">PWD Benefits & Privileges</h2>
        <div className="space-y-2">
          {pwdBenefits.map((item) => (
            <div key={item.benefit} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-gray-800 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> {item.benefit}</h4>
                <p className="text-xs text-gray-500 mt-0.5 ml-6">{item.details}</p>
              </div>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs shrink-0">{item.law}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PWD ID Requirements */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">How to Get a PWD ID</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {pwdIDRequirements.map((req, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> {req}
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <AlertTriangle className="w-4 h-4 inline mr-1" />
            <strong>Renewal:</strong> PWD IDs must be renewed every 3 years. Bring your old PWD ID + updated medical certificate for renewal. Failure to renew means loss of benefits until renewed.
          </p>
        </div>
      </div>

      {/* Caregiver Guide */}
      <div>
        <h2 className="text-gray-900 mb-1">Guide for Caregivers & Family Members</h2>
        <p className="text-sm text-gray-500 mb-4">If you're taking care of a senior citizen or PWD</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {caregiverTips.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0 mt-1" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Can someone be both a Senior Citizen and PWD?", a: "Yes! But only ONE 20% discount applies per transaction (you can't stack 20% + 20%). However, being registered as both gives you access to both sets of benefits and programs." },
            { q: "What if a store refuses to honor the discount?", a: "It's illegal to refuse senior/PWD discounts. Report to: OSCA (for seniors), PDAO or NCDA (for PWDs), or DTI. Fine for violations: ₱50,000 or 6 months imprisonment, or both." },
            { q: "Can the 20% discount be used on online purchases?", a: "Not all online platforms support it. Some pharmacies (Mercury Drug, Watsons) offer it for in-store pickup with ID verification. Lazada/Shopee don't typically apply the discount — buy in-person for medicines." },
            { q: "Is the DSWD Social Pension automatic?", a: "No, you must apply through your barangay. It's for indigent senior citizens 77 years old and above (previously 60+). Amount: ₱1,000/month (paid quarterly: ₱3,000 every 3 months). Not all eligible seniors are enrolled — slots are limited." },
            { q: "Can a caregiver use the senior/PWD ID on their behalf?", a: "The senior/PWD must be present for discounts on personal purchases. For medicines, a representative can buy on their behalf with an authorization letter + photocopy of the senior/PWD ID + representative's ID." },
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
