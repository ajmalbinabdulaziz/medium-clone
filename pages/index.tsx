import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';


interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className='max-w-5xl mx-auto'>
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-yellow-400
      border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and post your thinking on any topic
            and connect with millions of readers. 
          </h2>
        </div>

        <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />

      </div>

    {/* DISPLAYING POSTS */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-3 md:p-4'>
        {posts.map(post => (
          <a key={post._id} href={`/post/${post.slug.current}`} target="_blank" >
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img className='h-64 w-full object-cover group-hover:scale-105
              transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />

              <div className='flex justify-between p-5 bg-white'>
                
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img className='w-12 h-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" />

              </div>

            </div>
          </a>
        ))}
      </div>
 
    </div>
  )
}


export const getServerSideProps = async () => {

  const query = `*[_type=="post"]{
    _id,
    title,
    description,
    slug,
    author -> {
        name,
        image,
        bio
    },
    mainImage
  }
  `
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    }
  }
}



