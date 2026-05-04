// initialization

let r = document.querySelector(':root');

let savedclientHeight;
//variables for sizes
let MaindivGridGap; 
let TopnavTop; 
let TopnavFontSize;
let CopyrightMaxWidth;
let GlobalFontSize;

setInterval(function(){
    MaindivGridGap = "1vh"
    TopnavTop = "0.5vh"
    TopnavFontSize = "2vh"
    CopyrightMaxWidth = "33vw"
    GlobalFontSize = "1.5vh"
    //                                 1.25 for 4:3 not to be detected
    if (r.clientWidth/r.clientHeight < 1.25){
        
    }
    r.style.setProperty("--MaindivGridGap", MaindivGridGap)
    r.style.setProperty("--TopnavTop",TopnavTop)
    r.style.setProperty("--TopnavFontSize", TopnavFontSize)
    r.style.setProperty("--CopyrightMaxWidth", CopyrightMaxWidth)
    r.style.setProperty("--GlobalFontSize",GlobalFontSize)

},1)


