import { useState } from "react";
import { Heart, Phone, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle, Shield, Search, Clock, DollarSign, MapPin, Users, Star, MessageCircle, Brain } from "lucide-react";

const crisisHotlines = [
  { name: "National Center for Mental Health (NCMH) Crisis Hotline", number: "1553 (toll-free) / 0917-899-8727 / (02) 8989-8727", hours: "24/7", desc: "Government crisis hotline. FREE. For suicidal ideation, mental health emergencies, and crisis intervention.", highlight: true },
  { name: "Hopeline Philippines", number: "0917-558-4673 (Globe) / 0918-873-4673 (Smart) / 2919 (toll-free for Globe & TM)", hours: "24/7", desc: "Run by the Natasha Goulbourn Foundation. Trained counselors for crisis intervention, suicide prevention, and emotional support.", highlight: true },
  { name: "In Touch Community Services", number: "(02) 8893-7603 / 0917-800-1123 / 0922-893-8944", hours: "24/7", desc: "Crisis counseling, emotional support, and mental health referrals." },
  { name: "Lunas Collective", number: "0966-351-4518 (text/Viber)", hours: "Daily, varies", desc: "Free online peer support and mental health resources for Filipinos." },
  { name: "Manila Lifeline Centre", number: "(02) 8969-1955 / (02) 8526-9191", hours: "24/7", desc: "Emotional support and crisis intervention." },
  { name: "PMHA (Philippine Mental Health Association)", number: "(02) 8921-4958 / (02) 8921-4959", hours: "Office hours (Mon-Fri)", desc: "Mental health consultations, psychological testing, and counseling at affordable rates." },
  { name: "DOH Mental Health Hotline", number: "(02) 8651-7800 loc. 5555", hours: "24/7", desc: "Department of Health mental health support and referrals." },
  { name: "Tawag Paglaum (Visayas)", number: "0939-937-5433 / 0927-654-1629", hours: "24/7", desc: "Free crisis intervention hotline for the Visayas region." },
  { name: "DSWD Hotline", number: "163 (toll-free)", hours: "24/7", desc: "Social welfare concerns including mental health, abuse, and crisis support." },
];

const therapyOptions = [
  {
    type: "Government Hospitals & Community Mental Health Centers",
    cost: "FREE to PHP 500/session",
    where: "NCMH (Mandaluyong), government hospitals with psychiatric departments, LGU health centers",
    details: [
      "National Center for Mental Health (NCMH) — the primary government mental health facility. Walk-in consultations available",
      "Philippine General Hospital (PGH) — psychiatry outpatient clinic. Charity patients accepted",
      "East Avenue Medical Center, Jose Reyes Memorial, Quirino Memorial — psychiatric services available",
      "Community Mental Health Units in LGU health centers (RA 11036 mandates these)",
      "Bring: valid ID, referral letter (if available), any medical records",
      "Wait times can be long (2-6 hours). Arrive early for queuing",
    ],
    pros: "Free or very affordable. Access to psychiatrists who can prescribe medication.",
    cons: "Long wait times. Limited appointment slots. May feel impersonal due to volume.",
  },
  {
    type: "Private Psychiatrists",
    cost: "PHP 1,500 - 5,000/session (initial); PHP 800 - 3,000/follow-up",
    where: "Private clinics, hospitals (St. Luke's, Makati Med, Medical City, etc.)",
    details: [
      "Can diagnose mental health conditions and PRESCRIBE medication",
      "Initial consultation is longer (30-60 mins) and more expensive",
      "Follow-up sessions are shorter (15-30 mins) — primarily for medication management",
      "Some accept HMO coverage (Maxicare, Medicard, Intellicare — check your plan)",
      "For therapy + medication: see a psychiatrist. For talk therapy only: see a psychologist",
    ],
    pros: "Can prescribe medication. Shorter wait times. More personalized care.",
    cons: "Expensive without HMO. Sessions can be short (focused on medication).",
  },
  {
    type: "Private Psychologists / Psychotherapists",
    cost: "PHP 1,000 - 4,000/session",
    where: "Private clinics, online platforms",
    details: [
      "CANNOT prescribe medication — but provide talk therapy (CBT, DBT, psychodynamic, etc.)",
      "Sessions are typically 45-60 minutes",
      "Can diagnose mental health conditions through psychological assessment",
      "Better for ongoing therapy and processing (not just medication management)",
      "Look for licensed psychologists (RPsy) or registered psychometricians (RPm)",
    ],
    pros: "Longer sessions. Focus on talk therapy and coping strategies. Many now offer online sessions.",
    cons: "Cannot prescribe medication. Can be expensive over time.",
  },
  {
    type: "Online Therapy Platforms",
    cost: "PHP 800 - 3,500/session",
    where: "Apps and websites accessible from home",
    details: [
      "Empath (empath.ph) — Filipino online therapy platform. PHP 1,200-2,500/session. Licensed psychologists and psychiatrists. Video or chat sessions",
      "MindNation (mindnation.com) — mental wellness platform. PHP 1,500-2,500/session. Used by many companies as EAP provider",
      "BetterHelp — international platform with Filipino therapists. ~PHP 3,000-5,000/week (subscription). Messaging + video sessions",
      "Talkspace — similar to BetterHelp. International platform with licensed therapists",
      "RecoverHub — online platform for Filipinos. Affordable rates",
      "Kumusta (kumustamentalhealthph.com) — free initial mental health screening and referrals",
    ],
    pros: "Convenient (from home). No travel time. More privacy. Flexible scheduling.",
    cons: "Requires stable internet. May not accept HMO. Less personal than face-to-face.",
  },
  {
    type: "Company Employee Assistance Programs (EAP)",
    cost: "FREE (employer-provided)",
    where: "Through your employer's HR department",
    details: [
      "Many medium-to-large companies provide free counseling sessions (usually 3-6 sessions/year)",
      "CONFIDENTIAL — your employer only knows you used the service, not what you discussed",
      "Common EAP providers: MindNation, Ateneo Bulatao Center, ComPsych, Lyra Health",
      "RA 11036 (Mental Health Act) requires some workplaces to provide mental health support",
      "Ask your HR department if your company has an EAP",
      "Some companies also offer free psychiatric consultations through their HMO",
    ],
    pros: "Free. Confidential. No out-of-pocket cost.",
    cons: "Limited number of sessions. May not cover long-term treatment.",
  },
];

const commonMedications = [
  {
    category: "Antidepressants (SSRIs)",
    meds: [
      { name: "Sertraline (Zoloft/generic)", price: "PHP 5-25/tablet (generic) / PHP 30-50/tablet (branded)", use: "Depression, anxiety, OCD, PTSD. Most commonly prescribed first-line antidepressant." },
      { name: "Escitalopram (Lexapro/generic)", price: "PHP 10-30/tablet (generic) / PHP 35-65/tablet (branded)", use: "Depression, generalized anxiety disorder. Known for fewer side effects." },
      { name: "Fluoxetine (Prozac/generic)", price: "PHP 3-15/tablet (generic) / PHP 25-40/tablet (branded)", use: "Depression, OCD, panic disorder, bulimia. One of the cheapest options." },
    ],
  },
  {
    category: "Antidepressants (SNRIs)",
    meds: [
      { name: "Venlafaxine (Effexor/generic)", price: "PHP 15-35/tablet (generic) / PHP 40-80/tablet (branded)", use: "Depression, generalized anxiety, social anxiety, panic disorder." },
      { name: "Duloxetine (Cymbalta/generic)", price: "PHP 20-45/tablet (generic) / PHP 50-90/tablet (branded)", use: "Depression, anxiety, chronic pain, fibromyalgia." },
    ],
  },
  {
    category: "Anti-Anxiety (Benzodiazepines)",
    meds: [
      { name: "Clonazepam (Rivotril/generic)", price: "PHP 5-20/tablet (generic) / PHP 25-45/tablet (branded)", use: "Panic disorder, anxiety, seizures. Controlled substance — needs special prescription (S2)." },
      { name: "Alprazolam (Xanax/generic)", price: "PHP 5-15/tablet (generic) / PHP 20-40/tablet (branded)", use: "Anxiety, panic attacks. Fast-acting but habit-forming. Controlled substance (S2)." },
    ],
  },
  {
    category: "Mood Stabilizers / Antipsychotics",
    meds: [
      { name: "Quetiapine (Seroquel/generic)", price: "PHP 10-30/tablet (generic) / PHP 50-100/tablet (branded)", use: "Bipolar disorder, schizophrenia, adjunct for depression. Can cause drowsiness." },
      { name: "Aripiprazole (Abilify/generic)", price: "PHP 20-60/tablet (generic) / PHP 80-200/tablet (branded)", use: "Bipolar disorder, schizophrenia, adjunct for depression. Fewer sedation side effects." },
    ],
  },
  {
    category: "Sleep Aids",
    meds: [
      { name: "Melatonin (OTC)", price: "PHP 5-15/tablet", use: "Sleep regulation. Over-the-counter. Mild and non-habit-forming." },
      { name: "Mirtazapine (Remeron/generic)", price: "PHP 10-25/tablet (generic)", use: "Depression with insomnia. Also helps with appetite. Prescription required." },
    ],
  },
];

const freeResources = [
  {
    name: "Crisis Hotlines (listed above)",
    detail: "Free 24/7 crisis intervention and emotional support",
    type: "Phone/Text",
  },
  {
    name: "NCMH Walk-In Services",
    detail: "National Center for Mental Health in Mandaluyong. Free psychiatric consultation and medication for indigent patients.",
    type: "In-Person",
  },
  {
    name: "LGU Community Mental Health Services",
    detail: "Under RA 11036, LGUs are mandated to provide mental health services. Check your city/municipal health center.",
    type: "In-Person",
  },
  {
    name: "PhilHealth Coverage for Mental Health",
    detail: "PhilHealth now covers psychiatric consultations and some medications. Mental health is included in the benefit package under RA 11036.",
    type: "Insurance",
  },
  {
    name: "Silakbo PH",
    detail: "Free online peer support group for Filipinos. Facebook community and regular online support sessions.",
    type: "Online Community",
  },
  {
    name: "MentalHealthPH.org",
    detail: "Directory of mental health professionals, clinics, and resources in the Philippines.",
    type: "Online Directory",
  },
  {
    name: "Reddit r/MentalHealthPH",
    detail: "Online community for Filipinos discussing mental health, sharing experiences, and recommending professionals.",
    type: "Online Community",
  },
  {
    name: "GabayPH",
    detail: "Free anonymous mental health screening tool and resource directory (gabay.ph).",
    type: "Online Tool",
  },
];

const selfCareTips = [
  {
    title: "When You Can't Afford Therapy",
    tips: [
      "Call crisis hotlines — they're FREE and confidential. You don't have to be 'in crisis' to call",
      "Check your company's EAP — many companies offer free sessions you might not know about",
      "Visit your LGU health center — mental health services should be available under RA 11036",
      "NCMH walk-in consultations are free for indigent patients",
      "Ask about sliding scale fees — some private therapists offer reduced rates based on income",
      "Use online CBT workbooks and resources (free PDFs available for anxiety, depression)",
      "Join peer support groups (Silakbo PH, MentalHealthPH communities) — sharing helps",
      "PhilHealth may cover your psychiatric consultations — check with your psychiatrist",
    ],
  },
  {
    title: "Daily Mental Health Habits",
    tips: [
      "Sleep 7-9 hours consistently — sleep deprivation worsens anxiety and depression significantly",
      "Move your body daily — even a 20-minute walk reduces anxiety. Exercise is proven to be as effective as mild antidepressants for some people",
      "Limit social media — studies consistently show excess social media use increases depression and anxiety",
      "Practice the 5-4-3-2-1 grounding technique: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste",
      "Write in a journal — even 5 minutes of writing your thoughts helps process emotions",
      "Maintain social connections — isolation worsens mental health. Text a friend, have lunch with someone",
      "Reduce caffeine and alcohol — both can worsen anxiety and disrupt sleep",
      "Practice box breathing: inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds. Repeat 4 times",
    ],
  },
  {
    title: "When to Seek Professional Help",
    tips: [
      "Persistent sadness, emptiness, or hopelessness lasting more than 2 weeks",
      "Losing interest in activities you used to enjoy",
      "Significant changes in appetite or weight (up or down)",
      "Sleep disturbances — insomnia or sleeping too much",
      "Difficulty concentrating, making decisions, or remembering things",
      "Thoughts of death, self-harm, or suicide — seek help IMMEDIATELY",
      "Panic attacks, excessive worry, or irrational fears that interfere with daily life",
      "Substance use to cope with emotions",
      "Feeling overwhelmed to the point where you can't function at work/school/home",
      "Physical symptoms with no medical cause (headaches, stomach aches, chest tightness)",
    ],
  },
];

const clinicRecommendations = [
  {
    name: "National Center for Mental Health (NCMH)",
    location: "Nueve de Pebrero St., Mandaluyong City",
    cost: "Free to very affordable",
    specialty: "Full psychiatric services, crisis intervention, inpatient and outpatient",
    notes: "Government facility. Walk-in available. Long wait times but comprehensive care. Has children and adolescent unit.",
  },
  {
    name: "PGH Department of Psychiatry",
    location: "Taft Ave., Manila",
    cost: "Free (charity) to PHP 500",
    specialty: "Outpatient psychiatry, psychiatric emergencies",
    notes: "Part of the Philippine General Hospital. Service ward for charity patients. By referral or walk-in.",
  },
  {
    name: "Ateneo Bulatao Center",
    location: "Ateneo de Manila University, Quezon City",
    cost: "PHP 500 - 2,000/session (sliding scale)",
    specialty: "Psychotherapy, psychological assessment, counseling",
    notes: "Affordable therapy with licensed psychologists. Sliding scale based on capacity to pay. Long-term therapy available.",
  },
  {
    name: "UST Psychotrauma Clinic",
    location: "UST Hospital, Manila",
    cost: "PHP 500 - 1,500/session",
    specialty: "Trauma therapy, PTSD, psychological assessment",
    notes: "Specializes in trauma-informed care. Affordable rates.",
  },
  {
    name: "PMHA (Philippine Mental Health Association)",
    location: "Quezon City (main), with satellite branches",
    cost: "PHP 300 - 1,500/session",
    specialty: "Counseling, psychological testing, psychiatric consultation",
    notes: "Non-profit organization. Offers affordable mental health services. Has been operating since 1950.",
  },
  {
    name: "MindNation",
    location: "Online (app/web)",
    cost: "PHP 1,500 - 2,500/session",
    specialty: "Online therapy, corporate EAP, mental wellness",
    notes: "Convenient online platform. Many companies use MindNation as their EAP provider — check if yours does.",
  },
  {
    name: "Empath",
    location: "Online (empath.ph)",
    cost: "PHP 1,200 - 2,500/session",
    specialty: "Online psychotherapy with licensed Filipino psychologists",
    notes: "Filipino online therapy platform. Video or chat sessions. Can book specific therapists based on specialty.",
  },
  {
    name: "Better Steps Psychology",
    location: "BGC / Makati / Online",
    cost: "PHP 2,500 - 4,500/session",
    specialty: "CBT, anxiety, depression, relationship issues",
    notes: "Private practice with excellent reputation. Higher cost but highly specialized.",
  },
];

export function MentalHealth() {
  const [showAllMeds, setShowAllMeds] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-teal-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-teal-100 rounded-xl">
            <Brain className="w-6 h-6 text-teal-600" />
          </div>
          <h1 className="text-teal-900">Mental Health Support Guide</h1>
        </div>
        <p className="text-sm text-teal-700 leading-relaxed max-w-2xl">
          You are not alone. This guide covers crisis hotlines, therapy options (free to paid),
          common medications and costs, clinic recommendations, online support resources,
          and self-care tools for when you can't afford professional help.
        </p>
      </div>

      {/* Crisis Banner */}
      <div className="bg-red-600 rounded-xl p-5 sm:p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white/20 rounded-xl shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white mb-2">If you or someone you know is in crisis right now:</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-white/80 text-xs mb-0.5">NCMH Crisis Hotline (24/7, toll-free)</div>
                <div className="text-xl text-white">1553</div>
                <div className="text-xs text-white/60">or 0917-899-8727</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-white/80 text-xs mb-0.5">Hopeline (24/7)</div>
                <div className="text-xl text-white">0917-558-4673</div>
                <div className="text-xs text-white/60">or text 2919 (Globe/TM, toll-free)</div>
              </div>
            </div>
            <p className="text-white/80 text-sm mt-3">
              It's okay to ask for help. These hotlines are free, confidential, and available 24/7.
              You don't have to be "in crisis" to call — they're there for you even if you just need someone to talk to.
            </p>
          </div>
        </div>
      </div>

      {/* All Crisis Hotlines */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Phone className="w-5 h-5 text-red-500" />
          <h2 className="text-gray-900">All Crisis Hotlines & Support Lines</h2>
        </div>
        <div className="space-y-3">
          {crisisHotlines.map((hotline) => (
            <div key={hotline.name} className={`p-4 rounded-xl border ${hotline.highlight ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-100"}`}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                  <h4 className={hotline.highlight ? "text-red-800" : "text-gray-800"}>{hotline.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{hotline.desc}</p>
                </div>
                <div className="shrink-0 space-y-1">
                  <div className={`px-3 py-1.5 rounded-lg text-sm ${hotline.highlight ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"}`}>
                    {hotline.number}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" /> {hotline.hours}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RA 11036 */}
      <div className="bg-teal-50 rounded-xl border border-teal-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-teal-600" />
          <h2 className="text-teal-900">Your Rights Under RA 11036 (Mental Health Act)</h2>
        </div>
        <p className="text-sm text-teal-700 mb-4">
          The Philippine Mental Health Act of 2018 guarantees these rights:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Right to access affordable, adequate, and culturally appropriate mental health services",
            "Right to be free from discrimination based on mental health condition",
            "Right to informed consent before any treatment or medication",
            "Right to confidentiality of mental health records and information",
            "Right to aftercare and rehabilitation after treatment",
            "PhilHealth coverage for mental health services",
            "Employers must provide mental health programs in the workplace",
            "LGUs must establish community-based mental health services",
            "Schools must integrate mental health education in the curriculum",
            "Right to participate in treatment planning and decision-making",
          ].map((right, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-teal-700 bg-white/60 p-2.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" /> {right}
            </div>
          ))}
        </div>
      </div>

      {/* Therapy Options */}
      <div>
        <h2 className="text-gray-900 mb-1">Types of Mental Health Services</h2>
        <p className="text-sm text-gray-500 mb-4">From free government services to private therapy</p>
        <div className="space-y-4">
          {therapyOptions.map((option) => (
            <details key={option.type} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <summary className="p-5 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-teal-500" />
                    <div>
                      <h3 className="text-gray-900">{option.type}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">{option.cost}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-5 pb-5 space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Where</div>
                  <p className="text-sm text-gray-700 mb-3">{option.where}</p>
                  <ul className="space-y-1.5">
                    {option.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3 h-3 text-teal-400 shrink-0 mt-1.5" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-xs text-green-600 mb-1">Pros</div>
                    <p className="text-sm text-gray-600">{option.pros}</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="text-xs text-red-600 mb-1">Cons</div>
                    <p className="text-sm text-gray-600">{option.cons}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Clinic Recommendations */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h2 className="text-gray-900">Recommended Clinics & Services</h2>
        </div>
        <div className="space-y-3">
          {clinicRecommendations.map((clinic) => (
            <div key={clinic.name} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                  <h4 className="text-gray-800">{clinic.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-1 mb-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {clinic.location}</span>
                    <span className="text-xs text-green-600 flex items-center gap-1"><DollarSign className="w-3 h-3" /> {clinic.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1"><span className="text-gray-500">Specialty:</span> {clinic.specialty}</p>
                  <p className="text-xs text-gray-400">{clinic.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Psychiatrist vs Psychologist */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-4">Psychiatrist vs Psychologist — Which Do I Need?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <h4 className="text-blue-800 mb-2">Psychiatrist (MD)</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Medical doctor with specialization in psychiatry</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> CAN prescribe medication (antidepressants, anti-anxiety, etc.)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Focuses on biological/medical aspects of mental health</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Sessions are often shorter (15-30 mins for follow-ups)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Cost: PHP 1,500-5,000/session</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-blue-100">
              <p className="text-xs text-blue-700"><strong>See a psychiatrist if:</strong> You think you need medication, have severe symptoms, have bipolar disorder/schizophrenia, or need a clinical diagnosis for work/legal purposes.</p>
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <h4 className="text-purple-800 mb-2">Psychologist (RPsy)</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> Licensed professional with a master's/doctoral degree in psychology</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> CANNOT prescribe medication</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> Provides talk therapy (CBT, DBT, psychodynamic, etc.)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> Sessions are longer (45-60 mins)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> Cost: PHP 1,000-4,000/session</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-purple-100">
              <p className="text-xs text-purple-700"><strong>See a psychologist if:</strong> You want talk therapy, need help with coping skills, want to process trauma/grief, or prefer longer therapeutic sessions.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Best approach:</strong> Many people benefit from BOTH — a psychiatrist for medication management AND a psychologist for ongoing therapy.
            If budget is a concern, start with a psychiatrist (they can provide both initial assessment and medication if needed).
          </p>
        </div>
      </div>

      {/* Medications */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-600" />
          <h2 className="text-gray-900">Common Mental Health Medications & Costs</h2>
        </div>
        <div className="p-3 bg-amber-50 rounded-lg mb-4">
          <p className="text-sm text-amber-700">
            <strong>Important:</strong> NEVER self-medicate. All psychiatric medications require a doctor's prescription.
            Dosages must be carefully managed by a psychiatrist. This list is for educational/budgeting purposes only.
          </p>
        </div>
        <div className="space-y-4">
          {commonMedications.slice(0, showAllMeds ? undefined : 3).map((category) => (
            <div key={category.category} className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-gray-800 mb-3">{category.category}</h4>
              <div className="space-y-3">
                {category.meds.map((med) => (
                  <div key={med.name} className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="flex-1">
                        <div className="text-sm text-gray-800">{med.name}</div>
                        <p className="text-xs text-gray-500 mt-0.5">{med.use}</p>
                      </div>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs shrink-0">{med.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {commonMedications.length > 3 && (
          <button
            onClick={() => setShowAllMeds(!showAllMeds)}
            className="mt-3 text-sm text-teal-600 hover:text-teal-800 transition-colors"
          >
            {showAllMeds ? "Show less" : `Show all ${commonMedications.length} categories...`}
          </button>
        )}
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="text-blue-800 text-sm mb-1">Where to Buy</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Mercury Drug, Watsons, Rose Pharmacy, Southstar Drug</li>
              <li>• Hospital pharmacies (sometimes cheaper for generics)</li>
              <li>• Generic pharmacies (TGP, Generika, Generics Pharmacy) — MUCH cheaper</li>
              <li>• NCMH pharmacy for patients — subsidized prices</li>
              <li>• Ask your doctor for GENERIC prescriptions to save money</li>
            </ul>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg">
            <h4 className="text-amber-800 text-sm mb-1">Tips for Saving on Medication</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Always ask for the GENERIC version — same formulation, fraction of the cost</li>
              <li>• Buy in bulk (30-90 day supply) for better per-tablet pricing</li>
              <li>• Check if your HMO covers psychiatric medications</li>
              <li>• Generics Pharmacy and TGP have the cheapest prices</li>
              <li>• Some pharmaceutical companies offer patient assistance programs</li>
              <li>• NCMH provides free medication for qualified patients</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Free Resources */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-teal-600" />
          <h2 className="text-gray-900">Free & Low-Cost Resources</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {freeResources.map((resource) => (
            <div key={resource.name} className="p-3 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-2">
                <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-xs shrink-0 mt-0.5">{resource.type}</span>
                <div>
                  <h4 className="text-gray-800 text-sm">{resource.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{resource.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-Care When You're Broke */}
      <div>
        <h2 className="text-gray-900 mb-1">Self-Care & Coping Strategies</h2>
        <p className="text-sm text-gray-500 mb-4">Practical steps you can take right now — even without money</p>
        <div className="space-y-4">
          {selfCareTips.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h4 className="text-gray-800 mb-3">{section.title}</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {section.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" /> {tip}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helping Others */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">How to Help Someone Who's Struggling</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-xl">
            <h4 className="text-green-800 mb-2">Do</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Listen without judgment — sometimes people just need to be heard",
                "Ask directly: 'Are you thinking about hurting yourself?' — this does NOT put the idea in their head",
                "Validate their feelings: 'That sounds really hard. I'm here for you.'",
                "Offer to help them find professional help (research together, accompany them)",
                "Check in regularly — don't just check once and forget",
                "Be patient — recovery is not linear",
                "Learn about their condition so you can understand what they're going through",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-xl">
            <h4 className="text-red-800 mb-2">Don't</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Don't say 'Just think positive' or 'Others have it worse' — this invalidates their pain",
                "Don't minimize: 'It's just stress' or 'You're overreacting'",
                "Don't say 'Just pray about it' as if faith alone fixes clinical conditions",
                "Don't force solutions — ask 'How can I help?' instead of telling them what to do",
                "Don't share their situation with others without their permission",
                "Don't guilt them: 'Think about your family' — this adds burden, not relief",
                "Don't leave them alone if they're expressing suicidal thoughts — stay with them and call 1553",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mental Health at Work */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-gray-900 mb-3">Mental Health at Work</h2>
        <p className="text-sm text-gray-500 mb-4">Under RA 11036 and DOLE Department Order No. 208, employers have responsibilities for workplace mental health.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Employers should develop mental health workplace policies and programs",
            "Mental health conditions should not be a ground for discrimination in hiring/promotion",
            "Mental health leave is NOT explicitly mandated as a separate leave — but you can use SIL or sick leave",
            "Some companies grant 'wellness days' or 'mental health days' as part of their benefits",
            "Your mental health condition is CONFIDENTIAL — employers cannot share it without consent",
            "If your mental health condition is work-related (e.g., burnout, harassment), you may have grounds for a work-related illness claim",
            "DOLE encourages Employee Assistance Programs (EAPs) for companies with 200+ employees",
            "You can request reasonable accommodation for mental health conditions",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <ArrowRight className="w-3 h-3 text-teal-400 shrink-0 mt-1.5" /> {item}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-teal-600" />
          <h2 className="text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "I can't afford therapy. What can I do?",
              a: "Several options: (1) Call crisis hotlines — they're free 24/7. (2) Visit NCMH for free/affordable psychiatric services. (3) Check your LGU health center — RA 11036 mandates community mental health services. (4) Ask your HR about EAP — many companies offer free sessions. (5) PhilHealth now covers psychiatric consultations. (6) Try online peer support groups like Silakbo PH. (7) Use free CBT workbooks and self-help resources online.",
            },
            {
              q: "Will taking antidepressants make me dependent/addicted?",
              a: "SSRIs and SNRIs (the most commonly prescribed antidepressants) are NOT addictive. They don't cause euphoria or cravings. However, you should NOT stop them suddenly — tapering off gradually with your doctor prevents withdrawal effects. Benzodiazepines (Xanax, Rivotril) CAN be habit-forming, which is why they're controlled substances prescribed carefully and usually short-term.",
            },
            {
              q: "How do I know if I need medication or just therapy?",
              a: "A psychiatrist can help you decide. General guide: Mild to moderate symptoms (manageable anxiety, mild depression) — therapy alone may be enough. Moderate to severe symptoms (can't function at work/school, persistent dark thoughts, panic attacks) — medication + therapy is often the best combination. Severe symptoms (suicidal ideation, psychosis) — medication is usually necessary. Your psychiatrist will assess and recommend.",
            },
            {
              q: "Is my therapy session confidential?",
              a: "Yes. Licensed mental health professionals are bound by confidentiality under RA 11036 and professional ethics. They CANNOT share what you discuss without your consent. Exceptions: (1) If you're an immediate danger to yourself or others, (2) If there's suspected child abuse, (3) If ordered by a court. Your employer, family, or anyone else cannot access your therapy records without your written consent.",
            },
            {
              q: "How long does therapy take to 'work'?",
              a: "It varies. Some people feel improvement in 4-6 sessions. CBT (Cognitive Behavioral Therapy) is typically 12-20 sessions for anxiety/depression. Medication takes 2-6 weeks to show full effects (don't give up too early!). Long-term issues (trauma, personality patterns) may take months to years. There's no fixed timeline — what matters is that you've started. Progress isn't always linear.",
            },
            {
              q: "Can I get mental health services through PhilHealth?",
              a: "Yes. Under RA 11036, PhilHealth covers mental health services including: outpatient psychiatric consultations, inpatient psychiatric care, some medications, and psychosocial activities. Coverage amounts vary — check with your accredited hospital or clinic. Your PhilHealth contribution entitles you to these benefits even without a separate HMO.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-gray-800 mb-2">{item.q}</h4>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white text-center">
        <h2 className="text-white mb-2">You matter. Your mental health matters.</h2>
        <p className="text-teal-100 text-sm max-w-lg mx-auto mb-4">
          Seeking help is not weakness — it's one of the bravest things you can do.
          Whether you call a hotline, see a doctor, or just talk to a friend — every step counts.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-xs text-teal-100">Crisis Hotline</div>
            <div className="text-white">1553</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-xs text-teal-100">Hopeline</div>
            <div className="text-white">0917-558-4673</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-xs text-teal-100">Text (Globe/TM)</div>
            <div className="text-white">2919</div>
          </div>
        </div>
      </div>
    </div>
  );
}
