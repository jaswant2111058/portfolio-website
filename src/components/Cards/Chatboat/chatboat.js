import './chatboat.css'
import stringSimilarity from "string-similarity"
import { useEffect, useState } from 'react'
const chatData = require("./chatQ&A")

const Chatboat=()=>{
    function startChat(){
        var x=document.getElementById('instraction')
        var y=document.getElementById('start')
             x.style.display="none"
             y.style.display="none"
             document.getElementById('chatFooter').style.display="block"
             document.getElementById('chat').style.display="flex"
         }
        
        const[qsnAns,setQsnAns] = useState([])
       // const[counter,setCounter] = useState(0)
        let chatsetup = qsnAns.map((data)=>{
                
                if(data[data.length-1]===' ')
                {
                    
                return (
                <>
                 <div className='chat-user'>
                <p>{data}</p>
                </div>
                </>
                )
                }
                else{
                   
                    return(
                        <>
                        <div className='chat-boat'>
                <p>{data}</p>
                </div>
            
                        </> 
                    )
                }
        })

        

         const ask= ()=>{
            document.getElementById("show").style.display="none"
            var messageBody = document.getElementById('chat');
             messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

            const question = document.getElementById("chatinput").value+' ';
           let text = question.toLowerCase()
            document.getElementById("chatinput").value='';
            if(question!=="."){
                var arry = qsnAns;
                arry.push(question)
                setQsnAns(arry);
                var matches =  stringSimilarity.findBestMatch(text, chatData.question);
                if(matches.bestMatch.rating >= 0.3){
                    setQsnAns([...qsnAns, chatData.answer[matches.bestMatchIndex]])
                }
                else{
                    setQsnAns([...qsnAns,"Not Have Apropriate Answer"])
                }
            }
            else{
                window.alert("Enter some Test")
            }
            
         }
         useEffect(()=>{
            document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
         },[qsnAns]);
         
// var matches =  stringSimilarity.findBestMatch('sealed', chatData.question)
//             console.log(matches.bestMatch.rating+" "+matches.bestMatchIndex) 
    return(
        <>
        
         <div className="chatboat" id="chatbot">
            <div className="cover">
                <p>My Chat Bot</p>
            </div>
            <div className="instraction" id="instraction" >
                This is not a AI Based chat Bot,
                It work on the basis of finding best 
                similar question in its data base with
                 the Question provided By Asker and 
                 give Answer respected to the Question
                  which is preset
            </div>
            <button id="start" onClick={startChat}> Start </button>
            <div className='chat' id="chat">

                {chatsetup}
            <div className='show' id="show">
                <h4>Ask Something About Me...</h4>
            </div>
            </div>
            <div className="chatFooter" type='text' id='chatFooter'>
                <input className="chatinput" id="chatinput" />
                <button className="send" onClick={ask}>Ask</button>


            </div>
        </div>
      
        </>

    )
   
}

export default Chatboat;