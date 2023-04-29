import PropTypes from 'prop-types';
import { ContainerBtnUl, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ContainerBtnUl>
    {options.map(item => (
      <li key={item}>
        <FeedbackBtn type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </FeedbackBtn>
      </li>
    ))}
  </ContainerBtnUl>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
