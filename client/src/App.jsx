import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routing/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/loginAndRegister" element={<LoginRegisterPage/>}/> */}
        {routes &&
          routes.map((route) => (
            <React.Fragment key={route.id}>
              {route.children && (
                <Route
                  path={route.path}
                  element={
                    route.isPrivate ? (
                      <PrivateRoute>
                        <route.element />
                      </PrivateRoute>
                    ) : (
                      <route.element />
                    )
                  }
                >
                  {route.children.map((child) => (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<child.element />}
                    />
                  ))}
                </Route>
              )}
              <Route
                path={route.path}
                element={
                  route.isPrivate ? (
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                  ) : (
                    <route.element />
                  )
                }
              />
            </React.Fragment>
          ))}
      </Routes>
    </Router>
  );
}

export default App;
