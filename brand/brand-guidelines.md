# 4Real — Brand Guidelines v1.0

Documento vivo: quando cambiano claim, logo o materiali, si aggiorna qui e le applicazioni
(sito, social, stampa) seguono.

---

## 1. Identità

4Real è una lista studentesca: quattro candidati, un impegno di concretezza, trasparenza e
rappresentanza reale. Il brand deve sembrare **serio ma non istituzionale-burocratico**:
dark, geometrico, diretto. Mood: "verbale elettorale incontrano design tech".

Valori in ordine di priorità: concretezza → trasparenza → rappresentanza.

**Dati ufficiali (circolare Prot. 0012355 del 09/11/2026):** lista **n. II**, elezioni rappresentanti
degli studenti nel **Consiglio di Istituto**, a.s. **2026/2027** — Liceo Statale "L. Rocci",
Fara in Sabina (RI). Candidati, motto e liste avversarie in §13.

## 2. Palette

| Ruolo            | Nome          | Hex       | Uso                                        | Quota |
|------------------|---------------|-----------|--------------------------------------------|-------|
| Background       | Nero Reale    | `#04070F` | Sfondi sito, poster, social                | ~60%  |
| Surface / glass  | —             | bianco/blu al 6–14% di alpha | Pannelli, card, navbar       | ~25%  |
| Primary / CTA    | Blu Elettrico | `#3B82F6` | CTA, glow, X di voto, accenti forti        | ~10%  |
| Secondary / glow | Azzurro Vivo  | `#5B9CFF` | Gradienti titoli, glow secondari, icone    | ~4%   |
| Highlight        | Ghiaccio      | `#A5D8FF` | Badge, etichette, dettagli luminosi        | ~1%   |
| Testi / glifi    | Bianco Puro   | `#FFFFFF` | Titoli; body in grigio ardesia `#9FB0C9`   | testi |

Regole:
- Il Blu Elettrico non va mai su fondo chiaro senza bordo: è nato per il dark.
- Ghiaccio è un sale: pochissimo, solo dove l'occhio deve cadere.
- Versioni monocromatiche per stampa economica e merch: tutto Bianco Puro o tutto
  Nero Reale su fondo chiaro (vedi §10).
- Vietato introdurre colori fuori palette (niente rosso/verde/arancio "per una volta").

## 3. Tipografia

| Ruolo              | Font                | Pesi     | Uso                                            |
|--------------------|---------------------|----------|------------------------------------------------|
| Display / titoli   | **Space Grotesk**   | 500, 700 | H1/H2/H3, parole grosse su poster e social     |
| Body               | Plus Jakarta Sans   | 400–800  | Paragrafi, UI, bottoni                         |
| Etichette / mono   | **Space Mono**      | 400, 700 | Eyebrow, date, tag, micro-copy, header scheda  |

- Space Grotesk e Space Mono sono famiglie sorelle: il mono è la "voce da verbale" del brand.
- Etichette mono sempre **MAIUSCOLE con tracking largo** (0.2–0.35em).
- Titoli display: tracking stretto (-0.02em), mai tutto maiuscolo tranne parole singole d'impatto.
- Scala indicativa: display 64–96px · H2 40–56px · H3 20–24px · body 16–18px · label 10–12px.
- Non usare Space Grotesk per paragrafi lunghi; non usare il mono per frasi intere.

## 4. Tono di voce

**Diretto e concreto.** Frasi brevi, verbi all'imperativo, numeri invece di aggettivi.

- Sì: "Metti una X. Al resto ci pensiamo noi." / "Report mensile, pubblico." / "Wi-Fi potenziato entro dicembre."
- No: "Cercheremo di impegnarci per migliorare possibilmente la connettività."
- Niente esclamativi multipli, niente emoji nei testi istituzionali (ok con parsimonia nei social leggeri).
- Prima persona plurale per le promesse ("ci pensiamo noi"), seconda persona per le chiamate all'azione ("metti", "vieni", "scrivici").

### Sistema claim (modulare — sostituibile in futuro)

| Tipo                  | Claim                                              | Dove                                   |
|-----------------------|----------------------------------------------------|----------------------------------------|
| Payoff istituzionale  | "Concretezza, trasparenza, rappresentanza reale."  | Sito, documenti, intestazioni          |
| Motto ufficiale (circolare) | "Per una scuola che ci rappresenta veramente." | Hero sito, documenti, lista n. II |
| Claim di campagna     | "Metti una X. Al resto ci pensiamo noi."           | Social, poster, sticker, scheda        |

Se un claim cambia, si aggiorna questa tabella + `src/data/content.ts` + i template.

## 5. Elementi grafici di supporto

1. **Righe diagonali 45°** — sottili (1px), blu/bianco al 5–8% di alpha: fondo di riquadri
   "ufficiali" (come il riquadro di voto della scheda). Mai a piena opacità.
2. **Tagli diagonali** — uno slash netto che attraversa blocchi o immagini: dinamismo,
   usato al massimo 1 per composizione.
3. **Motivo X** — la X da voto è RISERVATA ai momenti di voto (scheda, CTA elettorali,
   sticker "vota"). Non decorazione generica.
4. **Glass** — pannelli `backdrop-blur` con bordo 1px `rgba(148,180,255,0.14)`, raggio 16px.
5. **Glow** — solo su elementi interattivi o CTA (`box-shadow` blu al 25–35%): mai sul testo body.

## 6. Immagini e foto

**Oggi: zero foto.** Il brand vive di tipografia, grafica e 3D (urna, particelle).

Quando arriveranno foto vere (ritratti candidati, eventi), regola unica:
**duotone** — base bianco e nero ad alto contrasto + Blu Elettrico sulle luci/mezzitoni.
Niente filtri colorati, niente cornici, niente bordi arrotondati sulle foto: taglio diagonale
o rettangolo pieno.

## 7. Motion identity

**Base fluida + accenti punch.**

- UI e scroll: easing `ease-out`, durate 300–600ms, stagger 60–80ms tra elementi fratelli.
- Accenti punch (120–180ms, snap): la X che si traccia, il badge sticker che timbra,
  il flash della casella di voto.
- Loop narrativi lenti: urna 3D 5.5s (scheda che cala e si infila).
- Molle elastiche SOLO per il badge sticker; vietate altrove.
- Riduci tutto con `prefers-reduced-motion` (da implementare se non presente).

## 8. Iconografia

Lucide, stroke **1.8–2**, cap round, size 16–24px. Colore: Ghiaccio o Azzurro Vivo su dark,
mai Blu Elettrico pieno per icone piccole (perde contrasto). Un'icona per concetto, mai coppie.

## 9. Logo — monogramma ufficiale

Logo adottato il **09/11/2026**: il monogramma vettoriale disegnato da Leo (sorgente
`IMG_9788.svg`, 512×512, cerchio + segno interno). La direzione precedente "badge L4R"
è **superata**.

Variante colore scelta da Leo: **6 — Blu Profondo `#1D4ED8` uniforme**, usata su tutti gli
sfondi, compresi quelli scuri del sito. Nei contesti dark il componente applica un glow
morbido (`drop-shadow(0 0 16px rgba(59,130,246,0.55))`) per recuperare leggibilità: è un
effetto solo schermo, mai in stampa.

### Asset

| File | Uso |
|------|-----|
| `brand/logo-4real.svg` | Master vettoriale, viewBox ritagliato sul tracciato (`72 72 360 360`) |
| `public/logo.svg` | Stessa forma, favicon del sito |
| `src/components/Logo.tsx` | Componente React: `fill="currentColor"`, colore via classe Tailwind, prop `glow` |

### Regole d'uso

- Colore sul sito: `text-primary-deep`. Se su fondo scuro dovesse risultare poco leggibile,
  si rivaluta con Leo una variante più chiara (Ghiaccio `#A5D8FF` o duotone anello Blu
  Elettrico + segno Ghiaccio).
- Clear space: un quarto del diametro del cerchio esterno, su tutti i lati.
- Size minimo: 24px digitale, 10mm stampa.
- Versioni monocromatiche per stampa/merch (bianca su capo scuro, nera su chiaro): da
  derivare dal master cambiando solo il `fill`, quando servono.
- Mai ruotare, deformare, ricolorare fuori palette o aggiungere effetti.

### Applicazioni sul sito

Navbar (mark + wordmark), Hero (mark sopra il badge "Lista n. 2"), Footer (mark sopra il
wordmark), favicon. La pagina di gate resta volutamente neutra: nessun elemento
identificativo è visibile a chi apre il link prima dello sblocco post 12/11.

## 10. Applicazioni

### Social — Instagram + TikTok

| Formato         | Dimensioni    | Note                                        |
|-----------------|---------------|---------------------------------------------|
| Post IG         | 1080×1080     | Template `templates/ig-post-1080x1080.svg`  |
| Story IG / Reel / TikTok | 1080×1920 | Template `templates/story-1080x1920.svg`; safe zone ±250px verticali per UI |

Layout tipo: etichetta mono in alto a sinistra · titolo display centro-sinistra ·
righe diagonali in basso a destra · handle `@4real` in basso. Fondo Nero Reale, mai chiaro.

### Stampa

- **Volantini A5** (148×210mm) + abbondanza 3mm, 300dpi, fronte/retro:
  - fronte `templates/volantino-a5-fronte.svg` — logo (versione Ghiaccio), nome lista,
    motto ufficiale, casella con X e sito;
  - retro `templates/volantino-a5-retro.svg` — i sette temi del programma numerati,
    uno per riga, con QR reale puntato a lista4real.online già incorporato.
  Per fotocopie in B/N: versione monocromatica nera su bianco (commento in fondo ai file).
- **Sticker tondi 60mm**, fustella con 2mm di margine:
  - `templates/sticker-60mm-logo.svg` — solo logo Ghiaccio su fondo Nero Reale;
  - `templates/sticker-60mm-vota.svg` — fondo Blu Elettrico, casella con X, "VOTA LISTA 2",
    logo bianco: è la versione d'urto per il giorno del voto.
- Logo in stampa: mai la versione Blu Profondo su fondo scuro (troppo poco contrasto);
  su scuro si usa Ghiaccio `#A5D8FF`, su blu o chiaro si usa bianco.
- Regola generale stampa: niente glow/blur (sono effetti schermo); sostituirli con
  retini o righe diagonali.

### Merch — magliette e felpe

- Capo scuro (nero/navy): stampa 1 colore Bianco Puro o Ghiaccio, petto max 28×28cm
  o manica 8cm. Niente versioni a colori pieni sul tessuto.
- Capo chiaro: stampa 1 colore Nero Reale.
- Logo + claim di campagna; mai il payoff istituzionale sul merch (tono sbagliato).

### Sito

Token in `tailwind.config.ts`; font caricati via Google Fonts in `index.html`.
Classi: `font-display` (Space Grotesk) per i titoli, `font-mono` (Space Mono) per etichette,
default sans (Jakarta) per il body.

## 11. File e export

```
brand/
  brand-guidelines.md      ← questo documento
  logo-4real.svg           ← master vettoriale del logo (Blu Profondo #1D4ED8)
  templates/
    ig-post-1080x1080.svg
    story-1080x1920.svg
    volantino-a5-fronte.svg
    volantino-a5-retro.svg
    sticker-60mm-logo.svg
    sticker-60mm-vota.svg
```

Export SVG → PNG: `inkscape file.svg --export-type=png --export-width=2160` oppure
convertitore online. Per la stampa consegnare sempre anche PDF vettoriale.

## 12. Do & Don't

- ✅ Fondo scuro, tanto respiro, un accento luminoso per composizione
- ✅ Frasi corte, numeri, verbi all'imperativo
- ✅ X solo nei momenti di voto
- ❌ Colori fuori palette, gradienti arcobaleno, glow sul body text
- ❌ Foto a colori pieni (finché non esiste la regola duotone applicata)
- ❌ Più di un elemento diagonale/taglio per composizione
- ❌ Logo stiracchiato, ricolorato a mano o con effetti aggiunti

## 13. Dati elettorali ufficiali e avversari

Fonte: circolare **Prot. 0012355 del 09/11/2026** — Liceo Statale "L. Rocci", Fara in Sabina (RI).
Elezioni rappresentanti degli studenti nel **Consiglio di Istituto**, a.s. **2026/2027**.

### La nostra lista — N. II

Motto ufficiale: **"PER UNA SCUOLA CHE CI RAPPRESENTA VERAMENTE"** (4 REAL).

Candidati in ordine ufficiale, con classe:

1. Riello Leonardo — 4CS
2. Fantozzi Federica — 4AS
3. Millesimi Elena — 4CS
4. Ricci Simone — 4BL

### Avversari (liste concorrenti) — USO INTERNO

> Sezione di lavoro per strategia e confronti. **Non pubblicare questi nominativi sul sito**
> e non usarli in materiali pubblici: sono dati della circolare, non contenuti di campagna.

**Lista N. I — "NEW GENESIS"**

1. Gutu Ivan — 4AS
2. Fronzetti Caterina — 4BS
3. Delle Fave Alessia — 4BS
4. Greco Giulio — 4BS

**Lista N. III — "TUTTI PROTAGONISTI NON SOLO STUDENTI"**

1. Gironi Ludovica — 4CS
2. Coccia Anna — 4CS
3. De Angelis Christian — 5AS
4. Luci Daniele — 5AS

### Vincolo di propaganda

Nessuna propaganda prima della presentazione delle liste all'assemblea di istituto di
**giovedì 12 novembre 2026**, a pena di esclusione. Fino ad allora il sito resta protetto
dal gate membri.
