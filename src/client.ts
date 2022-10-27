import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "hqzmf8ut",
  dataset: "production",
  apiVersion: "2022-10-21",
  token:
    "skdQFfIDYwTdImZByu5VChedD2CtnJgprC9Y8EsPkZr9757gIOICBby2C5iBlx3awtto6jOpXy9m9do2hBfr0S7BB08Pb35Q63V4WKo7msnMvDnNphEVWvnpERm02gmRLekGTTM0xxLs5sB4nOlgMYDQW4XZ5b1sN0NBPqxy1tgj1Z4h9dMr",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
const urlFor = (file: any) => builder.image(file);

export { client, urlFor };
