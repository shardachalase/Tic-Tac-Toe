const cell=document.querySelectorAll(".cell");
const statustext=document.getElementById("status");
const restartg=document.getElementById("restart");
let current="X";
let board=["","","","","","","","",""];
let isgameactive=true;

const winp=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]

];

cell.forEach((cell,index)=>{
    cell.addEventListener("click",()=> handleClick(index));
});

restartg.addEventListener("click",restart);

function handleClick(index){
   if(board[index]!==""||!isgameactive)return;
   board[index]=current;
  cell[index].innerHTML = `<span class="${current}">${current}</span>`;

   checkresult();
}
function checkresult(){
    let round=false;

    for(let condition of winp){
        const[a,b,c]=condition;
        if(board[a]&&board[a]==board[b]&&board[a]==board[c]){
            round=true;
            break;
        }
    }

        if(round){
            statustext.innerHTML=`player ${current} wins!`;
            isgameactive=false;
            return;
        }
        if(!board.includes("")){
            statustext.innerHTML="this round draw";
            isgameactive=false;
            return;
        }
        current=current==="X"?"O":"X";
        statustext.innerHTML=`player ${current} turn now`;



    
}
function restart(){
    current="X";
    board=["","","","","","","","",""];
    isgameactive=true;
    statustext.innerHTML="player X trun";
    cell.forEach(cell=>cell.innerHTML="");
}