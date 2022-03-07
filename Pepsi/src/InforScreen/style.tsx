import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    nav_style: {
        width: '100%',
    },
    text_home_style: {
        marginTop: width * 0.135,
        alignSelf: 'center'
    },
    reward_home_style: {
        alignSelf: 'center',
        marginTop: width * 0.011,
    },
    text_register: {
        alignSelf: 'center',
        
    },
    text_register_style: {
        alignSelf: 'center',
        marginTop: width * 0.065,
    },
   
    blue_text_style: {
        
        color: '#84E5FF',
        fontWeight: 'bold',
        lineHeight: 19.2,
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: width * 0.035,

    },

    white_text_style: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
        color: '#FFFFFF',
        marginTop: height * 0.02,

    },
    input_area: {
        backgroundColor: '#004F9D',
        marginLeft: width * 0.032,
        marginRight: width * 0.032,
    
    },
    contain_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputCity: {
        borderColor: '#00355A',
        borderWidth: 1,
        borderRadius: 4,
        
        color: '#00355A',
        marginTop: height * 0.01,

    },
    contain_content_style: {
        justifyContent: 'center',
        marginLeft: width * 0.035,
        marginRight: width * 0.035,
        
    },
    input_style: {
        
        fontSize: 12,
        lineHeight: 14,
        color: 'black',
        backgroundColor: '#FFFFFF',
        width: width / 2.3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00355A',
        paddingLeft: width * 0.01,
    },
   
   
    input_party: {
        
        fontSize: 12,
        lineHeight: 14,
        color: 'black',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00355A',
        paddingLeft: width * 0.01,
    },
    text_view: {
        color: 'black',
        fontSize: 12,marginLeft:10,
        
       

    },
    view_style: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingLeft: width * 0.01,
        lineHeight: 14,
        height:width*0.1,
        justifyContent:'center'
    },
    btn_register: {
        alignSelf: 'center',
        marginTop: 10,
    },
    iconStyle: {
        position: "absolute",
        left:5,
        top:8,
        alignItems:"center",
    },
});

export default styles