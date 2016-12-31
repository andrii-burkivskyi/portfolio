import { Schema, arrayOf } from 'normalizr';

const project = new Schema('projects', { idAttribute: 'slug' });

export const PROJECT = project;
export const PROJECT_LIST = arrayOf(project);
