export default interface CardData {
    name: string;
    href: URL;
    description: string;
    imageFilename?: string;
    colorMode?: 'light' | 'dark'
}

export type Project = CardData;
