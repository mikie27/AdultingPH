import { Briefcase, CheckCircle2, ArrowRight, AlertTriangle, Scale, Users, User, FileText } from "lucide-react";

const businessTypes = [
  {
    type: "Sole Proprietorship",
    icon: User,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
    best: "Freelancers, small business owners, online sellers",
    pros: [
      "Easiest and cheapest to register",
      "Full control over business decisions",
      "Simpler tax filing (personal income tax)",
      "Lower registration fees (PHP 1,000-3,000)",
      "Can register online via DTI",
    ],
    cons: [
      "Unlimited personal liability",
      "Business name tied to one owner",
      "Harder to get big clients/contracts",
      "Cannot sell shares or add partners",
    ],
    steps: [
      "Register business name with DTI (bnrs.dti.gov.ph) - PHP 200-1,000",
      "Get Barangay Clearance from your barangay hall",
      "Apply for Mayor's Permit/Business Permit from City Hall",
      "Register with BIR (RDO) - Get TIN, books of accounts, receipts/invoices",
      "Register with SSS, PhilHealth, Pag-IBIG if you have employees",
    ],
  },
  {
    type: "Partnership",
    icon: Users,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    best: "Professional firms (law, accounting), joint ventures",
    pros: [
      "Shared capital and resources",
      "Combined skills and expertise",
      "Still relatively simple to set up",
      "Partners share profits and losses",
    ],
    cons: [
      "Partners have unlimited liability (general partnership)",
      "Potential for partner disputes",
      "Death of partner can dissolve the partnership",
      "More expensive to register than sole prop (SEC registration)",
    ],
    steps: [
      "Draft Articles of Partnership",
      "Register with SEC (Securities and Exchange Commission)",
      "Get TIN from BIR",
      "Get Barangay Clearance",
      "Apply for Mayor's Permit",
      "Register with BIR RDO",
    ],
  },
  {
    type: "Corporation (OPC or Regular)",
    icon: Scale,
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
    best: "Startups, medium to large businesses, seeking investors",
    pros: [
      "Limited liability (personal assets protected)",
      "Can sell shares to raise capital",
      "Perpetual existence (doesn't die with owner)",
      "More credible with clients and banks",
      "OPC allows single stockholder",
    ],
    cons: [
      "More expensive to register (PHP 15,000-50,000+)",
      "Stricter compliance requirements",
      "Annual SEC reporting required",
      "Double taxation possible (corporate + dividend tax)",
      "More complex bookkeeping",
    ],
    steps: [
      "Choose business name and verify availability with SEC",
      "Draft Articles of Incorporation and By-laws",
      "Register with SEC (online via SEC CORES) - filing fee based on authorized capital",
      "Open corporate bank account",
      "Get Barangay Clearance",
      "Apply for Mayor's Permit / Business Permit",
      "Register with BIR - get TIN, COR, books of accounts, invoices",
      "Register with SSS, PhilHealth, Pag-IBIG for employees",
    ],
  },
];

const freelancerGuide = {
  title: "Freelancer Registration Guide",
  desc: "Whether you're on Upwork, doing graphic design, content writing, or any online gig - here's how to make it legit.",
  steps: [
    {
      step: "Get a TIN",
      detail: "If you don't have one yet, apply at your local BIR RDO. Use BIR Form 1901 for self-employed individuals.",
    },
    {
      step: "Register with BIR",
      detail: "File BIR Form 1901 at your RDO. Specify your line of business. Choose between 8% flat tax or graduated rates.",
    },
    {
      step: "Get Authority to Print (ATP)",
      detail: "Apply for ATP to have your official receipts/invoices printed. BIR-accredited printers can help you.",
    },
    {
      step: "Get Books of Accounts",
      detail: "Buy manual books of accounts from bookstores and have them registered/stamped at BIR. Or use electronic BIR-registered systems.",
    },
    {
      step: "File & Pay Taxes Quarterly",
      detail: "File BIR Form 1701Q quarterly. If 8% flat rate: 8% of gross receipts minus PHP 250,000. Pay via GCash, bank, or eFPS.",
    },
    {
      step: "File Annual ITR",
      detail: "File BIR Form 1701 or 1701A on or before April 15 each year. Attach relevant schedules and financial statements.",
    },
  ],
  tips: [
    "Keep ALL receipts and records of income and expenses",
    "Set aside 8-10% of income for taxes every month",
    "Consider hiring a bookkeeper or accountant (costs PHP 2,000-5,000/month)",
    "Use accounting software or even a simple spreadsheet to track income",
    "Register for SSS, PhilHealth, and Pag-IBIG voluntarily for your own protection",
    "Open a separate bank account for business income",
  ],
};

const comparisonTable = [
  { feature: "Registration Body", sole: "DTI", partnership: "SEC", corp: "SEC" },
  { feature: "Min. Capital", sole: "None", partnership: "None (general)", corp: "None (OPC: PHP 1)" },
  { feature: "Registration Cost", sole: "PHP 1,000-3,000", partnership: "PHP 5,000-15,000", corp: "PHP 15,000-50,000+" },
  { feature: "Liability", sole: "Unlimited", partnership: "Unlimited (general)", corp: "Limited to investment" },
  { feature: "Tax Rate", sole: "Personal rates or 8%", partnership: "Personal rates", corp: "25% corporate tax" },
  { feature: "Owners", sole: "1", partnership: "2+", corp: "1 (OPC) or 2-15" },
  { feature: "Lifetime", sole: "Tied to owner", partnership: "Tied to partners", corp: "Perpetual" },
  { feature: "Complexity", sole: "Low", partnership: "Medium", corp: "High" },
];

export function BusinessRegistration() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-teal-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-teal-100 rounded-xl">
            <Briefcase className="w-6 h-6 text-teal-600" />
          </div>
          <h1 className="text-teal-900">Business Registration</h1>
        </div>
        <p className="text-sm text-teal-700 leading-relaxed max-w-2xl">
          Whether you're starting as a freelancer, sole proprietor, or corporation,
          here's your complete guide to registering a business in the Philippines.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Feature</th>
                <th className="text-left py-3 px-3 text-gray-500">Sole Proprietorship</th>
                <th className="text-left py-3 px-3 text-gray-500">Partnership</th>
                <th className="text-left py-3 px-3 text-gray-500">Corporation</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{row.feature}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.sole}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.partnership}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.corp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Business Types */}
      {businessTypes.map((biz) => (
        <div key={biz.type} className={`rounded-xl border p-5 sm:p-6 ${biz.color}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-xl shadow-sm">
              <biz.icon className={`w-5 h-5 ${biz.iconColor}`} />
            </div>
            <div>
              <h2 className="text-gray-900">{biz.type}</h2>
              <p className="text-xs text-gray-500">Best for: {biz.best}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white/80 rounded-lg p-4">
              <h4 className="text-green-800 mb-2">Advantages</h4>
              <ul className="text-sm text-gray-700 space-y-1.5">
                {biz.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 rounded-lg p-4">
              <h4 className="text-red-800 mb-2">Disadvantages</h4>
              <ul className="text-sm text-gray-700 space-y-1.5">
                {biz.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg p-4">
            <h4 className="text-gray-800 mb-3">Step-by-Step Registration</h4>
            <ol className="space-y-2">
              {biz.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-xs shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}

      {/* Freelancer Guide */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200 p-5 sm:p-6">
        <h2 className="text-violet-900 mb-2">{freelancerGuide.title}</h2>
        <p className="text-sm text-violet-700 mb-5">{freelancerGuide.desc}</p>

        <div className="space-y-3 mb-5">
          {freelancerGuide.steps.map((item, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-4 flex items-start gap-3">
              <span className="w-7 h-7 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs shrink-0">
                {i + 1}
              </span>
              <div>
                <h4 className="text-gray-800">{item.step}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 rounded-lg p-4">
          <h4 className="text-violet-800 mb-2">Freelancer Pro Tips</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            {freelancerGuide.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-violet-500 shrink-0 mt-1" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BIR Registration for Business */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-orange-600" />
          <h2 className="text-orange-900">BIR Registration for Business / Self-Employed</h2>
        </div>
        <p className="text-sm text-orange-700 mb-4">
          After registering your business with DTI/SEC, you must register with BIR. Use BIR Form 1901 for self-employed/freelancers.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            "Birth certificate (PSA)",
            "Valid government ID",
            "DTI Certificate of Registration (sole prop) or SEC Registration",
            "Contract of Lease or proof of business address",
            "Mayor's Permit / Barangay Clearance",
            "BIR Form 1901 (accomplished)",
            "Payment for Annual Registration Fee (PHP 500 — Form 0605)",
            "Books of Accounts (buy from bookstores, have BIR stamp them)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-white/70 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
        <div className="bg-white/70 rounded-lg p-4">
          <h4 className="text-orange-800 mb-2">What You'll Get from BIR</h4>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> TIN (Tax Identification Number)</div>
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> COR (Certificate of Registration — BIR Form 2303)</div>
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> Authority to Print (ATP) for receipts/invoices</div>
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> Registered Books of Accounts</div>
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> "Ask for Receipt" notice (to display in your establishment)</div>
            <div className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1" /> Choose: 8% flat rate or graduated tax rates</div>
          </div>
        </div>
      </div>

      {/* Permit Renewal */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Annual Business Permit Renewal</h2>
        <p className="text-sm text-gray-500 mb-4">Every January, you must renew your business permit. Here's what you need:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Accomplished renewal application form",
            "Previous year's Mayor's Permit",
            "Barangay Clearance (new for current year)",
            "Community Tax Certificate (Cedula)",
            "BIR registration (Form 2303)",
            "Financial statements or ITR from previous year",
            "Fire Safety Inspection Certificate",
            "Sanitary Permit (if applicable)",
            "SSS, PhilHealth, Pag-IBIG employer registration",
            "Lease contract (if renting business space)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <AlertTriangle className="w-4 h-4 inline mr-1" />
            Deadline is usually January 20. Late renewal incurs a 25% surcharge + 2% monthly interest.
          </p>
        </div>
      </div>
    </div>
  );
}