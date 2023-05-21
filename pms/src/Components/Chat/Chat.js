import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Pusher from'pusher-js'
function Chat() {
  const [baseImage,setBaseImage]=useState('')
  const [messages,setMessages] = useState([]);
  const [message,setMessage]= useState('');
  const [username,setUserName]= useState('');
  const uploadFile=async(e)=>{
    const file=e.target.files[0]
    const base64=await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
    setMessage(base64);
  }
  const convertBase64=(file)=>{
    return new Promise((resolve, reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      };
      fileReader.onerror=(error)=>{
        reject(error);
      };
    })
  }
  
    useEffect(()=>{
  let allMessages =[];
         // Enable pusher logging - don't include this in production
         Pusher.logToConsole = true;

    const pusher = new Pusher('0123ce3569acd1aa7c39', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function(data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
    },[])
    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
            const data=await fetch('http://127.0.0.1:8000/api/message',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    username,
                    message
                })
            })
            console.log(username)
            console.log(message)
            console.log(data)
            setMessage('')
        }
        catch(error){
          console.log(error)
        }
    }
  return (
   <Fragment>
   
        <div className='container mt-14 h-page '>
        <div class='mb-1'>
        <input type="text" class='p-1 rounded-md outline-1 outline-primary border border-gray-100 'value={username} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
       {
         messages.map((e)=>{
            return (
           <ListGroup as="ol" numbered>
                 <ListGroup.Item
                   as="li"
                   className="d-flex justify-content-between align-items-start cursor-pointer hover:bg-gray-100 transition-all"
                 >
                    <div className="ms-2 me-auto">
                       <div className="fw-bold">{e.username}</div>
                       {e.message}
                     </div>
                     <Badge bg="primary" pill>
                       14
                     </Badge>
                 </ListGroup.Item>
               </ListGroup>
            )
           })
          }
        </div>
        <form action="" className='container p-2 flex' onSubmit={(e)=>submitHandler(e)} >
          <label htmlFor="inputTag" class='cursor-pointer'>
          <i class="fa-solid fa-paperclip p-2 text-gray-500 text-xl"></i>
          </label>
          <input type="file" id='inputTag' class='hidden' onChange={(e)=>uploadFile(e)}/>
        <input placeholder='Write messages' type="text" class=' rounded-md outline-1 outline-primary border border-gray-100 w-full p-2' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </form>
   </Fragment>
  );
}

export default Chat;

   