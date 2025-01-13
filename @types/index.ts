/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityImageAssetDocument } from "next-sanity";

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
