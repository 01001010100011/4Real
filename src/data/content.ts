export interface Candidate {
  name: string
  role: string
  tag: string
  initials: string
  classe: string
}

export const election = {
  body: 'Consiglio di Istituto',
  year: '2026/2027',
  listNumber: 2,
  motto: 'Per una scuola che ci rappresenta veramente',
}

export const candidates: Candidate[] = [
  {
    name: 'Leonardo Riello',
    role: 'Coordinatore · Voce degli studenti',
    tag: '#Concretezza',
    initials: 'LR',
    classe: '4CS',
  },
  {
    name: 'Federica Fantozzi',
    role: 'Eventi & Vita studentesca',
    tag: '#Energia',
    initials: 'FF',
    classe: '4AS',
  },
  {
    name: 'Elena Millesimi',
    role: 'Diritto allo studio & Servizi',
    tag: '#Trasparenza',
    initials: 'EM',
    classe: '4CS',
  },
  {
    name: 'Simone Ricci',
    role: 'Strutture & Innovazione digitale',
    tag: '#Futuro',
    initials: 'SR',
    classe: '4BL',
  },
]

export interface ProgramItem {
  icon: 'graduation-cap' | 'calendar-days' | 'wifi' | 'heart-handshake'
  title: string
  description: string
  points: string[]
  span: string
  href?: string
  linkLabel?: string
}

export const programItems: ProgramItem[] = [
  {
    icon: 'wifi',
    title: 'Digitalizzazione reale',
    description:
      'Una scuola più digitale e accessibile a tutti: stessi strumenti e stesse opportunità per ogni studente. Non promesse: tre strumenti creati da studenti, già online.',
    points: [
      'Informazione studentesca indipendente',
      'Appunti e materiali condivisi online',
      'E altri siti nati da progetti scolastici',
    ],
    span: 'md:col-span-3',
    href: '#/digitale',
    linkLabel: 'Apri: i progetti già online',
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
    icon: 'heart-handshake',
    title: 'Trasparenza & Ascolto',
    description:
      'Ogni decisione presa vi riguarda: rendicontazione pubblica, bilancio chiaro e uno sportello sempre aperto per le vostre idee.',
    points: [
      'Bilancio pubblico',
      'Sportello idee aperto',
      'Report mensile',
      'Feedback anonimo sui corsi',
      'Rappresentanza reale nei consigli',
      'Orari a misura di studente',
    ],
    span: 'md:col-span-2',
  },
]

export interface DigitalProject {
  name: string
  domain: string
  url: string
  tag: string
  description: string
}

export const digitalProjects: DigitalProject[] = [
  {
    name: 'Scola-Mia',
    domain: 'scola-mia.com',
    url: 'https://scola-mia.com',
    tag: 'Giornale studentesco',
    description:
      'Il giornale indipendente del Liceo Rocci, scritto e gestito dagli studenti: articoli in evidenza, archivio, countdown alle scadenze e agenda scolastica, con un canale WhatsApp per non perdere gli aggiornamenti.',
  },
  {
    name: 'Rocci Notes',
    domain: 'roccinotes.com',
    url: 'https://roccinotes.com',
    tag: 'Scambio appunti',
    description:
      'La piattaforma di scambio appunti tra studenti del Rocci: condividi i tuoi materiali e trova quelli delle tue classi in un posto solo, invece di inseguirli nei gruppi chat.',
  },
  {
    name: 'Progetto CoSa',
    domain: 'progettocosa.it',
    url: 'https://progettocosa.it',
    tag: 'Benessere & divulgazione',
    description:
      'Progetto nato in ambito scolastico per avvicinare i giovani a psicologia, benessere mentale e crescita personale: video e contenuti divulgativi con un linguaggio alla portata di tutti.',
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
