import { getPost } from '$lib/blog/postData';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async request => {
    const content = await getPost(request.params.slug);
    return new Response(content)
}