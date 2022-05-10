import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  arrow: {
    color: '#fff',
    width: '5%',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    color: '#fff',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 20,
  },
  fullScreen: {
    backgroundColor: '#002465',
    width: '100%',
    height: '100%',
  },
  home: {
    backgroundColor: '#002465',
    width: '100%',
    height: '100%',
    backgroundColor: '#002465',
  },
  main: {
    width: '100%',
    height: '100%',
  },
  taskHeader: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default styles;