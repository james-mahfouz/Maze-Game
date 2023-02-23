//code to wait for the html to load before starting the script
window.onload = function() {
    //creating variable and assigning elements by searching for IDs and class name
    var start = document.getElementById('start')
    var boundaries = document.getElementsByClassName('boundary')
    var winorlose =document.getElementsByClassName('example')[0]

    //when the mouse hover over the start dive the following apply
    start.addEventListener('mouseover', function(){
        winorlose.innerHTML = "Game Started"
        //when the mouse hover over start 
        for(var j = 0; j<boundaries.length; j++){
            boundaries[j].classList.remove('youlose')
        }

        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener('mouseover', function() {
                winorlose.innerHTML = "You Lose"
                console.log("loss")
                for(var j = 0; j<boundaries.length; j++){
                    boundaries[j].classList.add('youlose')    
                }
            })
        }
        
    })
  }
  
