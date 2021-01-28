import React from 'react'
import cn from 'classnames'

import useWindowSize from '../hooks/useWindowSize'
import styles from './layout.module.css'

import SideBar from './col-sidebar'
import CONST from '../constants'
import Main from './col-main'
import Extra from './col-extra'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn([styles.layout])}>
      <SideBar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</SideBar>

      <Main>{children}</Main>

      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
