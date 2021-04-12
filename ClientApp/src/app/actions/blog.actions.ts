import { Action } from '@ngrx/store';

export enum BlogActionTypes {
  LOAD_BLOGS = '[Blog] LOAD BLOGS',
  ADD_BLOG = '[Blog] ADD_BLOG',
  ADD_BLOG_SUCCESS = '[Blog] ADD_BLOG_SUCCESS',
  ADD_BLOG_FAIL = '[Blog] ADD_BLOG_FAIL',
  ADD_BLOG_DEFAULT = '[Blog] ADD_BLOG_DEFAULT',
}

export class LOAD_BLOGS implements Action {
  readonly type = BlogActionTypes.LOAD_BLOGS;
}

export class ADD_BLOG implements Action {
  readonly type = BlogActionTypes.ADD_BLOG;
  constructor(public payload: any) {}
}
export class ADD_BLOG_SUCCESS implements Action {
  readonly type = BlogActionTypes.ADD_BLOG_SUCCESS;
  constructor() {}
}

export class ADD_BLOG_FAIL implements Action {
  readonly type = BlogActionTypes.ADD_BLOG_FAIL;
  constructor() {}
}
export class ADD_BLOG_DEFAULT implements Action {
  readonly type = BlogActionTypes.ADD_BLOG_DEFAULT;
  constructor() {}
}

export type BlogActions =
  | LOAD_BLOGS
  | ADD_BLOG
  | ADD_BLOG_SUCCESS
  | ADD_BLOG_FAIL
  | ADD_BLOG_DEFAULT;
