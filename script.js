var y;
var x=0;
var z=1;
let c1 = false;
let c2 = false;
let c3 = false;

function handleCheckboxChange(checkbox) {
    if (checkbox.checked) {
      console.log("Checkbox selezionata: " + checkbox.id);
      if(checkbox.id == 'check1'){
        c1 =true;
        console.log('c1t')
      }else if(checkbox.id == 'check2'){
        c2 =true;
        console.log('c2t')
      }else{
        c3 =true;
        console.log('c3t')
      }
    } else {
      console.log("Checkbox deselezionata: " + checkbox.id);
      if(checkbox.id == 'check1'){
        c1 = false;
        console.log('c1f')
      }else if(checkbox.id == 'check2'){
        c2 = false;
        console.log('c1f')
      }else{
        c3 = false;
        console.log('c1f')
      }
    }
}

function add(){
x=x+z;
document.getElementById("demo").innerHTML = x;
}

function remove(){
x=x-z;
document.getElementById("demo").innerHTML = x;
}

function reset(){
x=0;
document.getElementById("demo").innerHTML = x;
if(c1 == true){
    z=1;
}
if(c2 == true){
    document.getElementById("name").innerHTML = "Counter by Arrow";
}
}

function set(){
do{
  x = prompt("Set the value:")*1;
  if (isNaN(x)){
   alert("A NON-NUMERICAL VALUE HAS BEEN ENTERED, RETRY");
  }else
    document.getElementById("demo").innerHTML = x;
}while(isNaN(x));
}

function setname(){
y = prompt("Set the name of counter:");
document.getElementById("name").innerHTML = y.toUpperCase();
}

function interval(){
do{
  z = prompt("Set the value:")*1;
  if (isNaN(z) || z==0){
   alert("ZERO OR A NON-NUMERIC VALUE HAS BEEN ENTERED, RETRY");
  }
}while(isNaN(z) || z==0);
}