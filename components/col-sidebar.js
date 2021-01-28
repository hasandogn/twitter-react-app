import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'

import Navigaton from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

function SideBar({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigaton flat={flat} />
      <div className={styles.tweet}>
          <ThemeButton big full={!flat}>
              {flat ? 'a' : 'Tweet'}
          </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default SideBar
