// initialization

let r = document.querySelector(':root');
//variables standing for fraction of the top bar
let a1fr   = 2;
let a2fr = 2;
let a3fr  = 2;
let a4fr = 2;
let a5fr = 2;
let a6fr = 2;
//combining list changefr
let listfr = [2,2,2,2,2,2];
let savedlistfr = [];
// Counting passing frames (frame equaling  on interval in bottom main function)
let frame = 0;
// Counting saved frames
let savedframe = 0;

// End of initialization

setInterval(function() {
    r.style.setProperty("--a1fr",  listfr[0]+"fr")
    r.style.setProperty("--a2fr",listfr[1]+"fr")
    r.style.setProperty("--a3fr", listfr[2]+"fr")
    r.style.setProperty("--a4fr", listfr[3]+"fr")
    r.style.setProperty("--a5fr", listfr[4]+"fr")
    r.style.setProperty("--a6fr", listfr[5]+"fr")
    frame++;
    if (listfr[0] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        console.log( Math.min(3,2+(frame-savedframe)*0.3)+"fr")
        r.style.setProperty("--a1fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else if (listfr[1] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a2fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else if (listfr[2] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a3fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[3] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a4fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[4] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a5fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[5] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a6fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else{
        savedframe = 0
    }
    
}, 20);

    

    
    



/*
for (let longevity = 10; longevity < 10; longevity--){
            if (listfr[0] === 3){r.style.setProperty("--leftfr",  2+(1/longevity)+"fr")};
            if (listfr[1] === 3){r.style.setProperty("--centerfr",  2+(1/longevity)+"fr")};
            if (listfr[2] === 3){r.style.setProperty("--rightfr",  2+(1/longevity)+"fr")};
        }
*/

// takes the values, detects what wants to be changed, saves to listfr
function changefr(change){

    //Convert and empty
    savedlistfr = listfr
    listfr = []
   
    // send back as 2 2 2
    leftfr   = 2;
    centerfr = 2;
    rightfr  = 2;

    // See the which one to change
    if (change === 1){
        a1fr = 3;
    }else if (change === -1){
        a1fr = 2;
    }
    if (change == 2){
        a2fr = 3;
    }else if (change === -1){
        a2fr = 2;
    }
    if (change === 3){
        a3fr = 3;
    }else if (change === -1){
        a3fr = 2;
    }
    if (change === 4){
        a4fr = 3;
    }else if (change === -1){
        a4fr = 2;
    }
    if (change === 5){
        a5fr = 3;
    }else if (change === -1){
        a5fr = 2;
    }
    if (change === 6){
        a6fr = 3;
    }else if (change === -1){
        a6fr = 2;
    }


    //Convert to list
    listfr.push(a1fr)
    listfr.push(a2fr)
    listfr.push(a3fr)
    listfr.push(a4fr)
    listfr.push(a5fr)
    listfr.push(a6fr)

    //change
    console.log("check")

    return listfr
}