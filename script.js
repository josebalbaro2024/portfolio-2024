

document.querySelector('.formcontacto__form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    if (!nombre.value || !email.value || !asunto.value || !mensaje.value) {
        event.preventDefault();
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Mensaje enviado correctamente!");
    }
});
