import React from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import useWindowSize from '../hooks/useWindowSize'
import Layout from '../components/layout'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'
import Loading from "../components/loading";

function HomePage() {
  //Normla istekleri boyle yapiyorduk.
  // const [data, dataSet] = React.useState([])
  // const [dataLoading, dataLoadingSet] = React.useState(true)
  //
  // React.useEffect(() => {
  //     async function getData() {
  //         const response = await fetch('localhost')
  //         const data = await response.json()
  //         dataSet(data)
  //         dataLoadingSet(false)
  //         console.log(data)
  //     }
  //     getData()
  // })

  // SWR ILE API istekleri
  const { data, error } = useSWR('/api/user', fetcher)
  return (
    <Layout>
      {/*Normal kullanim*/}
      {/*{dataLoading && <p>Loading</p>}*/}

      {/*{data.map((tweet) => {*/}
      {/*    return <div>{tweet.id}</div>*/}
      {/*})}*/}

      {/*SWR KULLANIMI*/}
      {!data &&
        <div className={styles.loading}>
          <Loading/>
        </div>
      }

      {data?.map((tweet) => {
          // ...tweet gelen cevapta ne kadar data varsa cek demek
        return <Tweet key={tweet.id} {...tweet} />
      })}

      {/*<Tweet*/}
      {/*  name="Hasan Dogan"*/}
      {/*  slug="premiumEfendi"*/}
      {/*  datetime={new Date('2021-01-30')}*/}
      {/*  text={`Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.`}*/}
      {/*/>*/}
    </Layout>
  )
}

export default HomePage
