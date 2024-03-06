import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from './Constants/styles';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import IconButton from './UI/IconButton';
import ExpenseContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
            onPress={() => {
              console.log('navigated to manageexpense');
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
        }}
      />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}
function App() {
  return (
    <ExpenseContextProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}

export default App;
