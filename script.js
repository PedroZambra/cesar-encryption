document.getElementsByTagName("button")[0].addEventListener('click', cesar);

function cesar() {
    var pass = document.getElementById('pass').value;
    var n = parseInt(document.getElementById('desplazar').value);
    document.getElementById("cesar").innerHTML = algoritmoCesar(pass,n);
}

function algoritmoCesar(texto,desplazar) {
    var cesar = texto
                    .split('')
                    .map(character => (character!== ' ') ? String.fromCharCode(character.charCodeAt() + desplazar) : character)
                    .join('')
                    
     return '<p>Encriptado: ' + cesar + '</p>';
}