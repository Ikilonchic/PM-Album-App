import { createSelector } from 'reselect';

const selector = createSelector(
    (globalState) => globalState.albums,
    (albums) => albums.current,
);

export default selector;
