const  counter = (state, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counterValue: state.counterValue + 1
            }
        case "MINUS":
            return {
                counterValue: state.counterValue - 1
            }
        default:
            return {
                counterValue: 10
            }
    }
}

export default counter