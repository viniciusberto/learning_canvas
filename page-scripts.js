let drawing = {
    "day": "SEXTA",
    "items": [
        "EXEMPLO DE VAGA DE EMPREGO 1",
        "EXEMPLO DE VAGA DE EMPREGO 2",
        "EXEMPLO DE VAGA DE EMPREGO 3",
        "EXEMPLO DE VAGA DE EMPREGO 4",
        "EXEMPLO DE VAGA DE EMPREGO 5",
        "EXEMPLO DE VAGA DE EMPREGO 6",
        "EXEMPLO DE VAGA DE EMPREGO 7",
        "EXEMPLO DE VAGA DE EMPREGO 8",
        "EXEMPLO DE VAGA DE EMPREGO 9",
        "EXEMPLO DE VAGA DE EMPREGO 10",
        "EXEMPLO DE VAGA DE EMPREGO 11",
        "EXEMPLO DE VAGA DE EMPREGO 12",
    ],
    "colors": {
        "header": "#E6050C",
        "headertext1": "#70CB01",
        "headertext2": "#FFF",
        "body": "#FFF200",
        "daybody": "#E7E7E7",
        "dayheader": "#99FF1C",
        "daytext": "#000",
        "address": "#000",
        "social": "#FFF",
        "listtext": "#000",
        "socialfill": "#E6050C",
    },
    "fonts": {
        "title": "Montserrat Black",
        "week": "Liebe Doris",
        "list": "Montserrat Bold",
        "address": "Montserrat",
        "social": "Lucida Grande",
    }
};
const resetOBJ = {
    "day": "SEGUNDA",
    "items": [
        "EXEMPLO DE VAGA DE EMPREGO 1",
        "EXEMPLO DE VAGA DE EMPREGO 2",
        "EXEMPLO DE VAGA DE EMPREGO 3",
        "EXEMPLO DE VAGA DE EMPREGO 4",
        "EXEMPLO DE VAGA DE EMPREGO 5",
        "EXEMPLO DE VAGA DE EMPREGO 6",
        "EXEMPLO DE VAGA DE EMPREGO 7",
        "EXEMPLO DE VAGA DE EMPREGO 8",
        "EXEMPLO DE VAGA DE EMPREGO 9",
        "EXEMPLO DE VAGA DE EMPREGO 10",
        "EXEMPLO DE VAGA DE EMPREGO 11",
        "EXEMPLO DE VAGA DE EMPREGO 12",
    ],
    "colors": {
        "header": "#E6050C",
        "headertext1": "#70CB01",
        "headertext2": "#FFF",
        "body": "#FFF200",
        "daybody": "#E7E7E7",
        "dayheader": "#99FF1C",
        "daytext": "#000",
        "address": "#000",
        "social": "#FFF",
        "listtext": "#000",
        "socialfill": "#E6050C",
    },
    "fonts": {
        "title": "Montserrat Black",
        "week": "Liebe Doris",
        "list": "Montserrat Bold",
        "address": "Montserrat",
        "social": "Lucida Grande",
    }
};

let temasSalvos = [];

const selectDia = new Select('select');
const editVaga = document.getElementById('vaga');
const listboxVagas = new Listbox("lista");


function configuracao() {
    function inicializarInterface() {
        selectDia.selectByValue(drawing.day);
    }

    inicializarInterface();

    var btn_add = document.getElementById('add-vaga');
    var lista = document.getElementById('lista');
    var vagas_lista = document.querySelectorAll('.vagas');

    editVaga.onkeyup = function (key) {
        if (key.code === "Enter") {
            adicionarVaga(editVaga.value);
        }
    };

    btn_add.onclick = function () {
        adicionarVaga(editVaga.value);
    };

    function adicionarVaga(text, update = true) {
        if (text) {
            let vaga = '<li class="vagas"><i class="lixeira-lista far fa-trash-alt"></i>' + text + '</li>';
            listboxVagas.addItem(vaga, removerVagaBotao, 'lixeira-lista');
            vagas_lista = document.querySelectorAll('.vagas');
            editVaga.value = "";
            if (update)
                return updateCanvas();
        }
    }

    function addObjectVagas() {
        for (let i = 0; i < drawing.items.length; i++) {
            adicionarVaga(drawing.items[i], false);
        }
    }

    addObjectVagas();


    function resetDrawing() {
        drawing = JSON.parse(JSON.stringify(resetOBJ));
        listboxVagas.clear();
        addObjectVagas();
        updateCanvas();
    }

    function removerVagaBotao(evt) {
        evt.target.parentElement.remove();
        updateCanvas();
    }

    document.getElementById('removerVagas').onclick = function () {
        listboxVagas.clear();
        updateCanvas();
    };

    vagas_lista = document.querySelectorAll('.vagas');


    var lixeira = document.querySelectorAll(".lixeira-lista");
    for (let i = 0; i < lixeira.length; i++) {
        lixeira[i].onclick = removerVagaBotao;
    }


    var config_panel = document.getElementById('config');
    var cnfig = document.getElementById('btn-config');
    var btnsy = document.getElementById("btn-sync");
    var btnsv = document.getElementById("btn-save");

    btnsy.onclick = resetDrawing;

    cnfig.onclick = function () {
        var centro = document.getElementById("center");
        if (config_panel.classList.contains("ocultar-esquerda")) {
            config_panel.classList.remove("ocultar-esquerda");
            config_panel.classList.add("mostrar-admin");
            btnsv.classList.remove("ocultar-botoes");
            btnsv.classList.add("mostrar-botoes");
            btnsy.classList.remove("ocultar-botoes");
            btnsy.classList.add("mostrar-botoes");
            centro.classList.remove("deslizar-esquerda");
            centro.classList.add("deslizar-direita");
        } else {
            config_panel.classList.add("ocultar-esquerda");
            config_panel.classList.remove("mostrar-admin");
            btnsv.classList.add("ocultar-botoes");
            btnsv.classList.remove("mostrar-botoes");
            btnsy.classList.add("ocultar-botoes");
            btnsy.classList.remove("mostrar-botoes");
            centro.classList.add("deslizar-esquerda");
            centro.classList.remove("deslizar-direita");
        }
    };
    draw('canvas', drawing);
}

let dia_semana = document.getElementById('dia-semana');

dia_semana.onchange = function () {
    drawing.day = dia_semana.value;
    updateCanvas();
};

var cabecalho = document.getElementById('header');
var cabecalho1 = document.getElementById('headertext1');
var cabecalho2 = document.getElementById('headertext2');
var corpo = document.getElementById('body');
var corpo_dia = document.getElementById('daybody');
var topo_dia = document.getElementById('dayheader');
var texto_dia = document.getElementById('daytext');
var endereco = document.getElementById('address');
var cor_social = document.getElementById('social');
var texto_lista = document.getElementById('listtext');
var fundo_social = document.getElementById('socialfill');

var btns_cores = document.querySelectorAll('.cores');

for (let i = 0; i < btns_cores.length; i++) {
    btns_cores[i].onchange = function (evt) {
        mudarCor(evt);
        return updateCanvas();
    };
}

function mudarCor(param) {
    switch (param.target.getAttribute('id')) {
        case "header":
            drawing.colors.header = param.target.value;
            break;
        case "headertext1":
            drawing.colors.headertext1 = param.target.value;
            break;
        case "headertext2":
            drawing.colors.headertext2 = param.target.value;
            break;
        case "body":
            drawing.colors.body = param.target.value;
            break;
        case "dayheader":
            drawing.colors.dayheader = param.target.value;
            break;
        case "daybody":
            drawing.colors.daybody = param.target.value;
            break;
        case "daytext":
            drawing.colors.daytext = param.target.value;
            break;
        case "address":
            drawing.colors.address = param.target.value;
            break;
        case "social":
            drawing.colors.social = param.target.value;
            break;
        case "listtext":
            drawing.colors.listtext = param.target.value;
            break;
        case "socialfill":
            drawing.colors.socialfill = param.target.value;
            break;
    }
}

let btnsave = document.getElementById("btn-save");
btnsave.onclick = function () {
    resetNotification();
};

function updateNotification() {
    let btnsv = document.getElementById("btn-save");
    if (!btnsv.classList.contains('notificacao'))
        btnsv.classList.add("notificacao");
    if (btnsv.getAttribute("updates")) {
        let up = btnsv.getAttribute('updates');
        up = parseInt(up) + 1;
        btnsv.setAttribute("updates", up);
    } else {
        btnsv.setAttribute("updates", "1");
    }
}

function resetNotification(evt = null) {
    if (evt) {
        if (evt.target.classList.contains('notificacao')) {
            evt.target.classList.remove("notificacao");
            evt.target.setAttribute("updates", "0");
        }

    } else {
        let btnsv = document.getElementById("btn-save");

        if (btnsv.classList.contains('notificacao')) {
            btnsv.classList.remove("notificacao");
            btnsv.setAttribute("updates", "0");
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function coresAleatorias() {
    var cores = document.getElementsByClassName('cores');
    for (let i = 0; i < cores.length; i++) {
        cores[i].value = getRandomColor();
        mudarCor({"target": cores[i]});
    }
    updateCanvas();
}

function editarVagaBotao(evt) {

}

function updateCanvas() {

    let vagas_lista = document.querySelectorAll('.vagas');
    var vagas_array = [];
    for (let i = 0; i < vagas_lista.length; i++) {
        vagas_array.push(vagas_lista[i].childNodes[1].textContent);
    }
    drawing.items = vagas_array;

    document.getElementById('center').remove();

    var aux = document.createElement('canvas');
    aux.classList.add('deslizar-direita');
    aux.setAttribute("width", "940");
    aux.setAttribute("height", "788");
    aux.setAttribute("id", "center");
    aux.style.width = '940px';
    document.getElementsByTagName("body")[0].appendChild(aux);
    updateNotification();
    return draw('center', drawing);
}

function salvarTema() {
    temasSalvos.push(JSON.parse(JSON.stringify(drawing)));
}