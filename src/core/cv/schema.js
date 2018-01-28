import { Schema, arrayOf } from 'normalizr';
import { DEFAULT_ARRAY } from 'utils/constants';

const cvBlock = new Schema('cvBlocks', { idAttribute: 'slug' });
const cvItem = new Schema('cvItems', { idAttribute: 'slug' });

cvBlock.define({
  items: arrayOf(cvItem)
});

export const CV_BLOCK = cvBlock;
export const CV_BLOCKS_LIST = arrayOf(cvBlock);

export default function cvDenormalize(blockEntities, itemsEntities, results) {
  if (!results) { return DEFAULT_ARRAY; }

  return results.map((result) => {
    const block = blockEntities[result];

    if (block.items) {
      const items = block.items.map((item) => itemsEntities[item]);

      return { ...block, items };
    }

    return block;
  });
}
