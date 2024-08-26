import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import Contact from "./pages/contact/Contact"
import NavBar from "./components/NavBar";
import { useState } from "react";
import { FormInterface } from "./service/interface/contact";
import MessageDetail from "./pages/message/MessageDetail";

const App = () => {
  const [messages, setMessages] = useState<FormInterface[]>([])
  const handleParentMessage = (myMessage: FormInterface) => {
    console.log('App:', myMessage)
    setMessages([...messages, myMessage])
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/message' element={<Message message={messages} />} />
        <Route path='/message/:email' element={<MessageDetail message={messages}/>} />
        <Route path='contact' element={<Contact handleParentMessage={handleParentMessage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;