// components/Layout.js

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const UserLayout = () => {
    return (
        <div className="flex pt-20 h-full bg-black text-white">
            <div className="fixed top-0 left-0 h-full w-64 bg-black text-white z-40 md:static md:flex md:z-auto overflow-hidden">
                <Sidebar />
            </div>
            <main className="flex-1 p-6 bg-black h-screen overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default UserLayout;
