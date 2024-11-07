export class CreateReviewDto {
    readonly phone: number
    readonly name: string
    readonly averageRating: number
    readonly address: string
    readonly topics: string
    readonly createdAt: Date
}
