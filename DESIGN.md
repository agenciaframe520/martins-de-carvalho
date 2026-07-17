---
name: martins-de-carvalho
description: "Martins de Carvalho — consultoria tributária e contabilidade. Editorial clean, autoridade, 4 idiomas."
colors:
  primary: "#484848"
  accent: "#E8AD4F"
  background: "#FFFFFF"
  background-alt: "#F5F3F0"
  text-primary: "#1A1A1A"
  text-secondary: "#6B6B6B"
  border: "#E5E0DA"
  success: "#2D6A4F"
typography:
  display: "Cormorant Garamond"
  body: "Inter"
  mono: "JetBrains Mono"
  scale:
    hero: "clamp(2.5rem, 5vw, 4rem)"
    h1: "2rem"
    h2: "1.5rem"
    h3: "1.25rem"
    body: "1rem"
    small: "0.875rem"
    caption: "0.75rem"
spacing:
  unit: "0.25rem"
  section: "6rem"
  container-max: "1200px"
  container-padding: "2rem"
rounded: "4px"
shadow: "none"
components:
  button:
    background: "#484848"
    color: "#FFFFFF"
    hover-background: "#3A3A3A"
    rounded: "4px"
    padding: "0.75rem 2rem"
  card:
    background: "#FFFFFF"
    border: "1px solid #E5E0DA"
    padding: "2rem"
  input:
    border: "1px solid #E5E0DA"
    rounded: "4px"
    padding: "0.75rem 1rem"
    focus-border: "#484848"
  separator:
    color: "#E5E0DA"
    style: "1px solid"
---

# Martins de Carvalho — DESIGN.md

## Overview

Site institucional para Martins de Carvalho, escritório de consultoria tributária e contabilidade. Landing page única, 4 idiomas (PT · DE · EN · ES), tom editorial clean com autoridade.

## Visual Direction

**Editorial clean** com referência alemã. Bastante espaço negativo, tipografia com presença, acento dourado mínimo (apenas no logo e detalhes). Sem sombras, sem gradientes, sem firulas. A autoridade está na precisão, não na ostentação.

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#484848` | Logo base, headings, buttons, footer |
| `accent` | `#E8AD4F` | Logo line, hover states, minimal highlights |
| `background` | `#FFFFFF` | Page background |
| `background-alt` | `#F5F3F0` | Alternate sections (publicações, contato) |
| `text-primary` | `#1A1A1A` | Body text, paragraphs |
| `text-secondary` | `#6B6B6B` | Captions, metadata, dates |
| `border` | `#E5E0DA` | Cards, inputs, separators |
| `success` | `#2D6A4F` | Form success, confirmation messages |

## Typography

**Display:** Cormorant Garamond (serif editorial, hero + títulos). Peso bold para headlines, regular para subheadings.

**Body:** Inter (400, 500, 600). Boa legibilidade em múltiplos idiomas.

**Scale:** Responsivo via `clamp()` no hero. Demais headings seguem escala consistente (2rem → 1.5rem → 1.25rem → 1rem).

## Layout Principles

1. Single page, 5 seções com scroll suave via âncora
2. Container máximo 1200px centralizado horizontalmente
3. Seções alternadas: bg branco → bg #F5F3F0 → branco → #F5F3F0 → branco
4. Margem vertical generosa entre seções (6rem)
5. Header fixo com logo + seletor de idiomas + anchor links

## Component Notes

### Language Selector
Botões discretos: **PT · DE · EN · ES**. Ao trocar idioma, mantém a posição na página. Implementação com `data-i18n` attributes.

### Hero
Logo centralizado. Headline em Cormorant Garamond bold, escala clamp(). CTA "Fale com a Mária" como botão outline escuro. Background branco limpo — o logo é a identidade visual.

### Sobre
Texto narrativo em Inter 400, com dados de formação em destaque (Inter 500). Sem bullet points — a formação da Mária é credibilidade, não lista de features.

### Áreas de Atuação
3 cards (ou 4 se incluir M&A) com borda sutil `1px solid #E5E0DA`, sem sombra. Título em Cormorant Garamond, descrição em Inter.

### Publicações
Lista limpa com título em negrito, descrição curta em `text-secondary`. Links externos para o Cloud Coaching.

### Contato
Formulário simples (nome, email, mensagem) com inputs borda sutil. Botão submit em `#484848` com texto branco. Email e idiomas abaixo do formulário.

### Footer
Background `#484848`, texto branco. Copyright + linkedin.

## Responsive

- **< 768px:** padding reduzido, hero empilhado, cards coluna única
- **768-1024px:** transição, 2 cards por row
- **> 1024px:** layout completo com espaçamento máximo

## Implementation Notes

- HTML/CSS puro + vanilla JS para language toggle
- CSS custom properties para sistema de cores
- `scroll-behavior: smooth`
- `prefers-reduced-motion: reduce`
- Fontes via Google Fonts (Cormorant Garamond + Inter)
- SEO: meta tags, hreflang, schema.org Organization
- Netlify Forms para o formulário
