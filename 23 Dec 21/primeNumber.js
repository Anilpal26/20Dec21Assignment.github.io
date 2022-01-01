//Write a program to print Prime Numbers.
//console.log("Its Working");

var n = prompt("Enter the Number");
    n = parseInt(n);
var count=0;
for(i=1;i<=n;i++){
  if(n%i==0){
     count=count+1;
  }
}
if(count==2){
    console.log("This is a Prime Nubmer");
  }else{
    console.log("This is Not a Prime Nubmer");
  }