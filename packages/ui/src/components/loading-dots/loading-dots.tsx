// @ts-ignore
import styles from "./loading-dots.module.css";

interface LoadingDotsProps {
  className?: string;
  color?: string;
  size?: number;
}

export function LoadingDots(props: LoadingDotsProps) {
  const { color, size } = props;
  return (
    <span className={styles.loading}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className="bg-foreground"
            style={{ backgroundColor: color, width: `${size}px`, height: `${size}px` }}
          />
        ))}
    </span>
  );
}

export default LoadingDots;
