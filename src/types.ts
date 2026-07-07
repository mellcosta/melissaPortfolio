/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'pt' | 'en' | 'es' | 'ru';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    tech: string;
    experience: string;
    events: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    title: string;
    bio: string;
    cta: string;
    typingRoles: string[];
    viewResume: string;
  };
  about: {
    title: string;
    subtitle: string;
    journeyTitle: string;
    journeyText1: string;
    journeyText2: string;
    communityTitle: string;
    communityText: string;
    challengeTitle: string;
    challengeText: string;
    personalTitle: string;
    personalText: string;
  };
  tech: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      tooling: string;
      learning: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
  };
  events: {
    title: string;
    subtitle: string;
    viewOn: string;
    viewPost: string;
  };
  projects: {
    title: string;
    subtitle: string;
    liveTitle: string;
    inProgressTitle: string;
    viewProject: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    button: string;
  };
  footer: {
    builtBy: string;
    attribution: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EventItem {
  id: string;
  name: string;
  date: string;
  description: string;
  tagKey: string;
  image: string;
  platformName: string;
  platformLink: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isLive: boolean;
  image: string;
  link?: string;
}
