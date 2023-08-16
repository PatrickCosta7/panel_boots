var acionamento = document.getElementById("adicionar")
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});

acionamento.addEventListener("click", () => {
    myModal.show();
})