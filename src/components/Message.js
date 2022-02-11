import React, {useState} from 'react';

const Message = (props) => {
    
    const [msj, setMsj] = useState('');

    return (  
        <>
            <h1>Hello {props.note} 👋 {msj}</h1> 
            <button onClick={()=> setMsj('(from changed state)')}>Click me</button>
        </>
    );
};

export default Message;