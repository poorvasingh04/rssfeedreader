import COLORS from '../../../constants/COLORS';

const {
  BLACK,
  WHITE,
  BLUE,
} = COLORS;

const style = {
  container: {
    padding: 20,
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: BLACK,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  linkStyle: {
    color: BLUE,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
};

export default style;