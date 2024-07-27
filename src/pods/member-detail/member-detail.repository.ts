import * as api from './api/api';
import * as VM from './member-detail.vm';
import { mapMemberDetailToVM } from './member-detail.mapper';

export const getMemberDetail = (
  login: string
): Promise<VM.MemberDetailEntity> => {
  return api.getMemberDetail(login).then(mapMemberDetailToVM);
};
