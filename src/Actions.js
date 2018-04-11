import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}
export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}
export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        thumb: 'up'
    }
}
export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        thumb: 'down'
    }
}

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}
