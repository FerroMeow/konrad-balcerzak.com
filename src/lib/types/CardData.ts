export default interface CardData {
    name: string;
    href: URL;
    description: string;
    imageFilename?: string;
}

export type Project = CardData;
