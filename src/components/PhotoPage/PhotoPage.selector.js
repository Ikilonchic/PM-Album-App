import { createSelector } from 'reselect';

const selector = createSelector(
    (globalState) => globalState.photos,
    (photos) => photos.current,
);

export default selector;
