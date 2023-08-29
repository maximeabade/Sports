//this file is destined to send mail thanks to the contact form
//we claim infos with simple DOM id readings.
//Creating my recurent elements
//Into my footer I want to have at first my brand logo, and then add my etablishment contact data and location and finally my own contact as interlocutor

var mailFooter = "";

//In my mail body I want to have the message customer wants to be sent

//In my header I want to have "Confirmation de récpetion de votre message. Le *date*, *genre**Prénom**Nom*, né(e) le *birthdate*,
// a envoyé depuis l'adresse *contactmail* au sujet de *subject* le mail suivant:""

//we declare the function that will be called when the form is submitted
function sendMail() {
    var dateContact = document.getElementById("dateContact").value;
    var nameContact = document.getElementById("nameContact").value;
    var firstNameContact = document.getElementById("firstNameContact").value;
    var emailContact = document.getElementById("emailContact").value;
    var genreContact = document.getElementById("genreContact").value;
    if(genreContact == "Monsieur") {genreContact = "M.";}else if(genreContact == "Madame"){genreContact = "Mme";} else{genreContact = "";}
    var birthDateContact = document.getElementById("birthDateContact").value;
    var roleBusiness = document.getElementById("roleBusiness").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value+ "<br><br><br><br><br><br><br><br>" +
    genreContact + " " + firstNameContact + " " + nameContact + " né(e) le " + birthDateContact + " est " + roleBusiness + " et souhaite être contacté(e) à l'adresse suivante : " + emailContact +
    "et a envoyé un mail le " + dateContact + "." + "<br>" + "Cette personne a pour sujet :     " + subject + "."
    + "<br><br><br><br> Service de contact de HEADBANG-PAU";
    //now we send a mail with the data thanks to the smtp js inclusion
    Email.send({
        SecureToken : "a13e5f50-83f4-4f32-9f64-e57c65ed8856",
        To : emailContact,
        From : "abademaxim@cy-tech.fr",
        Subject : subject,
        Body : message
    }).then(message =>{
        if (message==="OK") {
            alert("Votre message a bien été envoyé.");
        } else {
            message => alert(message)
        }
    });
    //now we empty fields
    document.getElementById("dateContact").value = "";
    document.getElementById("nameContact").value = "";
    document.getElementById("firstNameContact").value = "";
    document.getElementById("emailContact").value = "";
    document.getElementById("genreContact").value = "";
    document.getElementById("birthDateContact").value = "";
    document.getElementById("roleBusiness").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

}
