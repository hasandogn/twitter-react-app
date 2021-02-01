import React from 'react'

import styles from './tweet-modal.module.css'
import Photo from './photo'
import ThemeButton from './theme-button'
import IconButton from './button/icon'
import { Close } from './icons'
import Stack from './stack'

function TweetModal({ onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState("")

  const onSubmit = async () =>{
    alert(tweet)
    try {
      // const response = await fetch("/api/new", {
      //   method: 'POST',
      //   body: JSON.stringify({tweet})
      // })
      //
      // const data = await response.json()
      // console.log(data)
      // if(tes.status !== 200) throw 'Twet gönderilemedi!'
    } catch (e) {

    }

  }

  return (
    <div className={[styles.overlay]}>
      <div className={[styles.modal]}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="Ne yazmak istersin?"
              value={tweet}
              onChange={(e) => tweetSet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
