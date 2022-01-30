var table = document.getElementById("table");

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
       }
  })
  .catch((err)=> console.log("This Api Is Fail"))


const searchData =()=>{
    let filter = document.getElementById('searchBar').Value.toUpperCase();

    let tr = document.getElementsByTagName('tr');

    let td = tr.getElementsByTagName('td');

    for(var i=0; i<td.length; i++){
        let a = tb[i].getElementsByTagName('td')[0];

        let textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            td[i].style.display = '';
        }else{
            td[i].style.display = 'none';
        }
    }
}