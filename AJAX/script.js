//Ajax --- Asynchronous JavaScript and XML
// helps fetch data asynchronously
// Morden JS use JSON to transfer data instead of XML
// Non-Blocking method
// Readability is less as compared to JSON
// NO need to reload/refresh page

let fetchBtn = document.querySelector("#fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);
// if paranthesses is applied after function name above , then it will call the function above only

function buttonClickHandler() {
  console.log("You have clciked the fetchBtn");
  // Instantiate an XHR  object
  let xhr = new XMLHttpRequest();

  // What to do on progress (Optional) , here you can show a spinner to show data is  loading 
  xhr.onprogress = function () {
    console.log("On progress");
  };
  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error("Some error occured");
    }
  };

  // Before onload , we used onreadystatechange funciton
  xhr.onreadystatechange = function () {
    console.log("ready state is", xhr.readyState);
  };

  // Open the object
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// Sending some data
xhr.open("POST",'http://restapi.adequateshop.com/api/Tourist',true);
xhr.getResponseHeader("Content-type","application/json");
  // Get means public data posting , Post means to upload data privatily 
  // then comes file or server name 
  // then comes weather you want requst to be asynchronous or synchronous i.e true or false 

  // Send the request , To send above code to server 
  params = `{'name':"testsdfsdf,"salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("We are done");
}


// 5  xhr Stage of request
// 0 to 4
//  0 unsent - client has been created open() , not called yet
//  1 Opended - open() has been called , connection btw client and server has been established
// 2 headers_REceived - send() has been called , request has been accepted by server
// 3 Loading - Downloading .response.Text holds partial data , processing data
// 4 Done - The operation has been completed


// Status Code , 404 , 200 , etc... 
// 'Fake JSON data' , site name  to use it here 
