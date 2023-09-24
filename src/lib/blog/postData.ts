import { readFile } from 'node:fs/promises';
import { marked } from 'marked';

export async function getPost(postSlug: string): Promise<string> {
    return marked((await readFile(`static/posts/${postSlug}.md`)).toString(), {
        headerIds: false,
        mangle: false,
    });
}