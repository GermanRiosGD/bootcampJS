import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivayeRoute";
import { About } from "../page/About";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Protected } from "../page/Protected";
import { Public } from "../page/Public";
import { Users } from "../page/Users";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/public"><Public /></Route>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path="/protected"><Protected /></PrivateRoute>
            <Route path="/about"><About /></Route>
            <Route path="/users"><Users /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
    )
}