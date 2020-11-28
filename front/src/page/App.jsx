import '../css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ProvideAuth } from '../hook/authHook';
import { NavbarComponent } from '../components/Navbar';
import { Routes } from '../routes/Router';
import { Consumer } from '../components/consumer';

export const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <NavbarComponent />
        <Routes />
      </Router>
      <Consumer />
    </ProvideAuth>
  );
}

