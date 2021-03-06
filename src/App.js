import React, {useEffect}from 'react';
import EmailList from "./EmailList";
import './App.css';
import Header from "./Header";
import Mail from './Mail';
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {auth} from "./Firebase";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {selectUser} from "./features/userSlice";
import {login} from "./features/userSlice";
import SendMail from "./SendMail";
import Login from "./Login";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(user => {
          if(user){
             dispatch(login({
                 displayName: user.displayName,
                 email: user.email,
                 photoURL: user.photoURL
             }))
          }

      })

  }, [])

return (
  <Router>
          {!user ? (
              <Login/>
          ): (
              <div className="App">
                   <Header/>
              <div className="app_body">

                    <Sidebar/>
                  <Switch>
                      <Route path="/mail">
                          <Mail/>
                      </Route>

                      <Route path="/">
                          <EmailList/>
                      </Route>

                  </Switch>
              </div>
              {sendMessageIsOpen && <SendMail/> }
          </div>

          )}

      </Router>
     
        
  );
}

export default App;
