import { useRef } from 'react';
import styles from './Portfolio.module.css';
import { useInView } from 'framer-motion';
import Pill from '@/components/Pill/Pill';
import { IconBriefcase } from '@tabler/icons-react';
import Image from 'next/image';
import { one, two, three } from '@/public/projects';

const Portfolio = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	return (
		<section
			className={`${styles.wrapper} ${isInView ? styles.shown : styles.hidden}`}
			ref={ref}
			id={'about'}
		>
			<Pill>
				<IconBriefcase size={16} stroke={1} color={'#f2f2f2'} />
				<span>Portfolio</span>
			</Pill>

			<div className={styles.content}>
				<h2 className={styles.title}>
					Featured <span>Projects</span>
				</h2>
				<div className={styles.contentgrid}>
					<div>
						<Image className={styles.img} src={one} alt={''} fill={true} />
					</div>
					<div>
						<Image className={styles.img} src={two} alt={''} fill={true} />
					</div>
					<div>
						<Image className={styles.img} src={three} alt={''} fill={true} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Portfolio;
