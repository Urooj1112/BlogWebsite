import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import BlogCard from "@/components/BlogCard";
import CommentSection from "@/components/CommentSec";
import { client } from "../../sanity/lib/client";
export const revalidate = 60; //seconds
export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    summary,title,image,
      "slug":slug.current
  }`;
  const posts: Post[] = await client.fetch(query)
  return (
    <div>
      <Header />
      <Blog />
      <main className="flex min-h-screen flex-col ">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
          Most Recent blogs
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            posts.map((post: Post) => (
              <BlogCard post={post} key={post.slug} />
            ))
          }
        </section>
      </main>
      <CommentSection postSlug="" /> 
      <Footer />
    </div>
  );
}

