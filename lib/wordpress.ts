export async function getCampusLifeData() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          facilities: campusLifeItems(where: {category: "facilities"}) {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          activities: campusLifeItems(where: {category: "activities"}) {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 }, // ISR - revalidates every 60s
  });

  const json = await res.json();
  return {
    facilities: json.data.facilities.nodes.map((f: any) => ({
      name: f.title,
      image: f.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
    })),
    activities: json.data.activities.nodes.map((a: any) => ({
      name: a.title,
      image: a.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
    })),
  };
}
