import React from "react";
import Bgm from "../BGM/BGM";
import styles from "./MiniHomeRight.module.css";

const MiniHomeRight: React.FC = () => {
  return (
    <>
      <div className={styles["top-right-section"]}>
        <div className={styles["updated-news"]}>
          <p>Updated news TODAY STORY</p>
          <hr className={styles["divider-news"]} />
          <div className={styles["news-wrapper"]}>
            <ul>
              <li>질문있습니다!</li>
              <li>여름 출사 후기!</li>
              <li>축하드립니다~^^</li>
              <li>방가방가~!</li>
            </ul>
          </div>
        </div>

        <Bgm />
      </div>

      <div className={styles["mini-room"]}>
        <p>Mini Room</p>
      </div>
      <hr className={styles["divider-mini-room"]} />

      <div className={styles["decoration-wrapper"]}>
        <div className={styles.decoration}>
          <p>Mini Room 꾸미기</p>
        </div>
      </div>
      <hr className={styles["divider-mini-room"]} />

      <div className={styles["status-message"]}>
        <p>What friends say 한마디로 표현해봐~</p>
      </div>
      <hr className={styles["divider-mini-room"]} />
    </>
  );
};

export default MiniHomeRight;
