/**
 * Configura e lida com o envio do formulário de contato usando EmailJS.
 */
function sendForm() {

    // Inicializa o EmailJS com sua chave pública (Public Key).
    emailjs.init("d0-R2xOnEzmrEx26f");

    // Seleciona o elemento do formulário de contato no DOM.
    const form = document.querySelector("#contact form");

    // Adiciona um ouvinte de evento para o evento 'submit' no formulário.
    form.addEventListener("submit", function(event) {
        // Previne o comportamento padrão de envio do formulário, que recarregaria a página.
        event.preventDefault();

        // Envia os dados do formulário usando o EmailJS.
        // "service_v92wd5i" é o ID do serviço (Service ID) da sua conta EmailJS.
        // "template_4g48tfe" é o ID do template (Template ID).
        // 'form' é o elemento do formulário cujos dados serão enviados.
        emailjs.sendForm("service_v92wd5i", "template_4g48tfe", form)
            .then(function() {
                // Em caso de sucesso, exibe um alerta de confirmação para o usuário.
                alert("Mensagem enviada com sucesso!");
                // Reseta os campos do formulário para limpar as entradas.
                form.reset();
            }, function(error) {
                // Em caso de falha, exibe um alerta de erro com detalhes sobre o erro.
                alert("Erro ao enviar: " + JSON.stringify(error));
            });
    });
}

/**
 * Função principal que serve como ponto de entrada para o script.
 */
function main() {
    // Configura o manipulador de envio do formulário.
    sendForm();
}


document.addEventListener("DOMContentLoaded", function() {
    // Executa a função principal quando o script é carregado.
    main();
});