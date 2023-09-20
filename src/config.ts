import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://akrm.it/",
  author: "Akram",
  desc: "Discover the world of frontend engineering with a dedicated Frontend Engineer, showcasing web development projects, HTML, CSS, and JavaScript expertise for seamless user experiences",
  title: "Akram's Blog",
  ogImage: "Akram.png",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/akramsmahmoud",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akram-mahmoud/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:akrammahmoud.web@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/akrm_fe",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
];
