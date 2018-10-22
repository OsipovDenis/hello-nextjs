import Layout from '../components/Layout'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

const posts = [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
]

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
                color: blue;
                font-family: "Arial";
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
)

const Index = () => (
    <Layout>
        <h1>
            Batman TV shows
        </h1>
        <ul>
            {
                posts.map(post => <PostLink key={post.id} {...post}/> )
            }
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </Layout>
)

// Index.getInitialProps = async () => {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     console.log(`Show data fetched. Count: ${ data.length}`)
//     return { shows: data }
// }

export default Index;