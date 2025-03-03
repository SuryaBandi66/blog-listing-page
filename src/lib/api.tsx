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

const BASE_URL = "https://api.slingacademy.com/v1/sample-data/photos";

async function fetchData<T>(
  endpoint: string,
  cacheMode: RequestCache = "no-store"
): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      cache: cacheMode,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw new Error("An error occurred while fetching data.");
  }
}

export async function fetchBlogs(
  offset: number,
  limit: number
): Promise<BlogData> {
  return fetchData<BlogData>(`?offset=${offset}&limit=${limit}`, "force-cache");
}

export async function fetchBlog(id: number): Promise<Blog> {
  const data = await fetchData<{ photo: Blog }>(`/${id}`);
  return data.photo;
}

export async function fetchTopBlogs(limit = 5): Promise<Blog[]> {
  const data = await fetchData<{ photos: Blog[] }>(
    `?limit=${limit}`,
    "no-store"
  );
  return data.photos;
}

export async function fetchRecentBlogs(limit = 5): Promise<Blog[]> {
  const data = await fetchData<{ photos: Blog[] }>(
    `?offset=24&limit=${limit}`,
    "no-store"
  );
  return data.photos;
}
