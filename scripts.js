// ═══════════════════════════════════════════════════════════════════════════
// MGB Lab site — one script file: content data, the data loader, and the app.
//
// STATIC CONTENT below (publications, news, research, projects, reaction, facts)
// — edit these arrays directly.
//
// People and blog posts are NOT here — they live one-file-per-item in
// 1_People/ and 2_Content/2_Blogs/ (see the README.md in each of those folders) so new
// entries can be added without touching this file.
// ═══════════════════════════════════════════════════════════════════════════

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
  }
];
const MGB_FACTS        = [
  {
    "stat": "130 kcal/mol",
    "label": "C–F bond strength",
    "detail": "The strongest single bond in organic chemistry — roughly 30% stronger than C–H."
  },
  {
    "stat": "1.35 Å",
    "label": "C–F bond length",
    "detail": "The shortest carbon bond found in nature, which is part of why it resists attack."
  },
  {
    "stat": "<1%",
    "label": "Microbes ever cultured",
    "detail": "Fewer than 1% of environmental microorganisms grow under standard lab conditions — most PFAS-active enzymes are still undiscovered."
  },
  {
    "stat": "3.2M",
    "label": "Sequences mined",
    "detail": "Environmental protein sequences screened in our most recent metagenomic dataset."
  }
];
const MGB_NEWS         = [
  {
    "title": "MGB Lab Awarded €2M ERC Consolidator Grant",
    "date": "2025-05-15",
    "category": "Grant",
    "description": "Tue Nielsen receives ERC funding to expand research on enzymatic defluorination of recalcitrant PFAS.",
    "content": "The grant will support three new postdocs and two PhD students over the next five years."
  },
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
const MGB_PROJECTS     = [
  {
    "id": "facds-pfas27",
    "tier": "Tier 1 — Enzyme Screening",
    "title": "FAcDs × PFAS-27 Defluorination",
    "status": "Active",
    "description": "Fluoroacetate dehalogenase (FAcD) screening against the PFAS-27 priority compound panel — structure prediction, phylogenetic analysis, and MD/QM-MM mechanistic study.",
    "tags": ["FAcDs", "PFAS-27", "QM/MM"]
  },
  {
    "id": "hads-pfas27",
    "tier": "Tier 1 — Enzyme Screening",
    "title": "HADs × PFAS-27 Defluorination",
    "status": "Active",
    "description": "Haloacid dehalogenase (HAD) screening against PFAS-27 — sequence clustering, Boltz-2 structure production, and experimental validation.",
    "tags": ["HADs", "PFAS-27", "Boltz-2"]
  },
  {
    "id": "whole-proteome-tfa",
    "tier": "Tier 2 — Proteome-Wide Discovery",
    "title": "Whole-Proteome TFA Defluorination",
    "status": "Active",
    "description": "Proteome-wide screening for enzymes active against trifluoroacetic acid (TFA), built on the lab's EVA production pipeline.",
    "tags": ["TFA", "Proteome-wide", "EVA Pipeline"]
  }
];
// ═══════════════════════════════════════════════════════════════════════════
// DATA LOADER — fetches people, blogs, and lab photos from their per-file
// folders at page load. Exposes window.MGB_DATA_READY (a promise) so render
// functions below can wait for the data before running.
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  async function loadPeople() {
    try {
      // Manifest is grouped by category folder: { "2_Postdocs": ["asal-forouzandeh", ...], ... }
      const manifest = await fetch(adjustPath('1_People/manifest.json')).then(r => r.json());
      const groups = await Promise.all(Object.entries(manifest).map(async ([group, ids]) => {
        const members = await Promise.all(ids.map(id =>
          fetch(adjustPath(`1_People/${group}/${id}.json`)).then(r => r.json())
            .then(p => Object.assign({}, p, { role_group: group }))
        ));
        return members;
      }));
      window.MGB_PEOPLE = groups.flat();
    } catch (e) {
      console.error('Failed to load people:', e);
      window.MGB_PEOPLE = [];
    }
  }

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

  async function loadLabImages() {
    try {
      const manifest = await fetch(adjustPath('2_Content/1_Images/manifest.json')).then(r => r.json());
      window.MGB_LAB_IMAGES = manifest.map(f => adjustPath(`2_Content/1_Images/${f}`));
    } catch (e) {
      window.MGB_LAB_IMAGES = [];
    }
  }

  window.MGB_DATA_READY = Promise.all([loadPeople(), loadBlogs(), loadLabImages()]);
})();

// ═══════════════════════════════════════════════════════════════════════════
// APP — theme, nav, search, router, and all section renderers
// ═══════════════════════════════════════════════════════════════════════════

function adjustPath(p) {
  if (!p) return p;
  if (p.startsWith('http')) return p;
  const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/KU-MGB/') || window.location.pathname.endsWith('/KU-MGB') || window.location.pathname === '/';
  return isRoot ? p : '../' + p;
}

// 1. Theme (dark/light) — light is default
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

// 2. Navbar & Mobile Menu
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
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(l => l.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.classList.remove('open');
    }));
  }
}

// 3. Scroll Reveal
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

// 4. Simple Markdown
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

// Avatar helper — real photo, or a coloured initials circle as fallback
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

// 5. People Renderer
window.renderPeople = function() {
  if (typeof MGB_PEOPLE === 'undefined') return;
  const CATEGORIES = [
    { id: '1_Faculty', label: 'Group Leader' },
    { id: '2_Postdocs', label: 'Postdocs' },
    { id: '3_PhD', label: 'PhD Students' },
    { id: '4_Masters', label: 'MSc Students' },
    { id: '5_Bachelors', label: 'BSc Students' },
    { id: '6_Others', label: 'Others' },
    { id: '7_Alumni', label: 'Alumni' }
  ];

  const container = document.getElementById('people-container');
  if (!container) return;

  CATEGORIES.forEach(cat => {
    const members = MGB_PEOPLE.filter(p => p.role_group === cat.id);
    if (members.length === 0) return;

    const gridModifier = members.length === 1 ? ' people-grid-solo' : members.length === 2 ? ' people-grid-duo' : '';
    const section = document.createElement('div');
    section.className = 'people-section';
    section.innerHTML = `
      <h3 class='section-label' style="margin-bottom: 14px;">${cat.label}</h3>
      <div class='people-grid${gridModifier}'>
        ${members.map(p => `
          <div class='profile-card' data-reveal>
            <div class='profile-header'>
              <div class='profile-header-left'>
                ${personAvatarHtml(p)}
                <div>
                  <h3 class='profile-name'>${p.name || ''}</h3>
                  <div class='profile-title'>${p.role || ''}</div>
                </div>
              </div>
              ${(p.email || p.orcid || p.website) ? `<div class='profile-links'>
                ${p.email ? `<a href='mailto:${p.email}' class='icon-link' data-tip='Email' aria-label='Email'><i class='fas fa-envelope'></i></a>` : ''}
                ${p.orcid ? `<a href='https://orcid.org/${p.orcid}' target='_blank' class='icon-link' data-tip='ORCID' aria-label='ORCID'><i class='fab fa-orcid'></i></a>` : ''}
                ${p.website ? `<a href='${p.website}' target='_blank' class='icon-link' data-tip='Website' aria-label='Website'><i class='fas fa-globe'></i></a>` : ''}
              </div>` : ''}
            </div>
            ${p.bio ? `<p class='profile-bio'>${bioExcerpt(p.bio)}</p>` : ''}
            ${p.tags ? `<div class='profile-chips'>${p.tags.slice(0, 3).map(t => `<span class='chip chip-muted'>${t}</span>`).join('')}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(section);
  });
  if (window.initScrollReveal) window.initScrollReveal();
}

// 6. Blogs Renderer (preview list)
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
    const el = document.createElement('a');
    el.href = `?id=${b.id}#blog-post`;
    el.className = 'blog-card';
    el.setAttribute('data-reveal', '');
    el.innerHTML = `
      <div class='blog-cover'>
        ${b.cover ? `<img src='${adjustPath(b.cover)}' alt='cover'>` : ''}
      </div>
      <div class='blog-body'>
        <div class='blog-date'>${b.date || ''} • ${b.category || ''}</div>
        <h3 class='blog-title'>${b.title || ''}</h3>
        <p class='blog-desc line-clamp-3'>${b.description || ''}</p>
        <div class='text-link' style="margin-top:auto;">Read more &rarr;</div>
      </div>
    `;
    grid.appendChild(el);
  });
  container.appendChild(grid);
  if (window.initScrollReveal) window.initScrollReveal();
}

// 7. Blog Post Renderer — reads ?id=<slug> from the URL (hash is #blog-post)
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

// 8. Publications Renderer
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
        ${pub.venue ? `<span class='pub-venue'>${pub.venue}</span>` : ''}
      </div>
      <h3 class='pub-title'>${pub.title}</h3>
      ${pub.authors ? `<p class='pub-authors'>${pub.authors.join(', ')}</p>` : ''}
      ${pub.tags ? `<div class='chip-container' style="margin-top:8px;">${pub.tags.map(t => `<span class='chip chip-muted'>${t}</span>`).join('')}</div>` : ''}
      <div class='pub-actions'>
        ${pub.doi ? `<a href='https://doi.org/${pub.doi}' target='_blank' class='text-link'>DOI &rarr;</a>` : ''}
      </div>
    `;
    container.appendChild(el);
  });
  if (window.initScrollReveal) window.initScrollReveal();
}

// 9. Research Pillars Renderer ("How MGB Works")
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

// 9b. Reaction Pipeline Renderer ("Molecular Dehalogenation")
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

// 10. Projects Renderer (Tier / category grid)
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

// 11. News Renderer
window.renderNews = function() {
  if (typeof MGB_NEWS === 'undefined') return;
  const container = document.getElementById('news-container');
  if (!container) return;

  MGB_NEWS.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).forEach(n => {
    const el = document.createElement('div');
    el.className = 'news-entry';
    el.setAttribute('data-reveal', '');
    el.innerHTML = `
      <div class='news-meta'><span class='badge'>${n.category || ''}</span><span class='news-date'>${n.date || ''}</span></div>
      <h3 class='news-title'>${n.title}</h3>
      <p style='color:var(--muted); font-size:13.5px; margin-top:4px;'>${n.description || ''}</p>
    `;
    container.appendChild(el);
  });
  if (window.initScrollReveal) window.initScrollReveal();
}

// 12. Curiosity Facts Renderer — compact stat strip (used in the home banner)
window.renderFacts = function() {
  if (typeof MGB_FACTS === 'undefined') return;
  const container = document.getElementById('facts-container');
  if (!container) return;

  container.innerHTML = MGB_FACTS.map(f => `
    <div class='stat-item' data-tip="${f.detail}">
      <div class='stat-value'>${f.stat}</div>
      <div class='stat-label'>${f.label}</div>
    </div>
  `).join('');
}

// 14. Latest news callout (home banner)
window.renderLatestNewsCallout = function() {
  if (typeof MGB_NEWS === 'undefined') return;
  const container = document.getElementById('latest-news-callout');
  if (!container) return;
  const latest = MGB_NEWS.slice().sort((a, b) => (a.date < b.date ? 1 : -1))[0];
  if (!latest) return;
  container.innerHTML = `
    <div class='callout'>
      <div class='callout-title'>${latest.title}</div>
      <p>${latest.description || ''}</p>
    </div>
  `;
}

// 15. Group photo (People page) — tries a few common extensions so it works
// whatever format the file is, e.g. 3_group.jpg or 3_group.webp.
window.renderGroupPhoto = function() {
  const container = document.getElementById('group-photo-container');
  if (!container) return;
  const candidates = ['3_group.jpg', '3_group.jpeg', '3_group.png', '3_group.webp'];

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

// 16. Home page slideshow — cycles through 3-5 photos listed in
// 2_Content/1_Images/manifest.json (falls back to the placeholder if empty).
window.renderHomeSlideshow = function() {
  const container = document.getElementById('home-slideshow');
  const images = window.MGB_LAB_IMAGES || [];
  if (!container || images.length === 0) return;
  container.classList.remove('photo-placeholder');
  container.innerHTML = images.slice(0, 5).map((src, i) =>
    `<img src='${src}' class='slide-fade${i === 0 ? ' active' : ''}' alt='MGB Lab photo ${i + 1}'>`
  ).join('');
  const imgs = container.querySelectorAll('img');
  if (imgs.length <= 1) return;

  let cur = 0;
  let timer = null;
  const dots = document.createElement('div');
  dots.className = 'slide-dots';
  imgs.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to photo ${i + 1}`);
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
    timer = setInterval(() => goTo(cur + 1), 4000);
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

// 13. Join Form
window.initJoinForm = function() {
  const form = document.getElementById('join-form');
  if (!form) return;
  const statusEl = document.getElementById('join-status');
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = 'Submitting...';
    setTimeout(() => {
      form.style.display = 'none';
      if(statusEl) {
        statusEl.innerHTML = '<h3 style="color:var(--emerald); margin-bottom:16px;">Application Received</h3><p style="color:var(--muted)">Thank you for your interest. We will review your profile and get back to you shortly.</p>';
        statusEl.style.display = 'block';
      }
    }, 1500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initScrollReveal();
});


// ==========================================
// PAGE ROUTER — each nav link shows only its own section.
// The logo always returns to #home; there is no separate Home nav link.
// ==========================================
function handleRouting() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
  const target = document.getElementById('page-' + hash.substring(1)) || document.getElementById('page-home');
  target.classList.add('active');

  document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', handleRouting);
document.addEventListener('DOMContentLoaded', handleRouting);


// ==========================================
// LANGUAGE SWITCHER — a single EN ⇄ DA toggle button
// ==========================================
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


// ==========================================
// UX ENHANCEMENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Back to top — circular scroll-progress ring
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


// ==========================================
// COMMAND-PALETTE SEARCH (Ctrl/Cmd+K)
// ==========================================
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
