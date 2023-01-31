import { Header } from "./";
import { Outlet } from "react-router-dom";
import Router from "../router/Router";

export default function Layout() {
  return (
    
    <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">
      <Header />
      <Router />
    </div>
  );
}