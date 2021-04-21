import {CHANGELANGUAGE} from '../actions/changelanguage';

let language = localStorage.getItem('language');
if (language === null) {
    language = 'vn'
}
const initialState = {
    language:  language,
};
export default function changelanguage(state = initialState, action) {
    switch(action.type){
        case CHANGELANGUAGE:
            return{
                ...state,
                language: action.payload.language,
            };
        default:
            return state;
    }
}