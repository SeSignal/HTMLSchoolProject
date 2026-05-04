// initialization

let r = document.querySelector(':root');
//variables standing for fraction of the top bar
let a0fr   = 2;
let a1fr = 2;
let a2fr  = 2;
let a3fr = 2;
let a4fr = 2;
let a5fr = 2;
//combining list changefr
let listfr = [2,2,2,2,2,2];
let savedlistfr = [];
// Counting passing frames (frame equaling  on interval in bottom main function)
let frame = 0;
// Counting saved frames
let savedframe = 0;

// End of initialization

setInterval(function() {
    // Forcing values to be 2,2,2,2,2,2 (except if changefr is provoked)
    r.style.setProperty("--a0fr",listfr[0]+"fr")
    r.style.setProperty("--a1fr",listfr[1]+"fr")
    r.style.setProperty("--a2fr", listfr[2]+"fr")
    r.style.setProperty("--a3fr", listfr[3]+"fr")
    r.style.setProperty("--a4fr", listfr[4]+"fr")
    r.style.setProperty("--a5fr", listfr[5]+"fr")
    frame++;
    if (listfr[0] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        //Taking min value from values which forces max of 3, while 2+(frame-savedframe)*0.35 increases
        r.style.setProperty("--a0fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else if (listfr[1] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a1fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else if (listfr[2] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a2fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[3] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a3fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[4] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a4fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")
    }else if (listfr[5] === 3){
        if (savedframe === 0){
            savedframe = frame;
        }
        r.style.setProperty("--a5fr",  Math.min(3,2+(frame-savedframe)*0.35)+"fr")

    }else{
        // Resets saved frame amount
        savedframe = 0
    }
    
}, 20);

    

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
    if (change === 0){
        a0fr = 3;
    }else if (change === -1){
        a0fr = 2;
    }
    if (change == 1){
        a1fr = 3;
    }else if (change === -1){
        a1fr = 2;
    }
    if (change === 2){
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


    //Convert to list
    listfr.push(a0fr)
    listfr.push(a1fr)
    listfr.push(a2fr)
    listfr.push(a3fr)
    listfr.push(a4fr)
    listfr.push(a5fr)

    return listfr
}