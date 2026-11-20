# Agro City: publicar grátis como app (PWA)

Você vai colocar o jogo num site gratuito do GitHub. Depois, no celular, aparece **Instalar app**, com o ícone do celeiro e funcionando sem internet.

## 1. Criar a conta (grátis)
Entre em https://github.com e crie uma conta. O nome de usuário vai aparecer no endereço do jogo.

## 2. Criar o repositório
1. Clique em **+** (canto de cima) → **New repository**.
2. Em *Repository name*, escreva: `agro-city`
3. Deixe marcado **Public**. Na versão grátis, o site só funciona com o repositório público.
4. Clique em **Create repository**.

## 3. Enviar os arquivos
1. Na página do repositório, clique em **uploading an existing file**.
2. **Descompacte** este zip no PC e arraste **todo o conteúdo da pasta** para a página: `index.html`, `manifest.json`, `sw.js`, `privacy.html` e as pastas `fonts` e `icons`.
   > Arraste o conteúdo, não a pasta `agro-city-pwa` inteira. O `index.html` precisa ficar na raiz.
3. Clique em **Commit changes**.

## 4. Ligar o site
1. Vá em **Settings** → **Pages** (menu da esquerda).
2. Em *Branch*, escolha **main** e a pasta **/(root)** e clique em **Save**.
3. Espere 1 ou 2 minutos e atualize a página. Vai aparecer o endereço:
   **https://SEU-USUARIO.github.io/agro-city/**

## 5. Instalar no celular
- **Android (Chrome):** abra o endereço, toque em ⋮ → **Instalar app**. Também aparece um botão **📲 Instalar** dentro do jogo.
- **iPhone (Safari):** abra o endereço, toque em compartilhar → **Adicionar à Tela de Início**.

Pronto: o ícone do Agro City fica na tela, abre em tela cheia e funciona sem internet.

## Atualizar o jogo
1. No repositório, clique no `index.html` → ícone de lápis, ou use **Add file → Upload files** e envie o novo `index.html` por cima.
2. Clique em **Commit changes**.
3. Na próxima vez que a pessoa abrir o jogo com internet, ele carrega a versão nova sozinho. O progresso de quem joga **não se perde**.

> Se trocar ícones ou fontes, abra o `sw.js` e mude `agro-city-v1` para `agro-city-v2` (e assim por diante).

## Bom saber
- **Custo:** zero.
- **Save:** fica no celular de cada pessoa. Se ela limpar os dados do navegador ou desinstalar, o save é apagado. Por isso existe o **código de backup** na aba ❓ do jogo.
- **Código público:** com o repositório público, qualquer pessoa pode ver o código do jogo.
- **Política de privacidade:** fica em `https://SEU-USUARIO.github.io/agro-city/privacy.html`. É esse link que você usa quando for publicar nas lojas.
- **Notificações:** "planta madura" e "precisa de água" só chegam no app das lojas. Na versão PWA não há notificações.
