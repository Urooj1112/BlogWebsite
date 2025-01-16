import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { client } from "@/app/sanity/lib/client";
import { urlForImage } from "@/app/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // seconds
export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  return slugRoutes.map((slug: string) => ({ slug }));
}
// To create static pages for dynamic routes
export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;
  const post = await client.fetch(query);
  return (
    <div>
      <Header />
      <article className="bg-[#E7ECEF] px-2 2xl:px-12 flex flex-col gap-y-8">
        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl mt-10 text-center lg:text-5xl font-bold">
          {post.title}
        </h1>
        {/* Featured Image */}
        <Image
          src={urlForImage(post.image)}
          width={500}
          height={500}
          alt="AI for everyone"
          className="rounded mx-auto"
        />
        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl ml-10 xs:text-2xl md:text-3xl font-bold uppercase">
            Summary
          </h2>
          <p className="text-base ml-10 mr-10 md:text-xl leading-relaxed text-justify">
            {post.summary}
          </p>
        </section>
        {/* Author Section (Image & Bio) */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={urlForImage(post.author.image)}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">{post.author.name}</h3>
            <p className="italic text-xs xs:text-sm sm:text-base">{post.author.bio}</p>
          </div>
        </section>
        {/* Main Body of Blog */}
        <section className="lg:ml-20 lg:mr-20 mb-20 text-lg leading-normal h1:text-4xl">
          <PortableText value={post.content} />
        </section>
      </article>
      <Footer />
    </div>
  );
}
