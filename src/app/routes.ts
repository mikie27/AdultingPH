import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { IncomeTax } from "./pages/IncomeTax";
import { SSS } from "./pages/SSS";
import { PhilHealth } from "./pages/PhilHealth";
import { PagIBIG } from "./pages/PagIBIG";
import { DrivingCars } from "./pages/DrivingCars";
import { BusinessRegistration } from "./pages/BusinessRegistration";
import { Insurance } from "./pages/Insurance";
import { GovernmentIDs } from "./pages/GovernmentIDs";
import { Banking } from "./pages/Banking";
import { Investments } from "./pages/Investments";
import { BigPurchases } from "./pages/BigPurchases";
import { Marriage } from "./pages/Marriage";
import { LaborLaws } from "./pages/LaborLaws";
import { Travel } from "./pages/Travel";
import { BasicLaws } from "./pages/BasicLaws";
import { MentalHealth } from "./pages/MentalHealth";
import { ChildrenFund } from "./pages/ChildrenFund";
import { DeathInheritance } from "./pages/DeathInheritance";
import { RentingTenants } from "./pages/RentingTenants";
import { SeniorPWD } from "./pages/SeniorPWD";
import { OFWGuide } from "./pages/OFWGuide";
import { DigitalAdulting } from "./pages/DigitalAdulting";
import { RetirementPlanning } from "./pages/RetirementPlanning";
import { OtherAdulting } from "./pages/OtherAdulting";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "income-tax", Component: IncomeTax },
      { path: "sss", Component: SSS },
      { path: "philhealth", Component: PhilHealth },
      { path: "pagibig", Component: PagIBIG },
      { path: "driving", Component: DrivingCars },
      { path: "business", Component: BusinessRegistration },
      { path: "insurance", Component: Insurance },
      { path: "government-ids", Component: GovernmentIDs },
      { path: "banking", Component: Banking },
      { path: "investments", Component: Investments },
      { path: "big-purchases", Component: BigPurchases },
      { path: "marriage", Component: Marriage },
      { path: "labor-laws", Component: LaborLaws },
      { path: "travel", Component: Travel },
      { path: "basic-laws", Component: BasicLaws },
      { path: "mental-health", Component: MentalHealth },
      { path: "children-fund", Component: ChildrenFund },
      { path: "death-inheritance", Component: DeathInheritance },
      { path: "renting", Component: RentingTenants },
      { path: "senior-pwd", Component: SeniorPWD },
      { path: "ofw", Component: OFWGuide },
      { path: "digital-safety", Component: DigitalAdulting },
      { path: "retirement", Component: RetirementPlanning },
      { path: "adulting", Component: OtherAdulting },
      // Redirects for old URLs
      { path: "lto", Component: DrivingCars },
      { path: "bir", Component: IncomeTax },
      { path: "*", Component: Home },
    ],
  },
]);
