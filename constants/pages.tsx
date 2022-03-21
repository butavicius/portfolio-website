// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Simas Butavičius',
    description:
      'theBag is a multipurpose template made by Nextjs and MUI v5 which can be used for Portfolios, Resumes, CVs, and Personal websites.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as a designer and photographer in this page.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
  longStory: {
    title: 'Long story of my life',
    description:
      'This is the long "about me" version',
  },
};

export default pages;
