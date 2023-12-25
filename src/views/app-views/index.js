import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {APP_PREFIX_PATH} from 'configs/AppConfig'
import {Spin} from 'antd'

export const AppViews = () => {
    return (
        <Suspense fallback={<Spin size="large"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/main/clients/client-list`}
                       component={lazy(() => import(`./main/user-list`))}/>
                <Route path={`${APP_PREFIX_PATH}/main/scheduler`} component={lazy(() => import(`./main/scheduler`))}/>
                <Redirect from={`${APP_PREFIX_PATH}/main`} to={`${APP_PREFIX_PATH}/main`}/>
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews);
