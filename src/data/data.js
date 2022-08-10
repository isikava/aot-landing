import img20 from './20.jpg';
import img21 from './21.jpg';
import img22 from './22.jpg';
import img23 from './23.jpg';

import gif from './eren.gif';

const publicFolder = `${process.env.PUBLIC_URL}/img`;

export const slides = Array.from(Array(11).keys())
  .map((i) => {
    return {
      original: `${publicFolder}/${i + 1}.jpg`,
      cropped: `${publicFolder}/${i + 1}c.jpg`,
    };
  })
  .concat({
    original: gif,
    cropped: gif,
  });

export const carousel = [
  {
    id: 11,
    thumbnail: img20,
    embedId: 's6nrFDihaNg',
  },
  {
    id: 12,
    thumbnail: img21,
    embedId: 'O8-wUG7sjSk',
  },
  {
    id: 13,
    thumbnail: img22,
    embedId: 'e8IthrzLP94',
  },
  {
    id: 14,
    thumbnail: img23,
    embedId: 'EHzBhrncmac',
  },
];

export const links = [
  { name: 'facebook', url: '#home' },
  { name: 'twitter', url: '#home' },
  { name: 'instagram', url: '#home' },
  { name: 'youtube', url: '#home' },
];

export const navLinks = [
  { name: 'home', url: '#home' },
  { name: 'about', url: '#about' },
  { name: 'contacts', url: '#contacts' },
  { name: 'faq', url: '#faq' },
];

export const description = `
  The fourth and final season of the Attack on Titan anime
  television series, titled Attack on Titan: The Final Season, is
  <span>produced by MAPPA</span>, chief directed by Jun Shishido,
  and directed by Yūichirō Hayashi, replacing Tetsurō Araki and
  Masashi Koizuka respectively. Scriptwriter
  <span>Hiroshi Seko</span> took over the series composition from
  <span>Yasuko Kobayashi</span>, and Tomohiro Kishi replaced Kyōji
  Asano as character designer due to the series switching production
  studios.
`;
