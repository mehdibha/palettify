export const getAllTags = (objects: { tags?: string[] }[]) => {
  // Use a Set to store unique keywords
  const uniqueTags = new Set<string>();

  // Iterate through each post and add its keywords to the set
  for (const post of objects) {
    if (post.tags) {
      for (const tag of post.tags) {
        uniqueTags.add(tag);
      }
    }
  }

  // Convert the Set back to an array and return it
  return Array.from(uniqueTags);
};
