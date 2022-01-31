import React from 'react';
import { StyleSheet, Image,Text, SafeAreaView,View, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar  backgroundColor="#000" />
      <ScrollView style={styles.scrollView}>
      <View style={{
          backgroundColor:'black',
          padding:10,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20
        }}>
          <Text style={{
            fontSize:28,
            color:'white',
            textTransform:'uppercase'
          }}>Software Developer</Text>
        </View>
        {/*1 start */}
        <View style={styles.ParentView}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./sundar.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >Sunder Pichai</Text>
                <Text style={styles.descLogo}>
                Pichai better known as Sundar Pichai is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madras, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering
                </Text>
      </View>
      {/*1 end */}
      
        {/*2 start */}
        <View style={styles.ParentViewR}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./larry.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >Larry Ellison</Text>
                <Text style={styles.descLogo}>
                Lawrence Joseph Ellison is an American businessman and investor who is the co-founder, executive chairman, chief technology officer and former chief executive officer of Oracle Corporation.
                </Text>
      </View>
      {/*2 end */}
      
        {/*3 start */}
        <View style={styles.ParentView}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./elon.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >Elon Musk</Text>
                <Text style={styles.descLogo}>
                Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO and Chief Engineer at SpaceX; early-stage investor, CEO and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.
                </Text>
      </View>
      {/*3 end */}
      
        {/*4 start */}
        <View style={styles.ParentViewR}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./lary.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >   Larry Page</Text>
                <Text style={styles.descLogo}>
                Google co-founder, Larry Page is known for inventing the search engine along with Sergey Brin. He created the innovative PageRank search engine algorithm that created the foundation of Google Search. 
                </Text>
      </View>
      {/*4 end */}
      
        {/*5 start */}
        <View style={styles.ParentView}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./mark.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >        Mark Zuckerberg</Text>
                <Text style={styles.descLogo}>
                Facebook CEO Mark Zuckerberg changed the way people interacted on the internet and maintained friendships. Facebook has connected billions of people together regardless of geographic distance. 
                </Text>
      </View>
      {/*5 end */}
      
         {/*6 start */}
         <View style={styles.ParentViewR}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./bill.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >    Bill Gates</Text>
                <Text style={styles.descLogo}>
                Microsoft co-founder Bill Gates is considered as one of the smartest computer programmers. He revolutionised the software and computing world with Microsoft. Gates continues to invest billions of dollars in solving the world's most challenging issues through his philanthropic arm.   
               </Text>
      </View>
      {/*6 end */}
      
        {/*7 start */}
        <View style={styles.ParentView}>
          <Image
                  style={styles.tinyLogo}
                  source={require('./jeff.jpg')}
                />
                <Text
                style={styles.headerLogo}
                >Jeff Bezos</Text>
                <Text style={styles.descLogo}>
                Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and computer engineer. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO
                </Text>
      </View>
      {/*7 end */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor:'red',
    width:'100%',
  },scrollView:{
      width:'100%',  
  }
  ,ParentView:{
    backgroundColor:'white',
    width:'90%',
    borderWidth:3,
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    alignContent:'center',
    borderBottomStartRadius:140,
    borderTopLeftRadius:120,
    marginBottom:10,
    borderBottomStartRadius:0,
    borderBottomEndRadius:120,
    marginLeft:20
},
ParentViewR:{
  backgroundColor:'white',
  width:'90%',
  flex: 1,
  backgroundColor: 'lightgray',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:3,
  padding:10,
  marginBottom:10,
  alignContent:'center',
  borderBottomEndRadius:100,
  borderTopLeftRadius:100,
  marginLeft:20
},
tinyLogo: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:10,
    borderColor:'yellow',
    borderWidth:5,
    marginTop:20,
    borderRadius:20,
  },
  headerLogo:{
    fontSize:32,
    justifyContent:'center',
    fontWeight:'bold',
    color:'black',
    marginTop:10,
    marginBottom:10,
    textTransform:'uppercase'
  }
  ,descLogo:{
    fontSize:18,
    width:'90%',
    textAlign: 'justify',
    textTransform:'capitalize',
    backgroundColor:'#ccc',
    padding:19,
    margin:25,
    borderRadius:50,
    marginLeft:10,
    justifyContent:'center'
  }
});

export default App;