import { Car, FileText, AlertTriangle, CheckCircle2, Clock, CreditCard } from "lucide-react";

const licenseTypes = [
  {
    type: "Student Permit",
    validity: "1 year",
    fee: "PHP 272.63",
    requirements: [
      "At least 16 years old (17 for 4-wheel vehicles)",
      "Accomplished Application Form (ADL)",
      "PSA Birth Certificate (original + photocopy)",
      "Medical Certificate from accredited clinic",
      "TIN or valid government-issued ID",
      "Negative drug test result",
    ],
  },
  {
    type: "Non-Professional License",
    validity: "5 years",
    fee: "PHP 585.00",
    requirements: [
      "Must have held Student Permit for at least 1 month",
      "Accomplished Application Form",
      "Student Permit (original + photocopy)",
      "Medical Certificate",
      "Comprehensive Driver's Education (CDE) Certificate",
      "Practical Driving Course (PDC) - 15 hours for manual, 8 hours for automatic",
      "Drug test result",
    ],
  },
  {
    type: "Professional License",
    validity: "5 years",
    fee: "PHP 585.00",
    requirements: [
      "At least 18 years old",
      "Must have held Non-Pro License for at least 6 months OR Student Permit for at least 5 months with PDC",
      "Comprehensive Driver's Education (CDE) Certificate",
      "Practical Driving Course (PDC) - higher requirements",
      "Written and practical exams at LTO",
      "Medical Certificate & drug test",
    ],
  },
];

const registrationSteps = [
  {
    title: "Brand New Vehicle",
    steps: [
      "Get Sales Invoice and Certificate of Stock Reported from dealer",
      "Secure PNP-HPG clearance",
      "Pay registration fees at LTO (around PHP 5,000-15,000 depending on vehicle type)",
      "Get your Official Receipt (OR) and Certificate of Registration (CR)",
      "Plate number will be assigned (temporary conduction sticker provided)",
    ],
  },
  {
    title: "Vehicle Registration Renewal",
    steps: [
      "Go to any MVIS (Motor Vehicle Inspection System) private center",
      "Pass vehicle inspection (smoke emission, safety check)",
      "Present OR/CR at LTO or use LTO online portal (LTMS)",
      "Pay renewal fee + MVUC (Motor Vehicle User's Charge)",
      "Get new sticker for your plate",
      "Renewal is due on the anniversary month of first registration",
    ],
  },
];

const violations = [
  { violation: "No helmet (motorcycle)", fine: "PHP 1,500 (1st) / 3,000 (2nd)" },
  { violation: "No seatbelt", fine: "PHP 1,000" },
  { violation: "Reckless driving", fine: "PHP 2,000 (1st)" },
  { violation: "Driving without license", fine: "PHP 3,000" },
  { violation: "Expired registration", fine: "PHP 10,000+" },
  { violation: "No OR/CR", fine: "PHP 3,000+" },
  { violation: "Obstruction (illegal parking)", fine: "PHP 2,000" },
  { violation: "Using phone while driving", fine: "PHP 5,000 (1st)" },
  { violation: "Drunk driving", fine: "PHP 20,000-500,000 + possible jail time" },
  { violation: "Smoke belching", fine: "PHP 2,000 (1st)" },
];

export function LTO() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-purple-100 rounded-xl">
            <Car className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-purple-900">LTO (Land Transportation Office)</h1>
        </div>
        <p className="text-sm text-purple-700 leading-relaxed max-w-2xl">
          Everything you need to know about getting your driver's license, vehicle
          registration, and traffic rules in the Philippines.
        </p>
      </div>

      {/* License Types */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Driver's License</h2>
        <p className="text-sm text-gray-500 mb-4">Know which one you need</p>
        <div className="space-y-4">
          {licenseTypes.map((license) => (
            <div key={license.type} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-gray-900">{license.type}</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {license.validity}
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1">
                    <CreditCard className="w-3 h-3" /> {license.fee}
                  </span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {license.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* License Renewal */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <h2 className="text-blue-900 mb-3">Driver's License Renewal</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-blue-800 mb-2">Requirements</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Current driver's license (original)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Medical Certificate from LTO-accredited clinic</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Drug test result</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> CDE Certificate (Comprehensive Driver's Education)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Payment of renewal fee</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-blue-800 mb-2">Pro Tips</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Renew BEFORE expiry to avoid penalties</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Use LTMS Portal for online appointment</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Go to LTO satellite offices (malls) for shorter lines</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Medical clinics near LTO offer faster processing</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Penalty for late renewal: PHP 75-150/year</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vehicle Registration */}
      <div>
        <h2 className="text-gray-900 mb-1">Vehicle Registration</h2>
        <p className="text-sm text-gray-500 mb-4">New and renewal registration guide</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {registrationSteps.map((reg) => (
            <div key={reg.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-900 mb-3">{reg.title}</h3>
              <ol className="space-y-2">
                {reg.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Common Violations */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">Common Traffic Violations & Fines</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-gray-500">Violation</th>
                <th className="text-left py-3 px-4 text-gray-500">Fine</th>
              </tr>
            </thead>
            <tbody>
              {violations.map((v, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-4 text-gray-700">{v.violation}</td>
                  <td className="py-2.5 px-4">
                    <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-md text-xs">
                      {v.fine}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Fines are based on RA 4136, RA 10586 (Anti-Drunk Driving), and various LTO memoranda.
          Fines may vary and increase for repeat offenses.
        </p>
      </div>

      {/* Important IDs */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Important Documents to Always Have</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { title: "Driver's License", desc: "Must carry original while driving. Photocopy is NOT acceptable." },
            { title: "OR/CR", desc: "Official Receipt & Certificate of Registration. Keep originals in the vehicle." },
            { title: "Insurance (CTPL)", desc: "Compulsory Third Party Liability insurance. Required for registration." },
          ].map((doc) => (
            <div key={doc.title} className="p-4 bg-purple-50 rounded-xl">
              <h4 className="text-purple-800 mb-1">{doc.title}</h4>
              <p className="text-xs text-purple-600">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
