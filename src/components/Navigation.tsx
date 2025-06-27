
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navigation = ({ activePage, setActivePage }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Jane Doe
        </h1>
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setActivePage(item.id)}
              className={`${
                activePage === item.id 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              } transition`}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
