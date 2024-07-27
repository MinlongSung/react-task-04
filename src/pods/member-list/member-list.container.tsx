import React from 'react';
import {
  Member,
  OrganizationFormData,
  createDefaultOrgFormData,
  createDefaultOrgFormErrors,
} from './member-list.vm';
import { MemberList } from './member-list.component';
import { getMembers } from './member-list.repository';
import { TextField } from '@/common/components/text-field.component';
import { Button } from '@/common/components/button.component';
import { Alert } from '@/common/components/alert.component';
import { formValidation } from './member-list.validations';

interface Props {
  onSelect: (login: string) => void;
}

export const MemberListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [formData, setFormData] = React.useState(createDefaultOrgFormData);
  const [members, setMembers] = React.useState<Member[]>([]);
  const [errors, setErrors] = React.useState(createDefaultOrgFormErrors);
  const [isLoading, setIsLoading] = React.useState(false);

  const hasErrors = Object.keys(errors).some((x) => errors[x] !== '');

  const loadOrganizationMembers = () => {
    if (formData.organization.length === 0) {
      return;
    }

    setIsLoading(true);
    getMembers(formData.organization).then((members) => {
      setCurrentPage(1);
      setMembers(members);
      setIsLoading(false);
    });
  };

  const handlePagination = (pageSelected: number) => {
    setCurrentPage(pageSelected);
  };

  const handleChange =
    (field: keyof OrganizationFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formValidation
        .validateField(field, e.target.value)
        .then((validationResult) => {
          const errorMessage =
            typeof validationResult.message === 'string'
              ? validationResult.message
              : '';

          setErrors({
            ...errors,
            [field]: errorMessage,
          });
        });

      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadOrganizationMembers();
  };

  React.useEffect(() => {
    loadOrganizationMembers();
  }, []);

  return (
    <>
      <h3>Github members: </h3>
      <form onSubmit={handleSubmit} className="form-members">
        <TextField
          name="organization"
          value={formData.organization}
          onChange={handleChange('organization')}
          id="outlined-basic"
          label="Organization"
          variant="outlined"
          size="small"
          helperText={errors.organization}
          error={Boolean(errors.organization)}
        />
        <Button type="submit" disabled={hasErrors} variant="contained">
          Buscar
        </Button>
      </form>

      {(!isLoading && members.length === 0) && (
        <Alert severity="info" sx={{ my: 1 }}>No se ha encontrado miembros.</Alert>
      )}

      {(isLoading || members.length > 0) && (
        <MemberList
          members={members}
          onSelect={onSelect}
          currentPage={currentPage}
          onPagination={handlePagination}
        />
      )}
    </>
  );
};
