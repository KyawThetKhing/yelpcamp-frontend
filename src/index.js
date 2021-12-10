import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import OverviewPage from "pages/OverviewPage";
import CampPage from "pages/CampPage";
import NewCampPage from "pages/NewCampPage";
import CampDetailPage from "pages/CampDetailPage";
import PrivateRoute from "routes/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<OverviewPage />} />
              <Route path="auth" element={<LoginPage />} />
              <Route path="camps" element={<CampPage />} />
              <Route path="camps/:campId" element={<CampDetailPage />} />
              <Route
                path="newcamp"
                element={
                  <PrivateRoute>
                    <NewCampPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
