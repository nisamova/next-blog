import Link from "next/link"
import Head from "next/head"
import { getPosts } from "../lib/posts"

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title> My Blog</title>
        <meta name="description" value="Nazokat Isamova looking for job" />
      </Head>
      <main>
        <h1> My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                {" "}
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
export default HomePage
