import { Store } from 'Store/Store';
import { createSafeContext } from './context';

export const [storeContext, useStore] = createSafeContext<Store>('Store');
