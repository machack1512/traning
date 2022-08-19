var mainmole = document.getElementById("molebg");
var mainmnud = document.getElementById("grassbg");
var startbtn = document.getElementById("start");
var mol = document.getElementsByClassName("mole");
var point = document.querySelectorAll("span");
var grass69 = document.getElementsByClassName("grass");
var mole1 = document.getElementById("mole1");
var mole2 = document.getElementById("mole2");
var mole3 = document.getElementById("mole3");
var mole4 = document.getElementById("mole4");
var mole5 = document.getElementById("mole5");

var count = 0;

function start()
{
    mainmole.style.visibility = "hidden";
    mainmnud.style.visibility = "hidden";
    startbtn.style.visibility = "hidden";
    
    for(var i = 0; i < 5; i++)
    {
        grass69[i].style.visibility="visible";
    }
    for(var i = 0; i < 2; i++)
    {
        point[i].style.visibility="visible";
    }
    setInterval(rand,1200);
};  
function rand()
{
    var y = Math.floor(Math.random()*5);
    console.log(y);
    mol[y].style.visibility="visible";
    mol[y].onclick=counter;
    function hide()
    {
        mol[y].style.visibility="hidden";
    }
    setTimeout(hide,900);
}

function counter()
{
    count++;
    console.log('clicked')
    point[1].textContent = count;
}