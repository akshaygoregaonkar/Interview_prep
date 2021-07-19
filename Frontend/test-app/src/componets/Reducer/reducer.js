import React from 'react'

function reducer(state = {}, action) {
    switch (action.type) {
        case "ADD":

            return { ...state, userdetails: action.payload }
        case "UPDATE": {
            let id = action.payload.id
            let index = -1
            state.userdetails.find((item, ind) => {
                if (item.id == id) {
                    index = ind
                    return true
                }
            })
            return { ...state, userdetails: [...state.userdetails.slice(0,index),action.payload,...state.userdetails.slice(index+1)] }

        }
        default:
            return state

    }
}

export default reducer
