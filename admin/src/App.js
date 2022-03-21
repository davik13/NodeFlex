import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import {useContext} from "react"

function App() {
  const { user } = useContext(AuthContext);
  return (
   <Router>
     <Routes>
       <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
       {user && (
         <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
         </>
       )}
     </Routes>
   </Router>
  );
}

export default App;
