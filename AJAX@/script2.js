

 function loadData(){
    let xhttp = new XMLHttpRequest();

    // upr ka code connection start krega , niche ke dono code request send krege and beech ka yh code jo data aya hai usko kha show krna hai yh btayega 
    xhttp.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
    console.log(this.responseText); // OR 
    console.log(this.response);
    document.querySelector('#demo').innerHTML = this.response; // OR
    document.querySelector('#demo').innerHTML = this.responseText;
}
else if (this.readyState == 4 && this.status == 404){
    console.error("File not dsffound");
}
    }
    // xhttp.open("GET","filename.txt",true);  // use khud ke file or any server path
    xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
xhttp.send();
 }
