import styles from './Card.module.css';
import cover from '@/public/cardimg.webp';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/data/data';
import SocialIcon from '@/components/SocialIcon/SocialIcon';

const Card = () => {
	return (
		<figure className={styles.card}>
			<div className={styles.upsection}>
				<h2 className={styles.name}>
					{data.name} <span>{data.lastname}</span>
				</h2>
				<small className={styles.role}>{data.role}</small>
			</div>
			<div className={styles.imgcontainer}>
				<Image
					className={styles.img}
					src={cover}
					alt={`${data.name} ${data.lastname}`}
					fill={true}
				/>
			</div>
			<div className={styles.copy}>
				{data.data.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
			<div className={styles.social}>
				{data.socialicons.map((item) => (
					<SocialIcon key={item.id} data={item} />
				))}
			</div>
			<Link href={''} className={styles.button}>
				Hire Me
			</Link>
		</figure>
	);
};
export default Card;
