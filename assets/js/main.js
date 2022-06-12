
function light() {
    let class_light = document.querySelectorAll(".light_mode") //retourne un tableau d'element html
    let class_color_text_footer = document.querySelectorAll(".color_text_footer") //retourne un tableau d'element html
    let toogle = document.getElementById("button");//on créer une variable pour y stocker la valeur du bouton (ON ou OFF), valeur qu'on assigne sur le bouton dans le html en ecrivant: value="ON", au meme endroit où on mets les class
    if (toogle.value == "ON") {                   //si la valeur du bouton est ON quand on clique sur le bouton on applique les condition du light mode ci dessous
        console.log("light_mode");               //un petit console log pour bien identifier le light mode dans la console
        document.querySelector(".light_mode").setAttribute('style', 'background-color : white !important');
        for (let i = 0; i < class_light.length; i++) {
            console.log(class_light[i]);
            class_light[i].setAttribute('style', 'background-color : white !important');
        }
        for (let i = 0; i < class_color_text_footer.length; i++) {
            console.log(class_color_text_footer[i]);
            class_color_text_footer[i].setAttribute('style', 'color : black !important');
        }
        document.body.style.background = "url('assets/images/background-paralax-light.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
        toogle.value = "OFF";                  //une fois les conditions appliqué, on passe la valeur du bouton à OFF pour que quand on reclique sur le bouton les conditions du dark mode s'applique 
    }

    else if (toogle.value == "OFF") {        //si la valeur est OFF quand on clique sur le bouton on applique les condition du dark mode ci dessous
        console.log("dark_mode");           //un petit console log pour bien identifier le dark mode dans la console
        document.querySelector(".light_mode").setAttribute('style', 'background-color : black !important');
        for (let i = 0; i < class_light.length; i++) {
            console.log(class_light[i]);
            class_light[i].setAttribute('style', 'background-color : black !important');
        }
        for (let i = 0; i < class_color_text_footer.length; i++) {
            console.log(class_color_text_footer[i]);
            class_color_text_footer[i].setAttribute('style', 'color : white !important');
        }
        document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/background-paralax.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";

        toogle.value = "ON";                //une fois les conditions appliqué, on passe la valeur du bouton à ON pour que quand on reclique sur le bouton les conditions du light mode s'applique
    }
}
