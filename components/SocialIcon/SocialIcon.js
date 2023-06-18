import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SocialIcon.module.css';

const SocialIcon = ({ data }) => {
	return (
		<Link className={styles.icon} href={data.url} target={'_blank'}>
			<Image src={data.icon} alt={`${data.name} icon`} width={24} height={24} />
		</Link>
	);
};
export default SocialIcon;
