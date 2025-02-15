const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Karim Reda",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Penetration Tester",
    bio: "Penetration tester with about 4 years experience in various domains such as web apps penetration testing, mobile apps penetration testing and network & infrastructure penetration testing",
    email: "karim.reda476@gmail.com",
    linkedin: "karim-reda-326396150",
    github: "karimreda-99",
    instagram: "karimreda001",
  },
  projects: [
    {
      name: `tech-side`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "tech-side",
    description: "welcome to tech-side!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://tech-side.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Hacking", "Penetration testing", "Cybersecurity", "Red Team", "Blue Team", "Web", "Security", "Cyber crime"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "karimreda-99/tech-side",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
