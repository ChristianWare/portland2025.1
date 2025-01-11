/* eslint-disable import/no-anonymous-default-export */
import { defineField } from "sanity";

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      description: "This is your blog post title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "Make the description brief so the visitor knows what to expect in the post",
      type: "string",
      validation: (rule) => rule.min(50).max(250).required(),
    }),
    defineField({
      type: "reference",
      to: [{ type: "author" }],
      name: "author",
      title: "Author",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      validation: (rule) => rule.required().error("Required"),
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    }),
  ],
};
