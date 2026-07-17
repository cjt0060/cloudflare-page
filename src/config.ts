// Site configuration - sourced from environment variables
export const siteConfig = {
  title: "Cloud Engineer Portfolio",
  description: "Personal cloud engineering portfolio built with Astro and deployed to Cloudflare Pages",
  author: "Your Name",
  siteUrl: import.meta.env.PUBLIC_SITE_URL || "https://your-domain.pages.dev",
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || "your-turnstile-site-key",
  contactFormEndpoint: import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT || "https://formspree.io/f/your-form-id",
};

export const socialUrls = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
