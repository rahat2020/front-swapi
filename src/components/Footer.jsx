import {
  Facebook,
  Instagram,
  Star,
  Twitter,
  Youtube,
  Zap,
} from "react-feather";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-blue-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Star className="h-6 w-6 text-blue-400 fill-blue-400" />
                <Zap className="h-3 w-3 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  STAR WARS
                </h3>
                <p className="text-xs text-gray-400 tracking-wider">
                  CHARACTERS
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate guide to the characters of the Star Wars universe.
              Explore the stories that define the galaxy.
            </p>
          </div>

          {/* Characters */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold">Characters</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jedi Knights
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sith Lords
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rebel Alliance
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Galactic Empire
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bounty Hunters
                </Link>
              </li>
            </ul>
          </div>

          {/* Universe */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold">Universe</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TV Series
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  role="button"
                  tabIndex={0}
                  className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              About
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2025 Star Wars Characters. All rights reserved.</p>
            <p className="text-xs mt-1">
              Star Wars and all related characters are trademarks of Lucasfilm
              Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
