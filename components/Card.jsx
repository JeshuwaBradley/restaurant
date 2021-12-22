import Image from 'next/image';
import styles from '../styles/Card.module.css'

const Card = () => {
    return(
        <div  className={styles.container}>
            <Image src='/img/pizza.png' alt='item image' width='500' height='500' />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>
                $19.9
            </span>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur aduofsfs elit.
            </p>
            
        </div>
    )
}

export default Card;