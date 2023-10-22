import styles from './style.module.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'



export const Form = () => {

    return(
<div>          
    <div className="App">
            <header className="App-header">
            
        <img className={styles.Logo} src={logo} alt="logo" />

    <div className={styles.helloText}>
       <h1> Войдите или зарегестрируйтесь на нашем сайте</h1>
        </div>
            <div className={styles.Btns}>
                <div class="regBtn">
                <Link to="/login">

                    <button class={styles.glowingBtn}><span class={styles.glowingTxt}>РЕГ<span class={styles.faultyLetter}>ИСТРА</span>ЦИЯ</span></button>
                
                </Link>
            </div>
                <div className={styles.signBtn}>
                <Link to="/signin" >

                    <button class={styles.glowingBtn}><span class={styles.glowingTxt}>ВО<span class={styles.faultyLetter}>Й</span>ТИ</span></button>
                
                </Link>  
            </div>
        </div>
         </header>
    </div>

</div>   
)}