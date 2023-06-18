import { useRef } from 'react';
import styles from './About.module.css';
import { useInView } from 'framer-motion';
import { IconUser } from '@tabler/icons-react';
import Pill from '@/components/Pill/Pill';

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	return (
		<section
			className={`${styles.wrapper} ${isInView ? styles.shown : styles.hidden}`}
			ref={ref}
			id={'about'}
		>
			<Pill>
				<IconUser size={16} stroke={1} color={'#f2f2f2'} />
				<span>About</span>
			</Pill>

			<div className={styles.content}>
				<h2 className={styles.title}>
					Lorem ipsum dolor sit amet, <span>consectetur adipisicing</span> elit.
				</h2>
				<p className={styles.sub}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					distinctio dolorem doloremque ea, earum eligendi esse exercitationem
					maiores mollitia nemo nesciunt obcaecati odit, quas quia quo ratione
					soluta vel. Blanditiis eum illum magni natus nulla sed similique.
					Distinctio eaque id libero non nostrum odio, perferendis perspiciatis
					provident, quasi quibusdam sapiente sint vel velit veritatis.
				</p>
			</div>
		</section>
	);
};
export default About;
