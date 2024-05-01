// ESta funcion agrega el valor de los botones a la pantalla 

function agregar(valor){
    document.getElementById('pantalla').value += valor

}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorEnPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorEnPantalla);
    document.getElementById('pantalla').value = resultado
}