//code to wait for the html to load before starting the script
window.onload = function() {
    //creating variable and assigning elements by searching for IDs and class name
    var start = document.getElementById('start')
    var boundaries = document.getElementsByClassName('boundary')
    var status = document.getElementById('status')
    var end = document.getElementById('end')
    var score = document.getElementsByClassName('example')[0]
    score.innerHTML = 0

    //when the mouse hover over the start dive the following apply
    start.addEventListener('mouseover', function(){
        
        status.innerHTML = "Game Started"

        //when the mouse hover over start 
        for(var j = 0; j<boundaries.length; j++){
            boundaries[j].classList.remove('youlose')
        }

        for (var i = 0; i < boundaries.length; i++) {         
            boundaries[i].addEventListener('mouseover', function() {
                if (status.innerHTML=="Game Started"){
                    score.innerHTML = parseInt(score.innerHTML) -10
                    console.log("lose")
                    for(var j = 0; j<boundaries.length; j++){
                        boundaries[j].classList.add('youlose')    
                    }
                    status.innerHTML = "You Lose"
                }  
                
            })
        }  
        
        end.addEventListener('mouseover', function(){
            if (status.innerHTML == "Game Started"){
                score.innerHTML = parseInt(score.innerHTML) + 5
                console.log("win")
                status.innerHTML = "You Win"
            }                       
        })
    }) 
}
  
