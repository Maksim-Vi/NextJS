import Link from "next/link";
import { useState,useEffect } from "react";
import MaynLayout from "../components/MainLayout";

export default function Posts({data}) {
    return (
    <MaynLayout title='NextJs posts'>
        <h1>About post</h1>
        <ul>
            {data.map(post=>(
                <li key={post.id}>
                 <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
                </li>
            ))}
        </ul>
    </MaynLayout>)
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4200/posts')
    const json = await res.json()
    return { data: json }
  }
  