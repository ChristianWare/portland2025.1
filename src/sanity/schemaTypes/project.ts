/* eslint-disable import/no-anonymous-default-export */
import { defineField } from "sanity";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name of Project",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Preview Image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description of Product",
      validation: (rule) => rule.required().error("Required"),
    }),

    defineField({
      name: "tags",
      type: "array",
      title: "Tags list",
      validation: (rule) => rule.required().error("Required"),
      of: [
        {
          type: "block",
        },
        // {
        //   type: "image",
        //   fields: [{ type: "text", name: "alt", title: "Alt" }],
        // },
      ],
    }),
    defineField({
      name: "imagedesign",
      type: "image",
      title: "Design System Image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "imagehome",
      type: "image",
      title: "Home Page Image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "image1",
      type: "image",
      title: "Additianl Image 1",
      options: { hotspot: true },
    }),
    defineField({
      name: "image2",
      type: "image",
      title: "Additianl Image 2",
      options: { hotspot: true },
    }),
    defineField({
      name: "image3",
      type: "image",
      title: "Additianl Image 3",
      options: { hotspot: true },
    }),
    defineField({
      name: "image4",
      type: "image",
      title: "Additianl Image 4",
      options: { hotspot: true },
    }),
    defineField({
      name: "image5",
      type: "image",
      title: "Additianl Image 5",
      options: { hotspot: true },
    }),
    defineField({
      name: "image6",
      type: "image",
      title: "Additianl Image 6",
      options: { hotspot: true },
    }),
    defineField({
      name: "outcome",
      type: "array",
      title: "Outcome",
      validation: (rule) => rule.required().error("Required"),
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "keytakeaways",
      type: "array",
      title: "Key Takeaways",
      validation: (rule) => rule.required().error("Required"),
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "conclusion",
      type: "array",
      title: "Conclusion",
      validation: (rule) => rule.required().error("Required"),
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
};
