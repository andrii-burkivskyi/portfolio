export default function cvDenormalize(blockEntities, itemsEntities, results) {
  if (!results) { return []; }

  return results.map((result) => {
    const block = blockEntities.get(result);

    if (block.has('items')) {
      const items = block.get('items').map((item) => itemsEntities.get(item));

      return block.set('items', items);
    }

    return block;
  });
}
