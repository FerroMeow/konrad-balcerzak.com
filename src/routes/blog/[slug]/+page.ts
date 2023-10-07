import type { BlogPost } from "$lib/blog/postData";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const post = await (await fetch(`/blog/${params.slug}`)).json() as BlogPost;
    return { post };
}