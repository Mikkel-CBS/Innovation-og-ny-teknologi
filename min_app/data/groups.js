// Eksempelgrupper, som vises for kunder i prototypen.
export const GROUPS = [
  // Eksempel på en gruppe, der næsten har nået sit kundemål.
  {
    id: 'windows',
    service: 'Vinduespudsning',
    icon: 'sparkles-outline',
    area: 'Valby',
    participants: 7,
    target: 10,
    discount: '20%',
    price: 'Fra 249 kr.',
    deadline: 'Om 4 dage',
    description: 'Saml naboerne og få pudset vinduerne til en bedre pris.',
  },
  // Eksempel på en mindre gruppe med længere tid til deadline.
  {
    id: 'lawn',
    service: 'Græsslåning',
    icon: 'leaf-outline',
    area: 'Frederiksberg',
    participants: 4,
    target: 8,
    discount: '15%',
    price: 'Fra 199 kr.',
    deadline: 'Om 6 dage',
    description: 'Få en lokal græsplæneekspert ud, mens I deler rabatten.',
  },
  // Eksempel på en gruppe tæt på deadline.
  {
    id: 'hedge',
    service: 'Hækklipning',
    icon: 'cut-outline',
    area: 'Hvidovre',
    participants: 9,
    target: 12,
    discount: '25%',
    price: 'Fra 399 kr.',
    deadline: 'Om 2 dage',
    description: 'Nær deadline. Tre pladser mere udløser den bedste deal.',
  },
];
