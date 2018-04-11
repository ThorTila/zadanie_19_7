import {
    ADD_COMMENT
} from './Actions';

export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
                }
        , ...state];
        default:
            return state;
    }
}