export default {
  type: "document",
  name: "post",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "maincontent",
      title: "MainContent",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "postedBy",
      type: "postedBy",
      title: "PostedBy",
    },
    {
      name: "comments",
      type: "array",
      title: "Comments",
      of: [{ type: "comment" }],
    },
  ],
};
