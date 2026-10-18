export const mockProducts = [
  {
    id: 'prod_001',
    slug: 'lumina-pro-anc-headphones',
    name: 'Lumina Sound Pro ANC Wireless Headphones',
    tagline: 'Studio Acoustic Precision with 45dB Hybrid Active Noise Cancellation',
    brand: 'AuraTech Sound',
    category: 'electronics',
    categoryName: 'Electronics & Gadgets',
    price: 349.00,
    originalPrice: 399.00,
    discountPercentage: 12,
    rating: 4.85,
    reviewsCount: 342,
    inStock: true,
    stockQuantity: 84,
    sku: 'LUM-ANC-01',
    sellerId: 'usr_seller_01',
    sellerName: 'AuraTech Sound & Gear',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
    ],
    description: 'Designed for audiophiles and digital creators, Lumina Sound Pro delivers unmatched high-fidelity sound with custom custom-tuned beryllium drivers, dual transparency modes, and 42-hour continuous battery playback.',
    highlights: [
      'Hybrid ANC with triple microphone array',
      'Lossless LDAC & aptX HD Bluetooth 5.3',
      'Fast charge: 15 minutes gives 6 hours',
      'Aircraft-grade aluminum headband with memory foam cushions'
    ],
    specifications: [
      { key: 'Driver Size', value: '45mm Custom Beryllium' },
      { key: 'Battery Life', value: 'Up to 42 hours (ANC on)' },
      { key: 'Connectivity', value: 'Bluetooth 5.3 + 3.5mm Aux' },
      { key: 'Weight', value: '265g' },
    ],
    variants: [
      { id: 'var_001_black', name: 'Matte Obsidian', color: '#18181b', price: 349.00, inStock: true },
      { id: 'var_001_silver', name: 'Titanium Silver', color: '#94a3b8', price: 349.00, inStock: true },
      { id: 'var_001_cream', name: 'Champagne Cream', color: '#fef08a', price: 369.00, inStock: true },
    ]
  },
  {
    id: 'prod_002',
    slug: 'chronos-vanguard-smartwatch',
    name: 'Chronos Vanguard Titanium Smartwatch',
    tagline: 'Sapphire Crystal Display with 14-Day Battery & Advanced Biometric Sensors',
    brand: 'Chronos Lab',
    category: 'electronics',
    categoryName: 'Electronics & Gadgets',
    price: 499.00,
    originalPrice: 549.00,
    discountPercentage: 9,
    rating: 4.92,
    reviewsCount: 189,
    inStock: true,
    stockQuantity: 42,
    sku: 'CHR-VAN-02',
    sellerId: 'usr_seller_01',
    sellerName: 'AuraTech Sound & Gear',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
    ],
    description: 'Precision forged from Grade 5 aerospace titanium, the Chronos Vanguard features an ultra-bright 2000-nit AMOLED display protected by sapphire crystal, clinical ECG telemetry, dual-band GPS, and 100m water resistance.',
    highlights: [
      'Grade 5 Titanium bezel & ceramic back',
      'Medical-grade ECG and blood oxygen metrics',
      'Always-On 1.43” AMOLED screen',
      '10 ATM Water Resistance (100 meters)'
    ],
    specifications: [
      { key: 'Display', value: '1.43" Super AMOLED 466x466' },
      { key: 'Case Material', value: 'Titanium Grade 5' },
      { key: 'Sensors', value: 'ECG, SpO2, Optical HR, Barometer' },
      { key: 'Battery', value: '14 Days Typical Usage' },
    ],
    variants: [
      { id: 'var_002_raw', name: 'Raw Brushed Titanium', color: '#94a3b8', price: 499.00, inStock: true },
      { id: 'var_002_dlc', name: 'Diamond-Like Carbon Black', color: '#09090b', price: 529.00, inStock: true }
    ]
  },
  {
    id: 'prod_003',
    slug: 'zenith-minimalist-desk-lamp',
    name: 'Zenith Studio Architectural Ambient Lamp',
    tagline: 'Zero-Flicker CRI 98+ Illumination with Stepless Rotary Dimming',
    brand: 'Form & Lumen',
    category: 'home-living',
    categoryName: 'Modern Home & Workspace',
    price: 189.00,
    originalPrice: 219.00,
    discountPercentage: 14,
    rating: 4.78,
    reviewsCount: 94,
    inStock: true,
    stockQuantity: 65,
    sku: 'ZEN-LMP-03',
    sellerId: 'usr_seller_01',
    sellerName: 'Form & Lumen Official',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    ],
    description: 'Elevate your workspace with Zenith. Designed in Copenhagen, it integrates warm-to-cool circadian cycle LEDs with a solid brass counterbalance pivot arm.',
    highlights: [
      '98+ High Color Rendering Index (CRI)',
      'Circadian rhythm temperature tuning (2700K - 6500K)',
      'Integrated wireless Qi charging pad in base'
    ],
    specifications: [
      { key: 'Color Temp', value: '2700K - 6500K Tunable' },
      { key: 'Max Brightness', value: '1200 Lumens' },
      { key: 'Power Input', value: 'USB-C PD 45W' },
    ],
    variants: [
      { id: 'var_003_brass', name: 'Brushed Brass', color: '#d97706', price: 189.00, inStock: true },
      { id: 'var_003_matte_black', name: 'Anodized Black', color: '#1e293b', price: 189.00, inStock: true }
    ]
  },
  {
    id: 'prod_004',
    slug: 'aeroflex-modular-commute-pack',
    name: 'AeroFlex 28L Weatherproof Commuter Backpack',
    tagline: 'Cordura 840D Ballistic Nylon with Magnetic Fidlock Buckles',
    brand: 'Nomadics Lab',
    category: 'accessories',
    categoryName: 'Luxury Travel & EDC',
    price: 220.00,
    originalPrice: 220.00,
    discountPercentage: 0,
    rating: 4.88,
    reviewsCount: 156,
    inStock: true,
    stockQuantity: 110,
    sku: 'AERO-28-04',
    sellerId: 'usr_seller_01',
    sellerName: 'Nomadics Official',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    ],
    description: 'The ultimate daily carry engineered for tech professionals and world travelers. Waterproof YKK Aquaguard zippers, suspended 16” MacBook Pro compartment, and hidden passport security pocket.',
    highlights: [
      'Cordura 840D Eco-recycled ballistic nylon',
      'Suspended clamshell tech vault',
      'German Fidlock V-buckle magnetic closures'
    ],
    specifications: [
      { key: 'Capacity', value: '28 Liters' },
      { key: 'Laptop Fit', value: 'Up to 16.2" Screen' },
      { key: 'Water Resistance', value: 'IPX4 Submersible Zippers' },
    ],
    variants: [
      { id: 'var_004_slate', name: 'Slate Grey', color: '#475569', price: 220.00, inStock: true },
      { id: 'var_004_camo', name: 'Stealth Black', color: '#0f172a', price: 235.00, inStock: true }
    ]
  },
  {
    id: 'prod_005',
    slug: 'tactile-mechanical-keyboard-pro',
    name: 'Vortex Custom 75% Wireless Mechanical Keyboard',
    tagline: 'Gasket-Mounted CNC Aluminum Chassis with Hot-Swappable Switches',
    brand: 'Vortex Keyboards',
    category: 'electronics',
    categoryName: 'Electronics & Gadgets',
    price: 259.00,
    originalPrice: 299.00,
    discountPercentage: 13,
    rating: 4.95,
    reviewsCount: 278,
    inStock: true,
    stockQuantity: 28,
    sku: 'VOR-75-05',
    sellerId: 'usr_seller_01',
    sellerName: 'AuraTech Sound & Gear',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'A luxurious typing marvel crafted from solid CNC 6063 aluminum block. Pre-lubed linear switches, multi-layer acoustic dampening foam, and multi-device 2.4GHz wireless.',
    highlights: [
      'CNC anodized aluminum body (1.8kg solid mass)',
      'Hot-swappable 5-pin PCB sockets',
      'South-facing RGB per-key illumination'
    ],
    specifications: [
      { key: 'Layout', value: '75% Compact (82 Keys)' },
      { key: 'Switches', value: 'Lubed Custom Linear' },
      { key: 'Connectivity', value: 'Bluetooth 5.1 / 2.4G / Type-C' }
    ],
    variants: [
      { id: 'var_005_moon', name: 'Moon Silver', color: '#cbd5e1', price: 259.00, inStock: true },
      { id: 'var_005_navy', name: 'Deep Midnight Navy', color: '#1e3a8a', price: 269.00, inStock: true }
    ]
  },
  {
    id: 'prod_006',
    slug: 'merino-wool-travel-overshirt',
    name: 'Merino Thermal Weather-Shield Overshirt',
    tagline: '100% Extrafine Australian Merino with DWR Water-Repellent Nano Coating',
    brand: 'Komorebi Studio',
    category: 'apparel',
    categoryName: 'Apparel & Footwear',
    price: 175.00,
    originalPrice: 195.00,
    discountPercentage: 10,
    rating: 4.81,
    reviewsCount: 88,
    inStock: true,
    stockQuantity: 52,
    sku: 'KOM-SHR-06',
    sellerId: 'usr_seller_01',
    sellerName: 'Komorebi Apparel',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Natural thermo-regulation meets modern commuter utility. Naturally odor-resistant, breathable, and cut with tailored articulation for comfortable daily movement.',
    highlights: [
      '280gsm 100% extrafine Merino wool',
      'Fluorocarbon-free DWR weather shield',
      'Corozo organic nut buttons'
    ],
    specifications: [
      { key: 'Material', value: '100% Merino Wool 18.5 Micron' },
      { key: 'Fit', value: 'Modern Relaxed Overshirt' },
      { key: 'Care', value: 'Machine Wash Cold / Gentle' }
    ],
    variants: [
      { id: 'var_006_sage', name: 'Alpine Sage', color: '#65a30d', price: 175.00, inStock: true },
      { id: 'var_006_charcoal', name: 'Charcoal Heather', color: '#334155', price: 175.00, inStock: true }
    ]
  }
]
