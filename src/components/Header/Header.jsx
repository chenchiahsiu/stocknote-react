import styles from '../Header/Header.module.scss'
import { ReactComponent as Hamburger } from 'assets/hamburger.svg'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as Search } from 'assets/search.svg'
import { ReactComponent as Advise } from 'assets/advise.svg'
import { ReactComponent as PopularStock } from 'assets/popular_stock.svg'
import SearchInput from 'components/SearchInput/SearchInput'
import Navbar from 'components/Navbar/Navbar'

import { useState } from 'react'

const Header = () => {
  // 管理搜尋狀態
  const [search, setSearch] = useState('searchInput')

  return (
    <div className={styles.HeaderContainer}>
      <Navbar className={styles.Navbar} />
      <div className={styles.HeaderTopContainer}>
        <div className={styles.LeftPart}>
          <Hamburger className={styles.Hamburger} />
          <Logo className={styles.Logo} />
        </div>
        <div className={styles.RightPart}>
          <div className={styles.SearchContainer}>
            <div className={styles.SearchOutside}></div>
            <Search
              className={styles.Search}
              onClick={() => setSearch('onSearch')}
            />
          </div>
          <div className={styles.IconContainer}>
            <Advise className={styles.Icon} />
            <div className={styles.Text}>建議</div>
          </div>
          <div className={styles.IconContainer}>
            <PopularStock className={styles.Icon} />
            <div className={styles.Text}>熱門股票</div>
          </div>
        </div>
      </div>
      <div className={styles.HeaderBottomContainer}>
        <ul>
          <li>
            <a href="#">自選</a>
          </li>
          <li className={styles.Active}>
            <a href="#">爆料</a>
          </li>
          <li>
            <a href="#">社團</a>
          </li>
          <li>
            <a href="#">推薦</a>
          </li>
          <li>
            <a href="#">通知</a>
          </li>
          <li>
            <a href="#">我的</a>
          </li>
        </ul>
      </div>
      <div className={styles.Heading}>股市報報同樂會</div>
      {(search === 'searchInput' || 'onSearch') && (
        <SearchInput
          className={styles.SearchInput}
          search={search}
          setSearch={setSearch}
        />
      )}
    </div>
  )
}

export default Header
