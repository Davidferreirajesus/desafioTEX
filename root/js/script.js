let paises = [["Catar"," possui o aeroporto mais luxuoso do mundo.",0], ["China", " é o país com maior população mundial. O país possui 1,4 bilhão de habitantes (estimativa 2018).",0], ["África Do Sul", " tem alguns dos animais selvagens mais interessantes do mundo.",0], ["Portugal", " a Ponte mais comprida da Europa.",0], ["Brasil", " é o maior produtor de café do mundo.",0], ["Estados Unidos", " nos restaurantes e táxis, a gorjeta (tip em inglês) é obrigatória. Não dar gorjeta é considerado uma ofensa na cultura americana.",0], ["Alemanha", " há uma montanha formada com escombros da Segunda Guerra Mundial.",0], ["Chile", " tem o edifício mais alto da América Latina.",0],["Austrália"," há animais que só existem nesse país.",0], ["Egito"," domingo é um dia útil.",0]]

function countries() {
const msg = document.getElementById('boxMensagem')
let sorteio = Number(Math.floor(Math.random()* paises.length) )
paises[sorteio][2] +=1
msg.style.display="block"
msg.innerHTML =  `<div> <p>${paises[sorteio][0]}</p> <p>${paises[sorteio][1]}</p> <p>Quantidade de sorteio:${paises[sorteio][2]}</p></div>`
}

const btn = document.getElementById('btnMensagem')
btn.addEventListener('click', countries)
