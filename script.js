let leaf=document.getElementById('leaf');
let hill1=document.getElementById('hill1');
let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');
let text=document.getElementById('text');

window.addEventListener('scroll', () => {
    let value=window.scrollY;
    text.style.marginTop =value * 1.3 +'px';
    leaf.style.top =value * -1.5 +'px';
    leaf.style.left=value * 1.5 +'px';
    hill5.style.left =value * 1.5 +'px';
    hill4.style.left =value * -1.5 +'px';
    hill1.style.top =value * 0.2+'px';
});
const inputBox=document.getElementById("input-box");
const List=document.getElementById("List");
function addTask()
{
    if(inputBox.value ==='')
    {
        alert("You must write Task");
       
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        List.appendChild(li);
       let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
        
    }
    inputBox.value="";
}
List.addEventListener("click",function(e){
   if(e.target.tagName === "LI")
   {
      e.target.classList.toggle("checked");
   }
   else if(e.target.tagName === "SPAN")
   {
     e.target.parentElement.remove();
   }
   
},false);

function deleteAll()
{
    
        if(List.value!=='')
        {
        List.innerHTML="";
        }   
}
function modify()
{
    
}
