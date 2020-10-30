import Link from 'next/link'
import Head from 'next/head'
import MaynLayout from '../components/MainLayout'

export default function Index (){
    return (
        <MaynLayout>
        {/* <Head>
            <title>This test Course Next</title>
            <meta name="keywords" content="some text"/>
            <meta name="description" content="some text desc"/>
        </Head> */}

        <h1>Hello NextJS</h1>
        {/* <p><Link href={'/about'}><a>about</a></Link></p>
        <p><Link href="/posts"><a >posts</a></Link></p> */}
        <p>lorem 7 the best to off</p>
        </MaynLayout>
    )
}
