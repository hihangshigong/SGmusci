import * as actionTypes from './constants'

const defaultState = {
    topBanners:[]
}

function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHSNGE_TOP_BANNERS:
            return {...state,topBanners:action.topBanners}
        default:
            return state;
    }
}

export default reducer
