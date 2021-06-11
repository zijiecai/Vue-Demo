import {
  UPDATE_TITLE,
  UPDATE_MENUSHOW,
  UPDATE_LOADINGSHOW,
  UPDATE_NEWS
} from './mutations-types';

export default {
  [UPDATE_TITLE](state, title) {
    state.headerTitle = title;
  },
  [UPDATE_MENUSHOW](state) {
    state.menuShow = !state.menuShow;
  },
  [UPDATE_LOADINGSHOW](state) {
    state.loadingShow = !state.loadingShow;
  },
  [UPDATE_NEWS](state) {
    state.news = 0;
  }
}