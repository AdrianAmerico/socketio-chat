import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  typing: (typing: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  message: (message: {
    text: string;
    name: string;
    id: string;
    socketID: string;
  }) => void;
  newUser: (user: { userName: string; socketID: string }) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  messageResponse: (message: string) => void;
  typingResponse: (typing: string) => void;
  newUserResponse: (newUser: { userName: string; socketID: string }[]) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export interface SocketProps {
  socket: Socket<ClientToServerEvents, ServerToClientEvents>;
}
