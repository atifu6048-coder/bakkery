import type { Product, Testimonial } from '../types';

export const BAKERY_PHONE_DISPLAY = '0300 1234567';
export const BAKERY_PHONE_TEL = 'tel:03001234567';
export const BAKERY_WHATSAPP_NUMBER = '923001234567';
export const BAKERY_WHATSAPP_BASE = `https://wa.me/${BAKERY_WHATSAPP_NUMBER}`;
export const BAKERY_EMAIL = 'hello@sweetcrustbakery.pk';
export const BAKERY_ADDRESS = 'Main Bazaar Road, Near City Chowk, Mardan, Pakistan';
export const BAKERY_HOURS = 'Monday to Saturday: 9:00 AM - 9:00 PM. Sunday: Closed.';

export function getWhatsAppOrderUrl(productName?: string, price?: string): string {
  if (!productName) {
    return `${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to place an order!")}`;
  }
  const message = price 
    ? `Hi Sweet Crust Bakery, I would like to order the ${productName} (${price}).`
    : `Hi Sweet Crust Bakery, I would like to order the ${productName}.`;
  return `${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const PRODUCTS: Product[] = [
  // Cakes
  {
    id: 'chocolate-fudge-cake',
    name: 'Chocolate Fudge Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    description: 'Rich, dark and super soft.',
    price: 'Rs 2,800',
    badge: 'Bestseller',
    isBestSeller: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfkaWn-8FrXBYQt4l8TH6kp86WY9yWIGjlVRFbfPVE2mjmfbzH9Hdl8mOwsL1OVXYgX1l2wru7OtaKhTHTClLVL2ujo_RLj1aeaWLYDTMLiNJdhNDIDTpOIjBZ0nDfDofuoIG8z5ZAgyZwokX1juBWD0Sob9w2i8qCA9TW8LREfWrZ5o2hTjXysGfNG94mqiWlAnnb3qyFWShan8WWzoOF59Mo3LWOTi5yMdh3Vl5su0CecPcSP8C3',
    alt: 'Rich chocolate fudge cake with deep cocoa ganache and fresh toppings',
  },
  {
    id: 'strawberry-cream-cake',
    name: 'Strawberry Cream Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    description: 'Fresh strawberries with soft cream.',
    price: 'Rs 3,200',
    badge: 'Fresh Pick',
    isBestSeller: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XWcLyiBu6392bHwmLj9NEGOcIXGKPRekiTM_Q_0WV22RAfseu52F29TObc8lr1nproIOKCgt-WvTBjXIxQCXampX9bkruF4zftFqTU9ZKOG28kfrHR5b8b8AkXcCfSJdyBO0f6qeMIRtB1ch4slxpClP0E3hwrn3wLto6D_2SoSrwLRSm4Wwzy9tF-d9lro9hRqfNxBU24ltP0RtrXvBvgcDQsOimwo6gV4mb0TYKWo_9ekE5Q_h',
    alt: 'Fresh strawberry cream cake with luscious whipped cream layers and ruby strawberries',
  },
  {
    id: 'vanilla-classic-cake',
    name: 'Vanilla Classic Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    description: 'Simple, soft and loved by everyone.',
    price: 'Rs 2,200',
    badge: 'Crowd Favorite',
    isBestSeller: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3RVotSC8ctQLWrDRtpzwNfRQ395GRwD8xK2Nye4BFy4AzN3NnraN_Emp0bygnVoJoVW2sGCguq61jheedOl87mkIqJAgcwaKpgxr5AhLUp-LvVh9MIWnQ5a08XfKzFkA6Amk44urLzWn80AKIKM_J4lKDHhPZE53ZYAlE1BNEn8X6pzd64OVM_tSuCwLkViWvoPhUgGmacFK47d6geP3ZqSHsZNikeZ2g-8Xe2ivbz6mBQ9ydS5Gl',
    alt: 'Classic soft vanilla sponge cake frosted with silky vanilla bean cream',
  },
  {
    id: 'custom-birthday-cake',
    name: 'Custom Birthday Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    description: 'Your design, your colours, your words.',
    price: 'From Rs 3,500',
    badge: 'Custom Made',
    isBestSeller: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pJkU1AJTLxAThx0sxOJ2s9i6X65oXrkJMv9R7cOMmR_YOEM2dP5XMOpew9NAlb0vwyCXFwk9iWIDOfXVMKGbqfLwcJ_bbafeuAs9rLQ0H4oRdrZeyZr1POsiAdf8h4xW0zLHfKrbbRJr7SUl8eWXFwYEz6rZIB_kA7PlkTQONSXGJd4O-ALb9tA2Wm1it2GKVq0I9wvdIyJm2kTMLiC9lsx9BMUeWzDfgzR6kZ5uqtlFgX_Voz5e',
    alt: 'Festive custom celebration birthday cake tailored with personalized design',
  },

  // Cupcakes, brownies and cookies
  {
    id: 'party-cupcakes',
    name: 'Party Cupcakes (Box of 6)',
    category: 'cupcakes-brownies-cookies',
    categoryLabel: 'Cupcakes, brownies and cookies',
    description: 'Colourful and fun for parties.',
    price: 'Rs 1,500',
    badge: 'Box of 6',
    isBestSeller: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcjj3OPhoacjsl_dtcjtoB8NedMCnSR1y5NOnnSv3CAvTFHJCFQHuhE7CThZYf9fv98M6AqmlTz3l_ufqrD12GdcYwuJJAJJKqWaCSrTqFbiJ2hWxxQT0VDkKiGcYQp4Ts94d1tenK8BoYRbTnr1P7vJTRUaFFsXqT4cAvi1FKnyiFJszZu3_r7eVKaTkjEGftmYdeuEsIkgaU1pqbqUt-x93WwLO9PhVtpKDTzDehGsF_ihZI30Fz',
    alt: 'Box of six artisanal party cupcakes with colorful swirl buttercream and sprinkles',
  },
  {
    id: 'chocolate-cupcakes',
    name: 'Chocolate Cupcakes (Box of 6)',
    category: 'cupcakes-brownies-cookies',
    categoryLabel: 'Cupcakes, brownies and cookies',
    description: 'Double chocolate happiness.',
    price: 'Rs 1,600',
    badge: 'Box of 6',
    isBestSeller: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIqRy7SUGsBUmyqSfHffvc9fiJOD35_BzGxwWswusSObzkInZt6dBfnPclzbQ_LyB4pl_z6KEN0lXK5nIF6wC89AWQ_77s6HKWV6Kzo3f_k6R_3h2WTTQu7AJiPFDf-qyHiFBHWKmKIACtiSiOLDKdViOG5ATqTMRpL9pJm0PH6gwPkGIcRt7UNpYXHcKX0Y7jO261C_N0WUH_9v2xuOLuRtcp1jswIJz_JvuB9STGfu1VIMUH_vJb',
    alt: 'Six double chocolate cupcakes with rich chocolate ganache frosting',
  },
  {
    id: 'fudge-brownies',
    name: 'Fudge Brownies (Box of 4)',
    category: 'cupcakes-brownies-cookies',
    categoryLabel: 'Cupcakes, brownies and cookies',
    description: 'Warm, gooey and full of chocolate.',
    price: 'Rs 900',
    badge: 'Box of 4',
    isBestSeller: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5OyRIXqhzDwwWmPzSVFOQdXYaD0miFbEfQD1PkaqUwyvymThaXt2wEMFGjAbnStHr753DDNZAQVPYwTp7Q-guITxCMgqsEPt5F7RqdoARpRap2W7KGFRlMHEat9SJ5hbDzZSTN86oUuSC4JDh4CxYqJidUQCGWFN-owifaxt3wsXrRuh0FR893L0JulMyC7uRPAh2zh3jLblC4rH1WeXauAoQZGTg4xa-o6WU907Bps98YyS4GFEy',
    alt: 'Four fudgy chocolate brownies with crackly tops and gooey chocolate center',
  },
  {
    id: 'butter-cookies',
    name: 'Butter Cookies (Box of 12)',
    category: 'cupcakes-brownies-cookies',
    categoryLabel: 'Cupcakes, brownies and cookies',
    description: 'Crunchy, buttery and perfect with tea.',
    price: 'Rs 800',
    badge: 'Box of 12',
    isBestSeller: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLxa92piSeIg5I4ee5GFuM2AcM4V3SWdsjvY2AODcfJ8unxxnTVDDvx1bV1kmRfSJKeRC6xhZu9TBfEjvkpic6ch0tYZeP75pR8W00v-MrE1XVExhZB_tTaadHKT6FEXtav0RLvdq6u0tTfwu-jt4zj8btlo5injrppSHHdoyk-rQeBTKyGhZdvUOYwAIwR2Q9gWmLkypaaBDZJh5E42zaGw1GTYbISShXgtvvN3HO27fIEuPrpHGs',
    alt: 'Twelve golden homemade crispy butter cookies arranged in a warm bakery box',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'fatima',
    name: 'Fatima',
    location: 'Mardan',
    text: 'The chocolate cake was so soft and fresh. My whole family loved it!',
    rating: 5,
  },
  {
    id: 'ahmed',
    name: 'Ahmed',
    location: 'Mardan',
    text: 'Best cupcakes in the city. I order every month for my office.',
    rating: 5,
  },
];
