import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [coursesGoals, setCoursesGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalHandler = (goalText) => {
    setCoursesGoals(
      currentGoals =>
        [
          ...coursesGoals,
          {
            id: Math.random().toString(),
            value: goalText
          }
        ]
    );
  }

  const onDeleteItem = idItem =>{
    setCoursesGoals(
      currentGoals => {
        return currentGoals.filter((goal) => goal.id !== idItem);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Button title={'Add New Goal'} onPress={()=> setIsAddMode(true)}/>
      <GoalInput visibleProp={isAddMode} onGoalHandler= {goalHandler}></GoalInput>
      <FlatList
        data={coursesGoals}
        renderItem={itemData => (
          <GoalItem
            id= {itemData.item.id}
            title= {itemData.item.value}
            onDelete= {onDeleteItem}
          />
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
