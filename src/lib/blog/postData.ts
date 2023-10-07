import { readdir, stat } from 'node:fs/promises';
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

async function readMarkdownPost(filename: string): Promise<BlogPost> {
    const parsedMarkdown = matter.read(`static/posts/${filename}`);
    return {
        slug: filename.substring(0, filename.lastIndexOf('.md')),
        title: String(parsedMarkdown.data.title),
        excerpt: parsedMarkdown.data.excerpt ?? '',
        thumbnail: parsedMarkdown.data.thumbnail ?? null,
        content: marked(parsedMarkdown.content, {
            headerIds: false,
            mangle: false,
        }),
        date: (await stat(`static/posts/${filename}`)).mtime.toString(),
    }
}

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
        .map(readMarkdownPost);
    const blogPosts = await Promise.all(blogPostPromises);
    return blogPosts
        .sort((a, b) => (new Date(a.date)).getMilliseconds() - (new Date(b.date)).getMilliseconds())
}

export async function getPost(postSlug: string): Promise<BlogPost> {
    return readMarkdownPost(`${postSlug}.md`);
}