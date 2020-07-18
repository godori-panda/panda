import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

import Navigation from './nav'
import Home from './home'
import Dynamic from './dynamic'
import Static from './static'
import Footer from "./footer";
import Form from "./pages/Form";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button} from '@shopify/polaris';
import Order from "./pages/Order";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postcodes: this.props.store ? this.props.store.postcodes : [],
            postcodeQuery: this.props.store ? this.props.store.postcodeQuery : []
        };
    }

    render() {
        return (
            <div>
                <div id="body">
                    <AppProvider i18n={enTranslations}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/dynamic" render={(props) =>
                            <Dynamic {...props}
                                     postcodes={this.state.postcodes}
                                     postcodeQuery={this.state.postcodeQuery}/>
                        }/>
                        <Route path="/static" component={Static}/>
                        <Route path="/form" component={Form}/>
                        <Route path="/order" component={Order}/>
                        <Redirect to="/"/>
                    </Switch>
                    </AppProvider>
                </div>
            </div>
        )
    }
}

export default App;
