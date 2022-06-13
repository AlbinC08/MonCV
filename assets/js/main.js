let isTrad = true

function trad() {
    let tabNavtrad = document.querySelectorAll(".navtrad")
    let tabNavtradFR = ["À propos de moi","compétences","expériences","Formations","Contact"]
    let tabNavtradEN = ["About me", "skills", "experiences", "training", "Contact"]
    let tabCarouTrad = document.querySelectorAll(".CarouTrad")
    let tabCarouTradEN = ["About me", "Passionate about computers since my childhood, almost 30 years old, I would like from now on make it my job,Following my professional and personal experience, I have a number of qualities that can be transposed into the profession of developer. I am an organized, rigorous person, creative, accustomed to meeting deadlines and collaborating, working in a team. From my experience professional past, I was able to develop an emotional and relational intelligence useful to the job as a developer (working together on a project, contacting and listening to customer needs). Having already exercise various professions and being passionate about the digital world since very young, I think have good adaptability, analysis and logic necessary for the job of developer.", "Profile", "Dynamic", "Rigorous","Creative","Curious","Interests","IT (hardware and software), video games","science, astronomy, technology","DIY, renovation","Nature, hiking, music"]
    let tabCarouTradFR = ["À propos de moi","Passionné d'informatique depuis mon enfance, presque 30 ans, je souhaiterais désormais en faire mon métier,Suite à mon expérience professionnel et personnel, je dispose d’un certain nombre de qualités transposables dans le métier de développeur. Je suis quelqu’un d’organisé, rigoureux, créatif, habitué à respecter des délais et à collaborer, travailler en équipe. De par mon expérience professionnelle passé, j’ai pu développer une intelligence émotionnel et relationnel utile au métier de développeur (travail à plusieurs sur un projet, contact et écoute des besoins des clients). Ayant déjà exercer divers métiers et étant passionnée du monde du numérique depuis très jeune, je pense disposer de bonne capacité d’adaptation, d’analyse et de logique nécessaire au métier de développeur.","Profil","Dynamique","Rigoureux","Créatif","Curieux","Centres d'intérêts","Informatique (hardware et software), jeux vidéo","Sciences, astronomie, technologie","Bricolage, rénovation","Nature, randonnée, musique"]
    
    if (isTrad == true) {
        document.querySelector("#welcome").innerText = "Welcome to my curriculum vitae"
        for (let i = 0; i < tabNavtrad.length; i++) {
            tabNavtrad[i].innerText = tabNavtradEN[i]
        }
        for (let i = 0; i < tabCarouTrad.length; i++) {
            
            tabCarouTrad[i].innerText = tabCarouTradEN[i]
        }
     
    }else {
        document.querySelector("#welcome").innerText = "Bienvenue sur mon curriculum vitae"
        for (let i = 0; i < tabNavtradFR.length; i++) {
            tabNavtrad[i].innerText = tabNavtradFR[i]
        }
        for (let i = 0; i < tabCarouTrad.length; i++) {            
            tabCarouTrad[i].innerText = tabCarouTradFR[i]
        }
        console.log("dscdscsdcsd");
    }
   
    isTrad = !isTrad

}




