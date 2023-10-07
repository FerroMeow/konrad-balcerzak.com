import { readFile, readdir, stat } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export interface PostQueryParameters {
    dateAfter?: Date;
    limit?: number;
    offset?: number;
}

export interface BlogPost {
    slug: string;
    excerpt: string;
    thumbnail: string | null;
    date: string;
    title: string;
    content: string;
}

const MARKED_CONFIG: marked.MarkedOptions = {
    headerIds: false,
    mangle: false,
};

export async function getPosts(parameters: PostQueryParameters = {}): Promise<BlogPost[]> {
    const dirFiles = await readdir('static/posts');
    const bufferDatePromises = dirFiles.map(async (buffer) => stat(`static/posts/${buffer}`));
    const bufferDates = await Promise.all(bufferDatePromises);
    const blogPostPromises = dirFiles
        .filter((buffer, index) => !parameters.dateAfter || parameters.dateAfter <= bufferDates[index].mtime)
        .slice(
            parameters.offset ?? 0,
            parameters.limit ?? 6
        )
        .map(async (file): Promise<BlogPost> => {
            const parsedMarkdown = matter.read(`static/posts/${file}`);
            return {
                slug: file.substring(0, file.lastIndexOf('.md')),
                title: String(parsedMarkdown.data.title),
                excerpt: parsedMarkdown.data.excerpt ?? '',
                thumbnail: parsedMarkdown.data.thumbnail ?? null,
                content: marked(parsedMarkdown.content),
                date: (await stat(`static/posts/${file}`)).mtime.toString(),
            }
        });
    const blogPosts = await Promise.all(blogPostPromises);
    return blogPosts
        .sort((a, b) => (new Date(a.date)).getMilliseconds() - (new Date(b.date)).getMilliseconds())
}

export async function getPost(postSlug: string): Promise<string> {
    return marked(
        matter((await readFile(`static/posts/${postSlug}.md`)).toString()).content,
        MARKED_CONFIG
    );
}