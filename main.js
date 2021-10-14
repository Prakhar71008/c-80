var namearray=[];
function submit(){
    var name=document.getElementById("guest").value ;

    
    namearray.push(name);
    document.getElementById("display").innerHTML=namearray.toString();
   
       
}
function show(){
    var n=namearray.join("<br>");
    document.getElementById("show1").innerHTML=n.toString();
    document.getElementById("sort_button").style.display="inline-block";

}
function sortlist(){
    namearray.sort();
    var n=namearray.join("<br>");

    document.getElementById("sorted").innerHTML=n.toString();

}
function searching(){
    var s=document.getElementById("input").value;
    var found=0;
    for(var j=0; j<namearray.length; j++)
    {
        if(s==namearray[j]){
            found=found+1;
        }
    }
    document.getElementById("p1").innerHTML="name found "+found+" time/s";
}