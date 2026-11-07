# 4Real — Brand Guidelines v1.0

Documento vivo: quando cambiano claim, logo o materiali, si aggiorna qui e le applicazioni
(sito, social, stampa) seguono.

---

## 1. Identità

4Real è una lista studentesca: quattro candidati, un impegno di concretezza, trasparenza e
rappresentanza reale. Il brand deve sembrare **serio ma non istituzionale-burocratico**:
dark, geometrico, diretto. Mood: "verbale elettorale incontrano design tech".

Valori in ordine di priorità: concretezza → trasparenza → rappresentanza.

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

## 9. Logo — IN ATTESA DEL FILE DI LEO

Il logo sarà fornito da Leo e implementato ovunque (sito, social, stampa). Fino ad allora
vale il wordmark testuale provvisorio: "4" Bianco Puro + "Real" Blu Elettrico, Space Grotesk 700.

Quando arriva il file, requisiti minimi da verificare:
- SVG vettoriale (o PDF vettoriale), non bitmap
- Versione a colori su dark + versione monocromatica bianca + monocromatica nera
- Versione compatta (icona) leggibile a 32px
- Clear space = altezza della "4" (o del segno dominante) su tutti i lati
- Size minimo: 24px digitale, 10mm stampa

## 10. Applicazioni

### Social — Instagram + TikTok

| Formato         | Dimensioni    | Note                                        |
|-----------------|---------------|---------------------------------------------|
| Post IG         | 1080×1080     | Template `templates/ig-post-1080x1080.svg`  |
| Story IG / Reel / TikTok | 1080×1920 | Template `templates/story-1080x1920.svg`; safe zone ±250px verticali per UI |

Layout tipo: etichetta mono in alto a sinistra · titolo display centro-sinistra ·
righe diagonali in basso a destra · handle `@4real` in basso. Fondo Nero Reale, mai chiaro.

### Stampa

- **Volantini A5** (148×210mm) + abbondanza 3mm, 300dpi: fronte claim di campagna + X,
  retro punti programma in bullet + QR al sito. Template `templates/volantino-a5.svg`.
  Per fotocopie in B/N: versione monocromatica nera su bianco.
- **Sticker**: cerchio 60mm o quadrato 55mm raggio 8mm, fustella con 2mm di margine;
  template `templates/sticker-60mm.svg`. Versione full-color e versione 1 colore Ghiaccio.
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
  templates/
    ig-post-1080x1080.svg
    story-1080x1920.svg
    volantino-a5.svg
    sticker-60mm.svg
  (qui arriverà il logo di Leo)
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
