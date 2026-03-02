import { useState } from "react";
import { Gavel, AlertTriangle, CheckCircle2, ArrowRight, HelpCircle, Shield, Ban, Search, Scale, MessageSquareWarning } from "lucide-react";

const commonLaws = [
  {
    name: "Cyber Libel",
    law: "RA 10175 (Cybercrime Prevention Act of 2012), in relation to Art. 355 of the Revised Penal Code",
    what: "Publicly making a defamatory statement against a person through online platforms — Facebook posts, tweets, comments, blogs, YouTube videos, TikTok, group chats (if screenshot and shared), etc.",
    examples: [
      "Posting on Facebook: \"Si [name] magnanakaw, huwag kayong magpatransact diyan!\" without proof",
      "Tweeting insults or false accusations about someone by name or identifiable reference",
      "Sharing a defamatory meme or edited photo that damages someone's reputation",
      "Writing a public blog post with false, malicious claims about a specific person",
      "Commenting on someone's post with false accusations seen by others",
      "Even a private message can become cyber libel IF it gets shared/screenshot publicly",
    ],
    penalty: "Prision correccional in its maximum period to prision mayor in its minimum period (6 years and 1 day to 12 years imprisonment) + fine as determined by the court",
    bail: "Yes, bailable offense",
    prescriptive: "15 years from publication (much longer than regular libel's 1 year!)",
    notes: [
      "Cyber libel carries a HIGHER penalty than regular libel (regular libel: 6 months to 4 years)",
      "Truth is a defense ONLY if the imputation was made with good motives and justifiable ends",
      "The person defamed must be IDENTIFIABLE — even without naming them, if people can figure out who you mean, it counts",
      "Sharing/reposting a defamatory post can ALSO make you liable",
      "Private conversations can become cyber libel if shared publicly",
      "The SC ruled in Disini v. Secretary of Justice (2014) that the original author is liable, but 'liking' or reacting alone is NOT cyber libel",
    ],
    protection: [
      "Don't post accusations without solid evidence",
      "Criticism of public officials' performance (fair comment) is generally protected",
      "Use qualifiers like 'in my opinion' or 'based on my experience' — but this is NOT a guaranteed defense",
      "If you have a legitimate complaint, file it with proper authorities instead of posting publicly",
      "Screenshot everything if you're the one being defamed — you may need it for your own case",
    ],
  },
  {
    name: "Oral Defamation (Slander)",
    law: "Art. 358, Revised Penal Code",
    what: "Speaking defamatory words against a person in the presence of others. This is verbal — if it's written or broadcast, it's libel instead.",
    examples: [
      "Shouting insults about a person in public: \"Pokpok ka!\" (if heard by others)",
      "Accusing someone of a crime verbally in front of witnesses",
      "Publicly calling someone a thief, drug user, etc. without proof",
      "Verbal abuse directed at a specific person in a public setting",
    ],
    penalty: "Grave slander: arresto mayor in its maximum period to prision correccional in its minimum period (4 months and 1 day to 2 years and 4 months). Simple slander (light insults): arresto menor (1-30 days) or fine of PHP 200",
    bail: "Yes, bailable",
    prescriptive: "Grave: 6 months. Light/simple: 2 months",
    notes: [
      "Severity depends on the 'gravity of the insult' — courts consider the context, social standing, and relationship",
      "Must be heard by at least one other person (not just the two parties)",
      "Heat of the moment / provocation can be a mitigating circumstance",
    ],
    protection: [
      "Walk away from heated arguments — don't say things you'll regret",
      "If someone provokes you, document it but don't retaliate verbally",
      "Insulting someone in private (just the two of you) is NOT slander — but it could still be unjust vexation",
    ],
  },
  {
    name: "Bomb Jokes & Threats (Anti-Bomb Joke Law)",
    law: "RA 12005 (Anti-Bomb Joke Act of 2024), formerly covered by RA 10168 and various DOTr rules",
    what: "Making bomb threats, jokes, or hoaxes in airports, seaports, public transport, government buildings, malls, schools, or any public place — including online.",
    examples: [
      "Saying 'May bomba sa bag ko!' (even as a joke) at the airport",
      "Texting or posting 'I'll bomb [place]' on social media",
      "Calling in a fake bomb threat to a school, mall, or office",
      "Making jokes about having explosives while going through security",
      "Posting prank bomb threats on Facebook, Twitter, or group chats",
    ],
    penalty: "Imprisonment of 5 to 10 years and a fine of PHP 250,000 to PHP 500,000. If it causes panic, injury, or disruption of services: up to 12 years imprisonment and up to PHP 1,000,000 fine. Repeat offenders: maximum penalty",
    bail: "Yes, but high bail amount",
    prescriptive: "20 years",
    notes: [
      "There is NO 'it was just a joke' defense — the law explicitly covers jokes, hoaxes, and pranks",
      "Even saying it sarcastically or jokingly is punishable",
      "Online bomb threats are covered too — social media posts, texts, emails",
      "You will be arrested on the spot at airports and may miss your flight + face criminal charges",
      "Foreign nationals who make bomb jokes can be deported after serving their sentence",
    ],
    protection: [
      "NEVER joke about bombs, explosives, or weapons in airports, planes, or public places",
      "Don't even make vague references — 'this bag is going to explode' etc.",
      "Teach your children and travel companions about this law",
      "If you hear someone make a bomb threat (even a joke), report it immediately to security",
    ],
  },
  {
    name: "Grave Threats",
    law: "Art. 282, Revised Penal Code",
    what: "Threatening another person with the infliction of a wrong amounting to a crime (death, bodily harm, property damage) — verbally, in writing, or online.",
    examples: [
      "Texting someone: 'Papatayin kita' (I'll kill you)",
      "Threatening to burn someone's house",
      "Social media DM: 'Watch your back, may mangyayari sa'yo'",
      "Threatening to hurt someone's family members",
      "Posting a threat on someone's Facebook wall",
    ],
    penalty: "If threat involves a crime punishable by death/life imprisonment: prision mayor (6-12 years). If threat involves a lesser crime: prision correccional (6 months to 6 years). If threat is conditional (demanding money/action): same penalties + possible extortion charges",
    bail: "Yes, bailable",
    prescriptive: "10 years (grave), 5 years (light)",
    notes: [
      "The threat does NOT need to be carried out — the act of threatening itself is the crime",
      "Screenshots of threatening messages are valid evidence",
      "If the threat is made online, cyber crime penalties may also apply (higher penalty)",
      "Even if you were 'just angry' or 'didn't mean it,' you can still be convicted",
    ],
    protection: [
      "Never send threatening messages, even in anger — they can be used against you",
      "If you receive threats, screenshot EVERYTHING and report to the police/NBI",
      "Block the person but KEEP the evidence (don't delete conversations)",
    ],
  },
  {
    name: "Unjust Vexation",
    law: "Art. 287 (2), Revised Penal Code",
    what: "Any act that annoys, irritates, or causes distress to another person without legitimate purpose. This is the 'catch-all' offense — it covers a LOT of annoying behavior.",
    examples: [
      "Repeatedly calling/texting someone who has asked you to stop",
      "Following or tailing someone around (not quite stalking but persistent annoying behavior)",
      "Shouting profanities at someone in public",
      "Blocking someone's car or path intentionally to annoy them",
      "Sending unsolicited offensive content to someone",
      "Making unnecessary noise to disturb neighbors deliberately",
      "Public shaming (even if the statement is true)",
    ],
    penalty: "Arresto menor (1 to 30 days imprisonment) or a fine of PHP 5,000 to PHP 20,000, or both",
    bail: "Yes (light offense)",
    prescriptive: "2 months",
    notes: [
      "This is a light offense but still a criminal case",
      "Very broad scope — many annoying acts can fall under this",
      "Often used when the behavior doesn't fit neatly into other crimes but is clearly wrong",
      "The key element: the act must have NO legitimate or justifiable purpose",
    ],
    protection: [
      "Avoid confrontational behavior, especially with strangers",
      "If someone asks you to stop, stop",
      "Document annoying/harassing behavior directed at you as evidence for filing",
    ],
  },
  {
    name: "Photo/Video Voyeurism",
    law: "RA 9995 (Anti-Photo and Video Voyeurism Act of 2009)",
    what: "Taking, copying, reproducing, selling, distributing, or publishing photos/videos of a sexual act or any similar activity WITHOUT the consent of the persons involved. Also covers revenge porn.",
    examples: [
      "Taking photos/videos of someone in a private/intimate situation without consent",
      "Sharing intimate photos/videos of your ex-partner (revenge porn)",
      "Uploading sex tapes or intimate content without consent",
      "Selling or distributing intimate images/videos of another person",
      "Showing intimate content of someone to others, even on your phone",
      "Taking upskirt/downblouse photos (even without sexual intent)",
    ],
    penalty: "Imprisonment of 3 to 7 years + fine of PHP 100,000 to PHP 500,000. If the victim is a minor: RA 9775 (Anti-Child Pornography) applies with MUCH heavier penalties (up to life imprisonment)",
    bail: "Yes, bailable",
    prescriptive: "15 years",
    notes: [
      "Even if the original recording was CONSENSUAL, sharing it without consent is still a crime",
      "Both the person who shares AND the person who further distributes can be held liable",
      "If someone threatens to share your intimate content (sextortion), that's also a separate crime (grave threats/coercion)",
      "Screenshots, recordings, or copies of the distributed material can be used as evidence",
    ],
    protection: [
      "Never share intimate content of another person without their explicit consent",
      "If you're a victim, report immediately to NBI Cybercrime Division or PNP Anti-Cybercrime Group",
      "Preserve evidence — screenshot, save links, note dates/times",
      "You can also file for a protection order",
    ],
  },
  {
    name: "Anti-Wiretapping",
    law: "RA 4200 (Anti-Wiretapping Act)",
    what: "Secretly recording private conversations or communications WITHOUT the consent of ALL parties involved. The Philippines follows the 'all-party consent' rule.",
    examples: [
      "Recording a phone call without the other person knowing",
      "Using a hidden recorder during a private meeting",
      "Secretly recording your boss in a closed-door meeting",
      "Using spy apps to monitor someone's calls or messages",
      "Bugging someone's room, car, or office",
    ],
    penalty: "Imprisonment of 6 months to 6 years. The RECORDING itself is inadmissible as evidence in any proceeding",
    bail: "Yes, bailable",
    prescriptive: "5 years",
    notes: [
      "The Philippines requires ALL-PARTY CONSENT — everyone being recorded must consent",
      "This applies to private communications only — recording in public places or public speeches is generally allowed",
      "Illegally obtained recordings are INADMISSIBLE in court (they can't be used as evidence)",
      "Exception: law enforcement with proper court authorization (wiretap order)",
      "Video recording (without audio) in public is generally allowed — the law specifically covers 'oral communication'",
      "CCTV in your own property is generally allowed if it doesn't capture audio of private conversations",
    ],
    protection: [
      "Always inform the other party if you're recording a conversation",
      "If you need to document workplace issues, use written communication (email) instead",
      "For legal protection, consult a lawyer about proper documentation methods",
    ],
  },
  {
    name: "Online Scams / Estafa",
    law: "Art. 315, Revised Penal Code + RA 10175 (Cybercrime Prevention Act) for online",
    what: "Deceiving someone to obtain money, property, or anything of value through fraud, false pretenses, or abuse of confidence. When done online, the cybercrime law applies for higher penalties.",
    examples: [
      "Selling fake or non-existent products online (Facebook Marketplace, Shopee, etc.)",
      "Investment scams / Ponzi schemes",
      "Receiving payment for goods/services and not delivering",
      "Using someone else's identity to defraud others",
      "Issuing bouncing checks (BP 22 — Bouncing Checks Law is separate but related)",
    ],
    penalty: "Depends on amount defrauded. PHP 12,001 to PHP 22,000: prision correccional (6 months-6 years). PHP 22,001 to PHP 340,000+: prision mayor (6-12 years). Over PHP 340,000: up to 20 years. Online estafa (RA 10175): one degree higher penalty",
    bail: "Yes (amount depends on penalty)",
    prescriptive: "10-20 years depending on penalty",
    notes: [
      "Online estafa has HIGHER penalties than regular estafa (one degree higher under Cybercrime Law)",
      "Bouncing checks: RA 3688 (BP 22) — imprisonment of up to 1 year and/or fine of up to double the amount of the check",
      "Even if you intend to pay back, the crime is already committed at the time of the fraud",
      "GCash/bank transfer records are valid evidence",
    ],
    protection: [
      "Always transact through legitimate platforms with buyer protection",
      "Never send money without verifiable proof of the product/service",
      "If scammed: (1) Screenshot everything, (2) Report to platform, (3) File a police report, (4) Report to NBI Cybercrime",
    ],
  },
  {
    name: "Violence Against Women & Children (VAWC)",
    law: "RA 9262 (Anti-Violence Against Women and Their Children Act of 2004)",
    what: "Any act of gender-based violence (physical, sexual, psychological, economic) against a woman and/or her children by her husband, ex-husband, live-in partner, boyfriend/ex-boyfriend, or father of her child.",
    examples: [
      "Physical violence: hitting, slapping, choking, pushing",
      "Sexual violence: marital rape, forced sexual acts",
      "Psychological violence: threats, intimidation, stalking, controlling behavior, public humiliation",
      "Economic abuse: withholding financial support, controlling the partner's money, preventing employment",
      "Denying the woman/child adequate shelter, food, or medical attention",
      "Threatening to take away custody of children to control the partner",
    ],
    penalty: "Prision mayor (6 to 12 years imprisonment) + fine of PHP 100,000 to PHP 300,000. Psychological violence: prision mayor in its minimum period (6-8 years). Economic abuse: prision mayor + fine. If victim is a child: additional penalties under RA 7610",
    bail: "Yes, but a Temporary Protection Order (TPO) is immediately available",
    prescriptive: "20 years (for acts of violence), 10 years (for violations of protection order)",
    notes: [
      "This law protects women AND their children from violence by intimate partners or ex-partners",
      "Men cannot file VAWC cases — but they can file other criminal cases (physical injuries, grave threats, etc.)",
      "A Barangay Protection Order (BPO) can be issued within 24 hours by the barangay",
      "A Temporary Protection Order (TPO) from the court can be obtained within 24-48 hours",
      "Even psychological/emotional abuse is punishable — not just physical violence",
      "The woman can file even WITHOUT leaving the abusive partner",
    ],
    protection: [
      "If you're a victim: call PNP Women's Desk at any police station, or DSWD hotline 163",
      "Barangay Protection Order: go to your barangay, they MUST issue a BPO within 24 hours",
      "Document everything: photos of injuries, screenshots of messages, records of incidents",
      "Support: Gabriela Women's Party (0917-524-8406), Women's Crisis Center",
    ],
  },
  {
    name: "Alarm & Scandal",
    law: "Art. 155, Revised Penal Code",
    what: "Causing public disturbance through discharging firearms, explosives, or similar devices in public, or instigating or taking active part in a charivari or noisy disturbance, or disturbing public peace while intoxicated.",
    examples: [
      "Firing a gun in the air during New Year's or celebrations",
      "Starting a loud disturbance in a public place while drunk",
      "Creating public panic through false alarms",
      "Engaging in a noisy public fight or commotion",
    ],
    penalty: "Arresto menor (1 to 30 days) or fine of PHP 200, or both. If firearms are involved: higher penalties under RA 10591 (Comprehensive Firearms and Ammunition Regulation Act)",
    bail: "Yes (light offense)",
    prescriptive: "2 months",
    notes: [
      "Celebratory gunfire (New Year's) is ILLEGAL and can result in criminal charges",
      "If a stray bullet injures or kills someone: separate charges of homicide/murder or physical injuries",
      "Being drunk is not a defense — in fact, intoxication is specifically mentioned as a basis for this offense",
    ],
    protection: [
      "Don't fire guns in the air — it's illegal and deadly (stray bullets kill people every year)",
      "Avoid engaging in public disturbances, especially while intoxicated",
      "If you witness celebratory gunfire, report to PNP",
    ],
  },
  {
    name: "Grave Coercion",
    law: "Art. 286, Revised Penal Code",
    what: "Forcing another person, through violence, threats, or intimidation, to do something against their will (whether the act is right or wrong) without legal authority.",
    examples: [
      "Forcing someone to sign a document at gunpoint or under threat",
      "A group of people blocking you and forcing you to apologize publicly",
      "An employer physically preventing you from leaving the workplace",
      "Forcing someone to undress or do humiliating acts",
      "Confiscating someone's belongings and refusing to return them unless they comply with demands",
    ],
    penalty: "Prision correccional (6 months to 6 years imprisonment) + fine. If violence is used: up to prision mayor (6-12 years)",
    bail: "Yes",
    prescriptive: "10 years",
    notes: [
      "The act being forced does NOT have to be illegal — even forcing someone to do a legal act through violence/threats is grave coercion",
      "Employers who confiscate passports or documents of workers: this is grave coercion + possible trafficking",
      "Preventing someone from leaving a room/building through force or intimidation = illegal detention, which is even more serious",
    ],
    protection: [
      "Never sign anything under duress — report to police immediately",
      "If your employer withholds your documents (passport, diploma), file a complaint with DOLE",
      "Document instances of coercion — photos, videos, witness statements",
    ],
  },
  {
    name: "Cyberbullying (Minors)",
    law: "RA 10627 (Anti-Bullying Act of 2013) + RA 10175 (Cybercrime Prevention Act)",
    what: "Bullying committed through electronic devices or social media platforms. While RA 10627 applies specifically to schools, cyberbullying of minors can be prosecuted under the Cybercrime Prevention Act.",
    examples: [
      "Persistent online harassment or insults directed at a minor",
      "Creating fake accounts to harass or humiliate a student",
      "Posting embarrassing photos/videos of a minor without consent",
      "Excluding or ostracizing a minor through online platforms (group chats, social media)",
      "Spreading rumors about a minor online",
    ],
    penalty: "Under RA 10627: schools must implement anti-bullying policies; disciplinary measures for students. Under RA 10175: imprisonment of 6-12 years if it amounts to cyber libel, unjust vexation, or threats. Parents of minor offenders may be held subsidiarily liable",
    bail: "Yes",
    prescriptive: "Varies (depends on specific offense charged)",
    notes: [
      "Schools are REQUIRED to have anti-bullying policies and mechanisms for reporting",
      "Parents can be held liable if their minor child commits cyberbullying and they were negligent",
      "Even if you're 'just joking,' persistent online harassment can be prosecuted",
    ],
    protection: [
      "Teach children about responsible social media use",
      "Report bullying to the school's anti-bullying committee",
      "For serious cases, file a complaint with the PNP Anti-Cybercrime Group",
      "Document everything — screenshots with timestamps",
    ],
  },
  {
    name: "Data Privacy Violation",
    law: "RA 10173 (Data Privacy Act of 2012)",
    what: "Unauthorized processing, accessing, or sharing of personal information. This covers businesses, organizations, and individuals who mishandle personal data.",
    examples: [
      "A company leaking your personal data (name, address, phone number) to third parties without consent",
      "An employee sharing customer information for personal gain",
      "Posting someone's personal information online without consent (doxxing)",
      "A company using your personal data for purposes you didn't consent to",
      "Unauthorized access to someone's personal records or accounts",
    ],
    penalty: "Unauthorized processing: 1-3 years imprisonment + PHP 500,000 to PHP 2,000,000 fine. Unauthorized access: 1-3 years + PHP 500,000-2,000,000. Improper disposal: 6 months-2 years + PHP 100,000-500,000. If involving sensitive personal info: penalties are higher",
    bail: "Yes",
    prescriptive: "Varies",
    notes: [
      "The National Privacy Commission (NPC) handles complaints",
      "Sensitive personal information includes: race, marital status, health, education, genetic data, social security numbers, tax returns",
      "Businesses must have a Data Protection Officer (DPO) and proper consent mechanisms",
      "You have the right to access, correct, and request deletion of your personal data from organizations",
    ],
    protection: [
      "Know your rights: right to be informed, right to access, right to object, right to erasure",
      "File complaints with the National Privacy Commission (privacy.gov.ph)",
      "Be cautious about what personal information you share online and with businesses",
    ],
  },
  {
    name: "Identity Theft / Unauthorized Use of Identity",
    law: "RA 10175, Sec. 4(b)(3) — Cybercrime Prevention Act",
    what: "Intentionally acquiring, using, misusing, transferring, possessing, altering, or deleting identifying information of another person without right.",
    examples: [
      "Creating a fake social media account using someone else's name and photos",
      "Using someone else's ID or credentials to open accounts or transact",
      "Catfishing — pretending to be someone else online",
      "Phishing — tricking people into giving you their login credentials",
    ],
    penalty: "Imprisonment of 6 to 12 years + fine of PHP 200,000 to PHP 500,000 (or both)",
    bail: "Yes",
    prescriptive: "15 years",
    notes: [
      "Using someone's name/photo for a fake Facebook account is already identity theft",
      "The victim doesn't need to suffer financial loss — just the use of their identity is enough",
      "Can be filed together with estafa if financial fraud is involved",
    ],
    protection: [
      "Report fake accounts to the platform AND to NBI Cybercrime",
      "Set social media accounts to private to prevent photo theft",
      "Enable 2FA on all important accounts",
      "Monitor your accounts regularly for unauthorized activity",
    ],
  },
];

const selfDefenseRules = [
  {
    principle: "Unlawful Aggression",
    detail: "There must be an ACTUAL, IMMINENT threat — not just verbal threats. The aggression must be ongoing or about to happen. You can't claim self-defense if the threat has already passed.",
  },
  {
    principle: "Reasonable Necessity of Means",
    detail: "The force you use must be PROPORTIONAL to the threat. You can't shoot someone who slapped you. The means of defense must be reasonable based on the circumstances.",
  },
  {
    principle: "Lack of Sufficient Provocation",
    detail: "You must NOT have provoked the attack. If you started the fight or escalated it, you can't claim self-defense.",
  },
];

const importantNumbers = [
  { name: "PNP Hotline", number: "117", desc: "Philippine National Police — crimes, emergencies" },
  { name: "NBI Cybercrime Division", number: "(02) 8523-8231", desc: "For online crimes, cyber libel, identity theft" },
  { name: "PNP Anti-Cybercrime Group", number: "(02) 8723-0401", desc: "Cybercrime complaints and assistance" },
  { name: "DOJ Action Center", number: "(02) 8523-8481", desc: "Department of Justice — legal concerns" },
  { name: "PAO (Public Attorney's Office)", number: "(02) 8929-9436", desc: "Free legal assistance for those who can't afford a lawyer" },
  { name: "IBP Legal Aid", number: "(02) 8525-9055", desc: "Integrated Bar of the Philippines — free legal aid" },
  { name: "Women & Children's Desk (PNP)", number: "117", desc: "Any PNP station has a women and children's desk" },
  { name: "DSWD Hotline", number: "163", desc: "Social welfare concerns, VAWC, abuse reporting" },
];

export function BasicLaws() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLaws = commonLaws.filter(
    (law) =>
      law.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      law.what.toLowerCase().includes(searchQuery.toLowerCase()) ||
      law.examples.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-red-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-red-100 rounded-xl">
            <Gavel className="w-6 h-6 text-red-600" />
          </div>
          <h1 className="text-red-900">Basic Laws You Should Know</h1>
        </div>
        <p className="text-sm text-red-700 leading-relaxed max-w-2xl">
          Laws that are surprisingly easy to violate without knowing it. This guide covers
          cyber libel, defamation, bomb jokes, threats, data privacy, voyeurism, and other offenses
          that everyday Filipinos can accidentally commit — with actual penalties and how to protect yourself.
        </p>
      </div>

      {/* Important Warning */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-amber-900 mb-1">Disclaimer</h3>
            <p className="text-sm text-amber-700">
              This is an educational guide, NOT legal advice. Laws and jurisprudence may change.
              If you're facing a legal issue, consult a licensed lawyer or seek help from the
              Public Attorney's Office (PAO) for free legal assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search laws, offenses, or examples..."
          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Laws List */}
      <div className="space-y-4">
        {filteredLaws.map((law) => (
          <details key={law.name} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
            <summary className="p-5 cursor-pointer list-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Gavel className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-gray-900">{law.name}</h3>
                    <span className="text-xs text-gray-400">{law.law}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
              </div>
              <p className="text-sm text-gray-600 mt-2 ml-12">{law.what}</p>
            </summary>
            <div className="px-5 pb-5 space-y-4">
              {/* Examples */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-gray-800 mb-2 flex items-center gap-2">
                  <MessageSquareWarning className="w-4 h-4 text-red-400" />
                  Real-Life Examples
                </h4>
                <ul className="space-y-1.5">
                  {law.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ArrowRight className="w-3 h-3 text-red-400 shrink-0 mt-1.5" /> {ex}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Penalty */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="text-red-800 mb-2 flex items-center gap-2">
                  <Ban className="w-4 h-4" /> Penalty
                </h4>
                <p className="text-sm text-red-700">{law.penalty}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="bg-white/80 rounded px-3 py-1.5">
                    <span className="text-xs text-gray-500">Bail:</span>{" "}
                    <span className="text-xs text-gray-700">{law.bail}</span>
                  </div>
                  <div className="bg-white/80 rounded px-3 py-1.5">
                    <span className="text-xs text-gray-500">Prescriptive Period:</span>{" "}
                    <span className="text-xs text-gray-700">{law.prescriptive}</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="text-amber-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Important Notes
                </h4>
                <ul className="space-y-1.5">
                  {law.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
                      <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-1" /> {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Protect Yourself */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-green-800 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> How to Protect Yourself
                </h4>
                <ul className="space-y-1.5">
                  {law.protection.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* Self-Defense */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">Self-Defense Rules in the Philippines</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Self-defense is a valid legal defense under Art. 11 of the Revised Penal Code, but ALL three elements must be present:
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {selfDefenseRules.map((rule, i) => (
            <div key={i} className="p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                <h4 className="text-blue-800">{rule.principle}</h4>
              </div>
              <p className="text-sm text-gray-600">{rule.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">
            <strong>Important:</strong> In the Philippines, the burden of proof for self-defense is on the ACCUSED.
            If you claim self-defense, YOU must prove all three elements. The prosecution doesn't need to disprove it.
            Always try to flee or de-escalate first — self-defense should be a last resort.
          </p>
        </div>
      </div>

      {/* Citizen's Arrest */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Can I Perform a Citizen's Arrest?</h2>
        <p className="text-sm text-gray-500 mb-4">Rule 113, Sec. 5 of the Rules of Court allows a private person to arrest without a warrant ONLY in these cases:</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              when: "In Flagrante Delicto",
              detail: "When the person has committed, is actually committing, or is attempting to commit a crime IN YOUR PRESENCE.",
              example: "You witness a person snatching a bag or assaulting someone right in front of you.",
            },
            {
              when: "Hot Pursuit",
              detail: "When a crime has JUST been committed and you have PROBABLE CAUSE based on personal knowledge that the person committed it.",
              example: "You see someone running from a store and the owner is shouting 'Magnanakaw!' — and you witnessed the act.",
            },
            {
              when: "Escaped Prisoner",
              detail: "When the person is a prisoner who has escaped from confinement.",
              example: "An escaped convict identified through news/alerts is spotted in public.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-1">{item.when}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.detail}</p>
              <p className="text-xs text-blue-600">Example: {item.example}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Warning:</strong> If you make an illegal arrest (wrong person, insufficient evidence, or excessive force),
            YOU can be charged with illegal detention, coercion, or even kidnapping. When in doubt, call the police instead.
            After a citizen's arrest, you must immediately turn the person over to the police.
          </p>
        </div>
      </div>

      {/* Where to Get Legal Help */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-indigo-600" />
          <h2 className="text-gray-900">Where to Get Legal Help (Free & Paid)</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 rounded-xl">
            <h4 className="text-green-800 mb-2">Free Legal Assistance</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <strong>PAO (Public Attorney's Office)</strong> — free lawyers for those who can't afford one. Available nationwide. Income ceiling: PHP 14,000/month (Metro Manila)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <strong>IBP Legal Aid</strong> — Integrated Bar of the Philippines offers free legal consultations and representation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <strong>Law School Legal Aid Clinics</strong> — UP, Ateneo, UST, San Beda, and other law schools offer free legal clinics</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <strong>FLAG (Free Legal Assistance Group)</strong> — handles human rights cases</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <strong>Barangay Justice System (Katarungang Pambarangay)</strong> — for disputes between neighbors/residents. FREE and mandatory before filing in court for certain cases</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <h4 className="text-blue-800 mb-2">Hiring a Private Lawyer</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Consultation fee: PHP 1,000 - 5,000 per session</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Acceptance fee for criminal cases: PHP 30,000 - 200,000+</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Per appearance fee: PHP 3,000 - 10,000 per court hearing</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Always ask for a written engagement letter specifying fees</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Verify the lawyer is active: check SC Roll of Attorneys or IBP website</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-blue-400 shrink-0 mt-1.5" /> Tip: get referrals from trusted people, not from 'fixer' networks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Numbers */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 sm:p-6">
        <h2 className="text-blue-900 mb-4">Emergency & Legal Hotlines</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {importantNumbers.map((item) => (
            <div key={item.name} className="bg-white/80 rounded-lg p-3 flex items-start gap-3">
              <div className="p-1.5 bg-blue-100 rounded-lg shrink-0">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-800">{item.name}</div>
                <div className="text-blue-700">{item.number}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-red-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Can I go to jail for a Facebook post?",
              a: "YES. Cyber libel under RA 10175 carries 6-12 years imprisonment. If your post defames a specific, identifiable person with false statements or malicious accusations, you can be criminally charged. Even a comment, tweet, or share can be prosecuted. The prescriptive period is 15 years — meaning you can be sued for a post you made years ago.",
            },
            {
              q: "Someone threatened me online. What should I do?",
              a: "Screenshot EVERYTHING immediately (with timestamps and URLs). Do not delete the messages. File a complaint with the PNP Anti-Cybercrime Group or NBI Cybercrime Division. You can also get a protection order from the court. If the threat is immediate and you fear for your safety, call 117 (PNP) immediately.",
            },
            {
              q: "Can I record my conversation with my boss as evidence?",
              a: "NO — not without their consent. The Philippines follows the all-party consent rule under RA 4200 (Anti-Wiretapping Act). Secretly recording conversations is illegal and the recording is inadmissible in court. Instead, communicate through email or chat (written records), or have a witness present during important conversations.",
            },
            {
              q: "I was scammed on Facebook Marketplace. What can I do?",
              a: "File a complaint for estafa (swindling) at the nearest police station. Bring evidence: screenshots of the transaction, GCash/bank transfer receipts, conversation records, and the seller's profile. For online scams, you can also file with the NBI Cybercrime Division. The cybercrime law imposes penalties one degree higher than regular estafa.",
            },
            {
              q: "Is truth a valid defense for libel/cyber libel?",
              a: "Partially. Truth is a defense ONLY if the imputation was made with good motives AND for justifiable ends (Art. 361, RPC). Even if what you said is 100% true, if it was said with malice or without justifiable purpose, you can still be convicted. For public officials, fair comment on their official conduct is generally protected.",
            },
            {
              q: "Can I be arrested for a joke?",
              a: "Yes, for certain types of jokes. Bomb jokes carry 5-10 years imprisonment under RA 12005. Death threats 'as a joke' can be prosecuted as grave threats (6 months to 12 years). Even defamatory jokes about real people can be cyber libel. The law doesn't care about your intent — the act itself is what's punished.",
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
