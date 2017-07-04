import PropTypes from 'prop-types';

const CUSTOM_PROPS = {
  FLOW: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default CUSTOM_PROPS;
