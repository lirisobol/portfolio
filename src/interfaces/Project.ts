
export interface Project {
    name: string,
    description: string;
    tech: string[],
    links?: {
        github: {
            url: string;
            imageUrl: string;
        },
        live: {
            url: string;
            imageUrl: string
        }
    }
}