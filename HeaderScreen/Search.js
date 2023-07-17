import {
    StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity,
    ImageBackground, ScrollView, FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Data} from './dummy';
import SearchHeader from './SearchHeader';
import DataCard from './DataCard';

const Search = () => {
 const [mydata,setMydata]= useState(Data);
  const handleSearch=(value)=>{
    if(!value.length) return setMydata(Data);

    const filteredData=Data.filter((item)=>
    item.title.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length){
        setMydata(filteredData);
    }
    else{
        setMydata(Data);
    }

  }
   
    return (
        
 <SafeAreaView style={{ flex: 1 }}>
<ScrollView>
<View style={{ flex: 1 }}>
    <View style={{ zIndex: 0 }}>
        <FlatList
            data={mydata}
            renderItem={({ item }) =><DataCard data={item}/> }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<SearchHeader onSearch={handleSearch}/>}
        />
    </View>
    <View style={{ 
        position:"absolute", 
        top: 0, 
        bottom: 0,
         right: 0, 
         left: 0,
         zIndex:-1 }}>
        <View style={{height:300,backgroundColor:'#009D8B'}}/>
        <View style={{flex:1,backgroundColor:'white'}}/>
    </View>
</View>
</ScrollView>

</SafeAreaView>
       
       

    );
}

export default Search;