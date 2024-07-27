import * as AM from './api/api.model';
import * as VM from './member-list.vm';

export const mapMemberListToVM = (data: AM.Member[]): VM.Member[] => {
  try {
    return data.map((item) => mapMemberToVM(item));
  } catch (e) {
    console.log(e, 'organization not found');
    return [];
  }
};

const mapMemberToVM = (data: AM.Member): VM.Member => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
});
