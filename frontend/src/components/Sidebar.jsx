import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', path: '/user-dashboard' },
        { name: 'Posts', path: '/user-dashboard/posts' },
        { name: 'Mentors', path: '/user-dashboard/mentors' },
        { name: 'Profile', path: '/user-dashboard/profile' },
        { name: 'Logout', path: '' },
    ];

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between bg-black text-white p-4">
                <h2 className="text-xl font-bold">My App</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
          fixed top-0 left-0 h-full w-64 bg-black text-white z-40 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:flex md:z-auto
        `}
            >
                <div className="p-6 space-y-6">
                    <ul className="space-y-6 flex flex-col">
                        {navItems.map((item, index) => (
                            <Link to={item.path} key={index} className="hover:text-gray-300 pl-4 text-xl cursor-pointer">
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
