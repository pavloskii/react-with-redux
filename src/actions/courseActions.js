import * as types from './actionTypes';

export function createCourse(course) {
    // return { type: 'CREATE_COURSE', course };
    return { type: types.CREATE_COURSE, course };
}