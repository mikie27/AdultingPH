import {
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle,
  Lock,
  Ban,
  Eye,
  CreditCard,
  Wifi,
} from "lucide-react";

const onlineScams = [
  {
    scam: "Online Shopping Scam (Lazada/Shopee/FB)",
    howItWorks: "Fake seller takes payment but never ships item. Uses stolen product photos. Account disappears after sale.",
    signs: ["Price too good to be true", "Seller has no/few reviews", "Refuses COD (cash on delivery)", "Only accepts GCash/bank transfer", "Uses stock photos or photos from other sellers"],
    protect: ["Use COD whenever possible", "Check seller ratings and reviews (look for verified purchases)", "Never transact outside the platform (no direct GCash)", "Screenshot everything before purchasing", "Use Shopee/Lazada Guarantee — file dispute within the window if item doesn't arrive"],
  },
  {
    scam: "Romance / Love Scam",
    howItWorks: "Scammer builds a romantic relationship online (usually on dating apps or FB). After gaining trust, asks for money for 'emergencies,' 'flights to visit you,' or 'investment opportunities.'",
    signs: ["Person is 'too perfect' and moves the relationship fast", "Never does video calls (or uses filters heavily)", "Always has emergencies that need money", "Claims to be a foreign national or OFW", "Asks you to invest in crypto/forex together"],
    protect: ["Never send money to someone you haven't met in person", "Reverse image search their photos (they're often stolen)", "If they refuse video calls, it's a major red flag", "Tell a trusted friend/family about the relationship", "Report to NBI Cybercrime Division if scammed"],
  },
  {
    scam: "Phishing (Fake Bank/GCash Messages)",
    howItWorks: "You receive an SMS or email that looks like it's from your bank, GCash, or Maya saying your account is 'locked' or 'compromised.' The link leads to a fake website that steals your login credentials.",
    signs: ["Message has urgent/threatening language", "Link URL doesn't match official domain", "Asks you to 'verify' account by entering password/OTP", "Sent from a random phone number (not the official sender ID)", "Grammar/spelling errors"],
    protect: ["NEVER click links in SMS/email claiming to be from your bank", "Go directly to the official app or website", "Banks and GCash will NEVER ask for your PIN/OTP via text", "Enable 2FA (two-factor authentication) on all accounts", "Report phishing to your bank and NBI Cybercrime"],
  },
  {
    scam: "Investment Scam / Ponzi / Pyramid",
    howItWorks: "Promises unrealistic returns (10-30% per month). Uses new investor money to pay old investors. Eventually collapses. Common fronts: forex trading, crypto, 'networking,' animal farming, etc.",
    signs: ["Guaranteed high returns with 'no risk'", "Pressure to recruit others", "No SEC registration", "Company can't explain how they generate returns", "Withdrawals become difficult over time"],
    protect: ["Check SEC Investment Warning list (sec.gov.ph)", "If returns seem too good to be true, they ARE", "Only invest in SEC-registered products", "Ask: 'Where does the money come from?' — if the answer is 'new members,' it's a pyramid", "Never invest money you can't afford to lose"],
  },
  {
    scam: "Job Scam (Work-from-Home, Data Encoding)",
    howItWorks: "Fake job posts on FB/Telegram offering high pay for simple tasks (data encoding, liking videos, etc.). Requires 'activation fee' or 'deposit.' Some are fronts for illegal gambling operations.",
    signs: ["Requires upfront payment to 'start working'", "Unrealistic pay (₱5,000/day for simple tasks)", "Job posting is on social media, not legitimate job sites", "Company has no verifiable address or registration", "Communication only via Telegram/Viber"],
    protect: ["Legitimate jobs NEVER require you to pay to work", "Verify company through SEC/DTI registration", "Use legitimate job platforms: JobStreet, LinkedIn, Indeed, Kalibrr", "Be wary of Telegram-based 'opportunities'", "Report to DOLE or NBI if scammed"],
  },
  {
    scam: "SIM Swap / Account Takeover",
    howItWorks: "Scammer convinces your telco to transfer your number to their SIM. They then receive your OTPs and can access your GCash, bank apps, and other accounts linked to your number.",
    signs: ["Sudden loss of phone signal for no reason", "Notifications about SIM changes you didn't request", "Unable to receive calls/texts", "Unauthorized transactions on your accounts"],
    protect: ["Set a SIM lock PIN with your telco (Globe: *143#, Smart: *888#)", "Don't share personal info on social media (birthday, mother's maiden name)", "Use authenticator apps instead of SMS for 2FA when possible", "Contact your telco IMMEDIATELY if you lose signal unexpectedly", "File a report with NBI Cybercrime"],
  },
];

const accountSecurity = [
  {
    title: "GCash & Maya Security",
    tips: [
      "Enable biometric authentication (fingerprint/face) for login",
      "Set a MPIN that's NOT your birthday or '1234'",
      "Never share your MPIN or OTP with anyone — customer support will NEVER ask for it",
      "Enable login notifications so you know if someone accesses your account",
      "Set daily transaction limits to minimize potential losses",
      "Link your GCash to a bank account so you can transfer funds out quickly if compromised",
      "Regularly check transaction history for unauthorized transactions",
      "If you lose your phone, call GCash (2882) / Maya (572-7777) IMMEDIATELY to freeze your account",
    ],
  },
  {
    title: "Social Media Security",
    tips: [
      "Enable Two-Factor Authentication (2FA) on ALL social media accounts",
      "Use unique passwords for each account — never reuse passwords",
      "Don't accept friend requests from people you don't know",
      "Review your privacy settings: limit who can see your posts, friends list, and personal info",
      "Don't post photos of your IDs, boarding passes, or documents — scammers use these",
      "Be careful with 'fun quizzes' that ask for personal info (mother's maiden name, first pet, etc.) — these are often security question answers",
      "Check 'Login Activity' regularly for unfamiliar devices/locations",
      "Don't click shortened links (bit.ly, tinyurl) from strangers — they may lead to phishing sites",
    ],
  },
  {
    title: "Email & Password Safety",
    tips: [
      "Use a password manager (Bitwarden — free, or 1Password/LastPass) instead of remembering passwords",
      "Create strong passwords: 12+ characters, mix of uppercase, lowercase, numbers, symbols",
      "Enable 2FA on your email — your email is the master key to all other accounts",
      "Never use your work email for personal accounts",
      "Check haveibeenpwned.com to see if your email/password has been in a data breach",
      "Don't open email attachments from unknown senders",
      "Gmail users: enable Google's Advanced Protection if you're a high-value target",
    ],
  },
  {
    title: "Online Banking Safety",
    tips: [
      "Only use official bank apps from the App Store or Google Play",
      "Never access online banking on public WiFi — use mobile data instead",
      "Set up transaction notifications (SMS/email) for all transactions",
      "Enable biometric authentication for banking apps",
      "Regularly change your online banking password (every 3-6 months)",
      "Log out of banking apps after every session — don't just close the app",
      "If you receive a suspicious call claiming to be from your bank, hang up and call the bank's official hotline yourself",
    ],
  },
];

const ewalletComparison = [
  { feature: "Send/Receive Money", gcash: "Yes", maya: "Yes", shopeepay: "Yes" },
  { feature: "Cash In (free channels)", gcash: "7-Eleven, bank transfer", maya: "Bank transfer, Smart Padala", shopeepay: "7-Eleven, bank transfer" },
  { feature: "Cash Out Fee", gcash: "₱15 (bank), free (some promos)", maya: "₱15 (bank), free (some promos)", shopeepay: "₱15 (bank)" },
  { feature: "Bill Payments", gcash: "Yes (wide selection)", maya: "Yes (wide selection)", shopeepay: "Limited" },
  { feature: "Savings Feature", gcash: "GSave (CIMB: 2.6% p.a.)", maya: "Maya Savings (up to 15% p.a. promo)", shopeepay: "No" },
  { feature: "Investment Feature", gcash: "GInvest (ATRAM funds)", maya: "Maya Crypto, Maya Invest", shopeepay: "No" },
  { feature: "Insurance", gcash: "GInsure", maya: "Maya Insurance", shopeepay: "No" },
  { feature: "QR Payments", gcash: "Yes (QRPh)", maya: "Yes (QRPh)", shopeepay: "Limited (Shopee merchants)" },
  { feature: "Fully Verified Limit", gcash: "₱100,000 wallet", maya: "₱100,000 wallet", shopeepay: "₱50,000 wallet" },
];

const digitalLiteracyTips = [
  {
    title: "Spotting Fake News",
    tips: [
      "Check the source — is it from a legitimate news outlet? Look for 'About Us' page",
      "Cross-reference with other news sources before sharing",
      "Look at the URL — fake news sites often mimic real URLs (e.g., 'philstar.co' instead of 'philstar.com')",
      "Be skeptical of sensational headlines designed to provoke emotional reactions",
      "Use fact-checking sites: Vera Files, Rappler Fact Check, AFP Fact Check",
      "Screenshots can be edited — verify before believing/sharing",
    ],
  },
  {
    title: "Safe Online Shopping",
    tips: [
      "Use COD (Cash on Delivery) for first-time purchases from new sellers",
      "Check seller ratings: look for 90%+ positive rating with 100+ reviews",
      "Compare prices across platforms — if one seller is 50% cheaper, it's likely a scam",
      "Read product reviews carefully — look for photo reviews from verified buyers",
      "Use platform protections (Shopee Guarantee, Lazada Buyer Protection)",
      "For high-value items, buy from official brand stores on the platform",
      "Save screenshots of product listings and conversations with sellers",
    ],
  },
  {
    title: "Data Privacy Basics",
    tips: [
      "You have rights under the Data Privacy Act (RA 10173) — companies must protect your data",
      "You can request companies to delete your personal data",
      "Don't give your phone number/email to every store that asks — it leads to spam",
      "Review app permissions — does a flashlight app really need access to your contacts?",
      "Use a separate email for online shopping/newsletters (not your primary email)",
      "Be cautious with free WiFi — it can be used to intercept your data",
      "Report data privacy violations to NPC (National Privacy Commission): complaints@privacy.gov.ph",
    ],
  },
];

export function DigitalAdulting() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-cyan-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-cyan-100 rounded-xl">
            <Smartphone className="w-6 h-6 text-cyan-600" />
          </div>
          <h1 className="text-cyan-900">Digital Adulting & Online Safety</h1>
        </div>
        <p className="text-sm text-cyan-700 leading-relaxed max-w-2xl">
          Protect yourself online — scam prevention, account security, e-wallet tips, GCash/Maya
          safety, fake news detection, and data privacy in the digital age. Filipinos lose billions
          to online scams every year. Don't be one of them.
        </p>
      </div>

      {/* Scams */}
      <div>
        <h2 className="text-gray-900 mb-1">Common Online Scams in the Philippines</h2>
        <p className="text-sm text-gray-500 mb-4">Learn the patterns — once you know them, they're easy to spot</p>
        <div className="space-y-4">
          {onlineScams.map((item) => (
            <details key={item.scam} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900 text-sm flex items-center gap-2"><Ban className="w-4 h-4 text-red-500" /> {item.scam}</h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.howItWorks}</p>
              </summary>
              <div className="px-5 pb-5 grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="text-red-800 text-sm mb-2 flex items-center gap-1.5"><Eye className="w-4 h-4" /> Warning Signs</h4>
                  <ul className="space-y-1">
                    {item.signs.map((s, i) => (
                      <li key={i} className="text-xs text-red-700 flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> {s}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="text-green-800 text-sm mb-2 flex items-center gap-1.5"><Shield className="w-4 h-4" /> How to Protect Yourself</h4>
                  <ul className="space-y-1">
                    {item.protect.map((p, i) => (
                      <li key={i} className="text-xs text-green-700 flex items-start gap-1.5"><CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" /> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Account Security */}
      <div>
        <h2 className="text-gray-900 mb-1">Securing Your Digital Accounts</h2>
        <p className="text-sm text-gray-500 mb-4">Your phone is basically your wallet, ID, and bank — protect it</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {accountSecurity.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3 flex items-center gap-2"><Lock className="w-4 h-4 text-cyan-500" /> {section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* E-Wallet Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-cyan-600" />
          <h2 className="text-gray-900">E-Wallet Comparison: GCash vs Maya vs ShopeePay</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-3 text-gray-500">Feature</th>
                <th className="text-left py-3 px-3 text-blue-600">GCash</th>
                <th className="text-left py-3 px-3 text-green-600">Maya</th>
                <th className="text-left py-3 px-3 text-orange-600">ShopeePay</th>
              </tr>
            </thead>
            <tbody>
              {ewalletComparison.map((row) => (
                <tr key={row.feature} className="border-b border-gray-50">
                  <td className="py-2.5 px-3 text-gray-700">{row.feature}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.gcash}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.maya}</td>
                  <td className="py-2.5 px-3 text-gray-600">{row.shopeepay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digital Literacy */}
      <div>
        <h2 className="text-gray-900 mb-1">Digital Literacy & Online Smarts</h2>
        <p className="text-sm text-gray-500 mb-4">Skills every Filipino netizen should have</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {digitalLiteracyTips.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ArrowRight className="w-3 h-3 text-cyan-500 shrink-0 mt-1" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Report Cybercrime */}
      <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-200 p-5 sm:p-6">
        <h2 className="text-red-900 mb-3">Where to Report Cybercrimes</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "NBI Cybercrime Division", contact: "(02) 8523-8231 to 38", desc: "Online scams, hacking, identity theft, online estafa" },
            { name: "PNP Anti-Cybercrime Group", contact: "(02) 8723-0401 local 7491", desc: "All cybercrimes, online exploitation, unauthorized access" },
            { name: "DICT Cybercrime Investigation", contact: "report@dict.gov.ph", desc: "Cybersecurity incidents, data breaches" },
            { name: "National Privacy Commission", contact: "complaints@privacy.gov.ph / (02) 8234-2228", desc: "Data privacy violations, unauthorized data collection/sharing" },
            { name: "DTI Consumer Protection", contact: "1-DTI (1-384) / consumercare@dti.gov.ph", desc: "Online shopping complaints, unfair trade practices" },
            { name: "BSP Consumer Protection", contact: "consumeraffairs@bsp.gov.ph", desc: "Unauthorized bank/e-wallet transactions, financial fraud" },
          ].map((item) => (
            <div key={item.name} className="bg-white/70 rounded-lg p-3">
              <h4 className="text-red-800 text-sm">{item.name}</h4>
              <div className="text-red-700 text-sm">{item.contact}</div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Security Checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-cyan-600" />
          <h2 className="text-gray-900">Quick Security Checklist (Do These TODAY)</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Enable 2FA on Gmail, Facebook, Instagram, and all banking apps",
            "Change any password that is your birthday, name, or '123456'",
            "Set a SIM lock PIN with your telco (prevents SIM swap)",
            "Turn on login notifications for all social media accounts",
            "Set transaction alerts on GCash, Maya, and online banking",
            "Remove unnecessary apps that have access to your personal data",
            "Update your phone's OS and all apps to the latest version",
            "Check if your email has been breached at haveibeenpwned.com",
            "Don't reuse the same password across multiple accounts",
            "Back up your phone data regularly (Google Drive or iCloud)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2.5 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
