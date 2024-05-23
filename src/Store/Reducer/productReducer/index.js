const initState = {
    singleProduct:{}
}

const productReducer = (state= initState, {type, payload}) => {
switch (type) {
    case 'clicked_product':
        return {
           singleProduct: payload
        }
    

    default:
        return state;
}
}

export default productReducer;