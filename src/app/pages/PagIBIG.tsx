import { useState } from "react";
import { Building2, Calculator, CheckCircle2, HelpCircle, PieChart, Home as HomeIcon } from "lucide-react";

const loanTypes = [
  {
    title: "Housing Loan",
    desc: "Finance your dream home with Pag-IBIG's affordable housing loan. Lower interest rates compared to bank loans.",
    details: [
      "Loan amount: Up to PHP 6,000,000",
      "Interest rate: 5.375% (first 5 years) for socialized housing; 6.375% for low-cost; market rate for others",
      "Loan term: Up to 30 years",
      "Requirement: At least 24 monthly contributions",
    ],
  },
  {
    title: "Multi-Purpose Loan (MPL)",
    desc: "Borrow for any purpose - medical, tuition, home improvement, livelihood, etc.",
    details: [
      "Loan amount: Up to 80% of total savings (max PHP 80,000 for MPL Loyalty Card Plus)",
      "Interest rate: 10.5% per annum (diminishing)",
      "Loan term: 24 months",
      "Requirement: At least 24 monthly contributions, 1 within the last 6 months",
    ],
  },
  {
    title: "Calamity Loan",
    desc: "Financial assistance for members affected by calamities declared by the government.",
    details: [
      "Loan amount: Up to 80% of total savings (max depends on area declaration)",
      "Interest rate: 5.95% per annum (diminishing)",
      "Loan term: 24 months",
      "Requirement: At least 24 contributions, affected area must be declared under state of calamity",
    ],
  },
];

export function PagIBIG() {
  const [salary, setSalary] = useState("");
  const salaryNum = parseFloat(salary) || 0;

  const computePagIBIG = (monthly: number) => {
    if (monthly <= 0) return { ee: 0, er: 0, total: 0 };
    let eeRate = monthly <= 1500 ? 0.01 : 0.02;
    const ee = Math.min(monthly * eeRate, 200);
    const er = Math.min(monthly * 0.02, 200);
    return { ee, er, total: ee + er };
  };

  const pag = computePagIBIG(salaryNum);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-amber-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-amber-100 rounded-xl">
            <Building2 className="w-6 h-6 text-amber-600" />
          </div>
          <h1 className="text-amber-900">Pag-IBIG Fund (HDMF)</h1>
        </div>
        <p className="text-sm text-amber-700 leading-relaxed max-w-2xl">
          The Home Development Mutual Fund (Pag-IBIG) is a provident savings system that
          provides housing finance and short-term loans to Filipino workers. It's essentially
          a mandatory savings program that you can borrow against.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-amber-600" />
          <h2 className="text-gray-900">Pag-IBIG Contribution Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Monthly Salary (PHP)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. 25000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">
              Employee: 1% (if salary &le; PHP 1,500) or 2% | Employer: 2% | Max PHP 200 each
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="text-xs text-amber-500 mb-1">Your Monthly Contribution (Employee)</div>
              <div className="text-2xl text-amber-700">
                PHP {pag.ee.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Employer Share</div>
                <div className="text-gray-800">
                  PHP {pag.er.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Total Savings</div>
                <div className="text-gray-800">
                  PHP {pag.total.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">How Pag-IBIG Works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-amber-50 rounded-xl text-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-700">1</span>
            </div>
            <h4 className="text-amber-800 mb-1">You Contribute</h4>
            <p className="text-xs text-amber-600">
              Monthly contributions are deducted from your salary. Your employer also contributes.
            </p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl text-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-700">2</span>
            </div>
            <h4 className="text-amber-800 mb-1">Savings Grow</h4>
            <p className="text-xs text-amber-600">
              Your total accumulated value (TAV) earns dividends. Recent dividend rate: ~6-7% annually.
            </p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl text-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-700">3</span>
            </div>
            <h4 className="text-amber-800 mb-1">Access Benefits</h4>
            <p className="text-xs text-amber-600">
              Apply for housing loans, multi-purpose loans, or withdraw savings after 20 years or at age 65.
            </p>
          </div>
        </div>
      </div>

      {/* Where Money Goes */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-amber-600" />
          <h2 className="text-gray-900">Where Your Pag-IBIG Money Goes</h2>
        </div>
        <div className="space-y-3">
          {[
            { label: "Member Savings (TAV)", pct: 60, desc: "Goes directly to your personal savings account (Total Accumulated Value)", color: "bg-amber-500" },
            { label: "Housing Loan Fund", pct: 25, desc: "Used to provide affordable housing loans to members", color: "bg-yellow-500" },
            { label: "Short-term Loan Fund", pct: 10, desc: "Funds multi-purpose and calamity loans", color: "bg-orange-400" },
            { label: "Operations & Admin", pct: 5, desc: "Running Pag-IBIG offices and processing", color: "bg-gray-400" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-800">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.pct}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            Unlike SSS and PhilHealth, your Pag-IBIG contributions are actual savings. You can withdraw your TAV (Total Accumulated Value) after 20 years of membership or upon reaching age 65.
          </p>
        </div>
      </div>

      {/* MP2 Savings */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <HomeIcon className="w-5 h-5 text-green-600" />
          <h2 className="text-green-900">Pag-IBIG MP2 (Modified Pag-IBIG 2)</h2>
        </div>
        <p className="text-sm text-green-700 mb-4">
          MP2 is a voluntary savings program with higher dividends than regular Pag-IBIG savings.
          It's one of the best low-risk investment options in the Philippines!
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">Key Features</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Minimum PHP 500/month (no maximum)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> 5-year maturity period</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Dividend rate: ~6-7% per year (tax-free!)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Dividends are tax-exempt</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Government-backed (very low risk)</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">How to Enroll</h4>
            <ol className="text-sm text-green-700 space-y-2">
              <li>1. Must be an active Pag-IBIG member</li>
              <li>2. Register online at pagibigfundservices.com or visit a branch</li>
              <li>3. Choose savings amount and payment frequency</li>
              <li>4. Pay via banks, GCash, Maya, or over-the-counter</li>
              <li>5. Renew after 5-year maturity</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Loan Types */}
      <div>
        <h2 className="text-gray-900 mb-1">Pag-IBIG Loan Programs</h2>
        <p className="text-sm text-gray-500 mb-4">Borrow from your contributions</p>
        <div className="space-y-4">
          {loanTypes.map((loan) => (
            <div key={loan.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-900 mb-1">{loan.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{loan.desc}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {loan.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {detail}
                  </div>
                ))}
              </div>
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
            {
              q: "Can I withdraw my Pag-IBIG savings?",
              a: "Yes! You can withdraw your TAV (Total Accumulated Value) after 20 years of membership, at age 65, upon permanent departure from the country, permanent disability, insanity, or upon separation from service (for OFW members).",
            },
            {
              q: "How do I check my Pag-IBIG contributions?",
              a: "You can check online via the Pag-IBIG Virtual Office at pagibigfund.gov.ph, through the Pag-IBIG mobile app, or by visiting any Pag-IBIG branch with a valid ID.",
            },
            {
              q: "What's the maximum Pag-IBIG housing loan?",
              a: "Up to PHP 6,000,000 for members with at least 24 monthly contributions. The actual approved amount depends on your capacity to pay (net disposable income), age at loan maturity, and property appraisal value.",
            },
            {
              q: "Is Pag-IBIG mandatory for freelancers?",
              a: "Pag-IBIG is mandatory for all employees but voluntary for self-employed and freelancers. However, enrolling is highly recommended because of MP2 savings, housing loan access, and multi-purpose loans.",
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
