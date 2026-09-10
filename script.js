// ==========================================
// 1. EDITE SUAS HABILIDADES (SKILLS) AQUI
// ==========================================
const SKILLS = [
  { name: 'HTML', cat: 'frontend', level: 'avancado' },
  { name: 'CSS', cat: 'frontend', level: 'avancado' },
  { name: 'JavaScript', cat: 'frontend', level: 'intermediario' },
  { name: 'TypeScript', cat: 'frontend', level: 'em-aprendizado' },
  { name: 'React', cat: 'frontend', level: 'em-aprendizado' },
  { name: 'Next.js', cat: 'frontend', level: 'em-aprendizado' },
  { name: 'Node.js', cat: 'backend', level: 'intermediario' },
  { name: 'Python', cat: 'backend', level: 'intermediario' },
  { name: 'APIs REST', cat: 'backend', level: 'intermediario' },
  { name: 'PostgreSQL', cat: 'database', level: 'em-aprendizado' },
  { name: 'MySQL', cat: 'database', level: 'intermediario' },
  { name: 'Git', cat: 'tools', level: 'avancado' },
  { name: 'GitHub', cat: 'tools', level: 'avancado' },
  { name: 'Docker', cat: 'tools', level: 'em-aprendizado' },
  { name: 'VS Code', cat: 'tools', level: 'avancado' },
];

// ==========================================
// 2. EDITE SEUS PROJETOS AQUI
// ==========================================
const PROJECTS = [
  {
    name: 'Sistema de Login',
    cat: 'Full Stack',
    desc: 'Sistema de autenticação desenvolvido para estudar e implementar conceitos de desenvolvimento Full Stack, incluindo API, banco de dados, validação e autenticação de usuários.',
    tech: ['JavaScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Prisma'],
    status: 'Em Desenvolvimento'
  },
  {
    name: 'API Financeira',
    cat: 'API / Backend',
    desc: 'Microsserviço escalável para conciliação bancária automática em tempo real.',
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    status: 'Planos Futuros',
  },
  {
    name: 'E-commerce Inteligente',
    cat: 'Aplicação Web',
    desc: 'Plataforma completa de vendas com checkout transparente e painel de controle.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    status: 'Planos Futuros',
  },
  {
    name: 'Bot de Automação',
    cat: 'Ferramenta / Automação',
    desc: 'Script automatizado para extração de dados e geração de relatórios diários.',
    tech: ['Python', 'FastAPI'],
    status: 'Planos Futuros',
  },
];

// ==========================================
// 3. EDITE SUA TRAJETÓRIA / EXPERIÊNCIA AQUI
// ==========================================
const TIMELINE = [
  {
    date: '2025 - ATUAL',
    title: 'Bacharelado em Ciência da Computação',
    org: 'Centro Universitário São Lucas Afya',
    desc: 'Curso superior com foco em estudos de software, algoritmos e inteligência artificial, UX/UI, POO, Desenvolvimento Web, SGBD, Git, GitHub.',
    languages: [
      { name: 'Python',       icon: 'https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000',     color: '#3776AB' },
      { name: 'C#',           icon: 'https://img.icons8.com/?size=100&id=45490&format=png&color=000000',            color: '#239120' },
      { name: 'HTML',         icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',            color: '#E34F26' },
      { name: 'CSS',          icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',            color: '#1572B6' },
      { name: 'PostgreSQL',   icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',            color: '#4169E1' },
      { name: 'MySQL',        icon: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000',     color: '#4479A1' },
    ]
  },
  {
    date: '2026',
    title: 'Desafio Liga Jovem',
    org: 'Sebrae',
    desc: 'Desenvolvimento e apresentação de uma solução tecnológica, trabalhando desde a concepção da ideia até a implementação e apresentação do projeto para a banca avaliadora. O desafio envolveu a criação de um protótipo funcional e trabalho em equipe para empreender.',  
    cert: 'image/certificado-DLJ/certifica-semifinalista-dlj--2025.png',
    languages: [
      { name: 'HTML',         icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',            color: '#E34F26' },
      { name: 'CSS',          icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',            color: '#1572B6' },
      { name: 'JavaScript',   icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000',     color: '#F7DF1E' }
    ]
  },
  {
    date: '2024 - 2026',
    title: 'Desenvolvedor Full Stack',
    org: 'Dev Quester',
    desc: 'Curso de desenvolvimento full stack com foco em Programação Web, Banco de Dados, Docker, Git e GitHub.',
    languages: [
      { name: 'HTML',         icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',            color: '#E34F26' },
      { name: 'CSS',          icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',            color: '#1572B6' },
      { name: 'JavaScript',   icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000',     color: '#F7DF1E' },
      { name: 'TypeScript',   icon: 'https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000',     color: '#3178C6' },
      { name: 'React',        icon: 'https://img.icons8.com/?size=100&id=VXQrhy9fWtm1&format=png&color=000000',     color: '#61DAFB' },
      { name: 'Node.js',      icon: 'https://img.icons8.com/?size=100&id=f8puwbhs0kUR&format=png&color=000000',     color: '#339933' },
      { name: 'PostgreSQL',   icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',            color: '#4169E1' }
    ]
  },
  {
    date: '2022 - 2023',
    title: 'Técnico em Informática',
    org: 'Instituto Federal de Tecnologia',
    desc: 'Curso técnico com foco em estudos de redes de computadores e sistemas operacionais, incluindo programação e manutenção de computadores.',
  }
];

// ==========================================
// LÓGICA DO SITE (NÃO PRECISA MEXER ABAIXO)
// ==========================================

// Render Skills
const skillsGrid = document.getElementById('skillsGrid');
function renderSkills(filter) {
  skillsGrid.innerHTML = SKILLS
    .filter(s => filter === 'all' || s.cat === filter) // cat continua usado só pra filtrar
    .map(s => `
      <div class="skill-card">
        <div class="name">${s.name}</div>
        <div class="level level-${s.level}">${labelLevel(s.level)}</div>
      </div>
    `)
    .join('');
}
function labelLevel(level) {
  return {
    avancado: 'Avançado',
    intermediario: 'Intermediário',
    'em-aprendizado': 'Em aprendizado'
  }[level] || level;
}
renderSkills('all');

document.getElementById('skillTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.skill-tab');
  if (!btn) return;
  document.querySelectorAll('.skill-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSkills(btn.dataset.cat);
});

// Render Projects
const projectsGrid = document.getElementById('projectsGrid');
projectsGrid.innerHTML = PROJECTS.map(p => `
  <div class="project-card">
    <div class="project-thumb"><span class="ph-label">[${p.status}]</span></div>
    <div class="project-body">
      <div class="project-cat">${p.cat}</div>
      <h3 class="project-title">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
      <div class="project-links">
        <a href="#">Ver projeto →</a>
        <a href="#">GitHub →</a>
      </div>
    </div>
  </div>
`).join('');


// Render Timeline
document.getElementById('timeline').innerHTML = TIMELINE.map(t => `
  <div class="timeline-item">
    <span class="timeline-date">${t.date}</span>
    <h4>${t.title}</h4>
    <div class="org">${t.org}</div>
    <p class="timeline-desc">${t.desc}</p>

    <div class="timeline-languages">
      ${t.languages ? t.languages.map(lang => `
        <span class="timeline-language" style="--lang-color: ${lang.color};">
          <img class="language-icon" src="${lang.icon}" alt="${lang.name}">
          <span>${lang.name}</span>
        </span>
      `).join('') : ''}
    </div>

    ${t.cert ? `
      <button class="timeline-cert" data-cert="${t.cert}">
        📄 Ver certificado
      </button>
    ` : ''}
  </div>
`).join('');

// Lightbox do certificado
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalClose = document.getElementById('certModalClose');

document.getElementById('timeline').addEventListener('click', (e) => {
  const btn = e.target.closest('.timeline-cert');
  if (!btn) return;
  certModalImg.src = btn.dataset.cert;
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // trava o scroll do fundo
});

function closeCertModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

certModalClose.addEventListener('click', closeCertModal);
certModal.addEventListener('click', (e) => {
  if (e.target === certModal) closeCertModal(); // clicar fora da imagem também fecha
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal(); // tecla ESC fecha
});

// Ano Atual
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito de rolagem na Navbar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
// Scroll-spy: marca o link do menu ativo conforme a seção visível
const sections = document.querySelectorAll('main section[id], main[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  rootMargin: '-45% 0px -50% 0px', // considera "ativa" quando a seção cruza o meio da tela
  threshold: 0
});

sections.forEach(section => spyObserver.observe(section));

// Menu Mobile
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Animação de Entrada dos elementos (Scroll Reveal)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// Brilho do cursor
const glow = document.getElementById('cursor-glow');
if (window.matchMedia('(min-width:1024px)').matches) {
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.classList.add('active');
  }, { passive: true });
  window.addEventListener('mouseleave', () => glow.classList.remove('active'));
}



//Contact-Links
function copiarTexto(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("E-mail copiado!");
    })
    .catch((erro) => {
      console.error("Erro ao copiar:", erro);
    });
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      const mensagem = document.getElementById("copyMessage");

      mensagem.classList.add("show");

      setTimeout(() => {
        mensagem.classList.remove("show");
      }, 2000);
    })
    .catch((erro) => {
      console.error("Erro ao copiar:", erro);
    });
}

