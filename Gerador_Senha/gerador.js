let button = document.querySelector("#botao");
let slider = document.querySelector("#slider");
let valor = document.querySelector("#valor");
let senha = document.querySelector("#senha");
let hide = document.querySelector("#hide");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

valor.innerHTML = slider.value;

// alterando o valor de caracteres conforme o  slider 

slider.oninput = function () {
    console.log("Slider mudou o valor :", this.value);
    valor.innerHTML = this.value;
}

// atribuindo o click ao botao

button.addEventListener("click", gerarSenha)


// função para gerar a senha

function gerarSenha()  {
    let novasenha=""; // string vazia para armazenar a nova senha
    const tamanho = slider.value // obtendo o tamanho da senha a partir do slider

    for(let i = 0; i<tamanho; i++){ // loop que itera pelo tamanho da senha
        const randomIndex = Math.floor(Math.random() * charset.length)
        novasenha += charset.charAt(randomIndex)  // retorna caracteres especificos apartir de uma string
    }

    senha.innerHTML="Senha: " + novasenha; // exibe a senha gerada no elemneto com id "SENHA"
    alert("senha gerada com sucesso")
}
    
senha.addEventListener("click",function() {

    const tempInput= document.createElement("textarea")

    tempInput.value = senha.innerText.split(":")[1].trim()

    document.body.appendChild(tempInput) // adiciona o elemnto ao corpo da pagina

    tempInput.select() // seçeciona o texto no elemnto de texto

    //executa o comando de copia
    document.execCommand("copy")

    // remove o elemento temporario
    document.body.removeChild(tempInput)

    // exibe uma mensagem ou realiza outras açoe conforme necessario
})
