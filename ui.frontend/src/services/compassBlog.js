import axios from "axios";

const POSTS_URL = "/bin/blogposts";

/**
 * Funcao para buscar posts do wordpress
 *
 * @returns {Promise}
 */
export async function getPosts() {
  const posts = await axios
    .get(POSTS_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.log(error);
      return { data: [] };
    });

  return await posts;
}
