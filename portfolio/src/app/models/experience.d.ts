export class ExperienceList {
    backendExperiences: Experience[];
    frontendExperiences: Experience[];
}

export class Experience {
    id: number;
    technology: string;
    level: string;
    stack: string;
}