export interface Metadata {
  title: string;
  publishedAt: string;
  summary: string;
  thumbnail?: string;
  keywords: string[];
}

export interface Post {
  metadata: Metadata;
  timeToRead: number;
  slug: string;
  content?: string;
}
