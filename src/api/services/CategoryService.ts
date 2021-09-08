/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @returns Category
     * @throws ApiError
     */
    public static async categoryList(): Promise<Array<Category>> {
        const result = await __request({
            method: 'GET',
            path: `/category`,
        });
        return result.body;
    }

}