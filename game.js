window.onload = function() {
    var start = document.getElementById('start')
    var status = document.getElementById('status')
    var boundaries = document.getElementsByClassName('boundary')


    start.addEventListener('click', function(){
        console.log("Game has started")
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener('mouseover', function() {
                console.log('Mouse is hovering over a boundary element!');
                for(var j = 0; j<boundaries.length; j++){
                    boundaries[j].classList.add('youlose')
                }
            });
          }
    })
  }
  
