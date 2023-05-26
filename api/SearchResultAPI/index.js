import axios from '@/api/index';

export const SearchResultAPI = {
  getSearchResult(ordering, activePage, pageSize, searchInput) {
    const url = `bloggers/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`;

    return axios.get(url);
  },
};
