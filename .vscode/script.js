const mug = document.getElementById("mug");
const machine = document.getElementById("machine");
var counter = document.getElementById("counter");
var count = 0;

function jump()
{

    if(mug.classList!="jump")
    {
        mug.classList.add("jump");

        setTimeout(function(){
            mug.classList.remove("jump");
        }, 300);   
    }
}

let isCoffee = setInterval(function ()
{
    let mugTop = parseInt(window.getComputedStyle(mug).getPropertyValue("top"));
    let machineLeft = parseInt(window.getComputedStyle(machine).getPropertyValue("left"));
    
    if(machineLeft < 50 && machineLeft > -20 && mugTop >= 80 && mugTop <=90)
    {
           count += 2;
    }

    currentCount();
    
}, 50);

function currentCount()
{
    counter.innerText = "SCORE: " + count;
}


document.addEventListener('keydown', event => {
    if (event.code === "KeyU") {
      jump();
    }
  })
