const styles = {
    body:{
        backgroundColor:'#0D698B',
        height:'100vh',
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },
    titleArea: {
        flexDirection:'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    title:{
        color:'#FFFFFF',
        marginLeft:16,
        fontSize:30,
    },
    subtitle:{
        color:'#FFFFFF',
        marginLeft:16,
        fontSize:16,
        marginBottom:16,
    },
    content:{
        height:'100%',
        backgroundColor:'#F2F1E8',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        paddingTop:30,
    },
    button:{
        width: 285,
        height: 40,
        background:'#0D698B',
        boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        color: '#F2F1E8',
        textDecoration: 'none',
        fontWeight:'700',
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:36,
        marginBottom:16,
        border:'none',
    },
}

export default styles;