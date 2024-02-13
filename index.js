const perguntas = [
    {
     pergunta: "Quantos planetas tem o sistema solar",
     respostas: [
       "8",
       "7",
       "9"
     ],
     correta: 0
   },
    {
     pergunta: "Qual gás mais abundante no sistema solar?",
     respostas: [
       "Oxigênio",
       "Gás Carbônico",
       "Hidrogênio"
     ],
     correta: 2
   },
    {
     pergunta: "Quem é responsável pela formação das marés?",
     respostas: [
       "Os ventos",
       "A lua",
       "A rotação da terra",
     ],
     correta: 1
   },
    {
     pergunta: "Quantos são os planetas gasosos?",
     respostas: [
       "5",
       "2",
       "4",
     ],
     correta: 2
   },
    {
     pergunta: "Qual é o palneta mais próximo do Sol?",
     respostas: [
       "Urano",
       "Mercúrio",
       "Marte",
     ],
     correta: 1
   },
 ];
 
 
 const quiz = document.querySelector('#quiz')
 const template = document.querySelector('template')
 
 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
 
 //loop
 for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta 
 
 
  for(let resposta of item.respostas) { 
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
 
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
 
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }
 
 
       quizItem.querySelector('dl').appendChild(dt)
   }
 
   quizItem.querySelector('dl dt').remove()
 
     quiz.appendChild(quizItem)
 }