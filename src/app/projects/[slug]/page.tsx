/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import { FullProject } from "../../../../@types";
import { PortableText } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import ProjectPageDetailsHero from "@/components/ProjectPageDetailsHero/ProjectPageDetailsHero";
import Nav from "@/components/Nav/Nav";
// import { FullProject } from "../../../../@types";

async function getData(slug: string): Promise<any> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    description,
    slug,
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    imagedesign,
    previewimage,
    imagehome,
    conclusion,
    outcome,
    keytakeaways,
    tags,
    content,
  }`;

  return await client.fetch(query, { slug });
}

export const revalidate = 10;

export default async function ProjectDetailsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project: FullProject = await getData(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <Nav />
      <ProjectPageDetailsHero project={project} />

      {/*       
      {project.image1 && (
        <Image
          src={urlFor(project.image1).url()}
          alt={project.name}
          width={600}
          height={400}
        />
      )} */}

      <section>
        <h2>Outcome</h2>
        {project.outcome && <PortableText value={project.outcome} />}
      </section>

      <section>
        <h2>Key Takeaways</h2>
        {project.keytakeaways && <PortableText value={project.keytakeaways} />}
      </section>

      <section>
        <h2>Conclusion</h2>
        {project.conclusion && <PortableText value={project.conclusion} />}
      </section>
    </main>
  );
}
