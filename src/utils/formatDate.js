export default (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", options);
}
