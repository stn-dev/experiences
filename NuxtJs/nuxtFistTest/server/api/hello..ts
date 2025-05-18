import data from "./blogs.json";

export default defineEventHandler(async (event) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
});
