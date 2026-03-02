import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import {
  Home,
  Receipt,
  Shield,
  Heart,
  Building2,
  Car,
  Briefcase,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BookOpen,
  ShieldCheck,
  CreditCard,
  Landmark,
  TrendingUp,
  ShoppingCart,
  HeartHandshake,
  Scale,
  Plane,
  Gavel,
  Brain,
  Baby,
  Skull,
  KeyRound,
  Users,
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
  label: string;
  icon: LucideIcon;
  color: string;
}

interface NavGroup {
  category: string;
  icon: LucideIcon;
  color: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    category: "Taxes & Contributions",
    icon: Coins,
    color: "text-red-500",
    items: [
      { path: "/income-tax", label: "Income Tax & BIR", icon: Receipt, color: "text-red-600" },
      { path: "/sss", label: "SSS", icon: Shield, color: "text-sky-600" },
      { path: "/philhealth", label: "PhilHealth", icon: Heart, color: "text-green-600" },
      { path: "/pagibig", label: "Pag-IBIG", icon: Building2, color: "text-amber-600" },
    ],
  },
  {
    category: "Work & Business",
    icon: BriefcaseBusiness,
    color: "text-teal-500",
    items: [
      { path: "/business", label: "Business Registration", icon: Briefcase, color: "text-teal-600" },
      { path: "/labor-laws", label: "Labor Laws", icon: Scale, color: "text-slate-600" },
      { path: "/ofw", label: "OFW Guide", icon: Globe, color: "text-emerald-600" },
    ],
  },
  {
    category: "Money & Finance",
    icon: Wallet,
    color: "text-emerald-500",
    items: [
      { path: "/banking", label: "Banking & Savings", icon: Landmark, color: "text-emerald-600" },
      { path: "/investments", label: "Investments", icon: TrendingUp, color: "text-violet-600" },
      { path: "/insurance", label: "Insurance & HMO", icon: ShieldCheck, color: "text-rose-600" },
      { path: "/retirement", label: "Retirement Planning", icon: Target, color: "text-violet-600" },
    ],
  },
  {
    category: "Big Life Decisions",
    icon: Milestone,
    color: "text-purple-500",
    items: [
      { path: "/big-purchases", label: "Big Purchases", icon: ShoppingCart, color: "text-lime-600" },
      { path: "/driving", label: "Driving & Cars", icon: Car, color: "text-purple-600" },
      { path: "/renting", label: "Renting & Tenants", icon: KeyRound, color: "text-indigo-600" },
      { path: "/marriage", label: "Marriage & Family", icon: HeartHandshake, color: "text-fuchsia-600" },
      { path: "/children-fund", label: "Children & Family Fund", icon: Baby, color: "text-rose-600" },
    ],
  },
  {
    category: "Government & Legal",
    icon: ShieldAlert,
    color: "text-blue-500",
    items: [
      { path: "/government-ids", label: "Government IDs", icon: CreditCard, color: "text-cyan-600" },
      { path: "/basic-laws", label: "Basic Laws", icon: Gavel, color: "text-red-600" },
      { path: "/death-inheritance", label: "Death & Inheritance", icon: Skull, color: "text-gray-600" },
      { path: "/senior-pwd", label: "Senior & PWD Benefits", icon: Users, color: "text-amber-600" },
    ],
  },
  {
    category: "Lifestyle & Wellness",
    icon: Sparkles,
    color: "text-pink-500",
    items: [
      { path: "/travel", label: "Travel Abroad", icon: Plane, color: "text-sky-600" },
      { path: "/mental-health", label: "Mental Health", icon: Brain, color: "text-teal-600" },
      { path: "/digital-safety", label: "Digital Safety", icon: Smartphone, color: "text-cyan-600" },
      { path: "/adulting", label: "Other Adulting", icon: BookOpen, color: "text-pink-600" },
    ],
  },
];

function getActiveGroup(pathname: string): string | null {
  for (const group of navGroups) {
    for (const item of group.items) {
      if (pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path))) {
        return group.category;
      }
    }
  }
  return null;
}

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const activeGroup = getActiveGroup(location.pathname);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    // Expand the active group and first group by default
    if (activeGroup) initial.add(activeGroup);
    initial.add(navGroups[0].category);
    return initial;
  });

  const toggleGroup = (category: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  // Ensure active group is always expanded when route changes
  const effectiveExpanded = new Set(expandedGroups);
  if (activeGroup) effectiveExpanded.add(activeGroup);

  return (
    <div className="min-h-screen bg-gray-50 font-[Inter,sans-serif]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <h1 className="text-blue-700">
          Adulting<span className="text-gray-400">PH</span>
        </h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-20 h-screen w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-gray-100 hidden lg:block">
            <h1 className="text-blue-700">
              Adulting<span className="text-gray-400">PH</span>
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">The Filipino Adulting Guide</p>
          </div>
          <nav className="p-3">
            {/* Home link */}
            <NavLink
              to="/"
              end
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all mb-2 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Home className="w-4 h-4 text-blue-600" />
              <span className="flex-1">Home</span>
            </NavLink>

            {/* Grouped navigation */}
            {navGroups.map((group) => {
              const isExpanded = effectiveExpanded.has(group.category);
              const hasActiveItem = group.items.some(
                (item) =>
                  location.pathname === item.path ||
                  (item.path !== "/" && location.pathname.startsWith(item.path))
              );

              return (
                <div key={group.category} className="mb-1">
                  {/* Category header */}
                  <button
                    onClick={() => toggleGroup(group.category)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                      hasActiveItem
                        ? "text-blue-700 bg-blue-50/50"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <group.icon className={`w-3.5 h-3.5 ${hasActiveItem ? "text-blue-500" : group.color}`} />
                    <span className="flex-1 text-left uppercase tracking-wider">{group.category}</span>
                    {isExpanded ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                  </button>

                  {/* Category items */}
                  {isExpanded && (
                    <div className="ml-2 border-l border-gray-100 pl-1 mt-0.5 mb-1">
                      {group.items.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setSidebarOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
                              isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`
                          }
                        >
                          <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                          <span className="flex-1">{item.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-5xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
