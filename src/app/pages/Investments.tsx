import { useState } from "react";
import { TrendingUp, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Star, Calculator, BarChart3, Shield, Landmark, Building2, Globe, Coins, PiggyBank } from "lucide-react";

const investmentTypes = [
  {
    name: "Pag-IBIG MP2 Savings",
    icon: Building2,
    risk: "Very Low",
    riskColor: "bg-green-100 text-green-700",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-600",
    returnRate: "6-7% p.a. (tax-free!)",
    minInvestment: "PHP 500/month",
    description: "The Modified Pag-IBIG 2 (MP2) is one of the best low-risk investment options in the Philippines. It offers higher returns than bank savings, and all earnings are TAX-FREE.",
    howItWorks: [
      "Must be an active Pag-IBIG member (at least 1 month contribution)",
      "Open MP2 account online at pagibigfundservices.com or at any Pag-IBIG branch",
      "Choose payment schedule: monthly, quarterly, semi-annual, annual, or one-time",
      "Minimum PHP 500 per payment (no maximum!)",
      "5-year maturity period from first contribution",
      "Dividends are computed annually and compounded",
      "At maturity: withdraw everything or re-enroll for another 5 years",
    ],
    pros: [
      "Tax-free dividends (unlike bank interest taxed at 20%)",
      "Government-backed (very safe)",
      "Higher returns than most savings accounts (6-7% vs 0.25-4%)",
      "Can contribute any amount above PHP 500",
      "Easy to pay via GCash, Maya, banks, or over-the-counter",
    ],
    cons: [
      "5-year lock-in period (can't withdraw early without penalty)",
      "Not as liquid as savings accounts",
      "Returns depend on Pag-IBIG Fund performance each year",
    ],
    howToPay: "GCash (Bills > Government > Pag-IBIG MP2), Maya, Bayad Center, bank transfer, or Pag-IBIG branch",
  },
  {
    name: "Philippine Stock Exchange (PSE)",
    icon: BarChart3,
    risk: "High",
    riskColor: "bg-red-100 text-red-700",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-600",
    returnRate: "Variable (-30% to +50%+ p.a.)",
    minInvestment: "PHP 1,000-5,000",
    description: "Buy shares of publicly listed Philippine companies (Jollibee, SM, Ayala, BDO, etc.) through the Philippine Stock Exchange. Potential for high returns but also high risk.",
    howItWorks: [
      "Open a brokerage account with a PSE-accredited online broker",
      "Fund your account via bank transfer",
      "Research companies and buy/sell shares via the broker's platform",
      "Trading hours: Mon-Fri, 9:30 AM - 1:00 PM (pre-close at 12:00 PM)",
      "Settlement is T+2 (you receive shares 2 days after purchase)",
      "Income sources: Capital gains (buy low, sell high) + dividends",
    ],
    pros: [
      "Highest potential returns among traditional investments",
      "Liquidity - can sell during trading hours",
      "Ownership of actual companies",
      "Dividends provide passive income",
      "Low minimum investment (board lot as low as PHP 5)",
    ],
    cons: [
      "High risk - you can lose money",
      "Requires time to research and monitor",
      "Transaction costs: broker commission + VAT + stock transaction tax",
      "Emotional discipline needed (don't panic sell!)",
      "PSEi has underperformed in recent years",
    ],
    howToPay: "Fund via bank transfer to your broker account",
  },
  {
    name: "Mutual Funds",
    icon: PiggyBank,
    risk: "Low to Medium",
    riskColor: "bg-yellow-100 text-yellow-700",
    color: "bg-green-50 border-green-200",
    accent: "text-green-600",
    returnRate: "3-12% p.a. (depends on fund type)",
    minInvestment: "PHP 1,000-5,000",
    description: "Pool your money with other investors, managed by a professional fund manager. Great for beginners who don't want to pick individual stocks.",
    howItWorks: [
      "Choose a mutual fund company (e.g., BPI Investment Management, Sun Life, BDO)",
      "Select a fund type: Equity (stocks), Bond (fixed income), Balanced, or Money Market",
      "Open an account with the fund company (online or branch)",
      "Invest your money - it gets pooled with other investors",
      "Fund manager handles all the buying/selling decisions",
      "You earn returns based on the fund's performance (NAVPU)",
      "You can redeem (sell) your investment anytime (T+3 to T+7 processing)",
    ],
    pros: [
      "Professional fund management (you don't need to pick stocks)",
      "Diversification - your money is spread across many assets",
      "Low minimum investment",
      "Regulated by SEC (Securities and Exchange Commission)",
      "Various risk levels to choose from",
    ],
    cons: [
      "Management fees (1-2% per year) eat into returns",
      "No control over what the fund buys/sells",
      "Past performance doesn't guarantee future returns",
      "Redemption takes 3-7 business days",
    ],
    howToPay: "Bank transfer, GCash (GInvest), or direct through fund company",
  },
  {
    name: "UITF (Unit Investment Trust Fund)",
    icon: Landmark,
    risk: "Low to Medium",
    riskColor: "bg-yellow-100 text-yellow-700",
    color: "bg-indigo-50 border-indigo-200",
    accent: "text-indigo-600",
    returnRate: "3-12% p.a. (depends on fund type)",
    minInvestment: "PHP 1,000-10,000",
    description: "Similar to mutual funds but offered by banks (not investment companies). UITFs are the most accessible investment product for beginners with a bank account.",
    howItWorks: [
      "Available through banks: BDO, BPI, Metrobank, UnionBank, etc.",
      "Choose fund type: Equity, Bond, Balanced, Money Market, Feeder Fund",
      "Open a UITF account at your bank (online or branch)",
      "Invest minimum required amount",
      "Bank's trust department manages the fund",
      "Track performance via NAVPU (published daily)",
      "Redeem anytime (processing time varies: T+1 to T+5)",
    ],
    pros: [
      "Easy to start if you already have a bank account",
      "Managed by bank's trust department",
      "Can subscribe/redeem via online banking",
      "Wide variety of fund options",
      "Lower barrier to entry than direct stock investing",
    ],
    cons: [
      "Trust fees (0.5-2% per year)",
      "Performance depends on fund manager",
      "Not PDIC-insured (unlike savings deposits)",
      "Minimum maintaining amount may apply",
    ],
    howToPay: "Through your bank's online banking or over-the-counter",
  },
  {
    name: "Government Bonds (RTBs & T-Bills)",
    icon: Shield,
    risk: "Very Low",
    riskColor: "bg-green-100 text-green-700",
    color: "bg-teal-50 border-teal-200",
    accent: "text-teal-600",
    returnRate: "5-7% p.a. (fixed)",
    minInvestment: "PHP 5,000 (RTB)",
    description: "Lend money to the Philippine government and earn fixed interest. Retail Treasury Bonds (RTBs) are the most accessible. Extremely low risk as they're backed by the government.",
    howItWorks: [
      "Wait for BTr (Bureau of the Treasury) to announce a new RTB offering",
      "RTBs are offered periodically (not always available)",
      "Apply through authorized banks: BDO, BPI, Landbank, Metrobank, etc.",
      "Minimum investment: PHP 5,000",
      "Fixed coupon rate (interest rate) paid quarterly",
      "Maturity: typically 5-10 years",
      "Can sell before maturity in the secondary market (through your bank)",
    ],
    pros: [
      "Backed by the Philippine government (extremely safe)",
      "Higher returns than bank savings (5-7%)",
      "Fixed interest paid quarterly",
      "Can sell before maturity",
      "Interest income taxed at only 20% (lower than personal income tax rate for most)",
    ],
    cons: [
      "Not always available (offered periodically)",
      "Money is locked for the bond's term (unless you sell in secondary market)",
      "Secondary market selling may result in loss if rates have risen",
      "Minimum PHP 5,000 investment per offering",
    ],
    howToPay: "Through participating banks during offering period",
  },
  {
    name: "Index Funds / ETFs",
    icon: BarChart3,
    risk: "Medium",
    riskColor: "bg-orange-100 text-orange-700",
    color: "bg-violet-50 border-violet-200",
    accent: "text-violet-600",
    returnRate: "5-15% p.a. (long-term average)",
    minInvestment: "PHP 1,000",
    description: "Passively managed funds that track a market index (like the PSEi for Philippine stocks or S&P 500 for US stocks). Lower fees than actively managed funds.",
    howItWorks: [
      "Choose an index fund: PSEi Index Fund (tracks top 30 PH stocks) or international index funds",
      "For PH: BPI Philippine Stock Index Fund, FAMI SALEF, or PSE-listed FMETF",
      "For international: GCash GInvest global funds, or use international brokers (eToro, GoTrade)",
      "Buy units/shares at current NAVPU/price",
      "The fund automatically mirrors the index composition",
      "Hold for long-term (5-10+ years) for best results",
    ],
    pros: [
      "Very low management fees (0.25-0.75%)",
      "Instant diversification across 30+ companies",
      "No need to pick individual stocks",
      "Proven long-term performance (globally)",
      "Great for beginners and passive investors",
    ],
    cons: [
      "You can't outperform the market (you ARE the market)",
      "Still subject to market downturns",
      "PSEi has underperformed globally in recent years",
      "Limited options for PH-listed index funds/ETFs",
    ],
    howToPay: "Through mutual fund companies, banks (UITF), or stock brokers (FMETF)",
  },
  {
    name: "Digital Investments (Apps)",
    icon: Globe,
    risk: "Varies",
    riskColor: "bg-purple-100 text-purple-700",
    color: "bg-pink-50 border-pink-200",
    accent: "text-pink-600",
    returnRate: "Varies by platform and product",
    minInvestment: "PHP 50-1,000",
    description: "Modern apps that make investing accessible to everyone. From local stock trading to global stocks, these platforms have democratized investing.",
    howItWorks: [
      "Download the app, create an account, verify your identity",
      "Fund your account via bank transfer or e-wallet",
      "Choose your investment products",
      "Start investing with as little as PHP 50-1,000",
      "Monitor your portfolio through the app",
    ],
    pros: [
      "Very accessible - start with small amounts",
      "User-friendly interfaces for beginners",
      "Access to global markets (US stocks, crypto, etc.)",
      "Educational content often included",
    ],
    cons: [
      "Some platforms charge higher fees for convenience",
      "May not have full features of traditional brokers",
      "Some international platforms may have tax implications",
      "Always verify if the platform is SEC/BSP-regulated",
    ],
    howToPay: "Bank transfer, GCash, Maya, or debit card",
  },
  {
    name: "Real Estate",
    icon: Building2,
    risk: "Medium",
    riskColor: "bg-orange-100 text-orange-700",
    color: "bg-stone-50 border-stone-200",
    accent: "text-stone-600",
    returnRate: "5-15% p.a. (appreciation + rental)",
    minInvestment: "PHP 5,000/month (pre-selling) or PHP 500K+ (REIT)",
    description: "Invest in real property for rental income and capital appreciation, or through REITs (Real Estate Investment Trusts) for smaller amounts.",
    howItWorks: [
      "Direct: Buy pre-selling condo/house (installment) or ready-for-occupancy (RFO)",
      "REIT: Buy shares of publicly listed REITs on the PSE (AREIT, DDMP, MREIT, etc.)",
      "Rental: Buy property and rent it out for passive income",
      "Flipping: Buy undervalued property, improve it, sell at a profit",
      "Crowdfunding: Some platforms allow fractional real estate investing",
    ],
    pros: [
      "Tangible asset that you can use",
      "Potential for both rental income and appreciation",
      "Leverage through Pag-IBIG or bank housing loans",
      "REITs: invest in real estate with as little as PHP 500",
      "Real estate generally appreciates over long term",
    ],
    cons: [
      "Very high capital required for direct ownership",
      "Illiquid - hard to sell quickly",
      "Property taxes, maintenance, and HOA fees",
      "Real estate market can also decline",
      "REITs: subject to stock market volatility",
    ],
    howToPay: "Developer installment, bank/Pag-IBIG housing loan, or PSE broker (REITs)",
  },
];

const platforms = [
  {
    name: "Investa",
    type: "Stock Trading Community & Tools",
    what: "Not a broker but a stock market research platform with charting tools, virtual trading, and a community of traders",
    features: [
      "InvestaPrime: Premium charting and screener tools",
      "InvestaJournal: Track your trades",
      "Virtual trading for practice",
      "Active community of Filipino stock traders",
      "InvestaCup: Trading competition",
      "Educational content and webinars",
    ],
    cost: "Free (basic) | InvestaPrime: PHP 499-1,299/month",
    note: "Use Investa for research + community, then execute trades through a broker like COL or BPI Trade",
  },
  {
    name: "COL Financial",
    type: "Online Stock Broker",
    what: "The most popular online stock broker in the Philippines. Directly buy and sell stocks on the PSE.",
    features: [
      "Direct access to PSE trading",
      "Research reports and analysis",
      "COL Fund Source (mutual funds/UITFs in one platform)",
      "Real-time stock quotes and charts",
      "Easy online account opening",
      "Minimum PHP 1,000 initial deposit (per fund) or PHP 5,000 (stocks)",
    ],
    cost: "Commission: 0.25% of transaction value (min PHP 20)",
    note: "Best for beginners who want a full-service online broker",
  },
  {
    name: "BPI Trade",
    type: "Bank-based Stock Broker",
    what: "BPI's online stock trading platform. Integrated with your BPI bank account for easy funding.",
    features: [
      "Integrated with BPI banking app",
      "Direct PSE trading",
      "Real-time quotes and research",
      "Easy fund transfer from BPI account",
      "Mobile app available",
    ],
    cost: "Commission: 0.25% (min PHP 20)",
    note: "Best if you already have a BPI bank account",
  },
  {
    name: "GCash GInvest",
    type: "In-app Investment",
    what: "Invest in mutual funds directly through the GCash app. Powered by ATRAM and other fund managers.",
    features: [
      "Start investing with as low as PHP 50",
      "Multiple fund options (Equity, Bond, Balanced, Global)",
      "ATRAM Total Return Peso Bond Fund (popular)",
      "ATRAM Global Equity Fund (international exposure)",
      "Easy top-up via GCash balance",
      "Simple interface for beginners",
    ],
    cost: "No transaction fee; fund management fees apply (built into NAVPU)",
    note: "Most accessible investment platform for Filipinos who already use GCash",
  },
  {
    name: "GoTrade",
    type: "US Stock Broker",
    what: "Trade US stocks (Apple, Tesla, Google, etc.) with as little as $1. Fractional shares available.",
    features: [
      "Buy fractional shares of US stocks",
      "Start with as little as $1 (approximately PHP 56)",
      "Access to NYSE and NASDAQ",
      "Zero commission trading",
      "Fund via bank transfer or e-wallet",
      "SEC (US) regulated",
    ],
    cost: "Zero commission; forex markup on funding",
    note: "Best for accessing US stock market from the Philippines",
  },
  {
    name: "eToro",
    type: "Global Trading Platform",
    what: "Trade global stocks, ETFs, crypto, and more. Known for social/copy trading features.",
    features: [
      "Copy trading: automatically copy expert traders",
      "Global stocks, ETFs, crypto, commodities, forex",
      "Social trading community",
      "Virtual portfolio for practice ($100K virtual money)",
      "Mobile and desktop apps",
    ],
    cost: "Zero commission on stocks; spreads on other assets; $5 withdrawal fee",
    note: "Best for those who want global diversification and social trading",
  },
  {
    name: "Seedbox (SeedIn / Seedbox.ph)",
    type: "Crowdfunding / P2P Lending",
    what: "Peer-to-peer lending and crowdfunding platform. Lend money to SMEs and earn interest.",
    features: [
      "Invest in SME loans",
      "Returns: 10-15% p.a. (target)",
      "Minimum investment: PHP 1,000 per loan",
      "Multiple borrower options to diversify",
      "SEC-registered",
    ],
    cost: "Platform fees built into returns",
    note: "Higher risk than bonds/savings but potentially higher returns. Diversify across multiple loans.",
  },
];

const investmentOrder = [
  { step: "1", name: "Emergency Fund", detail: "3-6 months expenses in high-yield savings (Maya, Tonik)", risk: "None", color: "bg-green-50 text-green-700" },
  { step: "2", name: "Pag-IBIG MP2", detail: "Tax-free 6-7% returns, government-backed. Start here!", risk: "Very Low", color: "bg-emerald-50 text-emerald-700" },
  { step: "3", name: "Gov't Bonds (RTB)", detail: "5-7% fixed returns when available. Very safe.", risk: "Very Low", color: "bg-teal-50 text-teal-700" },
  { step: "4", name: "Index Fund / UITF", detail: "Diversified stock exposure with low fees", risk: "Medium", color: "bg-blue-50 text-blue-700" },
  { step: "5", name: "Individual Stocks", detail: "Once you understand the market. Start with blue chips.", risk: "High", color: "bg-orange-50 text-orange-700" },
  { step: "6", name: "Real Estate / REIT", detail: "Tangible asset or REIT for passive income", risk: "Medium-High", color: "bg-amber-50 text-amber-700" },
];

export function Investments() {
  const [mp2Monthly, setMp2Monthly] = useState("");
  const mp2Num = parseFloat(mp2Monthly) || 0;
  const mp2Rate = 0.065; // 6.5% average
  const mp2Years = 5;
  let mp2Total = 0;
  for (let i = 0; i < mp2Years * 12; i++) {
    mp2Total = (mp2Total + mp2Num) * (1 + mp2Rate / 12);
  }
  const mp2Contributed = mp2Num * mp2Years * 12;
  const mp2Earnings = mp2Total - mp2Contributed;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-violet-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-violet-100 rounded-xl">
            <TrendingUp className="w-6 h-6 text-violet-600" />
          </div>
          <h1 className="text-violet-900">Philippine Investment Guide</h1>
        </div>
        <p className="text-sm text-violet-700 leading-relaxed max-w-2xl">
          From the safest government-backed options (MP2, bonds) to stocks and real estate -
          learn how to grow your money in the Philippines. Includes platforms, brokers, and
          step-by-step guides for every investment type.
        </p>
      </div>

      {/* Investment Priority */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Investment Priority Order (Start Here!)</h2>
        <p className="text-sm text-gray-500 mb-4">Follow this order - don't skip steps!</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {investmentOrder.map((item) => (
            <div key={item.step} className={`rounded-xl p-4 border ${item.color}`}>
              <div className="text-2xl mb-1">Step {item.step}</div>
              <h4 className="mb-1">{item.name}</h4>
              <p className="text-sm opacity-80 mb-2">{item.detail}</p>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                item.risk === "None" ? "bg-green-200 text-green-800" :
                item.risk === "Very Low" ? "bg-emerald-200 text-emerald-800" :
                item.risk === "Medium" ? "bg-yellow-200 text-yellow-800" :
                item.risk === "High" ? "bg-red-200 text-red-800" :
                "bg-orange-200 text-orange-800"
              }`}>
                Risk: {item.risk}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MP2 Calculator */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-amber-600" />
          <h2 className="text-amber-900">MP2 Savings Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Monthly MP2 Contribution (PHP)</label>
            <input
              type="number"
              value={mp2Monthly}
              onChange={(e) => setMp2Monthly(e.target.value)}
              placeholder="e.g. 2000"
              className="w-full px-4 py-3 border border-amber-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">
              Estimated at 6.5% annual dividend rate (average of recent years). 5-year maturity.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-white/80 rounded-xl p-4">
              <div className="text-xs text-amber-500 mb-1">Total After 5 Years</div>
              <div className="text-2xl text-amber-700">
                PHP {mp2Total.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">You Contributed</div>
                <div className="text-gray-800">
                  PHP {mp2Contributed.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-green-500 mb-1">Tax-Free Earnings</div>
                <div className="text-green-700">
                  PHP {mp2Earnings.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Types */}
      <div>
        <h2 className="text-gray-900 mb-1">Investment Types Explained</h2>
        <p className="text-sm text-gray-500 mb-4">Understand each option before investing your money</p>
        <div className="space-y-4">
          {investmentTypes.map((inv) => (
            <details key={inv.name} className={`rounded-xl border overflow-hidden group ${inv.color}`}>
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <inv.icon className={`w-5 h-5 ${inv.accent}`} />
                    <div>
                      <h3 className="text-gray-900">{inv.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{inv.description.substring(0, 80)}...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${inv.riskColor}`}>
                      {inv.risk} Risk
                    </span>
                    <span className="px-2 py-0.5 bg-white rounded-full text-xs text-gray-600">
                      {inv.returnRate}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                  </div>
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-4">
                <p className="text-sm text-gray-600">{inv.description}</p>

                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500">Min. Investment</div>
                    <div className="text-sm text-gray-800">{inv.minInvestment}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500">Expected Return</div>
                    <div className="text-sm text-gray-800">{inv.returnRate}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-500">Risk Level</div>
                    <div className={`text-sm ${inv.riskColor.split(' ')[1]}`}>{inv.risk}</div>
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">How It Works</h4>
                  <ol className="space-y-1.5">
                    {inv.howItWorks.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${inv.color.includes('amber') ? 'bg-amber-100 text-amber-700' : inv.color.includes('blue') ? 'bg-blue-100 text-blue-700' : inv.color.includes('green') ? 'bg-green-100 text-green-700' : inv.color.includes('indigo') ? 'bg-indigo-100 text-indigo-700' : inv.color.includes('teal') ? 'bg-teal-100 text-teal-700' : inv.color.includes('violet') ? 'bg-violet-100 text-violet-700' : inv.color.includes('pink') ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-700'}`}>
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="text-green-800 mb-2">Pros</h4>
                    <ul className="space-y-1.5">
                      {inv.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="text-red-800 mb-2">Cons</h4>
                    <ul className="space-y-1.5">
                      {inv.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">How to Pay/Fund</div>
                  <p className="text-sm text-gray-700">{inv.howToPay}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Platforms & Brokers */}
      <div>
        <h2 className="text-gray-900 mb-1">Investment Platforms & Brokers</h2>
        <p className="text-sm text-gray-500 mb-4">Where to actually invest your money</p>
        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-gray-900">{platform.name}</h3>
                <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-xs">{platform.type}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{platform.what}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-1.5">
                  {platform.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500">Cost</div>
                    <div className="text-sm text-gray-800">{platform.cost}</div>
                  </div>
                  <div className="p-3 bg-violet-50 rounded-lg">
                    <div className="text-xs text-violet-500">Note</div>
                    <div className="text-sm text-violet-700">{platform.note}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Risk vs Return Comparison</h2>
        <div className="space-y-3">
          {[
            { name: "Bank Savings (Traditional)", risk: 5, return_: "0.25%", riskLabel: "Minimal", color: "bg-green-500" },
            { name: "Bank Savings (Digital)", risk: 8, return_: "2-5%", riskLabel: "Minimal", color: "bg-green-400" },
            { name: "MP2 Savings", risk: 10, return_: "6-7%", riskLabel: "Very Low", color: "bg-emerald-500" },
            { name: "Government Bonds (RTB)", risk: 10, return_: "5-7%", riskLabel: "Very Low", color: "bg-teal-500" },
            { name: "Time Deposit", risk: 8, return_: "2-6%", riskLabel: "Minimal", color: "bg-cyan-500" },
            { name: "Bond Funds (UITF/MF)", risk: 25, return_: "3-7%", riskLabel: "Low", color: "bg-blue-400" },
            { name: "Balanced Funds", risk: 40, return_: "5-10%", riskLabel: "Medium", color: "bg-yellow-500" },
            { name: "Index Funds", risk: 55, return_: "5-15%", riskLabel: "Medium", color: "bg-orange-400" },
            { name: "Individual Stocks", risk: 75, return_: "-30% to 50%+", riskLabel: "High", color: "bg-red-400" },
            { name: "P2P Lending", risk: 65, return_: "10-15%", riskLabel: "High", color: "bg-red-500" },
            { name: "Crypto", risk: 95, return_: "Extreme variance", riskLabel: "Very High", color: "bg-red-600" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="w-40 text-sm text-gray-700 shrink-0 text-right">{item.name}</div>
              <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden relative">
                <div
                  className={`h-full ${item.color} rounded-full flex items-center justify-end pr-2 transition-all duration-700`}
                  style={{ width: `${item.risk}%` }}
                >
                  {item.risk > 20 && <span className="text-xs text-white">{item.riskLabel}</span>}
                </div>
              </div>
              <div className="w-32 text-sm text-gray-600 shrink-0">{item.return_}</div>
            </div>
          ))}
          <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
            <div className="w-40 text-right">Lower Risk</div>
            <div className="flex-1 text-center">Risk Level</div>
            <div className="w-32">Expected Return</div>
          </div>
        </div>
      </div>

      {/* Important Warnings */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-red-900">Investment Warnings</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "NEVER invest money you can't afford to lose (keep your emergency fund separate!)",
            "If it sounds too good to be true, it probably is. No legitimate investment guarantees 30%+ monthly returns",
            "Check if the platform/company is SEC or BSP registered before investing",
            "Beware of Ponzi/pyramid schemes disguised as 'investment opportunities'",
            "Don't invest based on hype or FOMO - do your own research",
            "Diversify! Never put all your money in one investment",
            "Start small and learn before committing large amounts",
            "Past performance does NOT guarantee future results",
          ].map((warning, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-red-700 bg-white/70 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              {warning}
            </div>
          ))}
        </div>
      </div>

      {/* Beginner's Roadmap */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-green-600" />
          <h2 className="text-green-900">Beginner's Investment Roadmap</h2>
        </div>
        <p className="text-sm text-green-700 mb-4">If you're just starting out, follow this path:</p>
        <div className="space-y-3">
          {[
            { month: "Month 1-3", action: "Build emergency fund in high-yield savings (Maya/Tonik). Aim for 1 month of expenses." },
            { month: "Month 3-6", action: "Open Pag-IBIG MP2 account. Start with PHP 500-1,000/month. Continue building emergency fund." },
            { month: "Month 6-12", action: "Emergency fund should be at 3 months. Try GCash GInvest with PHP 50-500 to learn about mutual funds." },
            { month: "Year 1-2", action: "Emergency fund at 6 months. Increase MP2 contributions. Consider opening COL Financial for stocks." },
            { month: "Year 2-3", action: "Start buying blue chip stocks or index funds (PHP 5,000-10,000). Apply for RTBs when available." },
            { month: "Year 3+", action: "Diversify: MP2 + stocks/index funds + bonds. Consider real estate (REIT or pre-selling). Review and rebalance annually." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/70 p-4 rounded-lg">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs whitespace-nowrap shrink-0">
                {item.month}
              </span>
              <p className="text-sm text-gray-700">{item.action}</p>
            </div>
          ))}
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
            {
              q: "I only have PHP 1,000 to invest. Where should I put it?",
              a: "Start with Pag-IBIG MP2 (PHP 500/month minimum) for guaranteed safe growth, or GCash GInvest (PHP 50 minimum) to learn about mutual funds. At this stage, focus more on increasing your income and savings rate than worrying about investment returns.",
            },
            {
              q: "Is cryptocurrency a good investment in the Philippines?",
              a: "Crypto is extremely volatile and speculative. The BSP has approved certain Virtual Asset Service Providers (VASPs) like Coins.ph and PDAX. If you invest in crypto, only use money you can 100% afford to lose, and limit it to 5-10% of your portfolio. It is NOT regulated like traditional investments.",
            },
            {
              q: "Do I pay taxes on investment gains?",
              a: "MP2 dividends: TAX-FREE. Bank interest: 20% final withholding tax (already deducted). Stock dividends: 10% final tax. Stock trading gains: 0.6% stock transaction tax (on selling). Mutual fund/UITF gains: Generally not taxed (built into NAVPU). Capital gains tax on real estate: 6%.",
            },
            {
              q: "What's the difference between mutual funds and UITF?",
              a: "Functionally similar. Mutual funds are offered by investment companies (regulated by SEC), while UITFs are offered by banks (regulated by BSP). UITFs are generally more accessible if you already have a bank account. Both pool your money and invest in a portfolio managed by professionals.",
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
