function too(){
    var input = document.getElementById("input")
    var types = input.getAttribute("type")
    if(types==="password"){
        input.setAttribute("type","text")
    }
    else{
        input.setAttribute("type","password")
    }
}

function inp1(){
    var bad = document.getElementById("bad")
    var week = document.getElementById("week")
 var eee = document.getElementById("eee")
var inpus = document.getElementById("input").value
var inp1 = document.getElementById("inp1")
var strong = document.getElementById("strong")
var exe = document.getElementById("exe")
    document.getElementById("input").value=""
    eee.style.width="0%"
    inp1.style.display = "none"
    bad.style.display="none"
    strong.style.display="none"
    week.style.display="none"
    exe.style.display="none"
  
}


document.getElementById("input").onkeyup =  function (){
    var bad = document.getElementById("bad")
    var week = document.getElementById("week")
 var eee = document.getElementById("eee")
var inpus = this.value.length;
var inp1 = document.getElementById("inp1")
var strong = document.getElementById("strong")
var exe = document.getElementById("exe")

if(inpus===0){
    eee.style.width="0%"
    inp1.style.display = "none"
    bad.style.display="none"
    strong.style.display="none"
    week.style.display="none"
    exe.style.display="none"
}
    
 else if(inpus<4){
   
    eee.style.width= inpus*10+"%"
    eee.style.backgroundColor="red"
    inp1.style.display = "none"
    week.style.display="block"
    bad.style.display="none"
    strong.style.display="none"
    exe.style.display="block"
}
 else if(inpus>=4 && inpus < 8){
   
    eee.style.width=inpus*10 + "%"
    eee.style.backgroundColor="orange"
    inp1.style.display = "inline-block"
    bad.style.display="block"
    week.style.display="none"
    strong.style.display="none"
    exe.style.display="block"
}
else if(inpus>=8 && inpus<11){
    inp1.style.display = "inline-block"
    eee.style.width=inpus*10 + "%"
    eee.style.backgroundColor=" yellowgreen"
    strong.style.display="block"
    week.style.display="none"
    bad.style.display="none"
    exe.style.display="block"
}

}