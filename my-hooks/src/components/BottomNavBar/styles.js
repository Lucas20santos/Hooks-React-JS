const styles = {
  bottomNav: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#232323'
  },
  icon:{
    fontSize: '30px', 
    color:'#F2F1E8',
  },
  iconActive:{
    fontSize: '30px', 
    color:'#0D698B',
  },
  item:{
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:8,
    textDecoration: 'none',
  },
  itemLabel:{
    color:'#F2F1E8',
    fontSize:10,
    fontWeight:'bold',
  },
  itemLabelActive:{
    color:'#0D698B',
    fontSize:10,
    fontWeight:'bold',
  }
  }
  export default styles;