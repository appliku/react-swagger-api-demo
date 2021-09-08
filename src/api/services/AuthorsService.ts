/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Author } from '../models/Author';
import { request as __request } from '../core/request';

export class AuthorsService {

    /**
     * @returns Author
     * @throws ApiError
     */
    public static async authorsList(): Promise<Array<Author>> {
        const result = await __request({
            method: 'GET',
            path: `/authors`,
        });
        return result.body;
    }

}