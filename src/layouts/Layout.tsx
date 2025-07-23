import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-gray-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto py-10 px-4 md:px-0 flex items-center">
          <h1 className="text-2xl uppercase font-semibold">
            Products Management
          </h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto mt-10 px-4 md:px-0">
        <section className="p-10 bg-white shadow-md ">
            <Outlet />
        </section>
      </main>
    </>
  );
}
