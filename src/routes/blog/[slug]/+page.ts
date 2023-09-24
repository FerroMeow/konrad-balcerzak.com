import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const post = await (await fetch(`/blog/${params.slug}`)).text();
    return { post };
}