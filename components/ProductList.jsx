import styles from '../styles/ProductList.module.css';
import Card from './Card';

const ProductList = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                The Best Pizza in Town
            </h1>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default ProductList;