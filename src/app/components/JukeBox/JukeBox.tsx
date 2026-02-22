import React from "react";
import styles from './JukeBox.module.css';
import DropDown from "./DropDown";
import MenuTab from '../MenuTab/MenuTab';


const JukeBox: React.FC = () => {
    return (
        <div className="background-1">
            <div className="background-2">
                <div className='container'>
                    <div className='left-wrapper'>
                        <div className='users'>
                            <p>TODAY 1 | TOTAL 2025</p>
                        </div>
                        <div className={styles['jukebox-left']}>
                            <p className={styles["jukebox-title"]}>JUKE BOX</p>
                            <hr className='divider' />
                            <p>📁 내 노래</p>
                        </div>
                    </div>

                    <div className='right-wrapper'>
                        <div className='top-message'>
                            <p>내가 최고짱이다~~</p>
                        </div>
                        <div className='right'>
                            <div className={styles["search-wrapper"]}>
                                <DropDown />
                                <div className={styles["input-search"]}>
                                    <input type="text" />
                                </div>
                                <div className={styles.search}>
                                    <p>검색</p>
                                </div>                              
                            </div>
                            <div className={styles["list-and-page-wrapper"]}>
                                <div className={styles["song-info-wrapper"]}>
                                    <div className={styles["song-info-header"]}>
                                        <div className={styles.number}>
                                            <p>번호</p>
                                        </div>
                                        <div className={styles.title}>
                                            <p>곡명</p>
                                        </div>
                                        <div className={styles.artist}>
                                            <p>아티스트</p>
                                        </div>
                                    </div>
                                    <div className={styles["song-info"]}>
                                        <div className={styles.number}>
                                            <p>1</p>
                                        </div>
                                        <div className={styles.title}>
                                            <p>Lonely</p>
                                        </div>
                                        <div className={styles.artist}>
                                            <p>2NE1</p>
                                        </div>
                                    </div>
                                    <hr className={styles["song-divider"]}></hr>

                                    <div className={styles["page-wrapper"]}>
                                        <div className={styles.page}>
                                            <p>1</p>
                                        </div>
                                        <div className={styles.page}>
                                            <p>2</p>
                                        </div>
                                        <div className={styles.page}>
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MenuTab />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JukeBox;