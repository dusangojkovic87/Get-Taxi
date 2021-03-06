import { BlogActions, BlogActionTypes } from '../actions/blog.actions';


export const blogFeatureKey = 'blog';

export interface blogState {
  blogs:any;
  error:boolean;
  blogAdded:boolean,
  blogDetails:any

}

export const initialState: blogState = {
  blogs:null,
  error:false,
  blogAdded:false,
  blogDetails:null

};

export function blogreducer(state = initialState, action: BlogActions): blogState {
  switch (action.type) {

    case BlogActionTypes.ADD_BLOG_FAIL:{
      return{
        ...state,
        error:true

      }
    }

    case BlogActionTypes.ADD_BLOG_DEFAULT:{
      return{
        ...state,
        error:false,
        blogAdded:false

      }
    }
    case BlogActionTypes.ADD_BLOG_SUCCESS:{
      return{
        ...state,
        blogAdded:true,
        error:false
      }
    }

    case BlogActionTypes.LOAD_BLOGS_SUCCESS:{
      return {
        ...state,
        blogs:action.payload,
        error:false

      }
    }

    case BlogActionTypes.LOAD_BLOGS_FAIL:{
      return{
        ...state,
        error:true
      }
    }

    case BlogActionTypes.GET_BLOG_DETAILS_SUCCESS:{
      return{
        ...state,
        blogDetails:action.payload
      }
    }

    case BlogActionTypes.GET_BLOG_DETAILS_FAIL:{
      return{
        ...state,
        error:true
      }
    }

    default:
      return state;
  }
}
