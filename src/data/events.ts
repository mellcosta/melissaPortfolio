/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventItem } from '../types';

import devfest24Img from '../assets/events/devfest-2024.jpg';
import devfest25Img from '../assets/events/devfest-2025.jpg';
import breakThePatternImg from '../assets/events/break-the-pattern.jpg';
import googleCloudImg from '../assets/events/google-cloud.jpg';
import wowfestImg from '../assets/events/wowfest-2026.jpg';
import independenceImg from '../assets/events/independance-day.jpg';
import peaceDayImg from '../assets/events/peace-day.jpg';
import serveDayImg from '../assets/events/serve-day.jpg';
import microsoftImg from '../assets/events/microsoft.jpg';
import paintTheVerseImg from '../assets/events/paint-the-verse.jpg';

export const eventsData: EventItem[] = [
  {
    id: 'gdg-devfest-vizag-2024',
    name: 'GDG DevFest Vizag 2024',
    date: 'Dec 2024',
    description: 'Attended the annual developer festival in Visakhapatnam, with tech tracks spanning AI, Web, Cloud, and career-oriented panels for over 1,000 attendees.',
    tagKey: 'attendee',
    image: devfest24Img,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_devfest2024-gdgvizag-technology-activity-7271892509767667712-VQ-z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'gdg-devfest-vizag-2025',
    name: 'DevFest Vizag 2025',
    date: 'Nov 2025',
    description: 'Volunteered at the annual developer festival at GITAM University, supporting sessions on Agentic AI and Google Cloud skills for the local tech community.',
    tagKey: 'volunteer',
    image: devfest25Img,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_devfestvizag-gdgvizag-volunteerexperience-activity-7391464046509801472-9uvi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'break-the-pattern-2026',
    name: 'Break the Pattern — IWD 2026',
    date: 'May 2026',
    description: 'Attended the International Women\'s Day 2026 community event, part of the global Women Techmakers "Break the Pattern" campaign challenging bias in tech.',
    tagKey: 'attendee',
    image: breakThePatternImg,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_womenintech-ai-learning-activity-7455478356659204096-ZSw8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'google-ai-hub-groundbreaking-2026',
    name: 'Google Cloud AI Hub',
    date: 'May 2026',
    description: 'Attended the foundation-stone ceremony for Google\'s $15B AI data center hub in Tarluvada, Visakhapatnam — set to become one of Asia\'s largest, with full completion expected by 2028.',
    tagKey: 'visitor',
    image: googleCloudImg,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_googlecloud-ai-cloudcomputing-activity-7466018173989883904-9h3U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'microsoft-online-event-tbd',
    name: 'Microsoft AI Skills Fest',
    date: 'Jun 2026',
    description: 'Attended the Microsoft AI Skills Fest online developer event, exploring advanced AI tooling, copilot integrations, and cognitive services.',
    tagKey: 'attendee',
    image: microsoftImg,
    platformName: 'Microsoft Reactor',
    platformLink: 'https://developer.microsoft.com/en-us/reactor/' // CONFIRM
  },
  {
    id: 'paint-the-verse-2026',
    name: 'Workshop Paint the Verse',
    date: 'Jun 2026',
    description: 'Participated in the creative "Paint the Verse" workshop, blending art, poetry, and modern digital mediums to express storytelling and artistic design.',
    tagKey: 'attendee',
    image: paintTheVerseImg,
    platformName: 'Instagram',
    platformLink: 'https://www.instagram.com/p/DZ_7mwxEyDH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'wow-fest-2026',
    name: 'WOW Fest 2026',
    date: 'Jul 2026',
    description: 'Volunteered at GDG Vizag\'s flagship annual conference, hosted at GITAM University, supporting sessions on the latest Google technologies and the developer ecosystem.',
    tagKey: 'volunteer',
    image: wowfestImg,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_gdgvizag-wow2026-techcommunity-activity-7479502502976188417-PlH6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'angola-independence-2025',
    name: "Angola's National Independence",
    date: 'Nov 2025',
    description: 'Celebrated the historical milestone of Angola\'s National Independence, reflecting on sovereignty, cultural heritage, and our journey towards future growth.',
    tagKey: 'volunteer',
    image: independenceImg,
    platformName: 'Instagram',
    platformLink: 'https://www.instagram.com/p/DR40l5Ik__O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'angola-peace-day-2026',
    name: "Angola's Peace Day",
    date: 'Apr 2026',
    description: 'Honored Angola\'s Peace and National Reconciliation Day, highlighting stability, social integration, and the shared commitment to sustainable national development.',
    tagKey: 'volunteer',
    image: peaceDayImg,
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/posts/melissa-costa-71300a209_angola-4deabril-diadapa-activity-7450829555784765440-GMJ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTcV38BVGjk1xLHf7Iw93MUBCFbHN1TeKo'
  },
  {
    id: 'serve-day-2025',
    name: 'Serve Day',
    date: 'Mar 2025',
    description: 'Dedicated time to volunteering in community development and cleanup, supporting local social action projects to create immediate positive impact.',
    tagKey: 'volunteer',
    image: serveDayImg,
    platformName: 'Serve Day Community',
    platformLink: 'https://www.google.com/search?q=Serve+Day+Volunteering'
  }
];