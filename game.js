//code to wait for the html to load before starting the script
window.onload = function() {
    //creating variable and assigning elements by searching for IDs and class name
    var body = document.body
    var start = document.getElementById('start')
    var game = document.getElementById('game')
    var boundaries = document.getElementsByClassName('boundary')
    var status = document.getElementById('status')
    var end = document.getElementById('end')
    var score = document.getElementsByClassName('example')[0]
    score.innerHTML = 0

    //when the mouse hover over the start dive the following apply
    start.addEventListener('mouseover', function(){
        status.innerHTML = "Game Started"

        game.addEventListener('mouseleave', function(){
            if (status.innerHTML=="Game Started"){
                score.innerHTML = parseInt(score.innerHTML) -10
                console.log("lose")//for debugging reason
                //adding the class you lose that makes the boundaries red
                body.style.backgroundColor = 'red';    
                status.innerHTML = "You Lose"
            }  
        })

        //when the mouse hover over start to remove the wall color if available
        for(var j = 0; j<boundaries.length; j++){
            boundaries[j].classList.remove('youlose')
        }
        body.style.backgroundColor = 'white'; 

        //when mouse hover over boundaries
        for (var i = 0; i < boundaries.length; i++) {         
            boundaries[i].addEventListener('mouseover', function() {
                if (status.innerHTML=="Game Started"){
                    score.innerHTML = parseInt(score.innerHTML) -10
                    console.log("lose")//for debugging reason
                    //adding the class you lose that makes the boundaries red
                    for(var j = 0; j<boundaries.length; j++){
                        boundaries[j].classList.add('youlose')    
                    }
                    status.innerHTML = "You Lose"
                }  
                
            })
        }  
        
        //when hover over end
        end.addEventListener('mouseover', function(){
            if (status.innerHTML == "Game Started"){
                score.innerHTML = parseInt(score.innerHTML) + 5
                console.log("win")//for debugging reason
                status.innerHTML = "You Win"
            }                       
        })
    }) 

    //when start is clicked reset the score
    start.addEventListener('click', function(){
        score.innerHTML = 0
    })
}
  
