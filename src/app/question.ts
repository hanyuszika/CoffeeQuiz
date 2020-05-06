export class Question{ 
    difficulty: number
    category: string
    question: string
    answer: string
    airdate: Date
    id:number
    hidden: boolean = true
}
export class Category{
    id: number
    title: string
    count: number
}