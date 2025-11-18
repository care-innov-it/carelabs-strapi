const fs = require('fs');

const API_URL = "https://proper-hug-7f40206151.strapiapp.com/api/blogs";

const TOKEN = "e185f1512806e5a74ac6ee0ac474a274eb79d3e75bbbf6f684d7f7f76b80e9b8a542ef3d84d5f99ceaade6c4ab790fae187a76c980d097f0ae419d83faff3a753478ffd6595f5b4b772d52f48db5a1a2fb1dd37c2db7eb155160bb9a701e4384a7fb51c106e00fb6f3b74a486feabb8bcb07da92f14bf49333f66e2dc847af8b";

async function seedBlogs() {
  const blogs = JSON.parse(fs.readFileSync('./scripts/blogs.json', 'utf8'));

  for (const blog of blogs) {
    const body = {
      data: {
        title: blog.title,
        slug: blog.slug,
        link: blog.link,
        pubDate: blog.pubDate,
        description: blog.description,
        content: blog.content,

        featureImage: blog.featureImage,    

        seo: {
          canonicalURL: blog.seo?.canonicalURL,
          keywords: blog.seo?.keywords,
          metaDescription: blog.seo?.metaDescription,
          metaTitle: blog.seo?.metaTitle,
          metaRobots: blog.seo?.metaRobots,
          metaViewport: blog.seo?.metaViewport,

          metaImage: {
            url: blog.seo?.metaImage?.url || null
          },

          structuredData: blog.seo?.structuredData || null,

          openGraph: {
            ogUrl: blog.seo?.openGraph?.ogUrl,
            ogType: blog.seo?.openGraph?.ogType,
            ogTitle: blog.seo?.openGraph?.ogTitle,
            ogDescription: blog.seo?.openGraph?.ogDescription,
            ogImage: {
              url: blog.seo?.openGraph?.ogImage?.url || null
            }
          }
        },
      }
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(body)
      });

      const result = await res.json();
      console.log("Blog created:", result);
    } catch (err) {
     console.error("Blog creation failed",err);
    }
  }
}

seedBlogs();

