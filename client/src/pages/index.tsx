import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

interface Props {
  wsUrl: string
}

export default function Home(props: Props) {
  let ws: WebSocket

  useEffect(() => {
    ws = new WebSocket(props.wsUrl)
    ws.addEventListener('open', onConnectionOpen)
  }, [])

  const onConnectionOpen = () => {
    const data = {
      event: 'login',
    }

    ws.send(JSON.stringify(data))
  }

  return (
    <>
      <Head>
        <title>RPG Client</title>
      </Head>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      wsUrl: process.env.WS_URL,
    },
  }
}
