 emailjs.init("d0-R2xOnEzmrEx26f"); // vem do painel do EmailJS

document.querySelector("#contact form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_v92wd5i", "template_4g48tfe", this)
        .then(function() {
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            alert("Erro ao enviar: " + JSON.stringify(error));
        });
});