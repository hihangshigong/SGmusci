import React from "react";

import  SGDiscover from '@/pages/discover';
import SGRecommend from '@/pages/discover/c-pages/recommend';
import SGAlbum from '@/pages/discover/c-pages/album';
import SGArtist from '@/pages/discover/c-pages/artist';
import SGRanking from '@/pages/discover/c-pages/ranking';
import SGDjradio from '@/pages/discover/c-pages/djradio';
import SGSongs from '@/pages/discover/c-pages/songs';

import  SGMine from '@/pages/mine';
import  SGFriend from '@/pages/friend';


import { Redirect} from "react-router-dom";

const routers = [
    {
        path:"/",
        exact:true,
        render:() => (
            <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:SGDiscover,
        routers:[
            {
                path:"/discover",
                exact:true,
                render:() => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path:"/discover/recommend",
                component:SGRecommend
            },
            {
                path:"/discover/ranking",
                component:SGRanking
            },
            {
                path:"/discover/album",
                component:SGAlbum
            },
            {
                path:"/discover/artist",
                component:SGArtist
            },
            {
                path:"/discover/djradio",
                component:SGDjradio
            },
            {
                path:"/discover/songs",
                component:SGSongs
            },
        ]
    },
    {
        path:"/mine",
        component:SGMine
    },
    {
        path:"/friend",
        component:SGFriend
    },
];

export default routers;