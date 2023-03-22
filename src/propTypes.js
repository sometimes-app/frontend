import PropTypes from 'prop-types';

export const NavigationPropType = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  setParams: PropTypes.func.isRequired,
  state: PropTypes.shape({
    key: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
    path: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
}).isRequired;
