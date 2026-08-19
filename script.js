// ==========================================
// 1. EDITE SUAS HABILIDADES (SKILLS) AQUI
// ==========================================
const SKILLS = [
  { name: 'HTML', cat: 'frontend' },
  { name: 'CSS', cat: 'frontend' },
  { name: 'JavaScript', cat: 'frontend' },
  { name: 'TypeScript', cat: 'frontend' },
  { name: 'React', cat: 'frontend' },
  { name: 'Next.js', cat: 'frontend' },
  { name: 'Node.js', cat: 'backend' },
  { name: 'Python', cat: 'backend' },
  { name: 'APIs REST', cat: 'backend' },
  { name: 'PostgreSQL', cat: 'database' },
  { name: 'MySQL', cat: 'database' },
  { name: 'Git', cat: 'tools' },
  { name: 'GitHub', cat: 'tools' },
  { name: 'Docker', cat: 'tools' },
  { name: 'VS Code', cat: 'tools' },
];

// ==========================================
// 2. EDITE SEUS PROJETOS AQUI
// ==========================================
const PROJECTS = [
  {
    name: 'E-commerce Inteligente',
    cat: 'Aplicação Web',
    desc: 'Plataforma completa de vendas com checkout transparente e painel de controle.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    status: 'Em andamento',
  },
  {
    name: 'API Financeira',
    cat: 'API / Backend',
    desc: 'Microsserviço escalável para conciliação bancária automática em tempo real.',
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    status: 'Planos Futuros',
  },
  {
    name: 'Gerenciador de Tarefas',
    cat: 'Produto Full-stack',
    desc: 'SaaS estilo Kanban com atualização via WebSockets para times remotos.',
    tech: ['Next.js', 'Prisma', 'Vercel'],
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
    title: 'Bacharel em Ciência da Computação',
    org: 'Centro Educacional Afya São Lucas',
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
    .filter(s => filter === 'all' || s.cat === filter)
    .map(s => `<div class="skill-card"><div class="name">${s.name}</div><div class="cat">${labelCat(s.cat)}</div></div>`)
    .join('');
}
function labelCat(cat) {
  return { frontend: 'Frontend', backend: 'Backend', database: 'Banco de Dados', tools: 'Ferramentas' }[cat] || cat;
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
        <span 
          class="timeline-language"
          style="--lang-color: ${lang.color};"
        >
        <img 
          class="language-icon" 
          src="${lang.icon}" 
          alt="${lang.name}"
        >
          <span>${lang.name}</span>
        </span>
      `).join('') : ''}
    </div>
  </div>
`).join('');

// Ano Atual
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito de rolagem na Navbar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

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

// Efeito de digitação do Terminal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const terminalBody = document.getElementById('terminalBody');
const commands = [
  { prompt: '~ $', text: 'whoami', output: 'software developer' },
  { prompt: '~ $', text: 'cat stack.txt', output: 'React · TypeScript · Node.js · PostgreSQL' },
  { prompt: '~ $', text: 'git commit -m "ship it"', output: '1 file changed, ideas turned into code' },
  { prompt: '~ $', text: 'npm run build', output: '✓ build concluído em 1.2s' },
];

async function typeTerminal() {
  if (reduceMotion) {
    terminalBody.innerHTML = commands.map(c => `
      <div class="terminal-line"><span class="terminal-prompt">${c.prompt}</span><span>${c.text}</span></div>
      <div class="terminal-line"><span class="terminal-output">${c.output}</span></div>
    `).join('');
    return;
  }
  while (true) {
    terminalBody.innerHTML = '';
    for (const c of commands) {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      const promptSpan = document.createElement('span');
      promptSpan.className = 'terminal-prompt';
      promptSpan.textContent = c.prompt;
      const textSpan = document.createElement('span');
      const caret = document.createElement('span');
      caret.className = 'caret';
      line.appendChild(promptSpan);
      line.appendChild(textSpan);
      line.appendChild(caret);
      terminalBody.appendChild(line);

      for (let i = 0; i < c.text.length; i++) {
        textSpan.textContent += c.text[i];
        await sleep(28 + Math.random() * 35);
      }
      caret.remove();
      await sleep(250);

      const out = document.createElement('div');
      out.className = 'terminal-line';
      out.innerHTML = `<span class="terminal-output">${c.output}</span>`;
      terminalBody.appendChild(out);
      await sleep(650);
    }
    await sleep(1400);
  }
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
typeTerminal();

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

