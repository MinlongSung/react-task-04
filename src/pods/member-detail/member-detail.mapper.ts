import * as AM from './api/api.model';
import * as VM from './member-detail.vm';

export const mapMemberDetailToVM = (
  data: AM.MemberDetail
): VM.MemberDetailEntity => {
  try {
    return mapMemberToVM(data);
  } catch (e) {
    console.log(e, 'error retrieving the user');
  }
};

const mapMemberToVM = (data: AM.MemberDetail): VM.MemberDetailEntity => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
  company: data.company,
  bio: data.bio,
});
