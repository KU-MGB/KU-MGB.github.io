export type LocaleCode = "en" | "da";

export const supportedLocales: LocaleCode[] = ["en", "da"];

export const languageNames: Record<LocaleCode, string> = {
  en: "English",
  da: "Dansk",
};

export const translations: Record<LocaleCode, Record<string, any>> = {
  en: {
    nav: {
      research: "Research",
      publications: "Publications",
      people: "People",
      projects: "Projects",
      news: "News",
      joinUs: "Join Us",
      search: "Search",
      language: "Language",
    },
    hero: {
      badge: "Pioneering Dehalogenase Engineering",
      titlePrefix: "Breaking the",
      titleHighlight: "Strongest Bonds",
      titleSuffix: "in Nature.",
      subtitle: "We discover and engineer microbial enzymes that mineralize PFAS and other recalcitrant pollutants at the molecular scale.",
      ctaResearch: "Explore PFAS Science",
      ctaJoin: "Join the Mission",
      stats: [
        { value: "450+", label: "PFAS enzyme candidates" },
        { value: "3.2M", label: "Sequences mined across microbiomes" },
        { value: "120+", label: "Research outputs and collaborations" }
      ],
    },
    mgb: {
      sectionLabel: "MGB Lab",
      title: "Microbial Genomics & Biodegradation for PFAS Impact",
      intro: "MGB Lab bridges large-scale sequence mining, structural biology, and AI to convert long-lived pollutants into safer molecules. We pair experimental validation with computational design to accelerate environmental remediation.",
      whyTitle: "Why MGB?",
      whyItems: [
        { strong: "Systems-first research:", text: "We mine microbial communities, not isolated targets, to discover resilient biodegradation pathways." },
        { strong: "AI-guided design:", text: "Custom models prioritize enzymes with the highest likelihood of breaking PFAS bonds in real conditions." },
        { strong: "Field-ready translation:", text: "We validate candidates through structural, biochemical, and environmental datasets." }
      ],
      focusTitle: "Our focus areas",
      focusItems: [
        { strong: "PFAS defluorination", text: "Deconstructing the strongest carbon-fluorine bonds using microbial enzymes and protein engineering." },
        { strong: "Microbial genomics", text: "Mining uncultivated genomes to reveal hidden dehalogenase scaffolds and biodegradation networks." },
        { strong: "Environmental biotechnology", text: "Moving from candidate enzyme to remediation strategy for water and soil systems." }
      ]
    },
    workflow: {
      sectionLabel: "How MGB Works",
      title: "From genome discovery to pollutant remediation",
      intro: "Our research pipeline combines environmental sequence mining, AI-powered enzyme prediction, structural validation, and field-level testing to deliver PFAS biodegradation solutions that matter.",
      steps: [
        { title: "Discovery", description: "Capture unseen microbial diversity from soil, water, and waste ecosystems to reveal hidden dehalogenase genes." },
        { title: "Design", description: "Use computational models to identify enzyme active sites and prioritize candidates for PFAS bond disruption." },
        { title: "Validation", description: "Verify predicted enzymes through structural simulation, biochemistry, and degradation assays." },
        { title: "Translation", description: "Scale successful candidates into practical strategies for environmental biotechnology and remediation." }
      ]
    },
    pipeline: {
      sectionLabel: "The Reaction Pipeline",
      title: "Molecular Dehalogenation",
      subtitle: "Scroll to see how our engineered enzymes find, bind, and break the carbon-fluorine bond in environmental pollutants.",
    },
    people: {
      title: "Our Team",
      description: "A global group of scientists dedicated to solving the C-F bond challenge through interdisciplinary innovation.",
      categories: {
        faculty: "Faculty / Group Leaders",
        postdocs: "Postdoctoral Researchers",
        phd: "PhD Researchers",
        masters: "MSc Students",
        bachelors: "BSc Students",
        alumni: "Alumni / Former Members"
      },
      contact: {
        email: "Email",
        github: "GitHub",
        website: "Website",
        orcid: "ORCID"
      }
    },
    research: {
      title: "Research Themes",
      intro: "We integrate microbial ecology, genomics, and computational biology to solve high-stakes environmental challenges, specifically focusing on the mineralization of recalcitrant fluorinated compounds.",
      cards: {
        discovery: { title: "Discovery", text: "Capturing the genetic diversity of uncultivated microbes to reveal hidden biodegradation potential." },
        prediction: { title: "Prediction", text: "Applying AI and structural biology to prioritize enzymes that can break PFAS bonds." },
        impact: { title: "Impact", text: "Translating computational leads into biochemical, environmental, and remediation strategies." }
      }
    }
  },
  da: {
    nav: {
      research: "Forskning",
      publications: "Publikationer",
      people: "Team",
      projects: "Projekter",
      news: "Nyheder",
      joinUs: "Bliv en del",
      search: "Søg",
      language: "Sprog",
    },
    hero: {
      badge: "Banebrydende dehalogenase-ingeniørkunst",
      titlePrefix: "Bryder de",
      titleHighlight: "stærkeste bindinger",
      titleSuffix: "i naturen.",
      subtitle: "Vi opdager og konstruerer mikrobielle enzymer, der mineraliserer PFAS og andre recalcitrante forurenende stoffer på molekylært niveau.",
      ctaResearch: "Udforsk PFAS-forskning",
      ctaJoin: "Bliv en del af missionen",
      stats: [
        { value: "450+", label: "PFAS enzymkandidater" },
        { value: "3.2M", label: "Sekvenser udvundet fra mikrobiomer" },
        { value: "120+", label: "Forskning og samarbejde" }
      ],
    },
    mgb: {
      sectionLabel: "MGB Lab",
      title: "Mikrobiel Genomik og Biodegradering for PFAS-påvirkning",
      intro: "MGB Lab kobler store sekvensanalyser, strukturel biologi og AI for at omdanne langlevende forurenende stoffer til sikrere molekyler. Vi kombinerer eksperimentel validering med computational design for at fremskynde miljømæssig oprensning.",
      whyTitle: "Hvorfor MGB?",
      whyItems: [
        { strong: "System-orienteret forskning:", text: "Vi udvinder mikrobielle fællesskaber, ikke isolerede mål, for at finde robuste biodegraderingsveje." },
        { strong: "AI-styret design:", text: "Skræddersyede modeller prioriterer enzymer med størst sandsynlighed for at bryde PFAS-bindinger i virkelige forhold." },
        { strong: "Feltklar oversættelse:", text: "Vi validerer kandidater med strukturelle, biokemiske og miljømæssige datasæt." }
      ],
      focusTitle: "Vores fokusområder",
      focusItems: [
        { strong: "PFAS defluorinering", text: "Nedbrydning af de stærkeste carbon-fluor bindinger ved hjælp af mikrobielle enzymer og protein engineering." },
        { strong: "Mikrobiel genomik", text: "Udvinding af ukultiverede genomer for at afsløre skjulte dehalogenase-strukturer og biodegraderingsnetværk." },
        { strong: "Miljøbioteknologi", text: "Flytter fra kandidat enzyme til oprensningsstrategier for vand- og jordsystemer." }
      ]
    },
    workflow: {
      sectionLabel: "Hvordan MGB arbejder",
      title: "Fra genomopdagelse til forureningsoprensning",
      intro: "Vores forskningspipeline kombinerer miljømæssig sekvensudvinding, AI-drevet enzymforudsigelse, strukturel validering og feltbaseret test for at levere PFAS biodegradering, der betyder noget.",
      steps: [
        { title: "Opdagelse", description: "Indfangning af uopdaget mikrobiel diversitet fra jord-, vand- og affaldsmiljøer for at afsløre skjulte dehalogenase-gener." },
        { title: "Design", description: "Brug af computational modeller til at identificere enzymatiske aktive steder og prioritere kandidater til PFAS-bindingens brud." },
        { title: "Validering", description: "Bekræft forudsagte enzymer gennem strukturel simulering, biokemi og nedbrydningsassays." },
        { title: "Oversættelse", description: "Skaler succesfulde kandidater til praktiske strategier for miljøbioteknologi og oprensning." }
      ]
    },
    pipeline: {
      sectionLabel: "Reaktionspipelinjen",
      title: "Molekylær dehalogenisering",
      subtitle: "Scroll for at se, hvordan vores konstruerede enzymer finder, binder og bryder carbon-fluor bindingen i miljømæssige forurenende stoffer.",
    },
    people: {
      title: "Vores team",
      description: "En global gruppe forskere dedikeret til at løse C-F bindingsudfordringen gennem tværfaglig innovation.",
      categories: {
        faculty: "Facultet / Gruppeledere",
        postdocs: "Postdoktorale forskere",
        phd: "Ph.d. forskere",
        masters: "MSc-studerende",
        bachelors: "BSc-studerende",
        alumni: "Alumni / Tidligere medlemmer"
      },
      contact: {
        email: "Email",
        github: "GitHub",
        website: "Website",
        orcid: "ORCID"
      }
    },
    research: {
      title: "Forskningstemaer",
      intro: "Vi integrerer mikrobiologi, genomik og computational biologi for at løse miljømæssige udfordringer med høj prioritet, med særligt fokus på mineralisering af recalcitrante fluorholdige forbindelser.",
      cards: {
        discovery: { title: "Opdagelse", text: "Indfangning af den genetiske mangfoldighed i ukultiverede mikrober for at afsløre skjult biodegraderingspotentiale." },
        prediction: { title: "Forudsigelse", text: "Anvendelse af AI og strukturel biologi til at prioritere enzymer, der kan bryde PFAS-bindinger." },
        impact: { title: "Indvirkning", text: "Oversættelse af computational fører til biokemiske, miljømæssige og oprensningsmæssige strategier." }
      }
    }
  }
};

export function getTranslation(locale: string, key: string): unknown {
  const localeData = translations[locale as LocaleCode] || translations.en;
  const path = key.split(".");
  let result: any = localeData;

  for (const segment of path) {
    if (result && typeof result === "object") {
      result = result[segment];
    } else {
      return key;
    }
  }

  return result !== undefined ? result : key;
}
