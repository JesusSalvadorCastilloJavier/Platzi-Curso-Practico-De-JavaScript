
function calcularCuadrado(){
    var lado=parseInt(document.getElementById("txtLado").value);
    //alert(lado);
    //alert("El area es: "+(lado*lado)+"\nEl perimetro es: "+(lado*4));
    var txtArea=document.getElementById("txtArea");
    txtArea.innerText="El area es: "+(lado*lado);
    var txtPerimetro=document.getElementById("txtPerimetro");
    txtPerimetro.innerText="El perimetro es: "+(lado*4);
}