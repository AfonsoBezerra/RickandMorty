import { fetcher } from '@services/fetchers';

export const category = {
  characterData: 'character',
  locationData: 'location',
  episodeData: 'episode',
};

const requestsApi = {
  getPageList: (categorys: string, page: number) => {
    const url = `${categorys}/?page=${page}`;
    return fetcher.get(url);
  },
  getSingle: (categorys: string, id: number) => {
    const url = `${categorys}/${id}`;
    return fetcher.get(url);
  },

  getFilter: (categorys: string, filter: string) => {
    const url = `${categorys}/${filter}`;
    return fetcher.get(url);
  },
};

export default requestsApi;
