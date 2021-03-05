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

      document.querySelector('#image')
         .addEventListener(
            'click',
            printPosition,
            false
      );
      
      // let's create the overlays
      let fLDiv = document.createElement("div");
      let leftNode = document.createTextNode("<");
      fLDiv.appendChild(leftNode);
      fLDiv.style.float = "left";
      fLDiv.style.position = "fixed";
      fLDiv.style.left = "8rem";
      fLDiv.style.top = "16rem";
      fLDiv.style.fontSize = "6.5rem";
      fLDiv.style.color = "rgba(20,20,20,.05)";
      fLDiv.id = "leftC";
      fLDiv.addEventListener("click", goPrev);
      document.getElementById("image").appendChild(fLDiv);

      let fRDiv = document.createElement("div");
      let rightNode = document.createTextNode(">");
      fRDiv.appendChild(rightNode);
      fRDiv.style.float = "right";
      fRDiv.style.position = "fixed";
      fRDiv.style.left = "33rem";
      fRDiv.style.top = "16rem";
      fRDiv.style.fontSize = "6.5rem";
      fRDiv.style.color = "rgba(20,20,20,.05)";
      fRDiv.id = "rightC";
      fRDiv.addEventListener("click", goNext);
      document.getElementById("image").appendChild(fRDiv);






   }
)

function printPosition(e) {
   // console.log(getPosition(e));
   let xy = getPosition(e.currentTarget);
   console.log(xy);
   console.log('xx', xy.x, 'yy', xy.y);
}   
// helper function to get an element's exact position
// courtesy of kirupa https://www.kirupa.com/html5/getting_mouse_click_position.htm
function getPosition(el) {
   var xPosition = 0;
   var yPosition = 0;
  
   while (el) {
     if (el.tagName == "BODY") {
       // deal with browser quirks with body/window/document and page scroll
       var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
       var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
  
       xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
       yPosition += (el.offsetTop - yScrollPos + el.clientTop);
     } else {
       xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
       yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
     }
  
     el = el.offsetParent;
   }
   console.log('gp: xpos:', xPosition);
   return {
     x: xPosition,
     y: yPosition
   };
 }