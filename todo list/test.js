var text=document.getElementById('text-box');
text.id="t1";
var button=document.getElementById('b1');
button.addEventListener('click',add);
function add(){
  var ul=document.getElementById('ul1');
  const text1=text.value;
  var text2=text1.toUpperCase();
  if(text2!=''){
    var l=document.createElement('li');
    l.textContent=text1+"      ";
    l.id="l1";
    var btn=document.createElement('button');
    btn.innerHTML='DELETE';
    btn.id='b2';
    l.appendChild(btn);
    ul.appendChild(l);
    text.value="";
  }
}
