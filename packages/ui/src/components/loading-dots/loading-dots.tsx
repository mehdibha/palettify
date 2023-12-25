// @ts-ignore
import styles from "./loading-dots.module.css";

interface LoadingDotsProps {
  color?: string;
}

export function LoadingDots({ color = "#fff" }: LoadingDotsProps) {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
}

export default LoadingDots;
