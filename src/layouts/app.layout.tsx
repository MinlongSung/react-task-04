import React from 'react';

import { Navbar } from '@/common/components/navbar.component';
import lemoncodeIcon from '../common/assets/lemoncode-icon.png';

import { switchRoutes } from '../router';
const links = [
  {
    name: 'Github members',
    url: switchRoutes.root,
  },
  {
    name: 'Rick and Morty Api',
    url: switchRoutes.rickAndMorty,
  },
];
export const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="layout-app-container">
      <Navbar
        logo={lemoncodeIcon}
        pageLinks={links}
        rootUrl={switchRoutes.root}
      ></Navbar>
      {children}
    </div>
  );
};
