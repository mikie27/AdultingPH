import { useState } from "react";
import {
  Heart,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calculator,
  FileText,
  Shield,
  HelpCircle,
  Clock,
  DollarSign,
} from "lucide-react";

const immediateSteps = [
  {
    step: "1. Secure a Medical Certificate / Death Certificate",
    detail: "If death occurred in a hospital, the attending physician issues this. If at home, call the barangay health center — they'll send someone to certify. For sudden/suspicious deaths, report to the police (they'll request an autopsy from the medico-legal).",
    timeline: "Immediately",
  },
  {
    step: "2. Register the Death at the Local Civil Registrar (LCR)",
    detail: "Must be done within 30 days. The funeral home usually handles this for you. You'll need: Death Certificate (4 copies minimum), informant's valid ID, and burial/cremation permit. The LCR-registered death certificate is needed for ALL claims.",
    timeline: "Within 30 days",
  },
  {
    step: "3. Get PSA-Authenticated Death Certificate",
    detail: "After LCR registration, request PSA (Philippine Statistics Authority) copy. Takes 2-4 weeks. You'll need multiple copies — banks, SSS, insurance, property transfer all require PSA originals. Get at least 10 copies.",
    timeline: "2-4 weeks after LCR registration",
  },
  {
    step: "4. Notify Employer, Banks, SSS/GSIS, Insurance",
    detail: "Inform the deceased's employer (for final pay, benefits). Notify banks to freeze accounts (prevents unauthorized withdrawals). File claims with SSS/GSIS, life insurance, and HMO. Cancel credit cards to stop charges.",
    timeline: "As soon as possible",
  },
  {
    step: "5. Settle the Wake & Burial/Cremation",
    detail: "Choose: burial or cremation. Arrange with funeral home. Get barangay clearance for burial if in a private cemetery. Cremation requires additional permits. Some LGUs have free burial assistance programs.",
    timeline: "Within 3-7 days typically",
  },
  {
    step: "6. File Estate Tax Return with BIR",
    detail: "Must be filed within 1 year from death (extendable by 30 days with written request). Even if the estate is small, you MUST file. Failure to file = penalties + you can't transfer any property.",
    timeline: "Within 1 year",
  },
];

const funeralCosts = [
  { item: "Embalming", budget: "₱5,000–₱10,000", mid: "₱10,000–₱20,000", premium: "₱20,000–₱40,000" },
  { item: "Casket/Coffin", budget: "₱8,000–₱15,000", mid: "₱15,000–₱40,000", premium: "₱40,000–₱200,000+" },
  { item: "Funeral Home Package (3-7 days)", budget: "₱15,000–₱30,000", mid: "₱30,000–₱80,000", premium: "₱80,000–₱300,000+" },
  { item: "Cremation (alternative to burial)", budget: "₱25,000–₱40,000", mid: "₱40,000–₱80,000", premium: "₱80,000–₱150,000" },
  { item: "Cemetery Lot (perpetual)", budget: "₱15,000–₱50,000", mid: "₱50,000–₱200,000", premium: "₱200,000–₱1M+" },
  { item: "Cemetery Lot (5-year lease)", budget: "₱5,000–₱15,000", mid: "₱15,000–₱40,000", premium: "₱40,000–₱100,000" },
  { item: "Columbarium Niche (urn)", budget: "₱10,000–₱30,000", mid: "₱30,000–₱80,000", premium: "₱80,000–₱300,000" },
  { item: "Flowers, candles, food for wake", budget: "₱5,000–₱15,000", mid: "₱15,000–₱40,000", premium: "₱40,000–₱100,000+" },
  { item: "Mass/Religious ceremony", budget: "₱500–₱2,000", mid: "₱2,000–₱5,000", premium: "₱5,000–₱20,000" },
  { item: "Transportation (hearse, vehicles)", budget: "₱3,000–₱8,000", mid: "₱8,000–₱15,000", premium: "₱15,000–₱30,000" },
];

const deathBenefits = [
  {
    source: "SSS Death Benefit",
    who: "SSS members (at least 36 monthly contributions)",
    benefit: "Lump sum or monthly pension depending on contributions. Funeral grant: ₱40,000. Monthly pension to primary beneficiaries (spouse, children under 21).",
    howToClaim: "File at any SSS branch. Requirements: PSA Death Certificate, claimant's valid IDs, marriage certificate (spouse), birth certificates (children), SSS member's UMID or SS number.",
    deadline: "File as soon as possible — no prescription period for death benefit, but funeral grant must be claimed within 5 years.",
  },
  {
    source: "GSIS Death Benefit",
    who: "Government employees (GSIS members)",
    benefit: "Survivorship pension (50% of basic monthly pension) to spouse. Cash gift equivalent to 3 months salary. Funeral benefit: ₱30,000–₱50,000.",
    howToClaim: "File at GSIS branch. Requirements: PSA Death Certificate, service record, last salary record, claimant's IDs.",
    deadline: "File within 4 years from death.",
  },
  {
    source: "PhilHealth (Deduction from Hospital Bills)",
    who: "PhilHealth members or dependents who died in the hospital",
    benefit: "PhilHealth deducts eligible hospital charges from the bill. No cash benefit for death itself, but reduces final hospital costs significantly.",
    howToClaim: "Hospital processes this automatically if PhilHealth membership is active. Ensure MDR (Member Data Record) is updated.",
    deadline: "Claims must be filed by the hospital within 60 days of discharge/death.",
  },
  {
    source: "Pag-IBIG Provident Benefits",
    who: "Pag-IBIG members",
    benefit: "Total accumulated value (TAV) of member's savings + employer contributions + dividends. Released to legal heirs.",
    howToClaim: "File at Pag-IBIG branch. Requirements: PSA Death Certificate, claimant's IDs, proof of relationship, member's Pag-IBIG MID number.",
    deadline: "No prescription period, but file promptly.",
  },
  {
    source: "Life Insurance",
    who: "Policy holders with active life insurance",
    benefit: "Face value of the policy paid to beneficiaries. Some policies include accidental death benefit (double indemnity). Check if there's a critical illness rider too.",
    howToClaim: "Contact the insurance company. Requirements: PSA Death Certificate, policy documents, beneficiary's IDs, claimant's statement. Investigation period: 30-60 days.",
    deadline: "Most policies: file within 1-2 years. Check specific policy terms.",
  },
  {
    source: "Employer Benefits",
    who: "Employees of the deceased",
    benefit: "Final pay (prorated 13th month, unused leave conversions, last salary). Some employers offer death assistance/benefit. Check company handbook or CBA.",
    howToClaim: "Contact HR department. Requirements: PSA Death Certificate, authorization letter if representative, relationship proof.",
    deadline: "Final pay: within 30 days of clearance completion.",
  },
];

const estateTaxData = {
  rate: "6% of net estate",
  exemption: "₱5,000,000 standard deduction",
  additionalDeductions: [
    "Funeral expenses: actual amount or 5% of gross estate (whichever is lower), max ₱200,000",
    "Medical expenses of last illness: max ₱500,000 (with receipts)",
    "Claims against the estate (unpaid debts of the deceased)",
    "Unpaid mortgages/loans on properties included in the estate",
    "Property previously taxed (vanishing deduction) — if inherited property within 5 years",
    "Transfer for public use (donated to government)",
    "Family home: up to ₱10,000,000 deduction",
    "Share of surviving spouse in conjugal/community property (50%)",
  ],
  penalties: [
    "Late filing: 25% surcharge on tax due",
    "Interest: 12% per annum (double rate for fraud)",
    "Compromise penalty: ₱200-₱50,000 depending on amount",
    "No estate tax clearance = can't transfer property titles, can't withdraw bank deposits, can't settle estate",
  ],
};

function EstateTaxCalculator() {
  const [grossEstate, setGrossEstate] = useState(3000000);
  const [funeralExp, setFuneralExp] = useState(100000);
  const [medicalExp, setMedicalExp] = useState(0);
  const [debts, setDebts] = useState(0);
  const [familyHome, setFamilyHome] = useState(0);
  const [isMarried, setIsMarried] = useState(true);

  const maxFuneral = Math.min(funeralExp, grossEstate * 0.05, 200000);
  const maxMedical = Math.min(medicalExp, 500000);
  const maxFamilyHome = Math.min(familyHome, 10000000);
  const conjugalShare = isMarried ? grossEstate / 2 : 0;
  const standardDeduction = 5000000;
  const totalDeductions = maxFuneral + maxMedical + debts + maxFamilyHome + conjugalShare + standardDeduction;
  const netEstate = Math.max(0, grossEstate - totalDeductions);
  const estateTax = netEstate * 0.06;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-gray-600" />
        <h2 className="text-gray-900">Estate Tax Calculator</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Gross Estate Value (₱)</label>
          <input type="number" value={grossEstate} onChange={(e) => setGrossEstate(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Funeral Expenses (₱)</label>
          <input type="number" value={funeralExp} onChange={(e) => setFuneralExp(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Medical Expenses, Last Illness (₱)</label>
          <input type="number" value={medicalExp} onChange={(e) => setMedicalExp(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Unpaid Debts / Loans (₱)</label>
          <input type="number" value={debts} onChange={(e) => setDebts(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Family Home Value (₱)</label>
          <input type="number" value={familyHome} onChange={(e) => setFamilyHome(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer px-3 py-2.5">
            <input type="checkbox" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} className="w-4 h-4 accent-blue-600" />
            <span className="text-sm text-gray-600">Deceased was married (conjugal deduction)</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-xs text-gray-500 mb-1">Gross Estate</div>
          <div className="text-gray-900">₱{grossEstate.toLocaleString()}</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-xs text-blue-600 mb-1">Total Deductions</div>
          <div className="text-blue-900">₱{totalDeductions.toLocaleString()}</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-xs text-green-600 mb-1">Net Estate</div>
          <div className="text-green-900">₱{netEstate.toLocaleString()}</div>
        </div>
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <div className="text-xs text-red-600 mb-1">Estate Tax (6%)</div>
          <div className="text-red-900">₱{estateTax.toLocaleString()}</div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-3">
        * Includes ₱5M standard deduction. {isMarried ? `Conjugal share: ₱${conjugalShare.toLocaleString()} (50% of gross estate deducted).` : ""} Estate tax amnesty under RA 11956 may apply for deaths before Jan 1, 2018.
      </p>
    </div>
  );
}

const propertyTransferSteps = [
  { step: "1. Settle and pay estate tax at BIR", detail: "File BIR Form 1801. Pay estate tax. Get eCAR (Electronic Certificate Authorizing Registration)." },
  { step: "2. Get Tax Clearance Certificate from BIR", detail: "After payment, BIR issues a clearance. This is needed for all property transfers." },
  { step: "3. Transfer title at Registry of Deeds", detail: "Present: eCAR, PSA Death Certificate, old title (TCT/CCT), Deed of Extrajudicial Settlement, Tax Declaration. Fee: ~₱1,000-5,000." },
  { step: "4. Update Tax Declaration at Assessor's Office", detail: "Transfer tax declaration to new owner's name. Needed for real property tax payments." },
  { step: "5. Transfer vehicle registration at LTO", detail: "For vehicles: Deed of Sale/Extrajudicial Settlement, eCAR, old OR/CR. Transfer fee: ~₱2,000-5,000." },
  { step: "6. Close/transfer bank accounts", detail: "Present: estate tax clearance, letters of administration (if court-settled), PSA Death Certificate, heirs' IDs. Banks typically release within 30 days." },
];

export function DeathInheritance() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gray-200 rounded-xl">
            <Heart className="w-6 h-6 text-gray-600" />
          </div>
          <h1 className="text-gray-900">Death & Inheritance Guide</h1>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          Nobody wants to think about it, but knowing what to do when a loved one passes — funeral costs,
          death certificates, SSS/GSIS claims, estate tax, and property transfer — can save your family
          from unnecessary stress and financial mistakes during the hardest time.
        </p>
      </div>

      {/* Immediate Steps */}
      <div>
        <h2 className="text-gray-900 mb-1">What to Do When Someone Dies (Step by Step)</h2>
        <p className="text-sm text-gray-500 mb-4">In order of priority</p>
        <div className="space-y-3">
          {immediateSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-gray-800 text-sm">{item.step}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                </div>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Funeral Costs */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-gray-600" />
          <h2 className="text-gray-900">Funeral & Burial Costs (2025-2026)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Item</th>
                <th className="text-left py-3 px-3 text-gray-500">Budget</th>
                <th className="text-left py-3 px-3 text-gray-500">Mid-Range</th>
                <th className="text-left py-3 px-3 text-gray-500">Premium</th>
              </tr>
            </thead>
            <tbody>
              {funeralCosts.map((row) => (
                <tr key={row.item} className="border-b border-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.item}</td>
                  <td className="py-2.5 px-3 text-green-700">{row.budget}</td>
                  <td className="py-2.5 px-3 text-blue-700">{row.mid}</td>
                  <td className="py-2.5 px-3 text-purple-700">{row.premium}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="py-2.5 px-3 text-gray-900"><strong>TOTAL ESTIMATE</strong></td>
                <td className="py-2.5 px-3 text-green-800"><strong>₱50K–₱150K</strong></td>
                <td className="py-2.5 px-3 text-blue-800"><strong>₱150K–₱500K</strong></td>
                <td className="py-2.5 px-3 text-purple-800"><strong>₱500K–₱2M+</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="text-green-800 text-sm mb-1">Cremation vs Burial</h4>
            <p className="text-xs text-green-600">Cremation is often cheaper long-term (no cemetery maintenance fees). Columbarium niches are smaller and more affordable than burial lots. Some religions have specific preferences — discuss with family.</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="text-blue-800 text-sm mb-1">Free/Low-Cost Burial Assistance</h4>
            <p className="text-xs text-blue-600">DSWD Burial Assistance Program: up to ₱10,000-₱30,000. LGU/City Hall burial assistance (varies). SSS Funeral Grant: ₱40,000. GSIS Funeral Benefit: ₱30,000-₱50,000. PAO (for indigent families).</p>
          </div>
        </div>
      </div>

      {/* Death Benefits & Claims */}
      <div>
        <h2 className="text-gray-900 mb-1">Death Benefits You Can Claim</h2>
        <p className="text-sm text-gray-500 mb-4">Don't leave money on the table — claim everything the deceased is entitled to</p>
        <div className="space-y-4">
          {deathBenefits.map((item) => (
            <details key={item.source} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 text-sm">{item.source}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{item.who}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="text-green-800 text-sm mb-1">Benefit Amount</h4>
                  <p className="text-xs text-green-600">{item.benefit}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="text-blue-800 text-sm mb-1">How to Claim</h4>
                  <p className="text-xs text-blue-600">{item.howToClaim}</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="text-amber-800 text-sm mb-1">Deadline</h4>
                  <p className="text-xs text-amber-600">{item.deadline}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Estate Tax */}
      <EstateTaxCalculator />

      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Estate Tax Details (TRAIN Law)</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-red-50 rounded-xl">
            <h4 className="text-red-800 mb-2">Tax Rate</h4>
            <div className="text-red-900">{estateTaxData.rate}</div>
            <p className="text-xs text-red-600 mt-1">Flat rate on net estate (after deductions). Standard deduction: {estateTaxData.exemption}</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl">
            <h4 className="text-amber-800 mb-2">Penalties for Late Filing</h4>
            <ul className="space-y-1">
              {estateTaxData.penalties.map((p, i) => (
                <li key={i} className="text-xs text-amber-700 flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-xl">
          <h4 className="text-blue-800 mb-2">Allowable Deductions</h4>
          <div className="grid sm:grid-cols-2 gap-1.5">
            {estateTaxData.additionalDeductions.map((d, i) => (
              <div key={i} className="text-xs text-blue-700 flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5 text-blue-500" /> {d}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Transfer */}
      <div>
        <h2 className="text-gray-900 mb-1">How to Transfer Property After Death</h2>
        <p className="text-sm text-gray-500 mb-4">Extrajudicial settlement (if heirs agree) or judicial settlement (if disputed)</p>
        <div className="space-y-3">
          {propertyTransferSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
              <div className="p-1.5 bg-gray-100 rounded-lg shrink-0"><FileText className="w-4 h-4 text-gray-500" /></div>
              <div>
                <h4 className="text-gray-800 text-sm">{item.step}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extrajudicial vs Judicial */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Extrajudicial vs Judicial Settlement</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-xl">
            <h4 className="text-green-800 mb-2">Extrajudicial Settlement</h4>
            <ul className="space-y-1.5 text-xs text-green-700">
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> All heirs agree on how to divide the estate</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> No will exists (or will is uncontested)</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> No debts/liabilities against the estate</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> Requires: notarized Deed of Extrajudicial Settlement</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> Published in newspaper of general circulation (once a week for 3 consecutive weeks)</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> Cost: ₱10,000–₱50,000 (notarial + publication fees)</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> Timeline: 1–3 months</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-xl">
            <h4 className="text-red-800 mb-2">Judicial Settlement (Court)</h4>
            <ul className="space-y-1.5 text-xs text-red-700">
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Heirs disagree on division</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> There's a contested will</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Minor heirs involved (court must appoint guardian)</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Creditors have claims against the estate</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Requires filing a petition in court</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Cost: ₱50,000–₱500,000+ (lawyer fees + court fees)</li>
              <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> Timeline: 6 months to YEARS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What if the deceased had no will?", a: "Intestate succession applies (Civil Code). The estate is divided among legal heirs: spouse gets 50% of conjugal property + share of the other half. Legitimate children share equally in their portion. Illegitimate children get half of what legitimate children get. If no spouse or children: parents inherit. If no parents: siblings inherit." },
            { q: "Can I withdraw money from the deceased's bank account?", a: "Not without BIR clearance. Banks freeze accounts upon notification of death. To release funds, you need: estate tax return, BIR clearance, court order (if judicial settlement) or notarized extrajudicial settlement. Exception: joint accounts with 'survivorship' clause — but banks may still freeze for verification." },
            { q: "What is the Estate Tax Amnesty?", a: "Under RA 11956, estates of persons who died before January 1, 2018 can avail of the amnesty: flat 6% estate tax rate with minimum tax of ₱5,000. No penalties, surcharges, or interest. Deadline for availment varies — check BIR latest issuances. This is a HUGE savings for families who never settled estate tax for decades." },
            { q: "How can I prepare so my family doesn't go through this hassle?", a: "1) Get life insurance (covers funeral + provides for family). 2) Make a will (even a simple handwritten holographic will is valid). 3) Keep all documents organized (titles, bank accounts, insurance policies). 4) Tell your family where everything is. 5) Consider a memorial plan (pre-paid funeral services). 6) Pay all debts and settle property titles in your lifetime." },
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
