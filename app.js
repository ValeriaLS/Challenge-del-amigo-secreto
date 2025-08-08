// Lista para guardar los nombres
        let listaAmigos = [];

        // Función auxiliar para asignar texto a un elemento
        function asignarTextoElemento(elemento, texto) {
            let elementoHTML = document.querySelector(elemento);
            elementoHTML.innerHTML = texto;
        }

        // Agregar un amigo a la lista
        function agregarAmigo() {
            let agregarAmigo = document.getElementById('amigo').value;

            // Validar que el campo no esté vacío
            if (agregarAmigo.trim() === '') {
                alert('Por favor, inserte un nombre');
                return;
            }

            // Agregar nombre al array
            listaAmigos.push(agregarAmigo);

            // Limpiar campo
            document.getElementById('amigo').value = '';

            // Mostrar lista actualizada
            actualizarListaAmigos();
        }

        // Mostrar lista de amigos en el HTML
        function actualizarListaAmigos() {
            let listaElemento = document.getElementById('listaAmigos');
            listaElemento.innerHTML = ''; // limpiar lista

            // Recorrer el array y crear <li> por cada amigo
            for (const nombre of listaAmigos) {
                let li = document.createElement('li');
                li.textContent = nombre;
                listaElemento.appendChild(li);
            }
        }

        // Sortear un amigo al azar
        function sortearAmigo() {
            // Validar que haya nombres
            if (listaAmigos.length === 0) {
                alert('No hay amigos para sortear');
                return;
            }

            // Generar índice aleatorio
            let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

            // Obtener el nombre
            let amigoAleatorio = listaAmigos[indiceAleatorio];

            // Mostrar el resultado
            asignarTextoElemento('#resultado', `El amigo secreto es: ${amigoAleatorio}`);
        }


