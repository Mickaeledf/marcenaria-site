/* ============================================================
   MARCENARIA SITE — Dados do Portfólio e Catálogo
   Adicione / remova itens aqui para atualizar o site.
   ============================================================ */

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "Cozinha Integrada em Carvalho & Grafite",
        category: "Cozinhas",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
        materials: "MDF padrão amadeirado natural e frentes foscas em tom grafite.",
        solutions: "Ilha central com gavetões de extração total, torre quente embutida e iluminação LED sob os armários superiores.",
        description: "Composição equilibrada que integra a área de preparo ao espaço social, priorizando linhas contínuas e puxadores embutidos."
    },
    {
        id: 2,
        title: "Closet Linear com Portas em Vidro Reflecta",
        category: "Quartos e Closets",
        image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
        materials: "Estrutura interna em linho claro, perfis em alumínio bronze e iluminação vertical.",
        solutions: "Divisões internas sob medida para peças longas, calceiros deslizantes e gavetas organizadoras.",
        description: "Projeto voltado à organização visual e fácil acesso às peças, com iluminação embutida acionada por sensor."
    },
    {
        id: 3,
        title: "Painel Arquitetônico e Rack Suspenso",
        category: "Salas",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80",
        materials: "Painel ripado em madeira natural combinado a laca fosca off-white.",
        solutions: "Infraestrutura oculta para passagem de cabos, portas basculantes e nichos iluminados.",
        description: "Solução de estar que traz conforto acústico e visual, mantendo equipamentos eletrônicos discretamente acomodados."
    },
    {
        id: 4,
        title: "Estação de Trabalho e Biblioteca Residencial",
        category: "Home Office",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
        materials: "Tampo encabeçado em padrão nogueira e estante superior em tom areia fosco.",
        solutions: "Calha interna para organização de tomadas, gaveteiro com chave e prateleiras reforçadas.",
        description: "Ambiente projetado para concentração e ergonomia diária, integrando área de leitura e trabalho."
    },
    {
        id: 5,
        title: "Recepção e Sala de Atendimento Corporativo",
        category: "Comercial e Corporativo",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
        materials: "Revestimento amadeirado vertical e balcão com acabamento fosco de alta resistência.",
        solutions: "Balcão de atendimento com passagem interna de rede e armários de apoio camuflados.",
        description: "Mobiliário corporativo desenhado para transmitir sobriedade, acolhimento e organização no atendimento ao público."
    },
    {
        id: 6,
        title: "Cozinha Compacta com Aproveitamento Vertical",
        category: "Cozinhas",
        image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80",
        materials: "MDF branco acetinado e detalhes internos em carvalho claro.",
        solutions: "Armários até o teto, despenseiro deslizante e cantos articulados.",
        description: "Solução funcional para apartamentos compactos, maximizando cada centímetro disponível sem sobrecarregar o visual."
    }
];

const CATALOG_POSTS = [
    {
        id: 101,
        date: "Publicação Editorial • Série 01",
        category: "Ambientes Residenciais",
        title: "Integração entre cozinha e área social com marcenaria contínua",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        summary: "O uso do mesmo padrão amadeirado nos painéis da sala e nos armários da cozinha cria unidade visual e amplitude em plantas integradas.",
        specs: "Acabamento: Lâmina natural / MDF fosco • Puxadores: Perfil cava usinado"
    },
    {
        id: 102,
        date: "Publicação Editorial • Série 02",
        category: "Acabamentos & Detalhes",
        title: "Iluminação indireta e texturas naturais em dormitórios",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
        summary: "Perfis de LED embutidos com temperatura de cor quente (2700K a 3000K) valorizam os veios da madeira e criam iluminação de conforto noturno.",
        specs: "Iluminação: Perfil LED embutido com difusor leitoso • Painel: Ripado sob medida"
    },
    {
        id: 103,
        date: "Publicação Editorial • Série 03",
        category: "Corporativo & Comercial",
        title: "Mobiliário sob medida para escritórios e consultórios",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
        summary: "Projetos comerciais exigem durabilidade mecânica, ergonomia e soluções discretas para cabeamento e arquivamento.",
        specs: "Aplicação: Salas executivas e recepções • Ferragens: Amortecimento pesado"
    }
];
