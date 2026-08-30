# Children of Faith Burgers — Site

Site institucional/landing page de delivery para a Children of Faith Burgers,
construido em **React + Vite + TypeScript**, com **CSS Modules** por
componente. Todo o direcionamento de pedido leva o cliente ao **WhatsApp**
(numero configurado em `src/lib/whatsapp.ts`).

## Rodando o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versao de producao em /dist
npm run preview   # serve a build de producao localmente
```

## Estrutura

```
src/
  components/
    Header/        Cabecalho fixo com navegacao e CTA WhatsApp
    Hero/           Secao inicial (headline, CTA principal, brasas animadas)
    Embers/         Efeito visual de assinatura (particulas de brasa subindo)
    Menu/           Cardapio com os 4 lancamentos (posters oficiais)
    About/          Nossa historia
    HowItWorks/     Passo a passo de como pedir
    DeliveryArea/   Area de entrega (Curitiba e regiao / Bairro Alto)
    Footer/         Rodape com contato e navegacao
    WhatsAppFloat/  Botao flutuante fixo de WhatsApp
  data/
    products.ts     Dados do cardapio (nome, imagem, descricao, destaques)
  lib/
    whatsapp.ts     Numero de telefone + geracao de links wa.me
  index.css         Tokens de design (cores, tipografia, reset global)
public/
  images/           Imagens fornecidas (logo + posters + foto hero)
```

## Configuracao rapida

- **Telefone / WhatsApp**: edite `PHONE_E164` e `PHONE_DISPLAY` em
  `src/lib/whatsapp.ts`.
- **Cardapio**: edite ou adicione itens em `src/data/products.ts`. Cada item
  usa a imagem do poster correspondente (pasta `public/images`).
- **Cores e tipografia**: tokens centralizados em `src/index.css`
  (`:root { --coal, --ember, --gold, ... }`).

## Deploy

A pasta `dist/` gerada por `npm run build` e estatica e pode ser publicada em
qualquer hospedagem (Vercel, Netlify, GitHub Pages, cPanel, etc).
