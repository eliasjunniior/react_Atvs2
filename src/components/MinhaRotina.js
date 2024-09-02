import React from 'react';

function MinhaRotina() {
  return (
    <html>
      <head>
        <title>Minha Rotina</title>
      </head>
      <body>
        <h1>Minha Rotina Diária</h1>
        <h2><strong>Lucas Bomfim do Nascimento</strong></h2>
        <img src="https://christianosantos.com/files/cs1/avatar-homem.jpg" alt="" />
        <p>
          Minha rotina diária começa cedo, normalmente com uma sessão de exercícios na academia para manter a saúde e energia ao longo do dia. Em seguida, eu trabalho no meu projeto de API em TypeScript com MongoDB, aprimorando minhas habilidades de programação. Durante a tarde, continuo estudando para me manter atualizado em novas tecnologias, especialmente no ambiente de <strong>AWS</strong>, que faz parte do meu foco atual. No final do dia, gosto de relaxar jogando jogos ou aprendendo algo novo.
        </p>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>"Veni Vidi Vici." ~Júlio César</p>
        <audio src="https://christianosantos.com/files/cs1/musica03.mp3" autoPlay loop />
      </body>
    </html>
  );
}

export default MinhaRotina;
