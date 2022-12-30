export const navLinks = [
    { 
      name: "Home", 
      path: "/",
    },
    {
      name: "About Us",
      path: "/about/[slug]",
      query: {
        slug: 'my-post'
      }
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];