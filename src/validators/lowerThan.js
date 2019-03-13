import { ref, withParams } from './common';

export default lowerEqualThan => withParams(
  { type: 'lowerThan', 'let': lowerEqualThan, }, 
  (value, parentVm) => value < ref(lowerEqualThan, this, parentVm)
);
