export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "github", href: "https://github.com/yourusername", label: "GitHub" },
  { platform: "linkedin", href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { platform: "twitter", href: "https://twitter.com/yourusername", label: "Twitter" },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const footerPages: FooterLink[] = navLinks.slice(0, 6);

export const footerResources: FooterLink[] = [
  { label: "RSS Feed", href: "/rss.xml" },
  { label: "Sitemap", href: "/sitemap-index.xml" },
];
