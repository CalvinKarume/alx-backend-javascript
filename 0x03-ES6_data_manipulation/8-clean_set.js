export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const newSet = [...set].filter(item => item && item.startsWith(startString)).map(item => item.slice(startString.length));

  return newSet.join('-');
}

