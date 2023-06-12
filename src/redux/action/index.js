export const ADD = (item) => {
    return {
        type : "ADD_CART",
        payload:item
    }
}
  

export const DELETE  = (id) => {
    return {
        type: "CART_RMW",
        payload: id
    }
}

export const ONE_REMOVE = (items) => {
    return {
        type:"RMV_ONE",
        payload: items
    }
}

export const GET_BLOCK_DETAILS = (items) => {
    return {
        type:"GET_BLOCK",
        payload:items
    }
}