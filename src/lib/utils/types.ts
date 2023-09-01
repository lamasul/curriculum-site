export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: any
}

export type TagType = {
  label: string,
  color?: 'primary' | 'secondary'
}

export type BlogPost = {
  tags: string[],
  keywords: string[],
  hidden: boolean,
  slug: string,
  title: string,
  excerpt: string,
  html: string | undefined,
  readingTime: string,
  relatedPosts: BlogPost[],
  coverImage: string | undefined
}

export type Tools = {
  name: string,
  description: string,
  image: string,
  link?: string,
  tags: TagType[]
}
