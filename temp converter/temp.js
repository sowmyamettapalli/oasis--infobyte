document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick =clearform;

function tempConvert() {
    var fahrenheit = document.getElementById("fahrenheit").Value;
    var celsius = document.getElementById("celsius").Value;
    if(fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) -32) /1.8;
      }
      else{
        fahrenheit = (parseFloat(celsius) * 1.8 ) + 32;
      }

document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
 }
function clearform(){
    document.getElementById('fahrenheit').value ='';
    document.getElementById('celsius').value='';
}

