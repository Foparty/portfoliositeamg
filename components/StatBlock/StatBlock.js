import styles from './StatBlock.module.css';

const StatBlock = ({ num, text }) => {
	return (
		<div className={styles.block}>
			<p className={styles.num}>{num}+</p>
			<p className={styles.text}>{text}</p>
		</div>
	);
};
export default StatBlock;
