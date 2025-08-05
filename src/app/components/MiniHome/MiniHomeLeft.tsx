import React from "react";
import styles from "./MiniHome.module.css";

const MiniHomeLeft: React.FC = () => {
  return (
    <>
      <div className={styles.profile}></div>
      <hr className="divider" />

      <div className={styles["state-message-box"]}>
        <p>TODAY IS .. 즐거움</p>
      </div>

      <div className={styles["introduction-wrapper"]}>
        <div className={styles["introduction-box"]}>
          <p>
            사이 좋은 사람들
            <br />
            싸이월드 ^_^
          </p>
        </div>
      </div>

      <div>
        <p>▶ HISTORY&nbsp;&nbsp;&nbsp;▼▲</p>
      </div>

      <hr className="divider" />

      <div className={styles["user-information-wrapper"]}>
        <p>고명준 (2002.09.24)</p>
      </div>

      <div className={styles["neighbor-wrapper"]}>
        <div className={styles["neighbor-box"]}>
          <p>★ 나의 1촌 ----- ▼</p>
        </div>
      </div>
    </>
  );
};

export default MiniHomeLeft;
