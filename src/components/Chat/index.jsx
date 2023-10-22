import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import deletemess from './deletemessage.png'


 export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('Account'));
    if (user && user.Name) {
      setUserName(user.Name);
    }
  }, []);


  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = { userName, text: messageText };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setMessageText('');
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
 <div>


    <header className={styles.siteHeader}>
    <div className={styles.siteIdentity}>               
        <img src={logo} className={styles.Applogo} alt="logo" />
        </div>
        <div className={styles.HeaderText}>Atomic inc.</div>
     <nav className={styles.siteNavigation}>
          <div ><Link to='/home'><button className={styles.Link}>Главная</button></Link></div>
          <div ><Link to='/profile'><button className={styles.Link}>Профиль</button></Link></div>
        </nav>  
    </header>

<div className={styles.box}>

    <div className={styles.main}>
      <h1>Чат поддержки:</h1>

      <div>
        <div className={styles.message}>
        <div className={styles.messContent}>
           <div>Поддержка :  </div>           
           <div>Здравствуйте, вас приветствует поддержка раскажите о своей проблеме </div> 
        </div>
        </div>
        {messages.map((message, index) => (
          <div className={styles.message} key={index}>
            <div className={styles.messContent}>
           <div>{message.userName}: </div>           
           <div>{message.text}</div> 
           </div>
           <img onClick={() => handleDeleteMessage(index)} className={styles.deleteMess} src={deletemess}/>
           
            
          </div>
        ))}
      </div>
      <div className={styles.inputMess}>
        <input className={styles.glowingInp} id="messageText" type="text" value={messageText} onChange={handleMessageTextChange} onKeyDown={handleKeyDown}/>
      </div>
    </div>

</div>

    </div>
    

    
  );
};


