import React, { memo } from 'react';
import { Provider} from 'react-redux'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'

import routers from './routers';
import store from './store';

import SGAppHeader from '@/components/app-header';
import SGAppFooter from "@/components/app-footer";

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <SGAppHeader/>
                    {renderRoutes(routers)}
                <SGAppFooter/>
            </HashRouter>
        </Provider>
    )
})
