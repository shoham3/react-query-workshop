export interface Todo {
    id: number;
    body: string;
    completed: boolean;
    deleted: Date | null;  
}