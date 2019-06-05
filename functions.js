//llamadas a los elementos

/*let nom = '¿Cual es tu nombre?',
    ape = '¿Y cual es tu appellido?';


    prompt(nom);
    prompt(ape);*/
    //asi creamos los prompt, pero, donde se guarda la info?
   /* if (nom + ape != null){
        document.getElementById('demo').innerHTML = 
        "Hola" + nom + ape + "¿Que tal con Okal?";}*/
    //así sólo pintamos los let, y la info de los prompt
    //visto, tengo que decirle yo a los prompt con que se van a llenar!!
    //segundo intento 2:39 am
    let nom = prompt('¿Cual es tu nombre?'),
        ape = prompt('¿Y tu apellido?');

        if(nom + ape != null){
            document.getElementById('demo').innerHTML =
            " Hola " + nom + ape + "¿Qué tal con Okal?";
        }
        // jo, este ha sido rapido con el getElement by Id! 2:45 am
        /*y si creo dos funciones, una donde recojo y pinto, la de arriba dentro de una function, y otra para separarsplit() nom y ape?*/

       /* function recojoDatos(){
            if(nom + ape != null){
                document.getElementById('demo').innerHTML =
                " Hola " + nom + ape + "¿Qué tal con Okal?";
        }}
        prompt(recojoDatos);*/
        //no seas tan ambicioso!! No funciona!investiga por qué !important