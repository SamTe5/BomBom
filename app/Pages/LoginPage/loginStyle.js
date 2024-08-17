import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#fff"    
    },
    centerContainer:{
        textAlign:"center",
        marginVertical:50,
        flex:1,
        width:"80%",
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:5,
        borderColor:"yellow",
    },

    inputText:{
        width:"100%",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#bfb6bf",
        textAlign:"center",
        fontSize:20,
        marginTop:5,
        flexDirection:"row",        
    },

    logo:{
        width:100,
        height:100,
    },
    kucukLogo:{
        width:30,
        height:30,
        margin:3,
        
    },
    
})


export default styles;