var count1 = 0;
var cflag1 = 0.1;
var aboutSelected = 0;
var projectsSelected = 0;
var skillsSelected = 0;
var resumeSelected = 0;
var grindSelected = 0;
var chatSelected = 0;
var blogSelected = 0;
var sciAdvSelected = 0;
var githubSelected = 0;
var startStyle = 4;
var endStyle = 5;
var styleVal1 = 2;
var styleVal2 = 4.25;
var temp = startStyle;

//updates counts
/*
var intervalId = window.setInterval(function(){
    temp+=cflag1;
    count1 =temp.toFixed(1);
    if(count1 >= endStyle){
        count1 = startStyle;
        temp = startStyle;        
    }
    if(aboutSelected == 1){
        document.getElementById('aboutSelected').style.setProperty('--styleNum', count1);
    }

    if(projectsSelected == 1){
        document.getElementById('projectsSelected').style.setProperty('--styleNum', count1);
    }
    if(skillsSelected == 1){
        document.getElementById('skillsSelected').style.setProperty('--styleNum', count1);
    }
    if(resumeSelected == 1){
        document.getElementById('resumeSelected').style.setProperty('--styleNum', count1);
    }
    if(grindSelected == 1){
        document.getElementById('grindSelected').style.setProperty('--styleNum', count1);
    }
    if(sciAdvSelected == 1){
        document.getElementById('sciAdvSelected').style.setProperty('--styleNum', count1);
    }
    if(blogSelected == 1){
        document.getElementById('blogSelected').style.setProperty('--styleNum', count1);
    }
    if(chatSelected == 1){
        document.getElementById('chatSelected').style.setProperty('--styleNum', count1);
    }
    if(githubSelected == 1){
        document.getElementById('githubSelected').style.setProperty('--styleNum', count1);
    }

}, 10);
*/

function selectAbout(){
    aboutSelected = 1;
    document.getElementById('aboutSelected').style.setProperty('--styleNum', styleVal2);

}

function selectProjects(){
    projectsSelected = 1;
    document.getElementById('projectsSelected').style.setProperty('--styleNum', styleVal2);

}
function selectSkills(){
    skillsSelected = 1;
    document.getElementById('skillsSelected').style.setProperty('--styleNum', styleVal2);

}
function selectResume(){
    resumeSelected = 1;
    document.getElementById('resumeSelected').style.setProperty('--styleNum', styleVal2);

}


function selectGrind(){
    grindSelected = 1;
    document.getElementById('grindSelected').style.setProperty('--styleNum', styleVal2);

}

function selectGithub(){
    githubSelected = 1;
    document.getElementById('githubSelected').style.setProperty('--styleNum', styleVal2);

}
function selectChat(){
    chatSelected = 1;
    document.getElementById('chatSelected').style.setProperty('--styleNum', styleVal2);

}
function selectBlog(){
    blogSelected = 1;
    document.getElementById('blogSelected').style.setProperty('--styleNum', styleVal2);

}
function selectSciAdv(){
    sciAdvSelected = 1;
    document.getElementById('sciAdvSelected').style.setProperty('--styleNum', styleVal2);

}



function resetSelected(){
    aboutSelected = 0;
    projectsSelected = 0;
    skillsSelected = 0;
    resumeSelected = 0;
    grindSelected = 0;
    sciAdvSelected = 0;
    blogSelected = 0;
    chatSelected = 0;
    githubSelected = 0;

    document.getElementById('aboutSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('projectsSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('skillsSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('resumeSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('grindSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('sciAdvSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('blogSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('chatSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('githubSelected').style.setProperty('--styleNum', styleVal1);
    
}
