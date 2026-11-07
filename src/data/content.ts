export interface Candidate {
  name: string
  role: string
  tag: string
  initials: string
}

export const candidates: Candidate[] = [
  {
    name: 'Leonardo Riello',
    role: 'Coordinatore · Voce degli studenti',
    tag: '#Concretezza',
    initials: 'LR',
  },
  {
    name: 'Federica Fantozzi',
    role: 'Eventi & Vita studentesca',
    tag: '#Energia',
    initials: 'FF',
  },
  {
    name: 'Elena Millesimi',
    role: 'Diritto allo studio & Servizi',
    tag: '#Trasparenza',
    initials: 'EM',
  },
  {
    name: 'Simone Ricci',
    role: 'Strutture & Innovazione digitale',
    tag: '#Futuro',
    initials: 'SR',
  },
]

export interface ProgramItem {
  icon: 'graduation-cap' | 'calendar-days' | 'wifi' | 'heart-handshake'
  title: string
  description: string
  points: string[]
  span: string
}

export const programItems: ProgramItem[] = [
  {
    icon: 'graduation-cap',
    title: 'Didattica che funziona',
    description:
      'Lezioni più utili, orari sensati e un dialogo costante con i docenti. La qualità dello studio viene prima di tutto.',
    points: ['Rappresentanza reale nei consigli', 'Feedback anonimo sui corsi', 'Orari a misura di studente'],
    span: 'md:col-span-2',
  },
  {
    icon: 'calendar-days',
    title: 'Eventi & Community',
    description:
      'Vita studentesca viva tutto l\'anno: tornei, serate, workshop e iniziative culturali organizzate con voi.',
    points: ['Calendario eventi partecipato', 'Tornei sportivi d\'istituto'],
    span: 'md:col-span-1',
  },
  {
    icon: 'wifi',
    title: 'Spazi & Digitale',
    description:
      'Aule studio attrezzate, Wi-Fi stabile e strumenti digitali moderni per una scuola al passo coi tempi.',
    points: ['Wi-Fi potenziato', 'Aule studio aperte', 'App studenti unica'],
    span: 'md:col-span-1',
  },
  {
    icon: 'heart-handshake',
    title: 'Trasparenza & Ascolto',
    description:
      'Ogni decisione presa vi riguarda: rendicontazione pubblica, bilancio chiaro e uno sportello sempre aperto per le vostre idee.',
    points: ['Bilancio pubblico', 'Sportello idee aperto', 'Report mensile'],
    span: 'md:col-span-2',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Chi è 4Real?',
    answer:
      'Siamo quattro studenti candidati per rappresentarvi davvero: niente promesse vaghe, solo impegni concreti e verificabili durante tutto il mandato.',
  },
  {
    question: 'Come posso proporre un\'idea?',
    answer:
      'Scrivici sui nostri canali social o passa dallo sportello idee: ogni proposta viene discussa in riunione e riceve una risposta pubblica entro due settimane.',
  },
  {
    question: 'Cosa succede dopo le elezioni?',
    answer:
      'Pubblichiamo un report mensile con lo stato di avanzamento di ogni punto del programma. Se qualcosa non funziona, lo diciamo apertamente e lo sistemiamo.',
  },
  {
    question: 'Posso unirmi al gruppo di lavoro?',
    answer:
      'Assolutamente sì. Cerchiamo sempre persone motivate per eventi, comunicazione e progetti digitali: candidati e verrai coinvoltə nelle prossime attività.',
  },
]

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'La Squadra', href: '#squadra' },
  { label: 'Il Programma', href: '#programma' },
  { label: 'FAQ', href: '#faq' },
]
