import React, { CSSProperties } from 'react';

interface Props {
  sections: string[];
  customStyles: CSSProperties;
}

export const ListHeaderComponent: React.FC<Props> = (props) => {
  const { sections, customStyles } = props;

  return (
    <section className="list-header" style={customStyles}>
      {sections.map((section) => (
        <div key={section}>{section}</div>
      ))}
    </section>
  );
};
