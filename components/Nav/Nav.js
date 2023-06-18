import styles from './Nav.module.css';
import Link from 'next/link';
import {
	IconHome,
	IconUser,
	IconBriefcase,
	IconMail,
} from '@tabler/icons-react';

const Nav = () => {
	return (
		<ul className={styles.nav}>
			<li>
				<Link href={'/'}>
					<IconHome size={16} stroke={1} color={'#f2f2f2'} />
				</Link>
			</li>
			<li>
				<Link href={'/'}>
					<IconUser size={16} stroke={1} color={'#f2f2f2'} />
				</Link>
			</li>
			<li>
				<Link href={'/'}>
					<IconBriefcase size={16} stroke={1} color={'#f2f2f2'} />
				</Link>
			</li>
			<li>
				<Link href={'/'}>
					<IconMail size={16} stroke={1} color={'#f2f2f2'} />
				</Link>
			</li>
		</ul>
	);
};
export default Nav;
