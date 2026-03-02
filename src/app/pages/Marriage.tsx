import { HeartHandshake, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle, FileText, Users, Scale, DollarSign, Heart } from "lucide-react";

const marriageRequirements = [
  "Both parties must be at least 18 years old (18-21 needs parental consent; 21-25 needs parental advice)",
  "Neither party is legally married to someone else",
  "Marriage License from the Local Civil Registrar",
  "Pre-Marriage Counseling/Seminar Certificate (from the LGU or church)",
  "PSA Birth Certificates of both parties",
  "Valid government IDs of both parties",
  "CENOMAR (Certificate of No Marriage) from PSA",
  "Community Tax Certificate (Cedula)",
  "If previously married: Death Certificate of spouse OR Court Decree of Annulment/Declaration of Nullity",
  "For foreigners: Legal Capacity to Contract Marriage from their embassy",
];

const marriageTypes = [
  {
    type: "Civil Wedding",
    officiant: "Judge or Mayor",
    where: "City/Municipal Hall, Court",
    cost: "PHP 500 - 5,000",
    details: [
      "Simplest and most affordable option",
      "Performed by a judge, mayor, or authorized official",
      "Can be done at city hall or in any venue with the official present",
      "Marriage license required (PHP 300-500)",
      "Minimum of 2 witnesses required",
      "Ceremony can be as short as 15-30 minutes",
    ],
    steps: [
      "Apply for Marriage License at Local Civil Registrar (bride's or groom's residence)",
      "Submit requirements: birth certificates, CENOMAR, IDs, pre-marriage counseling certificate",
      "Wait 10 days posting period (license posted publicly)",
      "Obtain Marriage License (valid for 120 days)",
      "Schedule the ceremony with the judge/mayor",
      "Bring 2 witnesses on the wedding day",
      "Sign the Marriage Certificate after the ceremony",
      "Register the marriage at the Local Civil Registrar within 15 days",
    ],
  },
  {
    type: "Church Wedding",
    officiant: "Priest/Pastor/Minister",
    where: "Church, Chapel, or authorized venue",
    cost: "PHP 5,000 - 50,000+ (church fees alone)",
    details: [
      "Religious ceremony in a church or authorized venue",
      "Requires both civil marriage license AND church requirements",
      "Catholic weddings require: baptismal & confirmation certificates, canonical interview, Pre-Cana seminar",
      "Non-Catholic Christian churches have their own requirements",
      "Church fees vary widely (PHP 5K in smaller parishes to PHP 50K+ in popular churches)",
      "Additional costs: flowers, coordinator, reception, etc.",
    ],
    steps: [
      "Contact the church and book a date (6-12 months in advance for popular churches)",
      "Complete church requirements: Pre-Cana seminar, canonical interview, banns of marriage",
      "Simultaneously apply for civil Marriage License at LCR",
      "Complete all civil requirements (CENOMAR, birth certificates, IDs, etc.)",
      "Submit Marriage License to the church before the wedding",
      "Hold the ceremony",
      "Priest/minister signs the Marriage Certificate",
      "Church submits signed certificate to LCR for registration",
    ],
  },
  {
    type: "Muslim Wedding (Nikkah)",
    officiant: "Imam / OCRG-registered solemnizing officer",
    where: "Mosque or any agreed venue",
    cost: "Varies",
    details: [
      "Governed by Presidential Decree No. 1083 (Code of Muslim Personal Laws)",
      "Requires 2 male witnesses or 1 male + 2 female witnesses",
      "Mahr (dowry) from groom to bride is required",
      "No marriage license needed IF both parties are Muslims",
      "Marriage must be registered with the Shari'a Circuit Court",
      "Polygamy is permitted under Muslim personal laws (up to 4 wives)",
    ],
    steps: [
      "Both parties agree on the marriage terms and Mahr",
      "Secure witnesses (2 male or 1 male + 2 female)",
      "Conduct the Nikkah ceremony with the imam",
      "Sign the marriage contract",
      "Register the marriage at the Shari'a Circuit Court within 15 days",
      "Optionally file with the Local Civil Registrar for PSA recording",
    ],
  },
];

const annulmentVsNullity = [
  { aspect: "Definition", annulment: "Marriage was VALID but has defects that make it voidable", nullity: "Marriage was VOID from the very beginning" },
  { aspect: "Legal Basis", annulment: "Art. 45, Family Code (voidable marriages)", nullity: "Art. 35, 36, 37, 38, Family Code (void marriages)" },
  { aspect: "Common Grounds", annulment: "Lack of parental consent (18-21), insanity, fraud, force/intimidation, impotence, STD", nullity: "Psychological incapacity (Art. 36), bigamy, incest, marriages performed without authority/license" },
  { aspect: "Filing Period", annulment: "Must be filed within specific prescriptive periods (5 years for most grounds)", nullity: "Can be filed anytime (no prescriptive period)" },
  { aspect: "Cost", annulment: "PHP 200,000 - 600,000+", nullity: "PHP 200,000 - 800,000+" },
  { aspect: "Duration", annulment: "1-3 years (or longer)", nullity: "1-5 years (often longer due to psychological evaluation)" },
  { aspect: "Effect on Children", annulment: "Children are legitimate", nullity: "Children conceived BEFORE the declaration are legitimate" },
  { aspect: "Effect on Property", annulment: "Conjugal/community property is divided", nullity: "Property regime is void; each gets their own contributions" },
  { aspect: "Can Remarry?", annulment: "Yes, after the decree becomes final", nullity: "Yes, after the decree becomes final" },
];

const legalSeparation = {
  grounds: [
    "Repeated physical violence or grossly abusive conduct",
    "Physical violence or moral pressure to change religion",
    "Attempt to corrupt or induce spouse/child into prostitution",
    "Final judgment sentencing the other spouse to imprisonment of 6+ years",
    "Drug addiction or habitual alcoholism",
    "Lesbianism or homosexuality of the other spouse",
    "Bigamous marriage abroad by the other spouse",
    "Sexual infidelity or perversion",
    "Attempt on the life of the petitioning spouse",
    "Abandonment without justifiable cause for more than 1 year",
  ],
  effects: [
    "The spouses are STILL legally married (cannot remarry)",
    "Obligation of mutual support may continue",
    "Conjugal/community property is dissolved and divided",
    "Custody of children is determined by the court (best interest of the child)",
    "Offending spouse is disqualified from inheriting from the innocent spouse",
    "The innocent spouse can revoke donations made to the offending spouse",
  ],
};

const conjugalProperty = [
  {
    regime: "Absolute Community of Property (ACP)",
    when: "Default for marriages after Aug 3, 1988 (without prenup)",
    whatBelongs: "ALL properties (before and during marriage) are owned jointly, EXCEPT: properties inherited/donated with condition that they remain exclusive, personal/exclusive use items, properties for profession/vocation",
    division: "Split 50-50 upon dissolution of marriage",
  },
  {
    regime: "Conjugal Partnership of Gains (CPG)",
    when: "Default for marriages BEFORE Aug 3, 1988, or if stipulated in a prenup",
    whatBelongs: "Properties acquired DURING the marriage through effort/income are conjugal. Properties owned BEFORE marriage remain exclusive.",
    division: "Only conjugal properties (acquired during marriage) are split 50-50",
  },
  {
    regime: "Complete Separation of Property",
    when: "Only if specified in a prenuptial agreement",
    whatBelongs: "Each spouse owns their own properties exclusively — no community property. Each manages their own assets independently.",
    division: "Each keeps their own. No division needed.",
  },
];

const prenupInfo = {
  what: "A prenuptial agreement is a contract signed BEFORE marriage that determines the property regime of the couple. It can replace the default Absolute Community of Property with other arrangements.",
  requirements: [
    "Must be executed BEFORE the marriage ceremony",
    "Must be in writing",
    "Must be signed by both parties",
    "Must be registered with the Local Civil Registrar where the marriage will take place",
    "Cannot include provisions that are illegal, immoral, or against public policy",
    "Cannot waive rights to support, custody, or successional rights of future children",
  ],
  commonClauses: [
    "Complete separation of property (each spouse keeps their own assets/debts)",
    "Conjugal partnership of gains (only what's earned during marriage is shared)",
    "Identification of exclusive properties of each spouse",
    "Management of business assets and liabilities",
    "Financial responsibilities during marriage (bills, mortgage, savings)",
    "Provisions for property division in case of annulment/death",
  ],
  cost: "PHP 20,000 - 100,000 (lawyer's fee + registration)",
};

const sameGenderInfo = {
  status: "Same-sex marriage is NOT legally recognized in the Philippines as of 2025-2026. The Family Code defines marriage as between a man and a woman.",
  developments: [
    "Several SOGIE (Sexual Orientation, Gender Identity, and Expression) bills have been filed in Congress but none have been passed into law",
    "No civil union or domestic partnership law exists for same-sex couples",
    "Same-sex couples cannot adopt jointly under Philippine law",
    "Some LGUs (like Quezon City) have anti-discrimination ordinances that protect LGBTQ+ individuals",
    "Same-sex marriages performed abroad are NOT recognized in the Philippines",
    "Co-habitation is legal but provides no legal protections for property or inheritance",
  ],
  protections: [
    "Create individual wills naming your partner as beneficiary (subject to compulsory heirs' rights)",
    "Co-ownership agreements for jointly purchased properties",
    "Designate partner as beneficiary in insurance policies",
    "Execute a Special Power of Attorney for medical/financial decisions",
    "Joint bank accounts (some banks allow this)",
    "Consult a lawyer for the best legal structures to protect your partnership",
  ],
};

export function Marriage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-fuchsia-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-fuchsia-100 rounded-xl">
            <HeartHandshake className="w-6 h-6 text-fuchsia-600" />
          </div>
          <h1 className="text-fuchsia-900">Marriage & Family Law Guide</h1>
        </div>
        <p className="text-sm text-fuchsia-700 leading-relaxed max-w-2xl">
          Everything about getting married in the Philippines — types of weddings, requirements,
          costs, prenuptial agreements, conjugal properties, annulment, legal separation,
          and legal protections for all types of partnerships.
        </p>
      </div>

      {/* Getting Married Requirements */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-fuchsia-600" />
          <h2 className="text-gray-900">Requirements for Getting Married</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {marriageRequirements.map((req, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2">
              <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" /> {req}
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-fuchsia-50 rounded-lg">
          <p className="text-sm text-fuchsia-700">
            <strong>CENOMAR tip:</strong> Order your Certificate of No Marriage from PSA early (online at psaserbilis.com.ph).
            It costs PHP 210 and takes 4-6 business days for delivery. This is required for all marriage types.
          </p>
        </div>
      </div>

      {/* Types of Marriage */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Marriage Ceremonies</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the type that fits your beliefs and budget</p>
        <div className="space-y-4">
          {marriageTypes.map((marriage) => (
            <details key={marriage.type} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-fuchsia-500" />
                    <div>
                      <h3 className="text-gray-900">{marriage.type}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs text-gray-500">Officiant: {marriage.officiant}</span>
                        <span className="text-xs text-gray-500">|</span>
                        <span className="text-xs text-gray-500">Cost: {marriage.cost}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-gray-800 mb-2">Key Details</h4>
                  <ul className="space-y-1.5">
                    {marriage.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3 h-3 text-fuchsia-400 shrink-0 mt-1.5" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-fuchsia-50 rounded-lg p-4">
                  <h4 className="text-fuchsia-800 mb-2">Step-by-Step Process</h4>
                  <ol className="space-y-2">
                    {marriage.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-6 h-6 bg-fuchsia-100 text-fuchsia-700 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Marriage License Process */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200 p-5 sm:p-6">
        <h2 className="text-pink-900 mb-3">Getting Your Marriage License (Detailed)</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-gray-800 mb-2">Where to Apply</h4>
            <p className="text-sm text-gray-600 mb-3">Local Civil Registrar (LCR) of the city/municipality where either the bride or groom resides</p>
            <h4 className="text-gray-800 mb-2">Documents to Bring</h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {[
                "PSA Birth Certificates (both parties)",
                "CENOMAR (Certificate of No Marriage) from PSA",
                "Valid government IDs (both parties)",
                "Community Tax Certificate / Cedula",
                "Pre-Marriage Counseling Certificate",
                "Parental Consent (if 18-21) / Parental Advice (if 21-25)",
                "If widow/widower: PSA Death Certificate of deceased spouse",
                "If annulled: Court Decree of Annulment + PSA-annotated marriage certificate",
                "2x2 & 1x1 ID photos of both parties",
              ].map((doc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" /> {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-xs text-pink-500 mb-1">Cost</div>
              <div className="text-gray-800">PHP 300 - 500 (varies by LGU)</div>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-xs text-pink-500 mb-1">Posting Period</div>
              <div className="text-gray-800">10 consecutive days (publicly posted at LCR)</div>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-xs text-pink-500 mb-1">Validity</div>
              <div className="text-gray-800">120 days from date of issuance</div>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-xs text-pink-500 mb-1">Processing Time</div>
              <div className="text-gray-800">10-15 working days (including posting period)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prenuptial Agreement */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-indigo-600" />
          <h2 className="text-gray-900">Prenuptial Agreement (Prenup)</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">{prenupInfo.what}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-lg p-4">
            <h4 className="text-indigo-800 mb-2">Requirements</h4>
            <ul className="space-y-1.5">
              {prenupInfo.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" /> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-gray-800 mb-2">Common Clauses</h4>
            <ul className="space-y-1.5">
              {prenupInfo.commonClauses.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <ArrowRight className="w-3 h-3 text-gray-400 shrink-0 mt-1.5" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-500">Estimated Cost</div>
              <div className="text-sm text-gray-800">{prenupInfo.cost}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conjugal Property Regimes */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-amber-600" />
          <h2 className="text-gray-900">Property Regimes in Marriage</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Who owns what during and after marriage</p>
        <div className="space-y-4">
          {conjugalProperty.map((cp) => (
            <div key={cp.regime} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-1">{cp.regime}</h4>
              <p className="text-xs text-fuchsia-600 mb-2">{cp.when}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">What Belongs to the Marriage</div>
                  <p className="text-sm text-gray-600">{cp.whatBelongs}</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Division Upon Dissolution</div>
                  <p className="text-sm text-gray-600">{cp.division}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annulment vs Nullity */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-red-600" />
          <h2 className="text-gray-900">Annulment vs Declaration of Nullity</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          The Philippines does NOT have divorce (as of 2025-2026). These are the only legal ways to end a marriage.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Aspect</th>
                <th className="text-left py-3 px-3 text-gray-500">Annulment</th>
                <th className="text-left py-3 px-3 text-gray-500">Declaration of Nullity</th>
              </tr>
            </thead>
            <tbody>
              {annulmentVsNullity.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-3 text-gray-800">{row.aspect}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.annulment}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.nullity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">
            <strong>Reality check:</strong> Annulment in the Philippines costs PHP 200,000 - 800,000+ and takes 1-5 years.
            The process involves hiring a lawyer, filing a petition, psychological evaluation, court hearings, and
            registration of the decree. There is no such thing as a "quick annulment."
          </p>
        </div>
      </div>

      {/* Legal Separation */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Legal Separation</h2>
        <p className="text-sm text-gray-500 mb-4">
          Legal separation does NOT dissolve the marriage — you remain legally married and CANNOT remarry.
          It only separates property and potentially custody.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="text-orange-800 mb-2">Grounds for Legal Separation</h4>
            <ul className="space-y-1.5">
              {legalSeparation.grounds.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-1.5" /> {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-gray-800 mb-2">Effects of Legal Separation</h4>
            <ul className="space-y-1.5">
              {legalSeparation.effects.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> {e}
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Must be filed within 5 years from the occurrence of the cause. A 6-month cooling-off period is
                required before the court can act on the petition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Same-Sex Partnerships */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-violet-600" />
          <h2 className="text-gray-900">Same-Sex Partnerships in the Philippines</h2>
        </div>
        <div className="p-4 bg-violet-50 rounded-lg mb-4">
          <p className="text-sm text-violet-700">{sameGenderInfo.status}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-gray-800 mb-2">Current Legal Landscape</h4>
            <ul className="space-y-1.5">
              {sameGenderInfo.developments.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <ArrowRight className="w-3 h-3 text-violet-400 shrink-0 mt-1.5" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-violet-50 rounded-lg p-4">
            <h4 className="text-violet-800 mb-2">Legal Protections You Can Set Up</h4>
            <ul className="space-y-1.5">
              {sameGenderInfo.protections.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Annulment Steps */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">How to Get an Annulment (Step by Step)</h2>
        <div className="space-y-3">
          {[
            { step: "1. Consult a Family Lawyer", detail: "Find a lawyer specializing in family law. Initial consultation: PHP 2,000-5,000. Discuss grounds, timeline, and total cost." },
            { step: "2. Gather Evidence & Documents", detail: "Marriage certificate, birth certificates, evidence supporting your ground (e.g., psychological evaluation for Art. 36 cases)." },
            { step: "3. File Petition with the Court", detail: "Lawyer files the Petition for Annulment/Declaration of Nullity at the Regional Trial Court (Family Court) where you or your spouse resides." },
            { step: "4. Psychological Evaluation", detail: "For Art. 36 (psychological incapacity) cases: undergo evaluation with a clinical psychologist. Cost: PHP 30,000-80,000." },
            { step: "5. Court Hearings", detail: "Attend scheduled hearings. The Office of the Solicitor General (OSG) and Public Prosecutor will participate to ensure no collusion." },
            { step: "6. Court Decision", detail: "If granted, the court issues a Decree of Annulment/Declaration of Nullity." },
            { step: "7. Registration", detail: "Register the decree at the Local Civil Registrar and PSA. Your PSA marriage certificate will be annotated." },
            { step: "8. Update Records", detail: "Update your civil status in all IDs, SSS, PhilHealth, Pag-IBIG, employer records, and bank accounts." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="w-8 h-8 bg-fuchsia-100 text-fuchsia-700 rounded-full flex items-center justify-center text-sm shrink-0">{i + 1}</span>
              <div>
                <h4 className="text-gray-800 mb-1">{item.step}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-fuchsia-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Is there divorce in the Philippines?",
              a: "No. The Philippines is one of only two countries in the world (along with Vatican City) that does not have a divorce law. The Absolute Divorce Bill has been filed multiple times but has not been passed into law as of 2025-2026. For Muslim Filipinos, divorce is available under the Code of Muslim Personal Laws.",
            },
            {
              q: "What's the cheapest way to end a marriage?",
              a: "There is no 'cheap' way. Even the most straightforward annulment costs PHP 200,000-300,000 minimum and takes 1-2 years. Beware of 'fixers' or lawyers promising quick/cheap annulments — these are often scams or result in defective decrees that can be challenged later.",
            },
            {
              q: "Do I need a prenup?",
              a: "It's highly recommended if: (1) you or your partner have significant assets or debts, (2) you own a business, (3) this is a second marriage, or (4) you want to keep specific properties separate. Without a prenup, the default Absolute Community of Property regime applies — meaning everything is jointly owned.",
            },
            {
              q: "Can my spouse take my property if we separate?",
              a: "Under the default ACP regime (no prenup), ALL properties are jointly owned and would be split 50-50. Under CPG, only properties acquired during the marriage are split. With a Complete Separation of Property prenup, each spouse keeps their own. This is why prenups matter.",
            },
            {
              q: "What if my foreign spouse divorced me abroad?",
              a: "Under Republic Act No. 9710 and jurisprudence (Republic v. Manalo), a Filipino spouse can file a Petition for Recognition of Foreign Divorce Decree in Philippine courts. Once recognized, the Filipino spouse can remarry. You'll need: authenticated foreign divorce decree, certificate of finality, and related documents.",
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
