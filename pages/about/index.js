import Router from 'next/router'
import MaynLayout from '../../components/MainLayout'

export default function About() {

    const goBack = () =>{
        Router.push('/')
    }


    return (
    <MaynLayout title='NextJs about'>
        <h1>About page</h1>
        <button onClick={()=>{goBack()}}>go back to home</button>
    </MaynLayout>)
}