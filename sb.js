// MToebler and CSE 471 Team 4. Week 7 Storyboard slider

document.addEventListener(
   'DOMContentLoaded',
   () => {
      var current_img = null;
      var num = 0;
      var max = 6;

      current_img = document.querySelector("#curr_img");


      document.querySelector("header>div")
         .textContent = "SB_" + num;

      updateTitle = () => document.querySelector("header>div")
         .textContent = "SB_" + num;

      goNext = () => {
         num++;
         num > max ? num = 1 : num = num;
         current_img.src = "./" + "SB_" + num + ".png";
         updateTitle();
      };

      goPrev = () => {
         num--;
         num < 0 ? num = max : num = num;
         current_img.src = "./" + "SB_" + num + ".png";
         updateTitle();
      };

      function keyPressed(e) {
         // console.log("here", e);
         switch (e.keyCode) {
            case 46:
               goNext();
               break;
            case 44:
                  goPrev();
               break;
            default:
               console.log("not playing", e.keyCode);
               break;
         }
      }

      document.addEventListener("keypress", keyPressed);


      document.querySelector('#next')
         .addEventListener(
            'click',
            goNext,
            false
      );

      document.querySelector('#prev')
         .addEventListener(
            'click',
            goPrev,
            false
      );

   }
)