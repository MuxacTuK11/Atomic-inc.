 import styles from './style.module.css'
 import logo from './logo.png'
 import {Link} from 'react-router-dom' 
 import { useLocalStorage } from '../hook/localStorage'
 


 export const Home = () => {
 
 
    const [IP, setIP] = useLocalStorage("IP", "");

    const getData = () => {
       fetch('https://freeipapi.com/api/json')
        .then(res => res.json())
        .then(res => setIP(res.ipAddress))  
    }
    return(
    <div>



        <header className={styles.siteHeader}>
            <div className={styles.siteIdentity}>               
                <img src={logo} className={styles.Applogo} alt="logo" />
            </div>
                <div className={styles.HeaderText}>Atomic inc.</div>
            <nav className={styles.siteNavigation}>
                  <div ><Link to='/profile'><button className={styles.Link}>Профиль</button></Link></div>
                  <div ><Link to='/support'><button className={styles.Link}>Поддержка</button></Link></div>
            </nav>
        </header>






    <div className={styles.main}>
            <h1>Добро пожаловать на наш сайт !!!</h1>
            <h2>Этот сайт все еще в разработке, но ты можешь</h2>
            <h2>посоветовать дороботки во вкладке "Поддержка" </h2>


            <div className={styles.inputDiv}>
                <h1> Ну, а пока можешь узнать свой IP</h1>           
                  <h1> Твой IP:  {IP}</h1>  
                        <button onClick={getData} class={styles.glowingBtn}><span class={styles.glowingTxt}>УЗ<span class={styles.faultyLetter}>НА</span>ТЬ</span></button>
                                 
            </div> 
        </div>
    </div>
    )
 }