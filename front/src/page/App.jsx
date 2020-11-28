import '../css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ProvideAuth } from '../hook/authHook';
import { Navbar } from '../components/Navbar';
import { Routes } from '../routes/Router';
import { Consumer } from '../components/consumer';

export const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <Routes />
      </Router>
      <Consumer />
    </ProvideAuth>
  );
}

