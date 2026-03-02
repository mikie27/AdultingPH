import { Scale, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle, Shield, Clock, DollarSign, FileText, Users, Ban } from "lucide-react";

const employeeRights = [
  {
    right: "Minimum Wage",
    law: "RA 6727 (Wage Rationalization Act)",
    detail: "Minimum wage varies by region. NCR (Metro Manila) 2024-2025: PHP 610/day for non-agriculture. Regional wages are set by Regional Tripartite Wages and Productivity Boards.",
    note: "Applies to ALL workers regardless of employment status. Employers cannot pay below minimum wage even with 'training' arrangements.",
  },
  {
    right: "13th Month Pay",
    law: "PD 851",
    detail: "ALL rank-and-file employees are entitled to 13th month pay equivalent to 1/12 of total basic salary earned during the year. Must be paid on or before December 24.",
    note: "Mandatory regardless of employment status, length of service, or nature of work. Exempt: government employees, domestic workers earning PHP 5K+/month, personal service workers.",
  },
  {
    right: "Service Incentive Leave (SIL)",
    law: "Art. 95, Labor Code",
    detail: "5 days paid leave per year for employees who have worked at least 1 year. Can be used for vacation or sick leave. Unused SIL is commutable to cash at year-end.",
    note: "This is the MINIMUM. Many companies offer more (15-20+ leave days). If your company offers more generous leave, SIL is absorbed.",
  },
  {
    right: "Overtime Pay",
    law: "Art. 87, Labor Code",
    detail: "Work beyond 8 hours/day: +25% of hourly rate. If overtime on rest day or holiday: +30% of hourly rate on rest day or special holiday.",
    note: "Overtime MUST be compensated. 'No OT pay' policies for rank-and-file are illegal. Managerial employees are exempt.",
  },
  {
    right: "Night Shift Differential",
    law: "Art. 86, Labor Code",
    detail: "Work between 10:00 PM and 6:00 AM entitles you to an additional 10% of your hourly rate.",
    note: "Applies to ALL night shift workers. If overtime + night shift: both premiums apply.",
  },
  {
    right: "Holiday Pay",
    law: "Art. 93-94, Labor Code",
    detail: "Regular holidays: 200% of daily rate (even if not worked). Special non-working days: +30% if worked. Double holidays: 300% if worked.",
    note: "12 regular holidays + ~6 special non-working days per year. If you work on a holiday, you get premium pay ON TOP of your daily rate.",
  },
  {
    right: "Rest Day",
    law: "Art. 91, Labor Code",
    detail: "Every employee is entitled to at least 24 consecutive hours of rest per week. Work on rest day: +30% premium pay.",
    note: "6-day work weeks are legal as long as you get 1 rest day. The rest day should be scheduled in advance.",
  },
  {
    right: "Maternity Leave",
    law: "RA 11210 (Expanded Maternity Leave Act)",
    detail: "105 days paid maternity leave (live birth). 60 days for miscarriage/emergency termination. Additional 15 days for solo mothers. 7 days transferable to father.",
    note: "Covers ALL female workers (public and private). Paid by SSS for private sector employees. Can be extended by 30 days (unpaid).",
  },
  {
    right: "Paternity Leave",
    law: "RA 8187 (Paternity Leave Act)",
    detail: "7 days paid paternity leave for married male employees for the first 4 deliveries of the legitimate spouse.",
    note: "Must be married. Additional 7 days can be credited from wife's maternity leave under RA 11210.",
  },
  {
    right: "Solo Parent Leave",
    law: "RA 8972 (Solo Parents' Welfare Act)",
    detail: "7 working days of parental leave per year for solo parents who have worked at least 1 year.",
    note: "Must have Solo Parent ID from DSWD. Both mothers and fathers qualify.",
  },
  {
    right: "Separation Pay",
    law: "Art. 298-299, Labor Code",
    detail: "If terminated due to redundancy/retrenchment: 1 month pay per year of service. If due to disease/closure: 1/2 month per year of service. Minimum: 1 month pay.",
    note: "NOT required for termination due to just causes (serious misconduct, willful disobedience, etc.).",
  },
  {
    right: "Security of Tenure",
    law: "Art. 294, Labor Code",
    detail: "Regular employees cannot be terminated without just or authorized cause and without due process (twin notice rule: notice of charges + notice of termination with hearing).",
    note: "After 6 months of continuous service, you become a regular employee by law — regardless of what your contract says.",
  },
];

const justCauses = [
  { cause: "Serious Misconduct", example: "Theft, fraud, sexual harassment, violence at work" },
  { cause: "Willful Disobedience", example: "Repeated refusal to follow lawful and reasonable orders" },
  { cause: "Gross & Habitual Neglect", example: "Chronic absenteeism, repeated failure to perform duties" },
  { cause: "Fraud / Willful Breach of Trust", example: "Falsifying company records, embezzlement (for positions of trust)" },
  { cause: "Commission of a Crime", example: "Crime committed against the employer, employer's family, or representative" },
  { cause: "Other Analogous Causes", example: "Cases similar in gravity to the above (determined case-by-case)" },
];

const authorizedCauses = [
  { cause: "Redundancy", separation: "1 month per year of service", example: "Position eliminated due to reorganization" },
  { cause: "Retrenchment", separation: "1/2 month per year of service (or 1 month, whichever is higher)", example: "Company downsizing to prevent losses" },
  { cause: "Closure/Cessation of Business", separation: "1/2 month per year of service (or 1 month if not due to losses)", example: "Company closing down operations" },
  { cause: "Installation of Labor-Saving Device", separation: "1 month per year of service", example: "Automation replacing manual jobs" },
  { cause: "Disease", separation: "1/2 month per year of service", example: "Disease that makes continued employment prohibited by law or prejudicial to health" },
];

const illegalPractices = [
  {
    practice: "Endo / Contractualization",
    description: "Hiring workers on repeated 5-month contracts to avoid regularization. This is ILLEGAL under DO 174 and RA 11210.",
    what_to_do: "File a complaint at DOLE. After 6 months of continuous work, you are legally a regular employee regardless of contract.",
  },
  {
    practice: "No Payslip / Undocumented Pay",
    description: "Employers must provide payslips showing gross pay, deductions (SSS, PhilHealth, Pag-IBIG, tax), and net pay.",
    what_to_do: "Request payslips in writing. If refused, report to DOLE. Keep your own records of hours worked and payments received.",
  },
  {
    practice: "Unpaid Government Contributions",
    description: "Deducting SSS, PhilHealth, and Pag-IBIG from your salary but not actually remitting them to the agencies.",
    what_to_do: "Check your SSS, PhilHealth, and Pag-IBIG online accounts regularly. If contributions are missing, file a complaint with the respective agency AND DOLE.",
  },
  {
    practice: "Forced Resignation",
    description: "Being pressured, intimidated, or coerced into signing a resignation letter. This constitutes constructive dismissal.",
    what_to_do: "Do NOT sign anything under pressure. Document everything. File an illegal dismissal case at NLRC within 4 years.",
  },
  {
    practice: "Withholding Final Pay",
    description: "Employers must release final pay (last salary + pro-rated 13th month + unused leave conversion + separation pay if applicable) within 30 days of separation.",
    what_to_do: "Send a formal demand letter. If not released within 30 days, file a complaint at DOLE.",
  },
  {
    practice: "No OT Pay for Rank-and-File",
    description: "Some companies have 'no OT pay' policies. This is illegal for rank-and-file employees. Only managerial employees are exempt from OT pay.",
    what_to_do: "Document your overtime hours. File a money claim at DOLE or NLRC.",
  },
  {
    practice: "Salary Below Minimum Wage",
    description: "Paying below the regional minimum wage. No 'probationary wage' or 'training wage' exception exists in law.",
    what_to_do: "File a complaint at DOLE Regional Office. Employers can be ordered to pay wage differentials.",
  },
  {
    practice: "Discrimination",
    description: "Termination or adverse treatment based on gender, pregnancy, age, disability, religion, or union membership.",
    what_to_do: "Document instances of discrimination. File a complaint at DOLE, Civil Service Commission (for government), or NLRC.",
  },
];

const doleProcess = [
  {
    step: "1. Single Entry Approach (SEnA)",
    detail: "File a Request for Assistance (RFA) at any DOLE office. A SEnA desk officer will mediate between you and your employer for 30 days. FREE service. Most cases are resolved here.",
  },
  {
    step: "2. DOLE Complaint (Money Claims ≤ PHP 5,000)",
    detail: "For small money claims, DOLE Regional Director can issue a compliance order. Fast resolution.",
  },
  {
    step: "3. NLRC (National Labor Relations Commission)",
    detail: "For illegal dismissal and money claims > PHP 5,000. File a formal complaint. Mandatory conciliation/mediation (30 days), then formal hearing if unresolved. Decision within 30 days after submission.",
  },
  {
    step: "4. Court of Appeals",
    detail: "If unsatisfied with NLRC decision, appeal to the Court of Appeals within 10 days via Rule 65 Petition for Certiorari.",
  },
  {
    step: "5. Supreme Court",
    detail: "Final appeal. File Petition for Review on Certiorari within 15 days from CA decision.",
  },
];

const resignationGuide = [
  {
    type: "Voluntary Resignation (With 30-Day Notice)",
    details: [
      "Submit a written resignation letter at least 30 days before your intended last day",
      "You are REQUIRED to render the 30-day notice period (unless waived by employer)",
      "During the notice period, you must continue working and performing duties",
      "Employer cannot refuse your resignation — it takes effect after 30 days regardless",
      "Final pay must be released within 30 days after your last day",
    ],
  },
  {
    type: "Resignation Without Notice (Effective Immediately)",
    details: [
      "Allowed ONLY for just causes: serious insult by employer, inhumane treatment, commission of crime against you/family, violation of employment terms",
      "Must still be in writing, citing the specific just cause",
      "No obligation to render 30-day notice",
      "Employer must still release final pay",
    ],
  },
  {
    type: "AWOL (Absence Without Leave)",
    details: [
      "NOT the same as resignation — you haven't formally resigned",
      "Employer can terminate you for abandonment (after due process)",
      "You may forfeit certain benefits and clearance",
      "Your employer may withhold final pay pending clearance",
      "AVOID THIS — always resign properly to protect your record and get your final pay",
    ],
  },
];

const finalPayComponents = [
  { component: "Unpaid Salary", desc: "Salary for days worked but not yet paid" },
  { component: "Pro-rated 13th Month Pay", desc: "13th month computed from Jan 1 to last day of work" },
  { component: "Unused Leave Credits", desc: "Converted to cash (if company policy allows or if SIL)" },
  { component: "Separation Pay", desc: "Only if terminated for authorized causes (redundancy, retrenchment, etc.)" },
  { component: "Tax Refund", desc: "If you overpaid taxes during the year" },
  { component: "Other Benefits", desc: "Bonuses, commissions, allowances (if applicable per company policy or CBA)" },
];

export function LaborLaws() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-slate-100 rounded-xl">
            <Scale className="w-6 h-6 text-slate-600" />
          </div>
          <h1 className="text-slate-900">Philippine Labor Laws Guide</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
          Know your rights as an employee. This guide covers minimum wage, benefits, overtime,
          termination rules, illegal employer practices, how to file complaints at DOLE,
          and everything you need to protect yourself in the workplace.
        </p>
      </div>

      {/* Employee Rights */}
      <div>
        <h2 className="text-gray-900 mb-1">Your Rights as an Employee</h2>
        <p className="text-sm text-gray-500 mb-4">These are guaranteed by law — no employer can take them away</p>
        <div className="space-y-3">
          {employeeRights.map((item) => (
            <details key={item.right} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-4 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-slate-500" />
                    <div>
                      <h4 className="text-gray-800">{item.right}</h4>
                      <span className="text-xs text-slate-400">{item.law}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p className="text-sm text-gray-600">{item.detail}</p>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700"><strong>Important:</strong> {item.note}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Holiday Pay Quick Reference */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">Holiday Pay Quick Reference</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Scenario</th>
                <th className="text-left py-3 px-3 text-gray-500">Pay Rate</th>
                <th className="text-left py-3 px-3 text-gray-500">Example (PHP 610/day)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { scenario: "Regular Holiday (not worked)", rate: "100% of daily rate", example: "PHP 610" },
                { scenario: "Regular Holiday (worked)", rate: "200% of daily rate", example: "PHP 1,220" },
                { scenario: "Regular Holiday + OT (worked)", rate: "200% + 30% of hourly OT", example: "PHP 1,220 + PHP 198/hr OT" },
                { scenario: "Special Non-Working Day (not worked)", rate: "No pay (unless company policy)", example: "PHP 0 (or company policy)" },
                { scenario: "Special Non-Working Day (worked)", rate: "130% of daily rate", example: "PHP 793" },
                { scenario: "Rest Day (worked)", rate: "130% of daily rate", example: "PHP 793" },
                { scenario: "Regular Holiday + Rest Day (worked)", rate: "260% of daily rate", example: "PHP 1,586" },
                { scenario: "Double Holiday (worked)", rate: "300% of daily rate", example: "PHP 1,830" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{row.scenario}</td>
                  <td className="py-2.5 px-3 text-green-700">{row.rate}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Termination */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Legal Grounds for Termination</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-700 mb-3 flex items-center gap-2">
              <Ban className="w-4 h-4" /> Just Causes (Employee's Fault)
            </h3>
            <p className="text-xs text-gray-500 mb-3">No separation pay required. Employer must follow due process (twin notice rule).</p>
            <div className="space-y-2">
              {justCauses.map((jc, i) => (
                <div key={i} className="p-3 bg-red-50 rounded-lg">
                  <div className="text-sm text-red-800">{jc.cause}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Example: {jc.example}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-blue-700 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" /> Authorized Causes (Business Reasons)
            </h3>
            <p className="text-xs text-gray-500 mb-3">Separation pay IS required. Must give 30-day notice to employee and DOLE.</p>
            <div className="space-y-2">
              {authorizedCauses.map((ac, i) => (
                <div key={i} className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-800">{ac.cause}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{ac.example}</div>
                  <div className="text-xs text-green-600 mt-1">Separation pay: {ac.separation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Due Process (Twin Notice Rule) */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5 sm:p-6">
        <h2 className="text-amber-900 mb-3">The Twin Notice Rule (Due Process)</h2>
        <p className="text-sm text-amber-700 mb-4">
          Employers MUST follow this process when terminating an employee. Failure to follow = illegal dismissal, even if the cause is valid.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-lg text-amber-700 mb-2">1st Notice</div>
            <h4 className="text-gray-800 mb-1">Notice to Explain</h4>
            <p className="text-sm text-gray-600">Written notice stating the specific acts/omissions you're being charged with. You must be given a reasonable period (at least 5 days) to respond.</p>
          </div>
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-lg text-amber-700 mb-2">Hearing</div>
            <h4 className="text-gray-800 mb-1">Administrative Hearing</h4>
            <p className="text-sm text-gray-600">You have the right to be heard, present evidence, and defend yourself. This can be a formal hearing, written explanation, or conference.</p>
          </div>
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-lg text-amber-700 mb-2">2nd Notice</div>
            <h4 className="text-gray-800 mb-1">Notice of Decision</h4>
            <p className="text-sm text-gray-600">Written notice of the employer's decision (termination, suspension, or exoneration). Must state the reasons and evidence considered.</p>
          </div>
        </div>
      </div>

      {/* Illegal Practices */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">Common Illegal Employer Practices</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Know these so you can protect yourself</p>
        <div className="space-y-3">
          {illegalPractices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Ban className="w-4 h-4 text-red-500" />
                <h4 className="text-red-800">{item.practice}</h4>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">Illegal</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700"><strong>What to do:</strong> {item.what_to_do}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resignation Guide */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">How to Resign Properly</h2>
        <div className="space-y-4">
          {resignationGuide.map((item) => (
            <div key={item.type} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-2">{item.type}</h4>
              <ul className="space-y-1.5">
                {item.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Final Pay */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">What's Included in Your Final Pay</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Must be released within 30 days from your last day of work (DOLE Labor Advisory No. 06-2020)</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {finalPayComponents.map((item, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-800">{item.component}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Note:</strong> Companies often require clearance before releasing final pay. Clearance should be processed
            within a reasonable period — if delayed beyond 30 days, you can file a complaint at DOLE.
          </p>
        </div>
      </div>

      {/* DOLE Complaint Process */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-slate-600" />
          <h2 className="text-gray-900">How to File a Labor Complaint</h2>
        </div>
        <div className="space-y-3">
          {doleProcess.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="w-8 h-8 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center text-sm shrink-0">{i + 1}</span>
              <div>
                <h4 className="text-gray-800 mb-1">{item.step}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="text-blue-800 mb-2">DOLE Hotline</h4>
            <p className="text-sm text-blue-700">1349 (DOLE Hotline)</p>
            <p className="text-xs text-blue-600">Free call from any phone. Available Mon-Fri 8AM-5PM</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="text-blue-800 mb-2">Documents to Prepare</h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Employment contract</li>
              <li>• Payslips and time records</li>
              <li>• Company ID</li>
              <li>• Any correspondence (emails, memos, notices)</li>
              <li>• Evidence of violation (photos, messages)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Probationary Employment */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Probationary vs Regular Employment</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="text-gray-800 mb-2">Probationary (First 6 Months)</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> Maximum 6 months probation period</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> Employer must communicate standards for regularization AT THE START</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> Can be terminated for just cause OR failure to meet standards</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> Still entitled to ALL statutory benefits (13th month, SIL, gov't contributions)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> If employer doesn't terminate before 6 months, you are AUTOMATICALLY regular</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-xl">
            <h4 className="text-green-800 mb-2">Regular (After 6 Months)</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Full security of tenure — cannot be terminated without just/authorized cause</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Due process (twin notice rule) must be followed for any termination</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Entitled to separation pay if terminated for authorized causes</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> AUTOMATIC after 6 months regardless of what the company says</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> "Contract renewal" at 6 months to avoid regularization is ILLEGAL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-slate-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Can my employer force me to resign?",
              a: "No. Forced resignation is constructive dismissal and is illegal. If you're pressured to sign a resignation letter, do NOT sign. Document the coercion (record conversations if legal, save messages/emails). You can file an illegal dismissal case at NLRC. If successful, you're entitled to reinstatement + back wages.",
            },
            {
              q: "My company deducts SSS/PhilHealth/Pag-IBIG from my salary but contributions aren't showing up. What do I do?",
              a: "This is a criminal offense (estafa). Check your contributions online (SSS, PhilHealth, Pag-IBIG portals). If contributions are missing: (1) Inform your employer in writing, (2) File a complaint with the specific agency, (3) Report to DOLE. Keep all payslips as evidence.",
            },
            {
              q: "Am I entitled to overtime pay?",
              a: "If you are RANK-AND-FILE: Yes, always. Work beyond 8 hours = +25% hourly rate. If you are MANAGERIAL or SUPERVISORY with actual management powers (hiring, firing, discipline): you are exempt from OT pay. Many companies misclassify employees as 'supervisory' to avoid OT — if you don't actually exercise management prerogatives, you're still entitled to OT pay.",
            },
            {
              q: "Can I be fired during probation for no reason?",
              a: "No. Even probationary employees can only be terminated for (1) just cause, or (2) failure to meet reasonable standards made known to you at the start of probation. If the employer didn't communicate standards clearly, or fires you without due process, it's still illegal dismissal.",
            },
            {
              q: "What if my employer doesn't give me my final pay?",
              a: "Under DOLE Labor Advisory No. 06-2020, final pay must be released within 30 days from separation. If not: (1) Send a formal demand letter to your employer, (2) File a complaint via SEnA at any DOLE office (free), (3) If unresolved, escalate to NLRC. You can claim unpaid salary, 13th month, unused leave, and separation pay (if applicable).",
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
