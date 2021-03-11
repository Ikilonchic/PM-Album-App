import { createSelector } from 'reselect';

const selector = createSelector(
    (globalState) => globalState.photos,
    (photos) => photos.all,
);

export default selector;
