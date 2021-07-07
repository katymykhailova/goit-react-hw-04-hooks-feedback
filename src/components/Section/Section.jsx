import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styles';

function Section({ children, title }) {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Section;
