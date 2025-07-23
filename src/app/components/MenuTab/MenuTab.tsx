'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menuTabStyles from './MenuTab.module.css';

const MenuTab: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={menuTabStyles['right-tab-menu']}>
      <ul>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/' ? menuTabStyles.active : ''}`}>
          <Link href="/">홈</Link>
        </li>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/diary' ? menuTabStyles.active : ''}`}>
          <Link href="/diary">다이어리</Link>
        </li>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/jukebox' ? menuTabStyles.active : ''}`}>
          <Link href="/jukebox">쥬크박스</Link>
        </li>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/gallery' ? menuTabStyles.active : ''}`}>
          <Link href="/gallery">사진첩</Link>
        </li>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/board' ? menuTabStyles.active : ''}`}>
          <Link href="/board">게시판</Link>
        </li>
        <li className={`${menuTabStyles['menu-item']} ${pathname === '/guestbook' ? menuTabStyles.active : ''}`}>
          <Link href="/guestbook">방명록</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuTab;