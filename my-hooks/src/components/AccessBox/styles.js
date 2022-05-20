const styles = {
    box:{
        position:'relative',
        width: '90%',
        height:70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#E5E5E5',
        borderRadius: 10,
        marginBottom:8,
        border:'none'
    },
    icon:{
        fontSize: '48px',
        color: '#0D698B' ,
        marginLeft: 12,
    },
    iconEdit:{
        position: 'absolute',
        fontSize: '24px',
        color: '#0D698B' ,
        right:16,
    },
    column:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 12,
    },
    boxTitle:{
        fontSize:14,
        fontWeight: 'bold',
        color:'#050533',
        marginBottom:0,
        textAlign: 'left',
    },
    boxSubtitle:{
        fontSize:12,
        color:'#050533',
        fontWeight: 'normal',
        marginTop: 4,
        textAlign: 'left',
    }
}

export default styles;