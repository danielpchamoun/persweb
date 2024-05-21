var count1 = 0;
var count2 = 25;
var count3 = 50;
var cflag1 = 1;
var cflag2 = 1;
var cflag3 = 1;

var aboutSelected = 0;
var projectsSelected = 0;
var skillsSelected = 0;
var resumeSelected = 0;
var ITGSelected = 0;
var grindSelected = 0;

//updates counts
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


function selectAbout(){
    aboutSelected = 1;
}

function selectProjects(){
    projectsSelected = 1;
}
function selectSkills(){
    skillsSelected = 1;
}
function selectResume(){
    resumeSelected = 1;
}

function selectITG(){
    ITGSelected = 1;
}
function selectGrind(){
    grindSelected = 1;
}

function resetSelected(){
    aboutSelected = 0;
    projectsSelected = 0;
    skillsSelected = 0;
    resumeSelected = 0;
    ITGSelected = 0;
    grindSelected = 0;

    //first group
    document.getElementById('nabla1a1').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1a1').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1t1').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1t1').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1p2').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1p2').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1e2').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1e2').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1s3').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1s3').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1l32').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1l32').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1r4').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1r4').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1m4').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1m4').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1i5').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1i5').style.setProperty('--highlights1', 50);
    document.getElementById('nabla1r6').style.setProperty('--thickness1', 50);
    document.getElementById('nabla1r6').style.setProperty('--highlights1', 50);

    //second group
    document.getElementById('nabla2b1').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2b1').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2u1').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2u1').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2r2').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2r2').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2j2').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2j2').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2c2').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2c2').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2s2').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2s2').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2k3').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2k3').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2l3').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2l3').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2s3').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2s3').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2e4').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2e4').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2u4').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2u4').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2e42').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2e42').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2t5').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2t5').style.setProperty('--highlights2', 50);
    document.getElementById('nabla2u6').style.setProperty('--thickness2', 50);
    document.getElementById('nabla2u6').style.setProperty('--highlights2', 50);

    //third group
    document.getElementById('nabla3o1').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3o1').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3o2').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3o2').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3t2').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3t2').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3i3').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3i3').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3s4').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3s4').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3g5').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3g5').style.setProperty('--highlights3', 50);
    document.getElementById('nabla3n6').style.setProperty('--thickness3', 50);
    document.getElementById('nabla3n6').style.setProperty('--highlights3', 50);


}

function updateNabla1(){
    //about
    if(aboutSelected){
        document.getElementById('nabla1a1').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1a1').style.setProperty('--highlights1', count1);
        document.getElementById('nabla1t1').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1t1').style.setProperty('--highlights1', count1);
    }

    //projects
    if(projectsSelected){
        document.getElementById('nabla1p2').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1p2').style.setProperty('--highlights1', count1);
        document.getElementById('nabla1e2').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1e2').style.setProperty('--highlights1', count1);
    }

    //skills
    if(skillsSelected){
        document.getElementById('nabla1s3').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1s3').style.setProperty('--highlights1', count1);
        document.getElementById('nabla1l32').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1l32').style.setProperty('--highlights1', count1);
    }

    //resume
    if(resumeSelected){
        document.getElementById('nabla1r4').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1r4').style.setProperty('--highlights1', count1);
        document.getElementById('nabla1m4').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1m4').style.setProperty('--highlights1', count1);
    }


    //itg
    if(ITGSelected){
        document.getElementById('nabla1i5').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1i5').style.setProperty('--highlights1', count1);
    }

    //grind
    if(grindSelected){
        document.getElementById('nabla1r6').style.setProperty('--thickness1', count1);
        document.getElementById('nabla1r6').style.setProperty('--highlights1', count1);
    }
}


function updateNabla2(count2){
    //about
    if(aboutSelected){
        document.getElementById('nabla2b1').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2b1').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2u1').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2u1').style.setProperty('--highlights2', count2);
    }

    //projects
    if(projectsSelected){
        document.getElementById('nabla2r2').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2r2').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2j2').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2j2').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2c2').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2c2').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2s2').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2s2').style.setProperty('--highlights2', count2);
    }

    //skills
    if(skillsSelected){
        document.getElementById('nabla2k3').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2k3').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2l3').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2l3').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2s3').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2s3').style.setProperty('--highlights2', count2);
    }
    
    //resume
    if(resumeSelected){
        document.getElementById('nabla2e4').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2e4').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2u4').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2u4').style.setProperty('--highlights2', count2);
        document.getElementById('nabla2e42').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2e42').style.setProperty('--highlights2', count2);
    }

    //itg
    if(ITGSelected){
        document.getElementById('nabla2t5').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2t5').style.setProperty('--highlights2', count2);
    }

    //grind
    if(grindSelected){
        document.getElementById('nabla2u6').style.setProperty('--thickness2', count2);
        document.getElementById('nabla2u6').style.setProperty('--highlights2', count2);
    }
}



function updateNabla3(count3){

    //about
    if(aboutSelected){
        document.getElementById('nabla3o1').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3o1').style.setProperty('--highlights3', count3);
    }

    //projects
    if(projectsSelected){
        document.getElementById('nabla3o2').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3o2').style.setProperty('--highlights3', count3);
        document.getElementById('nabla3t2').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3t2').style.setProperty('--highlights3', count3);
    }

    //skills
    if(skillsSelected){
        document.getElementById('nabla3i3').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3i3').style.setProperty('--highlights3', count3);
    }

    //resume
    if(resumeSelected){
        document.getElementById('nabla3s4').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3s4').style.setProperty('--highlights3', count3);
    }

    //itg
    if(ITGSelected){
        document.getElementById('nabla3g5').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3g5').style.setProperty('--highlights3', count3);
    }  
    
    //grind
    if(grindSelected){
        document.getElementById('nabla3n6').style.setProperty('--thickness3', count3);
        document.getElementById('nabla3n6').style.setProperty('--highlights3', count3);
    }
}
