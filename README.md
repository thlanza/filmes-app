# Filmes-app - plataforma de cadastro de filmes

O app consiste em um sistema de filmes, com a possibilidade de cadastros, edições, listagem e visualização dos cursos de outros usuários. Foi usado como base a aula do bootcamp Angular da Avanada, da Plataforma Digital Inovation One.

Inicialmente eu segui apenas os passos do curso, mas depois acrescentei algumas coisas.
Localmente eu criei um serviço, baseado na lib Puppeteer, que varre a lista de filmes do IMDb, 
que é bem completa, e cadastra todas numa API. Cabe ressaltar também que a API original usava
json-server, mas preferi uma coisa um pouco mais profissional e criei uma Rest Api em Express no Node.js.

Futuramente planejo integrar o serviço local de webscraping, que faz o seed da API, num
cron job que rodará semanalmente, integrado na API.
