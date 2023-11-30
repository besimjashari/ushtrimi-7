var i=0;
var imgArray=[
    "foto/download.jpg",
    "foto/download2.jpg",
    "foto/icon naten.png",
    "foto/icon nga jashte.png",
    "foto/305298345_446254877556081_5100608008566979069_n.png",
    "foto/305298345_446254877556081_5100608008566979069_.png"
];

function ndrroImg(){
    document.getElementById('slideshow').src =imgArray[i];
    if (i<imgArray.length-1) {
        i++;
    }else{
        i=0;
    }
    //setTimeout("ndrooImg()",2600);
}

document.body.addEventListener('load', ndrroImg());

function ktheImg(){
    document.getElementById('slideshow').src=imgArray[i-1];
    if (i>0) {
        i--;
    }else{
        i=imgArray.length-1;
    }
}


document.body.addEventListener('load', ktheImg());