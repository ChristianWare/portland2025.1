// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import styles from "./BlogPageDetails.module.css";
// import { PortableText } from "next-sanity";

// export const revalidate = 10;

// async function getPost(slug: string) {
//   const query = `
//     *[_type == 'post' && slug.current == $slug] {
//       _createdAt,
//       _id,
//       title,
//       description,
//       content,
//       image,
//       author->
//     }[0]
//   `;
//   return await client.fetch(query, { slug });
// }

// // Key change: Use object destructuring directly
// export default async function BlogPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPost(params.slug);

//   // Add error handling for missing posts
//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return (
//     <main>
//       <h2>{post.title}</h2>
//       <p>By {post.author?.name}</p>
//       <small>
//         {new Date(post._createdAt).toLocaleDateString("en-US", {
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         })}
//       </small>
//       <div className={styles.imgContainer}>
//         <Image
//           src={urlFor(post.image).url()}
//           alt={post.title}
//           title={post.title}
//           fill
//           className={styles.img}
//           sizes='(max-width: 768px) 100vw, 50vw'
//         />
//       </div>
//       <PortableText value={post.content} />
//     </main>
//   );
// }
