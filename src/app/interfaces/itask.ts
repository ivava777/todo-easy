export interface ITask {
    id: number;
    title: string;
    descrpition?: string;
    isDone: boolean;
    dateAdded?: Date;
}
