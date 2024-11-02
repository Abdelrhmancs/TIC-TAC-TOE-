import React, { useState, useRef } from 'react';
import './game.scss';
import Cross from '../Assets/cross.png';
import Circle from '../Assets/circle.png';
import Xsound from '../Assets/mouse-click-153941.mp3';
import Osound from '../Assets/click-151673.mp3';
import winSound from '../Assets/goodresult-82807.mp3';
let boardContent = ["","","","","","","","",""];

function Tictactoe(){

   let [count ,setCount] = useState(0);
   let [lock , setLock] = useState(false);
   let titleRef = useRef(null);
   const soundRefX = useRef(null);
   const soundRefO = useRef(null);
   const Winning = useRef(null);



    const view = (e,num)=>{
        if(lock) return 0;
        else if(count %2 ===0 && boardContent[num] === ""){
            e.target.innerHTML= ` <img src= '${Cross}'>`;
            soundRefX.current.play();
            boardContent[num] ="X";
            setCount(++count);
            
       } else if(boardContent[num] === "") {
            soundRefO.current.play();
            e.target.innerHTML= ` <img src= '${Circle}'>`;
            boardContent[num]="O";
            setCount(++count);
       }
       winner();
    }

    const won = (theWinner) =>{
        setLock(true);
        Winning.current.play();
         if(theWinner ==="X"){
            titleRef.current.innerHTML = `<img src= '${Cross}' class='win' > is winner `;
            
         } else{
            titleRef.current.innerHTML = `<img src= '${Circle}' class='win'> is winner `;
         }
    }

    const winner = ()=>{
        if(boardContent[0] === boardContent[1] && boardContent[1] === boardContent[2] && boardContent[2] !== ""){
            won(boardContent[2]);
        } else if(boardContent[3] === boardContent[4] && boardContent[4] === boardContent[5] && boardContent[5] !== ""){
            won(boardContent[5]);
        }else if(boardContent[6] === boardContent[7] && boardContent[7] === boardContent[8] && boardContent[8] !== ""){
            won(boardContent[8]);
        } else if(boardContent[0] === boardContent[4] && boardContent[4] === boardContent[8] && boardContent[8] !== ""){
            won(boardContent[8]);
        }else if(boardContent[2] === boardContent[4] && boardContent[4] === boardContent[6] && boardContent[6] !== ""){
            won(boardContent[6]);
        }else if(boardContent[0] === boardContent[3] && boardContent[3] === boardContent[6] && boardContent[6] !== ""){
            won(boardContent[6]);
        }else if(boardContent[1] === boardContent[4] && boardContent[4] === boardContent[7] && boardContent[7] !== ""){
            won(boardContent[7]);
        }else if(boardContent[2] === boardContent[5] && boardContent[5] === boardContent[8] && boardContent[8] !== ""){
            won(boardContent[8]);
        }
    
    }

    const reload = ()=>{
        window.location.reload(true);
    }


    return(
        <div className='container' >
               <div className='text-game'>
                <h1 ref={titleRef}>TIC TAC TOE</h1>
            </div>
        <div className='body-game'> 
        
            <div className='structure-game'>
                <div className='box'onClick={(e)=>{view(e,0)}}></div>
                <div className='box'onClick={(e)=>{view(e,1)}}></div>
                <div className='box'onClick={(e)=>{view(e,2)}}></div>
                <div className='box'onClick={(e)=>{view(e,3)}}></div>
                <div className='box'onClick={(e)=>{view(e,4)}}></div>
                <div className='box'onClick={(e)=>{view(e,5)}}></div>
                <div className='box'onClick={(e)=>{view(e,6)}}></div>
                <div className='box'onClick={(e)=>{view(e,7)}}></div>
                <div className='box'onClick={(e)=>{view(e,8)}}></div>
            </div>
            <div className='Reset-perant'> <button className='Reset' onClick={()=>{reload()}}>Reset</button></div>
            <audio  ref={soundRefX}><source src={Xsound} type="audio/mp3"/></audio>
            <audio  ref={soundRefO}><source src={Osound} type="audio/mp3"/></audio>
            <audio  ref={Winning}><source src={winSound} type="audio/mp3"/></audio>


        </div>
        
        

        </div>
    );
}
export default Tictactoe;