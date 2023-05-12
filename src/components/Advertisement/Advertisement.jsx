import styles from '../Advertisement/Advertisement.module.scss'
import Advertisement1 from 'assets/images/advertisement1.png'
import Advertisement2 from 'assets/images/advertisement2.png'
import Advertisement3 from 'assets/images/advertisement3.png'
import Advertisement4 from 'assets/images/advertisement4.png'
import Advertisement5 from 'assets/images/advertisement5.png'

const Advertisement = () => {
  return (
    <div className={styles.AdvertisementContainer}>
      <div className={styles.Advertisement}>
        <img
          src={Advertisement1}
          alt="advertisement"
          className={`${styles.AdvertisementItem} ${styles.Advertisement1}`}
        />
      </div>
      <div className={styles.Advertisement}>
        <img
          src={Advertisement2}
          alt="advertisement"
          className={`${styles.AdvertisementItem} ${styles.Advertisement2}`}
        />
      </div>
      <div className={styles.Advertisement}>
        <img
          src={Advertisement3}
          alt="advertisement"
          className={`${styles.AdvertisementItem} ${styles.Advertisement3}`}
        />
      </div>
      <div className={styles.Advertisement}>
        <img
          src={Advertisement4}
          alt="advertisement"
          className={`${styles.AdvertisementItem} ${styles.Advertisement4}`}
        />
      </div>
      <div className={styles.Advertisement}>
        <img
          src={Advertisement5}
          alt="advertisement"
          className={`${styles.AdvertisementItem} ${styles.Advertisement5}`}
        />
      </div>
    </div>
  )
}

export default Advertisement
