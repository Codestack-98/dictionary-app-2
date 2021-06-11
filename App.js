// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './App.css';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity} from 'react-native';

// import {Header} from 'react-native-element';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        text:'',
        display:'',
      }
    };
  
getWord=(word)=>{
              var searchKeyword=word.toLowerCase()
              var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
              // console.log(url)
      
          return fetch(url).then((data) =>{
               if(data.status === 200){
                  return data.json()
               }
               else{
                return null 
                  .then((response) =>{
                   // console.log(response)
      
              var responseObject = response
                if(responseObject){
                   var wordData = responseObject.definition[0]
                   // console.log(responseObject.definition[0])
                   var defination = wordData.description
                   var lexicalCategory= wordData.wordtype
                   this.setState({
                "word" :this.state.text,
               "defination" : defination,
                "lexicalCategory" : lexicalCategory
        })
      }
          else{
                this.setState({
                "word" : this.state.text,
                "defination" : "Not Found",
            })
          }        
        })
      } 
    })
      
}
  
    render(){
       return (
       <View>
       <h1 styles={styles.Header}>Pocket Dictionary</h1>
       <div className="search">
         <input type="text" placeholder="search"/>
        <button>search</button>
        </div>
        
        <div>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Word: {" "} 
          </Text>
          <text style={{fontSize : 18}}>
            {this.state.word}
          </text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Type: {" "} 
          </Text>
          <text style={{fontSize : 18}}>
            {this.state.lexicalCategory}
          </text>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={styles.detailsTitle}>
            Definition: {""}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.definition}
          </Text>
        </View>
       </div>
       <View style={styles.outputContainer}>
         <Text style={{fontSize:20}}>
          {
          this.state.isSearchPressed && this.state.word === "Loading ..."
          ?this.state.word : ""}
         </Text>
         {
         this.state.word !== "Loading..." ?
         (
         <View styles={{justifyContent:'center',marginLeft:10 }}>
           <View>
             <Text styles={styles.detailsTitle}>Word:{""}</Text>
             <Text styles={{fontSize :18}}>{this.state.word}
             </Text>
             <View style={styles.detailsContainer}>
               <Text style={styles.detailsTitle}>
                 Type : {""}
               </Text>
               <Text style={{fontSize:18}}>{this.state.lexicalCategory}</Text>
             </View>
           </View>
       </View>
    </View>
  );
})

 
