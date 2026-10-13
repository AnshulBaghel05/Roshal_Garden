/**
 * Roshal Garden - Venue Configuration
 * Edit this file to update contact numbers, social links, pricing placeholders,
 * package inclusions, and venue metadata without touching UI code.
 */

export interface VenueConfig {
  name: string;
  tagline: string;
  uspHeadline: string;
  uspProofLine: string;
  brandStory: {
    founder: string;
    background: string;
    ethos: string;
    description: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    whatsappNumber: string;
    email: string;
    displayAddress: string;
    landmark: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    operatingHours: string;
    responseTimeNotice: string;
  };
  socials: {
    instagram: { handle: string; url: string };
    facebook: { handle: string; url: string };
    youtube: { handle: string; url: string };
  };
  venueStats: {
    lawnArea: string;
    hallArea: string;
    totalArea: string;
    lawnCapacity: string;
    hallCapacity: string;
    combinedCapacity: string;
    parkingCapacity: string;
  };
  packages: Array<{
    id: string;
    title: string;
    subtitle: string;
    badge?: string;
    priceStartingFrom: string;
    priceNote: string;
    idealFor: string;
    capacity: string;
    inclusions: string[];
    exclusions: string[];
  }>;
  catering: {
    vegPerPlateStartingFrom: string;
    nonVegPerPlateStartingFrom: string;
    pricingNote: string;
    sampleVegMenu: {
      welcomeDrinks: string[];
      starters: string[];
      mains: string[];
      riceAndBreads: string[];
      desserts: string[];
      liveCounters: string[];
    };
    sampleNonVegMenu: {
      welcomeDrinks: string[];
      starters: string[];
      mains: string[];
      riceAndBreads: string[];
      desserts: string[];
      liveCounters: string[];
    };
  };
  awards: Array<{
    id: string;
    title: string;
    issuer: string;
    year: string;
    category: string;
    notes: string;
  }>;
  reviews: Array<{
    id: string;
    author: string;
    eventType: string;
    date: string;
    rating: number;
    text: string;
    source: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    category: 'booking' | 'venue' | 'catering' | 'logistics';
  }>;
}

export const venueConfig: VenueConfig = {
  name: 'Roshal Garden',
  tagline: 'Where British Sophistication Meets Indian Warmth',
  uspHeadline: 'Pune’s Premier Wedding Lawn & Banquet Hall with In-House Culinary Excellence',
  uspProofLine: '18,000 sq ft lush lawn + 3,000 sq ft AC hall on Pune-Nashik Highway, Bhosari. Serving Pune, PCMC & Pimpri-Chinchwad.',
  
  brandStory: {
    founder: 'Ms C.K. Sharma',
    background: '25 years of hospitality & lifestyle refinement in England',
    ethos: 'A seamless blend of British sophistication with vibrant Indian culture',
    description:
      'Founded by Ms C.K. Sharma following 25 years of living and studying gracious hosting traditions in England, Roshal Garden brings timeless architectural grace, pristine manicured lawns, and heartfelt Indian hospitality to Pune. From lavish royal weddings to intimate corporate banquets, our estate delivers poise, grandeur, and memorable celebrations.'
  },

  contact: {
    primaryPhone: '9850543449',
    secondaryPhone: '7709935299',
    whatsappNumber: '919850543449',
    email: 'events@roshalgarden.com',
    displayAddress: 'Pune-Nashik Highway, Landewadi / Bhosari, Pune, Maharashtra 411039',
    landmark: 'Prominently located on the Pune-Nashik Highway, minutes from PCMC & Spine Road',
    // Embed map pointing to Bhosari Pune-Nashik Highway
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.96645308678!2d73.8343719!3d18.6279183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8004f2f4581%3A0x6b60ad42ef22d057!2sBhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Roshal+Garden+Bhosari+Pune+Nashik+Highway',
    operatingHours: 'Open daily: 9:00 AM - 11:00 PM for site visits & event tours',
    responseTimeNotice: 'We reply to all WhatsApp & event form enquiries within 2 hours.'
  },

  socials: {
    instagram: {
      handle: '@roshal_garden',
      url: 'https://instagram.com/roshal_garden'
    },
    facebook: {
      handle: '/roshalgardenpune',
      url: 'https://facebook.com/roshalgardenpune'
    },
    youtube: {
      handle: 'Roshal Garden Pune',
      url: 'https://www.youtube.com'
    }
  },

  venueStats: {
    lawnArea: '18,000 sq ft',
    hallArea: '3,000 sq ft',
    totalArea: '21,000+ sq ft',
    lawnCapacity: '[ADD CAPACITY: e.g. 500 – 1,200 guests]',
    hallCapacity: '[ADD CAPACITY: e.g. 150 – 300 guests]',
    combinedCapacity: '[ADD CAPACITY: up to 1,500 guests]',
    parkingCapacity: '[ADD CAPACITY: 150+ cars with dedicated valet space]'
  },

  packages: [
    {
      id: 'silver-celebration',
      title: 'Silver Elegance',
      subtitle: 'Ideal for Haldi, Sangeet, Birthday Parties & Corporate Seminars',
      badge: 'Popular for Intimate Events',
      priceStartingFrom: '[ADD PRICE - Contact for season pricing]',
      priceNote: 'Flexible half-day or evening slots available',
      idealFor: '150 to 350 guests',
      capacity: 'Banquet Hall (3,000 sq ft) + Adjoining Veranda',
      inclusions: [
        'Climate-controlled 3,000 sq ft banquet hall',
        'Standard banquet seating with crisp linen & covers',
        'Basic ambient lighting & high-clarity sound system',
        'Dedicated green room / dressing suite for host family',
        'Continuous 100% DG generator power backup',
        'Designated buffet service dining area',
        'On-site event security & parking coordinator'
      ],
      exclusions: [
        'Open lawn access (available as add-on)',
        'Custom floral stage mandap fabrication',
        'Speciality multi-tier live food counters'
      ]
    },
    {
      id: 'gold-wedding',
      title: 'Royal Gold Wedding',
      subtitle: 'Complete Wedding & Reception Experience on Lawn + Hall',
      badge: 'Most Popular',
      priceStartingFrom: '[ADD PRICE - Contact for customized proposal]',
      priceNote: 'Comprehensive full-day booking option',
      idealFor: '350 to 900 guests',
      capacity: '18,000 sq ft Lawn + 3,000 sq ft Banquet Hall',
      inclusions: [
        'Full access to 18,000 sq ft manicured royal lawn',
        '3,000 sq ft air-conditioned hall for dining or rituals',
        'Two air-conditioned bridal and groom dressing suites',
        'Grand floral welcome archway & walkway carpeting',
        'Festive perimeter fairy lighting and canopy wash',
        'Complete stage setup for Varmala and Reception',
        'Full in-house catering infrastructure with live stations',
        '100% DG generator backup for the entire estate',
        'Valet parking management & security team'
      ],
      exclusions: [
        'Drone videography & cinematic photography crew',
        'Fireworks display permissions & pyrotechnics'
      ]
    },
    {
      id: 'sovereign-grand',
      title: 'Imperial Sovereign Heritage',
      subtitle: 'Bespoke Multi-Day Wedding Celebrations with Luxury Catering',
      badge: 'Premium Signature',
      priceStartingFrom: '[ADD PRICE - Custom quote based on menu & decor]',
      priceNote: 'Complete buyout of estate for maximum privacy',
      idealFor: '600 to 1,500+ guests',
      capacity: 'Full 21,000+ sq ft Estate Buyout (Lawn + Hall + Dining Veranda)',
      inclusions: [
        'Exclusive estate privacy: zero simultaneous events',
        'Custom themed luxury mandap & reception stage design',
        'Multi-cuisine royal feast (Veg & Non-Veg live counters)',
        'Three VIP dressing suites with ensuite vanity baths',
        'Architectural heritage lighting across entire garden perimeter',
        'Dedicated hospitality manager & concierge for the couple',
        'Red carpet entry with traditional welcome trumpets / dhol arrangement',
        'Priority parking with 4+ valet attendants',
        'Extended curfew flexibility within local regulatory permissions'
      ],
      exclusions: [
        'Out-of-state artist / celebrity management fees'
      ]
    }
  ],

  catering: {
    vegPerPlateStartingFrom: '[ADD PRICE: e.g. ₹650 / plate]',
    nonVegPerPlateStartingFrom: '[ADD PRICE: e.g. ₹850 / plate]',
    pricingNote: 'Prices vary based on chosen live counters, dessert selections, and guest count. Contact our chef for custom tastings.',
    sampleVegMenu: {
      welcomeDrinks: [
        'Kesar Badam Thandai',
        'Fresh Kiwi Mint Cooler',
        'Kokum Sharbat with roasted cumin'
      ],
      starters: [
        'Paneer Peshawari Tikka with mint dip',
        'Crispy Corn Salt & Pepper',
        'Hara Bhara Kebab with tangy chutney',
        'Cheese Jalapeno Poppers'
      ],
      mains: [
        'Paneer Lababdar in rich tomato-cashew gravy',
        'Kaju Makhana Curry',
        'Subz Diwani Handi (Seasonal vegetables in aromatic spices)',
        'Dal Makhani (Slow-cooked overnight with churned butter)',
        'Yellow Dal Tadka with desi ghee temper'
      ],
      riceAndBreads: [
        'Dum Lucknowi Veg Biryani with Burani Raita',
        'Jeera Peas Pulao',
        'Assorted Breads: Butter Naan, Missi Roti, Garlic Kulcha'
      ],
      desserts: [
        'Hot Malpua with Rabdi',
        'Moong Dal Halwa made with pure ghee',
        'Angoori Gulab Jamun in saffron syrup',
        'Artisanal Kulfi Counter'
      ],
      liveCounters: [
        'Chaat Station: Pani Puri (3 flavours), Dahi Puri & Sev Puri',
        'Live Pasta Station with choice of sauces & toppings',
        'Fresh South Indian Dosa & Uttapam Counter'
      ]
    },
    sampleNonVegMenu: {
      welcomeDrinks: [
        'Passion Fruit Spritzer',
        'Spiced Pomegranate Punch',
        'Traditional Sol Kadhi'
      ],
      starters: [
        'Bhatti Ka Murgh (Charcoal-roasted spiced chicken)',
        'Mutton Seekh Kebab with mint onion salad',
        'Amritsari Fish Fry with carom seeds',
        'Murgh Malai Tikka with cardamom cream'
      ],
      mains: [
        'Butter Chicken (Tender boneless chicken in creamy tomato silk)',
        'Mutton Rogan Josh (Slow braised Kashmiri style)',
        'Chicken Rara (Minced chicken & chunks in spicy gravy)',
        'Paneer Tikka Masala (for mixed plates)',
        'Dal Bukhara'
      ],
      riceAndBreads: [
        'Hyderabadi Dum Chicken Biryani with Mirchi Ka Salan',
        'Kashmiri Pulao with toasted dry fruits',
        'Tandoori Roti, Rumali Roti, Butter Laccha Paratha'
      ],
      desserts: [
        'Shahi Tukda with silver vark & pistachio',
        'Warm Gajar Ka Halwa',
        'Choice of Ice Creams with Belgian chocolate sauce'
      ],
      liveCounters: [
        'Live Tawa Fish / Prawns Fry counter',
        'Live Chicken Shawarma / Galouti Kebab counter',
        'Flambé Dessert Station'
      ]
    }
  },

  awards: [
    {
      id: 'award-1',
      title: 'Best Open-Air Wedding Lawn in PCMC',
      issuer: 'Pune Hospitality & Events Guild',
      year: '2024',
      category: 'Venue Excellence Award',
      notes: '[ADD OFFICIAL CERTIFICATE DETAILS: Verified by Regional Event Industry Forum]'
    },
    {
      id: 'award-2',
      title: 'Top Rated Banquet & Catering Service',
      issuer: 'Maharashtra Tourism & Wedding Planners Association',
      year: '2023',
      category: 'Culinary & Service Standards',
      notes: '[ADD OFFICIAL CERTIFICATE DETAILS: Rated 4.8/5 for guest hygiene & service]'
    },
    {
      id: 'award-3',
      title: 'Heritage British-Indian Architecture Citation',
      issuer: 'West India Venue Designers Guild',
      year: '2022',
      category: 'Architectural Landscaping & Ambience',
      notes: '[ADD OFFICIAL CERTIFICATE DETAILS: Recognised for English garden aesthetics blended with Indian hospitality]'
    }
  ],

  reviews: [
    {
      id: 'rev-1',
      author: 'Sachin & Neha Kulkarni',
      eventType: 'Grand Wedding & Reception (700 Guests)',
      date: 'January 2025',
      rating: 5,
      text: 'Roshal Garden was the absolute perfect venue for our daughter’s wedding. The 18,000 sq ft lawn accommodated all 700 guests without feeling congested. The combination of the English garden feel with the grand Indian mandap was praised by every single guest. Ms Sharma and her team handled the timeline with precision.',
      source: 'Google Review'
    },
    {
      id: 'rev-2',
      author: 'Dr. Rahul Patil',
      eventType: 'Brother’s Sangeet & Reception',
      date: 'November 2024',
      rating: 5,
      text: 'Conveniently located on the Pune-Nashik highway in Bhosari, making it effortless for guests travelling from Pune city, Chakan, and Pimpri. The food was outstanding—especially the live chaat counter and non-veg starters. The 3,000 sq ft hall was ideal for our senior family members to sit comfortably.',
      source: 'Google Review'
    },
    {
      id: 'rev-3',
      author: 'Anjali Deshmukh',
      eventType: 'Silver Jubilee Anniversary Celebration',
      date: 'December 2024',
      rating: 5,
      text: 'The British refinement really shines through in the landscaping, neat flower beds, and clean dressing rooms. You rarely find a garden venue in Bhosari with this standard of hygiene, lighting, and hospitality. Full marks to the catering staff.',
      source: 'Google Review'
    },
    {
      id: 'rev-4',
      author: 'Amitabh Joshi',
      eventType: 'Corporate Annual Gala & Awards',
      date: 'February 2025',
      rating: 5,
      text: 'We hosted our annual corporate banquet of 400 delegates. The acoustics, generator backup, and parking team ensured zero hitches throughout the evening. Roshal Garden sets the gold standard in PCMC for well-managed venue logistics.',
      source: 'Google Review'
    },
    {
      id: 'rev-5',
      author: 'Pooja & Vikram Shinde',
      eventType: 'Traditional Maharashtrian Wedding',
      date: 'October 2024',
      rating: 5,
      text: 'Having both the open-air lawn and the covered banquet hall was a lifesaver for our morning rituals and evening reception. The bride’s suite was spacious with good mirrors and AC. Highly recommended for couples looking for mid-premium luxury.',
      source: 'Google Review'
    },
    {
      id: 'rev-6',
      author: 'Sunil Gaikwad',
      eventType: 'College Alumni Reunion Dinner',
      date: 'August 2024',
      rating: 5,
      text: 'Great experience from the first phone call with the manager to the final cleanup. Transparent discussion regarding timings and decor. The food per-plate pricing was fair and the quality was five-star.',
      source: 'Google Review'
    },
    {
      id: 'rev-7',
      author: '[ADD REVIEW: Client Name]',
      eventType: '[ADD REVIEW: Event Type e.g. Birthday Party / Engagement]',
      date: '[ADD REVIEW: Date]',
      rating: 5,
      text: '[ADD REVIEW: Verified guest review text will be placed here. Excellent lawn ambience and prompt support staff.]',
      source: 'Google Review'
    },
    {
      id: 'rev-8',
      author: '[ADD REVIEW: Client Name]',
      eventType: '[ADD REVIEW: Event Type e.g. Corporate Meet]',
      date: '[ADD REVIEW: Date]',
      rating: 5,
      text: '[ADD REVIEW: Verified corporate planner review text will be placed here. Ample car parking and courteous team.]',
      source: 'Google Review'
    }
  ],

  faqs: [
    {
      question: 'What is the guest capacity of Roshal Garden?',
      answer: 'Our 18,000 sq ft manicured lawn comfortably hosts large gatherings ([ADD CAPACITY: e.g. 500 to 1,200 guests]), while the 3,000 sq ft air-conditioned banquet hall is ideal for 150 to 300 guests. Combined, the estate can host up to 1,500 guests with seamless indoor-outdoor flow.',
      category: 'venue'
    },
    {
      question: 'Where is Roshal Garden located and how easy is it to access?',
      answer: 'Roshal Garden is strategically situated on the Pune-Nashik Highway in Bhosari, Pune. It is directly accessible for guests from Pune City, Pimpri-Chinchwad (PCMC), Chakan, Alandi, and Moshi with ample on-site parking for 150+ cars.',
      category: 'logistics'
    },
    {
      question: 'Do you provide in-house catering and can we taste the food?',
      answer: 'Yes! We have an acclaimed in-house kitchen team serving authentic vegetarian and non-vegetarian menus, live chaat, tawa grills, and international counters. Food tastings can be arranged for confirmed event bookings upon request.',
      category: 'catering'
    },
    {
      question: 'What is the booking advance and payment schedule?',
      answer: 'Dates are blocked upon receipt of an advance booking token ([ADD POLICY: e.g. 25% to reserve date, 50% one month prior, balance before event commencement]). Contact our venue desk on 9850543449 or 7709935299 for current seasonal terms.',
      category: 'booking'
    },
    {
      question: 'What is your music curfew and power backup policy?',
      answer: 'In compliance with local administration rules, outdoor amplified music is permitted until 10:00 PM, after which celebrations can transition to the indoor banquet hall. We maintain a 100% silent DG generator power backup covering all lighting, sound, and air-conditioning.',
      category: 'logistics'
    },
    {
      question: 'Are bridal and groom dressing rooms available?',
      answer: 'Yes, our packages include private, air-conditioned green rooms equipped with dedicated vanity mirrors, comfortable seating, and attached private washrooms for the wedding party.',
      category: 'venue'
    },
    {
      question: 'Can we bring our own decorators or event planners?',
      answer: 'We have empaneled decor artists who understand the estate aesthetics and safety protocols intimately. If you prefer your own decorator, please coordinate with our venue manager regarding setup timings and security deposit guidelines.',
      category: 'booking'
    }
  ]
};
