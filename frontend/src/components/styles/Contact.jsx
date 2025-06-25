import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaboration, opportunities, or just a quick hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          {/* Email */}
          <a
            href="mailto:gkg11092002@gmail.com"
            className="flex items-center space-x-4 p-4 bg-gray-900/60 rounded-lg hover:bg-gray-900/80 transition duration-300"
          >
            <Mail className="text-purple-400" size={24} />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-gray-300">gkg11092002@gmail.com</div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919999999999" // Replace with your actual number
            className="flex items-center space-x-4 p-4 bg-gray-900/60 rounded-lg hover:bg-gray-900/80 transition duration-300"
          >
            <Phone className="text-pink-400" size={24} />
            <div>
              <div className="font-semibold">Phone / WhatsApp</div>
              <div className="text-gray-300">+91 82998 62157</div>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center space-x-4 p-4 bg-gray-900/60 rounded-lg">
            <MapPin className="text-yellow-400" size={24} />
            <div>
              <div className="font-semibold">Location</div>
              <div className="text-gray-300">India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
