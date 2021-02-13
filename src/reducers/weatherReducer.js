export default function (state={}, action) {
    switch (action.type) {
        case "GET_WEATHER":
            return {
                ...state,
                weather:action.playload
            }
            default:
                return state;
    }
}