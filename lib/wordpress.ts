export async function getCampusLifeData(): Promise<{
  facilities: { name: string; image: string }[];
  activities: { name: string; image: string }[];
}> {
  type CampusLifeItem = {
    title: string;
    featuredImage?: {
      node?: {
        sourceUrl?: string;
      };
    };
  };

  type CampusLifeResponse = {
    data: {
      facilities: { nodes: CampusLifeItem[] };
      activities: { nodes: CampusLifeItem[] };
    };
  };

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
    next: { revalidate: 60 },
  });

  const json: CampusLifeResponse = await res.json();

  return {
    facilities: json.data.facilities.nodes.map((f: CampusLifeItem) => ({
      name: f.title,
      image: f.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
    })),
    activities: json.data.activities.nodes.map((a: CampusLifeItem) => ({
      name: a.title,
      image: a.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
    })),
  };
}
