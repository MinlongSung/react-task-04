import * as api from './api/api';
import * as VM from './member-list.vm';
import { mapMemberListToVM } from './member-list.mappers';

export const getMembers = (org: string): Promise<VM.Member[]> => {
  return api.getMembers(org).then(mapMemberListToVM);
};
