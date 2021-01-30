import React from 'react'

import useWindowSize from '../hooks/useWindowSize'
import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Hasan Dogan"
        slug="premiumEfendi"
        datetime={new Date('2021-01-30')}
        text={`Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.Hello my friend, I'm Hasan, I am a computer engineer.`}
      />
      <Tweet
        name="Hasan Dogan"
        slug="premiumEfendi"
        datetime={new Date('2021-01-30')}
        text={`hasan hasan hasan hasan hasan hasan 
        
        hasan hasan ...
                hasan hasan ,..
        `}
      />

    </Layout>
  )
}

export default HomePage
