
import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';

class  EmoComponent extends Component {

    images=[
        {
            icon:require('../components/images/angry.png'),
            text:'Đang bực đó nhen!'
        },
        {
            icon:require('../components/images/care.png'),
            text:'Tôi nhớ bạn qué đi!'
        },
        {
            icon:require('../components/images/haha.png'),
            text:'Thật tuyệt!'
        },
        {
            icon:require('../components/images/love.png'),
            text:'Tôi đang yêu!'
        },
        {
            icon:require('../components/images/sad.png'),
            text:'Cảm thấy buồn qué đi!'
        }

    ]

    state={curentText:this.images[2].text,imageCurrent:this.images[2].icon}
    
    renderIcon =()=>{
 
        return this.images.map((item,index)=>(
            <View style={{padding:5}}  key={index}>
               <TouchableOpacity onPress={()=>this.onShowItem(item)}>
                    <Image style={styles.imagestyle} source={item.icon} />
                </TouchableOpacity>
            </View>

        ));
    }
    onShowItem=(item)=>{
        this.setState({curentText:item.text,imageCurrent:item.icon});
    }
  render(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bạn cảm thấy thế nào ?</Text>
            <Text style={styles.textcolor}>{this.state.curentText}</Text>
            <Image  style={{width:'90%',margin:20}}  source={this.state.imageCurrent} resizeMode='contain'></Image>
            <View style={styles.containeritem}>
                    {this.renderIcon()}
            </View>
        </View>
    )

  }

  
};

const styles = StyleSheet.create({
 
    container:{
        backgroundColor:'#f2f2f2',
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        padding:50
      },
    containeritem:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    imagestyle:{
        width:50,
        height:50,
        
    },
    text:{
       fontSize:20,
       fontWeight:'bold' 
    },
    textcolor:{
        fontSize:15,
        fontWeight:'bold' ,
        color:'red'
     }
});

export default EmoComponent;
