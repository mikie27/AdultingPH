import {
  Home,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle,
  DollarSign,
  FileText,
  Ban,
} from "lucide-react";

const leaseChecklist = [
  { item: "Full name & contact info of both landlord and tenant", why: "For accountability and legal correspondence" },
  { item: "Complete address and description of the unit", why: "Avoids disputes about which unit/room is covered" },
  { item: "Monthly rent amount and due date", why: "Both parties agree on exact amount and when it's due" },
  { item: "Advance and deposit amounts (with refund conditions)", why: "Standard is 1-2 months advance + 1-2 months deposit. Deposits must be refunded minus legitimate deductions." },
  { item: "Lease duration (start and end date)", why: "Protects you from sudden eviction. Minimum 1 year typical" },
  { item: "Who pays utilities (water, electricity, internet, assoc dues)", why: "Prevent surprise charges. Clarify sub-metered vs flat rate" },
  { item: "Rules on subletting, pets, visitors, renovations", why: "Know what's allowed before you sign" },
  { item: "Maintenance & repair responsibilities", why: "Usually: landlord pays for structural repairs, tenant for minor maintenance" },
  { item: "Conditions for early termination (by either party)", why: "Know the penalties and notice period for breaking the lease" },
  { item: "Penalty for late payment", why: "Common: 3-5% per month of delay. Should be reasonable" },
  { item: "Process for rent increase (how much notice, how often)", why: "RA 9653 limits annual increases to 7% for covered units" },
  { item: "Move-out inspection process & deposit refund timeline", why: "Prevents landlord from keeping deposit unfairly. Standard: 30-60 days for refund" },
];

const tenantRights = [
  {
    right: "Right to a Written Contract",
    detail: "You are entitled to a written lease agreement. Verbal agreements are harder to enforce. Always insist on a written contract signed by both parties. Get your own copy.",
    law: "Civil Code, Art. 1643-1688",
  },
  {
    right: "Right to Peaceful Possession",
    detail: "Once you pay rent, the landlord cannot enter your unit without your consent (except emergencies). Changing locks on you, cutting off utilities, or harassment are ILLEGAL.",
    law: "Civil Code, Art. 1654",
  },
  {
    right: "Right Against Illegal Eviction",
    detail: "Landlord CANNOT evict you by force, intimidation, cutting utilities, or changing locks. Eviction must go through the courts (ejectment case). The only legal way to remove a tenant is through a court order.",
    law: "Civil Code + Rules of Court",
  },
  {
    right: "Right to Deposit Refund",
    detail: "Security deposit must be returned upon move-out, minus legitimate deductions (unpaid rent, damages beyond normal wear and tear). Landlord must provide itemized list of deductions.",
    law: "Civil Code, Art. 1654",
  },
  {
    right: "Right to Habitable Living Conditions",
    detail: "Landlord must maintain the property in a livable condition. Major structural issues, plumbing problems, and pest infestations are the landlord's responsibility to fix.",
    law: "Civil Code, Art. 1654",
  },
  {
    right: "Right Against Unreasonable Rent Increases",
    detail: "For residential units with monthly rent not exceeding ₱10,000 (in Metro Manila) or ₱5,000 (outside MM), annual rent increase is capped at 7% under RA 9653. Landlord must give 30 days written notice.",
    law: "RA 9653 (Rent Control Act)",
  },
  {
    right: "Right to Receipts",
    detail: "You have the right to an official receipt for every rent payment. This serves as proof of payment. If landlord refuses, pay through bank transfer (has automatic receipt/trail).",
    law: "Civil Code",
  },
];

const landlordObligations = [
  "Deliver the property in a condition fit for the intended use",
  "Make necessary repairs to keep the property habitable",
  "Maintain the tenant in peaceful and adequate enjoyment of the lease",
  "Not disturb or interfere with the tenant's use of the property",
  "Return the security deposit upon lease termination (minus valid deductions)",
  "Give proper notice before entering the premises (except emergencies)",
  "Provide 3 months written notice before non-renewal of lease (for covered units under RA 9653)",
  "Issue official receipts for rent payments",
];

const illegalLandlordActions = [
  { action: "Cutting off water/electricity to force you out", remedy: "File complaint with barangay. If unresolved, file ejectment case. You can also report to DILG or your LGU housing office." },
  { action: "Changing locks while you're away", remedy: "This is illegal — you can file a criminal complaint for unjust vexation or grave coercion. Document everything." },
  { action: "Entering your unit without permission", remedy: "Violation of your right to peaceful possession. Document and send a written demand to stop. If repeated, file in barangay or court." },
  { action: "Threatening or intimidating you to leave", remedy: "File a complaint in the barangay. If threats involve violence, report to the police. Keep records of all threats (screenshots, recordings if legal in your jurisdiction)." },
  { action: "Refusing to return your deposit without valid reasons", remedy: "Send a formal demand letter. If unresolved, file a case in small claims court (no lawyer needed, filing fee: ₱1,000-₱3,000)." },
  { action: "Increasing rent beyond the 7% cap (for covered units)", remedy: "Report to the Housing and Land Use Regulatory Board (HLURB) or the local government housing office." },
  { action: "Evicting you without a court order", remedy: "Only a court can order eviction. If landlord uses force, file a complaint for forcible entry or grave coercion." },
];

const rentBudgetGuide = [
  { area: "Metro Manila (BGC, Makati CBD)", studio: "₱15,000–₱25,000", oneBR: "₱20,000–₱40,000", twoBR: "₱30,000–₱60,000" },
  { area: "Metro Manila (QC, Pasig, Mandaluyong)", studio: "₱8,000–₱15,000", oneBR: "₱12,000–₱25,000", twoBR: "₱18,000–₱40,000" },
  { area: "Metro Manila (Caloocan, Las Piñas, outer)", studio: "₱5,000–₱10,000", oneBR: "₱8,000–₱15,000", twoBR: "₱12,000–₱25,000" },
  { area: "Cebu City", studio: "₱6,000–₱12,000", oneBR: "₱10,000–₱20,000", twoBR: "₱15,000–₱30,000" },
  { area: "Davao City", studio: "₱5,000–₱10,000", oneBR: "₱8,000–₱15,000", twoBR: "₱12,000–₱25,000" },
  { area: "Provincial (small cities/towns)", studio: "₱2,000–₱5,000", oneBR: "₱3,000–₱8,000", twoBR: "₱5,000–₱15,000" },
  { area: "Boarding house / Bed space", studio: "₱2,000–₱5,000", oneBR: "—", twoBR: "—" },
];

const moveInCosts = [
  { item: "1-2 months advance rent", example: "₱16,000–₱32,000", notes: "For ₱16,000/month unit" },
  { item: "1-2 months security deposit", example: "₱16,000–₱32,000", notes: "Refundable upon move-out" },
  { item: "Association dues (condo)", example: "₱2,000–₱6,000/mo", notes: "Covers building maintenance, guards, amenities" },
  { item: "Utility deposits (water, electric)", example: "₱2,000–₱5,000", notes: "Meralco deposit for new connection" },
  { item: "Internet installation", example: "₱1,500–₱3,000", notes: "PLDT, Globe, Converge — installation + first month" },
  { item: "Moving expenses", example: "₱3,000–₱15,000", notes: "Lipat-bahay truck: ₱3,000-8,000 depending on distance" },
  { item: "Basic furniture (if unfurnished)", example: "₱10,000–₱50,000+", notes: "Bed, table, chairs, kitchen basics. Buy secondhand to save." },
  { item: "Broker's fee (if used)", example: "1 month rent", notes: "Some listings are direct-to-owner (no broker fee)" },
];

export function RentingTenants() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-100 rounded-xl">
            <Home className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-indigo-900">Renting & Tenant Rights</h1>
        </div>
        <p className="text-sm text-indigo-700 leading-relaxed max-w-2xl">
          Your complete guide to renting in the Philippines — lease agreements, tenant rights under the law,
          how to deal with bad landlords, rent budgets by area, move-in costs, and the Rent Control Act.
        </p>
      </div>

      {/* Rent Budget */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-indigo-600" />
          <h2 className="text-gray-900">Rent Budget Guide by Area (2025-2026)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Location</th>
                <th className="text-left py-3 px-3 text-gray-500">Studio/Bedspace</th>
                <th className="text-left py-3 px-3 text-gray-500">1 Bedroom</th>
                <th className="text-left py-3 px-3 text-gray-500">2 Bedrooms</th>
              </tr>
            </thead>
            <tbody>
              {rentBudgetGuide.map((row) => (
                <tr key={row.area} className="border-b border-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.area}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.studio}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.oneBR}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.twoBR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700"><strong>Rule of thumb:</strong> Rent should be no more than 30% of your monthly income. Earning ₱25,000/month? Aim for ₱7,500 max rent. Earning ₱40,000? Aim for ₱12,000 max.</p>
        </div>
      </div>

      {/* Move-In Costs */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Total Move-In Costs (First Month)</h2>
        <div className="space-y-2">
          {moveInCosts.map((item) => (
            <div key={item.item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="text-sm text-gray-700">{item.item}</span>
                <span className="text-xs text-gray-400 block">{item.notes}</span>
              </div>
              <span className="text-sm text-indigo-700 shrink-0">{item.example}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700"><strong>Total move-in budget:</strong> Expect to spend 3-5x your monthly rent upfront (advance + deposit + utilities + moving + basic furnishing). For a ₱15,000/month unit, prepare ₱45,000-₱75,000.</p>
        </div>
      </div>

      {/* Lease Checklist */}
      <div>
        <h2 className="text-gray-900 mb-1">Lease Agreement Checklist</h2>
        <p className="text-sm text-gray-500 mb-4">Before signing ANY contract, make sure it includes:</p>
        <div className="space-y-2">
          {leaseChecklist.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
              <div>
                <div className="text-sm text-gray-800">{item.item}</div>
                <div className="text-xs text-gray-400">{item.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tenant Rights */}
      <div>
        <h2 className="text-gray-900 mb-1">Your Rights as a Tenant</h2>
        <p className="text-sm text-gray-500 mb-4">Know these — landlords sometimes take advantage of tenants who don't know the law</p>
        <div className="space-y-3">
          {tenantRights.map((item) => (
            <div key={item.right} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-gray-800 text-sm flex items-center gap-2"><Shield className="w-4 h-4 text-indigo-500" /> {item.right}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                </div>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-xs shrink-0">{item.law}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Landlord Obligations */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Landlord's Legal Obligations</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {landlordObligations.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Illegal Landlord Actions */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Ban className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">Illegal Landlord Actions & What to Do</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">If your landlord does any of these, they are breaking the law</p>
        <div className="space-y-3">
          {illegalLandlordActions.map((item) => (
            <div key={item.action} className="bg-white rounded-xl border border-red-100 p-5">
              <h4 className="text-red-700 text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {item.action}</h4>
              <p className="text-sm text-gray-600 mt-2"><strong className="text-green-700">What to do:</strong> {item.remedy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rent Control Act */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <h2 className="text-green-900 mb-3">RA 9653 — Rent Control Act (Extended)</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Coverage</h4>
            <ul className="text-sm text-green-700 space-y-1.5">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Residential units in Metro Manila: monthly rent ≤ ₱10,000</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Residential units outside MM: monthly rent ≤ ₱5,000</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Maximum annual rent increase: 7%</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Applies to apartments, houses, rooms, bed spaces</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Grounds for Eviction (Even Under Rent Control)</h4>
            <ul className="text-sm text-green-700 space-y-1.5">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Non-payment of rent for 3 months</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Subleasing without landlord consent</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Using the unit for illegal purposes</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Landlord needs the property for personal use (with 3 months notice)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Building will be demolished or undergo major repairs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          <h2 className="text-gray-900">Smart Renting Tips</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Take photos/video of the unit BEFORE moving in — document all existing damage. Send to landlord via email (creates a record).",
            "Pay rent through bank transfer or GCash (not cash) — creates an automatic paper trail in case of disputes.",
            "Never sign a blank contract or one with blank spaces — fill in all amounts and dates before signing.",
            "Get a copy of the signed contract. If the landlord won't give you one, that's a red flag.",
            "Check the unit at night before signing — noise levels, neighborhood safety, and parking availability may differ.",
            "Ask about water pressure, internet availability, and existing pest issues before committing.",
            "Research the area: flood-prone? Near public transport? Near your workplace? Factor in commute costs.",
            "If the lease says 'no refund of deposit' — that clause may be void. Security deposits must be returned minus legitimate deductions.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" /> {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
