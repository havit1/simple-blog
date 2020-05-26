import React from 'react';
import { StylesProvider } from '@material-ui/styles';

import {
  CustomLink,
  CustomList,
  CustomListItem,
  CustomListItemText,
} from './Sections.styles';

import { Wrapper, CenteredPaper } from '../../styles/common';

const Sections = () => {
  const [sections, setSections] = React.useState([
    { name: 'Section 1', id: 1 },
    { name: 'Section 2', id: 2 },
    { name: 'Section 3', id: 3 },
  ]);

  return (
    <Wrapper>
      <CenteredPaper>
        <CustomList component='ul'>
          {sections.map((section) => (
            <StylesProvider key={section.id} injectFirst>
              <CustomListItem button>
                <CustomLink to={`sections/${section.id}/1`}>
                  <CustomListItemText>{section.name}</CustomListItemText>{' '}
                </CustomLink>
              </CustomListItem>
            </StylesProvider>
          ))}
        </CustomList>
      </CenteredPaper>
    </Wrapper>
  );
};

export default Sections;
