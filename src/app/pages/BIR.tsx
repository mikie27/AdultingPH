import { FileText, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";

const tinCategories = [
  {
    category: "Employee (First-time job)",
    form: "BIR Form 1902",
    where: "Your employer will process this for you",
    needs: [
      "Birth certificate (PSA)",
      "Valid government ID",
      "Marriage certificate (if married)",
      "Accomplished BIR Form 1902",
    ],
  },
  {
    category: "Self-Employed / Freelancer",
    form: "BIR Form 1901",
    where: "BIR Revenue District Office (RDO) where your business/residence is located",
    needs: [
      "Birth certificate (PSA)",
      "Valid government ID",
      "DTI Certificate of Registration (for sole prop)",
      "Contract of Lease or proof of business address",
      "Mayor's Permit / Barangay Clearance",
    ],
  },
  {
    category: "Mixed Income (Employee + Freelancer)",
    form: "BIR Form 1901 (if not yet registered as self-employed)",
    where: "BIR RDO where your business is registered",
    needs: [
      "Existing TIN (from employment)",
      "BIR Form 1905 for transfer/update of RDO",
      "DTI or SEC registration",
      "Mayor's Permit",
    ],
  },
  {
    category: "For ID/Transaction Purposes Only (Non-earner)",
    form: "BIR Form 1904",
    where: "Any BIR RDO",
    needs: [
      "Birth certificate (PSA)",
      "Valid government ID",
      "Letter of intent/purpose",
    ],
  },
];

const birForms = [
  { form: "1601-C", desc: "Monthly Remittance Return of Income Taxes Withheld on Compensation", who: "Employers", when: "10th of following month" },
  { form: "1701", desc: "Annual Income Tax Return for Self-Employed/Mixed Income", who: "Self-employed", when: "April 15" },
  { form: "1701A", desc: "Annual Income Tax Return (8% flat rate or substituted filing)", who: "Self-employed (simplified)", when: "April 15" },
  { form: "1701Q", desc: "Quarterly Income Tax Return", who: "Self-employed", when: "May 15, Aug 15, Nov 15" },
  { form: "1700", desc: "Annual Income Tax Return for Employees", who: "Employees", when: "April 15" },
  { form: "2316", desc: "Certificate of Compensation Payment/Tax Withheld", who: "Employers issue to employees", when: "Jan 31" },
  { form: "2550M", desc: "Monthly VAT Declaration", who: "VAT-registered", when: "20th of following month" },
  { form: "2550Q", desc: "Quarterly VAT Return", who: "VAT-registered", when: "25th after quarter" },
  { form: "2551Q", desc: "Quarterly Percentage Tax Return", who: "Non-VAT", when: "25th after quarter" },
  { form: "0605", desc: "Payment Form (Annual Registration Fee)", who: "All registered", when: "Jan 31 every year" },
  { form: "1905", desc: "Application for Transfer/Update of Registration", who: "All", when: "As needed" },
];

export function BIR() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-orange-100 rounded-xl">
            <FileText className="w-6 h-6 text-orange-600" />
          </div>
          <h1 className="text-orange-900">BIR & TIN Registration</h1>
        </div>
        <p className="text-sm text-orange-700 leading-relaxed max-w-2xl">
          Your TIN (Tax Identification Number) is your most important number as a working
          adult in the Philippines. Here's everything about BIR registration and compliance.
        </p>
      </div>

      {/* TIN Warning */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-red-800 mb-1">Important: One TIN Per Person for Life</h3>
            <p className="text-sm text-red-600">
              It is ILLEGAL to have multiple TINs. Penalty: PHP 1,000 fine and/or imprisonment.
              If you already have a TIN from a previous employer, do NOT let your new employer create a new one.
              Instead, transfer your TIN to the new employer's RDO using BIR Form 1905.
            </p>
          </div>
        </div>
      </div>

      {/* TIN Categories */}
      <div>
        <h2 className="text-gray-900 mb-1">How to Get Your TIN</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the category that applies to you</p>
        <div className="space-y-4">
          {tinCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-gray-900">{cat.category}</h3>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">
                  {cat.form}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Where:</strong> {cat.where}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {cat.needs.map((need, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    {need}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BIR Online Services */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <h2 className="text-blue-900 mb-3">BIR Online Services</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "eREG (Online TIN Application)",
              desc: "Apply for TIN online. Available for employees, self-employed, and non-earners.",
              url: "ereg.bir.gov.ph",
            },
            {
              title: "eFPS (Electronic Filing and Payment)",
              desc: "File tax returns and pay taxes online. Mandatory for large taxpayers.",
              url: "efps.bir.gov.ph",
            },
            {
              title: "eBIRForms",
              desc: "Downloadable offline tax forms that can be submitted electronically.",
              url: "ebirforms.bir.gov.ph",
            },
            {
              title: "eAFS (Electronic Audited Financial Statements)",
              desc: "Submit audited financial statements electronically.",
              url: "eafs.bir.gov.ph",
            },
          ].map((service) => (
            <div key={service.title} className="bg-white/80 rounded-lg p-4">
              <h4 className="text-blue-800 mb-1">{service.title}</h4>
              <p className="text-sm text-blue-600 mb-2">{service.desc}</p>
              <span className="text-xs text-blue-400">{service.url}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common BIR Forms */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Common BIR Forms You Need to Know</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Form</th>
                <th className="text-left py-3 px-3 text-gray-500">Description</th>
                <th className="text-left py-3 px-3 text-gray-500">Who Files</th>
                <th className="text-left py-3 px-3 text-gray-500">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {birForms.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md text-xs">
                      {row.form}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-gray-700">{row.desc}</td>
                  <td className="py-2.5 px-3 text-gray-500">{row.who}</td>
                  <td className="py-2.5 px-3 text-gray-500">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Annual Registration Fee */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-amber-900">Don't Forget: Annual Registration Fee</h2>
        </div>
        <p className="text-sm text-amber-700 mb-3">
          Every BIR-registered individual or business must pay the Annual Registration Fee (ARF)
          of <strong>PHP 500</strong> on or before <strong>January 31</strong> every year using BIR Form 0605.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-white/70 rounded-lg p-3 text-center">
            <div className="text-lg text-amber-800">PHP 500</div>
            <div className="text-xs text-amber-600">Annual Fee</div>
          </div>
          <div className="bg-white/70 rounded-lg p-3 text-center">
            <div className="text-lg text-amber-800">Jan 31</div>
            <div className="text-xs text-amber-600">Deadline</div>
          </div>
          <div className="bg-white/70 rounded-lg p-3 text-center">
            <div className="text-lg text-amber-800">Form 0605</div>
            <div className="text-xs text-amber-600">Payment Form</div>
          </div>
        </div>
      </div>

      {/* RDO Transfer */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-orange-600" />
          <h2 className="text-gray-900">Common Scenarios</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "I changed jobs. Do I need a new TIN?",
              a: "NO! You keep the same TIN for life. Give your TIN to your new employer. If your new employer is under a different RDO, file BIR Form 1905 to transfer your registration to the new RDO.",
            },
            {
              q: "I'm employed but also freelancing on the side. What do I do?",
              a: "You're considered a 'mixed income' earner. You need to update your BIR registration (Form 1905) to add your business/freelance activity. You'll file your own ITR annually combining both income sources. You cannot rely on substituted filing.",
            },
            {
              q: "I forgot my TIN. How do I recover it?",
              a: "Call the BIR hotline at 8538-3200 or visit your RDO. You can also try the TIN Verification page online. NEVER apply for a new TIN - it's illegal to have multiple TINs.",
            },
            {
              q: "What penalties can I face for non-compliance?",
              a: "Late filing: 25% surcharge + 12% annual interest. Failure to file: PHP 1,000-25,000 fine. Tax evasion: up to PHP 10M fine and/or 6-10 years imprisonment. Always file on time, even if you can't pay the full amount.",
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
