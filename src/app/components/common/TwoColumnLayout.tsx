import styles from "./TwoColumnLayout.module.css";

export default function TwoColumnLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles["left-wrapper"]}>
        <div className={styles.left}>{left}</div>
      </div>
      <div className={styles["right-wrapper"]}>
        <div className={styles.right}>{right}</div>
      </div>
    </div>
  );
}
