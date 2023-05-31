// Function: Preload images for the website
var images = new Array();
      
      function preloadImages(){
      
          for (i=0; i < preloadImages.arguments.length; i++){
      
            images[i] = new Image();
      
            images[i].src = preloadImages.arguments[i];
      
          }
          
      }
      
      // Add images to preload here
      preloadImages("/website/resources/capstone_2.jpg", "/website/resources/me.jpg", "/website/resources/Movement_Final_Face_On.gif", "/website/resources/oddoneout.png", "/website/resources/cubespace.png", "/website/resources/crossword.jpg", "/website/resources/arcade.jpg", "/website/resources/gameoflife.gif");