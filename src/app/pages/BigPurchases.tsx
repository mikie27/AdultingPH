import { useState } from "react";
import { ShoppingCart, CheckCircle2, AlertTriangle, ArrowRight, Calculator, Home, Car, MapPin, FileText, DollarSign, HelpCircle } from "lucide-react";

const houseFees = [
  { fee: "Down Payment", typical: "10-20% of TCP", example: "PHP 200,000 - 400,000", notes: "For a PHP 2M property. Some developers offer 0% DP promos (added to monthly)" },
  { fee: "Reservation Fee", typical: "PHP 10,000 - 50,000", example: "PHP 20,000 - 30,000", notes: "Deducted from DP. Non-refundable if you back out" },
  { fee: "Documentary Stamp Tax (DST)", typical: "1.5% of selling price or zonal value (whichever is higher)", example: "PHP 30,000", notes: "Paid to BIR" },
  { fee: "Transfer Tax", typical: "0.5-0.75% of selling price or zonal value", example: "PHP 10,000 - 15,000", notes: "Paid to local government (city/municipality)" },
  { fee: "Registration Fee", typical: "~0.25% of selling price", example: "PHP 5,000 - 10,000", notes: "Paid to Registry of Deeds" },
  { fee: "Capital Gains Tax (CGT)", typical: "6% of selling price or zonal value", example: "PHP 120,000", notes: "Usually shouldered by seller, but verify in your Deed of Sale" },
  { fee: "Notarial Fee", typical: "1-2% of selling price", example: "PHP 20,000 - 40,000", notes: "For notarization of Deed of Absolute Sale" },
  { fee: "Title Insurance (Optional)", typical: "Varies", example: "PHP 5,000 - 15,000", notes: "Protects against title defects" },
  { fee: "Mortgage Insurance (MRI)", typical: "Included in monthly", example: "Part of amortization", notes: "Required for bank/Pag-IBIG housing loans" },
  { fee: "Fire Insurance", typical: "Annual", example: "PHP 3,000 - 10,000/year", notes: "Required for mortgaged properties" },
  { fee: "HOA/Condo Dues", typical: "Monthly", example: "PHP 2,000 - 15,000/month", notes: "For condos and subdivisions with homeowners' association" },
  { fee: "Processing/Handling Fee", typical: "Varies", example: "PHP 5,000 - 20,000", notes: "Some developers/brokers charge this" },
];

const houseSteps = [
  {
    step: "1. Financial Preparation",
    details: [
      "Save for down payment (10-20% of total contract price)",
      "Check your credit score and payment history",
      "Get pre-approved for a housing loan (Pag-IBIG, bank, or in-house)",
      "Budget for closing costs (additional 5-10% of property value)",
      "Have 3-6 months emergency fund SEPARATE from house funds",
    ],
  },
  {
    step: "2. Property Search & Due Diligence",
    details: [
      "Decide: lot only, house & lot, condo, townhouse, or pre-selling",
      "Visit the property and neighborhood (multiple times, different hours!)",
      "Check the title at the Registry of Deeds (verify ownership)",
      "Verify tax declarations at the Assessor's Office",
      "Check for liens, encumbrances, or annotations on the title",
      "For condos: verify HLURB/DHSUD License to Sell",
      "For pre-selling: verify developer's track record and permits",
    ],
  },
  {
    step: "3. Reservation & Contract to Sell",
    details: [
      "Pay reservation fee (PHP 10K-50K) to hold the unit/property",
      "Sign Letter of Intent (LOI) or Reservation Agreement",
      "Receive Contract to Sell (CTS) from developer/seller",
      "Review CTS carefully (payment terms, turnover date, penalties)",
      "Start paying down payment (spot cash or installment)",
    ],
  },
  {
    step: "4. Loan Application (if financing)",
    details: [
      "Choose: Pag-IBIG housing loan (lower rate, up to PHP 6M) or bank loan (higher amount, faster processing)",
      "Submit requirements: valid IDs, ITR/payslips, COE, bank statements, collateral docs",
      "Property appraisal by the lending institution",
      "Loan approval and signing of loan documents",
      "Pag-IBIG loan processing: 25-45 working days; Bank: 2-4 weeks",
    ],
  },
  {
    step: "5. Deed of Absolute Sale & Transfer",
    details: [
      "Full payment or loan takeover complete",
      "Execute Deed of Absolute Sale (DOAS) — notarized",
      "Pay Capital Gains Tax (6%) at BIR within 30 days",
      "Pay Documentary Stamp Tax (1.5%) at BIR within 5 days after CGT",
      "Obtain Certificate Authorizing Registration (CAR) from BIR",
      "Pay Transfer Tax at local Treasurer's Office",
      "Register new title at Registry of Deeds",
      "Update Tax Declaration at Assessor's Office",
    ],
  },
  {
    step: "6. Turnover & Move-In",
    details: [
      "Inspect the property thoroughly (punch list for defects)",
      "Receive keys and Acceptance Certificate",
      "Set up utilities (electricity — Meralco/local provider, water, internet)",
      "Update your address on all IDs and government records",
      "Start paying monthly amortization on your loan",
    ],
  },
];

const lotOnlyTips = [
  "Verify the title is 'clean' — no liens, adverse claims, or lis pendens",
  "Check if the lot is within a titled subdivision or raw land",
  "For agricultural land: verify DAR clearance (agrarian reform compliance)",
  "Check zoning regulations at the city/municipal planning office",
  "Survey the lot boundaries (hire a licensed geodetic engineer)",
  "Beware of 'tax declaration only' lots — this is NOT proof of ownership",
  "Check flood maps and geological hazard maps for the area",
  "If buying from a developer: verify HLURB/DHSUD License to Sell",
];

const carFees = [
  { fee: "Down Payment", typical: "20-30% of SRP (or 0% promo)", example: "PHP 150,000 - 400,000", notes: "For a PHP 800K-1.3M car. Lower DP = higher monthly" },
  { fee: "Chattel Mortgage Fee", typical: "PHP 2,000 - 5,000", example: "PHP 3,000", notes: "Legal fee to register car as collateral for the loan" },
  { fee: "Comprehensive Insurance", typical: "3-5% of car value/year", example: "PHP 25,000 - 50,000/year", notes: "Year 1 usually mandatory for financed cars" },
  { fee: "CTPL Insurance", typical: "PHP 600 - 900/year", example: "PHP 750", notes: "Compulsory Third Party Liability — required for LTO registration" },
  { fee: "LTO Registration", typical: "PHP 1,000 - 3,000", example: "PHP 1,500 - 2,500", notes: "Annual registration with LTO" },
  { fee: "Plate Number", typical: "PHP 450 - 900", example: "PHP 450 (4W) / PHP 250 (2W)", notes: "One-time fee for license plates" },
  { fee: "HPG Clearance / MVUC", typical: "PHP 200 - 1,600", example: "Varies", notes: "Motor Vehicle User's Charge (for private cars: PHP 1,600/year)" },
  { fee: "Emission Test", typical: "PHP 400 - 800", example: "PHP 500", notes: "Required for LTO renewal annually" },
  { fee: "Handling/Processing Fee (Dealer)", typical: "PHP 10,000 - 30,000", example: "PHP 15,000", notes: "Some dealers waive this during promos" },
  { fee: "LTO Registration Sticker", typical: "PHP 45 - 450", example: "PHP 250", notes: "Annual registration sticker" },
];

const carSteps = [
  {
    step: "1. Budget Planning",
    details: [
      "Car price is NOT the total cost — add 15-25% for fees, insurance, and extras",
      "Monthly amortization should be MAX 15-20% of your monthly income",
      "Factor in monthly expenses: gas (PHP 3K-8K), parking (PHP 1K-5K), maintenance (PHP 1K-3K), insurance, registration",
      "Save for down payment: 20-30% of car price is ideal",
      "Have separate emergency fund before buying a car",
    ],
  },
  {
    step: "2. Choose Your Car",
    details: [
      "New vs Used: New has warranty + 0% promos; Used saves 30-50% but buyer beware",
      "Sedan vs SUV vs Pickup: Consider fuel cost, road conditions, family size, parking",
      "Manual vs Automatic: AT is more expensive but easier in Manila traffic",
      "Research: fuel consumption, parts availability, resale value, owner reviews",
      "Test drive at LEAST 2-3 different models before deciding",
    ],
  },
  {
    step: "3. Financing",
    details: [
      "Cash: Best deal — negotiate for cash discounts (PHP 20K-100K off)",
      "Bank auto loan: 3-7% interest/year, flexible terms (12-60 months)",
      "In-house financing (dealer): easier approval but higher interest (8-15%+)",
      "Compare total cost over the loan term, not just monthly amortization",
      "Documents needed: Valid IDs, proof of income (ITR/payslips/COE), proof of billing, bank statements",
    ],
  },
  {
    step: "4. Purchase & Registration",
    details: [
      "Sign Sales Invoice and delivery receipt",
      "Dealer processes LTO registration (first registration)",
      "Receive: OR/CR (Official Receipt / Certificate of Registration), plates (may take months), temporary plate, car manual, warranty booklet",
      "Verify all documents before driving off — check MVFILE number, engine number, chassis number",
    ],
  },
  {
    step: "5. If Buying Used (Second-Hand)",
    details: [
      "ALWAYS check OR/CR — verify with LTO LTMS portal if possible",
      "Check for encumbrances (existing loan) on the vehicle",
      "Have a trusted mechanic inspect the car BEFORE purchasing",
      "Deed of Sale must be notarized",
      "Transfer registration at LTO within 10 days of purchase",
      "Check MVFILE for any alarms (stolen vehicle, impounded, etc.)",
      "Verify matching engine and chassis numbers on the car vs documents",
    ],
  },
];

const landTitleTypes = [
  {
    type: "TCT (Transfer Certificate of Title)",
    desc: "The gold standard. A TCT means the land has been previously registered and transferred. This is what you want when buying property.",
    safe: true,
  },
  {
    type: "OCT (Original Certificate of Title)",
    desc: "First-ever title issued for the land through judicial or administrative proceedings. Rare and usually for ancestral/original owners.",
    safe: true,
  },
  {
    type: "CCT (Condominium Certificate of Title)",
    desc: "Title for condo units. You own the unit space but not the land — the condo corporation owns the land.",
    safe: true,
  },
  {
    type: "Tax Declaration Only",
    desc: "NOT a title! Only proof of tax payment, NOT ownership. Very risky to buy land with only a tax declaration. Many scams involve this.",
    safe: false,
  },
  {
    type: "CLOA (Certificate of Land Ownership Award)",
    desc: "Given to agrarian reform beneficiaries. Has restrictions on selling (usually 10-year restriction period). Verify DAR compliance.",
    safe: false,
  },
  {
    type: "Patent (Free Patent / Homestead Patent)",
    desc: "Government grant of public land. Has a 5-year restriction on sale and government repurchase rights. Check if restrictions have lapsed.",
    safe: false,
  },
];

export function BigPurchases() {
  const [carPrice, setCarPrice] = useState("");
  const [dp, setDp] = useState("20");
  const [loanTerm, setLoanTerm] = useState("60");
  const [interestRate, setInterestRate] = useState("6");
  const carPriceNum = parseFloat(carPrice) || 0;
  const dpPct = parseFloat(dp) || 20;
  const termMonths = parseInt(loanTerm) || 60;
  const rate = (parseFloat(interestRate) || 6) / 100 / 12;
  const loanAmount = carPriceNum * (1 - dpPct / 100);
  const monthly = rate > 0 ? (loanAmount * rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1) : loanAmount / termMonths;
  const totalPaid = monthly * termMonths;
  const totalInterest = totalPaid - loanAmount;

  const [housePrice, setHousePrice] = useState("");
  const [houseDp, setHouseDp] = useState("20");
  const [houseTerm, setHouseTerm] = useState("30");
  const [houseRate, setHouseRate] = useState("6.5");
  const housePriceNum = parseFloat(housePrice) || 0;
  const houseDpPct = parseFloat(houseDp) || 20;
  const houseTermMonths = (parseInt(houseTerm) || 30) * 12;
  const houseMonthlyRate = (parseFloat(houseRate) || 6.5) / 100 / 12;
  const houseLoan = housePriceNum * (1 - houseDpPct / 100);
  const houseMonthly = houseMonthlyRate > 0 ? (houseLoan * houseMonthlyRate * Math.pow(1 + houseMonthlyRate, houseTermMonths)) / (Math.pow(1 + houseMonthlyRate, houseTermMonths) - 1) : houseLoan / houseTermMonths;
  const houseTotalPaid = houseMonthly * houseTermMonths;
  const houseTotalInterest = houseTotalPaid - houseLoan;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-lime-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-lime-100 rounded-xl">
            <ShoppingCart className="w-6 h-6 text-lime-600" />
          </div>
          <h1 className="text-lime-900">Big Purchases Guide</h1>
        </div>
        <p className="text-sm text-lime-700 leading-relaxed max-w-2xl">
          Buying a house, lot, car, or condo in the Philippines? This guide covers all the hidden fees,
          required documents, step-by-step processes, and things nobody tells you about these
          life-changing purchases.
        </p>
      </div>

      {/* ========== HOUSE / CONDO SECTION ========== */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Home className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">Buying a House / Condo</h2>
        </div>

        {/* Loan Comparison */}
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {[
            {
              name: "Pag-IBIG Housing Loan",
              rate: "3% (socialized) / 5.375% (low-cost) / 6.5% (open market)",
              max: "Up to PHP 6,000,000",
              term: "Up to 30 years",
              pros: "Lowest interest rates, up to 30-year term",
              cons: "Slower processing (25-45 days), lower max loan amount",
              color: "bg-amber-50 border-amber-200",
            },
            {
              name: "Bank Housing Loan",
              rate: "6-9% (variable) / 7-10% (fixed 1-5 yrs)",
              max: "Up to PHP 20M+ (depends on income)",
              term: "Up to 20-25 years",
              pros: "Higher loan amount, faster processing, more properties eligible",
              cons: "Higher interest rates, requires higher income proof",
              color: "bg-blue-50 border-blue-200",
            },
            {
              name: "In-House (Developer)",
              rate: "12-18%",
              max: "Varies by developer",
              term: "5-15 years (shorter!)",
              pros: "Easiest approval, minimal documents, flexible terms",
              cons: "Much higher interest rates, shorter term, higher monthly",
              color: "bg-purple-50 border-purple-200",
            },
          ].map((loan) => (
            <div key={loan.name} className={`rounded-xl border p-4 ${loan.color}`}>
              <h4 className="text-gray-800 mb-2">{loan.name}</h4>
              <div className="space-y-2 text-sm">
                <div><span className="text-gray-500">Rate:</span> <span className="text-gray-700">{loan.rate}</span></div>
                <div><span className="text-gray-500">Max:</span> <span className="text-gray-700">{loan.max}</span></div>
                <div><span className="text-gray-500">Term:</span> <span className="text-gray-700">{loan.term}</span></div>
                <div className="pt-1"><span className="text-green-600 text-xs">✓ {loan.pros}</span></div>
                <div><span className="text-red-500 text-xs">✗ {loan.cons}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* House Loan Calculator */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-blue-600" />
          <h2 className="text-blue-900">Housing Loan Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Property Price (PHP)</label>
              <input type="number" value={housePrice} onChange={(e) => setHousePrice(e.target.value)} placeholder="e.g. 2000000" className="w-full px-4 py-2.5 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Down Payment %</label>
                <input type="number" value={houseDp} onChange={(e) => setHouseDp(e.target.value)} className="w-full px-3 py-2.5 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Term (Years)</label>
                <input type="number" value={houseTerm} onChange={(e) => setHouseTerm(e.target.value)} className="w-full px-3 py-2.5 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Interest %</label>
                <input type="number" value={houseRate} onChange={(e) => setHouseRate(e.target.value)} className="w-full px-3 py-2.5 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" step="0.1" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white/80 rounded-xl p-4">
              <div className="text-xs text-blue-500 mb-1">Monthly Amortization</div>
              <div className="text-2xl text-blue-700">PHP {(houseMonthly || 0).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Down Payment</div>
                <div className="text-sm text-gray-800">PHP {(housePriceNum * houseDpPct / 100).toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Loan Amount</div>
                <div className="text-sm text-gray-800">PHP {houseLoan.toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-red-500 mb-1">Total Interest</div>
                <div className="text-sm text-red-700">PHP {(houseTotalInterest || 0).toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Note: This is an estimate. Actual rates may include MRI, fire insurance, and other fees.</p>
          </div>
        </div>
      </div>

      {/* House Fees Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-1">All Fees When Buying a House/Condo</h2>
        <p className="text-sm text-gray-500 mb-4">The fees nobody tells you about until it's too late</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Fee</th>
                <th className="text-left py-3 px-3 text-gray-500">Typical Rate</th>
                <th className="text-left py-3 px-3 text-gray-500">Example (PHP 2M property)</th>
                <th className="text-left py-3 px-3 text-gray-500">Notes</th>
              </tr>
            </thead>
            <tbody>
              {houseFees.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{f.fee}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{f.typical}</td>
                  <td className="py-2.5 px-3 text-gray-600">{f.example}</td>
                  <td className="py-2.5 px-3 text-xs text-gray-400">{f.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">
            <strong>Rule of thumb:</strong> Budget an additional 8-12% of the property price for closing costs and fees on top of the purchase price.
          </p>
        </div>
      </div>

      {/* House Steps */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Step-by-Step: Buying a House/Condo</h2>
        <div className="space-y-4">
          {houseSteps.map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                {item.step}
              </h4>
              <ul className="space-y-1.5 ml-9">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Land Title Types */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-lime-600" />
          <h2 className="text-gray-900">Understanding Land Titles</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Know the difference — this can save you from scams</p>
        <div className="space-y-3">
          {landTitleTypes.map((title) => (
            <div key={title.type} className={`p-4 rounded-xl border ${title.safe ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <div className="flex items-center gap-2 mb-1">
                {title.safe ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <AlertTriangle className="w-4 h-4 text-red-500" />}
                <h4 className={title.safe ? "text-green-800" : "text-red-800"}>{title.type}</h4>
                <span className={`px-2 py-0.5 rounded-full text-xs ${title.safe ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {title.safe ? "Safe" : "Risky"}
                </span>
              </div>
              <p className="text-sm text-gray-600 ml-6">{title.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lot Only Tips */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-amber-600" />
          <h2 className="text-amber-900">Buying a Lot Only</h2>
        </div>
        <p className="text-sm text-amber-700 mb-3">Extra precautions when buying raw land or lot-only properties</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {lotOnlyTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-amber-700 bg-white/70 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> {tip}
            </div>
          ))}
        </div>
      </div>

      {/* ========== CAR SECTION ========== */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Buying a Car</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">All the costs beyond the sticker price</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Fee</th>
                <th className="text-left py-3 px-3 text-gray-500">Typical</th>
                <th className="text-left py-3 px-3 text-gray-500">Example</th>
                <th className="text-left py-3 px-3 text-gray-500">Notes</th>
              </tr>
            </thead>
            <tbody>
              {carFees.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{f.fee}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{f.typical}</td>
                  <td className="py-2.5 px-3 text-gray-600">{f.example}</td>
                  <td className="py-2.5 px-3 text-xs text-gray-400">{f.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Car Loan Calculator */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-purple-600" />
          <h2 className="text-purple-900">Car Loan Calculator</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Car Price (PHP)</label>
              <input type="number" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} placeholder="e.g. 900000" className="w-full px-4 py-2.5 border border-purple-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">DP %</label>
                <input type="number" value={dp} onChange={(e) => setDp(e.target.value)} className="w-full px-3 py-2.5 border border-purple-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Months</label>
                <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} className="w-full px-3 py-2.5 border border-purple-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Interest %</label>
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-3 py-2.5 border border-purple-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500" step="0.1" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white/80 rounded-xl p-4">
              <div className="text-xs text-purple-500 mb-1">Monthly Amortization</div>
              <div className="text-2xl text-purple-700">PHP {(monthly || 0).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Down Payment</div>
                <div className="text-sm text-gray-800">PHP {(carPriceNum * dpPct / 100).toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">Loan Amount</div>
                <div className="text-sm text-gray-800">PHP {loanAmount.toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-white/80 rounded-xl p-3">
                <div className="text-xs text-red-500 mb-1">Total Interest</div>
                <div className="text-sm text-red-700">PHP {(totalInterest || 0).toLocaleString("en-PH", { maximumFractionDigits: 0 })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Steps */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Step-by-Step: Buying a Car</h2>
        <div className="space-y-4">
          {carSteps.map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                {item.step}
              </h4>
              <ul className="space-y-1.5 ml-9">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* True Cost of Ownership */}
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-5 sm:p-6">
        <h2 className="text-purple-900 mb-3">True Monthly Cost of Car Ownership</h2>
        <p className="text-sm text-purple-700 mb-4">For a PHP 900K car with 20% DP, 5-year loan at 6%:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Monthly Amortization", amount: "~PHP 13,920" },
            { label: "Gas/Fuel", amount: "~PHP 3,000-8,000" },
            { label: "Insurance (monthly avg)", amount: "~PHP 2,500" },
            { label: "Maintenance", amount: "~PHP 1,000-3,000" },
            { label: "Parking", amount: "~PHP 1,000-5,000" },
            { label: "Registration (monthly avg)", amount: "~PHP 200" },
            { label: "Toll Fees", amount: "~PHP 500-3,000" },
            { label: "TOTAL MONTHLY", amount: "~PHP 22,000-35,000+" },
          ].map((item) => (
            <div key={item.label} className={`bg-white/70 rounded-lg p-3 ${item.label === "TOTAL MONTHLY" ? "col-span-2 sm:col-span-4 bg-purple-100" : ""}`}>
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className={`text-sm ${item.label === "TOTAL MONTHLY" ? "text-purple-800 text-lg" : "text-gray-800"}`}>{item.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Purchase Warnings */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-red-900">Common Scams & Warnings</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Never buy property with only a Tax Declaration — it's NOT proof of ownership",
            "Always verify titles at the Registry of Deeds personally (don't rely on photocopies)",
            "Beware of double-selling: one property sold to multiple buyers",
            "For used cars: check MVFILE/LTO records for stolen or encumbered vehicles",
            "Never pay full price before seeing and verifying all original documents",
            "Don't sign anything you don't fully understand — get a lawyer to review",
            "Verify the seller's identity and authority to sell (special power of attorney if representative)",
            "For pre-selling: verify HLURB/DHSUD License to Sell and the developer's delivery track record",
          ].map((warning, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-red-700 bg-white/70 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {warning}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-lime-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Pag-IBIG housing loan vs Bank — which is better?",
              a: "Pag-IBIG has MUCH lower interest rates (3-6.5% vs 7-10% for banks) and longer terms (up to 30 years). However, it caps at PHP 6M and processes slower. If your property is under PHP 6M, Pag-IBIG is almost always the better choice. Some buyers use Pag-IBIG for the main loan and a bank for the balance.",
            },
            {
              q: "Can foreigners buy property in the Philippines?",
              a: "Foreigners CANNOT own land in the Philippines. However, they CAN own condo units (up to 40% of a condo project can be foreign-owned). They can also lease land for up to 75 years. Some set up Philippine corporations (60% Filipino-owned) to acquire land.",
            },
            {
              q: "Should I buy a brand new or second-hand car?",
              a: "A 1-3 year old used car in good condition saves you 20-40% while still being relatively new. New cars depreciate 15-20% the moment you drive them off the lot. However, new cars come with warranty and 0% DP/interest promos that can make them competitive.",
            },
            {
              q: "Who pays the capital gains tax — buyer or seller?",
              a: "Legally, the SELLER should pay the 6% CGT since it's a tax on the seller's gain. In practice, many sellers pass this cost to the buyer. It all depends on the negotiation and what's written in the Deed of Sale. Clarify this BEFORE signing anything.",
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
