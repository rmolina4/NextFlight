import styles from './background.module.css';

function Background({ children }: { children: React.ReactNode }) {
  return <div className={styles.background}>{children}</div>;
}

export default Background;