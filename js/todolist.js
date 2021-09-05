
let list=document.querySelector("ul");
let el=document.getElementsByTagName('LI');
let close = document.getElementsByClassName("close");


function newElement() {
    var input=document.getElementById("task")
    if(input.value) {
        
        var li=document.createElement("li");
        li.textContent=input.value;
        list.appendChild(li);
        $(".success").toast("show");
        document.getElementById("list").appendChild(li);
        localStorage.setItem('list', JSON.stringify(el));
        
        input.value="";
    }
    else{
        console.log("hatali giris");
        $(".error").toast("show");
        
    }


    for (var i = 0; i < el.length; i++) {
        let span = document.createElement("SPAN");
        let text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        el[i].appendChild(span);
    }
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}


list.addEventListener('click',e=>{
    if(e.target.tagName=='LI') {
        e.target.classList.toggle('checked');
        console.log("checked");
    }
})