

    /*function relogio(){
        var data=new Date();
        var hor=data.getHours();
        var min=data.getMinutes();
        var seg=data.getSeconds();
        if(hor < 10){
        hor="0"+hor;
        }
        if(min < 10){
        min="0"+min;
        }
        if(seg < 10){
        seg="0"+seg;
        }
        var horas=hor + ":" + min + ":" + seg;
        document.getElementById("rel").value=horas;
        }
        var timer=setInterval(relogio,1000);*/
       

    const  header = document.getElementById('cabecalho')
    const headerClassList = header.classList
    window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
        if(!headerClassList.contains('scrollHide')){
            headerClassList.add('scrollHide')
        }
    }else{
        if(headerClassList.contains('scrollHide')){
            headerClassList.remove('scrollHide')
            
        }
    }
})

//evento de mouse
    
/*function over(img){
    img.src ="../7dayscode/img/menu.png";
}
function out(img){*/

var interval = 0;
var maxSlider = document.querySelectorAll('.box-image').length -1;

hidden()
function hidden (){
    let img = document.querySelectorAll('.box-image img')
    img[1].style.display = "none"; 
    img[2].style.display = "none";
    img[3].style.display = "none"; 
    img[4].style.display = "none";
    
}

acao();

function  acao () {
    let img = document.querySelectorAll('.box-image img')
    
    setInterval(function(){

 img[interval].style.display = "none";
 interval++;
 if(interval >maxSlider){
     interval =0;
 }
 img[interval].style.display = "block";

    },2000)

}
   
