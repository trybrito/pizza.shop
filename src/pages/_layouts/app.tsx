import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet />
      <h1>Footer App</h1>
    </div>
  );
}
