let paises = [["Catar"," Possui o aeroporto mais luxuoso do mundo.",0], ["China", " É o país com maior população mundial. O país possui 1,4 bilhão de habitantes (estimativa 2018).",0], ["África Do Sul", " Tem alguns dos animais selvagens mais interessantes do mundo.",0], ["Portugal", " A Ponte mais comprida da Europa.",0], ["Brasil", " É o maior produtor de café do mundo.",0], ["Estados Unidos", " Nos restaurantes e táxis, a gorjeta (tip em inglês) é obrigatória. Não dar gorjeta é considerado uma ofensa na cultura americana.",0], ["Alemanha", " Há uma montanha formada com escombros da Segunda Guerra Mundial.",0], ["Chile", " Tem o edifício mais alto da América Latina.",0],["Austrália"," Há animais que só existem nesse país.",0], ["Egito"," Domingo é um dia útil.",0]]

function countries() {
const msg = document.getElementById('boxMensagem')
let sorteio = Number(Math.floor(Math.random()* paises.length) )
paises[sorteio][2] +=1
msg.style.display="block"
msg.innerHTML =  `<div> <p>${paises[sorteio][0]}</p> <p>${paises[sorteio][1]}</p> <p>Quantidade de sorteio: ${paises[sorteio][2]}</p></div>`
}

const btn = document.getElementById('btnMensagem')
btn.addEventListener('click', countries)
