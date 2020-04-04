import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor'; 

/*Menu*/
export function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('toggle-btn').classList.toggle('active');
   }
  export function togglemenu1(){
    document.getElementById('first_menu_hidden').classList.toggle('active');
    document.getElementById('remaining_01').classList.toggle('active');
   }
  export function togglemenu2(){
    document.getElementById('second_menu_hidden').classList.toggle('active');
    document.getElementById('remaining_02').classList.toggle('active');
   }
  export function togglemenu3(){
    document.getElementById('third_menu_hidden').classList.toggle('active');
    document.getElementById('remaining_03').classList.toggle('active');
   }
  export function togglemenu4(){
    document.getElementById('fourth_menu_hidden').classList.toggle('active');
   }
   /*Menu*/
   
   
   
   /*drag and drop*/
   var drop = "node2"
   $(function() {
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
               }
               $(ui.draggable).remove();
               $(this).remove();
               initSwap();
           }
       });
     }
   });
   
   
   $(function readropzone() {
     if (drop == "node1") {
       console.log("Digital");
     }
     else {
       console.log("Analogico");
     }
   })
   /*drag and drop*/
   
   
   
   
/*Relogio Digital*/
$(function clock(){setInterval(() => {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    if (hours<10){
      hours = "0" + hours
    }
    if (minutes < 10){
      minutes = "0" + minutes
    }
  
    if(window.location.pathname == '/Simple_goals'){
      document.getElementById('hour').innerHTML = hours;
      document.getElementById('minute').innerHTML = ": " + minutes;}},
    100);
  })
  /*Relogio Digital*/
  
  
  /*Relogio analogico -- foi preciso colocar o new date numa variável certo??*/ 
  $(function timerTick() {
    const aqui =new Date();
      var h = 30 * ((aqui.getHours() % 12) + aqui.getMinutes() / 60);
      var m = 6 * aqui.getMinutes();
      var s = 6 * aqui.getSeconds();
      if(window.location.pathname === '/Simple_goals'){
        document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
        document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
        document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');}
      setTimeout(timerTick, 100);
    })
  
  /*Relogio analogico*/
   
   
   
   /*Cores*/
   export function background_color() {
    var x = document.getElementById("myColor");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('rect').style.backgroundColor =  currentVal;
   }


   export function digital_color(jscolor) {
       document.getElementById('node1').style.color = '#' + jscolor
   }
   export function analog_hours(jscolor) {
       document.getElementById('hour_pointer').style.stroke = '#' + jscolor
   }
   export function analog_minutes(jscolor) {
       document.getElementById('minute_pointer').style.stroke = '#' + jscolor
   }
   export function analog_seconds(jscolor) {
       document.getElementById('second_pointer').style.stroke = '#' + jscolor
   }
   export function bar_color(jscolor) {
       document.getElementById('bar').style.stroke = '#' + jscolor
   }
   export function center_circule(jscolor) {
       document.getElementById('center_dot').style.stroke = '#' + jscolor
   }
   export function text_color(jscolor) {
       document.getElementById('texto').style.color = '#' + jscolor
   }
   /*Cores*/
   
   
   /*personalização*/
   var tamanho_barra = 101;
   var raio = 16;
   var right = true;
   
   
   export function bar_thickness() {
       var novo = document.getElementById('bar_thickness').value;
       novo = (novo/100)*2+0.1;
       document.getElementById('bar').style.strokeWidth =  novo;
   }
   
   
   export function bar_type() {
       var novo = document.getElementById('bar_type').value;
       if (novo == "full"){
         document.getElementById('bar').style.strokeDasharray  = "101,100"
         tamanho_barra = 101;
       }
       else if (novo == "tophalf") {
         document.getElementById('bar').style.transform = "rotate(" + 180 + "deg)"
         document.getElementById('bar').style.strokeDasharray  = "50,100"
         tamanho_barra = 50;
         bar_radius();
       }
       else {
         document.getElementById('bar').style.transform = "rotate(" + 0 + "deg)"
         document.getElementById('bar').style.strokeDasharray  = "50,100"
         tamanho_barra = 50;
         bar_radius();
       }
   }
   
   
  export function bar_radius() {
       var novo = document.getElementById('bar_radius').value;
       novo = (novo/100)*15+1;
       raio = novo;
       document.getElementById('bar').style.r =  novo;
       document.getElementById('bar').style.strokeDasharray = (2*3.1415*novo)*(tamanho_barra/100)+",100";
   }
   
   
  export function update_rotation (){
       if (right){
         right = false;
       }
       else {
         right = true;
       }
   }
   
   
  export function text_size() {
       var novo = document.getElementById('text_size').value;
       document.getElementById('texto').style.fontSize = novo + "px";
   }
   /*personalização*/
   