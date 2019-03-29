import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header></header>
            <Switch>
		        <Route
		          exact
		          path="/index.html"
		          component={() => {
		            return <Redirect to="/" />;
		          }}
		        />
                <Route path="/" exact component={Home} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;