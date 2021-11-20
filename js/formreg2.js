//obtener tu form desde el HTML
var form = document.getElementById('form').elements;
for(var i = 0; i<= form.length - 1; i++){
    //aquí puedes agregar mas validaciones que ocupes
    //para efectos de prueba, yo solo permite que se obtuvieran los input de text.
    if(form[i].type == ''){
        //imprimir en consola el valor
        console.log(form[i].value);
        //la key sera el ID de tu elemento y despues se asigna el valor
        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
    }
}
//para probar que se guardaron bien los elementos, probamos en consola.
console.log(localStorage);