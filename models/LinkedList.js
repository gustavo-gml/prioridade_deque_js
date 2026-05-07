class LinkedList {
    #head;
    #tail;
    #qtd;


    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#qtd = 0;
    }


    isEmpty() {
        return this.#head === null;
    }


    addFirst(novoDado) {
        const novoNo = new No(novoDado);

        if (this.isEmpty()) {
            this.#tail = novoNo;
        } else {
            this.#head.anterior = novoNo;
            novoNo.proximo = this.#head;
        }
        this.#qtd++;
        this.#head = novoNo; // evita dry 
        return true;
    }


    addLast(novoDado) {
        const novoNo = new No(novoDado);
        if (this.isEmpty()) {// vazia
            this.#head = novoNo;
        }
        else {
            //TODO
            this.#tail.proximo = novoNo; //homem aranha de apontamentos
            novoNo.anterior = this.#tail;
        }
        this.#tail = novoNo;
        this.#qtd++;
        return true;
    }


    removeFirst() {
        if (this.isEmpty())
            return null;

        const dadoRemovido = this.#head.dado;
        this.#head = this.#head.proximo;
        if (this.#head === null)
            this.#tail = null;
        else
            this.#head.anterior = null;

        this.#qtd--;
        return dadoRemovido;
    }

    removeLast() {
        const dadoRemovido = this.#tail.dado;
        // continuar
    }



    get length() {
        return this.#qtd;
    }


    //-------------------------------------
    //Quando um objeto tem um iterator, ele pode ser iterado com construções como [ for(const item of minhaLista)*/


    [Symbol.iterator]() {
        let noAtual = this.#head;
        return {
            next: function () {
                if (noAtual !== null) {
                    let valor = noAtual.dado;
                    noAtual = noAtual.proximo;
                    return { value: valor, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
    //—----------------
    toString() {
        let retorno = ""
        let noAtual = this.#head;

        while (noAtual != null) {
            retorno += "| " + noAtual.dado;
            noAtual = noAtual.proximo;
        }

    }

}
