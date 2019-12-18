export default (ratedBy, user) => {
  console.log("INFO", ratedBy, user)
  if (!user || !ratedBy.length) return null;

  const foundUser = ratedBy.find(({ id }) => id === user.id);
  return foundUser ? foundUser.pivot.rating : null;
}