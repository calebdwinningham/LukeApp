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
  card: {
    height: 50,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderRadius: 40,
    border: '1px white solid'
  },
  cardContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 25,
    width: 25,
    marginLeft: 20,
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
  due: {
    color: '#fff',
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
  task: {
    color: '#fff',
    marginLeft: '10px',
    width: '60%',
    fontWeight: 800
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