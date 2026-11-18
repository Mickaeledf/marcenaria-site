# Marcenaria Site — Template Profissional para Marcenarias

Site institucional completo para empresas de marcenaria sob medida e móveis planejados.

---

## Estrutura do Projeto

```
marcenaria-site/
├── index.html              ← Página principal (NÃO editar)
├── config.js               ← ARQUIVO DE PERSONALIZAÇÃO DO CLIENTE
├── LEIA-ME.md              ← Este arquivo
├── assets/
│   ├── css/
│   │   └── style.css       ← Estilos visuais
│   ├── js/
│   │   ├── data.js         ← Dados do portfólio e catálogo
│   │   └── app.js          ← Lógica e interações
│   └── img/                ← Pasta para imagens do cliente
```

---

## Como Personalizar

### 1. Dados da Empresa (`config.js`)
Abra o arquivo `config.js` e substitua os valores entre colchetes:

- **Nome da marca** → campo `marca`
- **WhatsApp** → campo `whatsapp` (somente números com DDI)
- **Telefone, Instagram, Endereço** → campos respectivos
- **Google Maps** → campo `mapaEmbedUrl` (copie o src do embed)
- **Texto institucional** → campos `sobreTexto1` e `sobreTexto2`

### 2. Portfólio e Catálogo (`assets/js/data.js`)
- Adicione ou remova itens nos arrays `PORTFOLIO_ITEMS` e `CATALOG_POSTS`
- Cada item tem: título, categoria, imagem, materiais e descrição
- Use as categorias existentes ou crie novas

### 3. Imagens
- Substitua as URLs do Unsplash pelas fotos reais da empresa
- Coloque imagens locais na pasta `assets/img/`
- Formatos recomendados: `.webp` ou `.jpg` otimizado

---

## Funcionalidades Incluídas

- Página 1: Institucional (Hero, Sobre, Ambientes, Portfólio, Materiais, Processo, Orçamento)
- Página 2: Projetos & Inspirações (catálogo editorial expansível)
- Formulário de orçamento com envio automático via WhatsApp
- Lightbox com ficha técnica do projeto
- Filtros por categoria no portfólio
- Menu mobile responsivo
- Animações de scroll (reveal)
- Modal de Política de Privacidade (LGPD)
- SEO básico configurável

---

## Requisitos Técnicos

- Nenhuma instalação necessária
- Funciona direto no navegador (HTML + CSS + JS)
- Tailwind CSS via CDN
- Google Fonts: Cormorant Garamond + Plus Jakarta Sans
- Compatível com hospedagem estática (Cloudflare Pages, Vercel, Netlify, etc.)

---

## Deploy Recomendado

1. Crie um repositório no GitHub com estes arquivos
2. Conecte ao Cloudflare Pages (ou Vercel/Netlify)
3. Aponte o domínio do cliente
4. Pronto — sem build, sem servidor

---

## Licença

Template desenvolvido por Karen Mickaele — uso comercial autorizado para revenda como projeto instalado por cliente.
