 

// var container = document.getElementById("container");
var table = document.getElementById("table");
// var newURL = "https://jsonplaceholder.typicode.com/posts";
// var urlAPI = " https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
var urlAPI = " http://universities.hipolabs.com/search?country=india";

fetch(urlAPI)
  .then((someThing)=> {
       console.log("Inside First Then");
       return someThing.json();
  })
  .then((resp)=> {
       console.log("Inside Second Then");
       console.log(resp);
       for(var i=0;i<resp.length;i++){
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          td.innerText=resp[i].name;
          tr.appendChild(td);
          table.appendChild(tr);
          // element.innerText = resp[i].name;
          // container.appendChild(element);
       }
  })
  .catch((err)=> console.log("This Api Is Fail"))
     