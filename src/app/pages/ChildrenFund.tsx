import { useState } from "react";
import {
  Baby,
  Heart,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calculator,
  DollarSign,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Shield,
  TrendingUp,
  HelpCircle,
  Milestone,
  Clock,
  Hospital,
} from "lucide-react";

/* ─────────── PREGNANCY & DELIVERY ─────────── */
const pregnancyCosts = {
  prenatal: [
    { item: "OB-GYN Consultation (per visit)", pub: "Free–₱500", priv: "₱800–₱2,500", notes: "~10-14 visits over 9 months" },
    { item: "Prenatal Vitamins (monthly)", pub: "Free (health center)", priv: "₱500–₱1,500", notes: "Folic acid, iron, calcium. Free at barangay health centers" },
    { item: "Ultrasound (Transvaginal/Abdominal)", pub: "₱300–₱800", priv: "₱1,500–₱3,500", notes: "Usually 2-4 ultrasounds total. 3D/4D costs more" },
    { item: "Blood Tests & Urinalysis (per set)", pub: "₱200–₱500", priv: "₱1,000–₱3,000", notes: "CBC, blood typing, hepatitis B, HIV, urinalysis, etc." },
    { item: "Glucose Tolerance Test (OGTT)", pub: "₱300–₱500", priv: "₱800–₱1,500", notes: "Usually done 24-28 weeks" },
    { item: "Maternity clothes & essentials", pub: "—", priv: "₱3,000–₱10,000", notes: "Maternity dresses, support belt, nursing bras" },
  ],
  delivery: [
    { type: "Normal Delivery — Public Hospital", cost: "₱5,000–₱15,000", philhealth: "₱6,500 (NSD benefit)", netCost: "May be FREE with PhilHealth", details: "Government hospitals (PGH, Fabella, Ospital ng Makati, etc.). Basic ward. Long wait times but affordable." },
    { type: "Normal Delivery — Private Hospital", cost: "₱30,000–₱80,000", philhealth: "₱6,500 (NSD benefit)", netCost: "₱23,500–₱73,500", details: "Private room, choice of OB. Includes room, doctor's fee, anesthesia, meds. St. Luke's, Makati Med, Medical City, Asian Hospital on higher end." },
    { type: "Cesarean Section — Public Hospital", cost: "₱15,000–₱30,000", philhealth: "₱19,000 (CS benefit)", netCost: "May be FREE with PhilHealth", details: "Government hospitals. May need to buy some supplies. PhilHealth covers most or all costs for charity patients." },
    { type: "Cesarean Section — Private Hospital", cost: "₱80,000–₱250,000", philhealth: "₱19,000 (CS benefit)", netCost: "₱61,000–₱231,000", details: "Includes surgeon's fee, anesthesiologist, OR fee, room (3-5 days), meds, labs. HMO may cover a significant portion — CHECK YOUR PLAN." },
    { type: "Water Birth / Birthing Center", cost: "₱15,000–₱50,000", philhealth: "₱6,500", netCost: "₱8,500–₱43,500", details: "Birthing centers (Sanctuario, Shiphrah, etc.). Midwife-led care. More intimate setting. Not for high-risk pregnancies." },
  ],
  philhealthTips: [
    "PhilHealth covers NSD (₱6,500) and CS (₱19,000) — make sure you're a member or dependent",
    "You need at least 3 monthly contributions in the last 6 months to avail maternity benefit",
    "SSS Maternity Benefit: 60 days salary (NSD) or 78 days (CS) — separate from PhilHealth!",
    "If married, your husband's PhilHealth can also cover you as a dependent",
    "Some LGUs have additional birthing packages (free delivery for residents) — check your city/municipality",
    "Ask the hospital billing department about PhilHealth deductions BEFORE admission",
  ],
};

/* ─────────── AGE-BASED EXPENSE BREAKDOWN ─────────── */
const ageBreakdowns = [
  {
    age: "Newborn (0–12 months)",
    emoji: "👶",
    color: "bg-pink-50 border-pink-200",
    headerColor: "text-pink-800",
    monthlyLow: 8000,
    monthlyHigh: 25000,
    categories: [
      {
        name: "Diapers",
        low: "₱2,500/mo",
        high: "₱5,000/mo",
        details: "~6-10 diapers/day. Budget brands (EQ, Hapi Nappy): ₱5-8/pc. Mid (Pampers, Huggies): ₱10-15/pc. Premium (Merries, Moony): ₱18-25/pc. Cloth diapers save long-term (₱200-500/pc, reusable).",
      },
      {
        name: "Formula Milk (if not breastfeeding)",
        low: "₱0 (breastfed)",
        high: "₱4,000–₱8,000/mo",
        details: "Breastfeeding is FREE and healthiest. If formula: Budget (Bonna, Lactum): ₱500-800/can. Mid (S-26, Similac): ₱1,000-1,800/can. Premium (Nan Optipro, Enfamil): ₱1,500-2,500/can. ~3-6 cans/month for newborn.",
      },
      {
        name: "Pediatrician Check-ups",
        low: "₱0 (public health center)",
        high: "₱1,500–₱2,500/visit",
        details: "Monthly check-ups for the first year. Public health centers: FREE. Private pedia: ₱800-2,500/visit. Well-baby visits: weight, length, head circumference, developmental milestones.",
      },
      {
        name: "Vaccines",
        low: "₱0 (EPI — free govt vaccines)",
        high: "₱3,000–₱8,000/vaccine",
        details: "Government EPI vaccines are FREE at health centers (BCG, Hepa B, Pentavalent, OPV, IPV, PCV, MMR). OPTIONAL private vaccines: Rotavirus (₱3,000-4,000/dose × 2-3), Flu (₱1,500-2,500/yr), Varicella (₱3,000-4,000). Total optional vaccines: ₱15,000-40,000 in first year.",
      },
      {
        name: "Baby Essentials (One-time)",
        low: "₱5,000",
        high: "₱30,000+",
        details: "Crib/co-sleeper: ₱2,000-15,000. Stroller: ₱1,500-20,000. Car seat: ₱3,000-15,000. Bottles: ₱200-800 each. Clothes: ₱100-500/pc (they outgrow fast — buy secondhand!). Breast pump: ₱1,500-15,000.",
      },
      {
        name: "Medicines & Supplements",
        low: "₱500/mo",
        high: "₱2,000/mo",
        details: "Vitamin D drops: ₱300-500. Fever/pain meds (Tempra, Calpol): ₱100-200. Nasal drops: ₱100-150. Diaper rash cream: ₱150-400. Gripe water: ₱200-350. Budget for unexpected illnesses: ER visits can cost ₱2,000-10,000.",
      },
    ],
  },
  {
    age: "Toddler (1–3 years)",
    emoji: "🧒",
    color: "bg-orange-50 border-orange-200",
    headerColor: "text-orange-800",
    monthlyLow: 7000,
    monthlyHigh: 20000,
    categories: [
      {
        name: "Diapers / Pull-ups",
        low: "₱1,500/mo",
        high: "₱3,500/mo",
        details: "Fewer changes per day (4-6). Start potty training at 18-24 months to reduce costs. Pull-up type diapers cost slightly more. By age 2.5-3, many kids are potty trained.",
      },
      {
        name: "Food & Milk",
        low: "₱3,000/mo",
        high: "₱8,000/mo",
        details: "Transition to solid food + growing-up milk. Milk: ₱800-2,000/can (1-2 cans/month). Solid food: homemade is cheapest. Gerber/Cerelac: ₱80-200/pack. Fresh fruits, veggies, protein — budget ₱100-200/day for toddler food.",
      },
      {
        name: "Pediatrician Visits",
        low: "₱0 (public)",
        high: "₱1,500–₱2,500/visit",
        details: "Every 3-6 months (quarterly to semi-annual). Plus sick visits — toddlers get sick A LOT (6-8 colds/year is normal). Budget for at least 2-3 unexpected clinic visits per quarter.",
      },
      {
        name: "Vaccines (continued)",
        low: "₱0 (EPI)",
        high: "₱5,000–₱10,000/year",
        details: "Booster shots: MMR 2nd dose, DPT boosters. Optional: Hepatitis A (₱2,000-3,000 × 2 doses), Typhoid (₱1,500-2,500). Annual flu vaccine recommended.",
      },
      {
        name: "Clothes & Shoes",
        low: "₱500/mo",
        high: "₱2,000/mo",
        details: "They grow FAST. Buy slightly bigger sizes. Ukay-ukay/thrift shops save a ton. Shoes: ₱300-1,000/pair (need new ones every 3-4 months). Tip: join parent buy & sell groups on FB.",
      },
      {
        name: "Toys, Books & Development",
        low: "₱300/mo",
        high: "₱2,000/mo",
        details: "Books: ₱100-500 each (or borrow from library). Educational toys: ₱200-1,000. Avoid overspending — kids this age are happy with boxes and pots. Playgrounds are free!",
      },
    ],
  },
  {
    age: "Pre-School (3–5 years)",
    emoji: "📚",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "text-yellow-800",
    monthlyLow: 10000,
    monthlyHigh: 35000,
    categories: [
      {
        name: "Tuition — Daycare/Nursery/Kinder",
        low: "₱0 (public/DepEd)",
        high: "₱8,000–₱25,000/mo",
        details: "Public school Kinder: FREE (DepEd). Private daycare: ₱3,000-8,000/mo. Mid-range private (Montessori-style): ₱8,000-15,000/mo. Premium international preschool: ₱15,000-50,000+/mo. Misc fees: enrollment ₱2,000-10,000, books ₱1,000-5,000, uniform ₱500-2,000.",
      },
      {
        name: "Food & Milk",
        low: "₱3,000/mo",
        high: "₱6,000/mo",
        details: "Growing-up milk: ₱800-1,800/can (1 can/month). School baon: ₱50-150/day. Snacks, fruits, proper meals. At this age, they can eat regular family food — adjust portions.",
      },
      {
        name: "School Supplies & Uniform",
        low: "₱1,000/year",
        high: "₱5,000/year",
        details: "Bags: ₱300-2,000. Supplies (crayons, paper, etc.): ₱500-2,000. Uniform: ₱500-2,000/set. PE uniform: ₱300-1,000.",
      },
      {
        name: "Medical (check-ups, dental, emergencies)",
        low: "₱500/mo",
        high: "₱3,000/mo",
        details: "Semi-annual pedia visits. First dental visit by age 3 (₱500-2,000). Eye check-up if needed. Budget ₱500-1,000/month for medicines and unexpected illness. ER visits: ₱2,000-15,000.",
      },
      {
        name: "Extracurriculars",
        low: "₱0",
        high: "₱3,000–₱8,000/mo",
        details: "Swimming lessons: ₱3,000-5,000/month. Art/music: ₱2,000-4,000/month. Sports: ₱1,500-4,000/month. Not mandatory at this age — free play is more important. YouTube tutorials for at-home learning.",
      },
      {
        name: "Yaya / Childcare",
        low: "₱0 (family helps)",
        high: "₱5,000–₱10,000/mo",
        details: "Yaya (full-time): ₱5,000-10,000/month + food & lodging. Part-time babysitter: ₱300-500/day. Daycare center: ₱3,000-8,000/month. If both parents work, childcare is often the biggest expense.",
      },
    ],
  },
  {
    age: "Elementary (6–12 years)",
    emoji: "🎒",
    color: "bg-green-50 border-green-200",
    headerColor: "text-green-800",
    monthlyLow: 8000,
    monthlyHigh: 30000,
    categories: [
      {
        name: "Tuition",
        low: "₱0 (public school)",
        high: "₱10,000–₱35,000/mo",
        details: "Public school: FREE (DepEd). Affordable private: ₱3,000-8,000/mo. Mid-range Catholic/private: ₱8,000-15,000/mo. Premium/international: ₱25,000-80,000+/mo. Annual miscellaneous fees: ₱5,000-25,000. Books: ₱3,000-8,000/year (or borrow/buy secondhand).",
      },
      {
        name: "School Baon & Food",
        low: "₱2,500/mo",
        high: "₱5,000/mo",
        details: "Daily baon: ₱80-200/day × 20 school days = ₱1,600-4,000/month. Plus meals at home. Growing kids eat more. Consider meal prep to save on baon costs.",
      },
      {
        name: "School Supplies & Projects",
        low: "₱2,000/year",
        high: "₱8,000/year",
        details: "Notebooks, pens, art materials: ₱1,000-3,000/year. School projects (the dreaded group projects): ₱200-1,000 per project. Science fair, book reports, etc. — budget ₱500-1,000/quarter for projects.",
      },
      {
        name: "Medical & Dental",
        low: "₱500/mo",
        high: "₱2,500/mo",
        details: "Annual physical exam, dental cleaning (₱500-2,000), eye check-up. Braces consultation starts around 10-12: ₱30,000-80,000 total. Glasses if needed: ₱1,500-5,000.",
      },
      {
        name: "Gadgets (inevitable)",
        low: "₱0",
        high: "₱5,000–₱15,000/year",
        details: "Tablet for school projects: ₱5,000-15,000. Internet for research: ₱1,500-2,500/month (shared family expense). Many schools now require gadgets for blended learning.",
      },
      {
        name: "Extracurriculars & Summer",
        low: "₱0",
        high: "₱5,000–₱10,000/mo",
        details: "Sports (basketball, swimming, martial arts): ₱2,000-5,000/month. Music/art lessons: ₱2,000-5,000/month. Summer camp/workshops: ₱3,000-15,000. Boy/Girl Scouts, school clubs.",
      },
    ],
  },
  {
    age: "High School (13–18 years)",
    emoji: "🏫",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    monthlyLow: 10000,
    monthlyHigh: 45000,
    categories: [
      {
        name: "Tuition (JHS & SHS)",
        low: "₱0 (public)",
        high: "₱15,000–₱50,000/mo",
        details: "Public school: FREE (K-12 program). Affordable private: ₱5,000-12,000/mo. Mid-range private: ₱12,000-25,000/mo. Premium/international: ₱35,000-100,000+/mo. SHS may have additional fees for STEM/ABM tracks (lab fees, equipment). Books: ₱5,000-12,000/year.",
      },
      {
        name: "Allowance & Transportation",
        low: "₱3,000/mo",
        high: "₱8,000/mo",
        details: "Daily allowance: ₱100-300/day. Transportation (jeep, bus, UV): ₱50-150/day. If commuting to a farther school, transport costs add up. Student discount cards help.",
      },
      {
        name: "Gadgets & Internet",
        low: "₱0 (shared family)",
        high: "₱8,000–₱25,000/year",
        details: "Laptop/tablet: ₱15,000-40,000 (one-time, can last 3-5 years). Smartphone: ₱5,000-15,000. Internet load/plan: ₱500-1,000/mo. These are practically requirements now for school output.",
      },
      {
        name: "School Events, Org, & Extras",
        low: "₱1,000/year",
        high: "₱10,000–₱20,000/year",
        details: "Prom: ₱3,000-15,000 (outfit, ticket, grooming). Retreat/recollection: ₱1,000-3,000. Field trips: ₱500-3,000 each. School org fees, events, contributions. Grad fees (Grade 10 & 12): ₱2,000-8,000.",
      },
      {
        name: "Tutorial / Review Centers",
        low: "₱0",
        high: "₱5,000–₱15,000/mo",
        details: "Private tutor: ₱300-500/hour. Review centers (for college entrance exams): ₱15,000-40,000 total. UPCAT/ACET/DCAT review: crucial investment for Grade 11-12. Online tutorials (Khan Academy, etc.): FREE.",
      },
      {
        name: "Medical & Personal Care",
        low: "₱500/mo",
        high: "₱3,000/mo",
        details: "Braces (if needed): ₱30,000-80,000 total over 1-3 years. Dermatologist (acne phase): ₱500-2,000/visit. Skincare, hygiene products — expenses increase. Annual check-up, dental cleaning.",
      },
    ],
  },
  {
    age: "College (18–23+ years)",
    emoji: "🎓",
    color: "bg-violet-50 border-violet-200",
    headerColor: "text-violet-800",
    monthlyLow: 12000,
    monthlyHigh: 80000,
    categories: [
      {
        name: "Tuition & Fees",
        low: "₱0 (SUCs — Free Tuition Law)",
        high: "₱50,000–₱120,000/sem",
        details: "State Universities (UP, PUP, PLM, TUP, etc.): FREE tuition under RA 10931 (Universal Access to Quality Tertiary Education Act). Misc fees still apply: ₱3,000-15,000/sem. Affordable private: ₱25,000-50,000/sem. Mid-range (UST, Adamson, FEU): ₱50,000-80,000/sem. Premium (Ateneo, La Salle, UP Manila med): ₱80,000-200,000+/sem. Scholarships: DOST, CHED, SM Foundation, Ayala, school-based — APPLY TO ALL.",
      },
      {
        name: "Allowance & Food",
        low: "₱5,000/mo",
        high: "₱15,000/mo",
        details: "Daily allowance: ₱200-500/day. If living away from home, food budget: ₱5,000-10,000/month. Cooking at a dorm/boarding house saves 30-50% vs. eating out.",
      },
      {
        name: "Boarding / Dorm (if away from home)",
        low: "₱0 (lives at home)",
        high: "₱5,000–₱15,000/mo",
        details: "University dorm: ₱2,000-5,000/month. Boarding house near school: ₱3,000-8,000/month. Shared apartment/condo: ₱5,000-15,000/month (split with roommates). Includes utilities: water, electricity, internet.",
      },
      {
        name: "Transportation",
        low: "₱1,000/mo",
        high: "₱5,000/mo",
        details: "Student discount (20% on public transport). Commute: ₱50-200/day. If far from school, daily commute can be ₱100-300+. Some students get motorcycles (₱40,000-80,000 one-time + gas/maintenance).",
      },
      {
        name: "Books, Supplies & Equipment",
        low: "₱2,000/sem",
        high: "₱15,000–₱30,000/sem",
        details: "Textbooks: ₱500-3,000 each (buy secondhand or photocopy). Engineering/architecture/med: lab fees, equipment, materials can be VERY expensive (₱10,000-30,000/sem). Laptop (if not yet owned): ₱20,000-50,000.",
      },
      {
        name: "Org Fees, Thesis, & Graduation",
        low: "₱2,000/year",
        high: "₱15,000–₱30,000/year",
        details: "Org/club fees: ₱500-2,000/sem. Thesis/capstone project: ₱5,000-30,000 (binding, printing, materials, software). OJT/internship expenses: ₱3,000-10,000 (transpo, attire, food). Graduation: toga rental, pictorial, celebration — ₱5,000-20,000.",
      },
    ],
  },
  {
    age: "Post-College / Adult Child (23+ years)",
    emoji: "🏠",
    color: "bg-gray-50 border-gray-200",
    headerColor: "text-gray-800",
    monthlyLow: 0,
    monthlyHigh: 15000,
    categories: [
      {
        name: "Board Review / Licensure Exam",
        low: "₱5,000 (self-study)",
        high: "₱30,000–₱80,000",
        details: "Review centers: ₱20,000-60,000 (CPA, engineering, nursing, law bar). Exam fees: ₱1,000-5,000. If child still lives at home during review: food, utilities, transpo — expect 3-12 months of support.",
      },
      {
        name: "Transitional Support",
        low: "₱0",
        high: "₱10,000–₱15,000/mo",
        details: "Many Filipino parents support children until they're financially stable. Initial job hunting period (1-6 months): expect to provide allowance/baon. First apartment deposit: ₱10,000-30,000 (2 months advance + 1 month deposit). Professional wardrobe: ₱5,000-15,000.",
      },
      {
        name: "When to Stop Supporting",
        low: "—",
        high: "—",
        details: "No right answer — Filipino culture often means indefinite support. Set expectations early. Some parents set a timeline (e.g., 1 year after graduation). Others transition to 'as needed' support. Financial independence is the goal for both parent and child.",
      },
    ],
  },
];

/* ─────────── EMERGENCY FUND ─────────── */
const emergencyScenarios = [
  { scenario: "Child hospitalization (dengue, pneumonia)", cost: "₱20,000–₱100,000+", note: "PhilHealth + HMO helps but may not cover everything. ICU: ₱15,000-30,000/day" },
  { scenario: "Emergency surgery (appendectomy, accident)", cost: "₱50,000–₱300,000+", note: "Public hospital is much cheaper. Always have PhilHealth active." },
  { scenario: "Sudden job loss (3-6 months expenses)", cost: "₱50,000–₱200,000", note: "Should cover rent, food, bills, and children's ongoing needs" },
  { scenario: "Natural disaster (typhoon, flood damage)", cost: "₱10,000–₱100,000+", note: "Rebuilding, temporary housing, replacement of essentials" },
  { scenario: "Orthodontics / dental emergency", cost: "₱30,000–₱80,000", note: "Braces, extraction, root canal. Rarely covered by HMO fully" },
  { scenario: "Unexpected school expenses", cost: "₱5,000–₱20,000", note: "Field trips, special projects, competitions, grad fees" },
];

/* ─────────── BUDGET CALCULATOR ─────────── */
function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(30000);
  const [childAge, setChildAge] = useState("newborn");
  const [schoolType, setSchoolType] = useState("public");
  const [deliveryType, setDeliveryType] = useState("normal");
  const [hospitalType, setHospitalType] = useState("public");

  const getMonthlyChildCost = () => {
    const base: Record<string, { low: number; high: number }> = {
      newborn: { low: 8000, high: 25000 },
      toddler: { low: 7000, high: 20000 },
      preschool: { low: 10000, high: 35000 },
      elementary: { low: 8000, high: 30000 },
      highschool: { low: 10000, high: 45000 },
      college: { low: 12000, high: 80000 },
    };
    const range = base[childAge] || base.newborn;
    if (schoolType === "public") return { low: range.low, high: Math.round(range.low * 1.5) };
    if (schoolType === "mid") return { low: Math.round((range.low + range.high) / 2 * 0.7), high: Math.round((range.low + range.high) / 2 * 1.3) };
    return { low: Math.round(range.high * 0.7), high: range.high };
  };

  const getDeliveryCost = () => {
    if (hospitalType === "public") {
      return deliveryType === "normal"
        ? { cost: 10000, philhealth: 6500, net: 3500 }
        : { cost: 22000, philhealth: 19000, net: 3000 };
    }
    return deliveryType === "normal"
      ? { cost: 55000, philhealth: 6500, net: 48500 }
      : { cost: 150000, philhealth: 19000, net: 131000 };
  };

  const childCost = getMonthlyChildCost();
  const delivery = getDeliveryCost();
  const avgMonthlyCost = Math.round((childCost.low + childCost.high) / 2);
  const percentOfIncome = Math.round((avgMonthlyCost / monthlyIncome) * 100);
  const recommended6moEmergency = avgMonthlyCost * 6;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-pink-600" />
        <h2 className="text-gray-900">Family Budget Calculator</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Monthly Household Income</label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value) || 0)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Child's Age Group</label>
          <select
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="newborn">Newborn (0-12 months)</option>
            <option value="toddler">Toddler (1-3 years)</option>
            <option value="preschool">Pre-School (3-5 years)</option>
            <option value="elementary">Elementary (6-12 years)</option>
            <option value="highschool">High School (13-18 years)</option>
            <option value="college">College (18-23+ years)</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">School Type</label>
          <select
            value={schoolType}
            onChange={(e) => setSchoolType(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="public">Public / Government</option>
            <option value="mid">Mid-Range Private</option>
            <option value="premium">Premium / International</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Delivery Type (for planning)</label>
          <div className="flex gap-2">
            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
              className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="normal">Normal Delivery</option>
              <option value="cs">Cesarean Section</option>
            </select>
            <select
              value={hospitalType}
              onChange={(e) => setHospitalType(e.target.value)}
              className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="public">Public Hospital</option>
              <option value="private">Private Hospital</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div className="bg-pink-50 rounded-xl p-4 text-center">
          <div className="text-xs text-pink-600 mb-1">Est. Monthly Child Cost</div>
          <div className="text-pink-900">₱{childCost.low.toLocaleString()} – ₱{childCost.high.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Average: ₱{avgMonthlyCost.toLocaleString()}/mo</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-xs text-blue-600 mb-1">% of Income</div>
          <div className={`${percentOfIncome > 50 ? "text-red-700" : percentOfIncome > 30 ? "text-amber-700" : "text-green-700"}`}>
            {percentOfIncome}%
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {percentOfIncome > 50 ? "⚠️ Very tight budget" : percentOfIncome > 30 ? "⚠️ Budget carefully" : "✅ Manageable"}
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-xs text-green-600 mb-1">Delivery Cost (est.)</div>
          <div className="text-green-900">₱{delivery.net.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">After PhilHealth (₱{delivery.philhealth.toLocaleString()})</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 text-center">
          <div className="text-xs text-amber-600 mb-1">6-Month Emergency Fund</div>
          <div className="text-amber-900">₱{recommended6moEmergency.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Recommended minimum for child</div>
        </div>
      </div>

      <div className="p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500">
          <strong>Note:</strong> These are estimates based on 2025-2026 Metro Manila prices. Provincial costs are typically 20-40% lower.
          Actual costs vary by lifestyle, location, and individual choices. Always budget higher than estimates.
        </p>
      </div>
    </div>
  );
}

/* ─────────── TOTAL COST SUMMARY ─────────── */
const totalCostSummary = [
  { phase: "Pregnancy & Delivery", duration: "9 months", public: "₱10,000–₱25,000", private: "₱80,000–₱300,000" },
  { phase: "Newborn (0-1 yr)", duration: "1 year", public: "₱96,000–₱150,000", private: "₱180,000–₱350,000" },
  { phase: "Toddler (1-3 yrs)", duration: "2 years", public: "₱168,000–₱240,000", private: "₱300,000–₱500,000" },
  { phase: "Pre-School (3-5 yrs)", duration: "2 years", public: "₱120,000–₱240,000", private: "₱400,000–₱850,000" },
  { phase: "Elementary (6-12 yrs)", duration: "6 years", public: "₱576,000–₱720,000", private: "₱1,200,000–₱2,500,000" },
  { phase: "High School (13-18 yrs)", duration: "6 years (JHS+SHS)", public: "₱720,000–₱960,000", private: "₱1,500,000–₱3,200,000" },
  { phase: "College (18-23 yrs)", duration: "4-5 years", public: "₱288,000–₱480,000", private: "₱1,200,000–₱4,800,000" },
];

/* ─────────── MONEY-SAVING TIPS ─────────── */
const savingTips = [
  {
    title: "Pregnancy & Newborn",
    tips: [
      "Breastfeed exclusively for 6 months — free, healthiest, and reduces illness (saves on medicine too)",
      "Get prenatal care at your LGU health center — free check-ups and vitamins",
      "Use cloth diapers — upfront cost of ₱5,000-10,000 but saves ₱30,000-50,000 in the first 2 years",
      "Accept hand-me-down baby clothes — babies outgrow them in weeks",
      "Get ALL free EPI vaccines at the health center — don't skip them",
      "Join mommy groups on Facebook — great for secondhand baby items and advice",
      "SSS Maternity Benefit: file your claim for 60-78 days of salary replacement",
    ],
  },
  {
    title: "School Years",
    tips: [
      "Public schools are FREE and many have good quality education (K-12)",
      "Apply for scholarships EARLY and OFTEN — DOST, CHED, SM, Ayala, Megaworld, school-based",
      "Buy secondhand textbooks or share with classmates",
      "Meal prep school baon instead of giving cash (healthier and cheaper)",
      "Join buy & sell groups for school uniforms and supplies",
      "Use free learning platforms: Khan Academy, Coursera, YouTube",
      "Start a small education fund early — even ₱500/month grows to ₱108,000+ in 18 years (with interest)",
    ],
  },
  {
    title: "General Money-Saving",
    tips: [
      "Cook at home — eating out with kids is 3-5x more expensive",
      "Get family PhilHealth + HMO coverage from your employer",
      "Use generic medicines — same quality, 50-80% cheaper",
      "Buy diapers, milk, and essentials in bulk during sales (Lazada/Shopee 9.9, 11.11, 12.12)",
      "Invest in a good breast pump early — saves thousands on formula",
      "Don't buy designer baby/kids clothes — they don't care and they outgrow everything",
      "Open a separate savings account for each child — automate monthly transfers",
      "Pag-IBIG MP2 savings program — tax-free, higher interest than banks, great for education fund",
    ],
  },
];

/* ─────────── MAIN COMPONENT ─────────── */
export function ChildrenFund() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 sm:p-8 border border-pink-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-pink-100 rounded-xl">
            <Baby className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-pink-900">Children & Family Fund Guide</h1>
        </div>
        <p className="text-sm text-pink-700 leading-relaxed max-w-2xl">
          The complete cost breakdown of raising a child in the Philippines — from pregnancy
          and delivery to college graduation. Covers hospital expenses, diapers, milk, tuition
          at every level, emergency funds, and practical money-saving tips.
        </p>
      </div>

      {/* Reality Check */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-amber-900 mb-1">Reality Check: How Much Does It Cost to Raise a Child in the Philippines?</h3>
            <p className="text-sm text-amber-700 mb-3">
              Based on 2025-2026 estimates, raising ONE child from birth to college graduation costs:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/80 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-0.5">Public School Path (Budget-Conscious)</div>
                <div className="text-amber-900">₱1.5M – ₱2.5M</div>
                <div className="text-xs text-gray-400">~₱6,500–₱11,000/month average over 23 years</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-0.5">Private School Path (Mid to Premium)</div>
                <div className="text-amber-900">₱4M – ₱12M+</div>
                <div className="text-xs text-gray-400">~₱15,000–₱45,000/month average over 23 years</div>
              </div>
            </div>
            <p className="text-xs text-amber-600 mt-3">
              Don't let these numbers scare you. Planning ahead, using government benefits, and smart budgeting makes it very manageable.
              This guide will show you how.
            </p>
          </div>
        </div>
      </div>

      {/* Budget Calculator */}
      <BudgetCalculator />

      {/* Pregnancy & Delivery Section */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Hospital className="w-5 h-5 text-rose-600" />
          <h2 className="text-gray-900">Pregnancy & Delivery Costs</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Prenatal care, hospital fees, and what PhilHealth covers</p>

        {/* Prenatal */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
          <h3 className="text-gray-800 mb-3">Prenatal Care Expenses</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-2 text-gray-500">Item</th>
                  <th className="text-left p-2 text-gray-500">Public/Govt</th>
                  <th className="text-left p-2 text-gray-500">Private</th>
                  <th className="text-left p-2 text-gray-500 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pregnancyCosts.prenatal.map((item) => (
                  <tr key={item.item} className="border-b border-gray-50">
                    <td className="p-2 text-gray-700">{item.item}</td>
                    <td className="p-2 text-green-700">{item.pub}</td>
                    <td className="p-2 text-blue-700">{item.priv}</td>
                    <td className="p-2 text-gray-400 text-xs hidden sm:table-cell">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
          <h3 className="text-gray-800 mb-3">Delivery Options & Costs</h3>
          <div className="space-y-3">
            {pregnancyCosts.delivery.map((d) => (
              <div key={d.type} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1">
                    <h4 className="text-gray-800 text-sm">{d.type}</h4>
                    <p className="text-xs text-gray-500 mt-1">{d.details}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <span className="px-2.5 py-1 bg-white rounded-lg text-xs text-gray-700 border border-gray-100">
                      Cost: {d.cost}
                    </span>
                    <span className="px-2.5 py-1 bg-green-50 rounded-lg text-xs text-green-700 border border-green-100">
                      PhilHealth: {d.philhealth}
                    </span>
                    <span className="px-2.5 py-1 bg-blue-50 rounded-lg text-xs text-blue-700 border border-blue-100">
                      Net: {d.netCost}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PhilHealth & SSS Tips */}
        <div className="bg-green-50 rounded-xl border border-green-200 p-5">
          <h3 className="text-green-800 mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" /> PhilHealth & SSS Maternity Benefits
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {pregnancyCosts.philhealthTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-green-700 bg-white/60 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {tip}
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-white/60 rounded-lg">
            <p className="text-sm text-green-700">
              <strong>SSS Maternity Benefit:</strong> You receive your average daily salary credit × 60 days (NSD) or 78 days (CS).
              For solo parents: additional 15 days. Example: if your monthly salary credit is ₱25,000, NSD benefit ≈ ₱50,000. This is SEPARATE from PhilHealth and paid directly to you.
            </p>
          </div>
        </div>
      </div>

      {/* Age-Based Breakdown */}
      <div>
        <h2 className="text-gray-900 mb-1">Age-by-Age Expense Breakdown</h2>
        <p className="text-sm text-gray-500 mb-4">Click each stage to see detailed costs</p>

        {/* Phase Selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ageBreakdowns.map((phase, i) => (
            <button
              key={phase.age}
              onClick={() => setActivePhase(i)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                activePhase === i
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className="mr-1">{phase.emoji}</span> {phase.age.split("(")[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        {ageBreakdowns[activePhase] && (
          <div className={`rounded-xl border p-5 sm:p-6 ${ageBreakdowns[activePhase].color}`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className={ageBreakdowns[activePhase].headerColor}>
                  {ageBreakdowns[activePhase].emoji} {ageBreakdowns[activePhase].age}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Monthly range: ₱{ageBreakdowns[activePhase].monthlyLow.toLocaleString()} – ₱{ageBreakdowns[activePhase].monthlyHigh.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Yearly estimate</div>
                <div className="text-gray-700 text-sm">
                  ₱{(ageBreakdowns[activePhase].monthlyLow * 12).toLocaleString()} – ₱{(ageBreakdowns[activePhase].monthlyHigh * 12).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {ageBreakdowns[activePhase].categories.map((cat) => (
                <details key={cat.name} className="bg-white/80 rounded-xl border border-white overflow-hidden group">
                  <summary className="p-4 cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <h4 className="text-gray-800 text-sm">{cat.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{cat.low} – {cat.high}</span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-open:rotate-90 transition-transform" />
                      </div>
                    </div>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{cat.details}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Total Cost Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-pink-600" />
          <h2 className="text-gray-900">Total Cost Summary: Birth to College</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-3 text-gray-500">Phase</th>
                <th className="text-left p-3 text-gray-500">Duration</th>
                <th className="text-left p-3 text-gray-500">Public/Budget</th>
                <th className="text-left p-3 text-gray-500">Private/Premium</th>
              </tr>
            </thead>
            <tbody>
              {totalCostSummary.map((row) => (
                <tr key={row.phase} className="border-b border-gray-50">
                  <td className="p-3 text-gray-700">{row.phase}</td>
                  <td className="p-3 text-gray-500">{row.duration}</td>
                  <td className="p-3 text-green-700">{row.public}</td>
                  <td className="p-3 text-blue-700">{row.private}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="p-3 text-gray-900" colSpan={2}><strong>ESTIMATED TOTAL</strong></td>
                <td className="p-3 text-green-800"><strong>₱1.5M – ₱2.8M</strong></td>
                <td className="p-3 text-blue-800"><strong>₱4.9M – ₱12.5M</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          * Does not include inflation adjustments. With average 5% inflation, actual costs will be higher for later stages.
          Estimates based on Metro Manila 2025-2026 prices.
        </p>
      </div>

      {/* Emergency Fund */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-red-600" />
          <h2 className="text-gray-900">Emergency Fund for Families</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          With a child, your emergency fund needs are HIGHER. Here's what you should prepare for:
        </p>

        <div className="space-y-3 mb-4">
          {emergencyScenarios.map((item) => (
            <div key={item.scenario} className="p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <div className="text-sm text-gray-800">{item.scenario}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.note}</div>
              </div>
              <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm shrink-0">{item.cost}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-4 bg-amber-50 rounded-xl text-center">
            <div className="text-xs text-amber-600 mb-1">Minimum Emergency Fund</div>
            <div className="text-amber-900">3 months expenses</div>
            <div className="text-xs text-gray-500 mt-1">₱50,000 – ₱150,000</div>
          </div>
          <div className="p-4 bg-green-50 rounded-xl text-center">
            <div className="text-xs text-green-600 mb-1">Recommended</div>
            <div className="text-green-900">6 months expenses</div>
            <div className="text-xs text-gray-500 mt-1">₱100,000 – ₱300,000</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl text-center">
            <div className="text-xs text-blue-600 mb-1">Ideal (with kids)</div>
            <div className="text-blue-900">12 months expenses</div>
            <div className="text-xs text-gray-500 mt-1">₱200,000 – ₱600,000</div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Where to keep your emergency fund:</strong> High-yield savings accounts (Seabank, Maya, Tonik: 3-6% p.a.),
            Pag-IBIG MP2 (for medium-term), or a combination. It should be liquid (easy to withdraw) and separate from your daily account.
          </p>
        </div>
      </div>

      {/* Education Fund Planning */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-violet-600" />
          <h2 className="text-gray-900">Education Fund Planning</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Start early — even small monthly amounts grow significantly over 15-18 years</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-violet-50 rounded-xl">
            <h4 className="text-violet-800 mb-2">If You Start When Baby Is Born</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between p-2 bg-white/60 rounded-lg">
                <span>₱1,000/month for 18 years</span>
                <span className="text-violet-700">≈ ₱370,000+</span>
              </div>
              <div className="flex justify-between p-2 bg-white/60 rounded-lg">
                <span>₱3,000/month for 18 years</span>
                <span className="text-violet-700">≈ ₱1,110,000+</span>
              </div>
              <div className="flex justify-between p-2 bg-white/60 rounded-lg">
                <span>₱5,000/month for 18 years</span>
                <span className="text-violet-700">≈ ₱1,850,000+</span>
              </div>
              <div className="flex justify-between p-2 bg-white/60 rounded-lg">
                <span>₱10,000/month for 18 years</span>
                <span className="text-violet-700">≈ ₱3,700,000+</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">* Assumes ~6% annual return (Pag-IBIG MP2 average)</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <h4 className="text-blue-800 mb-2">Best Investment Vehicles for Education Fund</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {[
                { name: "Pag-IBIG MP2", rate: "5-7% p.a.", note: "Tax-free, government-backed, 5-year lock-in" },
                { name: "Digital Bank Savings", rate: "3-6% p.a.", note: "Liquid, easy access. Seabank, Maya, Tonik" },
                { name: "Bond/Money Market Funds", rate: "4-6% p.a.", note: "Low risk, managed by banks/fund managers" },
                { name: "Stock Index Funds (FMETF)", rate: "7-10% p.a. (long-term)", note: "Higher returns but volatile. Best for 10+ year horizon" },
                { name: "Educational Plans", rate: "Varies", note: "Pre-need companies. Check SRC license. Some have failed in the past" },
              ].map((v) => (
                <div key={v.name} className="p-2 bg-white/60 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{v.name}</span>
                    <span className="text-blue-600 text-xs">{v.rate}</span>
                  </div>
                  <p className="text-xs text-gray-400">{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Pro tip:</strong> Open a separate bank account labeled "Education Fund" and set up automatic monthly transfers
            on payday. Treat it like a bill — non-negotiable. Even ₱1,000/month is better than zero.
            Combine with Pag-IBIG MP2 for the best tax-free returns.
          </p>
        </div>
      </div>

      {/* Money-Saving Tips */}
      <div>
        <h2 className="text-gray-900 mb-1">Money-Saving Tips for Parents</h2>
        <p className="text-sm text-gray-500 mb-4">Practical ways to reduce costs without compromising care</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {savingTips.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Government Benefits & Support */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">Government Benefits & Support for Parents</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              title: "SSS Maternity Benefit",
              detail: "60 days salary (NSD) or 78 days (CS). Solo parents get extra 15 days. Must have at least 3 monthly contributions in last 12 months before delivery.",
            },
            {
              title: "PhilHealth Maternity Package",
              detail: "₱6,500 (NSD) or ₱19,000 (CS). Also covers newborn screening. Must have 3 contributions in last 6 months.",
            },
            {
              title: "Expanded Maternity Leave (RA 11210)",
              detail: "105 days paid leave for all female workers (private & govt). Additional 15 days for solo parents. 7 days transferable to father/partner.",
            },
            {
              title: "Paternity Leave (RA 8187)",
              detail: "7 days paid leave for married male employees for the first 4 deliveries of the legitimate spouse. Must be living with the wife.",
            },
            {
              title: "Solo Parents Welfare Act (RA 8972)",
              detail: "Solo Parent ID gives: 10% discount on select items, flexible work arrangement, livelihood programs, educational scholarship for children.",
            },
            {
              title: "Free Public Education (K-12)",
              detail: "RA 10533: Free kindergarten through senior high school in public schools. Free tuition in SUCs (state universities) under RA 10931.",
            },
            {
              title: "4Ps (Pantawid Pamilyang Pilipino Program)",
              detail: "Cash grants for poor families: ₱500-700/month for health + ₱300-500/month per child for education. Apply through DSWD.",
            },
            {
              title: "Tax Exemption for Minimum Wage Earners",
              detail: "Minimum wage earners are exempt from income tax. Additional personal exemption for each dependent child (up to 4).",
            },
          ].map((benefit) => (
            <div key={benefit.title} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 text-sm mb-1">{benefit.title}</h4>
              <p className="text-xs text-gray-500">{benefit.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-pink-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "How much money should I save before having a baby?",
              a: "At minimum: 3-6 months of household expenses + delivery costs + ₱30,000-50,000 for baby essentials. Ideally, save ₱100,000-₱200,000+ before trying. This covers delivery, first few months of baby expenses, and an emergency buffer. Don't forget to factor in potential income loss during maternity leave (though SSS maternity benefit helps).",
            },
            {
              q: "Public or private hospital for delivery?",
              a: "Public hospitals (PGH, Fabella, Ospital ng Makati) provide good medical care at a fraction of the cost — often FREE with PhilHealth. Downside: long waits, shared wards, less privacy. Private hospitals offer comfort, private rooms, and choice of doctor, but cost 5-20x more. Middle ground: lying-in/birthing centers (₱15,000-50,000) for low-risk normal deliveries.",
            },
            {
              q: "Can I afford a child on minimum wage?",
              a: "It's challenging but possible — millions of Filipino families do it. Keys: (1) Maximize free government services (health centers, public schools, EPI vaccines), (2) Breastfeed exclusively, (3) Use cloth diapers, (4) Buy generic medicines, (5) Accept hand-me-downs, (6) Apply for 4Ps if eligible, (7) Get Solo Parent ID if applicable. Government support exists — use all of it.",
            },
            {
              q: "What's the best age gap between children?",
              a: "Financially optimal: 3-5 years apart. This allows recovery from delivery costs, lets the older child start school (freeing up childcare), and spreads expenses over time. Medically, WHO recommends at least 2 years between pregnancies for maternal health. Every family is different — plan based on your financial and emotional readiness.",
            },
            {
              q: "How do I start an education fund?",
              a: "Step 1: Open a separate savings account (digital bank for higher interest). Step 2: Set up auto-transfer of at least ₱1,000/month on payday. Step 3: Once you have ₱5,000-10,000, start investing in Pag-IBIG MP2 (5-7% tax-free returns). Step 4: For long-term (10+ years), consider bond/equity funds. Key: START NOW, even if it's small. ₱1,000/month from birth = ₱370,000+ by college.",
            },
            {
              q: "Should I get an educational plan from a pre-need company?",
              a: "Be very cautious. Several pre-need companies collapsed in the past (Pacific Plans, College Assurance Plan, etc.), leaving families without coverage. If you do consider one, verify: (1) SEC registration, (2) Insurance Commission approval, (3) Company financial standing. Alternative: DIY education fund via MP2 + index funds is generally safer and offers better returns.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-gray-800 mb-2">{item.q}</h4>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-6 text-white text-center">
        <h2 className="text-white mb-2">Planning Makes All the Difference</h2>
        <p className="text-pink-100 text-sm max-w-lg mx-auto">
          Raising a child is the most rewarding (and expensive) thing you'll ever do.
          But with proper planning, government benefits, and smart budgeting — it's absolutely doable
          at any income level. Start saving now, even if it's just ₱500 a month.
        </p>
      </div>
    </div>
  );
}
