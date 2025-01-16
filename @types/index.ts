/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityImageAssetDocument } from "next-sanity";
import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/asset-utils";

export interface Post {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  title: string;
  description: string;
  slug: { current: string };
  image: SanityImageAssetDocument;
  content: any;
  author: Author<SanityImageAssetDocument | undefined>;
}

export interface Author<T> {
  _id: string;
  name: string;
  image: T;
}

export interface SimplifiedProject {
  _id: string;
  previewimage: any;
  price: number;
  slug: string;
  description: string;
  name: string;
}

export interface FullProject {
  _id: string;
  name: string;
  description?: string;
  slug?: {
    current: string;
  };
  image?: SanityImageSource;
  image1?: SanityImageSource;
  image2?: SanityImageSource;
  image3?: SanityImageSource;
  image4?: SanityImageSource;
  image5?: SanityImageSource;
  image6?: SanityImageSource;
  imagedesign?: SanityImageSource;
  previewimage?: SanityImageSource;
  imagehome?: SanityImageSource;
  conclusion?: PortableTextBlock[];
  outcome?: PortableTextBlock[];
  keytakeaways?: PortableTextBlock[];
  tags?: PortableTextBlock[];
  content?: PortableTextBlock[];
}