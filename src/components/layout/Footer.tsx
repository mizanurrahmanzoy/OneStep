import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 mt-20">

      {/* Brand Directory */}
      <div className="border-b border-gray-700">

        <div className="max-w-7xl mx-auto px-4 py-8">

          <h3 className="text-red-400 font-bold mb-4">
            BRAND DIRECTORY
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <span className="font-semibold text-white">
                ELECTRONICS :
              </span>

              <span className="ml-3 text-gray-400">
                Smartphones | Laptops |
                Tablets | Smart Watches |
                Headphones | Cameras |
                Accessories
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                HOME :
              </span>

              <span className="ml-3 text-gray-400">
                Furniture | Lighting |
                Kitchen Items |
                Storage | Wall Decor |
                Rugs
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                DECORATION :
              </span>

              <span className="ml-3 text-gray-400">
                Wall Art | Vases |
                Artificial Plants |
                Photo Frames |
                Decorative Lights
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                COSMETICS :
              </span>

              <span className="ml-3 text-gray-400">
                Face Wash | Makeup |
                Lipstick | Perfume |
                Sunscreen |
                Hair Care
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                JEWELRY :
              </span>

              <span className="ml-3 text-gray-400">
                Rings | Earrings |
                Necklaces | Bracelets |
                Pendants
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Categories */}
          <div>

            <h4 className="text-white font-bold mb-5">
              POPULAR CATEGORIES
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="#">
                  Electronics
                </Link>
              </li>

              <li>
                <Link href="#">
                  Home Accessories
                </Link>
              </li>

              <li>
                <Link href="#">
                  Decoration
                </Link>
              </li>

              <li>
                <Link href="#">
                  Cosmetics
                </Link>
              </li>

              <li>
                <Link href="#">
                  Jewelry
                </Link>
              </li>

            </ul>

          </div>

          {/* Products */}
          <div>

            <h4 className="text-white font-bold mb-5">
              PRODUCTS
            </h4>

            <ul className="space-y-3 text-sm">

              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Flash Sale</li>
              <li>Discount Products</li>
              <li>Featured Products</li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-white font-bold mb-5">
              OUR COMPANY
            </h4>

            <ul className="space-y-3 text-sm">

              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Careers</li>
              <li>Blog</li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-white font-bold mb-5">
              SERVICES
            </h4>

            <ul className="space-y-3 text-sm">

              <li>Track Order</li>
              <li>Wishlist</li>
              <li>Return Policy</li>
              <li>Support</li>
              <li>FAQ</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-white font-bold mb-5">
              CONTACT
            </h4>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">

                <FiMapPin
                  className="mt-1 shrink-0"
                />

                <p>
                  Mirzapur, Tangail,
                  Bangladesh
                </p>

              </div>

              <div className="flex gap-3">

                <FiPhone
                  className="mt-1 shrink-0"
                />

                <p>+880 1700-000000</p>

              </div>

              <div className="flex gap-3">

                <FiMail
                  className="mt-1 shrink-0"
                />

                <p>
                  support@onestep.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Payment */}
          <div className="flex gap-3">

            <img
              src="/payments/visa.png"
              alt="visa"
              className="h-8"
            />

            <img
              src="/payments/mastercard.png"
              alt="mastercard"
              className="h-8"
            />

            <img
              src="/payments/bkash.png"
              alt="bkash"
              className="h-8"
            />

            <img
              src="/payments/nagad.png"
              alt="nagad"
              className="h-8"
            />

          </div>

          <p className="text-sm text-gray-400">
            © 2026 OneStep. All Rights
            Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;