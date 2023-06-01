var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerReady(event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
  }
  function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
      color = "#37474F"; 
    } else if (playerStatus == 0) {
      color = "#FFFF00";
    } else if (playerStatus == 1) {
      color = "#33691E"; 
    } else if (playerStatus == 2) {
      color = "#DD2C00"; 
    } else if (playerStatus == 3) {
      color = "#AA00FF"; 
    } else if (playerStatus == 5) {
      color = "#FF6DOO"; 
    }
    if (color) {
      document.getElementById('existing-iframe-example').style.borderColor = color;
    }
  }
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
  }