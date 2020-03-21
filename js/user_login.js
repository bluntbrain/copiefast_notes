
var roll = ["16bce001","16bce002","16bce003","16bce004","16bce005","16bce006","16bce007","16bce008","16bce009","16bce010","16bce011","16bce012","16bce013","16bce014","16bce015","16bce016","16bce017","16bce018","16bce019","16bce020","16bce021","16bce022","16bce023","16bce024","16bce025","16bce026","16bce027","16bce028","16bce029","16bce030","16bce031","16bce032","16bce033","16bce034","16bce035","16bce036","16bce037","16bce038","16bce039","16bce040","16bce041","16bce042","16bce043","16bce044","16bce045","16bce046","16bce047","16bce048","16bce049","16bce050","16bce051","16bce052","16bce053","16bce054","16bce055","16bce056","16bce057","16bce058","16bce059","16bce060","16bce061","16bce062","16bce063","16bce064","16bce065","16bce066","16bce067","16bce068","16bce069","16bce070","16bce071","16bce072","16bce073","16bce074","16bce075","16bce076","16bce077","16bce078","16bce079","16bce080","16bce081","16bce082","16bce083","16bce084","16bce085","16bce086","16bce087","16bce088","16bce089","16bce090","16bce091","16bce092","16bce093","16bce094","16bce095","16bce096","16bce097","16bce098","16bce099","16bce100","16bce101","16bce102","16bce103","16bce104","16bce105","16bce106","16bce107","16bce108","16bce109","16bce110","16bce111","16bce112","16bce113","16bce114","16bce115","16bce116","16bce117","16bce118","16bce119","16bce120","16bce121","16bce122","16bce123","16bce124","16bce125","16bce126","16bce127","16bce128","16bce129","16bce130","16bce131","16bce132","16bce133","16bce134","16bce135","16bce136","16bce137","16bce138","16bce139","16bce140","16bce141","16bce142","16bce143","16bce144","16bce145","16bce146","16bce147","16bce148","16bce149","16bce150"]

function getInfo(){
    var roll_number = document.getElementById("login").value
    console.log(roll_number)
    if(roll_number.includes("bce")){
        console.log("logged in")
        window.location = "./pages/cse.html";
    }
    else if(roll_number.includes("bec")){
        console.log("logged in")
        window.location = "./pages/ece.html";
    }
    else if(roll_number.includes("bme")){
        console.log("logged in")
        window.location = "./pages/me.html";
    }
    if(roll_number.includes("bic")){
        console.log("logged in")
        window.location = "./pages/ic.html";
    }
    if(roll_number.includes("bee")){
        console.log("logged in")
        window.location = "./pages/ee.html";
    }
    if(roll_number.includes("bch")){
        console.log("logged in")
        window.location = "./pages/chemical.html";
    }
    if(roll_number.includes("bcl")){
        console.log("logged in")
        window.location = "./pages/civil.html";
    }
}