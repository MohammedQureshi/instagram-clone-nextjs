import Image from 'next/image'
import styles from '@/app/components/ProfileIcon/ProfileIcon.module.scss'
import VictoriaJustice from '@/app/resources/ProfilePictures/VictoriaJustice.jpg'

export default function ProfileIcon() {
    return (
        <div className={styles.profile_icon}>
            <div className={styles.image_border}>
                <Image
                    src={VictoriaJustice}
                    width={56}
                    height={56}
                    alt="Picture of the author"
                />
            </div>
            <p className={styles.username}>victoriajustice</p>
        </div>
    )
}