import img20 from './assets/20c.jpg';
import img21 from './assets/21c.jpg';
import img22 from './assets/22c.jpg';
import img23 from './assets/23.jpg';

import gif from './assets/eren.gif';

export const slides = Array.from(Array(11).keys())
  .map((i) => {
    return {
      original: `${process.env.PUBLIC_URL}/img/${i + 1}.jpg`,
      cropped: `${process.env.PUBLIC_URL}/img/${i + 1}c.jpg`,
    };
  })
  .concat({
    original: gif,
    cropped: gif,
  });

export const carousel = [
  {
    thumbnail: img20,
    embedId: 's6nrFDihaNg',
  },
  {
    thumbnail: img21,
    embedId: 'e8IthrzLP94',
  },
  {
    thumbnail: img22,
    embedId: 'EHzBhrncmac',
  },
  {
    thumbnail: img23,
    embedId: 'SlNpRThS9t8', //fJm2nD3cv_4
  },
];

export const links = [
  { name: 'facebook', url: '#home' },
  { name: 'twitter', url: '#home' },
  { name: 'instagram', url: '#home' },
  { name: 'youtube', url: '#home' },
];
