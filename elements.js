function Select(name) {
    this.element = document.getElementById(name);
    if (!this.element)
        this.element = document.getElementsByClassName(name)[0];
    if (!this.element)
        this.element = document.getElementsByTagName(name)[0];
    if (!this.element)
        this.element = document.querySelector(name);

    this.get = function () {
        return this.element;
    };

    this.selectByValue = function (dia) {
        for (let i = 0; i < this.element.childNodes.length; i++) {
            if (this.element.childNodes[i].nodeName === "OPTION" && this.element.childNodes[i].value === dia)
                this.element.childNodes[i].setAttribute("selected", "selected");
        }
        return this;
    };

    this.setOption = function (text, value = null) {
        let aux = document.createElement('option');
        let txt = document.createTextNode(text);
        if (value)
            aux.setAttribute("value", value);
        aux.appendChild(txt);
        this.element.appendChild(aux);
    };
}

function Listbox(name) {
    this.element = document.getElementById(name);
    if (!this.element)
        this.element = document.getElementsByClassName(name)[0];
    if (!this.element)
        this.element = document.getElementsByTagName(name)[0];
    if (!this.element)
        this.element = document.querySelector(name);

    this.get = function () {
        return this.element;
    };

    this.items = [];

    this.addArray = function (array) {
        for (let i = 0; i < array.length; i++) {
            this.element.addItem(array[i].item, array[i].callback, array[i].selCalback);
        }
    };

    this.addEspecific = function (array) {
        for (let i = 0; i < array.length; i++) {



            this.element.addItem(array[i].item, array[i].callback, array[i].selCalback);
        }
    };

    this.addItem = function (item, callback = null, selCallback = null) {
        let frag = document.createRange().createContextualFragment(item);
        let doc = document.createDocumentFragment();
        doc.appendChild(frag);

        if (callback && selCallback) {
            let call = doc.getElementById(selCallback);
            if (!call)
                call = doc.querySelector('.' + selCallback);
            if (!call)
                call = doc.querySelector(selCallback);
            if (call) {
                call.onclick = callback;
            }
        }
        this.element.appendChild(doc.childNodes[0]);
    };

    this.clear = function () {
        let list = this.element.getElementsByTagName('li');
        while (list[0]) {
            list[0].remove();
        }
    }

}