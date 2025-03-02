interface Blog {
  id: number;
  title: string;
  content_short: string;
  photo_url: string;
  slug: string;
  content_body: string;
  url: string;
  description: string;
}

export interface BlogData {
  photos: Blog[];
  total_photos: number;
}

export async function fetchBlogs(
  offset: number,
  limit: number
): Promise<BlogData> {
  const response = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos??offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
}

export async function fetchBlog(id: number): Promise<Blog> {
  const response = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const data = await response.json();
  return data.photo;
}
