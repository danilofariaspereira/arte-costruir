# Como Configurar o Envio de E-mail do Formulário

## Opção 1: Formspree (Recomendado - Gratuito e Fácil)

1. Acesse https://formspree.io
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Configure o e-mail de destino como: `danilofariaspereira90@gmail.com`
5. Copie o Form ID que aparece (exemplo: `xvgkwdqy`)
6. Abra o arquivo `src/views/Projetos.vue`
7. Encontre a linha que diz: `const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'`
8. Substitua `YOUR_FORM_ID` pelo ID que você copiou
9. Salve o arquivo

Pronto! Agora o formulário enviará e-mails automaticamente para `danilofariaspereira90@gmail.com`

## Opção 2: EmailJS (Alternativa)

1. Acesse https://www.emailjs.com
2. Crie uma conta gratuita
3. Crie um serviço de e-mail (Gmail, Outlook, etc.)
4. Crie um template de e-mail
5. Copie o Service ID, Template ID e Public Key
6. Configure no código conforme as instruções nos comentários

