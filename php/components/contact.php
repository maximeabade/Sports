<div id="formContainer" class="container-fluid bg-cobain" style="color: white">
            <h1 id="contact">CONTACT</h1>
            <h3>Date de contact: <input type="date" id="dateContact" name="date" value="" min="2023-01-01" max="2024-12-31" style="color:black"></h3>
            <h3>Nom: <input type="text" id="nameContact" placeholder="Entrez votre nom" style="color:black"></h3>
            <h3>Prénom: <input type="text" id="firstNameContact" placeholder="Entrez votre prénom" style="color:black" ></h3>
            <h3>Email: <input type="text" id="emailContact" placeholder="jean.bombeur@gmail.com" style="color:black"></h3>    
            <h3>
                Genre:
                <select id="genreContact" style="color:black">
                    <option value="Madame">Madame</option>
                    <option value="Monsieur">Monsieur</option>
                    <option value="Autre">Autre</option>
                </select>
            </h3>    
            <h3>Date de naissance: 
                <input type="date" id="birthDateContact" name="birthDate" value="" min="1943-01-01" max="2024-31-12" style="color:black">
            </h3>
            <h3>Fonction:
                <select id="roleBusiness" style="color:black">
                    <option value="Acheteur">Coach</option>
                    <option value="Vendeur">Élève</option>
                    <option value="Autre">Autre</option>
                </select>
            </h3>
            <h3>Sujet: <input type="text" id="subject" placeholder="Objet du mail" style="color:black" ></h3>
            <h3>Message: <textarea type="text" id="message" placeholder="Entrez votre message" style = "height: 200px; color:black"></textarea></h3>
            <button type="button" class="btn btn-info btn-lg" onclick="sendMail()">ENVOYER</button>
</div>
