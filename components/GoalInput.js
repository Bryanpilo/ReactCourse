import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enterGoal, setEnterGoal] = useState('');

    const goalInputHandler = (Text) => {
        setEnterGoal(Text);
    }
    return (
        <Modal
            visible={props.visibleProp}
            animationType="slide"
        >
            <View style={styles.InternalView}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.TextInput}
                    onChangeText={goalInputHandler}
                />
                <Button
                    title="Add"
                    onPress={props.onGoalHandler.bind(this, enterGoal)}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    },
    InternalView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})

export default GoalInput;