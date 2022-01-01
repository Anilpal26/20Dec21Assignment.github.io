//console.log("Its Working");

//Write a program to print any Perfect square
 
var n = prompt("Enter The number");
var num = 0;
for(var i = 0;i<n ; i++){
 if(n%i==0 && n/i==i){
   num=1;
   break;
 }
}
if(num==1){
 console.log("Perfect Square");
}else{
 console.log("Not a Perfect Square");
}