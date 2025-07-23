'use client';

import React from 'react';
import styles from './MiniHome.module.css';
import Bgm from '../BGM/BGM';
import MenuTab from '../MenuTab/MenuTab';

const MiniHome: React.FC = () => {
    return (
        <div className="background-1">
            <div className="background-2">
                <div className="container">
                    <div className="left-wrapper">
                        <div className="users">
                            <p>TODAY 1 | TOTAL 2025</p>
                        </div>
                        <div className="left">
                            <div className={styles.profile}></div>
                            <hr className="divider" />
                            <div>
                                <div className={styles['state-message-box']}>
                                    <p>TODAY IS .. 즐거움</p>
                                </div>
                            </div>
                            <div className={styles['introduction-wrapper']}>
                                <div className={styles['introduction-box']}>
                                    <p>사이 좋은 사람들<br />싸이월드 ^_^</p>
                                </div>
                            </div>
                            <div>
                                <p>▶ HISTORY&nbsp;&nbsp;&nbsp;▼▲</p>
                            </div>
                            <hr className={styles.divider} />
                            <div className={styles['user-information-wrapper']}>
                                <p>고명준 (2002.09.24)</p>
                            </div>
                            <div className={styles['neighbor-wrapper']}>
                                <div className={styles['neighbor-box']}>
                                    <p>★ 나의 1촌 ----- ▼</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-wrapper">
                        <div className="top-message">
                            <p>내가 최고짱이다~~</p>
                        </div>
                        <div className="right">
                            <div className={styles['top-right-section']}>
                                <div className={styles['updated-news']}>
                                    <p>Updated news TODAY STORY</p>
                                    <hr className={styles['divider-news']} />
                                    <div className={styles['news-wrapper']}>
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

                            <div className={styles['mini-room']}>
                                <p>Mini Room</p>
                            </div>
                            <hr className={styles['divider-mini-room']} />
                            <div className={styles['decoration-wrapper']}>
                                <div className={styles.decoration}>
                                    <p>Mini Room 꾸미기</p>
                                </div>
                            </div>
                            <hr className={styles['divider-mini-room']} />
                            <div className={styles['status-message']}>
                                <p>What friends say 한마디로 표현해봐~</p>
                            </div>
                            <hr className={styles['divider-mini-room']} />
                        </div>
                        <MenuTab />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniHome;