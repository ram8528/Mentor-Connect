import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown, FileText, GraduationCap, PenBox, StarsIcon } from 'lucide-react';

const Navbar = () => {
  return (
    // <nav className="bg-white shadow-md fixed w-full z-50 top-0">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
    //     <div className="text-2xl font-bold text-blue-700">Mentor Connect</div>
    //     <div className="hidden md:flex space-x-6 items-center">
    //       <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
    //       <a href="#how" className="text-gray-700 hover:text-blue-600">How It Works</a>
    //       <a href="#footer" className="text-gray-700 hover:text-blue-600">Contact</a>
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
    //       <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">Register</button>
    //     </div>
    //   </div>
    // </nav>

    <header className='fixed top-0 w-full border-b border-gray-800 bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 '>
      <nav className='container mx-auto px-10 h-16 flex items-center justify-between'>
        <Link to={"/"} className='text-2xl text-gray-200 font-semibold'>
        Mentor Connect
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <Link href={"/dashboard"}>
            <Button>
              {/* <LayoutDashboard className='h-4 w-4' /> */}
              <span className='hidden md:block'> Contact Us</span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className='h-4 w-4' />
                <span className='hidden md:block'>Growth Tools</span>
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resume Reviewer
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ai-cover-letter"
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  Cover Letter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


         <Link to={"/sign-in"}>
         <Button variant="outline">Sign In</Button>
         </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
