const styles = {
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dayActive:{
        height:36,
        width:36,
        backgroundColor:'#0D698B',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayActiveText:{
        color:'#C4C4C4',
        fontSize:14,
    },
    dayInactive:{
        height:36,
        width:36,
        backgroundColor:'#C4C4C4',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayInactiveText:{
        color:'#0D698B',
        fontSize:14,
    }
}

export default styles;