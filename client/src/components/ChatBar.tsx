import { useState, useEffect } from "react";
import { SocketProps } from "../models";

const ChatBar = ({ socket }: SocketProps) => {
  const [users, setUsers] = useState<{ userName: string; socketID: string }[]>(
    []
  );

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
