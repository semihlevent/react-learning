import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from 'lodash';


export const fetchPost = () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POST',
        payload: response.data
    });
};

//memoize helps to call a function only one time with the given input
//with this method, we prevent fetching the same user 10 times
const _fetchUser =  _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);