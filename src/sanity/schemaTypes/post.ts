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
    }),
  ],
};
