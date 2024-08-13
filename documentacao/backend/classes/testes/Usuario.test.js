import Usuario from "../usuario.js";

describe('Classe Usuario', () => {

    //Cria um usuário para ser utilizado em todos os testes 
    const usuario1 = new Usuario(0, "Maria", "maria", "12345678");

    test('testando método construtor', () => {

        expect(usuario1.idUsuario).toEqual(0);
        expect(usuario1.nome).toEqual("Maria");
        expect(usuario1.login).toEqual("maria");
        expect(usuario1.senha).toEqual("12345678");

    })


    test('testando adicionar contato no usuário', () => {

        //Adiciona um contato no usuário
        usuario1.adicionarContato("Pedro", "(32)1111-1111", "Rua dos Bobos, 0", "pedro@gmail.com");
        usuario1.removerContato(0)

        //Verifica se o tamanho do vetor contatos e 1
        expect(usuario1.contatos.length).toBe(1);

        //Busca pelo contato adicionado
        const contato1 = usuario1.buscarContatoPorNome("Pedro");

        //Verifica se o nome do contato é Pedro
        expect(contato1.nome).toEqual("Pedro");

    })

})
