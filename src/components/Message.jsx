import { useState } from "react";

const Message = ({ note }) => {
  const [msj, setMsj] = useState("");

  return (
    <>
      <h1 className="display-4">
        Hello {note} 👋 {msj}
      </h1>
      <button className="btn btn-outline-primary" onClick={() => setMsj("(from changed state)")}>Click me</button>
    </>
  );
};

export default Message;
