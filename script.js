let tmee=11;
var scr=0;
var hitnum=0;
function nakeBubble(){

    var clutter="";
    for(var i=1;i<=102;i++){
        var t=Math.floor(Math.random()*10);
        clutter+= `<div class="bubble">${t}</div>`;
    }
    
    document.querySelector("#tbot").innerHTML=clutter;
}
function incScore(){
    scr+=10;
    document.querySelector("#score").textContent=`${scr}`
}
function newHit(){
    hitnum=Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=`${hitnum}`
}
function runtime(){

    var timeint=setInterval(function(){
        if(tmee>0){
            tmee--;
            document.querySelector("#tim").textContent=tmee;
        }else{
            clearInterval(timeint);
            document.querySelector("#tbot").innerHTML=`<h1>Your Score ${scr}</h1>
             `;
            // document.querySelector("#tbot").innerHTML=` `;
            // document.querySelector("#tbot").style.display = "block"

            
        }

    },1000)
}

function check(){
    document.querySelector("#tbot").addEventListener("click",function(x){
        var t=Number(x.target.textContent);
        if(t==hitnum){
            incScore();
            newHit();
            nakeBubble();
        }
    });
}
nakeBubble();
runtime();
newHit();
check();

