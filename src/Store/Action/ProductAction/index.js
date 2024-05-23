const productAction = (obj) => {
    return {
        type: 'clicked_product',
        payload: obj
    }
}

export default productAction;