import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend'

const changTopBannerAction = (res) =>({
    type:actionTypes.CHSNGE_TOP_BANNERS,
    topBanners:res.banners
})

export const getToBannerAction =() => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changTopBannerAction(res))
        })
    }

}