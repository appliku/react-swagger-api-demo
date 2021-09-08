/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Book } from '../models/Book';
import { request as __request } from '../core/request';

export class BooksService {

    /**
     * @returns Book
     * @throws ApiError
     */
    public static async booksList(): Promise<Array<Book>> {
        const result = await __request({
            method: 'GET',
            path: `/books`,
        });
        return result.body;
    }

}