import styles from './Intro.module.css';
import Pill from '@/components/Pill/Pill';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import StatBlock from '@/components/StatBlock/StatBlock';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { data } from '@/data/data';

const Intro = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	return (
		<section
			ref={ref}
			className={`${styles.wrapper} ${isInView ? styles.shown : styles.hidden}`}
			id={'intro'}
		>
			<Pill>
				<IconHome size={16} stroke={1} color={'#f2f2f2'} />
				<span>Introduce</span>
			</Pill>
			<div className={styles.content}>
				<h2 className={styles.title}>
					Hi from <span>{data.name}</span>, Frontend React Developer
				</h2>
				<p className={styles.sub}>
					Affordable prices for your web projects, landing pages, personal
					blogs, etc.
				</p>
				<Link href={'/'} className={styles.link}>
					some work
				</Link>
				<div className={styles.stats}>
					<StatBlock num={4} text={'years of experience'} />
					<StatBlock num={20} text={'projects completes in 15 countries'} />
				</div>
			</div>
		</section>
	);
};
export default Intro;
