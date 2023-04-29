class TiketsManager {
    #precioBaseGanancias = 0.15
    constructor() {
        this.eventos = []
    }

    retornarEvento() {
        return this.eventos
    }

    agregarEventos(nombre, lugar, precio, capacidad = 50,
        fecha = new Date().toLocaleDateString()) {
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseGanancias,
            capacidad,
            fecha,
            participantes: []
        }

        this.eventos.length === 0
            ? evento.id = 1
            : evento.id = this.eventos[this.eventos.length - 1].id + 1
        this.eventos.push(evento)
    }

    agregarUsuario(idUsuario, idEvento) {
        const eventoIndex = this.eventos.findIndex(evento => evento.id === idEvento)
        if (eventoIndex === -1) {
            console.log('El evento no existe');
        }
        this.eventos[eventoIndex].participantes.push(idUsuario)
    }


}

const manejadorDeEventos = new TiketsManager()
manejadorDeEventos.agregarEventos('Lolapaluza', 'Buenos Aires', 17000, 300000)
manejadorDeEventos.agregarEventos('Margarita somer', 'Margarita', 30000, 10000000)
manejadorDeEventos.agregarEventos('Evneto 1', 'Venezuela', 35, 50)
manejadorDeEventos.agregarEventos('tour de la scalonet', 'buenos....', 20000, 10000)
manejadorDeEventos.agregarUsuario(200, 1)
manejadorDeEventos.agregarUsuario(500, 2)
console.log(manejadorDeEventos.retornarEvento());