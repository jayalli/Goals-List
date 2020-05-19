import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal, ShadowPropTypesIOS } from 'react-native';
import { useState } from 'react';
import ListViewInputs from '../components/ListViewInputs'
import InputnButton from '../components/InputnButton'



const MakePages = props =>{

    
  const [courseGoals, setCourseGoals] = useState([])
  const [onMode, setOnMode] = useState(false)




  const setIsOnMode = () => {
    setOnMode(true)
  }


  const addgoalhandler = goalname => {
    if (goalname.length === 0) {
      return;
    }
    
    setCourseGoals(currentGoals =>
      [...currentGoals, { key: Math.random().toString(), value: goalname }])
    setOnMode(false)

  }

  const removegoalhandler = goalkey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goalname) => goalname.key !== goalkey)
    })
  }

  const cancelGoal = () => {
    setOnMode(false)
  }


    return (
      <Modal visible = {true}>
        <View style={styles.screen}>
            <Button title= "Add new Goal" onPress = {setIsOnMode}/>
            {/* <Text>Tap on Goal to delete</Text> */}
            {/* <Button title = "Go Back" onPress = {props.onGoBack}/> */}
            {/* SearchBar and Add button */}
            <InputnButton visible = {onMode} onAddGoal={addgoalhandler} onCancel={cancelGoal}/>

            {/* List */}
            <FlatList data={courseGoals}
                renderItem={ItemData => (
                <ListViewInputs 
                keys={ItemData.item.key} 
                onDelete={removegoalhandler} 
                title={ItemData.item.value} 
            />
            )} />


        </View> 
      </Modal>
    )

}

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



export default MakePages