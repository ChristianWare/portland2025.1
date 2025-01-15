/* eslint-disable import/no-anonymous-default-export */
import { defineField } from "sanity";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      description: "This is your blog post title",
      type: "string",
    }),

    // defineField({
    //   name: "content",
    //   title: "Content",
    //   type: "array",
    //   validation: (rule) => rule.required().error("Required"),
    //   of: [
    //     {
    //       type: "block",
    //     },
    //     {
    //       type: "image",
    //       fields: [{ type: "text", name: "alt", title: "Alt" }],
    //     },
    //   ],
    // }),
  ],
};
