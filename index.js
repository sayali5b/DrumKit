//.addEventListener("click", handleClick);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      play(this.textContent);
      buttonAnimation(this.textContent);
    });
  }

  document.addEventListener("keydown", function(event){
     play(event.key);
     buttonAnimation(event.key);
  });

 function play(letter){

   switch (letter) {
     case 'w':
       var audio = new Audio("sounds\\tom-1.mp3");
       audio.play();
       break;
     case 'a':
       var audio = new Audio("sounds\\tom-2.mp3");
       audio.play();
       break;
     case 's':
       var audio = new Audio("sounds\\tom-3.mp3");
       audio.play();
       break;
     case 'd':
       var audio = new Audio("sounds\\tom-4.mp3");
       audio.play();
       break;
     case 'j':
       var audio = new Audio("sounds\\crash.mp3");
       audio.play();
       break;
     case 'k':
       var audio = new Audio("sounds\\kick-bass.mp3");
       audio.play();
       break;
     case 'l':
       var audio = new Audio("sounds\\snare.mp3");
       audio.play();
       break;

     default:
       console.log(txt);
     }
 }

 function buttonAnimation(buttonPressed){
   document.querySelector("."+buttonPressed).classList.add("pressed");
   setTimeout(function()
   {
    document.querySelector("."+buttonPressed).classList.remove("pressed");
  },100);
 }
  /* EVENT-LISTENER CALLING OR
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
  function handleClick()
  {
    alert("I got clicked.");
  }
  */
