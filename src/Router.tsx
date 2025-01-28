import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SigIn } from "./pages/auth/sign-in";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigIn />} />
      </Route>
    </Routes>
  );
}
