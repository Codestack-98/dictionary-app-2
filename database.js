import dictionary from './database/C-64-offlineDictionary-Database-master';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import React from 'react'

export default class App extends Component{
    constructor(){
     super();
     this.state = {
        text:'',
        display:'',
     }
    }
  getWord=(text)=>{
    var text = text.toLowerCase()
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var defination = dictionary[text]["defination"]

     this.setState({
        "word": word,
        "lexicalCategory" : lexicalCategory,
        "defination" : defination
     })
    }
    catch(err){
        alert("Sorry this word is not available for now")
        this.setState({
            'text' : '',
            'isSearchedPressed' : false
        })
    }
  }
  render(){
    return (
        <div>
            {this.state.getWord}
        </div>
    )
  }
}
