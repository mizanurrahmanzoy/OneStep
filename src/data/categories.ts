import {
  FiMonitor,
  FiHome,
  FiHeart,
  FiGift,
} from "react-icons/fi";

export const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: FiMonitor,

    subCategories: [
      {
        id: 101,
        name: "Mobile & Tablets",

        children: [
          "Smartphones",
          "Feature Phones",
          "Tablets",
          "Smart Watches",
          "Phone Accessories",
          "Power Banks",
          "Chargers",
          "Headphones",
        ],
      },

      {
        id: 102,
        name: "Computers",

        children: [
          "Laptops",
          "Desktop PCs",
          "Monitors",
          "Keyboards",
          "Mouse",
          "SSD",
          "RAM",
          "Computer Accessories",
        ],
      },

      {
        id: 103,
        name: "Audio & Video",

        children: [
          "Bluetooth Speakers",
          "Soundbars",
          "TVs",
          "Projectors",
          "Microphones",
          "Home Theater",
        ],
      },

      {
        id: 104,
        name: "Smart Devices",

        children: [
          "Smart Bulbs",
          "Security Cameras",
          "Smart Locks",
          "Smart Plugs",
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Home Accessories",
    icon: FiHome,

    subCategories: [
      {
        id: 201,
        name: "Kitchen",

        children: [
          "Cookware",
          "Storage Containers",
          "Water Bottles",
          "Kitchen Tools",
          "Dinner Sets",
        ],
      },

      {
        id: 202,
        name: "Bedroom",

        children: [
          "Bedsheets",
          "Pillows",
          "Blankets",
          "Mattress Protectors",
        ],
      },

      {
        id: 203,
        name: "Bathroom",

        children: [
          "Towel Racks",
          "Bathroom Organizers",
          "Soap Dispensers",
          "Shower Accessories",
        ],
      },

      {
        id: 204,
        name: "Storage & Organization",

        children: [
          "Storage Boxes",
          "Shelves",
          "Wardrobe Organizers",
          "Hangers",
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Home Decor",
    icon: FiHome,

    subCategories: [
      {
        id: 301,
        name: "Wall Decor",

        children: [
          "Wall Art",
          "Paintings",
          "Wall Clocks",
          "Mirrors",
        ],
      },

      {
        id: 302,
        name: "Lighting",

        children: [
          "Table Lamps",
          "Floor Lamps",
          "LED Lights",
          "Decorative Lights",
        ],
      },

      {
        id: 303,
        name: "Artificial Plants",

        children: [
          "Flower Pots",
          "Indoor Plants",
          "Decorative Trees",
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Cosmetics",
    icon: FiHeart,

    subCategories: [
      {
        id: 401,
        name: "Skin Care",

        children: [
          "Face Wash",
          "Moisturizer",
          "Serum",
          "Sunscreen",
          "Face Mask",
        ],
      },

      {
        id: 402,
        name: "Makeup",

        children: [
          "Foundation",
          "Lipstick",
          "Compact Powder",
          "Mascara",
          "Eyeliner",
        ],
      },

      {
        id: 403,
        name: "Hair Care",

        children: [
          "Shampoo",
          "Conditioner",
          "Hair Oil",
          "Hair Serum",
        ],
      },

      {
        id: 404,
        name: "Fragrances",

        children: [
          "Perfume",
          "Body Spray",
          "Attar",
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Jewelry",
    icon: FiGift,

    subCategories: [
      {
        id: 501,
        name: "Women's Jewelry",

        children: [
          "Necklaces",
          "Earrings",
          "Bracelets",
          "Rings",
          "Anklets",
        ],
      },

      {
        id: 502,
        name: "Men's Jewelry",

        children: [
          "Chains",
          "Bracelets",
          "Rings",
          "Watches",
        ],
      },

      {
        id: 503,
        name: "Fashion Jewelry",

        children: [
          "Artificial Jewelry",
          "Pearl Jewelry",
          "Crystal Jewelry",
        ],
      },

      {
        id: 504,
        name: "Gift Sets",

        children: [
          "Couple Sets",
          "Premium Gift Boxes",
          "Wedding Collections",
        ],
      },
    ],
  },
];