var countDown = setInterval(function() {
    var timer = new Date("Aug 15, 2022 11:15:00").getTime();
    var currentTime = new Date().getTime();
    var differenceTime = timer - currentTime;
      
    var days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((differenceTime % (1000 * 60)) / 1000);
        
    if (differenceTime < 0) {
        clearInterval(countDown);
        document.getElementById("demo").innerHTML = "Time Up";
    }else{
          document.getElementById("Output").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s remaining";
    } 
}, 1000);