// your code here
//var name=document.getElementById('name');
//var year=document.getElementById('year');
var btn=document.getElementById('submit');
//var tex=document.getElementById('url');
function fun(){
	var name=document.getElementById('name');
	var year=document.getElementById('year');
	var tex=document.getElementById('url');
	var url="https://localhost:8080";
	var nam=name.value;
	var yer=year.value;
	alert("hi");
	if(true){
		tex.textContent=url+"?name="nam+"&year="+yer;
	}
	//alert(nam);
	//tex.textContent=url+"?name="+nam;
}
btn.addEventListener('click',fun);
