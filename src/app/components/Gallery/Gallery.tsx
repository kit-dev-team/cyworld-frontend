import React from 'react';
import styles from './Gallery.module.css';
import MenuTab from '../MenuTab/MenuTab';

const Gallery: React.FC = () => {
  return (
    <div className="background-1">
      <div className="background-2">
        <div className="container">
          <div className="left-wrapper">
            <div className="users">
              <p>TODAY 1 | TOTAL 2025</p>
            </div>
            <div className="left">
              <p className="title">PHOTO ALBUM</p>
              <hr className="divider" />
              <p>📷 전체보기</p>
              <p>📁 풍경사진</p>
            </div>
          </div>

          <div className="right-wrapper">
            <div className="top-message">
              <p>내가 최고짱이다~~</p>
            </div>
            <div className="right">
              <div className={styles['title-wrapper']}>
                <p>제목 입력</p>
              </div>
              <div className={styles['photo-header']}>
                <p className={styles.name}>고명준</p>
                <p className={styles.datetime}>2025.07.17 19:29</p>
              </div>
              <div className={styles['photo-insert-wrapper']}>
                <div className={styles['photo-insert']}>
                  <p>사진 첨부</p>
                </div>
              </div>
              <div className={styles['comment-wrapper']}>
                <div className={styles['comment-box']}>
                  <p className={styles.comment}>댓글</p>
                </div>
                <div className={styles['input-box']}>
                  <p className={styles['comment-input']}>댓글 입력</p>
                </div>
                <div className={styles['post-box']}>
                  <p className={styles.post}>확인</p>
                </div>
              </div>
            </div>
            <MenuTab />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
