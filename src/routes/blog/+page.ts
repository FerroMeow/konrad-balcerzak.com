import type { BlogPost } from "$lib/blog/postData";
import type { PageLoad } from "./$types";

export const load: PageLoad = async event => {
    const blogPosts = await (await event.fetch('/blog')).json();
    return {
        blogPosts: blogPosts as BlogPost[],
    }
}