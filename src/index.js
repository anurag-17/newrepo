import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import { default as SettingsIndex } from "./routes/settings/Index";
import { default as Home } from "./routes/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tester" element={<App />} >
              <Route path="expenses" element={<Expenses />} />
              <Route path="invoices" element={<Invoices />}>
                <Route path=":invoiceId" element={<Invoice />} />
              </Route>
          </Route>
          <Route path="settings" element={<SettingsIndex />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            }
          />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
