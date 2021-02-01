import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'

import Navigaton from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
import TweetModal from "./tweet-modal";
import {Tweet} from "./icons";

function SideBar({ flat }) {
    const [isShowModal, isShowModalSet] = React.useState(false)
  return (
    <div className={cn([styles.sidebar])}>
      <Navigaton flat={flat} />
      <div className={styles.tweet}>
          <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
              {flat ? <Tweet/> : 'Tweet'}
          </ThemeButton>
      </div>

        {/*    tweet popup*/}
        {isShowModal && <TweetModal onClick={() => isShowModalSet(false) }/>}
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>

    </div>
  )
}

export default SideBar
