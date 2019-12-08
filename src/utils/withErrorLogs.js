export default async (callback) => {
  try {
    return await callback();
  } catch (error) {
    console.log("ERROR LOG:", error)
  }
};