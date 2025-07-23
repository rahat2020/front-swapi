import { Link } from "react-router-dom";
import { Activity, Menu, Search, Shield, Star, Zap } from "react-feather";

const Nabvar = () => {
  return (
    <header className="border-b border-blue-500/20 bg-gradient-to-r from-black via-gray-800 to-black">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-blue-500/10">
          <div className="flex items-center space-x-4">
            <span className="text-white font-medium">
              May the Force be with you
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="#"
              className="hover:text-blue-400 text-white font-medium transition-colors"
            >
              Sign In
            </Link>
            <span className="text-white font-medium">|</span>
            <Link
              to="#"
              className="hover:text-blue-400 text-white font-medium transition-colors"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Star className="h-8 w-8 text-blue-400 fill-blue-400" />
              <Zap className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                STAR WARS
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">CHARACTERS</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#"
              className="flex items-center space-x-2 hover:text-blue-400 text-white transition-colors group"
            >
              <Activity className="h-4 w-4 group-hover:text-blue-400 text-white font-medium" />
              <span>Sith</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors group text-white font-medium"
            >
              <Shield className="h-4 w-4 group-hover:text-green-400" />
              <span>Rebels</span>
            </Link>
            <Link
              to="#"
              className="hover:text-blue-400 transition-colors text-white font-medium"
            >
              Empire
            </Link>
            <Link
              to="#"
              className="hover:text-blue-400 transition-colors text-white font-medium"
            >
              Droids
            </Link>
            <Link
              to="#"
              className="hover:text-blue-400 transition-colors text-white font-medium"
            >
              Species
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center">
            <div className="hidden sm:flex items-center space-x-2 bg-gray-900/50 rounded-full px-4 py-2 border border-blue-500/20">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search characters..."
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-40 focus:w-48 transition-all duration-300"
              />
            </div>
            <button
              role="button"
              tabIndex={0}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nabvar;
