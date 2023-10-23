import { useState, useEffect } from "react";
import styles from './style.module.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginButton, setShowLoginButton] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('Account')) {
      const Account = {
        'Email': '1007',
        'Name': 'German Romanov',
        'Password': '0000',
      };
      localStorage.setItem('Account', JSON.stringify(Account));
    }
  }, []);

  const user = JSON.parse(localStorage.getItem('Account'));
  const storedEmail = user ? user['Email'] : '';
  const storedPassword = user ? user['Password'] : '';

  const handleAlertClick = (e) => {
    if (!showLoginButton) {
      e.preventDefault();
      alert('Данные о пользователе отсутствуют, пожалуйста зарегестрируйтесь');
    } 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };
  const checkLogin = () => {
    if (email === storedEmail && password === storedPassword) {
      setShowLoginButton(true);
    } else {
      setShowLoginButton(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(checkLogin, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [email, password, storedEmail, storedPassword]);


return(
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <div>
            <div className={styles.body}>
                <div>
                        <div >
                        <h2><span>ВХ<span>О</span>Д:</span></h2>                       
                        </div>                     
                                <div>
                                <input type="email" placeholder="E-mail" id="email" value={email} onChange={handleEmailChange} className={styles.glowingInp}  /> 
                                  
                        
                                <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} className={styles.glowingInp} />
                                </div>
                    <div>
                        <div className={styles.signBtn}>
                            <Link to="/home">
                            {showLoginButton && <button class={styles.glowingBtn}><span class={styles.glowingTxt}>SI<span class={styles.faultyLetter}>GN</span>IN</span></button>}
                            </Link>
                            {!showLoginButton && <button onClick={handleAlertClick} class={styles.glowingBtn}><span class={styles.glowingTxt}>SI<span class={styles.faultyLetter}>GN</span>IN</span></button>}
                            <div className={styles.regPromt}>Если у вас нет аккаунта пожалуйста <Link to='/login'> зарегестрируйтесь </Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </header>
</div>        
)
}