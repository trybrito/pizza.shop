import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
      <h1>Footer Auth</h1>
    </div>
  );
}
