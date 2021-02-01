import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from "../button/icon";
import * as Icon from "../icons";

// function Tweet({ name, slug, datetime, text }) {
//Artik degerler her geleni icine almamiz icin yaptik
function Tweet({props}) {
    return null

  return (
    //her post haber niteligi tasidigi icin seoya uygun bicimde yapiyoruz
    <article className={styles.tweet}>
      {/*avatar*/}
      <div className={styles.avatar}>
        {/*<Photo <Photo src={user.profile_photo}/>/>*/}
        <Photo />
      </div>

      {/*body*/}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span>{' '}
          {/*<span className={styles.name}>{user.name}</span> <span>@{user.screenname}</span>{' '}*/}
          <span>· {formatDistanceToNowStrict(datetime)}</span>
          {/*<span>· {formatDistanceToNowStrict(new Date(creadet_At))}</span>*/}
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>

            {/*reply*/}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Reply/>
                </IconButton>
                <span>5</span>
                {<span>5</span>}
            </div>

            {/*retweet*/}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Retweet/>
                </IconButton>
                <span>12</span>
                {/*{retweet_count && <span>12</span>}*/}
            </div>

            {/*like*/}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Like/>
                    {/*{favorited ? <Icon.LikeFill/> : <Icon.Like/>}*/}
                </IconButton>
                {/*{favorite_count && <span>{favorite_count</span>}*/}
            </div>

            {/*share*/}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Share/>
                </IconButton>
            </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
