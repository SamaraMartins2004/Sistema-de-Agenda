import Usuario from "../../backend/classes/Usuario.js";
import { verificarLogin, getUsuario, getContatos, deslogar, } from "./sistema.js";

// Verificar se o usuário está logado
if (verificarLogin() == false) {
    window.location.href = "Login.html";
}
// Obter informações do usuário
async function inicializarAgenda() {
    const usuario = await getUsuario();

    //colocando o nome do usuario cadastrado, na tela inicial da agenda   
    if (usuario != null) {
        const h1 = document.querySelector('h1');
        h1.innerHTML = `Agenda de ${usuario.nome}`;

        const contatos = await getContatos();

        let linhas = '';
        contatos.forEach((contato) => {
            linhas = linhas + 
            `<tr>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
            </tr>`;
        })
        /*
        buscar as informações dos contatos e criar uma linha de tabela para cada contato
        */
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = linhas;
        
    }
}

// Iniciar a agenda
inicializarAgenda();




// Adicionar funcionalidade ao botão de logout
document.getElementById('logout-btn').addEventListener('click', deslogar);


