/* ============================================================
   MARCENARIA SITE — Lógica Principal
   ============================================================ */

let currentLightboxProject = null;

// ── INICIALIZAÇÃO ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderPortfolio('Todos');
    renderCatalog('Todas');
    setupMobileMenu();
    setupQuoteForm();
    setupKeyboardNavigation();
    setupScrollReveal();
});

// ── APLICAR CONFIG DO CLIENTE ────────────────────────────────
function applyConfig() {
    document.title = CONFIG.seoTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', CONFIG.seoDescription);

    const metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys) metaKeys.setAttribute('content', CONFIG.seoKeywords);

    document.querySelectorAll('[data-cfg]').forEach(el => {
        const key = el.dataset.cfg;
        if (CONFIG[key] !== undefined) {
            el.textContent = CONFIG[key];
        }
    });

    document.querySelectorAll('[data-cfg-href]').forEach(el => {
        const key = el.dataset.cfgHref;
        if (key === 'whatsappOrcamento') {
            el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento de móveis planejados.')}`;
        } else if (key === 'whatsappContato') {
            el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto de móveis planejados.')}`;
        } else if (key === 'telefone') {
            el.href = `tel:${CONFIG.telefoneLink}`;
        } else if (key === 'instagram') {
            el.href = CONFIG.instagramUrl;
        } else if (key === 'whatsappFooter') {
            el.href = `https://wa.me/${CONFIG.whatsapp}`;
        } else if (key === 'mapaLink') {
            el.href = CONFIG.mapaLink;
        }
    });

    const mapaIframe = document.getElementById('mapa-iframe');
    if (mapaIframe) mapaIframe.src = CONFIG.mapaEmbedUrl;
}

// ── PORTFÓLIO (PÁGINA 1) ────────────────────────────────────
function renderPortfolio(filterCategory) {
    const grid = document.getElementById('portfolio-grid');
    const filtered = filterCategory === 'Todos'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter(item => item.category === filterCategory);

    document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
        if (btn.dataset.filter === filterCategory) {
            btn.classList.add('bg-stone-900', 'text-stone-50');
            btn.classList.remove('text-stone-600');
        } else {
            btn.classList.remove('bg-stone-900', 'text-stone-50');
            btn.classList.add('text-stone-600');
        }
    });

    grid.innerHTML = filtered.map(item => `
        <article class="group cursor-pointer reveal" onclick="openLightbox(${item.id})">
            <div class="image-zoom-container relative rounded-sm bg-stone-200 aspect-[16/11] mb-4 border editorial-border">
                <img
                    src="${item.image}"
                    alt="${item.title} - Referência ilustrativa"
                    class="w-full h-full object-cover"
                    loading="lazy"
                >
                <div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-50 px-3 py-1.5 text-[11px] uppercase tracking-wider rounded-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    Ampliar detalhes +
                </div>
            </div>
            <div class="flex items-baseline justify-between gap-4">
                <div>
                    <span class="text-[11px] uppercase tracking-[0.18em] text-wood block mb-1">${item.category} • Referência</span>
                    <h3 class="font-serif text-2xl text-stone-900 group-hover:text-wood transition-colors">${item.title}</h3>
                </div>
            </div>
            <p class="text-sm text-stone-600 font-light mt-2 line-clamp-2">${item.description}</p>
        </article>
    `).join('');

    observeReveals();
}

function filterPortfolio(category) {
    renderPortfolio(category);
}

function filterAndGoToPortfolio(category) {
    renderPortfolio(category);
    const section = document.getElementById('portfolio');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// ── CATÁLOGO (PÁGINA 2) ─────────────────────────────────────
function renderCatalog(filterCategory) {
    const feed = document.getElementById('catalog-feed');
    const filtered = filterCategory === 'Todas'
        ? CATALOG_POSTS
        : CATALOG_POSTS.filter(post => post.category === filterCategory);

    document.querySelectorAll('.catalog-filter-btn').forEach(btn => {
        if (btn.dataset.catFilter === filterCategory) {
            btn.classList.add('bg-stone-900', 'text-stone-50');
            btn.classList.remove('text-stone-600');
        } else {
            btn.classList.remove('bg-stone-900', 'text-stone-50');
            btn.classList.add('text-stone-600');
        }
    });

    feed.innerHTML = filtered.map(post => `
        <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b editorial-border last:border-b-0 reveal">
            <div class="lg:col-span-7">
                <div class="rounded-sm overflow-hidden bg-stone-200 border editorial-border">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-[300px] sm:h-[420px] object-cover" loading="lazy">
                </div>
            </div>
            <div class="lg:col-span-5 space-y-4">
                <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-wood">
                    <span>${post.category}</span>
                    <span>•</span>
                    <span class="text-stone-400">${post.date}</span>
                </div>
                <h2 class="font-serif text-3xl text-stone-900 leading-tight">${post.title}</h2>
                <p class="text-stone-600 font-light leading-relaxed">${post.summary}</p>
                <div class="pt-3 border-t editorial-border text-xs text-stone-700">
                    ${post.specs}
                </div>
                <div class="pt-2">
                    <button onclick="navigateToSection('orcamento')" class="text-xs uppercase tracking-widest font-medium text-stone-900 hover:text-wood inline-flex items-center gap-2 transition-colors">
                        <span>Solicitar projeto neste estilo</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    observeReveals();
}

function filterCatalog(category) {
    renderCatalog(category);
}

// ── NAVEGAÇÃO ENTRE PÁGINAS ──────────────────────────────────
function switchPage(page) {
    const pageHome = document.getElementById('page-home');
    const pageCatalog = document.getElementById('page-catalog');
    const navBtn = document.getElementById('nav-page2-btn');

    if (page === 'catalog') {
        pageHome.classList.add('hidden');
        pageCatalog.classList.remove('hidden');
        navBtn.classList.add('text-wood', 'font-medium');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        pageCatalog.classList.add('hidden');
        pageHome.classList.remove('hidden');
        navBtn.classList.remove('text-wood', 'font-medium');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function navigateToSection(sectionId) {
    const pageHome = document.getElementById('page-home');
    if (pageHome.classList.contains('hidden')) {
        switchPage('home');
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
    } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}

// ── MENU MOBILE ──────────────────────────────────────────────
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    btn.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        const isHidden = menu.classList.contains('hidden');
        toggleMobileMenu(isHidden);
    });
}

function toggleMobileMenu(show) {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    const btn = document.getElementById('mobile-menu-btn');

    if (show) {
        menu.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
    } else {
        menu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
    }
}

function mobileNav(sectionId) {
    toggleMobileMenu(false);
    navigateToSection(sectionId);
}

// ── LIGHTBOX ─────────────────────────────────────────────────
function openLightbox(itemId) {
    const item = PORTFOLIO_ITEMS.find(p => p.id === itemId);
    if (!item) return;

    currentLightboxProject = item;
    document.getElementById('lightbox-img').src = item.image;
    document.getElementById('lightbox-img').alt = item.title;
    document.getElementById('lightbox-category').textContent = item.category;
    document.getElementById('lightbox-title').textContent = item.title;
    document.getElementById('lightbox-desc').textContent = item.description;
    document.getElementById('lightbox-materials').textContent = item.materials;
    document.getElementById('lightbox-solutions').textContent = item.solutions;

    document.getElementById('lightbox-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
    document.body.style.overflow = '';
    currentLightboxProject = null;
}

function requestSimilarProject() {
    const projectTitle = currentLightboxProject ? currentLightboxProject.title : '';
    closeLightbox();
    navigateToSection('orcamento');
    if (projectTitle) {
        document.getElementById('client-desc').value =
            `Olá, gostei da referência "${projectTitle}" vista no portfólio e gostaria de conversar sobre um projeto semelhante.`;
    }
}

// ── MODAIS ───────────────────────────────────────────────────
function openPrivacyModal() {
    document.getElementById('privacy-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
    document.getElementById('privacy-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// ── TECLADO (ESC) ────────────────────────────────────────────
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closePrivacyModal();
            toggleMobileMenu(false);
        }
    });
}

// ── FORMULÁRIO → WHATSAPP ────────────────────────────────────
function setupQuoteForm() {
    const form = document.getElementById('quote-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('client-name').value.trim();
        const phone = document.getElementById('client-phone').value.trim();
        const room = document.getElementById('client-room').value;
        const city = document.getElementById('client-city').value.trim();
        const description = document.getElementById('client-desc').value.trim();

        if (!name || !phone || !room || !city) {
            feedback.textContent = "Por favor, preencha todos os campos obrigatórios marcados com (*).";
            feedback.className = "p-3.5 rounded-sm text-sm bg-red-50 text-red-800 border border-red-200 block";
            return;
        }

        feedback.textContent = "Preparando sua mensagem e abrindo o WhatsApp...";
        feedback.className = "p-3.5 rounded-sm text-sm bg-stone-200 text-stone-900 border border-stone-300 block";

        const messageLines = [
            `Olá! Gostaria de solicitar um orçamento de móveis planejados.`,
            ``,
            `*Nome:* ${name}`,
            `*Telefone:* ${phone}`,
            `*Ambiente:* ${room}`,
            `*Cidade/Bairro:* ${city}`,
            description ? `*Detalhes do projeto:* ${description}` : ``
        ].filter(Boolean).join('\n');

        const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(messageLines)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

// ── SCROLL REVEAL (animação de entrada) ──────────────────────
function setupScrollReveal() {
    observeReveals();
}

function observeReveals() {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}
