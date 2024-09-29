document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const productSelect = document.getElementById('product');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const productError = document.getElementById('product-error');
    const messageError = document.getElementById('message-error');
    
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        let valid = true;

        // Réinitialiser les messages d'erreur
        nameError.textContent = '';
        emailError.textContent = '';
        productError.textContent = '';
        messageError.textContent = '';

        // Validation du champ Nom
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Veuillez entrer votre nom.';
            valid = false;
        }

        // Validation de l'Email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Veuillez entrer un email valide.';
            valid = false;
        }

        // Validation du produit
        if (productSelect.value === '') {
            productError.textContent = 'Veuillez sélectionner un produit.';
            valid = false;
        }

        // Validation du message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Veuillez entrer un message.';
            valid = false;
        }

        // Si tout est valide, afficher le message de confirmation
        if (valid) {
            form.style.display = 'none'; // Cacher le formulaire
            confirmationMessage.style.display = 'block'; // Afficher le message de confirmation
        }
    });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
