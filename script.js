var i = 0
var x = 0


function adicionaLinha() {
    i++
    let dadoAntigo

    dadoAntigo = document.getElementById('linha').innerHTML
    document.getElementById('linha').innerHTML = dadoAntigo +
        `<tr>
            <th>${i}</th>
            <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
            <td><input type="number" class="form-control" id="nota${i}1" placeholder=""></td>
            <td><input type="number" class="form-control" id="nota${i}2" placeholder=""></td>
            <td><input type="number" class="form-control" id="nota${i}3" placeholder=""></td>
            <td><input type="number" class="form-control" id="nota${i}4" placeholder=""></td>
            <td><output class="medias" id="media${i}"></output></td>
            <td><output id="situacao${i}"></output></td>
        </tr>`

}

function adicionaNota() {

}

function calcula() {
    for (x = 1; x <= i; x++) {

        let notaUm = Number(document.getElementById(`nota${x}1`).value)
        let notaDois = Number(document.getElementById(`nota${x}2`).value)
        let notaTres = Number(document.getElementById(`nota${x}3`).value)
        let notaQuatro = Number(document.getElementById(`nota${x}4`).value)

        var media = (notaUm + notaDois + notaTres + notaQuatro) / 4
        document.getElementById(`media${x}`).innerText = media

        var situacao = 'Aprovado'
        var color = 'Green'

        if (media < 50) {
            S = 'Reprovado'
            color = 'Red'
        } if (media >= 50 && media <= 65) {
            situacao = 'Recuperação'
            color = 'Yellow'
        }

        document.getElementById(`situacao${x}`).innerText = situacao
        document.getElementById(`situacao${x}`).style.backgroundColor = color;
    }

    mediaGeral()
}

function mediaGeral() {

    let totalAlunos = linha.children.length
    let medias = document.getElementsByClassName("medias")
    let somaMedia = 0

    for (let i = 0; i < medias.length; i++) {

        somaMedia += Number(medias[i].value)

    }

    let mediaGeral = Math.round(somaMedia / totalAlunos)

    document.getElementById('mediaGeral').innerText = mediaGeral

}


function nomeCres() {
    let nomes = ['lais', 'edu', 'jessica']
    nomes.sort()
    console.log(nomes)
}

function nomeDesc() {

}

function mediaCres() {

}

function mediaDesc() {

}
