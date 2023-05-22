import styles from 'components/Modal/Posting/Posting.module.scss'
import { ReactComponent as Pen } from 'assets/pen.svg'
import { ReactComponent as Question } from 'assets/question.svg'
import { ReactComponent as Cross } from 'assets/post_cross.svg'
import Avatar from 'assets/images/post_avatar.gif'
import { ReactComponent as Magnifier } from 'assets/magnifier.svg'
import { ReactComponent as Upload } from 'assets/upload_img.svg'
import { ReactComponent as Hashtag } from 'assets/hashtag.svg'

const Posting = ({
  postModal,
  setPostModal,
  inputValue,
  onChange,
  onAddPost,
  onKeyDown,
}) => {
  return (
    <div className={styles.PostingContainer}>
      <div className={styles.UpperContainer}>
        <div className={styles.TopSection}>
          <div className={styles.TopSectionContainer}>
            <div className={styles.Post}>
              <Pen className={styles.Pen} />
              <div>發文</div>
            </div>
            <div className={styles.Question}>
              <Question className={styles.QuestionMark} />
              <div>提問</div>
            </div>
            <button className={styles.Cancel} onClick={() => setPostModal('')}>
              <div className={styles.CrossContainer}>
                <Cross className={styles.Cross} />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.CenterSection}>
          <div className={styles.CenterSectionContainer}>
            <div className={styles.User}>
              <img src={Avatar} alt="" className={styles.Avatar} />
              <span className={styles.Name}>訪客</span>
            </div>
            {inputValue === '' && (
              <div className={styles.Text1}>
                <span>想聊聊哪一支股票嗎？</span>
              </div>
            )}
            {inputValue === '' && (
              <div className={styles.Button}>
                <button>
                  <div>加權指數</div>
                </button>
                <button>
                  <div>鴻海</div>
                </button>
                <button>
                  <div>大樹</div>
                </button>
                <button>
                  <div>長榮</div>
                </button>
                <button className={styles.AnotherStock}>
                  <div className={styles.Magnifier}>
                    <Magnifier />
                  </div>
                  <div className={styles.Text}>其它股票</div>
                </button>
              </div>
            )}
            <div className={inputValue === '' ? styles.Text2 : styles.Active}>
              <textarea
                placeholder="聊聊股市話題吧！"
                value={inputValue}
                onChange={(e) => {
                  onChange?.(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onKeyDown?.()
                  }
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.BottomSection}>
        <div className={styles.BottomSectionContainer}>
          <div className={styles.Attachment}>
            <div className={styles.Button}>
              <button>
                <Upload />
                <div>加圖片</div>
              </button>
              <button>
                <Hashtag />
                <div>標個股</div>
              </button>
            </div>
            <span className={styles.Rule}>社群規範</span>
          </div>
          <div className={styles.PostButton}>
            <button
              className={inputValue === '' ? styles.Post : styles.Active}
              onClick={() => onAddPost?.()}
            >
              發文
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posting
