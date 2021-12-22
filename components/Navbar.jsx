import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src='/img/telephone.png' alt='' width='32' height='32' />
                </div>
                <div className={styles.text}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src='/img/logo.png' alt='logo' width='160px' height='69px' />
                    <li className={styles.listItem}>Event</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src='/img/cart.png' alt='cart' width='30px' height='30px' />
                    <div className={styles.count}>
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;