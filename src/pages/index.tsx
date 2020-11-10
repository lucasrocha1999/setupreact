import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>Lucas Lira Dev</h1>
      <p>
        Graduado em Análise e desenvolvimento de sistemas. Desenvolvedor Full
        Stack Pleno.
      </p>
    </Container>
  )
}

export default Home
