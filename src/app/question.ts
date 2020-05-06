export class randomQuestion{ 
    difficulty: number
    category: string
    question: string
    answer: string
    airdate: Date
    id:number
    hidden: boolean = true
}
export class Category{
    categoryid: number
    category: string
    count: number
    question: string
    answer: string
    questionid: number
    hidden: boolean = true
}