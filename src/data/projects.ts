/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectItem } from '../types';

import rocketflixImg from '../assets/projects/rocketflixEn.png';
import spotifyImg from '../assets/projects/spotify.png';
import igniteFeedImg from '../assets/projects/igniteFeed.png';
import devLinksImg from '../assets/projects/devLinks.jpg';
import igniteLdsImg from '../assets/projects/ignite-lds.png';
import loginPageImg from '../assets/projects/loginPage.png';
import portfolioImg from '../assets/projects/portfolio.png';
import countdownImg from '../assets/projects/countdown.png';

export const projectsData: ProjectItem[] = [
  // Live Projects
  {
    id: 'rocketflix',
    title: 'Rocketflix',
    description: "A movie finder app that randomly recommends a film and displays its details at the click of a button.",
    tags: ['HTML', 'SASS', 'Javascript'],
    isLive: true,
    image: rocketflixImg,
    link: 'https://mellcosta.github.io/desafiosRocketseat/avancado/rocketflix/rocketflix.html'
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    description: "This is a clone of Spotify website made using Tailwind and Next.js",
    tags: ['Next.js', 'Tailwind', 'Typescript'],
    isLive: true,
    image: spotifyImg,
    link: 'https://spotify-cyan-chi.vercel.app/'
  },
  {
    id: 'ignite-feed',
    title: 'Ignite Feed',
    description: "A simple social media feed simulator featuring comment posting, liking, and deleting features.",
    tags: ['React.js', 'Vite', 'Date-fnt', 'Phosphor-react', 'React DOM'],
    isLive: true,
    image: igniteFeedImg,
    link: 'https://spotify-cyan-chi.vercel.app/'
  },
  {
    id: 'devlinks',
    title: 'Dev Links',
    description: 'DevLinks is a link aggregator designed to be used as an online business card.',
    tags: ['Figma', 'HTML', 'CSS', 'Javascript'],
    isLive: true,
    image: devLinksImg,
    link: 'https://mellcosta.github.io/DevLinks/'
  },
  {
    id: 'ignite-lab-design-system',
    title: 'Ignite Lab Design System',
    description: 'A design system developed at Ignite Lab marathon 3 by Rocketseat',
    tags: ['Typescript', 'Postcss', 'Autoprefixer', 'Storybook', 'Tailwind'],
    isLive: true,
    image: igniteLdsImg,
    link: 'https://mellcosta.github.io/ignite_lab_design_system/?path=/story/components-button--default'
  },
  {
    id: 'login-page',
    title: 'Login Page',
    description: 'This a simulation of a login page.',
    tags: ['HTML', 'CSS', 'Javascript'],
    isLive: true,
    image: loginPageImg,
    link: 'https://mellcosta.github.io/desafiosRocketseat/intermediario/login/login.html'
  },
  {
    id: 'portfolio-previous',
    title: 'Portfolio',
    description: 'The previous portfolio site I designed and developed by my own.',
    tags: ['React.js', 'Next.js', 'Tailwind', 'Figma'],
    isLive: true,
    image: portfolioImg,
    link: 'https://portfolio-mellcosta.vercel.app/'
  },
  {
    id: 'countdown',
    title: 'Countdown',
    description: 'This is a countdown challenge project promoted by Rocketseat.',
    tags: ['HTML', 'CSS', 'Javascript'],
    isLive: true,
    image: countdownImg,
    link: 'https://mellcosta.github.io/desafiosRocketseat/intermediario/countdown/countdown.html'
  },

  // In Progress Projects
  {
    id: 'menio',
    title: 'Menio',
    description: 'A digital QR-code menu SaaS for restaurants featuring real-time item management and ordering.',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'Figma'],
    isLive: false,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'toka',
    title: 'Toka',
    description: 'A minimalist interactive workspace to track daily habits and manage workflow timelines.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind'],
    isLive: false,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80'
  }
];
