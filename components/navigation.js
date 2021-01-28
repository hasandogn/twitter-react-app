import React from 'react'
import { useRouter} from "next/router";
import cn from 'classnames'

import styles from './navigation.module.css'
import {MENU} from "../constants";

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

function Navigaton({ flat = false }) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path

        return (
            <NavigationButton
                key={menu.key}
                notify={menu.notify}
                selected={selected}
                href={menu.path}
                className={cn(styles.navbutton, menu.key)}
            >
              {selected ? menu.iconSelected : menu.icon}
              {showTitle > 0 && <TextTitle>{menu.title}</TextTitle>}
            </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigaton
