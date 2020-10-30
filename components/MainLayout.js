import Head from "next/head";
import Link from "next/link";

export default function MaynLayout({children, title='This test Course Next'}){
    return (<>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content="NextJs, js, React, FrontEnd "/>
            <meta name="description" content="some text desc"/>
        </Head>
        <nav>
            <Link href="/" as={ process.env.BACKEND_URL + '/'}><a>Home</a></Link>
            <Link href="/about" as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
            <Link href="/posts" as={ process.env.BACKEND_URL + '/posts'}><a >Posts</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>{`
            nav{
               position:fixed;
               height:60px;
               left:0;
               top:0;
               right:0;
               background: darkblue;
               display:flex;    
               justify-content : space-around;
               align-items:center;
            }

            nav a{
                color: #fff;
                text-decoration: none;
            }
            nav a:hover{
                color: #111;
            }

            main{
                padding:1rem;
                margin-top: 60px;
            }
        `}</style>
    </>)
}