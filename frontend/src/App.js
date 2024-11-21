import { BrowserRouter } from "react-router-dom";

import Header from "./Components/app/Header"
import Nav from "./Components/app/Nav"
import Main from "./Components/app/Main"
import Footer from "./Components/app/Footer"
import AuthProvider from "./Components/context/AuthProvider"
import HttpHeadersProvider from "./Components/context/HttpHeadersProvider";
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <HttpHeadersProvider>
            <Nav />
            <Main />
          </HttpHeadersProvider>
        </AuthProvider>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;