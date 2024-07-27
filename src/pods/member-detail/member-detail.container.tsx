import React from 'react';
import { MemberDetailEntity } from './member-detail.vm';
import { MemberDetail } from './member-detail.component';
import { getMemberDetail } from './member-detail.repository';

interface Props {
  login: string;
  onSelect: (login: string) => void;
}

export const MemberDetailContainer: React.FC<Props> = (props) => {
  const { login, onSelect } = props;
  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    getMemberDetail(login).then(setMember);

    //* mirar responsives y accesibilidad
    //* poner login/logout, con validación + protección de ruta
    //* probar testing
    // todo: api rick y morty, use debounce, detalle del personaje seleccionado
  }, [login]);

  return <MemberDetail member={member} onSelect={onSelect}/>;
};
