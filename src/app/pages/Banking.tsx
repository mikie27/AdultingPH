import { Landmark, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Star, Smartphone, Building2, Shield, TrendingUp } from "lucide-react";

const traditionalBanks = [
  {
    name: "BDO Unibank",
    type: "Largest bank in PH",
    savingsRate: "0.25%",
    minBalance: "PHP 2,000 (Peso Savings) / PHP 500 (Junior Savers)",
    maintainingBal: "PHP 2,000 - 10,000 (varies by account type)",
    highlights: [
      "Widest ATM/branch network in the Philippines",
      "BDO app for online banking",
      "Kabayan Savings for OFWs",
      "Multiple investment products available",
      "Credit card and loan options",
    ],
    bestFor: "Those who need physical branches everywhere",
  },
  {
    name: "BPI (Bank of the Philippine Islands)",
    type: "Oldest bank in PH",
    savingsRate: "0.25%",
    minBalance: "PHP 3,000 (Savings) / PHP 200 (Jumpstart)",
    maintainingBal: "PHP 3,000 - 10,000",
    highlights: [
      "One of the best mobile apps among traditional banks",
      "BPI Trade for stocks",
      "Strong online banking platform",
      "Wide branch and ATM network",
      "BPI Direct for higher-yield savings",
    ],
    bestFor: "Tech-savvy users who still want a traditional bank",
  },
  {
    name: "Metrobank",
    type: "Universal bank",
    savingsRate: "0.25%",
    minBalance: "PHP 2,000 (Fun Savers) / PHP 10,000 (Regular)",
    maintainingBal: "PHP 2,000 - 10,000",
    highlights: [
      "Strong presence in Metro Manila",
      "MetrobankDirect online banking",
      "Multiple savings account options",
      "Competitive time deposit rates",
      "PSBank (subsidiary) for more affordable banking",
    ],
    bestFor: "Those in Metro Manila who want full-service banking",
  },
  {
    name: "UnionBank",
    type: "Digital-forward traditional bank",
    savingsRate: "0.25-1%",
    minBalance: "PHP 200 (Savings)",
    maintainingBal: "PHP 200 - 2,000",
    highlights: [
      "Best digital experience among traditional banks",
      "UnionBank Online app is excellent",
      "Lower maintaining balance than most big banks",
      "InstaPay and PESONet transfers",
      "Partner bank for GCash and various fintechs",
    ],
    bestFor: "Those who want a traditional bank with the best digital experience",
  },
  {
    name: "Landbank",
    type: "Government-owned bank",
    savingsRate: "0.25%",
    minBalance: "PHP 500 (Easy Savings Plus)",
    maintainingBal: "PHP 500",
    highlights: [
      "Government-owned - very stable",
      "Low maintaining balance (PHP 500)",
      "Used for government disbursements and subsidies",
      "Wide rural branch network",
      "Agri and SME lending programs",
    ],
    bestFor: "Government employees, farmers, those in rural areas",
  },
];

const digitalBanks = [
  {
    name: "Maya (formerly PayMaya)",
    type: "Digital bank + e-wallet",
    savingsRate: "Up to 15% (promo) / 2.5% (regular)",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "No maintaining balance required",
      "Up to PHP 100M PDIC-insured",
      "Instant account opening via app",
      "Time deposit with competitive rates",
      "Also functions as e-wallet for payments",
      "Virtual and physical Visa debit card",
      "Bills payment and fund transfers",
    ],
    bestFor: "Best overall digital bank for most Filipinos",
    interestDetail: "Personal Savings: up to 2.5% p.a. | Time deposit: up to 6% p.a.",
  },
  {
    name: "GCash (GStash/GSave)",
    type: "E-wallet + savings",
    savingsRate: "Up to 3.5% (GSave with CIMB)",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "Most widely used e-wallet in the Philippines",
      "GSave (with CIMB): earn interest on savings",
      "GInvest: invest in mutual funds via the app",
      "QR payments accepted almost everywhere",
      "GCash Mastercard debit card available",
      "Send money, pay bills, buy load",
      "GCredit for buy-now-pay-later",
    ],
    bestFor: "Daily transactions, e-payments, sending money",
    interestDetail: "GSave (CIMB): up to 3.5% p.a. | GInvest: market-based returns",
  },
  {
    name: "Tonik",
    type: "Pure digital bank",
    savingsRate: "Up to 4% (Stash) / 6% (Time Deposit)",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "Highest regular savings rates among digital banks",
      "Group Stash: save together with friends/family",
      "Time deposits up to 6% p.a.",
      "Quick Loan: personal loans up to PHP 50,000",
      "PDIC-insured up to PHP 500,000",
      "Fully digital account opening",
    ],
    bestFor: "Maximizing savings interest rates",
    interestDetail: "Stash: up to 4% p.a. | Time Deposit: up to 6% p.a.",
  },
  {
    name: "GoTyme Bank",
    type: "Digital bank (Tyme + Gokongwei)",
    savingsRate: "Up to 5% (promo) / 3% (regular)",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "Account opening at Robinsons and GoTyme kiosks",
      "Competitive interest rates",
      "No maintaining balance",
      "Visa debit card (physical and virtual)",
      "PDIC-insured up to PHP 500,000",
      "Easy fund transfers via InstaPay",
    ],
    bestFor: "Those who want quick in-person sign-up at mall kiosks",
    interestDetail: "Savings: up to 3% p.a. | Promo rates may be higher",
  },
  {
    name: "Seabank (by SeaMoney/Shopee)",
    type: "Digital bank",
    savingsRate: "Up to 5% (promo) / 2-3% (regular)",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "Connected to Shopee ecosystem",
      "Competitive promotional interest rates",
      "No maintaining balance",
      "Easy fund transfers",
      "PDIC-insured up to PHP 500,000",
      "Quick digital account opening",
    ],
    bestFor: "Shopee users who want to earn interest on idle funds",
    interestDetail: "Savings: up to 3% p.a. (rate changes periodically)",
  },
  {
    name: "ING Bank (Philippines)",
    type: "International digital bank",
    savingsRate: "Up to 2.5%",
    minBalance: "PHP 0",
    maintainingBal: "None",
    highlights: [
      "Backed by international ING Group",
      "No maintaining balance or fees",
      "Free InstaPay/PESONet transfers",
      "PDIC-insured up to PHP 500,000",
      "Simple and clean interface",
      "Note: ING PH has limited features vs competitors",
    ],
    bestFor: "Those who want a simple, no-frills savings account",
    interestDetail: "Savings: up to 2.5% p.a.",
  },
];

const accountTypes = [
  {
    type: "Regular Savings Account",
    desc: "Your basic bank account. Low interest but highly liquid - withdraw anytime.",
    interest: "0.25-4% p.a. (traditional: 0.25% | digital: 2-4%)",
    minAmount: "PHP 0 - 10,000",
    ideal: "Emergency fund, daily transactions",
    insured: "Yes (PDIC up to PHP 500,000)",
  },
  {
    type: "Time Deposit",
    desc: "Lock your money for a fixed period for higher interest. Penalty for early withdrawal.",
    interest: "1.5-6% p.a.",
    minAmount: "PHP 1,000 - 50,000",
    ideal: "Short-term savings goals (3-12 months)",
    insured: "Yes (PDIC up to PHP 500,000)",
  },
  {
    type: "High-Yield Savings",
    desc: "Savings accounts with higher interest rates, usually from digital banks.",
    interest: "2-5% p.a.",
    minAmount: "PHP 0",
    ideal: "Growing emergency fund, parking idle cash",
    insured: "Yes (PDIC up to PHP 500,000)",
  },
  {
    type: "Checking Account",
    desc: "Account with checkbook. Used for business transactions and large payments.",
    interest: "0-0.25% p.a.",
    minAmount: "PHP 5,000 - 25,000",
    ideal: "Business use, large transactions",
    insured: "Yes (PDIC up to PHP 500,000)",
  },
  {
    type: "Dollar Savings Account",
    desc: "Save in US dollars for foreign transactions, travel, or hedging against peso depreciation.",
    interest: "0.125-1% p.a.",
    minAmount: "USD 100 - 500",
    ideal: "OFWs, travelers, USD hedging",
    insured: "Yes (PDIC up to PHP 500,000 equivalent)",
  },
];

const bankingTips = [
  {
    title: "Traditional vs Digital: Use Both!",
    tip: "Keep a traditional bank for your primary salary account and large transactions. Use digital banks for higher-interest savings and daily spending.",
  },
  {
    title: "PDIC Insurance Matters",
    tip: "The Philippine Deposit Insurance Corporation (PDIC) insures your deposits up to PHP 500,000 per depositor, per bank. If you have more than PHP 500K, spread across multiple banks.",
  },
  {
    title: "Avoid Dormant Account Fees",
    tip: "Accounts with no transactions for 2+ years become dormant. Dormancy fees can eat your savings. Make at least 1 transaction every 6 months.",
  },
  {
    title: "Know Your Fees",
    tip: "Watch out for: maintaining balance penalties (PHP 300-500/month), over-the-counter transaction fees, interbank transfer fees, and ATM withdrawal fees at other banks.",
  },
  {
    title: "Open Multiple Accounts Strategically",
    tip: "Have at least: (1) Payroll/salary account, (2) Emergency fund account (separate!), (3) Bills/expenses account, (4) Savings/investment account.",
  },
  {
    title: "Automate Your Savings",
    tip: "Set up auto-transfer on payday: immediately move your savings allocation to a separate account. Pay yourself first!",
  },
];

export function Banking() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-emerald-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-emerald-100 rounded-xl">
            <Landmark className="w-6 h-6 text-emerald-600" />
          </div>
          <h1 className="text-emerald-900">Banking & Savings Guide</h1>
        </div>
        <p className="text-sm text-emerald-700 leading-relaxed max-w-2xl">
          Traditional banks, digital banks, e-wallets, and everything you need to know about
          managing your money in the Philippines. Compare interest rates, fees, and features to
          find the best bank for your needs.
        </p>
      </div>

      {/* Traditional vs Digital */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Traditional Banks vs Digital Banks</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-gray-600" />
              <h3 className="text-gray-800">Traditional Banks</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Physical branches for in-person transactions",
                "Lower interest rates (0.25% typical)",
                "Higher maintaining balance requirements",
                "Checkbook, manager's check, safe deposit box",
                "More loan products and credit cards",
                "Established reputation and trust",
                "ATM network throughout the country",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="w-5 h-5 text-emerald-600" />
              <h3 className="text-emerald-800">Digital Banks</h3>
            </div>
            <ul className="space-y-2 text-sm text-emerald-700">
              {[
                "100% mobile - open account in minutes",
                "Higher interest rates (2-6%+ for savings/TD)",
                "No maintaining balance required",
                "No physical branches (lower overhead = better rates)",
                "Instant fund transfers via InstaPay",
                "PDIC-insured up to PHP 500,000",
                "Debit cards (virtual + physical) available",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 shrink-0 mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Account Types */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Types of Bank Accounts</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Account Type</th>
                <th className="text-left py-3 px-3 text-gray-500">Interest</th>
                <th className="text-left py-3 px-3 text-gray-500">Min. Amount</th>
                <th className="text-left py-3 px-3 text-gray-500">Best For</th>
                <th className="text-left py-3 px-3 text-gray-500">PDIC?</th>
              </tr>
            </thead>
            <tbody>
              {accountTypes.map((acc, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3">
                    <div className="text-gray-800">{acc.type}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{acc.desc}</div>
                  </td>
                  <td className="py-2.5 px-3 text-emerald-600">{acc.interest}</td>
                  <td className="py-2.5 px-3 text-gray-600">{acc.minAmount}</td>
                  <td className="py-2.5 px-3 text-gray-600">{acc.ideal}</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Yes</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Traditional Banks */}
      <div>
        <h2 className="text-gray-900 mb-1">Top Traditional Banks</h2>
        <p className="text-sm text-gray-500 mb-4">The big banks with physical branches nationwide</p>
        <div className="space-y-4">
          {traditionalBanks.map((bank) => (
            <div key={bank.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-gray-900">{bank.name}</h3>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">{bank.type}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-1.5">
                  {bank.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500">Interest Rate</div>
                      <div className="text-sm text-gray-800">{bank.savingsRate}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500">Min. Balance</div>
                      <div className="text-sm text-gray-800">{bank.minBalance}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500">Maintaining Balance</div>
                    <div className="text-sm text-gray-800">{bank.maintainingBal}</div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-emerald-500">Best For</div>
                    <div className="text-sm text-emerald-700">{bank.bestFor}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Banks */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Smartphone className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900">Digital Banks & E-Wallets</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Higher interest rates, zero maintaining balance, 100% mobile</p>
        <div className="space-y-4">
          {digitalBanks.map((bank) => (
            <div key={bank.name} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-gray-900">{bank.name}</h3>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">{bank.type}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-1.5">
                  {bank.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <div className="p-3 bg-white/80 rounded-lg">
                    <div className="text-xs text-gray-500">Interest Rate</div>
                    <div className="text-lg text-emerald-700">{bank.savingsRate}</div>
                    <div className="text-xs text-gray-400 mt-1">{bank.interestDetail}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-white/80 rounded-lg">
                      <div className="text-xs text-gray-500">Min. Balance</div>
                      <div className="text-sm text-gray-800">{bank.minBalance}</div>
                    </div>
                    <div className="p-3 bg-white/80 rounded-lg">
                      <div className="text-xs text-gray-500">Maintaining</div>
                      <div className="text-sm text-gray-800">{bank.maintainingBal}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/80 rounded-lg">
                    <div className="text-xs text-emerald-500">Best For</div>
                    <div className="text-sm text-emerald-700">{bank.bestFor}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Open a Bank Account */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">How to Open a Bank Account</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="text-gray-800 mb-3">Traditional Bank (In-Branch)</h4>
            <ol className="space-y-2">
              {[
                "Visit any branch with requirements",
                "Present 2 valid IDs (1 primary + 1 secondary)",
                "Fill out account opening form",
                "Initial deposit (varies: PHP 500 - 25,000)",
                "Wait for account activation (same day usually)",
                "Receive ATM card and passbook",
                "Set up online banking access",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl">
            <h4 className="text-emerald-800 mb-3">Digital Bank (Via App)</h4>
            <ol className="space-y-2">
              {[
                "Download the bank's app from App Store/Play Store",
                "Sign up with your mobile number and email",
                "Submit a selfie + photo of valid ID",
                "Fill out personal information",
                "Wait for verification (instant to 24 hours)",
                "Account activated! Fund via InstaPay or bank transfer",
                "Optional: Request physical debit card",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-emerald-700">
                  <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* PDIC */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-blue-600" />
          <h2 className="text-blue-900">PDIC Deposit Insurance</h2>
        </div>
        <p className="text-sm text-blue-700 mb-4">
          The Philippine Deposit Insurance Corporation (PDIC) insures your deposits in case a bank closes.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-white/70 rounded-lg p-4 text-center">
            <div className="text-2xl text-blue-700">PHP 500,000</div>
            <div className="text-xs text-blue-600 mt-1">Maximum coverage per depositor, per bank</div>
          </div>
          <div className="bg-white/70 rounded-lg p-4 text-center">
            <div className="text-2xl text-blue-700">FREE</div>
            <div className="text-xs text-blue-600 mt-1">No cost - automatically covers all depositors</div>
          </div>
          <div className="bg-white/70 rounded-lg p-4 text-center">
            <div className="text-2xl text-blue-700">All Banks</div>
            <div className="text-xs text-blue-600 mt-1">Traditional, digital, rural, thrift banks</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Strategy:</strong> If you have more than PHP 500,000 in savings, spread across multiple banks
            to maximize your PDIC coverage. Example: PHP 500K in BDO + PHP 500K in Maya + PHP 500K in Tonik = PHP 1.5M fully insured.
          </p>
        </div>
      </div>

      {/* Banking Pro Tips */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-amber-500" />
          <h2 className="text-gray-900">Banking Pro Tips</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {bankingTips.map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Setup */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-5 sm:p-6">
        <h2 className="text-emerald-900 mb-3">Recommended Banking Setup</h2>
        <p className="text-sm text-emerald-700 mb-4">The ideal multi-account strategy for a working Filipino</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { account: "Payroll Account", bank: "Your employer's bank (BDO, BPI, etc.)", purpose: "Receive salary, pay bills, ATM withdrawals" },
            { account: "Emergency Fund", bank: "High-yield digital bank (Tonik, Maya)", purpose: "3-6 months expenses, earning 2-4% interest" },
            { account: "Spending Account", bank: "GCash or Maya", purpose: "Daily transactions, QR payments, bills" },
            { account: "Investment Holding", bank: "Separate savings account", purpose: "Park funds before investing (stocks, funds, MP2)" },
          ].map((item) => (
            <div key={item.account} className="bg-white/70 rounded-lg p-4">
              <h4 className="text-emerald-800 mb-1">{item.account}</h4>
              <p className="text-xs text-emerald-600 mb-1">{item.bank}</p>
              <p className="text-sm text-gray-600">{item.purpose}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Are digital banks safe?",
              a: "Yes! Digital banks in the Philippines are licensed by the BSP (Bangko Sentral ng Pilipinas) and deposits are insured by PDIC up to PHP 500,000. They follow the same regulations as traditional banks.",
            },
            {
              q: "What happens if I fall below the maintaining balance?",
              a: "Traditional banks charge a monthly penalty (PHP 300-500) until your balance goes back above the maintaining balance. After 2 years of dormancy, your account may be closed. Digital banks typically have no maintaining balance.",
            },
            {
              q: "How many bank accounts should I have?",
              a: "At minimum: 2-3 accounts (payroll + emergency fund + spending). Having separate accounts for different purposes helps you budget and track your money better. There's no legal limit on how many accounts you can have.",
            },
            {
              q: "GCash vs Maya - which is better?",
              a: "GCash has wider merchant acceptance (QR payments). Maya generally offers higher savings interest rates and a more robust digital banking experience. Most Filipinos have both! Use GCash for payments and Maya for savings.",
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
