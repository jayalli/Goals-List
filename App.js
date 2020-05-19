import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import MakePages from './pages/MakePages'


export default function App() {

  const [NewListPage, setNewListPage] = useState(false)

  const isNewListPage = () => {

    setNewListPage(true)

  }

  const goBackPage = () => {

    setNewListPage(false)

  }
  
  const nameList = () =>{
    return(
    <View>
      <TextInput placeholder = "Name List">
      style={styles.textInputContainer}
      </TextInput>

    </View>
    )
  }


  return (
    
      <View style={styles.screen}>


        <MakePages isn={NewListPage} onGoBack={goBackPage} />
      </View>
   
  );

}

//onPress={isNewListPage}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },

  inpurnboxview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textInputContainer: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listitem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'blue',
    borderWidth: 1,
    marginVertical: 10

  }

});
