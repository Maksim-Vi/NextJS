import Link from "next/link";
import s from '../styles/404.module.scss'

export default function ErrorPage(){
    return(<>
        <h1 className={s.error}>Error 404!</h1>
        <p>Page is not found</p><p>Please <Link href="/"  as={ process.env.BACKEND_URL + '/'}><a> go back </a></Link>to safety</p>
    </>)
}