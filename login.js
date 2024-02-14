function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'wd9sxevz2rFf#UP@pjghu#wqrm&BG7%#R%') {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'game.html'; // Assurez-vous que le chemin vers game.html est correct
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
}
