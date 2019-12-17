export default (minutes) => {
  const hours = Math.floor(minutes / 60);

  if (hours) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}min`;
  }

  return `${minutes % 60}min`;
}
