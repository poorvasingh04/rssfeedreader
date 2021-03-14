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
  dateStyle: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '700',
  },
  titleStyle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 5,
  },
};

export default style;