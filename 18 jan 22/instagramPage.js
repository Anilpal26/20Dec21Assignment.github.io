var like = document.getElementById("heart");

function heartButton() {
    if (like.style.color == "grey") {
      like.style.color = "#FF0000";
    } else {
      like.style.color = "grey";
    }
}

like.addEventListener('click', heartButton);