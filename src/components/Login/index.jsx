import { useState } from "react";
import styles from './style.module.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

export const LogIn = () => {
    const [data, setData] = useState({});
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleClick = () => {
      localStorage.setItem('Account', JSON.stringify(data));
    };

return(
    <div className="App">
    <header className="App-header">
    <img src={logo} className={styles.appLogo} alt="logo" />
    <div>
    
<div className={styles.body}>
    <div>  
            <div >
                    <h2><span>РЕГИ<span>СТРА</span>ЦИЯ:</span></h2> 
            </div>                  
  
        <div>
            <input onChange={handleChange} placeholder="E-mail" type="e-mail" name="Email" className={styles.glowingInp}  />
                        
            <input onChange={handleChange} placeholder="Surname" name="Surname" className={styles.glowingInp}  type="text" />
                        
            <input onChange={handleChange} placeholder="Name" type="text" name="Name"  className={styles.glowingInp}  />
                        
            <input onChange={handleChange} placeholder="Your age" name="age" className={styles.glowingInp} type="text" />


            <input onChange={handleChange} placeholder="City" name="city" className={styles.glowingInp}  type="text" />
                        
            <input onChange={handleChange} placeholder="Password" name="Password" className={styles.glowingInp} type="password"  />



            

        
        </div>
           
                <div>                   
                    <div className={styles.regBtn}>
                        <Link to="/home">
                            <button onClick={handleClick} class={styles.glowingBtn}><span class={styles.glowingTxt}>LO<span class={styles.faultyLetter}>G</span>IN</span></button>
                        </Link>
                     </div>
                </div>        
            </div>
      </div>
    </div>
  </header>
</div>        
)
}
