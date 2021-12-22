import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';


const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg",
    ];
    const handleArrow = (direction) => {
        if(direction==='l'){
            setIndex(index !== 0 ? index -1 : 2)
        }
        if(direction === 'r'){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow('l')}>
                <Image src='/img/arrowl.png' alt='left arrow' layout='fill'  />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((image, i) => (
                    <div className={styles.imageContainer} key={i}>
                        <Image src={image} objectFit='contain' layout='fill' alt='featured Image' />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow('r')}>
                <Image src='/img/arrowr.png' alt='right arrow' layout='fill'  />
            </div>
        </div>
    )
}

export default Featured;