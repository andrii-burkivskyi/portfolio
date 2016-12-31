import { Schema, arrayOf } from 'normalizr';

const cvBlock = new Schema('cvBlocks', { idAttribute: 'slug' });
const cvItem = new Schema('cvItems', { idAttribute: 'slug' });

cvBlock.define({
  items: arrayOf(cvItem)
});

export const CV_BLOCK = cvBlock;
export const CV_BLOCKS_LIST = arrayOf(cvBlock);
