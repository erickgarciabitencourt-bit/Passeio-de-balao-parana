# Passeio de Balão Paraná 🎈

Site institucional da **Passeio de Balão Paraná**: voos panorâmicos de balão ao nascer e ao pôr do sol em Maringá-PR.

Site **responsivo**: o mesmo código se adapta a computador, tablet e celular.

## Páginas

| Arquivo | Página |
|---|---|
| `index.html` | Início |
| `experiencias.html` | Experiências (Céu a Dois, Voo em Grupo, Empresas) |
| `galeria.html` | Galeria de fotos |
| `empresas.html` | Soluções para empresas |
| `contato.html` | Contato (formulário que abre o WhatsApp) |

## Recursos

- Menu com barrinha ao passar o mouse; no celular vira o botão ☰.
- Botões de agendamento ficam brancos com texto vermelho ao passar o mouse.
- Cada "Agendar agora" abre o WhatsApp com uma mensagem pronta da experiência escolhida.
- Botão flutuante de WhatsApp no celular.
- Formulário de contato que envia os dados direto para o WhatsApp.

## Estrutura

```
├── index.html
├── experiencias.html
├── galeria.html
├── empresas.html
├── contato.html
└── assets/
    ├── css/style.css   → todo o visual (cores, fontes, versões computador/tablet/celular)
    ├── js/main.js      → menu do celular
    ├── js/contato.js   → envio do formulário pelo WhatsApp
    └── img/            → fotos, logo e ícones
```

Site 100% estático (HTML + CSS + JavaScript). Não precisa de servidor nem instalação: basta abrir o `index.html` no navegador.

### Onde alterar as coisas mais comuns

- **Número do WhatsApp:** procure `5544991235971` nos arquivos `.html` e em `assets/js/contato.js`.
- **Preços:** estão em `index.html` e `experiencias.html` (procure por `R$`).
- **Cores:** no topo de `assets/css/style.css` (ex.: `--red:#C73E1A`).

## Publicar grátis no GitHub Pages

1. Envie estes arquivos para o repositório no GitHub.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch **main** e pasta **/ (root)**. Clique em **Save**.
4. Em alguns minutos o site fica no ar em `https://SEU-USUARIO.github.io/passeio-de-balao-parana/`.

Para usar um domínio próprio (ex.: `passeiodebalaoparana.com.br`), configure em **Settings → Pages → Custom domain**.

## Contato

- WhatsApp: (44) 99123-5971
- Instagram: [@passeiodebalaoparana](https://www.instagram.com/passeiodebalaoparana/)
- Facebook: [passeiodebalaoparana](https://www.facebook.com/passeiodebalaoparana/)
- R. Francisco Ribas, 18 - Jardim Itália, Maringá - PR
