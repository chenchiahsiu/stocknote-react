import styles from 'components/SearchInput/SearchInput.module.scss'
import { ReactComponent as Return } from 'assets/return.svg'
import { ReactComponent as InputSearch } from 'assets/input_search.svg'

const SearchInput = ({ search, setSearch }) => {
  return (
    <div
      className={
        search === 'searchInput' ? styles.None : styles.SearchInputContainer
      }
    >
      <div className={styles.SearchContainer}>
        <button onClick={() => setSearch('searchInput')}>
          <Return className={styles.Return} />
        </button>
        <div className={styles.InputContainer}>
          <InputSearch className={styles.SearchIcon} />
          <input type="search" placeholder="找股票、找人、找社團、找訊息..." />
          <span>搜尋</span>
        </div>
        <div className={styles.BottomText}>
          <div className={styles.Title}>熱門：</div>
          <ul>
            <li>
              <a>TWA00加權指數</a>
            </li>
            <li>
              <a>2330台積電</a>
            </li>
            <li>
              <a>2603長榮</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
