/**
 * Created by nexusstar on 07.04.15.
 */
document.addEventListener("DOMContentLoaded", function(event){

    var buttonTeamA = document.createElement('button');
    var buttonTeamB = document.createElement('button');
    var buttonAtextNode = document.createTextNode('Team A');
    var buttonBtextNode = document.createTextNode('Team B');

    buttonTeamA.appendChild(buttonAtextNode);
    buttonTeamB.appendChild(buttonBtextNode);

    var pA = document.createElement('p');
    pA.className = 'teamA';
    var pB = document.createElement('p');
    pB.className = 'teamB';

    var pAtext  = 'Team A score: ';
    var pBtext = 'Team B score: ';

    var scoreA = 0;
    var scoreB = 0;


    var d = document.getElementById('container');

    buttonTeamA.addEventListener('click', function(){
        scoreA++;
        var p = document.getElementsByClassName('teamA');

    });

    buttonTeamB.addEventListener('click', function(){
        scoreB++;
    });

    pAtext += scoreA;
    pBtext += scoreB;

    pAtext = document.createTextNode(pAtext);
    pBtext = document.createTextNode(pBtext);


    d.appendChild(pA);
    d.appendChild(pB);
    d.appendChild(buttonTeamB);
    d.appendChild(buttonTeamA);
    pA.appendChild(pAtext);
    pB.appendChild(pBtext);

});