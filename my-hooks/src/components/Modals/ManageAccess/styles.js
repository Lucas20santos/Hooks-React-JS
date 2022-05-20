const styles = {
    box:{
        backgroundColor:'#E5E5E5',
        height:'auto',
        width:'90%',
        marginLeft:'5%',
        marginTop:'20%',
        borderRadius:10,
        paddingBottom:16,
    },
    header: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', 
    },
    title: {
        fontSize:16,
        color:'#050533',
        fontWeight: '700',
        marginTop:20,
    },
    closeButton: {
        position: 'absolute',
        backgroundColor:'transparent',
        border:'none',
        top:16,
        right:16,
        padding:0,
    },
    closeIcon:{
        fontSize:32,
        color:'#050533'
    },
    content:{
        width:'100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:16,
    },
    row:{
        width:'80%',
        display: 'flex',
        flexDirection:'row',
    },
    column:{
        display: 'flex',
        flexDirection:'column',
        width: '50%',
    },
    label:{
        fontSize:16,
        color:'#050533',
        fontWeight: '700',
    },
    text:{
        fontSize:16,
        color:'#050533',
        fontWeight: '400',
        marginTop:0,
    },
    explanation:{
        fontSize:14,
        color:'#050533',
        fontWeight: '400',
        marginTop:16,
        marginBottom:24,
        textAlign: 'center',
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
        marginBottom:8,
        border:'none',
    },

}

export default styles;