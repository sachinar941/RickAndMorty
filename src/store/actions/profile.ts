import {PROFILE} from './../type';
import {getEpisode} from 'rickmortyapi';
import {Profile} from '../../utils/interface';

export function getEpisodes(id: number, list: number[]) {
  return function (dispatch: any, getState: any) {
    const profiles = getState()?.profileReducer?.profiles;
    const exists = profiles.filter((el: Profile) => {
      return el.id === id;
    });
    if (exists && exists.length > 0) {
      return exists[0].episodes;
    } else {
      return getEpisode(list).then((resp: any) => {
        const edisodes =
          resp?.data?.length > 0
            ? resp.data
            : resp?.data?.id
            ? [resp.data]
            : [];
        dispatch({
          type: PROFILE,
          profiles: [...profiles, ...[{id, episodes: edisodes}]],
        });
        return edisodes;
      });
    }
  };
}
