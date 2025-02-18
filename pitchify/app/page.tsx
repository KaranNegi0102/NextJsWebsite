import { auth } from "@/auth"
import SearchForm from "../components/SearchForm"
import StartupCard,{StartupTypeCard} from "../components/StartupCard"
// import { client } from "../sanity/lib/client"
import { STARTUPS_QUERY } from "../sanity/lib/queries"
import { sanityFetch, SanityLive } from "@/sanity/lib/live"

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const params = {search:query || null};

  const session = await auth();
  console.log(session?.id);


  // const posts = await client.fetch(STARTUPS_QUERY); //used to fetch the post
  const {data :posts} = await sanityFetch({query:STARTUPS_QUERY,params});

  console.log(JSON.stringify(posts, null, 2));

  // const posts =[
  //   {_createdAt:new Date(),
  //     views:55,
  //     _id:"1",
  //     author:{_id:1 , name:"karan" },
  //     image:"https://img.freepik.com/free-psd/futuristic-female-robot-glimpse-into-advanced-robotics_632498-25585.jpg?ga=GA1.1.536189515.1738913663&semt=ais_hybrid",
  //     title:"We Robots",
  //     category:"Robots",
  //     description:"We are making robots that can do anything"
  //   }
  // ]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup , <br /> Connect With , Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas , Vote on Pitches, and Get Noticed in Virtual Events
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Showing results for "${query}"`: "Trending Pitches"} 
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="text-30-semibold">No Pitches Found</p>
        )}
</ul>

      </section>
      <SanityLive/>
    </>
  )
} 
