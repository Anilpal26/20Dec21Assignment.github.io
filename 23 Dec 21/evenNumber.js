// Write a program to print all Even Number less then "n".
//console.log("Its Working");

var n = prompt("Enter the NUmber");
    n = parseInt(n);
for(i=0; i<=n;i++){
  if(i%2==0){
    console.log(i);
  }
}