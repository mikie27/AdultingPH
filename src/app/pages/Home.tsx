import { Link } from "react-router";
import {
  Receipt,
  Shield,
  Heart,
  Building2,
  Car,
  Briefcase,
  BookOpen,
  ArrowRight,
  Calculator,
  TrendingUp,
  Users,
  ShieldCheck,
  CreditCard,
  Landmark,
  ShoppingCart,
  HeartHandshake,
  Scale,
  Plane,
  Gavel,
  Brain,
  Baby,
  Skull,
  KeyRound,
  Globe,
  Smartphone,
  Target,
  Coins,
  BriefcaseBusiness,
  Wallet,
  Milestone,
  ShieldAlert,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  path: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  iconBg: string;
}

interface SectionGroup {
  category: string;
  categoryIcon: LucideIcon;
  categoryColor: string;
  items: NavItem[];
}

const sectionGroups: SectionGroup[] = [
  {
    category: "Taxes & Contributions",
    categoryIcon: Coins,
    categoryColor: "text-red-500",
    items: [
      { path: "/income-tax", title: "Income Tax & BIR", desc: "Tax brackets, TIN registration, BIR forms & compliance", icon: Receipt, color: "bg-red-50 text-red-600 border-red-100", iconBg: "bg-red-100" },
      { path: "/sss", title: "SSS Contributions", desc: "How much you pay, where it goes, and benefits", icon: Shield, color: "bg-sky-50 text-sky-600 border-sky-100", iconBg: "bg-sky-100" },
      { path: "/philhealth", title: "PhilHealth", desc: "Health insurance contributions and coverage", icon: Heart, color: "bg-green-50 text-green-600 border-green-100", iconBg: "bg-green-100" },
      { path: "/pagibig", title: "Pag-IBIG Fund", desc: "Housing fund contributions, loans, and savings", icon: Building2, color: "bg-amber-50 text-amber-600 border-amber-100", iconBg: "bg-amber-100" },
    ],
  },
  {
    category: "Work & Business",
    categoryIcon: BriefcaseBusiness,
    categoryColor: "text-teal-500",
    items: [
      { path: "/business", title: "Business Registration", desc: "Sole prop, corporation, freelancer setup & BIR", icon: Briefcase, color: "bg-teal-50 text-teal-600 border-teal-100", iconBg: "bg-teal-100" },
      { path: "/labor-laws", title: "Labor Laws", desc: "Employee rights, termination, overtime, DOLE complaints", icon: Scale, color: "bg-slate-50 text-slate-600 border-slate-100", iconBg: "bg-slate-100" },
      { path: "/ofw", title: "OFW Guide", desc: "DMW process, OWWA benefits, remittance, scam alerts", icon: Globe, color: "bg-emerald-50 text-emerald-600 border-emerald-100", iconBg: "bg-emerald-100" },
    ],
  },
  {
    category: "Money & Finance",
    categoryIcon: Wallet,
    categoryColor: "text-emerald-500",
    items: [
      { path: "/banking", title: "Banking & Savings", desc: "Banks, digital banks, accounts, and saving strategies", icon: Landmark, color: "bg-emerald-50 text-emerald-600 border-emerald-100", iconBg: "bg-emerald-100" },
      { path: "/investments", title: "Investments", desc: "MP2, stocks, mutual funds, bonds, and platforms", icon: TrendingUp, color: "bg-violet-50 text-violet-600 border-violet-100", iconBg: "bg-violet-100" },
      { path: "/insurance", title: "Insurance & HMO", desc: "Life insurance, HMOs, car insurance, and protection", icon: ShieldCheck, color: "bg-rose-50 text-rose-600 border-rose-100", iconBg: "bg-rose-100" },
      { path: "/retirement", title: "Retirement Planning", desc: "SSS pension, savings strategies, passive income, 4% rule", icon: Target, color: "bg-violet-50 text-violet-600 border-violet-100", iconBg: "bg-violet-100" },
    ],
  },
  {
    category: "Big Life Decisions",
    categoryIcon: Milestone,
    categoryColor: "text-purple-500",
    items: [
      { path: "/big-purchases", title: "Big Purchases", desc: "Buying a house, car, lot — all fees and documents", icon: ShoppingCart, color: "bg-lime-50 text-lime-600 border-lime-100", iconBg: "bg-lime-100" },
      { path: "/driving", title: "Driving & Cars", desc: "License, driving laws, car buying guide, tips & fines", icon: Car, color: "bg-purple-50 text-purple-600 border-purple-100", iconBg: "bg-purple-100" },
      { path: "/renting", title: "Renting & Tenant Rights", desc: "Lease agreements, tenant rights, rent control, budgets", icon: KeyRound, color: "bg-indigo-50 text-indigo-600 border-indigo-100", iconBg: "bg-indigo-100" },
      { path: "/marriage", title: "Marriage & Family", desc: "Wedding, annulment, prenup, conjugal property", icon: HeartHandshake, color: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100", iconBg: "bg-fuchsia-100" },
      { path: "/children-fund", title: "Children & Family Fund", desc: "Pregnancy costs, child expenses by age, education fund", icon: Baby, color: "bg-rose-50 text-rose-600 border-rose-100", iconBg: "bg-rose-100" },
    ],
  },
  {
    category: "Government & Legal",
    categoryIcon: ShieldAlert,
    categoryColor: "text-blue-500",
    items: [
      { path: "/government-ids", title: "Government IDs", desc: "All IDs, how to get them, requirements, and steps", icon: CreditCard, color: "bg-cyan-50 text-cyan-600 border-cyan-100", iconBg: "bg-cyan-100" },
      { path: "/basic-laws", title: "Basic Laws", desc: "Cyber libel, defamation, bomb jokes, threats & penalties", icon: Gavel, color: "bg-red-50 text-red-600 border-red-100", iconBg: "bg-red-100" },
      { path: "/death-inheritance", title: "Death & Inheritance", desc: "Funeral costs, estate tax, property transfer, claims", icon: Skull, color: "bg-gray-50 text-gray-600 border-gray-200", iconBg: "bg-gray-200" },
      { path: "/senior-pwd", title: "Senior & PWD Benefits", desc: "Discounts, IDs, caregiver tips, government programs", icon: Users, color: "bg-amber-50 text-amber-600 border-amber-100", iconBg: "bg-amber-100" },
    ],
  },
  {
    category: "Lifestyle & Wellness",
    categoryIcon: Sparkles,
    categoryColor: "text-pink-500",
    items: [
      { path: "/travel", title: "Travel Abroad", desc: "Visas, budgets, immigration tips, first-timer guide", icon: Plane, color: "bg-sky-50 text-sky-600 border-sky-100", iconBg: "bg-sky-100" },
      { path: "/mental-health", title: "Mental Health", desc: "Crisis hotlines, therapy, medications, free support", icon: Brain, color: "bg-teal-50 text-teal-600 border-teal-100", iconBg: "bg-teal-100" },
      { path: "/digital-safety", title: "Digital Safety", desc: "Online scams, account security, e-wallet tips, privacy", icon: Smartphone, color: "bg-cyan-50 text-cyan-600 border-cyan-100", iconBg: "bg-cyan-100" },
      { path: "/adulting", title: "Other Adulting", desc: "IDs, NBI clearance, postal ID, and more", icon: BookOpen, color: "bg-pink-50 text-pink-600 border-pink-100", iconBg: "bg-pink-100" },
    ],
  },
];

const quickStats = [
  { label: "Topics Covered", value: "200+", icon: Calculator, color: "text-red-600" },
  { label: "Complete Guides", value: "24", icon: TrendingUp, color: "text-blue-600" },
  { label: "Government IDs", value: "13", icon: Users, color: "text-green-600" },
];

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs mb-4">
            Updated for 2025-2026
          </span>
          <h1 className="text-2xl sm:text-3xl text-white mb-3">
            The Complete Filipino Adulting Guide
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base leading-relaxed">
            Everything a working professional in the Philippines needs to know — taxes,
            government contributions, driving, renting, retirement, OFW life, digital safety,
            and all the adulting stuff nobody taught you in school.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
              >
                <div className="text-2xl text-white">{stat.value}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Salary Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-1">Where Does Your Salary Go?</h2>
        <p className="text-sm text-gray-500 mb-5">
          For a typical employee earning PHP 25,000/month
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "SSS", amount: "1,125.00", pct: "4.5%", color: "bg-sky-500" },
            { label: "PhilHealth", amount: "500.00", pct: "2%", color: "bg-green-500" },
            { label: "Pag-IBIG", amount: "200.00", pct: "~1%", color: "bg-amber-500" },
            { label: "Income Tax", amount: "1,718.75", pct: "~7%", color: "bg-red-500" },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
              <div className={`w-3 h-3 rounded-full ${item.color} mx-auto mb-2`} />
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-gray-900">PHP {item.amount}</div>
              <div className="text-xs text-gray-400 mt-1">{item.pct} of salary</div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
          <span className="text-sm text-blue-700">
            Total Monthly Deductions: ~PHP 3,543.75 | Take Home: ~PHP 21,456.25
          </span>
        </div>
      </div>

      {/* Topics Grid - Grouped */}
      <div className="space-y-8">
        {sectionGroups.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-2.5 mb-4">
              <group.categoryIcon className={`w-5 h-5 ${group.categoryColor}`} />
              <h2 className="text-gray-900">{group.category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.items.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className={`group border rounded-xl p-4 sm:p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${section.color}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-2.5 rounded-xl ${section.iconBg}`}>
                      <section.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 group-hover:text-blue-700 transition-colors text-sm sm:text-base">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{section.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-0.5 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center py-6 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          This is an educational resource. Always check official government websites for the most current information.
        </p>
      </div>
    </div>
  );
}
