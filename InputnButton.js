import React from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'
import { useState } from 'react'

const GoalInput = props => {

    const [enteredGoal, setEntetredGoal] = useState('')

    const goalhandler = (entered) => {
        setEntetredGoal(entered)


        
    }

    const clearGoal = () =>{

        props.onAddGoal(enteredGoal)
        setEntetredGoal('')


    }

    return (
        <Modal visible= {props.visible} animationType= "fade">
            <View flexDirection = 'row'  style={styles.inpurnboxview}>
                <TextInput placeholder="Goals "
                    onChangeText={goalhandler}
                    style={styles.textInputContainer}
                    value={enteredGoal} 
                    color = "black"/>
                {/* ^ value stores the input into enteredgoal */}
                <Button title="ADD" onPress={clearGoal} />
                <Button title = "Cancel" onPress= {props.onCancel} color= 'red' />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({

    inpurnboxview: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

    textInputContainer: {
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        //flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'

        
      }

})

export default GoalInput