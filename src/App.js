import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ReduxComponent from "./pages/ReduxComponent";
import StateComponent from "./pages/StateComponent";
import ContextComponentProvider from "./store/contex";
import store from './store/redux';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact >
            <StateComponent />
        </Route>
        <Route path='/state'>
            <StateComponent />
        </Route>
        <Route path='/context-api'>
            <ContextComponentProvider />
        </Route>
        <Route path='/redux'>
          <Provider store={store}>
            <ReduxComponent />
          </Provider>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;