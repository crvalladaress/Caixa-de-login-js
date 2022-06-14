form.addEventListener('submit', (e) => {
    e.preventDefault()
});

function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("ano").value);
    var anoChecked = currentYear - birthYear;

    if (anoChecked >= 18) {                                          
        alert('Bem-Vindo');
        window.location.href = "https://www.youtube.com/";
    }
    else {
        alert('Você nâo tem 18 anos!');
    }

}

