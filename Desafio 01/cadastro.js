// Desafio 01 - Cadastro de Pessoa

/* 
    Crie um objeto chamado pessoa contendo:
    - nome
    - idade
    - cidade
    
    Após a criação:
    - Altere a idade
    - Adiciome uma profissão
    - Remova a cidade
    
    No fim, exiba o objeto final.
    */
const pessoa = {
    nome: "Cibelle Marchioro", 
    idade: 22, 
    cidade: "Tokyo"
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.profissão = "Dubladora"; // Adiciona uma nova propriedade
pessoa.idade = 22; // Atualiza caso existir

delete pessoa.cidade;
console.log(pessoa);
