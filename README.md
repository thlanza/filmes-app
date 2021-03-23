# Filmes-app - plataforma de cadastro de filmes

Esse curso foi feito para a plataforma [Digital Innovation One](https://digitalinnovation.one/)

O curso consiste em um sistema de filmes, com a possibilidade de cadastros, edições, listagem e visualização dos cursos de outros usuários.
Inicialmente eu segui apenas os passos do curso, mas depois acrescentei algumas coisas.
Localmente eu criei um serviço, baseado na lib Puppeteer, que varre a lista de filmes do IMDb, 
que é bem completa, e cadastra todas numa API. Cabe ressaltar também que a API original usava
json-server, mas preferi uma coisa um pouco mais profissional e criei uma Rest Api em Express no Node.js.

Futuramente planejo integrar o serviço local de webscraping, que faz o seed da API, num
cron job que rodará semanalmente, integrado na API.
