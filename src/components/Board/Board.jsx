import styles from 'components/Board/Board.module.scss'
import { ReactComponent as Select } from 'assets/select.svg'
import Background from 'assets/images/background.jpg'
import Pic from 'assets/images/facebook_pic.jpg'
import Index from 'assets/images/market_index.png'

import { useContext, useState } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'

const Board = () => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  // 管理 '上市'、'上櫃'
  const [option, setOption] = useState('TSE')

  // 影片來源
  const src =
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

  // 跳出尚未登入的顯示 model
  function handleToast() {
    setLoginState('Toast')
  }

  // 切換 '上市'、'上櫃'
  function handleActive(option) {
    if (option === 'OTC') {
      setOption('OTC')
    } else {
      setOption('TSE')
    }
  }

  return (
    <div className={styles.Board}>
      <div className={styles.BoardContainer}>
        <div className={styles.BoardOutsideContainer}>
          <div className={styles.TopSection}>
            <div className={styles.MarketIndex}>
              <div className={styles.Title}>
                <span className={styles.Heading}>大盤走勢</span>
                <div className={styles.Button}>
                  <span
                    className={option === 'TSE' ? styles.Active : ''}
                    onClick={() => {
                      handleActive('TSE')
                    }}
                  >
                    上市
                  </span>
                  <span
                    className={option === 'OTC' ? styles.Active : ''}
                    onClick={() => {
                      handleActive('OTC')
                    }}
                  >
                    上櫃
                  </span>
                </div>
              </div>
              <div className={styles.TrendChart}>
                <img src={Index} alt="market-index" className={styles.Index} />
              </div>
              <div className={styles.IndexContainer}>
                <div className={styles.column1}>
                  <div>
                    <span>指數：</span>
                    <span className={styles.Index}>15613.69</span>
                  </div>
                  <div>
                    <span>漲跌：</span>
                    <span className={styles.Index}>34.51</span>
                  </div>
                </div>
                <div className={styles.column2}>
                  <span>成交金額：</span>
                  <span className={styles.Price}>1883.71</span>
                  <span> 億</span>
                </div>
              </div>
            </div>
            <div className={styles.StockListContainer}>
              <div className={styles.Title}>
                <span className={styles.Heading}>熱門股票</span>
                <span className={styles.More} onClick={() => handleToast()}>
                  更多{`>`}
                </span>
              </div>
              <div className={styles.StocksContainer}>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>加權指數</span>
                    <span className={styles.Number}>-</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>緯創</span>
                    <span className={styles.Number}>531,894 人關注</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>長榮</span>
                    <span className={styles.Number}>988,928 人關注</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>友達</span>
                    <span className={styles.Number}>667,080 人關注</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>群創</span>
                    <span className={styles.Number}>673,589 人關注</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.StockListContainer}>
              <div className={styles.Title}>
                <span className={styles.Heading}>個股速覽</span>
                <span className={styles.More} onClick={() => handleToast()}>
                  更多{`>`}
                </span>
              </div>
              <div className={styles.StocksContainer}>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>東科-KY</span>
                    <span className={styles.Number}>9 分，優秀</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>致茂</span>
                    <span className={styles.Number}>8.4 分，優秀</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>雃博</span>
                    <span className={styles.Number}>8.4 分，優秀</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>泰銘</span>
                    <span className={styles.Number}>8.4 分，優秀</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
                <div className={styles.Stock}>
                  <div>
                    <span className={styles.Name}>安勤</span>
                    <span className={styles.Number}>8.4 分，優秀</span>
                  </div>
                  <button onClick={() => handleToast()}>
                    <Select className={styles.Select} />
                    自選
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Viedo}>
            <video controls width="100%" height="100%">
              <source src={src} type="video/mp4" />
            </video>
            <div className={styles.Text}>
              <span>蔡司投資教室 第3集 權證三...</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SocialMedia}>
        <div className={styles.Container}>
          <img
            src={Background}
            alt="facebook-link"
            className={styles.Background}
          />
          <div className={styles.TopShadow}></div>
          <a target="_blank" href="https://www.facebook.com/StockChatCMoney/">
            <img src={Pic} alt="facebook picture" className={styles.Pic} />
          </a>
          <div className={styles.Text}>
            <a
              target="_blank"
              href="https://www.facebook.com/StockChatCMoney/"
              className={styles.Title}
            >
              股市爆料同...
            </a>
            <span>5 萬 個讚</span>
          </div>
          <div className={styles.Like}>說這專頁讚</div>
        </div>
      </div>
    </div>
  )
}

export default Board
