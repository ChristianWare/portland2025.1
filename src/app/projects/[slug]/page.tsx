import { client } from "@/sanity/lib/client";
import { FullProject } from "../../../../@types";
import { PortableText } from "next-sanity";
import ProjectPageDetailsHero from "@/components/ProjectPageDetailsHero/ProjectPageDetailsHero";
import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getData(slug: string): Promise<FullProject | null> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    description,
    overview,
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

  const data = await client.fetch(query, { slug });
  return data ?? null;
}

export const revalidate = 10;

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  // Instead, destructure inside the function
  const { slug } = params;

  const project = await getData(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <Nav />
      <ProjectPageDetailsHero project={project} />

            
      {project.image1 && (
        <Image
          src={urlFor(project.image1).url()}
          alt={project.name}
          width={600}
          height={400}
        />
      )}

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
