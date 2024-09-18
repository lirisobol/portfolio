export interface Tech {
    name: string;
    imageUrl: string;
}
  
export interface Project {
    name: string;
    description: string;
    tech: {
        front?: Tech[];
        back?: Tech[];
    };
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