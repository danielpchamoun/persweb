var count1 = 0;
var count2 = 25;
var count3 = 50;
var cflag1 = 1;
var cflag2 = 1;
var cflag3 = 1;
var intervalId = window.setInterval(function(){
    count1+=cflag1;
    count2+=cflag2;
    count3+=cflag3;
    if(count1 >= 150){
        cflag1 = -1;
    }if(count1 <1){
        cflag1 = 1
    }

    if(count2 >= 150){
        cflag2 = -1;
    }if(count2 <1){
        cflag2 = 1
    }

    if(count3 >= 150){
        cflag3 = -1;
    }if(count3 <1){
        cflag3 = 1
    }

    updateNabla1(count1);
    updateNabla2(count2);
    updateNabla3(count3);

}, 1);




function updateNabla1(count1){
    //about
    document.getElementById('nabla1a1').style.setProperty('--thickness1', count1);
    document.getElementById('nabla1a1').style.setProperty('--highlights1', count1);
    document.getElementById('nabla1t1').style.setProperty('--thickness1', count2);
    document.getElementById('nabla1t1').style.setProperty('--highlights1', count2);

    //projects
    document.getElementById('nabla1p2').style.setProperty('--thickness1', count1);
    document.getElementById('nabla1p2').style.setProperty('--highlights1', count1);
    document.getElementById('nabla1e2').style.setProperty('--thickness1', count1);
    document.getElementById('nabla1e2').style.setProperty('--highlights1', count1);

    //skills
    document.getElementById('nabla1s3').style.setProperty('--thickness1', count1);
    document.getElementById('nabla1s3').style.setProperty('--highlights1', count1);
    document.getElementById('nabla1l32').style.setProperty('--thickness1', count1);
    document.getElementById('nabla1l32').style.setProperty('--highlights1', count1);

    

}


function updateNabla2(count2){
    //about
    document.getElementById('nabla2b1').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2b1').style.setProperty('--highlights2', count2);

    document.getElementById('nabla2u1').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2u1').style.setProperty('--highlights2', count2);



    //projects
    document.getElementById('nabla2r2').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2r2').style.setProperty('--highlights2', count2);
    document.getElementById('nabla2j2').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2j2').style.setProperty('--highlights2', count2);
    document.getElementById('nabla2c2').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2c2').style.setProperty('--highlights2', count2);
    document.getElementById('nabla2s2').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2s2').style.setProperty('--highlights2', count2);

    //skills
    document.getElementById('nabla2k3').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2k3').style.setProperty('--highlights2', count2);
    document.getElementById('nabla2l3').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2l3').style.setProperty('--highlights2', count2);
    document.getElementById('nabla2s3').style.setProperty('--thickness2', count2);
    document.getElementById('nabla2s3').style.setProperty('--highlights2', count2);
    
}



function updateNabla3(count3){

    //about
    document.getElementById('nabla3o1').style.setProperty('--thickness3', count3);
    document.getElementById('nabla3o1').style.setProperty('--highlights3', count3);

    //projects
    document.getElementById('nabla3o2').style.setProperty('--thickness3', count3);
    document.getElementById('nabla3o2').style.setProperty('--highlights3', count3);
    document.getElementById('nabla3t2').style.setProperty('--thickness3', count3);
    document.getElementById('nabla3t2').style.setProperty('--highlights3', count3);

    //skills
    document.getElementById('nabla3i3').style.setProperty('--thickness3', count3);
    document.getElementById('nabla3i3').style.setProperty('--highlights3', count3);
}
