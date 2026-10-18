---
name: Intention Massage Academy
description: Advanced clinical CPD set as a carbonless clinical assessment form, filled in by ballpoint.
colors:
  paper: "#ffffff"
  form-ink: "#0e5a43"
  ink-soft: "#3f7a66"
  ink-soft-canary: "#24573f"
  ink-soft-pink: "#1f4d3c"
  rule: "rgba(14, 90, 67, .38)"
  canary: "#f5dc4a"
  canary-ink: "#0b4a37"
  pink: "#f5bac6"
  pink-ink: "#0a4434"
  red-ballpoint: "#d42a1f"
  red-deep: "#a81d14"
  blue-ballpoint: "#1d2f9e"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(54px, 6vw, 80px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(38px, 5.4vw, 76px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 66"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 70"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "12px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 78"
  nav:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 85"
  note:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
  chart-label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    fontVariation: "'wdth' 78"
  button:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 85"
  pen-entry:
    fontFamily: "Nanum Pen, Bradley Hand, cursive"
    fontSize: "31px"
    fontWeight: 400
    lineHeight: 1.05
  pen-statement:
    fontFamily: "Nanum Pen, Bradley Hand, cursive"
    fontSize: "clamp(38px, 5vw, 68px)"
    fontWeight: 400
    lineHeight: 1
rounded:
  pen-button: "3px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  sheet-block: "clamp(40px, 6vw, 88px)"
  column-gap: "clamp(28px, 5vw, 80px)"
  box-inset: "18px"
  field-top: "9px"
  field-bottom: "7px"
components:
  button-pen:
    backgroundColor: "{colors.red-ballpoint}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pen-button}"
    padding: "16px 24px 16px 20px"
  button-pen-hover:
    backgroundColor: "{colors.red-deep}"
  button-pen-large:
    backgroundColor: "{colors.red-ballpoint}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pen-button}"
    padding: "20px 30px 20px 24px"
  field-label:
    textColor: "{colors.form-ink}"
    typography: "{typography.label}"
  field-entry:
    textColor: "{colors.blue-ballpoint}"
    typography: "{typography.pen-entry}"
    padding: "9px 0 7px"
  box-header:
    backgroundColor: "{colors.form-ink}"
    textColor: "{colors.paper}"
    padding: "8px 18px"
  section-letter:
    textColor: "{colors.form-ink}"
    size: "1.05em"
  register-box:
    textColor: "{colors.canary-ink}"
    size: "28px"
  register-box-selected:
    backgroundColor: "{colors.red-ballpoint}"
    textColor: "{colors.paper}"
  footer:
    backgroundColor: "{colors.form-ink}"
    textColor: "{colors.paper}"
---

# Design System: Intention Massage Academy

## Overview

**Creative North Star: "The Assessment Form"**

The site is a clinical assessment form printed on carbonless paper. Everything printed on the form is set in one deep form-green ink on white, in a condensed grotesk: ruled fields, boxed numbers, section letters, a body chart. Everything the visitor or the teacher "writes" arrives in ballpoint. Blue ballpoint fills entries, and red ballpoint marks courses and books them. The duplicate copies of the form, canary and pink, appear as whole sheets rather than as accents. Each sheet is torn from the next along a perforation.

Density is that of a working document. Labels are small, uppercase and condensed. Values sit on hairline rules. Headlines are very condensed, uppercase and set tight, the way a form title is set in its header strip. Nothing floats, glows or lifts off the page. The paper is flat, and depth comes from ink weight, ruled boxes and changes of copy colour.

Motion belongs to the pen and nothing else. Rings are drawn around chart marks, hatching is laid down over a selected region, and entries are written into fields by a left-to-right reveal. Nothing fades in, slides up or floats.

**Key Characteristics:**
- One printed ink (form green) on white, canary or pink copy paper.
- Two ballpoints with fixed jobs: blue enters, red marks and books.
- Very condensed, uppercase, tightly set headings (Archivo at 62–70% width). Labels are small, uppercase and spaced.
- Handwriting (Nanum Pen) only for things written onto the form.
- Perforated dividers between sheets. Boxed section letters A–D double as navigation.
- Flat paper with square corners. No shadows anywhere.

## Colors

One printed ink on three copy papers, plus two ballpoints with fixed jobs.

### Primary
- **Form Green** (form-ink): the single printed ink. It is used for all body text, headings, field labels, box outlines, the 3px masthead rule, the solid header band of a ruled box, the footer slab and the body-chart line art. Also the page `theme-color` and `accent-color`.

### Secondary
- **Red Ballpoint** (red-ballpoint): marking and booking only. It draws the chart rings and hatching, the selected course box, the WhatsApp booking button, and the handwritten "Book" links in the register.
- **Pressed Red** (red-deep): the hover state of the red booking button.

### Tertiary
- **Blue Ballpoint** (blue-ballpoint): entries. It covers handwritten field values, check-box ticks, the teaching statement, the closing line and the blue hatching on the couples chart. It also draws the keyboard focus ring (2.5px outline, 3px offset), because focus is where the visitor's hand is.

### Neutral
- **Form Paper** (paper): the white top copy. It is the base sheet, the masthead ground, and the text colour on ink and red fills.
- **Canary Copy** (canary): the whole course-register sheet. It is also the first copy edge visible at the hero's right margin.
- **Canary Ink** (canary-ink): the darker green ink used on the canary sheet for labels, box numbers and the heavy register rules.
- **Pink Copy** (pink): the whole Couple Workshop sheet. It is also the second copy edge.
- **Pink Ink** (pink-ink): the darker green ink used on the pink sheet.
- **Faded Ink** (ink-soft): secondary notes, sub-labels and masthead sub-lines. Each copy sheet locally re-tints it darker so it stays legible on that sheet: the canary sheet redeclares it as **Canary Faded Ink** (ink-soft-canary, about 6:1 on canary) and the pink sheet as **Pink Faded Ink** (ink-soft-pink, about 5.8:1 on pink). These are local re-tints of the same role, not extra hues; use them only through the sheet's own faded-ink value.
- **Ruling** (rule): form green at 38% alpha, used for every hairline field rule, perforation dash and nav divider. Each copy sheet re-tints it to its own ink at about 40%.

### Named Rules
**The Two Ballpoints Rule.** Blue is for anything entered and red is for anything marked or booked. Neither appears in printed form furniture, and red never decorates.

**The Whole Copy Rule.** Canary and pink are papers, not accents. They fill an entire sheet edge to edge, or show as a thin copy edge. They never appear as a tint, a badge or a highlight chip. The one exception is the text selection colour, which is canary.

**The One Ink Rule.** Each sheet prints in a single green ink (form green on white, canary ink on canary, pink ink on pink). Hierarchy comes from weight, width and size, never from a second printed hue.

## Typography

**Display Font:** Archivo variable, self-hosted (wdth 62–125, wght 100–900), with Arial Narrow as the fallback
**Body Font:** Archivo at normal width (100%)
**Handwriting Font:** Nanum Pen Script, self-hosted, with Bradley Hand as the fallback

**Character:** a single condensed grotesk does all the printed work by moving along its width axis: 62% for the headline, about 78% for labels, 100% for reading text. The handwriting face is the second voice, and it appears only where a pen has written on the form.

### Hierarchy
- **Display** (800, clamp(54px, 6vw, 80px), line-height 0.9, wdth 62, uppercase, balanced): the hero headline only.
- **Headline** (800, clamp(38px, 5.4vw, 76px), line-height 0.95, wdth 66, uppercase): sheet titles, each led by its boxed section letter.
- **Title** (800, 30px, line-height 1.1, wdth 70, uppercase): large printed field values (practitioner name, workshop fee). Register course names use the same voice at clamp(19px, 1.8vw, 26px), 750, wdth 72.
- **Body** (400, 17px, line-height 1.5, wdth 100): reading text. Line length is capped at 46–54ch. Typed field values are 18px.
- **Label** (650, 12px, 0.07em tracking, wdth 78, uppercase): field labels, table headers, term keys, figure captions and photo captions. Box headers use 13px at 700 and 0.1em tracking.
- **Pen entry** (Nanum Pen, 31px, line-height 1.05, blue): handwritten field values. Plan fields range from 26px to 34px.
- **Pen statement** (Nanum Pen, clamp(34px, 3vw, 46px) for the teaching statement, up to clamp(38px, 5vw, 68px) for the closing line): quoted voice written onto the form.

### Small tiers and fixed sizes
Below the roles above, the form runs a fixed set of small printed sizes. All are Archivo; most are uppercase and condensed. These are the only sizes in use; place new furniture on one of them.
- **12px:** the label tier (field labels, register and terms headers, chart and photo captions, the masthead reference line), the 18px chart number boxes (800), and the masthead nav on mobile (0.02em tracking).
- **13px:** box headers (700, 0.1em), masthead sub-line and footer (wdth 85; the footer adds 0.04em uppercase), the masthead and chart-key letter boxes, and the chart's figure captions (650, wdth 78, 0.08em uppercase). The chart's second label line is 13.5px at 500 in faded ink.
- **14px:** masthead nav (the nav role), register number boxes (800), and the chart's R/L side letters (800).
- **15px:** notes in faded ink (the note role), the chart's first label line (the chart-label role, 700, wdth 78), and small print inside couples fields (600, wdth 85).
- **16–16.5px:** chart-key entries (600, wdth 85), register region buttons, and check-box items (16.5px, line-height 1.4).
- **17–19px:** body (17px), the hero lede (clamp(17px, 1.35vw, 19px)), and typed values, button text and section ledes (18px).
- **20–22px:** the mobile register fee (20px), the large button (21px), and the masthead name, form reference and register fee (22px, 700–800).
- **Mobile chart:** below 760px the chart's own text is set larger so it survives the SVG scaling down: number box numerals 21px, figure captions 25px and side letters 27px.
- **Relative sizes:** two elements scale with their parent rather than sitting on a fixed tier: the register qualifier, such as "(including runners)" or "(structural bodywork)", at .8em of the course name (500, wdth 85, not uppercase), and the boxed section letter at .78em of its sheet heading.
- **Pen sizes:** 26px (plan candidate), 28px (plan hint, 78% opacity), 30px (the "Book" pen link), 31px (pen entry), 34px (plan course entry and couples chart callouts).

### Named Rules
**The Width Axis Rule.** Hierarchy in printed type is carried by width and weight on one family. Do not introduce a second printed typeface.

**The Only The Pen Writes Rule.** Handwriting appears only for content entered onto the form, in blue or red ballpoint. Printed headings, labels and navigation are never handwritten.

**The Numerals Rule.** Fees and other numbers use tabular lining numerals.

## Layout

The page is a stack of full-bleed sheets: white hero and chart (A), canary register (A), white practitioner (B), pink couples (C) and white booking (D). Perforated strips 34px tall separate them. Sheets take the side gutter clamp(16px, 4vw, 56px) and the vertical padding clamp(40px, 6vw, 88px). Content inside each sheet is centred to a 1440px maximum.

Composition is asymmetric two- and three-column grids: hero 5fr/7fr with the chart dominant, couples and booking 7fr/5fr, practitioner 3fr/6fr/4fr. Column gaps use clamp(28px, 5vw, 80px). Sheet heads pair the title and an intro paragraph on a two-column grid aligned to the baseline. Form rhythm inside boxes is tight: an 18px inset and column gap, and fields padded 9px above and 7px below their rule.

The masthead is a sticky form header strip with a 3px ink rule. It holds the name, nav letters A–D in ruled cells and the form reference "Form IMA/1".

Responsive behaviour:
- **Below 1180px:** the form reference drops and the practitioner statement spans the full width.
- **Below 980px:** every grid goes to one column. The hero reorders to headline and lede, then the chart, then the treatment plan. Terms go to two columns.
- **Below 760px:** the masthead stops being sticky, and its nav becomes a four-cell strip spanning the full width. Chart labels hide in favour of enlarged number boxes, and the numbered chart key appears directly under the chart, above the plan. The register collapses into ruled cards with fixed column positions. The booking button goes full width.

## Elevation & Depth

The system has no shadows at all (zero `box-shadow` in the build). The surface is flat paper. Depth comes from three things: the weight of a rule (1.5px hairlines, 2–2.5px box and table rules, 3px masthead and closing rules), a solid ink header band on a ruled box, and a change of copy paper across a perforation.

### Named Rules
**The Flat Carbon Rule.** Nothing lifts. Hover and selection change ink or fill colour (red box fill, a thicker ring, a deeper button red), never elevation, blur or offset.

## Shapes

Square corners throughout. Boxes, field rules, section letters, check boxes, number boxes and the photo frame are all sharp. The only radius is a barely softened 3px on the red booking button, plus 2px on the focus ring. The recurring geometries are these:
- the hairline rule under a field;
- the outlined square (section letter, number box, check box);
- the ruled box with a solid ink header band (treatment plan, teaching statement);
- the perforation, a row of paper-coloured punched dots every 22px over a dashed hairline.

Line art on the body chart is 1.8px stroke with round joins and a dashed spine. Pen marks are drawn as rough, round-capped strokes, not geometric shapes.

## Components

### Buttons
*Red ballpoint action: flat, heavy, unmistakable.*
- **Shape:** square with barely softened corners (3px).
- **Primary (pen button):** red ballpoint fill, white condensed bold text (18px, wdth 85), an inline WhatsApp glyph at 22px drawn in currentColor, padding 16px 24px 16px 20px. The large variant is 21px text with 20px 30px 20px 24px padding. No shadow and no border.
- **Hover / Active / Focus:** hover deepens to Pressed Red over 0.25s. Focus is the blue ballpoint outline.
- **Label:** the treatment plan's button reads "Ask Olga on WhatsApp" until a course is chosen, then "Book <course> (<length>) on WhatsApp", so two courses that share a name stay distinct.
- **Pen link (tertiary):** the handwritten "Book" in red Nanum Pen at 30px with a hand-drawn arrow. On hover, a 2px red underline is drawn in from the left.

### Inputs / Fields
*Printed field, handwritten value.*
- **Style:** an uppercase condensed label above, the value on a 1.5px ruling hairline. No background, no box, no radius.
- **Entries:** blue Nanum Pen for written values, or typed Archivo at 18px. When a course is chosen, values are written in with a 0.7s clip-path reveal, staggered 140–320ms per field.
- **Check boxes:** 18px outlined squares with a hand-drawn blue tick, or a partial stroke for in-progress training.

### Navigation
- **Masthead nav:** uppercase condensed 14px links, each in a cell divided by vertical hairlines and led by a 22px outlined section-letter box. On hover the box fills with ink and the letter turns to paper. On mobile the nav becomes a four-cell strip with the letter stacked over the word.

### Cards / Containers
- **Ruled box:** a 2px ink outline with a solid ink header band (13px, uppercase, paper text), an 18–20px inset and square corners. Used for the treatment plan and the teaching statement.
- **Photo frame:** a 1.5px ink outline with a 10px mat, a 4:5 crop and a label caption below.

### Course Register (signature)
A strictly ruled table of nine courses on the canary sheet, numbered 1–9 to match the chart. Heavy canary-ink rules (2.5px) sit under the header and under whichever row is last, with hairlines between; the closing rule belongs to the last row, not to any one course. Each row has an outlined number box, the course name in condensed uppercase, a dotted-underline region button that selects it on the chart, length, fee and a red pen "Book". The selected row fills its number box red. Columns never move. On mobile, rows become ruled cards that keep the same positions, and the last card keeps the heavy closing rule.

### Body Chart (signature)
Anterior and posterior figures in form-green line art with uppercase figure captions and R/L side letters. Nine numbered marks sit on the chart, each a red ballpoint stroke with a hairline leader to an 18px outlined number box and a two-line label (course name, then a faded-ink sub-line). Mark numbers match the register rows. There are two mark types:
- **Scribbled ring** (seven marks): a rough, round-capped red loop (2.6px) drawn around one region: head, shoulder, low back, pelvis, knee, lower abdomen (Women's Health Bodywork) and the posterior left calf (Myofascial Release, 1 day). The pelvis ring trails a stroke down the sciatic line. Selecting a ring hatches only the region inside it.
- **Whole-body bracket** (two marks): a tall red vertical stroke beside a whole figure, its ends curling in toward the body and a small notch at its midpoint pointing out to the leader. Deep Tissue (2 days) stands beside the anterior view and Myofascial Release (3 days) beside the posterior view. Selecting a bracket hatches its entire figure in lighter, wider hatching (1.2px at 55% opacity), so a whole-body course reads as the whole body rather than as one more region.

On arrival the pen draws every ring and bracket once (0.8s, starting at 280ms and staggered 170ms). Hover or focus thickens the stroke (3.6px); hover also turns the leader red, and keyboard focus rings the number box in blue. Selecting a mark fills its box red with a white numeral, thickens the stroke (3.4px), turns the leader red, draws the red hatching (0.5s stroke-dashoffset, staggered in thirds), selects the matching register row and chart-key entry, and writes the course into the treatment plan.

Below 760px the labels hide. Number boxes scale up 1.9 times with 21px numerals, leaders thicken to 2px, and a numbered chart key renders directly under the chart: one full-width row per course with a 24px outlined number box and the full course name (16px, 600, wdth 85) over a hairline. The selected key entry fills its box red, like the chart and the register. The couples sheet repeats the chart in pink ink with blue hatching and handwritten callouts.

### Perforation
A 34px strip between sheets. The previous sheet's colour carries punched dots of the next paper, every 22px, over a dashed hairline.

## Do's and Don'ts

### Do:
- **Do** print everything on a sheet in its single green ink, and give each copy sheet its own darker ink plus a re-tinted rule and faded-ink value.
- **Do** keep red ballpoint for chart marks, selected states and booking, and blue ballpoint for entries, ticks and the focus ring.
- **Do** set field labels at 12px, weight 650, 0.07em tracking, uppercase, wdth 78, above a 1.5px ruling hairline.
- **Do** lead every sheet title with its boxed section letter, in the fixed order A–D that the masthead nav uses.
- **Do** separate sheets with the perforation strip, not with spacing alone or a plain border.
- **Do** animate only pen strokes (stroke-dashoffset, clip-path writing) on cubic-bezier(.16, 1, .3, 1), and drop all motion under reduced-motion.

### Don't:
- **Don't** add shadows, blur or lift to any element, including the red booking button.
- **Don't** fade, slide or float content in. Only pen strokes and colour state changes move.
- **Don't** use canary or pink as small tints, chips or highlights. They are whole copy papers.
- **Don't** set printed headings, labels or navigation in the handwriting face.
- **Don't** round boxes, fields or number squares. Only the booking button carries its 3px corner.
- **Don't** introduce a second printed hue or a second printed typeface.
