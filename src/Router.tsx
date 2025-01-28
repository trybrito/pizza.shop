import { Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/app/dashboard";
import { SigIn } from "./pages/auth/sign-in";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SigIn />} />
    </Routes>
  );
}
