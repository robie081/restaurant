
// The Button is Different You Stupid


// document.getElementById("ro").style.display = "none";

function changeLangRo() {

    const myBttnRo = document.getElementById('bttnRo').innerHTML;

    if (myBttnRo.match("ro")) {
        
        // document.getElementById('bttnRo').innerHTML = "en";
        document.getElementById("ro").style.display = "block";
        document.getElementById("en").style.display = "none";

        console.log('rom');

    }    
}

// document.getElementById('bttnRo').addEventListener('click', changeLangRo);

function changeLangEn() {

    const myBttnEn = document.getElementById('bttnEn').innerHTML;

    if (myBttnEn.match("en")) {
        // document.getElementById('bttnEn').innerHTML = "ro";
        document.getElementById("en").style.display = "block";
        document.getElementById("ro").style.display = "none";   

        console.log('eng');
    } 
}

document.getElementById('bttnRo').addEventListener('click', changeLangRo);
document.getElementById('bttnEn').addEventListener('click', changeLangEn);