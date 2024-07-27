export interface Member {
  id: number;
  login: string;
  avatar_url: string;
}

export interface OrganizationFormData {
  organization: string;
}

export type OrganizationFormErrors = Record<keyof OrganizationFormData, string>;

export const createDefaultOrgFormData = (): OrganizationFormData => ({
  organization: 'lemoncode',
});

export const createDefaultOrgFormErrors = (): OrganizationFormData => ({
  organization: '',
});
