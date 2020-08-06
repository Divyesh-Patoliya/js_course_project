// chellange 1

function ageInDays() {
    var birthYear = prompt(" what year you born ?");
    var ageInDayss=(2018 - birthYear)* 365;
    var h1= document.createElement('h1');
    var textAnswer= document.createTextNode('you are '+ ageInDayss+ ' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}  
//  ch 2:cate genertater
function genCat(){
    var image=document.createElement('img');
    var div =document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?formet=src&type=gif&size=small";
    div.appendChild(image);
}

// chanllange 3: R P S

function rpsGame(yourChoice){
    console.log('your Choise : ',yourChoice.id)
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randomToRpsInt());
    console.log('computer Choice : ',botChoice)
    //console.log(botChoice)
    results= decideWinner(humanChoice,botChoice);
    console.log(results);

    message = finalMessage(results); //{message:You Won !, colore: green)
    rpsFrontEnd(humanChoice,botChoice,message);   
    console.log(message);

}

function randomToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
    var rpsData ={
        'rock' : { 'rock' : 0.5, 'paper': 0, 'scissors':1},
        'paper' : { 'rock' : 1, 'paper': 0.5, 'scissors':0},
        'scissors':{ 'rock' : 0, 'paper': 1, 'scissors':0.5},
    }
    var yourScore =rpsData[humanChoice][botChoice];
    var computerScore = rpsData[botChoice][humanChoice];

    return[yourScore,computerScore];
    
}
function finalMessage([yourScore,computerScore]){
    if (yourScore ===0 ){
        return {'message': 'you lost!', 'color':'red'}
    }else if(yourScore === 0.5){
        return {'message': "you tied!", 'color':'yellow'};
    }else{
        return {'message': 'You won!!', 'color':'green'};
    }
}
function rpsFrontEnd(humanChoice,botChoice,messageForPrint) {
    var imagesData={
        'rock':document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create results frontend
    var humanDiv =document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesData[''+humanChoice] + "' height=200 style=' margin: 10px; border-radius: 5%; box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color:"+ messageForPrint['color']+"; font-size: 60px;'>"+ messageForPrint['message']+"</h1>"
    botDiv.innerHTML = "<img src='" +imagesData[''+botChoice] + "' height=200 style=' margin: 10px; border-radius: 5%; box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}