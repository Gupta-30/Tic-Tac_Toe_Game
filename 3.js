button=document.querySelectorAll('.item');
let turn='X';
let gameover=0;

reset=document.querySelector('button');
reset.addEventListener("click", ()=>{
   document.querySelector('.line').style.width="0px";
    document.querySelector('img').style.width="0px";
    gameover=0;
    turn='X';
    button.forEach(e => {
        e.innerText="";
        
    });
})

console.log(turn);
function changeTurn(turn){
    turn=(turn=='X')?'0':'X';
    return turn;

}
function win(){
    let a=[[0,1,2,50,25,0],[3,4,5,174,25,0],[6,7,8,300,25,0],[0,3,6,158,-100,90],[1,4,7,158,20,90],[2,5,8,158,150,90],[0,4,8,177,30,45],[2,4,6,177,30,-45]];
    a.forEach(e => {
        if(button[e[0]].innerText===button[e[1]].innerText && button[e[1]].innerText ===button[e[2]].innerText && button[e[0]].innerText!="" ){
            document.querySelector('.text').innerHTML= turn+" HAS WON";
            gameover=1;
            document.querySelector('img').style.width="300px";
            document.querySelector('.line').style.width="300px";
            document.querySelector('.line').style.transform=`rotate(${e[5]}deg)`;
            document.querySelector('.line').style.top=e[3]+"px";
          
            document.querySelector('.line').style.left=e[4]+"px";
           
           
            
           
        }
        
        
    });

}
button.forEach(item => {
    item.addEventListener("click",()=>{
        item.innerHTML=turn;
        win();
        if(gameover==0){
         turn=changeTurn(turn);
         document.querySelector('.text').innerHTML="TURN FOR "+turn;

        }
    });

    
});