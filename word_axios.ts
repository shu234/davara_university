import axios from "axios";

const API_URL = process.env.WORDPRESS_API_URL || "https://yourdomain.com/wp-json/wp/v2";

// ✅ Fetch posts
export async function getPosts() {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
}

// ✅ Fetch single post by slug
export async function getPostBySlug(slug: string) {
  const res = await axios.get(`${API_URL}/posts`, {
    params: { slug },
  });
  return res.data[0]; // WP returns array
}

// ✅ Fetch pages
export async function getPages() {
  const res = await axios.get(`${API_URL}/pages`);
  return res.data;
}

// ✅ Fetch single page
export async function getPageBySlug(slug: string) {
  const res = await axios.get(`${API_URL}/pages`, {
    params: { slug },
  });
  return res.data[0];
}
