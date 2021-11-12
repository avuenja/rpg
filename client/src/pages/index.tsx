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
    ws.addEventListener('message', onMessage)
  }, [])

  const onConnectionOpen = () => {
    const data = {
      event: 'login',
    }

    ws.send(JSON.stringify(data))
  }

  const onMessage = (event) => {
    console.log('Message from server ', event.data)
  }

  const senMessage = () => {
    const data = {
      event: 'message',
      data: {
        message: 'Hello WebSocket!',
      },
    }

    ws.send(JSON.stringify(data))
  }

  return (
    <>
      <Head>
        <title>RPG Client</title>
      </Head>
      <button onClick={senMessage}>send message: socket</button>
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
