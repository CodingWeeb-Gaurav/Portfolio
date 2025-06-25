// src/components/Footer.jsx
export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { direction: 'center', label: 'Home' },
    { direction: 'bottom', label: 'Skills' },
    { direction: 'left', label: 'Timeline' },
    { direction: 'right', label: 'Projects' },
  ];

  const handleClick = (direction) => {
    onNavigate?.(direction);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              Gaurav Kumar Gupta
            </span>
          </div>

          <p className="text-gray-400 mb-6">
            Building the future through code, one project at a time.
          </p>

          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-8">
            {navLinks.map((link) => (
              <button
                key={link.direction}
                onClick={() => handleClick(link.direction)}
                className="text-gray-400 hover:text-purple-400 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Gaurav Kumar Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
