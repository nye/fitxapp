import {type, createHash} from 'node:crypto';

export function sha256sum(data) {
  return createHash('sha256').update(data).digest('hex');
}
