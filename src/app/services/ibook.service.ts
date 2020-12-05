import { Book, BestSellersResponse } from '../models/book';
import { Observable } from 'rxjs';

interface IBookService {
    getBookData(): Observable<BestSellersResponse>;
}

export default IBookService;