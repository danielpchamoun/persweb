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
var styleVal2 = 2;
var temp = startStyle;
var selectedColor = "#ffffff"; //1a8dff
var selectedWeight = "400";


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
    document.getElementById('aboutSelected').style.color=selectedColor;
    document.getElementById('aboutSelected').style.fontWeight=selectedWeight;
    document.getElementById('aboutSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('ascii-scene').innerHTML = `                me








 
              .-'"'-.
             :       :
             L _     |
             'L.  " "|
              |"L    F
          __--'  L  .---__
       J'"       ."'      \\
      J                    \\
      |                     L
      F    J|          |L   |
      F   J |          ||   L
      |   | J          F|   |
      |   F J          FJ   F
      J   |  L        J J  J
      J   |  |        | J  J
       L  F  |        | |  |
       L  F_-F     _  J_|  |
    .-J   K ____-""."-_ F  J---.
   F   L J \\           /   J    L
  |    I__L"     _---__"J__|    L
   L_    ____--""------""----"""
     """"





`;

}

function selectProjects(){
    projectsSelected = 1;
    document.getElementById('projectsSelected').style.color=selectedColor;
    document.getElementById('projectsSelected').style.fontWeight=selectedWeight;
    document.getElementById('projectsSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('ascii-scene').innerHTML = `                               embedded software


    





    
  
                ____________________________    .--. 
               /                           /\\  | .-.|                __   
              /                          _/ /\\ |T  ||            ___/  \\
             /                          / \\/  [_|__|_]       ___/       \\
            /                           /\\      |  |     ___/            \\          
           /___________________________/ /      |  | ___/                 \\   
           \\___________________________\\/        ___/                      \\ 
            \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\    ___/                       ___/|
                   .--.......--.        ____/                       ___/ _  (
                .-(   |||| ||   )-.    /                        ___/ _   \\\\ |
               \/   '--'''''''--'   \\   |\\  __               ___/ _   \\\\  _H_/
                  .-.      _____       | \\/  \\          ___/ _   \\\\  _H_/ Y
                 ( ( )  .-(_|||_)-.    |\`|  _/      ___/ _   \\\\  _H_/ Y   !   
                 | |-|  '         '     \\|_|\\   ___/ _   \\\\  _H_/ Y   !   !
                 | |=|  .  _____  .     !  | \\_/ _   \\\\  _H_/ Y   !   !
                 | (_)  '-(_|||_)-'     !  \\\` |  \\\\  _H_/ Y   !   !
                 |  |                       \\\`|  _H_/ Y   !   !
                                             \\|_/ Y   !   !
                                                  !   !
                                                  !
                                                  
                                                  



                                                  
`;

}
function selectSkills(){
    skillsSelected = 1;
    document.getElementById('skillsSelected').style.color=selectedColor;
    document.getElementById('skillsSelected').style.fontWeight=selectedWeight;
    document.getElementById('skillsSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('ascii-scene').innerHTML = `                                                                   languages

 


                       tf                                                        
                       ff                                                  
                      fff                                            
                     ffff                                        
                   ffff                                             --------                      
                 fffff   jfff                                    --------------              
              ffffff  ffffj                                  ----------------------
             ffffj tffff                                  ----------------------------                                   .::::::::::.
            ffff  ffff                                 ----------------------------------                              .::\`\`::::::::::.
            fff   ffff                              -------------...        ..--------------                           :::..:::::::::::
            ffff  fffff                            ------------.                .----------++                          ::::::::::::::::
                                                   ----------.                    .-----++###                          \`\`\`\`\`\`\`\`::::::::
             fffj  fffff                           ---------                        -+#######                  .::::::::::::::::::::::: iiiiiii,
               fff  fffff                          --------         .------.      -##########               .:::::::::::::::::::::::::: iiiiiiiii.
                 ff  fff                           -------.       .----------. -#############               ::::::::::::::::::::::::::: iiiiiiiiii
      nnnnv         ff        nxnxnn               -------       .---------+######+ +###+ +##               ::::::::::::::::::::::::::: iiiiiiiiii
     nnxnnnnnnxnnnxnxnnnnnnn     nxn               -------       -------+########     #     #               :::::::::: ,,,,,,,,,,,,,,,,,iiiiiiiiii
        cnxnnnnnxnxnv            xnn               -------       .--+#############+ +###+ +##               :::::::::: iiiiiiiiiiiiiiiiiiiiiiiiiii
        nnxnc        nnnnn     nnnv                -------.       -##########-.+#############               \`::::::::: iiiiiiiiiiiiiiiiiiiiiiiiii\`
         nnxnxnnxxnxnnxxxnv  nnn                   --------         +#####+-     .+##########                  \`:::::: iiiiiiiiiiiiiiiiiiiiiii\`
           n                                       -------++                       .#########                          iiiiiiii,,,,,,,,
         vnxnnnnnxnnxnxnnv                         ----+#####-                    +##########                          iiiiiiiiiiiiiiii
    nvnnx  nnnnxxnxxnxnn                           -+##########-                +############                          iiiiiiiiiii''iii
 nnxn                          nnn                  ##############+-.      ..+##############                           \`iiiiiiiiii..ii\`
 nnnnxxnnnnxxnnnnnnnnnnnnxnnnnv   nn                   ##################################                                   
       nnnnnnxnvvnnnnnn nvnnnxnnnnn                       ############################                                      
         vnnnnnnnxnxnnnxnnnnn                                ######################               
                                                                 ##############              
                                                                    ########                                                                        
    
                                                                    
    `
}
function selectResume(){
    resumeSelected = 1;
    document.getElementById('resumeSelected').style.color=selectedColor;
    document.getElementById('resumeSelected').style.fontWeight=selectedWeight;
    document.getElementById('resumeSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('ascii-scene').innerHTML = `                 experience and work history
    
           .-.---------------------------------.-.
          ((o))                                   )
           \\U/_______          _____         ____/
             |                                  |
             |                                  |
             |    D~~~~~ C~~~~~~                |
             |                                  |
             |    ~~~                      ~~~  |
             |       ~~~~~~~~~~~~~~~~~~~~~      |
             |       ~~~~~~~~~~~~               |
             |                                  |
             |    ~~~                      ~~~  |
             |       ~~~~~~~~~~~~~~~~~~~~~      |
             |                                  |
             |    ~~~                      ~~~  |
             |       ~~~~~~~~~~~~~~~~~~~~~      |
             |       ~~~                        |  
             |                                  |
             |    ~~~                     ~~~   |
             |       ~~~~~~~~~~~~~~~~~~         |
             |                                  |
             |    ~~~                      ~~~  |
             |       ~~~~~~~~~~~~~~~~           |             
             |                                  |
             |    ~~~                      ~~~  |
             |       ~~~~~~~~~~~~~~~~~~~        |
             |                                  |
             |____    _______    __  ____    ___|
            /A\\                                  \\
           ((o))                                  )
            '-'----------------------------------'
    
    
    
    `;

}


function selectGrind(){
    grindSelected = 1;
    document.getElementById('grindSelected').style.color=selectedColor;
    document.getElementById('grindSelected').style.fontWeight=selectedWeight;
    document.getElementById('grindSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('ascii-scene').innerHTML = `                                                                         my weekly stats
    
                                      _                                   _
                                    _| |                                 | |_
                                   | | |______OOOOo__________oOOOO_______| | |
                                  [| | |--------(\`,----------\\\`,---------| | |]           OOOOo         oOOOO
                                   |_| |      )  (            )  (       | |_|            |-(\`/         \\\`, |
                                     |_|      /  |            |  \\       |_|     _        )  (  \\   |     )  (        _
                                              |  |  \\\\\\\\\\\\//  |  |             _|#|       /  |         /  |  \\       |#|_
                                              \\  /  | -  - |  \\  /            |#|#|______________.:-._.-_____________|#|#|
                                              /  \\ (  a  a  ) /  \\           [|#|#|-------------''''.'.'-------------|#|#|]
                                              |   | |  L   | |   |            |#|#|       /  \\ (  a  a  ) /  \\       |#|#|
                                              |   | \\  ==  / |   |             "|#|       |   | |  L   | |   |       |#|"
                                              |   /_.\\____/._\\   |               "        |   | \\ _.=. / |   |        "
                                               \\   ||      ||   /                         |   /_.\\____/._\\   |
                                                \\  | '-..-' |  /                           \\   ||      ||   /
                                                |  ; GOLD'S ;  |                            \\  | '-..-' |  /
                                                | /          \\ |                            |  ; L      ;  |
                                                 \\            /                             | /          \\ |
                                                  |          |                               \\            /
                                                  |    __    |                               |            |
                                                  |===[  ]===|                               |     __     |
                                                  )"""\`""\`"""(                               |====[  ]====|
                                                 /            \\                              )"""\`"""\`""""(
                {{{{{{{{                        /    ,____,    \\                            /              \\
                I ^  ^ I                       /'-._ .'  '. _.-'\\                          (     ,_--_,     )
               CI @  @ ID                     /     /      \\     \\                         |'-._ \\    / _.-'|                                
            __  I  .L  I  __                  |    /        \\    |                          \\     \\  /     /                                  |
          _I  I \\  ~~  / I  I_                (_  /          \\  _)                           \\/   _)(_   \\/                  _            \\    /             _
         I I  I  ______  I  I I                |  \`\\        /\`  |                             )    ||    (                 _|#|       .-.         .-.       |#|_
   []    I I__I          I__I I    []          |___|        |___|                            |___ /  \\ ___|               |#|#|______/  /_ .-'-. _\\  \\______|#|#|
  [ ]    I I  Io        oI  I I    [ ]         |===/        \\===|                            |===/    \\===|              [|#|#|------| (  || | ||  ) |------|#|#|]
 [  ]======OOOO==========OOOO======[  ]      _/\\._(          )_./\\_                         /\\._(_    _)_./\\              |#|#|      |__|_.-'''-._|__|      |#|#|
  [ ]    I___I__\\      /__I___I    [ ]     /\`      |         |    _\`\\                      |\`     \\  /    _\`|              "|#|                             |#|"
   []    (______)      (_______)   []      \`""""\`""           ""\`"""\`                       \`""""\`""  ""\`"""\`                "                               "

    `;

}

function selectGithub(){
    githubSelected = 1;
    document.getElementById('githubSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('githubSelected').style.color=selectedColor;
    document.getElementById('githubSelected').style.fontWeight=selectedWeight;
    document.getElementById('ascii-scene').innerHTML = `                      see my code


    
                    @@@@@@@@@@@@@@@                    
               @@@@@@@@@@@@@@@@@@@@@@@@@               
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
   @@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@   
  @@@@@@@@@@@                             @@@@@@@@@@@  
 @@@@@@@@@@@@                             @@@@@@@@@@@@ 
 @@@@@@@@@@@@                             @@@@@@@@@@@@ 
@@@@@@@@@@@@                               @@@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@                                 @@@@@@@@@@@
@@@@@@@@@@@@                               @@@@@@@@@@@@
 @@@@@@@@@@@@                             @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@                       @@@@@@@@@@@@@@@ 
  @@@@@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@@@@ 
  @@@@@@@@  @@@@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@  
    @@@@@@@  @@@@@@@@@           @@@@@@@@@@@@@@@@@@@   
     @@@@@@@   @@@@@@             @@@@@@@@@@@@@@@@     
      @@@@@@@@                    @@@@@@@@@@@@@@@      
        @@@@@@@@@@@@@             @@@@@@@@@@@@@        
          @@@@@@@@@@@             @@@@@@@@@@@          
             @@@@@@@@             @@@@@@@@             
                @@@@@             @@@@@                
    
    
    `;




}
function selectChat(){
    chatSelected = 1;
    document.getElementById('chatSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('chatSelected').style.color=selectedColor;
    document.getElementById('chatSelected').style.fontWeight=selectedWeight;
    document.getElementById('ascii-scene').innerHTML = `                                                    internet checkpoint


                                                                                                                                
                                                                                   =                                
                                                                                   =+                               
                                                                                  ++**                              
                                                                                 #*+*@                              
                                                                                *#**%@%                             
                                                                               +#%@#%@@                             
                                                                        +%%#%##%%%@@@@@                             
                                                                      #%%@@%%@%#@@@%@@@@                            
                                                                     #%*%%@@%%##@@@@@%@@@                           
                                                                    +*#@%@%%%#%@@@@@@@%@@@              #%#####*##  
                                                                   *+*@@%#+*%%%###%#*#@@@@@@        ***#%%%#*+#***##
                                                             =*   %%*%@@%###%###%@@@@@@@@@@@%      *#**#**#******#%%           
                                                  **  =+%% #+***%%%%#%%%%#@@@#%%%@@%@@@@@@@@@@      %%####@%##%%##%@         
                                                 #*#*##+%%#****#%%####%%#*%#**#@@%%%%@@@%%#%*#%%     ##%%%@%###%@@%@           
                                                  +#%@@%#**#*%%%%%###********%%#%%%%%%%###%%%#%%@    @%##%%%%%%@%@@        
                                                       @%###%@%#*%%%%####################+##%%#@@     #%#%%#%%%@@@         
                                                       %%##%%@%**#%%%#*##***#*##****#*#######%@%       ##%%%@%@@%          
                                               ==*#     %%%#%%@%%*******+********#***######%@@%          %%%@@%@           
                                               **#%      %@%%%%%%%#%%%####*#**##**###%@#%@%@@@             %%@@            
                                           ####+*%%###   %#%%#####%%%##@%%%%*#%@#*#%%%@#@@@@@                              
                                        ###%%%%#*##*+*#    #%%#*#%*%%%%%%%%%%%%%@##%%%%%@%%%@             #                
                                       #**#**#*++*#**%%%    %%%%%%#%%%%####%%%%%@#%@%@@@%%@            *######                   
                                       %%#*##%%###%###%@    %%@@%*#@%%%%%%#%%%%@@#%%%@@@@             #*###*#%%                           
                                       ###%%#@%#%#%%@%@          +** %%@%%%@@@@%%**                 ###****#%@                            
                                         %%%%%%%%%@%@@           ++*   @@%%%@%@# *+                #*###%*#%@%                            
     __    __                            #@%%%##%%@@@            *++      %%@@   ++          #**#+#%###%%##%@@                                  __    __       
  .-'| |\\ /  \\                             #%%%@%@@%             ***       @     **      *####***#####*++%%#@@                                 /  \\ /| |'-. 
 |   | || \\__/.                             %%%@@@@%             +**             *+      ##**#*#%#*###*#*#%@@%                                .\\__/ || |   | 
 '-._|_|/ _.'  \\ _                            %%@@               +++             ++      %%%###%%**#####%@%@                               _ /  \`._ \\|_|_.-'
  _) (_.='.__/  \\ |                                              *++             +*       %##%%@@%%@%%@@%@@                               | /  \\__.\`=._) (_ 
|"""""""""|  \\_. \\|                                              +**             *+        %%##%%%%@#@%@@@                                |/ ._/  |"""""""""|
|         | /'  .'|                                              +++             ++        %%%%%%%%@%%@@%                                 |'.  \`\\ |         |
|         | \\ \\""";                                              *++             +*          #%%%%%%%%%%                                  ;"""/ / |         |
|.-------.| |\\_\\ (                                               +**             **            %%%%@%                                      ) /_/| |.-------.|
"	  " ''-'  '                                              +++             ++                                                       '  \`-\`' "         "
                                                                 *++             ++                                     


   








    
    
    `;

}
function selectBlog(){
    blogSelected = 1;
    document.getElementById('blogSelected').style.setProperty('--styleNum', styleVal2);
    document.getElementById('blogSelected').style.color=selectedColor;
    document.getElementById('blogSelected').style.fontWeight=selectedWeight;
    document.getElementById('ascii-scene').innerHTML = `                    project and life updates
                                                          



                                                    .' \\
                                                  .'    .
                                                .'  ...'.\`
                                       ___.-. .'  ...'.'
                                 _.---'   \`..'  ...'.'
                          __.---'         .'  ...'.'
                      .--'              .'  ...'.'.
                     /\`               .'  ...'.'   \`.
                    /               .'  ...'.'       \`.
                   /              .'  ...'.'           \`-.
                  /             .'  ...'.'                \`.
                 /       \` _.-.'  ...'                      \`-._____.-'
                /        /  .'  ...'
               /\`       / .'. ...'
              /        /.'  .\`.'   \\
             /        .'  ...'  |   \\ /
            /\\      .'  ...'     \\   |
           / /    .'  ...' /      \\  |
          /_/   .'  ...'  /  |    |  |'
          \`._..' .-------.__________.'
            .' .'----
          .'   |     |      |
        .'  ....     |    |
      .'  ...'| \\ __.'     |                                        ___
     / \\...'   \\_\`------------------._____                  ___.---'
    /  .-'            |    | \\__/         \`--.__        _.-'
   /.-'                \\__/                     \`------'
~~'




`;

}
/*
function selectSciAdv(){
    sciAdvSelected = 1;
    document.getElementById('sciAdvSelected').style.setProperty('--styleNum', styleVal2);

}
*/


function resetSelected(){
    aboutSelected = 0;
    projectsSelected = 0;
    skillsSelected = 0;
    resumeSelected = 0;
    grindSelected = 0;
    //sciAdvSelected = 0;
    blogSelected = 0;
    chatSelected = 0;
    githubSelected = 0;


    document.getElementById('githubSelected').style.color="#c0c0c0";
    document.getElementById('githubSelected').style.fontWeight="400";
    document.getElementById('projectsSelected').style.color="#c0c0c0";
    document.getElementById('projectsSelected').style.fontWeight="400";
    document.getElementById('skillsSelected').style.color="#c0c0c0";
    document.getElementById('skillsSelected').style.fontWeight="400";
    document.getElementById('aboutSelected').style.color="#c0c0c0";
    document.getElementById('aboutSelected').style.fontWeight="400";
    document.getElementById('resumeSelected').style.color="#c0c0c0";
    document.getElementById('resumeSelected').style.fontWeight="400";
    document.getElementById('grindSelected').style.color="#c0c0c0";
    document.getElementById('grindSelected').style.fontWeight="400";
    document.getElementById('blogSelected').style.color="#c0c0c0";
    document.getElementById('blogSelected').style.fontWeight="400";
    document.getElementById('chatSelected').style.color="#c0c0c0";
    document.getElementById('chatSelected').style.fontWeight="400";

    document.getElementById('aboutSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('projectsSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('skillsSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('resumeSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('grindSelected').style.setProperty('--styleNum', styleVal1);
    //document.getElementById('sciAdvSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('blogSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('chatSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('githubSelected').style.setProperty('--styleNum', styleVal1);
    document.getElementById('ascii-scene').innerHTML = `                  .                                 888888888888888888888
                  :                               s 88 ooooooooooooooo 88     s 888888888888888888888888888888888888888                           .
                  !                               S 88 888888888888888 88    SS 888888888888888888888888888888888888888                           !
                  |                      .       SS 88 888888888888888 88   SSS 8888          ~~~~~~         - --+ 8888         .        .    - --+- -
                  |_                             SS 88 ooooooooooooooo 88  sSSS 8888     danielchamoun.tech      | 8888         !                 !
               ,  | \`.                          sSS 88 888888888888888 88 SSSSS 8888 p.. s. a.. r.. g.. b. t.. g.. 8888     - --+- -              .
         --- --+-<#>-+- ---  --  -              SSS 88 888888888888888 88 SSSSS 8888  |     ____   ________      | 8888         !
               \`._|_,'       .                  SSS 88 ooooooooooooooo 88 SSSSS 8888 -+-   /|:::| /| _____ |   +   8888         .
                  T     .         .             SSS 88 888888888888888 88 SSSSS 8888  |  + ||::o| ||| ~~~ ||+      8888
                  |        +      !             SSS 88 888888888888888 88 SSSSS 8888  _____||-::|_|||_____||____   8888
                  !           - --+- -          SSS 88 oooooooooo      88 SSSSS 8888       \\|___|\\\\|_______|   +   8888                        .  
                  :               !             SSS 88 8888888888 .::. 88 SSSSS 8888   +     ____/___|   |\\___     8888             .
                  .               .             SSS 88 oooooooooo :::: 88 SSSSS 8888        |\\::::::::::\\ \\^\\      8888                 +
                                                SSS 88 8888888888  \`'  88 SSSSS 8888          \\::::::::::\\ \\ )     8888
                                                SSS 88ooooooooooooooooo88  SSSS 8888           ---------------     8888
________________________________________________SSS 888888888888888888888__SSSS 8888                               8888________________________________________________
                                                SSS |   *  *  *   )8c8888  SSSS 888888888888888888888888888888888888888
                                                SSS 888888888888888888888.  SSS 888888888888888888888888888888888888888                   .
                    .                           SSS 888888888888888888888 \\_ SSsssss oooooooooooooooooooooooooooo ssss                    !
                    !                           SSS 888888888888888888888  \\\\   __SS 88+-8+-88============8-8==88 S                   - --+- -
                - --+-  -                       SSS 888888888888888888888-. \\\\  \\  S 8888888888888888888888888888                         !
                    !                           SSS 888888888888888888888  \\\\\\  \\\\       \`.__________.'      \` .                          .
                    .                           SSS 88O8O8O8O8o8O8O8O8O88  \\\\.   \\\\______________________________\`_.
                                                SSS 88O8O8O8O8o8O8O8O8O88 \\\\  '.  \\|________________________________|
                                                 SS 88O8O8O8O8o8O8O8O8O88  \\\\   '-.___
                                                  S 888888888888888888888 /~          ~~~~~-----~~~~---.__
                                                .---------------------------------------------------.    ~--.
                                                \\ \\______\\ __________________________________________\\-------^.-----------.
                                                :\\\'  _   _ _ _ _  _ _ _ _  _ _ _ _   _ _ _           \`\\        \\
                                                ::\\ ,\\_\\,\\_\\_\\_\\_\\\\_\\_\\_\\_\\\\_\\_\\_\\_\\,\\_\\_\\_\\           \\      o '8o 8o .
                                                |::\\  -_-_-_-_-_-_-_-_-_-_-_-_-_-___  -_-_-_   _ _ _ _  \\      8o 88 88 \\                                            
                                                |_::\\ ,\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\___\\,\\_\\_\\_\\,\\_\\_\\_\\_\\ \\      88       \\                                  
                                                   \`:\\ ,\\__\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\  \\,\\_\\_\\_\\,\\_\\_\\_\\ \\ \\      88       .                     
                                                    \`:\\ ,\\__\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\____\\    _   ,\\_\\_\\_\\_\\ \\      88o    .|                          
                                                      :\\ ,\\____\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\____\\  ,\\_\\ _,\\_\\_\\_\\ \\ \\      'ooooo'
                                                       :\\ ,\\__\\\\__\\_______________\\__\\\\__\\,\\_\\_\\_\\,\\___\\_\\_\\ \\
                                                        \`\\  --  -- --------------- --  --   - - -   --- - -   )____________
                                                          \`--------------------------------------------------'


    `;

}
