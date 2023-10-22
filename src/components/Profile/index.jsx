import styles from './style.module.css'
import {Link} from 'react-router-dom' 
import logo from './logo.png'
import userPhoto from './noimage.jpg'

export const Profile = () => {
    const IP = JSON.parse(localStorage.IP)
    const account = JSON.parse( localStorage.Account );
    
    return (
        <div>
            <header className={styles.siteHeader}>
            <div className={styles.siteIdentity}>               
            <img src={logo} className={styles.Applogo} alt="logo" />
            </div>
            <div className={styles.HeaderText}>Atomic inc.</div>
            <nav className={styles.siteNavigation}>             
                <div ><Link to='/home'><button className={styles.Link}>Главная</button></Link></div>
                <div ><Link to='/support'><button className={styles.Link}>Поддержка</button></Link></div>
            </nav>
        </header>
    <div className={styles.main}>
        <div className={styles.userCard}>
        <div className={styles.headInfoUser}>
            <img className={styles.userImg} src={userPhoto} alt="аватарка" />
            <div className={styles.userName}>{account.Surname} {account.Name}</div>
        </div>
             <div className={styles.userInfo}>  
            <div> Твой E-mail: {account.Email}</div>
            <div> Твой IP: {IP}</div>
            <div> Возраст: {account.age}</div> 
            <div> Город: {account.city}</div>
            <div className={styles.logOutBtn}>
                <Link to='/'>
                <button class={styles.glowingBtn}><span class={styles.glowingTxt}>ВЫХ<span>О</span>Д</span></button>
                </Link>
                </div>
             </div>
        </div>
    </div>
    </div>
)
}