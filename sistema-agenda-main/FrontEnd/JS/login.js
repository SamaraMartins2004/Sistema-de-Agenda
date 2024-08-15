import { logar } from './sistema.js';

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const senha = document.getElementById('password').value;
    logar({ login: login, senha: senha })
})

    // Script para o botão de logout
    document.getElementById('logout-btn').addEventListener('click', function deslogar() {
        window.location.href = 'login.html'; 
    });
