# Api-Travaller
aplicação de campo de busca de clima de local

a api selecionada foi https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input.value
  )}&units=metric&appid=8cd5a8c23d39c734fa2bfab6beaddc33`
  
  a api selecionada foi a de open weather api que nos fornece informação de climas em lugares diferentes, ela ela com esse "q=${encodeURI(
    input.value" pois é o valor no qual o  usuario digitar, ou seja, o lugar que ele quiser saber o clima atual
    
    acredito que seja uma funcionalidade interessante ao projeto, ja que como a intenção é ser um blog informativo, a pessoa pode ir 
    pesquisando por exemplo clima de determinado local no qual ela venha a ter interesse em viajar, para fazer uma média de como pode ser 
    o clima daquele mesmo lugar, assim se preparando mais para o clima de lá, sabendo que tipo de roupas levar entre outras coisas
