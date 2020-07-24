import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor';
import * as db from './database';



/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;

export function togglemenu(){
 document.getElementById('sidebar').classList.toggle('active');
 document.getElementById('toggle-btn').classList.toggle('active');
}
export function togglemenu1(){
  document.getElementById('first_menu_hidden11').classList.toggle('active');
  document.getElementById('remaining_11').classList.toggle('active');
 }
export function togglemenu2(){
 document.getElementById('second_menu_hidden').classList.toggle('active');
document.getElementById('remaining_02').classList.toggle('active');
}
export function togglemenu3(){
document.getElementById('third_menu_hidden').classList.toggle('active');
document.getElementById('remaining_09').classList.toggle('active');
}
export function togglemenu4(){
 document.getElementById('fourth_menu_hidden').classList.toggle('active');
}
/*Menu*/

/*drag and drop*/
/*drag and drop*/

var drop = "node1";
setTimeout(function() {
  initSwap();
  function initSwap() {
  initDroppable($("#dropdiv div,#dragdiv div"));
  initDraggable($("#dragdiv div,#dropdiv div"));
  }
  function initDraggable($elements) {
  $elements.draggable({
      appendTo: "body",
      helper: "clone",
      revert: "invalid"
  });
  }
  function initDroppable($elements) {
  $elements.droppable({
      activeClass: "ui-state-default",
      hoverClass: "ui-drop-hover",
      accept: ":not(.ui-sortable-helper)",
      over: function(event, ui) {
          var $this = $(this);
          
      },
      drop: function(event, ui) {
        
        var $this = $(this);
        var linew1 = $(this).after(ui.draggable.clone());
        var linew2 = $(ui.draggable).after($(this).clone());

        var moved = ui.draggable.attr("id");// Obtem o id do elemento sendo arrastado

        if (moved==drop) {//Caso seja arrastado da direita para a esquerda
          drop = $(this).attr("id");
          
        }
        else{ //Caso seja arrastado da esquerda para a direita
          drop = moved;
          if(moved=="node1"){
            verifica('WT','Digital');}
            else{verifica('WT','Analogico')}           
        }
          $(ui.draggable).remove();
          $(this).remove();
          initSwap();
      }
  });
}
},100);

// $(function readropzone() {
//   if (drop == "node1") {
//      verifica('WT','Digital');
//     console.log("Digital");
//   }
//   else {
//      verifica('WT','Analogico');
//     console.log("Analogico");
//   }
// })
/*drag and drop*/



/*Relogio Digital*/
$(function clock(){
  setInterval( () => {
  const fullDate = new Date();
  const aqui =new Date();
    var h = 30 * ((aqui.getHours() % 12) + aqui.getMinutes() / 60);
    var m = 6 * aqui.getMinutes();
    var s = 6 * aqui.getSeconds();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  if (hours<10){
    hours = "0" + hours
  }
  if (minutes < 10){
    minutes = "0" + minutes
  }
  if(window.location.pathname == '/Mikros'){
   document.getElementById('hour').innerHTML = hours;
   document.getElementById('minute').innerHTML = ": " + minutes;
   document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
   document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
   document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');

  }
   
},100);}



)
/*Relogio Digital*/



/*Relogio analogico*/
// $(function timerTick() {
//   const aqui =new Date();
//     var h = 30 * ((aqui.getHours() % 12) + aqui.getMinutes() / 60);
//     var m = 6 * aqui.getMinutes();
//     var s = 6 * aqui.getSeconds();
//     if(!window.location.pathname == '/Mikros'){
//       document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
//       document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
//       document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');
//     }
//     setTimeout(timerTick, 100);
//   })
    
  
/*Relogio analogico*/


/*Cores*/
export function background_color() {
    var x = document.getElementById("myColor");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('rect').style.backgroundColor =  currentVal;
    
    verifica('BC',currentVal);
}

export function digital_color() {
  var x = document.getElementById("myColor1");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('node1').style.color =  currentVal;
  verifica('DC',currentVal);
}

export function analog_hours() {
  var x = document.getElementById("myColor2");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('hour_pointer').style.stroke = currentVal;
  verifica('HC',currentVal);
}

export function analog_minutes() {
  var x = document.getElementById("myColor3");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('minute_pointer').style.stroke = currentVal;
  verifica('MC',currentVal);
}

export function analog_seconds() {
  var x = document.getElementById("myColor4");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('second_pointer').style.stroke = currentVal;
  verifica('SC',currentVal);
}

export function center_circule() {
  var x = document.getElementById("myColor5");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('center_dot').style.stroke = currentVal;
  verifica('CC',currentVal);
}

export function bar_color1() {
  var x = document.getElementById("myColor6");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('bar1').style.stroke = currentVal;
  verifica('B1C', currentVal);
}

export function bar_color2() {
  var x = document.getElementById("myColor7");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('bar2').style.stroke = currentVal;
  verifica('B2C', currentVal);
}

export function text_color() {
  var x = document.getElementById("myColor8");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('valorescrito').style.color =  currentVal;
  verifica('TC',currentVal);
}
/*Cores*/



/*personalização*/
var tamanho_barra1 = 65;
var tamanho_barra2 = 30;
var raio1 = 16;
var raio2 = 14;
var right = true;
var degrees= -90;
var position = "full"


export function bars_radius() {
    var novo = document.getElementById('bar_radius').value;
    novo = (novo/100)*15+1;
    raio1 = novo;
    raio2 = raio1 - 2;
    var circle = document.getElementById('bar1');
    circle.setAttribute("r", novo);
    document.getElementById('bar1').style.strokeDasharray = (2*3.1415*raio1)*(tamanho_barra1/100)+",100";
    var circle2 = document.getElementById('bar2');
    circle2.setAttribute("r", novo);
    document.getElementById('bar2').style.strokeDasharray = (2*3.1415*raio2)*(tamanho_barra2/100)+",100";
    verifica('BR1',raio1);
    verifica('BR2',raio2);
}


export function bar_thickness_1() {
    var novo = document.getElementById('bar_size1').value;
    novo = (novo/100)*2+0.2;
    document.getElementById('bar1').style.strokeWidth =  novo;
    verifica('BT1',novo);
}


export function bar_thickness_2() {
    var novo = document.getElementById('bar_size2').value;
    novo = (novo/100)*2+0.2;
    document.getElementById('bar2').style.strokeWidth =  novo;
    verifica('BT2',novo);
}


export function bar_type(){
  var novo = document.getElementById('bar_type').value;
  verifica('BSTAR',novo);
  if (novo == "full"){
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar2').style.transform = "rotate(" + 270 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "65,100"
    document.getElementById('bar1').style.transform = "rotate(" + 270 + "deg)"
    position = "full"
    degrees = -90;
    tamanho_barra1 = 65;
    tamanho_barra2 = 30;
    bars_radius()
  }
  else if (novo == "tophalf") {
    document.getElementById('bar2').style.transform = "rotate(" + 180 + "deg)"
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar1').style.transform = "rotate(" + 180 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "50,100"
    position = "tophalf"
    degrees = -180;
    tamanho_barra1 = 50;
    tamanho_barra2 = 30;
    bars_radius()
  }
  else {
    document.getElementById('bar2').style.transform = "rotate(" + 0 + "deg)"
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar1').style.transform = "rotate(" + 0 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "50,100"
    position = "bottomhalf"
    degrees = 0;
    tamanho_barra1 = 50;
    tamanho_barra2 = 30;
    bars_radius()
  }
}


export function update_rotation(){
  
  if (right){
    verifica('BROT','COUNTERCLOCKWISE');
    if(position == "full"){
      var novo = degrees -180
      document.getElementById('bar2').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      document.getElementById('bar1').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      right = false;
    }
    else {
      var novo = degrees
      document.getElementById('bar2').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      document.getElementById('bar1').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      right = false;
    }
  }
  else {
    verifica('BROT','CLOCKWISE');
    document.getElementById('bar2').style.transform = "rotate(" + degrees  + "deg) "
    document.getElementById('bar1').style.transform = "rotate(" + degrees  + "deg) "
    right = true;
  }
}
/*personalização*/


// --------------------------------------------

/*vetores cores iniciais*/
var cores = ["#FF0000", "#FFFFFF", "#00FF00", "#0000FF", "#FF4AD7", "#FF8400",  "#FFFFD7"];
/*vetores cores iniciais*/

/*Matriz barras iniciais*/
var matrix = [];
for(var i=0; i<7; i++) {
    matrix[i] =  new Array(7);
}
for(var i=0; i<7; i++) {
  matrix[i][0]=i;
  matrix[i][1]=16;
  matrix[i][2]=20;
  matrix[i][3]=-180;
  matrix[i][4]=true;
  matrix[i][5]="tophalf";
  matrix[i][6]=2;
  matrix[i][7]="csteps";
}
/*Matriz barras iniciais*/




/*Personalização dos elementos*/
export function barsize (barnumber){
      var tamanho = document.getElementById('barsize'+barnumber).value;
  
  tamanho = (tamanho/100)*2+0.1;
  matrix[barnumber][6]=tamanho;
  document.getElementById('bar'+barnumber).style.strokeWidth =  tamanho;
}





/*Personalização dos elementos*/




//fechar e abrir menu-----------------
export function abrir(){
  document.getElementById('testesmicro').classList.add('active')
}

export function fechar(){
  document.getElementById('testesmicro').classList.remove('active')
}
//fechar e abrir menu-----------------

//TEXTO
var captura="";

export function cap(){
  captura= document.getElementById('valor').value;
  document.getElementById('valorescrito').innerHTML= captura;
  verifica('TEXT',captura);
}

var removido="";
export function remo(){
  document.getElementById('valor').value=removido;
  document.getElementById('valorescrito').innerHTML=removido;
  verifica('TEXT',removido);

}

export function text_size() {
  var novo = document.getElementById('text_size').value;
  document.getElementById('valorescrito').style.fontSize = novo + "px";
  verifica('TEXT_S',novo);

}
//TEXTO

//CODIGO
var codigo="MiKros";
var array_codigo=["MIKROS"];

export function concatenar(id,valor){
  array_codigo.push(id,valor);
}


function verifica(id, valor){
  var i = 0;
  while(i<array_codigo.length-1){
    if(id==array_codigo[i]){
      array_codigo[i+1] = valor;
      i++;
      return 0;
    }
    else{
      i++;
    }
   
  }
  concatenar(id, valor);

}

export function cod(){
  // document.getElementById('codee').innerHTML=array_codigo;
  var i=1;
  
  if(array_codigo.length<2){
    alert('Não foi introduzida nenhuma configuração');
    
    
  }
  while(i<array_codigo.length){
    db.database_new('Mikros',array_codigo[i], array_codigo[i+1]);
    i=i+2;
  }
}
//CODIGO