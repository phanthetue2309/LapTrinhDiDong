import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viewContainer: {
    width: 100,
    color: 'white',
    fontWeight: 'bold',
  },

  itemContainer: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  keyContainer: {
    width: 60,
    marginRight: 30,
    marginLeft: 20,
  },

  coverContainer: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default styles;