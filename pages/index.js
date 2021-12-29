import Head from 'next/head'
import Header from './component/header';
import Feed from './component/feed';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}
