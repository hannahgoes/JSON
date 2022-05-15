var listaDePresenca = 
{
    "pessoa1":{
        "nome":"Hannah",
        "idade": 24
    },
    "pessoa2":{
        "nome":"Cassiano",
        "idade": 32,
        "esportes": [
            {
                "tipo": "futebol",
                "horário": "10:00"
            },
            {
                "tipo": "basquete",
                "horário": "20:00"
            }
        ]
    }
}

//obtendo todo o objeto de listadepresenca
console.log(listaDePresenca)

//obtendo uma pesssoa de listadepresenca
console.log(listaDePresenca.pessoa1)

//obtendo o nome de uma pesssoa de listadepresenca
console.log(listaDePresenca.pessoa1.nome)

console.log(listaDePresenca.pessoa2.esportes[1].horário)