import { useState } from "react";
import { Receipt, Calculator, Info, AlertTriangle, CheckCircle2, ArrowRight, FileText, HelpCircle, Clock } from "lucide-react";

const taxBrackets = [
  { range: "PHP 0 - 250,000", rate: "0%", tax: "0" },
  { range: "PHP 250,001 - 400,000", rate: "15%", tax: "15% of excess over 250,000" },
  { range: "PHP 400,001 - 800,000", rate: "20%", tax: "22,500 + 20% of excess over 400,000" },
  { range: "PHP 800,001 - 2,000,000", rate: "25%", tax: "102,500 + 25% of excess over 800,000" },
  { range: "PHP 2,000,001 - 8,000,000", rate: "30%", tax: "402,500 + 30% of excess over 2,000,000" },
  { range: "Over PHP 8,000,000", rate: "35%", tax: "2,202,500 + 35% of excess over 8,000,000" },
];

const taxTypes = [
  {
    title: "Compensation Income Tax",
    desc: "Withheld by your employer from your salary. This is the most common type for employees.",
    who: "Employees",
  },
  {
    title: "Business/Professional Income Tax",
    desc: "For self-employed, freelancers, and business owners. You can choose graduated rates or 8% flat rate.",
    who: "Freelancers, Business Owners",
  },
  {
    title: "Capital Gains Tax",
    desc: "6% on sale of real property, 15% on sale of shares of stock not listed in the stock exchange.",
    who: "Property/Stock Sellers",
  },
  {
    title: "Withholding Tax",
    desc: "Tax withheld at source on certain income payments like professional fees, rent, dividends.",
    who: "Various",
  },
  {
    title: "Value Added Tax (VAT)",
    desc: "12% on sale of goods and services. Businesses with gross sales exceeding PHP 3M must register for VAT.",
    who: "Businesses, Consumers",
  },
  {
    title: "Percentage Tax",
    desc: "3% for non-VAT registered businesses with gross sales not exceeding PHP 3M annually.",
    who: "Small Businesses",
  },
];

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

function computeTax(annualIncome: number): number {
  if (annualIncome <= 250000) return 0;
  if (annualIncome <= 400000) return (annualIncome - 250000) * 0.15;
  if (annualIncome <= 800000) return 22500 + (annualIncome - 400000) * 0.20;
  if (annualIncome <= 2000000) return 102500 + (annualIncome - 800000) * 0.25;
  if (annualIncome <= 8000000) return 402500 + (annualIncome - 2000000) * 0.30;
  return 2202500 + (annualIncome - 8000000) * 0.35;
}

export function IncomeTax() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const monthly = parseFloat(monthlyIncome) || 0;
  const annual = monthly * 12;
  const annualTax = computeTax(annual);
  const monthlyTax = annualTax / 12;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-red-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-red-100 rounded-xl">
            <Receipt className="w-6 h-6 text-red-600" />
          </div>
          <h1 className="text-red-900">Income Tax, BIR & TIN</h1>
        </div>
        <p className="text-sm text-red-700 leading-relaxed max-w-2xl">
          Under the TRAIN Law (Tax Reform for Acceleration and Inclusion), the Philippines
          uses a graduated income tax system. Those earning PHP 250,000 and below annually
          are exempt from income tax. This page also covers TIN registration and BIR compliance.
        </p>
      </div>

      {/* Tax Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-red-600" />
          <h2 className="text-gray-900">Income Tax Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Monthly Gross Income (PHP)</label>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="e.g. 30000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">
              Enter your gross monthly salary before deductions
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-xs text-red-500 mb-1">Monthly Income Tax</div>
              <div className="text-2xl text-red-700">
                PHP {monthlyTax.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-1">Annual Income Tax</div>
              <div className="text-lg text-gray-800">
                PHP {annualTax.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            {monthly > 0 && (
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-xs text-green-600 mb-1">Effective Tax Rate</div>
                <div className="text-lg text-green-700">
                  {annual > 0 ? ((annualTax / annual) * 100).toFixed(2) : "0.00"}%
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tax Brackets */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-1">2023-2026 Tax Brackets (TRAIN Law)</h2>
        <p className="text-sm text-gray-500 mb-4">Annual taxable income brackets</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-gray-500">Annual Income Range</th>
                <th className="text-left py-3 px-4 text-gray-500">Rate</th>
                <th className="text-left py-3 px-4 text-gray-500">Tax Computation</th>
              </tr>
            </thead>
            <tbody>
              {taxBrackets.map((bracket, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{bracket.range}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      bracket.rate === "0%" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {bracket.rate}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{bracket.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Types of Taxes */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Taxes in the Philippines</h2>
        <p className="text-sm text-gray-500 mb-4">Know what applies to you</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {taxTypes.map((type) => (
            <div key={type.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-900 mb-1">{type.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{type.desc}</p>
              <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                {type.who}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8% Flat Rate Option */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h2 className="text-green-900">8% Flat Rate Option</h2>
        </div>
        <p className="text-sm text-green-700 mb-4">
          Self-employed individuals and professionals earning less than PHP 3,000,000 annually can opt for
          the 8% flat income tax rate instead of the graduated rates. This replaces both income tax and
          percentage tax.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Pros</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Simpler computation</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> No need to track expenses</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Replaces percentage tax</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> First PHP 250,000 is exempt</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Cons</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Can't claim itemized deductions</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Only for gross sales/receipts below PHP 3M</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> May not be beneficial for high-expense businesses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Filing Deadlines */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-amber-500" />
          <h2 className="text-gray-900">Important Filing Deadlines</h2>
        </div>
        <div className="space-y-3">
          {[
            { date: "January 31", desc: "BIR Form 2316 - Certificate of Compensation Payment/Tax Withheld (from employer). Also Annual Registration Fee (Form 0605 — PHP 500)." },
            { date: "April 15", desc: "BIR Form 1700/1701/1701A - Annual Income Tax Return" },
            { date: "Every 15th", desc: "Monthly withholding tax remittance (employers)" },
            { date: "Quarterly", desc: "BIR Form 1701Q - Quarterly Income Tax Return (self-employed)" },
            { date: "Quarterly", desc: "BIR Form 2550Q - Quarterly VAT Return / 2551Q - Percentage Tax" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-md whitespace-nowrap">
                {item.date}
              </span>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TIN Registration */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-orange-600" />
          <h2 className="text-orange-900">TIN (Tax Identification Number) Registration</h2>
        </div>
        <p className="text-sm text-orange-700 mb-4">
          Your TIN is your most important number as a working adult. One TIN per person for LIFE — it is ILLEGAL to have multiple TINs (penalty: PHP 1,000 fine and/or imprisonment).
        </p>
      </div>

      {/* TIN Warning */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-red-800 mb-1">Important: One TIN Per Person for Life</h3>
            <p className="text-sm text-red-600">
              It is ILLEGAL to have multiple TINs. If you already have a TIN from a previous employer, do NOT let your new employer create a new one.
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
            { title: "eREG (Online TIN Application)", desc: "Apply for TIN online. Available for employees, self-employed, and non-earners.", url: "ereg.bir.gov.ph" },
            { title: "eFPS (Electronic Filing and Payment)", desc: "File tax returns and pay taxes online. Mandatory for large taxpayers.", url: "efps.bir.gov.ph" },
            { title: "eBIRForms", desc: "Downloadable offline tax forms that can be submitted electronically.", url: "ebirforms.bir.gov.ph" },
            { title: "eAFS (Electronic Audited Financial Statements)", desc: "Submit audited financial statements electronically.", url: "eafs.bir.gov.ph" },
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

      {/* Common Scenarios */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-red-600" />
          <h2 className="text-gray-900">Common BIR & Tax Scenarios</h2>
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
              a: "Call the BIR hotline at 8538-3200 or visit your RDO. You can also try the TIN Verification page online. NEVER apply for a new TIN — it's illegal to have multiple TINs.",
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

      {/* Pro Tips */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-blue-500" />
          <h2 className="text-gray-900">Pro Tips</h2>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          {[
            "Always keep your BIR Form 2316 from your employer — you'll need it for tax filing and loan applications.",
            "If you have multiple employers in a year, you need to file your own ITR (not substituted filing).",
            "13th month pay and other benefits up to PHP 90,000 are tax-exempt (de minimis benefits).",
            "Freelancers: consider the 8% flat rate if your gross income is below PHP 3M — it's often simpler and cheaper.",
            "Set aside 8-10% of freelance income for taxes monthly — don't wait until filing deadline.",
            "Keep ALL receipts and records of income and expenses for at least 10 years (BIR can audit within 3 years, or 10 years for fraud).",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-600 shrink-0">{i + 1}.</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
