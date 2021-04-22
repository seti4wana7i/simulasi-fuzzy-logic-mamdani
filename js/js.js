var arr = document.getElementsByName('input');
var uArr = document.getElementsByName('u');
var rArr = document.getElementsByName('r');
var kArr = document.getElementsByName('i');
var dArr = document.getElementsByName('d');

function total(){
   fuzzifikasi();
   operasifuzzy();
   komposisi();
   defuzzifikasi();
    centroid();
}

function fuzzifikasi(){
    var inp1 = parseInt(arr[0].value);
    var min1 = parseInt(arr[1].value);
    var max1 = parseInt(arr[2].value);

    var inp2 = parseInt(arr[3].value);
    var min2 = parseInt(arr[4].value);
    var max2 = parseInt(arr[5].value);

    var uId = ["uMin","uMax","uMin2","uMax2"];

    //uMin = input max- input / input max - input min
    var uMin1 = (max1-inp1)/(max1-min1);
    //uMax = input - input min / input max - input min
    var uMax1 = (inp1-min1)/(max1-min1);
    var uMin2 = (max2-inp2)/(max2-min2);
    var uMax2 = (inp2-min2)/(max2-min2);

    var Arru = [uMin1,uMax1,uMin2,uMax2];

    for(var i = 0; i<uId.length;i++){
        if(uId[i]){
            document.getElementById(uId[i]).value = Arru[i];
        }
    }
}

function operasifuzzy() {
    var uMin1 = parseFloat(uArr[0].value);
    var uMax1 = parseFloat(uArr[1].value);
    var uMin2 = parseFloat(uArr[2].value);
    var uMax2 = parseFloat(uArr[3].value);
    var rId = ["r0",'r1','r2','r3'];
    var iId = ["i0", "i1", "i2", "i3"];
    var r = [];
    r[0] = Math.min(uMin1, uMax2);
    r[1] = Math.min(uMin1, uMin2);
    r[2] = Math.min(uMax1, uMax2);
    r[3] = Math.min(uMax1, uMin2);

    for(var i =0; i < rId.length; i++){
        if(rId[i]){
            document.getElementById(rId[i]).value = r[i];
            // implikasi
            document.getElementById(iId[i]).value = r[i]; 
        }
    }
}

function komposisi(){
    var k = [];
    for(var i = 0; i < kArr.length; i++){
        k.push(parseFloat(kArr[i].value));
    }

    globalThis.kInc = Math.max(k[2], k[3]);
    globalThis.kDec = Math.max(k[0], k[1]);

    document.getElementById('k0').value = kInc;
    document.getElementById('k1').value = kDec;
}



function defuzzifikasi(){
    var max = parseInt(arr[7].value);
    var min = parseInt(arr[6].value);
    var d = ['d0','d1','d2','d3','d4','d5','d6','d7','d8','d9'];

        function randbetween(max, min){

            return Math.floor(Math.random()*( max  - min + 1 )) + min; 
        }
    
    for(var i = 0; i < dArr.length;i++){
        document.getElementById(d[i]).value = randbetween(max, min);
    }

}

function centroid(){
    // (((sum rand increase) * komp increase)+((sum rand decrease)*komp decrease))) / ((komp increase * (count rand increase))+(komp decrease * (count rand decrease)))

    var dI = ['d0','d2','d4','d6','d8'];
    var dD = ['d1','d3','d5','d7','d9'];
    var dIn = [];
    var dDn = [];

    for(var i=0; i<dI.length;i++){
        dIn[i] = document.getElementById(dI[i]).value;
        dDn[i] = document.getElementById(dD[i]).value;
    }


    var totalIn = 0;
    var totalDn = 0;

    for(i=0; i<dIn.length;i++){
        if(parseFloat(dIn[i]))
        {
            totalIn += parseFloat(dIn[i]);
            totalDn += parseFloat(dDn[i]);
        }
    }

    var cent = ((totalIn * kInc) + (totalDn * kDec)) / ((kInc * dIn.length) + (kDec * dIn.length));
    document.getElementById('c0').value = cent;
    document.getElementById('c1').innerText = Math.round(cent);   
}