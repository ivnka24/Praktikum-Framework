import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
  useParams
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/private/*" 
            element={
              <PrivateRoute >
                <Sneakers />
              </PrivateRoute>
            } 
          ></Route>
          <Route 
            path="/private/sneaker/Casual/*" 
            element={
              <PrivateRoute >
                <Sneakers >
                  <SneakersCasual />
                </Sneakers>
              </PrivateRoute>
            } 
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated : false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useNavigate();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        >
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children }) {
  return fakeAuth.isAuthenticated ? ( children ) : <Navigate to={{ pathname: "/login" }} />;
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Private</h3>
}

function LoginPage() {
  let history = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at { from.pathname }</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

// NESTED
function Sneakers() {
  return (
    <div>
      <h2>Sneakers</h2>
      <ul>
        <li>
          <Link to={"/private/sneaker/Casual"}>Casual</Link>
        </li>
        <li>
          <Link to={"/private/sneaker/Running"}>Running</Link>
        </li>
        <li>
          <Link to={"/private/sneaker/Boots"}>Boots</Link>
        </li>
      </ul>

      <Routes>
        {/* <Route path="/" element={<h3>Harap pilih barang.</h3>} /> */}
        <Route path="/private/sneaker/Casual" element={<SneakersCasual />} />
        <Route path="/private/sneaker/Running" element={<SneakersCasual />} />
        <Route path="/private/sneaker/Boots" element={<SneakersCasual />} />
      </Routes>
    </div>
  );
}

function SneakersCasual() {
  return (
    <div>
      <h2>Sepatu Casual</h2>
    </div>
  );
}

function SneakersRunning() {
  return (
    <div>
      <h2>Sepatu Running</h2>
    </div>
  );
}
function SneakersBoots() {
  return (
    <div>
      <h2>Sepatu Boots</h2>
    </div>
  );
}