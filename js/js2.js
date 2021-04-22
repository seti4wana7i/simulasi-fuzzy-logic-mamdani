var arr = document.getElementsByName('input');
var uArr = document.getElementsByName('u');
var rArr = document.getElementsByName('r');

function total(){
   fuzzifikasi();
   
}

function fuzzifikasi(){
    var inp1 = parseInt(arr[0].value);
    var inp2 = parseInt(arr[1].value);

    var min1 = parseInt(arr[2].value);
    var min2 = parseInt(arr[3].value);

    var max1 = parseInt(arr[4].value);
    var max2 = parseInt(arr[5].value);
    
    var ui = ["uMin","uMax","uMin2", "uMax2" ];

    var uMin1 = inp1 + inp2;
    var uMax1 = min1 + min2;
    var uMin2 = max1 + max2;
    var uMax2 = inp1 - inp2;

    var uj = [uMin1, uMax1, uMin2, uMax2];

    for(var i = 0; i<ui.length;i++){
        if(ui[i]){
            document.getElementById(ui[i]).value = uj[i];
        }
    }
        
}

function operasifuzzy() {
    var uMin1 = parseInt(uArr[0].value);
    var uMax2 = parseInt(uArr[1].value);
    var uMin2 = parseInt(uArr[2].value);
    var uMax2 = parseInt(uArr[3].value);
    
    var r = [];
    r[0] = Math.min(uMin1, uMax2);
    r[1] = Math.min(uMin1, uMin2);
    r[2] = Math.min(uMax1, uMax2);
    r[3] = Math.min(uMax1, uMin1);

    for(var i =0; i < r.length; i++){
        if(r[i]){
            document.getElementsByName('')
        }
    }
    

}

