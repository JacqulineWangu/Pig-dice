//business logic
function Player(player, players) {
    this.player = player
    this.players = players
}
var result = 0
var score = 0
var currentscore = 0
var score2 = 0
var currentscore2 = 0

function out() {
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn3').disabled = false;
}

function on() {
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn1').disabled = false;

}

//user logic

$(document).ready(function (event) {
    $(".btn").click(function () {
    
        var player1 = new Player(this.player = $("#plyr1").val(), this.players = $("#plyr2").val());
        var player2 = new Player(this.player = $("#plyr2").val(), this.players = $("#plyr1").val());

        document.getElementById('namep1').innerHTML = player1.player

        document.getElementById('namep2').innerHTML = player2.player
    })
    $("#btn1").click(function () {

        var player1Dice = Math.floor((Math.random() * 6) + 1);
        if (player1Dice === 1) {
            currentscore -= currentscore
            document.getElementById('return1').innerHTML = currentscore;
            out()
        }
        if (player1Dice > 1) {
            currentscore += player1Dice
            document.getElementById('return1').innerHTML = currentscore
        }
    });
    $("#btn2").click(function () {

        score =score + currentscore;
        document.getElementById('return1').innerHTML = score
        if (score >99) {
            document.getElementById('return1').innerHTML = "SPLENDID!!! You have won the game!Your score is " + score
            alert("NIIICCCEEEE..... Press okay for your comment.")
            currentscore = 0

        } else {
            document.getElementById('return1').innerHTML = score
            currentscore = 0
            out()
        }
        
    });

    $("#btn3").click(function () {

        var player2Dice = Math.floor((Math.random() * 6) + 1);
        if (player2Dice === 1) {
            currentscore2 = 0;
            document.getElementById('return2').innerHTML = currentscore2;
            on()
        }
        if (player2Dice > 1) {
            currentscore2 = currentscore2 + player2Dice;
            document.getElementById('return2').innerHTML = currentscore2;
        }
    });
    $("#btn4").click(function () {
    
        score2 = score2 + currentscore2
        document.getElementById('return2').innerHTML = score2
        if (score2 >99) {
            document.getElementById('return2').innerHTML = "SPLENDID!!! You have won the game!Your score is " + score2
            currentscore2 = 0
        } else {
            currentscore2 = 0
            on()
            document.getElementById('return2').innerHTML = score2
        }
        
    });
});
