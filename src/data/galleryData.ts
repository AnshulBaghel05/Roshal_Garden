export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'receptions' | 'decor' | 'lawn' | 'corporate' | 'catering';
  categoryLabel: string;
  image: string;
  alt: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Twilight Mandap on the 18,000 sq ft Lawn',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/hero_wedding_lawn.jpg',
    alt: 'Grand open-air wedding mandap decorated with marigolds and fairy lights at Roshal Garden',
    caption: 'Majestic open-air ceremony setup under evening illumination on our manicured green lawn.'
  },
  {
    id: 'g-2',
    title: 'Royal Stage & Floral Varmala Setup',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/royal_stage.jpg',
    alt: 'Grand wedding reception stage with royal floral backdrop and velvet seating',
    caption: 'Bespoke floral architecture tailored to elevate traditional Indian marriage ceremonies.'
  },
  {
    id: 'g-3',
    title: 'Grand Evening Reception Ambience',
    category: 'receptions',
    categoryLabel: 'Receptions',
    image: '/images/evening_reception_lawn.jpg',
    alt: 'Grand evening reception on 18,000 sq ft lawn at Roshal Garden with fairy light canopy and royal stage',
    caption: 'Romantic twilight glow with warm fairy lights and banquet seating across our manicured grounds.'
  },
  {
    id: 'g-4',
    title: '3,000 sq ft Banquet Hall Setup',
    category: 'receptions',
    categoryLabel: 'Receptions',
    image: '/images/banquet_hall.jpg',
    alt: 'Air-conditioned banquet hall with chandeliers and formal banquet seating',
    caption: 'Air-conditioned luxury hall for dining, sangeet performances, or intimate ceremonies.'
  },
  {
    id: 'g-5',
    title: 'Gourmet Live Chaat & Buffet Station',
    category: 'catering',
    categoryLabel: 'Catering',
    image: '/images/buffet_dining.jpg',
    alt: 'In-house wedding catering buffet with royal brass chafing dishes and live counters',
    caption: 'Hygienic in-house culinary presentations blending Maharashtrian, North Indian & Continental delicacies.'
  },
  {
    id: 'g-6',
    title: 'Authentic Tandoor & Grill Delights',
    category: 'catering',
    categoryLabel: 'Catering',
    image: '/images/tandoor_grill.jpg',
    alt: 'Artisanal non-veg starters and tandoori platters from Roshal Garden kitchen',
    caption: 'Freshly grilled kebabs and tawa specialities prepared live before wedding guests.'
  },
  {
    id: 'g-7',
    title: 'English Garden Walkway & Floral Arches',
    category: 'decor',
    categoryLabel: 'Decor & Ambience',
    image: '/images/english_garden.jpg',
    alt: 'British-styled garden pathway with white wooden gazebos and rose blooms',
    caption: 'A touch of English elegance: manicured foliage, rose borders, and tranquil guest walkways.'
  },
  {
    id: 'g-8',
    title: 'Grand Entrance & Welcome Carving',
    category: 'decor',
    categoryLabel: 'Decor & Ambience',
    image: '/images/grand_entrance.jpg',
    alt: 'Traditional entryway illuminated with hanging brass lamps and rangoli',
    caption: 'First impressions that captivate: heritage gates greeting your guests with regal poise.'
  },
  {
    id: 'g-9',
    title: 'Corporate Conference & Gala Dinner',
    category: 'corporate',
    categoryLabel: 'Corporate Events',
    image: '/images/corporate_conference.jpg',
    alt: 'Professional seminar and corporate award evening seating inside Roshal banquet hall',
    caption: 'High-speed acoustics, presentation setups, and corporate dining in Bhosari industrial hub.'
  },
  {
    id: 'g-10',
    title: 'College Fest & Youth Gathering',
    category: 'corporate',
    categoryLabel: 'College & Gatherings',
    image: '/images/college_fest.jpg',
    alt: 'Youth celebration on open lawn with acoustic stage and festival lights',
    caption: 'Safe, sprawling venue for farewells, alumni reunions, and cultural annual days.'
  },
  {
    id: 'g-11',
    title: 'Sprawling Sunset Vista across 18,000 sq ft',
    category: 'lawn',
    categoryLabel: 'Lawn & Grounds',
    image: '/images/sunset_lawn.jpg',
    alt: 'Panoramic aerial view of lush green lawn and open sky at sunset',
    caption: 'Unobstructed skies and open-air breathing space right on the Pune-Nashik corridor.'
  },
  {
    id: 'g-12',
    title: 'Dessert Counter & Royal Sweets',
    category: 'catering',
    categoryLabel: 'Catering',
    image: '/images/dessert_sweets.jpg',
    alt: 'Traditional Indian sweets, rabdi jalebi, and pastry dessert display',
    caption: 'Pure ghee sweets and international confectionery to complete your celebration feast.'
  }
];
