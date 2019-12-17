export default (type) => {
  switch (true) {
    case type === 'film':
      return 'Film';
    case type === 'TV':
      return 'TV series'
  }
}
