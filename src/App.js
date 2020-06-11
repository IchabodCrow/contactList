import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import ContactsContainer from './containers/ContactsContainer';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history/history';
import PublicLayout from './layouts/PublicLayouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout/PrivateLayout';

export const token = localStorage.getItem('TOKEN')

const RouterWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
}) => {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props}/>
            </Layout>
        } />
    );
}

class App extends Component {
    render(){
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <RouterWrapper path={'/login'} component={LoginContainer} layout={PublicLayout}></RouterWrapper>
                        <RouterWrapper exact path={'/'} component={ContactsContainer} layout={PrivateLayout}/>
                    </Switch>
                </Router>
                
            </div>
        );
    }
   
}

export default App;
