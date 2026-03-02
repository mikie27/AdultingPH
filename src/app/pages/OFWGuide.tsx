import {
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle,
  DollarSign,
  FileText,
  Ban,
  Users,
} from "lucide-react";

const deploymentSteps = [
  { step: "1. Find a POEA/DMW-Accredited Agency", detail: "NEVER use illegal recruiters. Verify agency at DMW (formerly POEA) website or call their hotline. Licensed agencies have POEA License Numbers displayed.", warning: "If someone asks for placement fees BEFORE you have a job offer, it's likely a scam." },
  { step: "2. Secure a Job Offer & Employment Contract", detail: "Get a verified job offer through your agency. The contract must be approved and verified by DMW/POLO (Philippine Overseas Labor Office). Key details: salary, benefits, work hours, contract duration, accommodation, transportation.", warning: "Never sign a contract in a language you don't understand. Get it translated." },
  { step: "3. Attend PDOS (Pre-Departure Orientation Seminar)", detail: "Mandatory 1-day seminar by OWWA-accredited providers. Covers: culture of destination country, rights & responsibilities, emergency contacts, financial literacy. Fee: ~₱100-₱300.", warning: "No valid PDOS certificate = no deployment clearance." },
  { step: "4. Get Medical Examination", detail: "Must be done at DOH-accredited medical clinics only. Includes: physical exam, blood tests, X-ray, drug test, psych evaluation (for some destinations). Cost: ₱3,000-₱8,000 depending on destination country requirements.", warning: "Some countries require specific tests (e.g., IELTS for UK, trade test for Gulf countries)." },
  { step: "5. Process OEC (Overseas Employment Certificate)", detail: "Also called the 'exit pass.' Proves you're a legitimate OFW. Required to leave the Philippines. Get it from DMW or POLO. Returning OFWs can get OEC online via BM Online (balik-manggagawa.owwa.gov.ph).", warning: "Without OEC, you may be offloaded at the airport." },
  { step: "6. OWWA Membership", detail: "Mandatory membership for all OFWs. Fee: $25 (valid for 2 years or duration of contract). Benefits: insurance, death benefits, disability benefits, education assistance for dependents, repatriation assistance.", warning: "Always keep your OWWA membership active — renew before it expires." },
  { step: "7. PhilHealth & Pag-IBIG for OFWs", detail: "Maintain contributions even while abroad. PhilHealth: voluntary OFW rate. Pag-IBIG: optional but recommended for MP2 savings and housing loan eligibility. SSS: voluntary contribution (you can pay in advance for 1-2 years).", warning: "Don't skip SSS/PhilHealth/Pag-IBIG — you'll need them when you return." },
  { step: "8. Deployment & Airport Procedures", detail: "Bring: passport, visa, OEC, employment contract, PDOS certificate, return ticket (or ticket to destination). At NAIA/airport: go through DMW/OWWA counter for departure processing.", warning: "Arrive at the airport at least 4 hours early for international flights." },
];

const placementFees = [
  { destination: "Saudi Arabia", maxFee: "1 month salary equivalent", notes: "Some employers shoulder all costs (especially for household service workers)" },
  { destination: "UAE (Dubai, Abu Dhabi)", maxFee: "1 month salary equivalent", notes: "Placement fee cap mandated by DMW. High demand for nurses, engineers, hospitality" },
  { destination: "Qatar", maxFee: "1 month salary equivalent", notes: "Employer-paid recruitment is increasingly common post-2022 reforms" },
  { destination: "Kuwait", maxFee: "1 month salary equivalent", notes: "Stricter regulations after RA 11641. Household workers have special protections" },
  { destination: "Hong Kong", maxFee: "₱0 (employer pays)", notes: "By Hong Kong law, employers pay ALL recruitment costs. If your agency charges you, report them." },
  { destination: "Singapore", maxFee: "1 month salary (in some cases 2 months)", notes: "Varies by job type. Domestic workers often have lower fees" },
  { destination: "Japan (TITP/SSW)", maxFee: "Varies (₱50,000–₱150,000)", notes: "Technical Intern Training or Specified Skilled Worker programs. Fees vary by sending organization" },
  { destination: "Canada", maxFee: "1 month salary equivalent", notes: "Processing can take 6-18 months. High demand for caregivers, healthcare workers" },
  { destination: "UK (NHS, care workers)", maxFee: "Varies", notes: "UK employer usually pays visa costs. Beware of agencies charging excessive fees" },
];

const owwaBenefits = [
  { benefit: "Life & Disability Insurance", details: "₱100,000 (natural death), ₱200,000 (accidental death), disability benefits based on degree of disability.", who: "Active OWWA members" },
  { benefit: "Repatriation Assistance", details: "OWWA covers the cost of bringing you home in case of: war, natural disaster, employer abuse, contract violations, or medical emergencies.", who: "Active OWWA members" },
  { benefit: "Education Assistance (OFW Dependents)", details: "DOLE-OWWA scholarship programs for children of OFWs. Also includes EDSP (Education for Development Scholarship Program).", who: "OFW dependents (children)" },
  { benefit: "Skills Training & Livelihood", details: "Free training programs for OFWs and their families. Includes: entrepreneurship training, livelihood assistance, skills upgrading upon return.", who: "Active/former OFWs" },
  { benefit: "Emergency Loan", details: "Up to ₱50,000 for OFW families in distress situations (medical emergency, death of OFW, natural disaster).", who: "Active OWWA members' families" },
  { benefit: "Medicare (PhilHealth) for OFWs", details: "OFWs enrolled in OWWA can access PhilHealth benefits. Covers hospitalization and medical procedures in the Philippines.", who: "Active OWWA members" },
  { benefit: "Balik-Pinas, Balik-Hanapbuhay", details: "Livelihood program for returning OFWs. Up to ₱20,000 seed capital/tools for small business. Also includes training.", who: "Returning/displaced OFWs" },
];

const remittanceOptions = [
  { channel: "Bank Wire Transfer", fee: "₱200–₱1,000", speed: "1-3 business days", pros: "Safest, direct to bank account. BDO, BPI, Metrobank, PNB have OFW remittance services." },
  { channel: "GCash / Maya", fee: "₱0–₱200", speed: "Instant", pros: "Fast and convenient for small amounts. Recipient needs GCash/Maya account." },
  { channel: "Western Union", fee: "$5–$15", speed: "Minutes (cash pickup)", pros: "Available worldwide, recipient can pick up cash at any WU outlet. No bank account needed." },
  { channel: "Palawan Pawnshop / Cebuana Lhuillier", fee: "₱100–₱500", speed: "Same day (cash pickup)", pros: "Thousands of branches nationwide. Accessible even in provinces." },
  { channel: "Remitly / Wise / WorldRemit", fee: "Varies (often low)", speed: "1-3 days (bank) / Minutes (mobile)", pros: "Often best exchange rates. Good for regular remittances. App-based — convenient." },
  { channel: "iRemit / Lucky Money", fee: "Varies by country", speed: "1-3 days", pros: "Specialized OFW remittance companies. Available in many OFW destination countries." },
];

const commonScams = [
  { scam: "Fake job offers on social media", signs: "Unrealistic salary, no agency name, asks for payment via GCash/bank before interview", protect: "Verify ALL job offers through DMW/POEA website. Never send money to someone you haven't met." },
  { scam: "Illegal recruitment (no POEA license)", signs: "Agency not listed on DMW website, operates from a home/apartment, no proper office", protect: "Check DMW license database. Report to DMW Anti-Illegal Recruitment Branch: 8722-1144." },
  { scam: "Contract substitution", signs: "The contract you signed in Manila is different from what the employer gives you abroad", protect: "Keep a copy of your DMW-verified contract. Report contract substitution to POLO immediately." },
  { scam: "Excessive placement fees", signs: "Agency charges more than 1 month salary equivalent, asks for 'processing fees' before deployment", protect: "DMW caps placement fees. Document all payments and get official receipts." },
  { scam: "Salary withholding by employer", signs: "Employer doesn't pay on time, deducts unauthorized amounts, keeps your passport", protect: "Report to POLO/Philippine Embassy. Keeping your passport is ILLEGAL in most countries." },
  { scam: "Investment scams targeting OFWs", signs: "Promises of 10-30% monthly returns, MLM/networking schemes, pressure to invest immediately", protect: "If it sounds too good to be true, it is. Check SEC (Philippines) for registered investment companies." },
];

export function OFWGuide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-emerald-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-emerald-100 rounded-xl">
            <Globe className="w-6 h-6 text-emerald-600" />
          </div>
          <h1 className="text-emerald-900">OFW (Overseas Filipino Worker) Guide</h1>
        </div>
        <p className="text-sm text-emerald-700 leading-relaxed max-w-2xl">
          Complete guide for Filipinos working abroad — DMW/POEA process, OWWA benefits,
          placement fees, remittance options, common scams to avoid, and protecting your rights
          as an OFW.
        </p>
      </div>

      {/* Deployment Steps */}
      <div>
        <h2 className="text-gray-900 mb-1">Step-by-Step Deployment Process</h2>
        <p className="text-sm text-gray-500 mb-4">Follow this in order — skipping steps can delay or jeopardize your deployment</p>
        <div className="space-y-3">
          {deploymentSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-800 text-sm">{item.step}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
              <div className="mt-2 p-2 bg-amber-50 rounded-lg">
                <p className="text-xs text-amber-700 flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> {item.warning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Fees */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900">Maximum Placement Fees by Destination</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Country</th>
                <th className="text-left py-3 px-3 text-gray-500">Max Fee</th>
                <th className="text-left py-3 px-3 text-gray-500 hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {placementFees.map((row) => (
                <tr key={row.destination} className="border-b border-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.destination}</td>
                  <td className="py-2.5 px-3 text-emerald-700">{row.maxFee}</td>
                  <td className="py-2.5 px-3 text-gray-400 text-xs hidden sm:table-cell">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700"><AlertTriangle className="w-4 h-4 inline mr-1" /> <strong>Red flag:</strong> If an agency charges more than 1 month salary equivalent, report them to DMW. Excessive placement fees are ILLEGAL. Hotline: 8722-1144.</p>
        </div>
      </div>

      {/* OWWA Benefits */}
      <div>
        <h2 className="text-gray-900 mb-1">OWWA Benefits & Services</h2>
        <p className="text-sm text-gray-500 mb-4">Your $25 membership fee covers a LOT — make sure you claim everything</p>
        <div className="space-y-3">
          {owwaBenefits.map((item) => (
            <div key={item.benefit} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-800 text-sm">{item.benefit}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.details}</p>
                <span className="text-xs text-emerald-600">{item.who}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Remittance */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900">Remittance Options</h2>
        </div>
        <div className="space-y-3">
          {remittanceOptions.map((opt) => (
            <div key={opt.channel} className="p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1">
                <h4 className="text-gray-800 text-sm">{opt.channel}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{opt.pros}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Fee: {opt.fee}</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{opt.speed}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700"><strong>Tip:</strong> Compare exchange rates across channels before sending. Even a ₱0.50 difference per dollar adds up over monthly remittances. Use apps like Wise/Remitly for often better rates than traditional banks.</p>
        </div>
      </div>

      {/* Common Scams */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Ban className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">Common OFW Scams & How to Avoid Them</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Thousands of Filipinos fall victim every year — protect yourself</p>
        <div className="space-y-3">
          {commonScams.map((item) => (
            <div key={item.scam} className="bg-white rounded-xl border border-red-100 p-5">
              <h4 className="text-red-700 text-sm">{item.scam}</h4>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <div className="p-2 bg-red-50 rounded-lg">
                  <span className="text-xs text-red-600"><strong>Warning signs:</strong> {item.signs}</span>
                </div>
                <div className="p-2 bg-green-50 rounded-lg">
                  <span className="text-xs text-green-600"><strong>Protect yourself:</strong> {item.protect}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <h2 className="text-red-900 mb-3">Emergency Hotlines for OFWs</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "DMW (formerly POEA) Hotline", number: "8722-1144 / 8722-1155", desc: "Illegal recruitment, deployment issues" },
            { name: "OWWA Hotline", number: "1348 (local) / +632-8551-6641", desc: "Member services, emergency assistance" },
            { name: "DFA Office of the Undersecretary for Migrant Workers", number: "+632-8834-4000", desc: "Passport, embassy, consular assistance" },
            { name: "1343 Actionline against Human Trafficking", number: "1343", desc: "Report trafficking, forced labor, abuse" },
            { name: "Philippine Embassy/Consulate", number: "Check DFA website for specific country", desc: "Legal assistance, emergency repatriation, document issues" },
            { name: "Blas Ople Policy Center", number: "+632-8527-3444", desc: "OFW policy issues, distressed OFW assistance" },
          ].map((item) => (
            <div key={item.name} className="bg-white/70 rounded-lg p-3">
              <h4 className="text-red-800 text-sm">{item.name}</h4>
              <div className="text-red-700">{item.number}</div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Can my employer keep my passport?", a: "NO. In most countries, passport confiscation by employers is ILLEGAL. Your passport is your property. If your employer takes it, report to the Philippine Embassy/Consulate immediately." },
            { q: "What if I want to come home before my contract ends?", a: "You have the right to terminate your contract. Contact POLO/OWWA for assistance. If termination is due to employer abuse or contract violation, OWWA will assist with repatriation. If voluntary, you may need to pay for your own ticket." },
            { q: "How can I continue SSS/PhilHealth/Pag-IBIG while abroad?", a: "SSS: pay as voluntary member through SSS mobile app, accredited banks, or payment centers. PhilHealth: OFW voluntary rate. Pag-IBIG: can pay through accredited banks abroad or online. You can also authorize a family member to pay on your behalf." },
            { q: "Should I invest while abroad?", a: "YES. OFW earning years are limited. Save and invest aggressively: Pag-IBIG MP2 (tax-free, 5-7% returns), FMETF/mutual funds (long-term), digital bank high-yield savings, real estate in PH. Avoid: MLM/networking, 'guaranteed returns' schemes, lending money to relatives without agreements." },
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
