import { useState } from "react";
import { Shield, Calculator, PieChart, HelpCircle, CheckCircle2 } from "lucide-react";

const sssTable = [
  { range: "Below 4,250", msc: 4000, ee: 180, er: 380, total: 560, ec: 10 },
  { range: "4,250 - 4,749.99", msc: 4500, ee: 202.50, er: 427.50, total: 630, ec: 10 },
  { range: "4,750 - 5,249.99", msc: 5000, ee: 225, er: 475, total: 700, ec: 10 },
  { range: "5,250 - 5,749.99", msc: 5500, ee: 247.50, er: 522.50, total: 770, ec: 10 },
  { range: "9,750 - 10,249.99", msc: 10000, ee: 450, er: 950, total: 1400, ec: 10 },
  { range: "14,750 - 15,249.99", msc: 15000, ee: 675, er: 1425, total: 2100, ec: 30 },
  { range: "19,750 - 20,249.99", msc: 20000, ee: 900, er: 1900, total: 2800, ec: 30 },
  { range: "24,750 - 25,249.99", msc: 25000, ee: 1125, er: 2375, total: 3500, ec: 30 },
  { range: "29,750 - 30,249.99", msc: 30000, ee: 1350, er: 2850, total: 4200, ec: 30 },
  { range: "30,250 and above", msc: 30000, ee: 1350, er: 2850, total: 4200, ec: 30 },
];

const benefits = [
  {
    title: "Sickness Benefit",
    desc: "Daily cash allowance for up to 120 days when you can't work due to illness. Requires at least 3 monthly contributions in the 12-month period before illness.",
    amount: "90% of average daily salary credit",
  },
  {
    title: "Maternity Benefit",
    desc: "Cash benefit for female members who can't work due to childbirth or miscarriage. 105 days for live birth (120 days for solo parents), 60 days for miscarriage.",
    amount: "100% of average daily salary credit",
  },
  {
    title: "Disability Benefit",
    desc: "Monthly pension or lump sum for permanent disability. Requires at least 1 monthly contribution before disability.",
    amount: "Varies based on contributions",
  },
  {
    title: "Retirement Benefit",
    desc: "Monthly pension upon reaching 60 (optional) or 65 (mandatory). Requires at least 120 monthly contributions.",
    amount: "Higher of: PHP 2,000 or 40% of avg MSC + 2% for each year over 10",
  },
  {
    title: "Death Benefit",
    desc: "Monthly pension or lump sum given to beneficiaries of a deceased member.",
    amount: "Same computation as retirement benefit",
  },
  {
    title: "Funeral Benefit",
    desc: "Cash benefit given to whoever pays for the funeral of the deceased member.",
    amount: "PHP 40,000",
  },
  {
    title: "Unemployment/Involuntary Separation",
    desc: "Cash benefit for members who are involuntarily separated from employment (not resigned). Requires at least 36 monthly contributions, 12 in the 18 months before separation.",
    amount: "50% of average monthly salary credit x 2 months",
  },
  {
    title: "Salary Loan",
    desc: "Short-term loan you can apply for as an active member. 1-month loan = 1 MSC, 2-month loan = 2 MSC.",
    amount: "Up to PHP 60,000 (2-month salary loan)",
  },
];

const whereItGoes = [
  { label: "Old Age/Retirement", pct: 40, color: "bg-sky-500" },
  { label: "Sickness & Maternity", pct: 20, color: "bg-blue-500" },
  { label: "Disability & Death", pct: 15, color: "bg-indigo-500" },
  { label: "Employees' Compensation", pct: 10, color: "bg-purple-500" },
  { label: "Salary Loans Fund", pct: 10, color: "bg-pink-500" },
  { label: "Administrative/Operations", pct: 5, color: "bg-gray-400" },
];

export function SSS() {
  const [salary, setSalary] = useState("");
  const salaryNum = parseFloat(salary) || 0;

  const computeSSS = (monthly: number) => {
    if (monthly <= 0) return { ee: 0, er: 0, total: 0 };
    // Simplified computation: 4.5% EE, 9.5% ER of MSC
    // MSC ranges from 4,000 to 30,000
    const msc = Math.min(Math.max(Math.round(monthly / 500) * 500, 4000), 30000);
    const ee = msc * 0.045;
    const er = msc * 0.095;
    return { ee, er, total: ee + er, msc };
  };

  const sss = computeSSS(salaryNum);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-sky-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-sky-100 rounded-xl">
            <Shield className="w-6 h-6 text-sky-600" />
          </div>
          <h1 className="text-sky-900">SSS (Social Security System)</h1>
        </div>
        <p className="text-sm text-sky-700 leading-relaxed max-w-2xl">
          The SSS provides social security protection to workers in the private sector.
          Both employees and employers contribute, with a total contribution rate of 14%
          of the Monthly Salary Credit (MSC). Self-employed and voluntary members pay the full 14%.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-sky-600" />
          <h2 className="text-gray-900">SSS Contribution Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Monthly Salary (PHP)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. 25000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">
              Employee share: 4.5% | Employer share: 9.5% of MSC
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-sky-50 rounded-xl p-4">
              <div className="text-xs text-sky-500 mb-1">Your Monthly Contribution (Employee)</div>
              <div className="text-2xl text-sky-700">
                PHP {sss.ee.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Employer Share</div>
                <div className="text-gray-800">
                  PHP {sss.er.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Total</div>
                <div className="text-gray-800">
                  PHP {sss.total.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where Your Money Goes */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-sky-600" />
          <h2 className="text-gray-900">Where Your SSS Money Goes</h2>
        </div>
        <div className="space-y-3">
          {whereItGoes.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-24 text-xs text-gray-500 text-right shrink-0">{item.pct}%</div>
              <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden relative">
                <div
                  className={`h-full ${item.color} rounded-full flex items-center transition-all duration-700`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <div className="w-44 text-sm text-gray-700 shrink-0">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          * Approximate allocation. SSS invests contributions in government securities, real estate, and other instruments to grow the fund.
        </p>
      </div>

      {/* Contribution Table (Sample) */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-1">Sample SSS Contribution Table (2025)</h2>
        <p className="text-sm text-gray-500 mb-4">Monthly Salary Credit (MSC) based contribution</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Salary Range</th>
                <th className="text-right py-3 px-3 text-gray-500">MSC</th>
                <th className="text-right py-3 px-3 text-gray-500">EE (4.5%)</th>
                <th className="text-right py-3 px-3 text-gray-500">ER (9.5%)</th>
                <th className="text-right py-3 px-3 text-gray-500">Total</th>
                <th className="text-right py-3 px-3 text-gray-500">EC</th>
              </tr>
            </thead>
            <tbody>
              {sssTable.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.range}</td>
                  <td className="py-2.5 px-3 text-right text-gray-700">{row.msc.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-sky-600">{row.ee.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</td>
                  <td className="py-2.5 px-3 text-right text-gray-600">{row.er.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</td>
                  <td className="py-2.5 px-3 text-right text-gray-900">{row.total.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">{row.ec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          EC = Employees' Compensation (paid by employer). This table shows selected ranges. Full table available at sss.gov.ph.
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-gray-900 mb-1">SSS Benefits & Programs</h2>
        <p className="text-sm text-gray-500 mb-4">What you get from your contributions</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{benefit.desc}</p>
                  <div className="inline-block px-2 py-1 bg-sky-50 text-sky-700 rounded-md text-xs">
                    {benefit.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-sky-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "I'm a freelancer. Do I need to pay SSS?",
              a: "SSS is not mandatory for freelancers, but highly recommended. You can register as a self-employed or voluntary member and pay the full 14% contribution yourself. You'll get the same benefits as employed members.",
            },
            {
              q: "What happens if I stop paying SSS?",
              a: "Your contributions are not lost. You can resume paying anytime. However, your benefit eligibility depends on meeting the required number of contributions within specific periods.",
            },
            {
              q: "How do I check my SSS contributions?",
              a: "You can check online through My.SSS portal at member.sss.gov.ph, or through the SSS Mobile app. You can also inquire at any SSS branch.",
            },
            {
              q: "Can I increase my contribution voluntarily?",
              a: "Self-employed and voluntary members can choose a higher MSC bracket. For employed members, it's based on actual salary declared by the employer.",
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
