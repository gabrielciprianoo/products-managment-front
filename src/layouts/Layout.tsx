import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="text-8xl">Layout</div>

      <Outlet />
    </>
  );
}
