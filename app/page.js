'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Intro from '@/sections/Intro/Intro';
import { useRouter } from 'next/navigation';
import About from '@/sections/about/About';
import Resume from '@/sections/resume/Resume';
import Portfolio from '@/sections/portfolio/Portfolio';

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.replace('#top');
	}, []);
	return (
		<main className={styles.main}>
			<Intro />
			<About />
			<Resume />
			<Portfolio />
		</main>
	);
}
