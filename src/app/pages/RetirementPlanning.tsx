import { useState } from "react";
import {
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle,
  Calculator,
  DollarSign,
  Clock,
  Target,
} from "lucide-react";

const sssPensionTable = [
  { monthlyCredit: "₱4,000", contributions: 120, monthlyPension: "₱2,400", annualPension: "₱28,800" },
  { monthlyCredit: "₱10,000", contributions: 120, monthlyPension: "₱4,800", annualPension: "₱57,600" },
  { monthlyCredit: "₱15,000", contributions: 120, monthlyPension: "₱6,300", annualPension: "₱75,600" },
  { monthlyCredit: "₱20,000", contributions: 120, monthlyPension: "₱8,100", annualPension: "₱97,200" },
  { monthlyCredit: "₱25,000", contributions: 120, monthlyPension: "₱9,900", annualPension: "₱118,800" },
  { monthlyCredit: "₱30,000", contributions: 120, monthlyPension: "₱11,700", annualPension: "₱140,400" },
  { monthlyCredit: "₱30,000", contributions: 240, monthlyPension: "₱15,000+", annualPension: "₱180,000+" },
  { monthlyCredit: "₱35,000", contributions: 240, monthlyPension: "₱18,000+", annualPension: "₱216,000+" },
];

const retirementMilestones = [
  {
    age: "20-30 (Start Early!)",
    priority: "Build foundation",
    actions: [
      "Start SSS/PhilHealth/Pag-IBIG contributions — don't skip even one month",
      "Build emergency fund: 3-6 months of expenses",
      "Open a Pag-IBIG MP2 account — tax-free 5-7% returns",
      "Start investing even ₱500/month in index funds or mutual funds",
      "Get term life insurance (cheapest in your 20s — ₱5,000-₱15,000/year)",
      "Maximize employer's retirement benefits (if available)",
      "Live below your means — save at least 20% of income",
    ],
    impact: "Starting at 25 with ₱3,000/month at 7% returns = ₱5.8M by age 60. Starting at 35 = ₱2.5M. The difference is MASSIVE.",
  },
  {
    age: "30-40 (Accelerate)",
    priority: "Grow aggressively",
    actions: [
      "Increase investments to 20-30% of income",
      "Diversify: MP2 + stock index funds + bond funds",
      "Maximize SSS contributions (pay the highest bracket you can)",
      "Consider buying property (rental income for retirement)",
      "Increase life insurance coverage as family grows",
      "Start education fund for children (separate from retirement fund)",
      "Review and update your will",
    ],
    impact: "This is your prime earning decade. Aggressive saving now creates the compound interest snowball that funds your retirement.",
  },
  {
    age: "40-50 (Consolidate)",
    priority: "Protect and optimize",
    actions: [
      "Review retirement projections — are you on track?",
      "Shift some aggressive investments to more conservative ones",
      "Pay off mortgage/major debts before retirement",
      "Maximize SSS voluntary contributions if self-employed",
      "Consider additional income streams (side business, rental property)",
      "Get comprehensive health insurance / increase HMO coverage",
      "Plan for healthcare costs in retirement (biggest expense after basic needs)",
    ],
    impact: "By 50, you should have 10-15x your annual expenses saved. If not, increase savings rate dramatically.",
  },
  {
    age: "50-60 (Pre-Retirement)",
    priority: "Final preparations",
    actions: [
      "Calculate exact retirement needs (use calculator below)",
      "Shift to conservative investments (bonds, fixed income, time deposits)",
      "Verify SSS/GSIS contribution records — fix any gaps NOW",
      "Plan healthcare: PhilHealth + HMO + emergency fund for medical",
      "Downsize if needed — smaller home = lower expenses",
      "Create detailed estate plan (will, beneficiaries, property titles)",
      "Consider part-time work or consulting for the first few years of retirement",
    ],
    impact: "The last 10 years before retirement are critical for fine-tuning. Don't make risky investments at this stage.",
  },
  {
    age: "60+ (Retirement)",
    priority: "Enjoy responsibly",
    actions: [
      "File SSS/GSIS pension claim (don't wait — file immediately at 60)",
      "Apply for Senior Citizen ID for 20% discounts",
      "Withdraw Pag-IBIG MP2 savings (or continue if not needed)",
      "Set up systematic withdrawals from investment accounts",
      "Budget carefully: pension + investment income + savings drawdown",
      "Keep PhilHealth active for healthcare coverage",
      "Stay active and engaged — retirement doesn't mean stopping everything",
    ],
    impact: "The goal: live comfortably on pension + investment returns without depleting your savings too quickly. Follow the 4% rule: withdraw max 4% of your portfolio per year.",
  },
];

const retirementIncome = [
  {
    source: "SSS Monthly Pension",
    range: "₱2,400–₱18,000+/month",
    notes: "Based on monthly salary credit and number of contributions. Minimum 120 months (10 years) of contributions to qualify. 13th month pension also given.",
    howToMaximize: "Pay the highest possible monthly salary credit consistently. The longer you contribute, the higher the pension.",
  },
  {
    source: "GSIS Monthly Pension (Government)",
    range: "₱5,000–₱40,000+/month",
    notes: "For government employees. Based on highest salary and years of service. Minimum 15 years of service to qualify for retirement pension.",
    howToMaximize: "Maximize years of service. Higher position = higher salary = higher pension.",
  },
  {
    source: "Pag-IBIG MP2 Savings",
    range: "5-7% annual dividends (tax-free)",
    notes: "Voluntary savings program. 5-year lock-in, but you can keep it longer. Dividends are tax-free. Can be withdrawn as lump sum or in installments.",
    howToMaximize: "Start early, contribute consistently. Annual top-up option available. Reinvest dividends for compound growth.",
  },
  {
    source: "Personal Investments",
    range: "Varies (3-12% annually)",
    notes: "Mutual funds, UITF, stocks, bonds, index funds. Returns depend on asset allocation and market conditions.",
    howToMaximize: "Start in your 20s-30s with aggressive allocation (stocks). Shift to conservative (bonds) as you approach retirement. Diversify across asset classes.",
  },
  {
    source: "Rental Income",
    range: "₱5,000–₱50,000+/month",
    notes: "From owned property (condo, apartment, commercial space). Provides passive monthly income. Must account for maintenance, taxes, and vacancy.",
    howToMaximize: "Buy property in high-demand areas. Maintain the property well. Consider property management services for hassle-free income.",
  },
  {
    source: "Business Income",
    range: "Varies",
    notes: "Small business or online business that can run with minimal supervision. E-commerce, rental businesses, franchises, consulting.",
    howToMaximize: "Build systems that don't require your daily presence. Train staff or use automation. Start while still employed.",
  },
];

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(30000);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [monthlySavings, setMonthlySavings] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(7);

  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const yearsInRetirement = 25;
  const annualExpenses = monthlyExpenses * 12;
  const retirementNeeded = annualExpenses * yearsInRetirement;
  const inflationAdjusted = retirementNeeded * Math.pow(1.05, yearsToRetire);

  const monthlyRate = expectedReturn / 100 / 12;
  const months = yearsToRetire * 12;
  const futureSavings = months > 0
    ? currentSavings * Math.pow(1 + monthlyRate, months) +
      monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    : currentSavings;

  const gap = inflationAdjusted - futureSavings;
  const onTrack = gap <= 0;
  const neededMonthly = gap > 0 && months > 0
    ? (gap * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
    : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-violet-600" />
        <h2 className="text-gray-900">Retirement Calculator</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Current Age</label>
          <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Target Retirement Age</label>
          <input type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Monthly Expenses (₱)</label>
          <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Current Total Savings (₱)</label>
          <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Monthly Savings/Investment (₱)</label>
          <input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Expected Annual Return (%)</label>
          <input type="number" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value) || 0)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="bg-violet-50 rounded-xl p-4 text-center">
          <div className="text-xs text-violet-600 mb-1">Years to Retirement</div>
          <div className="text-violet-900">{yearsToRetire} years</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-xs text-blue-600 mb-1">Retirement Fund Needed</div>
          <div className="text-blue-900">₱{Math.round(inflationAdjusted).toLocaleString()}</div>
          <div className="text-xs text-gray-400">Inflation-adjusted (5%/yr)</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-xs text-green-600 mb-1">Projected Savings</div>
          <div className="text-green-900">₱{Math.round(futureSavings).toLocaleString()}</div>
          <div className="text-xs text-gray-400">At {expectedReturn}% return</div>
        </div>
        <div className={`${onTrack ? "bg-green-50" : "bg-red-50"} rounded-xl p-4 text-center`}>
          <div className={`text-xs ${onTrack ? "text-green-600" : "text-red-600"} mb-1`}>{onTrack ? "Surplus" : "Shortfall"}</div>
          <div className={onTrack ? "text-green-900" : "text-red-900"}>₱{Math.abs(Math.round(gap)).toLocaleString()}</div>
          {!onTrack && <div className="text-xs text-gray-400">Need ₱{Math.round(neededMonthly).toLocaleString()}/mo more</div>}
        </div>
      </div>
      <p className="text-xs text-gray-400">
        * Assumes {yearsInRetirement} years in retirement, 5% annual inflation, and {expectedReturn}% investment returns. Actual results will vary.
        This does not include SSS/GSIS pension, which provides additional monthly income.
      </p>
    </div>
  );
}

const passiveIncomeIdeas = [
  { idea: "Pag-IBIG MP2", effort: "Low", startCost: "₱500+", returns: "5-7% tax-free annually", details: "Best risk-free option. Government-backed. 5-year lock-in but compound growth is powerful." },
  { idea: "Digital Bank High-Yield Savings", effort: "Low", startCost: "₱1+", returns: "3-6% annually", details: "Seabank, Maya, Tonik. Liquid and PDIC-insured up to ₱500,000." },
  { idea: "REITs (Real Estate Investment Trusts)", effort: "Low", startCost: "₱5,000+", returns: "5-8% dividends", details: "AREIT, DDMPR, FILRT, MREIT, RL Commercial. Like owning property without the hassle." },
  { idea: "Bond Funds / Money Market", effort: "Low", startCost: "₱1,000+", returns: "4-6% annually", details: "Lower risk than stocks. Good for near-retirement investors. Available through banks and investment platforms." },
  { idea: "Stock Index Funds (FMETF)", effort: "Low-Medium", startCost: "₱5,000+", returns: "7-12% long-term average", details: "Tracks the PSEi. Diversified across 30 largest PH companies. Best for 10+ year horizon." },
  { idea: "Rental Property", effort: "Medium-High", startCost: "₱1M+ (down payment)", returns: "3-8% of property value/year", details: "Monthly rental income. Must account for vacancy, maintenance, property tax. Consider condo near business districts." },
  { idea: "Online Business / E-commerce", effort: "High (initially)", startCost: "₱5,000-₱50,000", returns: "Varies widely", details: "Shopee/Lazada selling, content creation, freelancing. Can become passive once systems are in place." },
];

export function RetirementPlanning() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-violet-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-violet-100 rounded-xl">
            <Target className="w-6 h-6 text-violet-600" />
          </div>
          <h1 className="text-violet-900">Retirement Planning Guide</h1>
        </div>
        <p className="text-sm text-violet-700 leading-relaxed max-w-2xl">
          How much do you need to retire in the Philippines? SSS/GSIS pension computation,
          investment strategies by age, passive income ideas, retirement calculator, and the
          power of starting early. Your future self will thank you.
        </p>
      </div>

      {/* Reality Check */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-amber-900 mb-1">The Hard Truth About Retirement in the Philippines</h3>
            <p className="text-sm text-amber-700 mb-3">
              According to a Sun Life survey, only 2 out of 10 Filipinos are financially prepared for retirement.
              The average SSS pension is ₱4,000-₱8,000/month — NOT enough to live on.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-white/80 rounded-lg p-3 text-center">
                <div className="text-amber-900">₱9M–₱15M</div>
                <div className="text-xs text-gray-500">Needed for comfortable retirement (25 years)</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-center">
                <div className="text-amber-900">₱4,000–₱18,000</div>
                <div className="text-xs text-gray-500">SSS monthly pension range</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-center">
                <div className="text-amber-900">80%</div>
                <div className="text-xs text-gray-500">Filipinos not prepared for retirement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <RetirementCalculator />

      {/* SSS Pension Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">SSS Pension Estimates</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Based on monthly salary credit and total contributions (minimum 120 months = 10 years)</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Monthly Salary Credit</th>
                <th className="text-left py-3 px-3 text-gray-500">Contributions</th>
                <th className="text-left py-3 px-3 text-gray-500">Est. Monthly Pension</th>
                <th className="text-left py-3 px-3 text-gray-500">Est. Annual Pension</th>
              </tr>
            </thead>
            <tbody>
              {sssPensionTable.map((row, i) => (
                <tr key={i} className="border-b border-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.monthlyCredit}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.contributions} months</td>
                  <td className="py-2.5 px-3 text-green-700">{row.monthlyPension}</td>
                  <td className="py-2.5 px-3 text-green-700">{row.annualPension}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Key:</strong> SSS pension alone is NOT enough for retirement. Treat it as a supplement, not your primary retirement income.
            You need personal savings and investments on top of your SSS pension. Claim your pension at age 60 (with at least 120 months of contributions).
          </p>
        </div>
      </div>

      {/* Retirement Milestones by Age */}
      <div>
        <h2 className="text-gray-900 mb-1">Retirement Milestones by Age</h2>
        <p className="text-sm text-gray-500 mb-4">What you should be doing at every stage</p>
        <div className="space-y-4">
          {retirementMilestones.map((phase) => (
            <details key={phase.age} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 text-sm flex items-center gap-2"><Clock className="w-4 h-4 text-violet-500" /> {phase.age}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Priority: {phase.priority}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-3">
                <div className="space-y-2">
                  {phase.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" /> {action}
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="text-sm text-violet-700"><strong>Impact:</strong> {phase.impact}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Retirement Income Sources */}
      <div>
        <h2 className="text-gray-900 mb-1">Retirement Income Sources</h2>
        <p className="text-sm text-gray-500 mb-4">Build multiple streams — don't rely on just one</p>
        <div className="space-y-3">
          {retirementIncome.map((item) => (
            <div key={item.source} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-gray-800 text-sm">{item.source}</h4>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-xs shrink-0">{item.range}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{item.notes}</p>
              <p className="text-xs text-violet-600"><strong>How to maximize:</strong> {item.howToMaximize}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Passive Income Ideas */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-violet-600" />
          <h2 className="text-gray-900">Passive Income Ideas for Retirement</h2>
        </div>
        <div className="space-y-3">
          {passiveIncomeIdeas.map((item) => (
            <div key={item.idea} className="p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1">
                <h4 className="text-gray-800 text-sm">{item.idea}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.details}</p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <span className="px-2 py-1 bg-violet-50 text-violet-700 rounded text-xs">Effort: {item.effort}</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{item.returns}</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Start: {item.startCost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 4% Rule */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <h2 className="text-green-900 mb-3">The 4% Rule (Safe Withdrawal Rate)</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">How It Works</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Withdraw max 4% of your total portfolio in year 1</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Adjust for inflation each subsequent year</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> This rate has historically sustained portfolios for 30+ years</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 shrink-0" /> Example: ₱10M portfolio → withdraw ₱400,000/year (₱33,333/month)</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-green-800 mb-2">How Much Do You Need? (4% Rule)</h4>
            <div className="space-y-2">
              {[
                { monthly: "₱20,000", portfolio: "₱6,000,000" },
                { monthly: "₱30,000", portfolio: "₱9,000,000" },
                { monthly: "₱50,000", portfolio: "₱15,000,000" },
                { monthly: "₱80,000", portfolio: "₱24,000,000" },
                { monthly: "₱100,000", portfolio: "₱30,000,000" },
              ].map((row) => (
                <div key={row.monthly} className="flex justify-between p-2 bg-white/60 rounded-lg text-sm">
                  <span className="text-gray-600">Need {row.monthly}/month</span>
                  <span className="text-green-700">Save {row.portfolio}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">* Does not include SSS/GSIS pension which supplements this</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-violet-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "When can I start claiming my SSS pension?", a: "At age 60 (for those who stopped contributing) or 65 (for those still employed/contributing). You must have at least 120 monthly contributions (10 years). File at any SSS branch. You can also apply for an advance pension while waiting for processing." },
            { q: "How much should I save for retirement?", a: "A common target is 25x your annual expenses (based on the 4% rule). If you spend ₱30,000/month, you need ₱9,000,000. However, SSS pension, PhilHealth benefits, and senior citizen discounts reduce this. A realistic target for comfortable retirement: ₱5M-₱15M depending on lifestyle." },
            { q: "I'm 40 and haven't saved anything. Is it too late?", a: "It's never too late, but you need to be aggressive. Save 30-50% of income if possible. Maximize SSS contributions. Open MP2 immediately. Consider working past 60 part-time. Even 20 years of disciplined saving can build a decent retirement fund." },
            { q: "Should I rely on my children for retirement?", a: "While Filipino culture often involves children supporting parents, don't make this your plan. Many adult children struggle financially themselves. Build your own retirement fund so you're a blessing, not a burden. If your children help, treat it as a bonus, not a necessity." },
            { q: "What about inflation?", a: "Inflation in the Philippines averages 4-6% annually. This means ₱30,000 today will only have the purchasing power of ~₱11,000 in 20 years. Your investments must beat inflation — that's why savings accounts alone (2-3%) aren't enough. You need higher-returning investments like MP2, stocks, or REITs." },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-gray-800 mb-2">{item.q}</h4>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-6 text-white text-center">
        <h2 className="text-white mb-2">The Best Time to Start Was Yesterday. The Second Best Time Is Now.</h2>
        <p className="text-violet-100 text-sm max-w-lg mx-auto">
          Open a Pag-IBIG MP2 account, set up automatic SSS contributions, and start investing even ₱500/month.
          Compound interest does the heavy lifting — but only if you start.
        </p>
      </div>
    </div>
  );
}
