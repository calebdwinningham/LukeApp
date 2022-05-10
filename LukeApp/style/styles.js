import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  arrow: {
    color: '#fff',
    width: '5%',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '20px',
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
    fontSize: '20px',
  },
  home: {
    backgroundColor: '#002465',
    width: '100%',
    height: '100%',
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
    marginTop: '20px',
  },
});

export default styles;