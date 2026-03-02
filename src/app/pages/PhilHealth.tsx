import { useState } from "react";
import { Heart, Calculator, CheckCircle2, AlertTriangle, HelpCircle, PieChart } from "lucide-react";

const premiumSchedule = [
  { year: "2025-2026", rate: "5%", floor: "10,000", ceiling: "100,000", minPremium: "500", maxPremium: "5,000" },
];

const coverageItems = [
  {
    category: "Inpatient Benefits",
    items: [
      "Room & Board (based on case rate)",
      "Drugs & Medicines",
      "Laboratory & Diagnostic Procedures",
      "Operating Room Fees",
      "Professional Fees (doctors, surgeons, anesthesiologists)",
    ],
  },
  {
    category: "Outpatient Benefits",
    items: [
      "Primary Care Benefit (PHP 2,500/year for consultations)",
      "Outpatient malaria treatment",
      "Animal bite treatment (anti-rabies)",
      "Outpatient HIV/AIDS Treatment (OHAT)",
      "TB DOTS",
      "Outpatient drug rehabilitation",
    ],
  },
  {
    category: "Z Benefits (Catastrophic Packages)",
    items: [
      "Breast Cancer",
      "Prostate Cancer",
      "Acute Lymphocytic Leukemia (children)",
      "Kidney transplant",
      "Coronary Artery Bypass Graft",
    ],
  },
  {
    category: "Special Benefits",
    items: [
      "Maternity Care Package (NSD: PHP 6,500 / CS: PHP 19,000)",
      "Newborn Care Package (PHP 1,750)",
      "COVID-19 treatment packages",
      "Mental health coverage",
    ],
  },
];

export function PhilHealth() {
  const [salary, setSalary] = useState("");
  const salaryNum = parseFloat(salary) || 0;

  const computePhilHealth = (monthly: number) => {
    if (monthly <= 0) return { total: 0, ee: 0, er: 0 };
    const base = Math.min(Math.max(monthly, 10000), 100000);
    const total = base * 0.05;
    return { total, ee: total / 2, er: total / 2 };
  };

  const ph = computePhilHealth(salaryNum);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-green-100 rounded-xl">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <h1 className="text-green-900">PhilHealth</h1>
        </div>
        <p className="text-sm text-green-700 leading-relaxed max-w-2xl">
          The Philippine Health Insurance Corporation (PhilHealth) provides national health
          insurance for all Filipinos. As of 2025, the premium rate is 5% of monthly basic
          salary, shared equally between employee and employer.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">PhilHealth Premium Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Monthly Basic Salary (PHP)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. 25000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">
              Rate: 5% | Split equally: 2.5% Employee + 2.5% Employer
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-xs text-green-500 mb-1">Your Monthly Share (Employee)</div>
              <div className="text-2xl text-green-700">
                PHP {ph.ee.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Employer Share</div>
                <div className="text-gray-800">
                  PHP {ph.er.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Total Premium</div>
                <div className="text-gray-800">
                  PHP {ph.total.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Schedule */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Premium Rate Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-gray-500">Year</th>
                <th className="text-left py-3 px-4 text-gray-500">Rate</th>
                <th className="text-left py-3 px-4 text-gray-500">Salary Floor</th>
                <th className="text-left py-3 px-4 text-gray-500">Salary Ceiling</th>
                <th className="text-left py-3 px-4 text-gray-500">Min Premium</th>
                <th className="text-left py-3 px-4 text-gray-500">Max Premium</th>
              </tr>
            </thead>
            <tbody>
              {premiumSchedule.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 bg-green-50">
                  <td className="py-3 px-4 text-gray-800">{row.year}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-700">{row.rate}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">PHP {row.floor}</td>
                  <td className="py-3 px-4 text-gray-600">PHP {row.ceiling}</td>
                  <td className="py-3 px-4 text-gray-600">PHP {row.minPremium}</td>
                  <td className="py-3 px-4 text-gray-600">PHP {row.maxPremium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          * Premium rate is scheduled to increase incrementally up to 5% (achieved in 2024-2025 schedule).
          The salary ceiling continues to increase over time.
        </p>
      </div>

      {/* Where Money Goes */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">Where Your PhilHealth Premiums Go</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Benefit Payments (Claims)", pct: "~70%", desc: "Pays for hospitalization, surgeries, and medical claims of members", color: "bg-green-500" },
            { label: "Reserve Fund", pct: "~15%", desc: "Actuarial reserves to ensure long-term sustainability of the fund", color: "bg-emerald-400" },
            { label: "Administrative & Operational", pct: "~10%", desc: "Running PhilHealth offices, IT systems, processing claims", color: "bg-teal-400" },
            { label: "Health Programs", pct: "~5%", desc: "Preventive care programs, health promotions, community health", color: "bg-green-300" },
          ].map((item) => (
            <div key={item.label} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-800">{item.label}</span>
                <span className="ml-auto text-xs text-gray-500">{item.pct}</span>
              </div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage */}
      <div>
        <h2 className="text-gray-900 mb-1">What PhilHealth Covers</h2>
        <p className="text-sm text-gray-500 mb-4">Comprehensive healthcare coverage for members and dependents</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {coverageItems.map((cat) => (
            <div key={cat.category} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-900 mb-3">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Dependents */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <h2 className="text-green-900 mb-3">Who Can You Cover as Dependents?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Qualified Dependents (Free!)</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Spouse (legal)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Children below 21 years old</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Children 21+ if with disability</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Parents (if senior citizens without own PhilHealth)</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Important Notes</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Only up to 4 dependents can be enrolled</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Common-law partners are NOT covered</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Siblings are NOT covered</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 3 months qualifying contributions for employed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">Good to Know</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "What is a PhilHealth case rate?",
              a: "Instead of itemized billing, PhilHealth uses case rates - a fixed payment for specific medical cases. For example, pneumonia has a fixed case rate. This protects you from excessive hospital charges.",
            },
            {
              q: "How do I use PhilHealth in a hospital?",
              a: "Present your PhilHealth ID or number upon admission. If the hospital is accredited, they can directly deduct PhilHealth coverage from your bill. Otherwise, you pay first and file a claim for reimbursement.",
            },
            {
              q: "Do I still need HMO if I have PhilHealth?",
              a: "PhilHealth is basic coverage. HMO provides additional coverage for outpatient consultations, annual check-ups, and higher room accommodations. Many employers provide HMO as a benefit on top of PhilHealth.",
            },
            {
              q: "I'm a freelancer. How do I register?",
              a: "Register as a Direct Contributor (Informal Economy) at any PhilHealth office. You'll pay the full premium yourself. You can also register online at member.philhealth.gov.ph.",
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
