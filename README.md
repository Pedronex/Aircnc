# Aircnc

[![airbnb-512](https://i.ibb.co/9hSwZdG/airbnb-512.png)](https://imgbb.com/)

## aircnc

#### Encontre talentos em seu spot

## Sumario

* [Sobre o Projeto](./#sobre-o-projeto)
  * [Tecnologias usadas](./#feito-com)
* [Passo a Passo](./#passo-a-passo)
  * [Pré-Requisitos](./#pre-requisitos)
  * [Inicializar o Servidor](./#inicializar-o-servidor)
  * [Inicializar a Aplicação Web](./#inicializar-a-aplicação-web)
  * [Inicializar a Aplicação Mobile](./#inicializar-a-aplicação-mobile)
* [Licença](./#Licença)
* [Contato](./#Contato)

  **Sobre o Projeto**

O projeto foi desenvolvido com o intuito de aprender sobre ReactJS, React Native e Node em uma só aplicação. A aplicação em si é inovadora, pensada para realizar pedidos de reserva de salas para programadores.  
A ideia é poder chamar novos programadores para a sua empresa para conhecer o ambiente de produção, realizar mentorias, conhecer novos desenvolvedores ou até alugar um espaço para realizar as atividades para a empresa.

### Feito com:

[NodeJS](https://nodejs.org/en/) - O NodeJS é um interpretador de código aberto, que é usado JavaScript de forma assíncrona, e é orientado a evento, o interpretador tem como base realizar a conexão de uma linguagem de cliente para os servidores.  
[ReactJS](https://pt-br.reactjs.org) - O ReactJS ou React é uma biblioteca que permite criar interfaces para web usando JavaScript.  
[React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React.

## Passo a Passo

### Pré-Requisitos

* Ter acesso ao terminal do seu sistema operacional
* Conter o [node](https://nodejs.org) instalado \(Recomendado que tenha [yarn](https://yarnpkg.com/lang/en/) também\).
* Ter a aplicação completamente baixada
* Acesso a internet \(a aplicação realiza conexão com bando de dados\)
* Estar com o [expo](https://expo.io/learn) instalado.

### Inicializar o servidor

Passos para ligar o servidor:

1. Extrair todos os arquivos
2. Acessar a pasta Aircnc/backend
3. Escrever o comando `npm install`ou `yarn`.
4. Importante verificar o **ip** do seu computador _ex: 192.182.15.1_. Alterar o ip que esta escrito no backend/models/Spot.js Como escrito a seguir:

   \`\`SpotSchema.virtual\("thumbnail\_url"\).get\(function\(\) {

   return`http://(seu ip):3333/files/${this.thumbnail}`;

   }\);\`\`

5. Após o termino da instalação escreva o comando `npm dev` ou `yarn dev`.
6. Agora o servidor já esta ligado

### Inicializar a aplicação web

Passos para inicializar a aplicação:

1. Acessar a pasta Aircnc/frontend
2. escrever o comando `npm install` ou `yarn`.
3. Após o termino da instalação escreva o comando `npm start` ou `yarn start`.
4. Após a inicialização do comando a aplicação será inicializada no seu browser de preferencia.

### Inicializar a aplicação mobile

Passos para inicializar a aplicação:

1. Acessar a pasta Aircnc/mobile
2. Escrever o comando `npm install` ou `yarn`.
3. Importante verificar o **ip** do seu computador _ex: 192.182.15.1_. Alterar o ip que esta escrito no mobile/pages/List.js Como escrito a seguir: `const socket = socketio("http://(seu ip):3333", {      query: { user_id }  });`
4. Após o termino da instalação de dependências e a alteração do ip realize o comando no terminal `expo start`.
5. Após a execução do comando realize o download do aplicativo expo para [android ](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)ou [ios](https://apps.apple.com/app/apple-store/id982107779)
6. No browser leia o QR code para abrir a aplicação.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Pedro - [Github](https://github.com/Pedronex) - **pedrosoares.nex@gmail.com**

## Imagens do Projeto

### Web

{% tabs %}
{% tab title="Login" %}
![](https://i.ibb.co/xDLj57p/Screenshot-2.png)
{% endtab %}

{% tab title="Lista de Spots" %}
![](https://i.ibb.co/hsZggZK/Screenshot-3.png)
{% endtab %}

{% tab title="Cadastrar um Novo Spot" %}
![](https://i.ibb.co/bFjkqMW/Screenshot-1.png)
{% endtab %}
{% endtabs %}

### Mobile

{% tabs %}
{% tab title="Login" %}
![](https://i.ibb.co/j42hSQq/Screenshot-20191007-155104-Expo.png)
{% endtab %}

{% tab title="Lista de Spots" %}
![](https://i.ibb.co/4MsTndY/Screenshot-20191007-162242-Expo.png)
{% endtab %}
{% endtabs %}

         

