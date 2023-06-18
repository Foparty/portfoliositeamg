import { useRef } from 'react';
import styles from './Resume.module.css';
import Pill from '@/components/Pill/Pill';
import { IconFileDescription } from '@tabler/icons-react';
import { useInView } from 'framer-motion';

const Resume = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	return (
		<section
			className={`${styles.wrapper} ${isInView ? styles.shown : styles.hidden}`}
			ref={ref}
			id={'about'}
		>
			<Pill>
				<IconFileDescription size={16} stroke={1} color={'#f2f2f2'} />
				<span>Resume</span>
			</Pill>

			<div className={styles.content}>
				<h2 className={styles.title}>
					Education & <span>Experience</span>
				</h2>
				<div className={styles.resume}>
					<div className={styles.timeline}>
						<div className={styles.line}></div>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
					</div>
					<div className={styles.resumedata}>
						<div className={styles.datablock}>
							<h3 className={styles.year}>2020 - present</h3>
							<div className={styles.dataitem}>
								<h3>Framer Designer & Developer</h3>
								<p>Some Agency</p>
							</div>
							<div className={styles.dataitem}>
								<h3>Frontend something here</h3>
								<p>Another really cool Agency</p>
							</div>
						</div>
						<div className={styles.datablock}>
							<h3 className={styles.year}>2017 - 2020</h3>
							<div className={styles.dataitem}>
								<h3>Framer Designer & Developer</h3>
								<p>Some Agency</p>
							</div>
							<div className={styles.dataitem}>
								<h3>Frontend something here</h3>
								<p>Another really cool Agency</p>
							</div>
							<div className={styles.dataitem}>
								<h3>Frontend something here</h3>
								<p>Another really cool Agency</p>
							</div>
						</div>
						<div className={styles.datablock}>
							<h3 className={styles.year}>2014 - 2017</h3>
							<div className={styles.dataitem}>
								<h3>Framer Designer & Developer</h3>
								<p>Some Agency</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Resume;
