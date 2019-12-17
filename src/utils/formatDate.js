export default (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(date);
  console.log(newDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }))
  return newDate.toLocaleDateString("en-US", options);
}
