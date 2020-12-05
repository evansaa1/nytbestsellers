export interface Book{
    title: string;
    author: string;
    book_image: string;
    description: string;
}

export interface BestSellersResponse{
    results: BestSellersResults;
}

export interface BestSellersResults{
    books: Book[]
}