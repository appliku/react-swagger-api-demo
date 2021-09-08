import {useEffect, useState} from "react";
import {Book, BooksService} from "./api";

function BookItem(props: Book) {
    return <div>
        <b>{props.title}</b>
        <i>{props.authors_names.join(', ')}</i>
    </div>;
}

export default function BooksList() {
    const [books, setBooks] = useState<Book[] | undefined>();
    const loadBooks = async () => {
        setBooks(await BooksService.booksList());
    }
    useEffect(() => {
        loadBooks();
    }, []);
    return (
        <div>
            <h1>Books:</h1>
            {books && books.map(
                book => {
                    return <BookItem {...book}/>;
                })}
        </div>
    );
}