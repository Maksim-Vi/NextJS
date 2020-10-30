import Link from 'next/link';
import {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayout'

export default function Post({data}) {
  console.log(data);
    return (
        <MainLayout title={`NextJs post`}>
        <h1>{data.title}</h1>
        <hr />
        <p>{data.description}</p>
        <Link href="/posts"><a>Back to all posts</a></Link>
    </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const json = await res.json()
  return { data: json }
}