import React, { memo,useEffect } from 'react'
import {connect} from 'react-redux'

import  { getToBannerAction } from './store/actionCreators'


function SGRecommend(props) {
    const { getBanners,topBanners } = props

    useEffect(()=>{
        getBanners()
    },[getBanners])


    return (
        <div>
            <h2>SGRecommend:{topBanners.length}</h2>
        </div>
    )
}

const mapStateToProps = state =>({
    topBanners:state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
    getBanners:()=>{
        dispatch(getToBannerAction())
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(memo(SGRecommend))