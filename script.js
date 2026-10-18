(() => {
  const WA = 'https://wa.me/447553370589?text=';
  const msg = (t) => WA + encodeURIComponent(t);

  const COURSES = {
    migraine: { title: 'Migraine & Headache Relief', region: 'Head & neck', length: '1 day', fee: '£250',
      clinic: 'Olga treats migraines in clinic and has further training in TMJ pain.' },
    shoulder: { title: 'Advanced Shoulder Techniques', region: 'Shoulder girdle', length: '1 day', fee: '£250',
      clinic: 'Her clinical work includes rotator cuff injury and frozen shoulder.' },
    lowback: { title: 'Low Back Pain Solutions', region: 'Lumbar spine', length: '1 day', fee: '£250',
      clinic: 'Built on her chronic pain and myofascial release practice.' },
    pelvic: { title: 'Pelvic & Sciatica Release', region: 'Pelvis & sciatic line', length: '1 day', fee: '£250',
      clinic: 'Her clinical work includes sciatica and pelvic pain, with a focus on advanced soft tissue techniques.' },
    knee: { title: 'Knee & Leg Care', region: 'Knee & lower limb', length: '1 day', fee: '£250',
      clinic: 'Includes runners. Her clinical work covers IT band syndrome and sports massage for athletes.' },
    deep: { title: 'Deep Tissue Advanced Training', region: 'Whole body', length: '2 days', fee: '£400',
      clinic: 'The only two-day course on the register.' },
    womens: { title: 'Women’s Health Bodywork', region: 'Abdomen & pelvis', length: '1 day', fee: '£250',
      clinic: 'Her clinical work includes endometriosis, C-section scar care and pelvic pain.' },
    myo1: { title: 'Myofascial Release', region: 'Fascia & soft tissue', length: '1 day', fee: '£250',
      clinic: 'Her clinical work includes myofascial release for pain and mobility.' },
    myo3: { title: 'Myofascial Release', region: 'Whole body', length: '3 days', fee: '£600',
      clinic: 'Her clinical work includes advanced myofascial release and structural bodywork.' },
  };

  const courseMsg = (id) => {
    const c = COURSES[id];
    const kind = { '1 day': 'one-day', '2 days': 'two-day', '3 days': 'three-day' }[c.length];
    return msg(`Hello Olga, I’m a qualified massage therapist (Level __) and I’d like to book the ${kind} CPD course “${c.title}” (${c.fee}).`);
  };

  // Booking links work without the chart
  document.querySelectorAll('[data-book]').forEach((a) => {
    const id = a.dataset.book;
    if (COURSES[id]) a.href = courseMsg(id);
    else if (id === 'workshop') a.href = msg('Hello Olga, we’d like to book the Couple Massage Workshop (3 hours, £220 per person).');
    else a.href = msg('Hello Olga, I’m interested in training at Intention Massage Academy.');
    if (COURSES[id]) a.setAttribute('aria-label', `Book ${COURSES[id].title}, ${COURSES[id].length}, on WhatsApp`);
  });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const marks = [...document.querySelectorAll('.mark')];
  // Screen readers get the full course name, not the two-line chart label
  marks.forEach((m) => { const c = COURSES[m.dataset.course]; if (c) m.setAttribute('aria-label', `${c.title}, ${c.length}`); });
  const keys = [...document.querySelectorAll('.chart-key button')];
  const rows = [...document.querySelectorAll('.register tbody tr')];
  const plan = document.getElementById('plan');
  const book = document.getElementById('plan-book');
  const fields = Object.fromEntries([...plan.querySelectorAll('[data-f]')].map((el) => [el.dataset.f, el]));

  const write = (el, text) => {
    el.textContent = text;
    if (reduce) return;
    el.classList.remove('writing');
    void el.offsetWidth;
    el.classList.add('writing');
  };

  let current = null;
  const select = (id, { scroll = false } = {}) => {
    const c = COURSES[id];
    if (!c) return;
    current = id;
    marks.forEach((m) => {
      const on = m.dataset.course === id;
      m.classList.toggle('is-on', on);
      m.setAttribute('aria-pressed', on);
    });
    keys.forEach((k) => k.setAttribute('aria-pressed', k.dataset.course === id));
    rows.forEach((r) => r.classList.toggle('is-on', r.dataset.course === id));
    plan.classList.add('filled');
    fields.title.classList.remove('hint');
    write(fields.title, c.title);
    setTimeout(() => write(fields.region, c.region), reduce ? 0 : 140);
    setTimeout(() => write(fields.length, c.length), reduce ? 0 : 240);
    setTimeout(() => write(fields.fee, c.fee), reduce ? 0 : 320);
    fields.clinic.textContent = c.clinic;
    fields.cta.textContent = `Book ${c.title} (${c.length}) on WhatsApp`;
    book.href = courseMsg(id);
    if (!scroll && window.matchMedia('(max-width: 980px)').matches) {
      const r = plan.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.6 || r.bottom < 0) {
        plan.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    }
    if (scroll) {
      document.getElementById('courses').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  };

  marks.forEach((m) => {
    m.addEventListener('click', () => select(m.dataset.course));
    m.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(m.dataset.course); }
    });
  });
  keys.forEach((k) => k.addEventListener('click', () => select(k.dataset.course)));
  document.querySelectorAll('.region-btn').forEach((b) =>
    b.addEventListener('click', () => select(b.dataset.course, { scroll: true })));

  // The pen goes round each mark once on arrival
  if (!reduce) {
    const chart = document.querySelector('.chart-svg');
    chart.classList.add('drawing');
    marks.forEach((m, i) => m.style.setProperty('--d', `${280 + i * 170}ms`));
    setTimeout(() => chart.classList.remove('drawing'), 280 + marks.length * 170 + 900);
  }
})();
