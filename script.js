function sendMail (){
    let parms = {
        nome : document.getElementById("nome").value,
        cognome : document.getElementById("email").value,
        mail : document.getElementById("mail").value,
        oggetto : document.getElementById("ogetto").value,
        messaggio : document.getElementById("messaggio").value,
    }

    emailjs.send("service_xfkznvd","template_6focxw9",parms).then(alert("Mail Inviata!!"))
}