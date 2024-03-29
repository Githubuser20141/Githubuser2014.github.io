/* I have previous javascript knowledge. I learned js through self learning by many YouTube videos and online resources. I've known js for about a year now so if anything is not from codeacademy, It is from my prior knowledge. Also I have done extra research on html and css. That knowledge has all come from Youtube and w3 schools as well, but it would be very tedious to go back and cite ALL of it so yeah :) */

//stage is to check that the answer is valid for the current stage. choice is the user input checked in the switch statement.
var stage = 1;
var choice = null;

// I am lazy so I made a function. This one ends the game for me 
function dead() {
  stage = 1;
  $('#submit').hide();
  $('#choice').hide();
  $('#button-title').hide();
  $('#choice').val("");
  $('#retry').show();
  $('#game-img').attr("src", "https://i.ytimg.com/vi/OxEiwH1LLDk/maxresdefault.jpg");
}
// I am lazy so I made another function. This one shows a victory for me
function win() {
  stage = 1;
  $('#submit').hide();
  $('#choice').hide();
  $('#button-title').hide();
  $('#choice').val("");
  $('#retry').show();
  $('#game-img').attr("src", "https://pbs.twimg.com/media/DKvC8P3WsAAwKQM.jpg");
}

function dance() {
  stage = 1;
  $('#submit').hide();
  $('#choice').hide();
  $('#button-title').hide();
  $('#choice').val("");
  $('#retry').show();
  $('#game-img').attr("src", "https://i.ytimg.com/vi/glx_s1bNYI4/maxresdefault.jpg");
}

//this is part of a cool easter egg. There is a puzzle built in to the game better explained a bit later.
function beaten() {
  stage = 1;
  $('#submit').hide();
  $('#choice').hide();
  $('#button-title').hide();
  $('#choice').val("");
  $('#retry').show();
  $('#game-img').attr("src", "http://3.images.southparkstudios.com/blogs/southparkstudios.com/files/2014/02/1008-MWBZ-faq-q1.jpg?quality=0.8");
}

// This is my algorithm. The if/else statements are taking in the user choice and turning it into new scenarios. Also if/else is logic stuff.
$(document).ready(() => {
  $('#submit').on('click', () => {
    
    choice = $('#choice').val().toLowerCase();
    
    //this is where it gets a little messy. Basically this giant event handler checks for a valid response to the current prompt and advances the game accordingly.
    
    if (choice === "test") {
      console.log("Working");
      $('#choice').val("");
    }
    else if (choice === "pleasant park" && stage === 1 || choice === "salty springs" && stage === 1) {
      stage = 2
      $('#scenario').text("[1 = P] You are confronted with an enemy. Will you attempt to PICKAXE THEM or RUN AWAY?");
      $('#choice').val("");
    }
    else if (choice === "run away" && stage === 2) {
      dead();
      $('#scenario').text("The enemy had a purple SCAR-20. You were killed!");
    }
    else if (choice === "run away" && stage === 3) {
      stage = 4;
      $('#scenario').text("You spot an air drop. Will you go for the AIR DROP or hide in a BUSH?");
      $('#choice').val("");
    }
    else if (choice === "pickaxe them" && stage === 2) {
      stage = 3;
      $('#scenario').text('You killed the enemy and took their purple SCAR-20! Will you CLEAR PLEASANT PARK or RUN AWAY?');
      $('#choice').val("");
    }
    else if (choice === "clear pleasant park" && stage === 3) {
      dead();
      $('#scenario').text("You got sniped by a bush virgin! [2 = A]");
    }
    else if (choice === "air drop" && stage === 4) {
      stage = 5;
      $('#scenario').text("You see two players fighting by the air drop. Will you ENGAGE or HIDE?");
      $('#choice').val("");
    }
    else if (choice === "bush" && stage === 4) {
      dead();
      $('#scenario').text("You got rekt by a player using a green pump shotgun!");
    }
    else if (choice === "engage" && stage === 5) {
      dead();
      $('#scenario').text("The players quickly eliminated you before returning to their fight.");
    }
    else if (choice === "hide" && stage === 5) {
      dead();
      $('#scenario').text("You were killed when someone came up behind you with an SMG. [3 = S]");
    }
    else if (choice === "flush factory" && stage === 1) {
      stage = 6;
      $('#scenario').text("This place is a meme. Will you become a BUSH VIRGIN or a TREE NOOB? [5 = W]");
      $('#choice').val("");
    }
    else if (stage === 6 || stage === 7) {
      win();
      $('#scenario').text("This place is a meme. It doesn't matter campers always win #crievrytiem.");
    }
    else if (choice === "moisty mire" && stage === 1) {
      dead();
      $('#scenario').text("[4 = S] You were lost in the storm :(");
    }
    else if (choice === "lonely lodge" && stage === 1) {
      dead();
      $('#scenario').text("You were lost in the storm :(");
    }
    else if (choice === "wailing woods" && stage === 1) {
      dead();
      $('#scenario').text("You were lost in the storm :(");
    }
    else if (choice === "tomato town" && stage === 1) {
      stage = 7;  
    }
    else if (choice === "loot lake" && stage === 1) {
      stage = 8;
      $('#scenario').text("You landed and found a green AR, a sheild potion, and some bandages. Will you wait in the HOUSE or CROSS the lake?");
      $('#choice').val("");
    }
    else if (choice === "cross" && stage === 8) {
      dead();
      $('#scenario').text("[6 = O] You got sniped while trying to cross the lake!");
    }
    else if (choice === "house" && stage === 8) {
      stage = 9;
      $('#scenario').text("You hear someone in the basement of the house. Do you PUSH THEM or WAIT?");
      $('#choice').val("");
    }
    else if (choice === "wait" && stage === 9) {
      dead();
      $('#scenario').text("[7 = R] The enemy snuck up behind you and rekt you with a purple semi-auto shotgun!");
    }
    else if (choice === "push them" && stage === 9) {
      stage = 10;
      $('#scenario').text("You killed the enemy and took their purple semi-autp shotgun. Will you push towards the SAFE ZONE or WAIT?");
      $('#choice').val("");
    }
    else if (choice === "wait" && stage === 10) {
      dead();
      $('#scenario').text("You were lost in the storm :(");
    }
    else if (choice === "safe zone" && stage === 10) {
      stage = 11;
      $('#scenario').text("You escaped the storm! An enemy is near by. Will you ENGAGE or RUN AWAY?");
      $('#choice').val("");
    }
    else if (choice === "run away" && stage === 11) {
      dead();
      $('#scenario').text("You got killed by a wookie in a tree!");
    }
    else if (choice === "engage" && stage === 11) {
      stage = 12;
      $('#scenario').text("You defeated the player with your shotgun. Two players remain! Will you HUNT the enemy or BUILD a fort?");
      $('#choice').val("");
    }
    else if (choice === "hunt" && stage === 12) {
      win();
      $('#scenario').text("You snuck up behind the enemy and killed them with your shotgun!");
    }
    else if (choice === "build" && stage ===12) {
      dead();
      $('#scenario').text("The enemy used a grenade launcher and exploded you and your base! [8 = D]");
    }
    else if (choice === "anarchy acres" && stage === 1 || choice === "fatal fields" && stage === 1) {
      stage = 13;
      $('#scenario').text("You land and find a purple bolt action sniper. Will you SNIPE people or LOOT?");
      $('#choice').val("");
    }
    else if (choice === "loot" && stage === 13) {
      dead();
      $('#scenario').text("You died of fall damage like an idiot.");
    }
    else if (choice === "snipe" && stage === 13) {
      stage = 14;
      $('#scenario').text("You got 5 filthy sniper kills!!!!!");
      $('#choice').val("");
    }
    else if (stage === 14) {
      dead();
      $('#scenario').text("You got banned because the game thought you were hacking!!!");
    }
    else if (choice === "retail row" && stage === 1) {
      stage = 15;
      $('#scenario').text("You land in retail row and find a golden SCAR-20 as well as a blue bolt action sniper. Will you LEAVE or STAY?");
      $('#choice').val("");
    }
    else if (choice === "leave" && stage === 15) {
      stage = 16;
      $('#scenario').text("You leave retail row, and wonder around. Somehow, you are now in the top 2!!! Will you CAMP and snipe, or HUNT and use the rifle?");
      $('#choice').val("");
    }
    else if (choice === "camp" && stage === 16) {
      dead();
      $('#scenario').text("You got killed by the enemy in a sniper duel.");
    }
    else if (choice === "hunt" && stage === 16) {
      win();
      $('#scenario').text("You rekt the enemy and two tapped him with headshots using your golden SCAR-20!");
    }
    else if (choice === "dusty depot" && stage === 1) {
      stage = 17;
      $('#scenario').text("You find nothing but a grey smg. Surely this can't go well. Will you DANCE for mercy or PLAY NORMALLY?");
      $('#choice').val("");
    }
    else if (choice === "play normally" && stage === 17) {
      dead();
      $('#scenario').text("You got rekt. What did you excpect going dusty lul.");
    }
    else if (choice === "dance" && stage === 17) {
      dance();
      $('#scenario').text("Miraculously, all the people around you join in and dance! How fun!");
    }
    //this adds a place to enter secret codes to do cool stuffs.
    else if (choice === "greasy grove" && stage === 1) {
      stage = 100;
      $('#scenario').text("This location is an easter egg! (figure it out it's a secret)");
      $('#choice').val("");
      $('#retry').show();
    }
    // Greasy grove is a secret that allows you to input keywords to trigger any of the three outcomes, plus a secret fourth. If you play the game you will find letters scattered around. Piecing together all 8 you get the password to truly beat the game!
    else if (stage === 100) {
      if (choice === "win") {
        win();
        $('#scenario').text("There has been a transdimentional disturbance!");
      }
      else if (choice === "dance") {
        dance();
        $('#scenario').text("There has been a transdimentional disturbance!");
      }
      else if (choice === "lose") {
        dead();
        $('#scenario').text("There has been a transdimentional disturbance!");
      }
      else if (choice === "password") {
        beaten();
        $('#scenario').text("You have beaten my game! Congrats! Yay! Wee! You have no life!");
      }
      else {
        $('#choice').val("");
        alert("Invalid Choice!");
      }
    }
    else {
      $('#choice').val("");
      alert("Invalid Choice!");
    }
  });
  //this makes the play again button reset the game when clicked
  $('#retry').on('click', () => {
    $('#submit').show();
    $('#choice').show();
    $('#button-title').show();
    $('#scenario').text("You are about to drop from the battle bus. You can land on any of the major zones.");
    $('#choice').val("Enter Choice");
    $('#retry').hide();
    $('#game-img').attr("src", "https://cdn2.unrealengine.com/Fortnite%2Fblog%2F1-7-1-patch-notes%2FMiniMapAthena-2048x2048-257033270bfbd1f8bd239d3fc98dd2a6438e85e4.jpg");
  });
    }); 
