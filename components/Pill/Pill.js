import styles from './Pill.module.css';

const Pill = ({ children }) => {
	return <div className={styles.pill}>{children}</div>;
};
export default Pill;
