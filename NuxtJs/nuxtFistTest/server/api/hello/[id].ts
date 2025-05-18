import data from "../blogs.json";

export default defineEventHandler(async (e) => {
  const id = Number(e.context.params?.id);
  const blog = data.find((item) => item.id === id);

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(blog);
    }, 1000);
  });
});
