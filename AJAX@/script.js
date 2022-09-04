


// AJAX 
// to request to server -- i.e XMLHttpRequest 
// the content that is rendered is of three types 
// Text File , XML Data , JSON Data 
// XMLHttpRequest , it has 5 steps / ready stage 

// We get 2 response from server i.e --  Status and ResponseText
// ResponseText or responseXML , depending on request we have send 
// stauts states various codes  based on result --
// 200 : "OK"
// 403 : "Forbidden"
// 404 : "Not Found"
// ETC.


// To send request to server 
let xhttp = new XMLHttpRequest();

// To check ready state
xhttp.onreadystatechange = function(){
    if (this.readyState==4&&this.status==200){
        document.getElementById("demo").innerHTML=this.responseText;
    }
}


// yeh dono methods ko sath mai call krna hota hai 
xhttp.open("GET","filename.txt",true); // 3 things 
// 1 To get or send data to and from server , we use 'GET' or 'POST' i.e public or private 
// 2 file name or server path 
// 3 true or false 
xhttp.send(); // to send reqeust to server 