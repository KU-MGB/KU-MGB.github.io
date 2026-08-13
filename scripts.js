// ═══════════════════════════════════════════════════════════════════════════
// SCRIPTS.JS
//
// This one file holds almost everything for the MGB Lab website: the
// content that doesn't live in its own JSON file, the code that loads
// the content that does, and the app itself (theme, navigation, search,
// and one render function per page section).
//
// The file has three parts, in order:
//
//   PART 1: STATIC CONTENT (below)
//   Publications, news, research pillars, projects, and the reaction
//   pipeline data. To add or edit one of these, just edit the array
//   directly. People and blog posts are handled differently: each
//   person and each blog post is its own JSON file, kept in
//   1_People/ and 2_Content/2_Blogs/ (see the README.md in each of
//   those folders), so new entries can be added without touching
//   this file at all.
//
//   PART 2: DATA LOADER
//   Fetches people, blog posts, and lab photos from their per-file
//   folders when the page loads.
//
//   PART 3: APP
//   Theme, navbar, search, page routing, and one render function per
//   page section. Numbered comments below (1, 2, 3, ...) mark each
//   piece in the order it appears in the file; a letter suffix like
//   2b marks a smaller piece that belongs with the section before it.
// ═══════════════════════════════════════════════════════════════════════════

// ----------------------------------------------------------------
// PART 1: STATIC CONTENT
// ----------------------------------------------------------------

// Publications list, newest first. Shown on the Publications page.

const MGB_PUBLICATIONS = [
  {
    "title": "Enzymatic defluorination of long-chain PFAS by a novel dehalogenase",
    "year": 2025,
    "venue": "Nature Microbiology",
    "authors": [
      "Shaban Ahmad",
      "Benedetta Togni",
      "Tue Kjærgaard Nielsen"
    ],
    "tags": [
      "PFAS",
      "Enzymes",
      "Defluorination"
    ],
    "doi": "10.1038/s41564-025-0134-x",
    "pdf": "https://example.com/paper.pdf"
  },
  {
    "title": "Metagenomic mining of environmental DNA reveals widespread dehalogenase diversity",
    "year": 2024,
    "venue": "ISME Journal",
    "authors": [
      "Sarah Williams",
      "Jonas Randløv",
      "Tue Kjærgaard Nielsen"
    ],
    "tags": [
      "Metagenomics",
      "Ecology",
      "Mining"
    ],
    "doi": "10.1038/s41396-024-0012-y",
    "pdf": "https://example.com/paper2.pdf"
  },
  {
    "title": "Structural basis for substrate specificity in C-F bond cleaving enzymes",
    "year": 2024,
    "venue": "Journal of Biological Chemistry",
    "authors": [
      "Benedetta Togni",
      "David Miller",
      "Tue Kjærgaard Nielsen"
    ],
    "tags": [
      "Structural Biology",
      "Crystallography",
      "Biochemistry"
    ],
    "doi": "10.1016/j.jbc.2024.102345",
    "pdf": "https://example.com/paper3.pdf"
  },
  {
    "title": "Machine learning-guided discovery of PFAS-active haloacid dehalogenases",
    "year": 2023,
    "venue": "PLOS Computational Biology",
    "authors": [
      "Shaban Ahmad",
      "Asal Forouzandeh",
      "Tue Kjærgaard Nielsen"
    ],
    "tags": [
      "Machine Learning",
      "HADs",
      "PFAS"
    ],
    "doi": "10.1371/journal.pcbi.1011234",
    "pdf": "https://example.com/paper4.pdf"
  },
  {
    "title": "Fluoride-release kinetics reveal rate-limiting steps in microbial PFAS defluorination",
    "year": 2023,
    "venue": "Environmental Science & Technology",
    "authors": [
      "Asal Forouzandeh",
      "James Wilson",
      "Tue Kjærgaard Nielsen"
    ],
    "tags": [
      "Kinetics",
      "PFAS",
      "Environmental Chemistry"
    ],
    "doi": "10.1021/acs.est.3c04567",
    "pdf": "https://example.com/paper5.pdf"
  }
];
// News items, newest first. Shown as the auto-scrolling ticker next to Projects.
const MGB_NEWS         = [
  {
    "title": "New paper out in Nature Microbiology",
    "date": "2025-02-28",
    "category": "Publication",
    "description": "Our latest study on enzymatic defluorination of long-chain PFAS is now published.",
    "content": "Read the full paper to see how we engineered the enzyme for improved activity."
  },
  {
    "title": "Benedetta Togni wins Best Poster at Gordon Research Conference",
    "date": "2024-11-03",
    "category": "Award",
    "description": "Benedetta presented her latest structural work on dehalogenase active sites.",
    "content": "Her presentation highlighted the novel structural motifs necessary for binding long-chain PFAS."
  }
];
// The four research pillar cards on the Home page ("01" through "04").
const MGB_RESEARCH     = [
  {
    "id": "sequencing",
    "step": "01",
    "title": "Sequencing",
    "description": "Metagenomic sequencing captures environmental DNA directly from contaminated soils, sediments, and groundwater — no culturing required.",
    "icon": "Dna"
  },
  {
    "id": "bioinformatics",
    "step": "02",
    "title": "AI & Bioinformatics",
    "description": "HMM searches, structural homology, and machine learning classifiers mine millions of sequences for dehalogenase signatures.",
    "icon": "Cpu"
  },
  {
    "id": "structural",
    "step": "03",
    "title": "Structural Modelling",
    "description": "AlphaFold and Boltz-2 predict active-site geometry, ranking candidates by their likelihood of cleaving the C–F bond.",
    "icon": "Atom"
  },
  {
    "id": "experimental",
    "step": "04",
    "title": "Experimental Validation",
    "description": "Fluoride-release assays and steady-state kinetics confirm which computational leads are genuinely active enzymes.",
    "icon": "FlaskConical"
  }
];
// The three-phase reaction pipeline cards (Pre-organisation, C-F Bond
// Breakage, Enzyme Regeneration). Not shown on the page right now: the
// section that used to display these was removed from index.html, so
// renderReaction() below has nothing to render into and quietly does
// nothing. Kept here in case that section comes back.
const MGB_REACTION     = [
  {
    "phase": "Phase 1",
    "title": "Pre-organisation",
    "description": "The PFAS molecule enters the dehalogenase active site, positioning the target carbon near the Asp10 nucleophile oxygen (~3.2 Å) in a collinear backside-attack geometry."
  },
  {
    "phase": "Phase 2",
    "title": "C–F Bond Breakage",
    "description": "The negatively charged Asp10 nucleophile attacks the α-carbon, displacing the fluoride leaving group. The Arg41/Trp179 cradle stabilises the transition state."
  },
  {
    "phase": "Phase 3",
    "title": "Enzyme Regeneration",
    "description": "A catalytic water molecule is activated by the Asp180 base (abstracting H⁺). The hydroxyl attacks the ester, releasing the defluorinated product and restoring Asp10."
  }
];
// Current and past projects, grouped by "tier" (Active, Finished, etc.) on the Projects page.
const MGB_PROJECTS     = [
  {
    "id": "Mapping the PFAS interactome using photocatalytic proximity labelling",
    "title": "Mapping the PFAS interactome using photocatalytic proximity labelling",
    "tier": "Active",
    "status": "Active",
    "description": "Proximity labelling using a photocatalyst to explore PFAS-protein interactions. The project is supported by the Novo Nordisk Foundation.",
    "tags": ["PFAS", "Novo Nordisk Foundation"]
  },
  {
    "id": "Sapere Aude",
    "title": "Sapere Aude: Solving microbial degradation of PFAS",
    "tier": "Active",
    "status": "Active",
    "description": ".",
    "tags": ["PFAS", "Catalytic enzymes", "Synthetic biology"]
  },
  {
    "id": "DFF Project1",
    "title": "Genetics of PFOS biodegradation",
    "tier": "Active",
    "status": "Finished in 2026",
    "description": "",
    "tags": ["PFAS", "High-throughput screening", "Genomics"]
  }
];
// ═══════════════════════════════════════════════════════════════════════════
// PART 2: DATA LOADER
//
// Fetches people, blog posts, and lab photos from their per-file folders
// when the page loads, and sets window.MGB_DATA_READY (a promise) so the
// render functions in Part 3 can wait until the data has arrived.
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  // Step 1: load every person listed in 1_People/manifest.json.
  // The manifest groups people by category folder, for example:
  //   { "2_Postdocs": ["asal-forouzandeh", ...], "3_PhD": [...], ... }
  // One bad or missing person file should not blank the whole People
  // page, so a failed fetch for one person is logged and skipped
  // (see the .catch below) instead of failing the whole group.
  async function loadPeople() {
    try {
      const manifest = await fetch(adjustPath('1_People/manifest.json')).then(r => r.json());
      const groups = await Promise.all(Object.entries(manifest).map(async ([group, ids]) => {
        const members = await Promise.all(ids.map(id =>
          fetch(adjustPath(`1_People/${group}/${id}.json`))
            .then(r => r.ok ? r.json() : Promise.reject(new Error(`${r.status} for ${group}/${id}.json`)))
            .then(p => Object.assign({}, p, { role_group: group }))
            .catch(e => { console.error('Failed to load person:', group, id, e); return null; })
        ));
        return members.filter(Boolean);
      }));
      window.MGB_PEOPLE = groups.flat();
    } catch (e) {
      console.error('Failed to load people:', e);
      window.MGB_PEOPLE = [];
    }
  }

  // Step 2: load every blog post listed in 2_Content/2_Blogs/manifest.json,
  // the same one-file-per-item pattern as people above.
  async function loadBlogs() {
    try {
      const manifest = await fetch(adjustPath('2_Content/2_Blogs/manifest.json')).then(r => r.json());
      const posts = await Promise.all(manifest.map(async slug => {
        const post = await fetch(adjustPath(`2_Content/2_Blogs/${slug}/post.json`)).then(r => r.json());
        return Object.assign({}, post, {
          id: slug,
          cover: post.cover ? `2_Content/2_Blogs/${slug}/${post.cover}` : ''
        });
      }));
      window.MGB_BLOGS = posts;
    } catch (e) {
      console.error('Failed to load blog posts:', e);
      window.MGB_BLOGS = [];
    }
  }

  // Step 3: load the list of lab photo filenames for the home page
  // slideshow. An entry with a "+" in it (e.g. "a.jpg+b.jpg") means two
  // photos shown side by side as one slide; that gets split back apart
  // by renderHomeSlideshow() further down.
  async function loadLabImages() {
    try {
      const manifest = await fetch(adjustPath('2_Content/1_Images/manifest.json')).then(r => r.json());
      window.MGB_LAB_IMAGES = manifest.map(entry =>
        entry.split('+').map(f => adjustPath(`2_Content/1_Images/${f}`)).join('+')
      );
    } catch (e) {
      window.MGB_LAB_IMAGES = [];
    }
  }

  // Run all three loaders at once; window.MGB_DATA_READY resolves once
  // every one of them has finished (successfully or not).
  window.MGB_DATA_READY = Promise.all([loadPeople(), loadBlogs(), loadLabImages()]);
})();

// ═══════════════════════════════════════════════════════════════════════════
// PART 3: APP
//
// Theme, navbar, search, page routing, and one render function per page
// section. Sections are numbered in the order they appear below; a
// letter suffix (2b, 8b, 9b, 14b) marks a smaller piece that belongs
// with the numbered section right before it.
//
//    1  Theme (dark/light)
//    2  Navbar and mobile menu
//    2b   Touch tooltips
//    3  Scroll reveal (fade-in as elements enter the screen)
//    4  Simple Markdown (for blog post bodies)
//    5  People renderer
//    6  Blogs renderer (preview list)
//    7  Blog post renderer (single post view)
//    8  Publications renderer
//    8b   Publications "scroll more" button
//    9  Research pillars renderer
//    9b   Reaction pipeline renderer
//   10  Projects renderer
//   11  News renderer (ticker)
//   12  Group photo (People page)
//   13  Home page slideshow
//   14  Join Us form
//   14b   Join Us popup (open/close)
//   15  Single-page scroll routing
//   16  Language switcher
//   17  Small UX touches (footer year, back-to-top button)
//   18  Command palette search (Ctrl/Cmd+K)
// ═══════════════════════════════════════════════════════════════════════════

function adjustPath(p) {
  if (!p) return p;
  if (p.startsWith('http')) return p;
  const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/KU-MGB/') || window.location.pathname.endsWith('/KU-MGB') || window.location.pathname === '/';
  return isRoot ? p : '../' + p;
}

// 1. Theme (dark/light). Light is the default.
function initTheme() {
  const saved = localStorage.getItem('mgb-theme') || 'light';
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('mgb-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const path = document.getElementById('theme-icon-path');
  if (path) {
    if (isDark) {
      path.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
    } else {
      path.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
    }
  }
}
window.toggleTheme = toggleTheme;

// 2. Navbar and mobile menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open');
    });
    const links = mobileMenu.querySelectorAll('a, button');
    links.forEach(l => l.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.classList.remove('open');
    }));
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('open')) return;
      if (e.target.closest('#mobile-menu') || e.target.closest('#hamburger')) return;
      mobileMenu.classList.remove('open');
      mobileToggle.classList.remove('open');
    });
  }
}

// 2b. Touch tooltips. Only reveal on a long press (about 500ms), not a plain tap,
// so tapping a nav icon just triggers its action instead of flashing a label.
function initTooltipLongPress() {
  let pressTimer = null;
  let longPressed = false;
  document.querySelectorAll('[data-tip]').forEach(el => {
    el.addEventListener('touchstart', () => {
      longPressed = false;
      pressTimer = setTimeout(() => {
        longPressed = true;
        el.classList.add('tip-visible');
      }, 500);
    }, { passive: true });
    el.addEventListener('touchmove', () => clearTimeout(pressTimer));
    el.addEventListener('touchend', (e) => {
      clearTimeout(pressTimer);
      if (longPressed) {
        e.preventDefault();
        setTimeout(() => el.classList.remove('tip-visible'), 1200);
      }
    });
    el.addEventListener('touchcancel', () => {
      clearTimeout(pressTimer);
      el.classList.remove('tip-visible');
    });
  });
}

// 3. Scroll reveal (fades elements in as they enter the screen)
window.initScrollReveal = function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.transitionDelay = `${delay}00ms`;
    observer.observe(el);
  });
}

// 4. Simple Markdown (turns basic markdown into HTML for blog post bodies)
function simpleMarkdown(text) {
  if (!text) return '';
  text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');

  text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  text = text.replace(/`(.*?)`/gim, '<code>$1</code>');

  let lines = text.split('\n');
  let html = '';
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) { html += '<ul>\n'; inList = true; }
      html += `<li>${line.substring(2)}</li>\n`;
    } else if (line.match(/^<(h2|h3)>/)) {
      if (inList) { html += '</ul>\n'; inList = false; }
      html += line + '\n';
    } else if (line.length > 0) {
      if (inList) { html += '</ul>\n'; inList = false; }
      html += `<p>${line}</p>\n`;
    } else {
      if (inList) { html += '</ul>\n'; inList = false; }
    }
  }
  if (inList) html += '</ul>\n';
  return html;
}

// Strip markdown syntax down to flowing plain text (for compact card excerpts)
function bioExcerpt(text) {
  if (!text) return '';
  return text
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
}

function truncateBio(text, limit) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

// Avatar helper: shows the person's real photo if they have one, otherwise
// falls back to a circle with their initials in a colour picked from their name.
const AVATAR_PALETTE = ['#0f766e', '#059669', '#2563eb', '#7c3aed', '#dc2626', '#d97706'];
function avatarColor(name) {
  let h = 0;
  for (let i = 0; i < (name || '').length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_PALETTE[h % AVATAR_PALETTE.length];
}
function personAvatarHtml(p) {
  if (p.avatar) {
    return `<img src='${adjustPath('1_People/' + p.role_group + '/' + p.avatar)}' alt='${p.name}' class='profile-photo' loading='lazy'>`;
  }
  const initials = (p.name || '').split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return `<div class='profile-initials' style='background:${avatarColor(p.name || '')}'>${initials}</div>`;
}

// 5. People renderer: builds the People page, one card per person,
// grouped into the categories listed below.
window.renderPeople = function() {
  if (typeof MGB_PEOPLE === 'undefined') return;
  const CATEGORIES = [
    { id: '1_Faculty', label: 'Group Leader', cls: 'cat-faculty' },
    { id: '2_Postdocs', label: 'Postdoctoral Researchers', cls: 'cat-postdocs' },
    { id: '3_PhD', label: 'PhD Students', cls: 'cat-phd' },
    { id: '4_Masters', label: 'MSc Students', cls: 'cat-masters' },
    { id: '5_Bachelors', label: 'BSc Students', cls: 'cat-bachelors' },
    { id: '6_Others', label: 'Others', cls: 'cat-others' },
    { id: '7_Alumni', label: 'Alumni', cls: 'cat-alumni' }
  ];

  const container = document.getElementById('people-container');
  if (!container) return;

  // One icon per link type, always shown; missing links render as a dummy (visible, inert) icon.
  function personLinkHtml(href, tip, iconClass) {
    if (href) return `<a href='${href}' target='_blank' rel='noopener' class='icon-link' data-tip='${tip}' aria-label='${tip}'><i class='${iconClass}'></i></a>`;
    return `<span class='icon-link icon-link-dummy' data-tip='${tip} not available' aria-label='${tip} not available'><i class='${iconClass}'></i></span>`;
  }
  function personLinksHtml(p) {
    return `<div class='profile-links'>
      ${personLinkHtml(p.email ? 'mailto:' + p.email : '', 'Email', 'fas fa-envelope')}
      ${personLinkHtml(p.orcid ? 'https://orcid.org/' + p.orcid : '', 'ORCID', 'fab fa-orcid')}
      ${personLinkHtml(p.website || '', 'Website', 'fas fa-globe')}
      ${personLinkHtml(p.linkedin || '', 'LinkedIn', 'fab fa-linkedin')}
    </div>`;
  }

  CATEGORIES.forEach(cat => {
    const members = MGB_PEOPLE.filter(p => p.role_group === cat.id);
    if (members.length === 0) return;

    const gridModifier = members.length === 1 ? ' people-grid-solo' : members.length === 2 ? ' people-grid-duo' : '';
    const isAlumni = cat.id === '7_Alumni';
    const BIO_LIMIT = 300;
    const cardsHtml = members.map(p => {
      const fullBio = p.bio ? bioExcerpt(p.bio) : '';
      const isLong = fullBio.length > BIO_LIMIT;
      const shortBio = isLong ? truncateBio(fullBio, BIO_LIMIT) : fullBio;
      return `
          <div class='profile-card ${cat.cls}' data-reveal>
            <div class='profile-header'>
              <div class='profile-header-left'>
                ${personAvatarHtml(p)}
                <div>
                  <h3 class='profile-name'>${p.name || ''}</h3>
                  <div class='profile-title'>${p.role || ''}</div>
                </div>
              </div>
              ${personLinksHtml(p)}
            </div>
            ${fullBio ? `
            <p class='profile-bio profile-bio-short'>${shortBio}${isLong ? ` <button type='button' class='text-link profile-bio-toggle' aria-expanded='false'>Read more &rarr;</button>` : ''}</p>
            ${isLong ? `<p class='profile-bio profile-bio-full'>${fullBio} <button type='button' class='text-link profile-bio-toggle' aria-expanded='true'>Show less &uarr;</button></p>` : ''}` : ''}
            ${p.tags ? `<div class='profile-chips'>${p.tags.slice(0, 3).map(t => `<span class='chip chip-muted'>${t}</span>`).join('')}</div>` : ''}
          </div>
        `;
    }).join('');

    const section = document.createElement('div');
    section.className = `people-section ${cat.cls}`;
    if (isAlumni) {
      section.innerHTML = `
        <button type='button' class='alumni-toggle' aria-expanded='false'>
          <h3 class='section-label' style="margin-bottom:0;">${cat.label} (${members.length})</h3>
          <i class='fas fa-chevron-down alumni-toggle-icon' aria-hidden='true'></i>
        </button>
        <div class='people-grid${gridModifier} alumni-grid'>
          ${cardsHtml}
        </div>
      `;
      const toggle = section.querySelector('.alumni-toggle');
      const grid = section.querySelector('.alumni-grid');
      toggle.addEventListener('click', () => {
        const open = grid.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    } else {
      section.innerHTML = `
        <h3 class='section-label' style="margin-bottom: 14px;">${cat.label}</h3>
        <div class='people-grid${gridModifier}'>
          ${cardsHtml}
        </div>
      `;
    }
    section.querySelectorAll('.profile-card').forEach(card => {
      const short = card.querySelector('.profile-bio-short');
      const full = card.querySelector('.profile-bio-full');
      if (!full) return;
      card.querySelectorAll('.profile-bio-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const open = full.classList.toggle('open');
          short.classList.toggle('hidden', open);
        });
      });
    });
    container.appendChild(section);
  });
  if (window.initScrollReveal) window.initScrollReveal();
}

// 6. Blogs renderer (the preview card list on the Blogs page)
window.renderBlogs = function() {
  if (typeof MGB_BLOGS === 'undefined') return;
  const container = document.getElementById('blogs-container');
  if (!container) return;

  if (MGB_BLOGS.length === 0) {
    container.innerHTML = '<p class="section-desc">No blog posts found.</p>';
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'blog-grid';

  MGB_BLOGS.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).forEach(b => {
    const el = document.createElement('div');
    el.className = 'blog-card';
    el.setAttribute('data-reveal', '');
    el.innerHTML = `
      <div class='blog-cover'>
        ${b.cover ? `<img src='${adjustPath(b.cover)}' alt='cover'>` : ''}
      </div>
      <div class='blog-body'>
        <div class='blog-meta-row'>
          <span class='blog-date'>${b.date || ''} • ${b.category || ''}</span>
          <a href='https://www.linkedin.com/in/drshabanahmad/' target='_blank' rel='noopener' class='blog-author-link'>Shaban Ahmad</a>
        </div>
        <h3 class='blog-title'>${b.title || ''}</h3>
        <p class='blog-desc line-clamp-3'>${b.description || ''}</p>
        <button type='button' class='text-link blog-toggle' aria-expanded='false'>Read more &rarr;</button>
        <div class='blog-expand'>${simpleMarkdown(b.body || '')}</div>
      </div>
    `;
    const toggleBtn = el.querySelector('.blog-toggle');
    const expandEl = el.querySelector('.blog-expand');
    function toggle() {
      const open = expandEl.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(open));
      toggleBtn.innerHTML = open ? 'Show less &uarr;' : 'Read more &rarr;';
      if (!open) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    toggleBtn.addEventListener('click', (e) => { e.stopPropagation(); toggle(); });
    el.querySelector('.blog-author-link').addEventListener('click', (e) => e.stopPropagation());
    el.addEventListener('click', (e) => {
      if (e.target.closest('.blog-author-link') || e.target.closest('.blog-toggle')) return;
      toggle();
    });
    grid.appendChild(el);
  });
  container.appendChild(grid);
  if (window.initScrollReveal) window.initScrollReveal();
}

// 7. Blog post renderer. Reads ?id=<slug> from the URL (the hash is #blog-post)
window.renderBlogPost = function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('blog-post-container');
  if (!container || !id || typeof MGB_BLOGS === 'undefined') return;

  const post = MGB_BLOGS.find(b => b.id === id);
  if (!post) {
    container.innerHTML = '<h2 class="section-title">Post not found</h2>';
    return;
  }

  document.title = `${post.title} | MGB Lab`;
  container.innerHTML = `
    <a href="#blogs-news" class="text-link" style="margin-bottom:24px;">&larr; Back to Blog</a>
    <div class="blog-post-header">
      <div class="section-label" style="justify-content:center; display:flex">${post.date || ''} • ${post.category || ''}</div>
      <h1 class="blog-post-title">${post.title || ''}</h1>
      <p style="color:var(--muted); font-weight:500;">By ${post.author || 'MGB Lab'}</p>
    </div>
    ${post.cover ? `<img src="${adjustPath(post.cover)}" class="blog-post-cover" alt="Cover image">` : ''}
    <div class="blog-post-body">
      ${simpleMarkdown(post.body || '')}
    </div>
  `;
  if (window.initScrollReveal) window.initScrollReveal();
}

// 8. Publications renderer
window.renderPublications = function() {
  if (typeof MGB_PUBLICATIONS === 'undefined') return;
  const container = document.getElementById('publications-container');
  if (!container) return;

  MGB_PUBLICATIONS.slice().sort((a, b) => b.year - a.year).forEach(pub => {
    const el = document.createElement('div');
    el.className = 'pub-entry';
    el.setAttribute('data-reveal', '');
    el.innerHTML = `
      <div class='pub-meta'>
        <span class='badge'>${pub.year}</span>
        ${pub.venue ? `<span class='badge badge-fg pub-venue'>${pub.venue}</span>` : ''}
        ${pub.doi ? `<a href='https://doi.org/${pub.doi}' target='_blank' rel='noopener' class='badge badge-fg pub-doi'>https://doi.org/${pub.doi}</a>` : ''}
      </div>
      <h3 class='pub-title'>${pub.title}</h3>
      ${pub.authors ? `<p class='pub-authors'>${pub.authors.join(', ')}</p>` : ''}
      ${pub.tags ? `<div class='chip-container' style="margin-top:8px;">${pub.tags.map(t => `<span class='chip chip-muted'>${t}</span>`).join('')}</div>` : ''}
    `;
    container.appendChild(el);
  });
  if (window.initScrollReveal) window.initScrollReveal();
  initPubScrollMore();
}

// 8b. Publications "scroll more" button. Does the same thing as scrolling with the mouse wheel,
// jumping one batch at a time and looping back to the top at the bottom.
function initPubScrollMore() {
  const list = document.getElementById('publications-container');
  const btn = document.getElementById('pub-scroll-more');
  if (!list || !btn) return;

  function updateVisibility() {
    btn.style.display = list.scrollHeight > list.clientHeight + 8 ? 'flex' : 'none';
  }
  updateVisibility();
  window.addEventListener('resize', updateVisibility);
  list.addEventListener('scroll', updateVisibility);

  if (btn.dataset.wired) return;
  btn.dataset.wired = 'true';
  btn.addEventListener('click', () => {
    const scrollAmount = Math.max(220, Math.round(list.clientHeight * 0.85));
    const nearBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 20;
    if (nearBottom) list.scrollTo({ top: 0, behavior: 'smooth' });
    else list.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  });
}

// 9. Research pillars renderer (the "01" to "04" cards on the Home page)
window.renderResearch = function() {
  if (typeof MGB_RESEARCH === 'undefined') return;
  const container = document.getElementById('research-themes-container');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'research-pillars';
  grid.innerHTML = MGB_RESEARCH.map(r => `
    <div class='card-academic' data-reveal>
      <span class='badge' style='margin-bottom:10px;'>${r.step || ''}</span>
      <h3>${r.title}</h3>
      <p>${r.description}</p>
    </div>
  `).join('');
  container.appendChild(grid);
  if (window.initScrollReveal) window.initScrollReveal();
}

// 9b. Reaction pipeline renderer. Not currently used (see the note above MGB_REACTION).
window.renderReaction = function() {
  if (typeof MGB_REACTION === 'undefined') return;
  const container = document.getElementById('reaction-container');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'research-pillars';
  grid.innerHTML = MGB_REACTION.map(r => `
    <div class='card-academic' data-reveal>
      <span class='badge badge-fg' style='margin-bottom:10px;'>${r.phase}</span>
      <h3>${r.title}</h3>
      <p>${r.description}</p>
    </div>
  `).join('');
  container.appendChild(grid);
  if (window.initScrollReveal) window.initScrollReveal();
}

// 10. Projects renderer (grouped into tiers, such as Active and Finished)
window.renderProjects = function() {
  if (typeof MGB_PROJECTS === 'undefined') return;
  const container = document.getElementById('projects-container');
  if (!container) return;

  const tiers = [...new Set(MGB_PROJECTS.map(p => p.tier || 'Projects'))];
  tiers.forEach(tier => {
    const items = MGB_PROJECTS.filter(p => (p.tier || 'Projects') === tier);
    const wrap = document.createElement('div');
    wrap.className = 'tier-block';
    wrap.innerHTML = `
      <h3 class='section-label' style="margin-bottom:12px;">${tier}</h3>
      <div class='project-grid'>
        ${items.map(p => `
          <div class='card-academic' data-reveal>
            <span class='badge badge-fg' style='margin-bottom:10px;'>${p.status || ''}</span>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            ${p.tags ? `<div class='chip-container'>${p.tags.map(t => `<span class='chip chip-muted'>${t}</span>`).join('')}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(wrap);
  });
  if (window.initScrollReveal) window.initScrollReveal();
}

// 11. News renderer: a boxy auto-scrolling ticker. The item list is duplicated
// once so the looping translateY(-50%) animation wraps seamlessly.
window.renderNews = function() {
  if (typeof MGB_NEWS === 'undefined') return;
  const container = document.getElementById('news-container');
  if (!container) return;
  const sorted = MGB_NEWS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  if (sorted.length === 0) return;

  const entryHtml = n => `
    <div class='news-entry'>
      <div class='news-meta'><span class='badge'>${n.category || ''}</span><span class='news-date'>${n.date || ''}</span></div>
      <h3 class='news-title'>${n.title}</h3>
      <p style='color:var(--muted); font-size:13.5px; margin-top:4px;'>${n.description || ''}</p>
    </div>
  `;

  const box = document.createElement('div');
  box.className = 'news-ticker';
  const track = document.createElement('div');
  track.className = 'news-ticker-track';
  track.innerHTML = `
    <div class='news-ticker-set'>${sorted.map(entryHtml).join('')}</div>
    <div class='news-ticker-set news-ticker-clone' aria-hidden='true'>${sorted.map(entryHtml).join('')}</div>
  `;
  box.appendChild(track);
  container.appendChild(box);
}

// 12. Group photo (People page). Tries a few common file extensions so it works
// whatever format the file is, e.g. 3_People.jpg or 3_People.webp.
window.renderGroupPhoto = function() {
  const container = document.getElementById('group-photo-container');
  if (!container) return;
  const candidates = ['3_People.jpg', '3_People.jpeg', '3_People.png', '3_People.webp'];

  function tryNext(i) {
    if (i >= candidates.length) return;
    const img = new Image();
    img.alt = 'MGB Lab group photo';
    img.className = 'fill-photo';
    img.onload = () => {
      container.classList.remove('photo-placeholder');
      container.innerHTML = '';
      container.appendChild(img);
    };
    img.onerror = () => tryNext(i + 1);
    img.src = adjustPath(`2_Content/1_Images/${candidates[i]}`);
  }
  tryNext(0);
}

// 13. Home page slideshow. Cycles through the photos listed in
// 2_Content/1_Images/manifest.json (falls back to the placeholder if empty).
window.renderHomeSlideshow = function() {
  const container = document.getElementById('home-slideshow');
  const images = window.MGB_LAB_IMAGES || [];
  if (!container || images.length === 0) return;
  container.classList.remove('photo-placeholder');
  const posterFor = (src) => src.replace(/\.(mp4|webm)$/i, '-poster.jpg');
  const mediaTag = (src, label) => /\.(mp4|webm)$/i.test(src)
    ? `<video src='${src}' poster='${posterFor(src)}' autoplay muted loop playsinline aria-label='${label}'></video>`
    : `<img src='${src}' alt='${label}'>`;

  container.innerHTML = images.slice(0, 5).map((entry, i) => {
    const cls = `slide-fade${i === 0 ? ' active' : ''}`;
    const parts = entry.split('+');
    if (parts.length > 1) {
      return `<div class='${cls} slide-combo'>${parts.map((src, j) => mediaTag(src, `MGB Lab video ${i + 1}.${j + 1}`)).join('')}</div>`;
    }
    return mediaTag(entry, `MGB Lab photo ${i + 1}`).replace(/(<img|<video)/, `$1 class='${cls}'`);
  }).join('');
  const imgs = container.querySelectorAll(':scope > .slide-fade');
  if (imgs.length <= 1) return;

  let cur = 0;
  let timer = null;
  const dots = document.createElement('div');
  dots.className = 'slide-dots';
  imgs.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to photo ${i + 1}`);
    const media = slide.classList.contains('slide-combo') ? slide.querySelector('img, video') : slide;
    const thumbSrc = media.tagName === 'VIDEO' ? media.getAttribute('poster') : media.getAttribute('src');
    dot.innerHTML = `<img src='${thumbSrc}' alt=''>`;
    dots.appendChild(dot);
  });
  container.appendChild(dots);
  const dotEls = dots.querySelectorAll('.slide-dot');

  const goTo = (i) => {
    imgs[cur].classList.remove('active');
    dotEls[cur].classList.remove('active');
    cur = (i + imgs.length) % imgs.length;
    imgs[cur].classList.add('active');
    dotEls[cur].classList.add('active');
  };
  const startAutoplay = () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), 8000);
  };
  startAutoplay();

  dotEls.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAutoplay(); }));

  let touchStartX = 0, touchStartY = 0, swiping = false;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    swiping = true;
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (!swiping) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault();
  }, { passive: false });
  container.addEventListener('touchend', (e) => {
    if (!swiping) return;
    swiping = false;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? cur + 1 : cur - 1);
    startAutoplay();
  });

  let dragStartX = 0, dragging = false;
  container.style.cursor = 'grab';
  container.addEventListener('mousedown', (e) => {
    dragStartX = e.clientX;
    dragging = true;
    container.style.cursor = 'grabbing';
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    e.preventDefault();
  });
  window.addEventListener('mouseup', (e) => {
    if (!dragging) return;
    dragging = false;
    container.style.cursor = 'grab';
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? cur + 1 : cur - 1);
    startAutoplay();
  });
}

// 14. Join Us form
window.initJoinForm = function() {
  const form = document.getElementById('join-form');
  if (!form) return;
  const statusEl = document.getElementById('join-status');
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = 'Submitting...';
    try {
      await fetch(form.action, { method: 'POST', mode: 'no-cors', body: new FormData(form) });
      form.style.display = 'none';
      if (statusEl) {
        statusEl.innerHTML = '<h3 style="color:var(--emerald); margin-bottom:16px;">Application Received</h3><p style="color:var(--muted)">Thank you for your interest. We will review your profile and get back to you shortly.</p>';
        statusEl.style.display = 'block';
      }
    } catch (err) {
      btn.disabled = false;
      btn.innerText = 'Submit Application';
      if (statusEl) {
        statusEl.innerHTML = '<p style="color:#c0392b">Something went wrong sending your application. Please try again, or email us directly.</p>';
        statusEl.style.display = 'block';
      }
    }
  });
}

// 14b. Join Us popup (open and close)
window.openJoinModal = function() {
  const o = document.getElementById('join-overlay');
  if (!o) return;
  o.classList.add('join-open');
  document.body.style.overflow = 'hidden';
};
window.closeJoinModal = function() {
  const o = document.getElementById('join-overlay');
  if (!o) return;
  o.classList.remove('join-open');
  document.body.style.overflow = '';
};
document.addEventListener('DOMContentLoaded', () => {
  const o = document.getElementById('join-overlay');
  if (!o) return;
  o.addEventListener('click', e => { if (e.target === o) closeJoinModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && o.classList.contains('join-open')) closeJoinModal(); });
});

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initScrollReveal();
  initTooltipLongPress();
});


// ----------------------------------------------------------------
// 15. Single-page scroll routing
// All page sections live on one continuous page. #blog-post is the
// one exception: an overlay reached by clicking a blog card, not a
// section you scroll to. Nav links smooth-scroll to their section,
// and a scroll-spy keeps the matching nav link highlighted as the
// visitor scrolls past each section.
// ----------------------------------------------------------------
function handleRouting() {
  const hash = window.location.hash || '#home';
  const key = hash.substring(1);
  document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
  if (key === 'blog-post') {
    const target = document.getElementById('page-blog-post');
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }
  const target = document.getElementById('page-' + key);
  if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  else window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', handleRouting);
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash && hash !== '#home') setTimeout(handleRouting, 400);
  else handleRouting();
});

function initSectionNav() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    const key = hash.substring(1);
    if (key === 'blog-post' || !key) return;
    const target = document.getElementById('page-' + key);
    if (!target) return;
    e.preventDefault();
    history.pushState(null, '', hash);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(l => l.classList.toggle('active', l.getAttribute('href') === hash));
  });

  const sections = ['home', 'projects', 'people', 'publications', 'blogs-news']
    .map(k => document.getElementById('page-' + k)).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const hash = '#' + entry.target.id.replace('page-', '');
      document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(l => l.classList.toggle('active', l.getAttribute('href') === hash));
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}
document.addEventListener('DOMContentLoaded', initSectionNav);


// ----------------------------------------------------------------
// 16. Language switcher: a single button that toggles the page
// between English and Danish, using the Google Translate widget
// loaded at the bottom of index.html.
// ----------------------------------------------------------------
const LANGS = [
  { code: 'en', flag: 'gb', label: 'EN' },
  { code: 'da', flag: 'dk', label: 'DA' }
];

window.toggleLanguage = function() {
  const current = document.querySelectorAll('.lang-toggle-btn')[0]?.dataset.lang || 'en';
  const next = current === 'en' ? LANGS[1] : LANGS[0];
  changeLanguage(next.code);
};

window.changeLanguage = function(code) {
  const s = document.querySelector('.goog-te-combo');
  if (s) {
    s.value = code;
    s.dispatchEvent(new Event('change'));
  }
  const l = LANGS.find(x => x.code === code) || LANGS[0];
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.dataset.lang = l.code;
    btn.setAttribute('data-tip', l.code === 'en' ? 'Switch to Danish' : 'Switch to English');
    const img = btn.querySelector('img');
    if (img) {
      img.src = `https://flagcdn.com/w40/${l.flag}.png`;
      img.alt = l.label;
    }
  });
};


// ----------------------------------------------------------------
// 17. Small UX touches: the footer copyright year, and the
// back-to-top button with its circular scroll-progress ring.
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Back to top button: the ring around it fills in as the page scrolls
  const backToTop = document.getElementById('scroll-to-top');
  const ptCircle = document.querySelector('.progress-ring__circle');
  let ptCircumference = 0;
  if (ptCircle) {
    const radius = ptCircle.r.baseVal.value;
    ptCircumference = 2 * Math.PI * radius;
    ptCircle.style.strokeDasharray = `${ptCircumference} ${ptCircumference}`;
    ptCircle.style.strokeDashoffset = ptCircumference;
  }
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  let ptScrolling = false;
  window.addEventListener('scroll', () => {
    if (ptScrolling) return;
    ptScrolling = true;
    window.requestAnimationFrame(() => {
      if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 300);
      if (ptCircle && ptCircumference) {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollTotal > 0 ? (window.scrollY / scrollTotal) : 0;
        ptCircle.style.strokeDashoffset = ptCircumference - (pct * ptCircumference);
      }
      ptScrolling = false;
    });
  }, { passive: true });
});


// ----------------------------------------------------------------
// 18. Command palette search, opened with the search icon in the
// navbar or the Ctrl/Cmd+K keyboard shortcut.
// ----------------------------------------------------------------
(function () {
  const RECENT_KEY = 'mgb_srch_recent_v1';
  let idx = [], results = [], active = -1, debTimer = null, indexed = false;

  const ov = () => document.getElementById('srch-overlay');
  const inp = () => document.getElementById('srch-input');
  const body = () => document.getElementById('srch-body');

  const SECTIONS = [
    { id: 'research', label: 'Research', icon: 'fas fa-dna', sel: '#research-themes-container' },
    { id: 'reaction', label: 'Reaction Pipeline', icon: 'fas fa-atom', sel: '#reaction-container' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-flask', sel: '#projects-container' },
    { id: 'people', label: 'People', icon: 'fas fa-users', sel: '#people-container' },
    { id: 'publications', label: 'Publications', icon: 'fas fa-book-open', sel: '#publications-container' },
    { id: 'blogs', label: 'Blog', icon: 'fas fa-newspaper', sel: '#blogs-container' },
    { id: 'news', label: 'News', icon: 'fas fa-bullhorn', sel: '#news-container' }
  ];
  const CARD_SEL = '.card-academic,.profile-card,.pub-entry,.blog-card,.news-entry';

  function buildIndex() {
    if (indexed) return;
    indexed = true;
    idx = [];
    SECTIONS.forEach(sec => {
      const root = document.querySelector(sec.sel);
      if (!root) return;
      root.querySelectorAll(CARD_SEL).forEach(card => {
        if (card.closest('.news-ticker-clone')) return;
        const titleEl = card.querySelector('h3, h4');
        const title = (titleEl ? titleEl.textContent : card.textContent).trim().slice(0, 100);
        if (!title || title.length < 2) return;
        idx.push({ title, excerpt: cardExcerpt(card), el: card, section: sec.label, icon: sec.icon });
      });
    });
  }

  function cardExcerpt(card) {
    const clone = card.cloneNode(true);
    clone.querySelectorAll('button, .chip-container, .profile-chips, .badge, .profile-links, h3, h4').forEach(n => n.remove());
    return clone.textContent.replace(/\s+/g, ' ').trim().slice(0, 140);
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function mark(text, q) {
    if (!q) return esc(text);
    return esc(text).replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
  }

  function scoreItem(item, ql) {
    const tl = item.title.toLowerCase();
    const el = (item.excerpt || '').toLowerCase();
    const words = ql.split(/\s+/).filter(w => w.length > 1);
    if (words.length === 0) return (tl.includes(ql) || el.includes(ql)) ? 10 : 0;
    let s = 0, matchCount = 0;
    if (tl === ql) s += 100; else if (tl.includes(ql)) s += 50;
    words.forEach(w => {
      if (tl.includes(w)) { s += 20; matchCount++; }
      else if (el.includes(w)) { s += 5; matchCount++; }
    });
    if (words.length > 1 && matchCount < words.length) return 0;
    return s;
  }

  function renderBody(q) {
    const b = body(); if (!b) return;
    if (!q) { b.innerHTML = ''; return; }
    if (!results.length) { b.innerHTML = `<div class="srch-empty"><i class="fas fa-circle-xmark"></i>No results for "<strong>${esc(q)}</strong>"</div>`; return; }
    const groups = {};
    results.forEach(r => { (groups[r.section] = groups[r.section] || []).push(r); });
    let html = '', gi = 0;
    Object.entries(groups).forEach(([sec, items]) => {
      html += `<div class="srch-section-hd">${esc(sec)}<span class="srch-badge">${items.length}</span></div>`;
      items.forEach(item => {
        const i = gi++;
        html += `<div class="srch-item${i === active ? ' srch-active' : ''}" data-idx="${i}">
          <div class="srch-item-icon"><i class="${item.icon}"></i></div>
          <div class="srch-item-body">
            <div class="srch-item-title">${mark(item.title.slice(0, 80), q)}</div>
            ${item.excerpt ? `<div class="srch-item-excerpt">${mark(item.excerpt.slice(0, 120), q)}</div>` : ''}
          </div>
          <span class="srch-item-cat">${esc(sec)}</span>
        </div>`;
      });
    });
    b.innerHTML = html;
    b.querySelectorAll('.srch-item[data-idx]').forEach(el => el.addEventListener('click', () => navigateTo(parseInt(el.dataset.idx), q)));
  }

  function runSearch(q) {
    buildIndex();
    active = -1;
    q = q.trim();
    if (!q) { results = []; renderBody(''); return; }
    const ql = q.toLowerCase();
    results = idx.map(item => ({ ...item, _s: scoreItem(item, ql) })).filter(item => item._s > 0).sort((a, b) => b._s - a._s).slice(0, 40);
    renderBody(q);
  }

  function getRecent() { try { return JSON.parse(sessionStorage.getItem(RECENT_KEY) || '[]'); } catch { return []; } }
  function addRecent(q) {
    if (!q || q.length < 2) return;
    let r = getRecent().filter(x => x !== q);
    r.unshift(q); r = r.slice(0, 5);
    try { sessionStorage.setItem(RECENT_KEY, JSON.stringify(r)); } catch {}
  }

  function navigateTo(i, q) {
    if (i < 0 || i >= results.length) return;
    const item = results[i];
    addRecent(q || (inp() && inp().value.trim()));
    closeSearchModal();
    const target = item.el;
    const doScroll = () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('srch-flash');
      setTimeout(() => target.classList.remove('srch-flash'), 1800);
    };
    const pageView = target.closest('.page-view');
    if (pageView) {
      const hash = '#' + pageView.id.replace('page-', '');
      if (window.location.hash !== hash) {
        window.location.hash = hash;
        setTimeout(doScroll, 200);
      } else {
        doScroll();
      }
    } else {
      doScroll();
    }
  }

  function moveActive(delta) {
    if (!results.length) return;
    active = Math.max(0, Math.min(results.length - 1, active + delta));
    const items = body() && body().querySelectorAll('.srch-item[data-idx]');
    if (!items) return;
    items.forEach((el, i) => el.classList.toggle('srch-active', i === active));
    if (items[active]) items[active].scrollIntoView({ block: 'nearest' });
  }

  window.openSearchModal = function () {
    buildIndex();
    const o = ov(); if (!o) return;
    o.classList.add('srch-open');
    setTimeout(() => { const i = inp(); if (i) { i.focus(); i.select(); } }, 80);
    runSearch(inp() ? inp().value : '');
  };
  window.closeSearchModal = function () {
    const o = ov(); if (!o) return;
    o.classList.remove('srch-open');
    setTimeout(() => { const i = inp(); if (i) i.value = ''; results = []; active = -1; }, 220);
  };

  function wireEvents() {
    const i = inp(), o = ov(); if (!i || !o) return;
    i.addEventListener('input', () => { clearTimeout(debTimer); debTimer = setTimeout(() => runSearch(i.value), 120); });
    i.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveActive(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (active >= 0) navigateTo(active, i.value.trim()); else if (results.length) navigateTo(0, i.value.trim()); }
      else if (e.key === 'Escape') closeSearchModal();
    });
    o.addEventListener('click', e => { if (e.target === o) closeSearchModal(); });
    document.querySelectorAll('.srch-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        closeSearchModal();
        window.location.hash = '#' + pill.dataset.section;
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireEvents);
  else wireEvents();

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const o = ov();
      if (o && o.classList.contains('srch-open')) closeSearchModal(); else openSearchModal();
    }
  });
})();