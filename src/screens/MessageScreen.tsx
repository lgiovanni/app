import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

const FirstRoute = () => (
  <View style={styles.container}>
    <FlatList
      data={[
        { id: '1', name: 'Actividades', message: 'Mensaje de prueba 1', time: '3 min ago' },
        { id: '2', name: 'Club', message: 'Mensaje de prueba 2', time: '5 min ago' },
      ]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.messageItem}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const SecondRoute = () => (
  <View style={styles.container}>
    <FlatList
      data={[
        { id: '1', name: 'Leba', followers: 4, following: 6 },
        { id: '2', name: 'ADM_Kha', followers: 8, following: 10 },
      ]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.friendItem}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.followers}>Seguidores: {item.followers}</Text>
          <Text style={styles.following}>Siguiendo: {item.following}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const MessagesScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Message' },
    { key: 'second', title: 'Friends' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.label}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#007BFF',
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
  messageItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  followers: {
    fontSize: 14,
    color: '#666',
  },
  following: {
    fontSize: 14,
    color: '#666',
  },
});

export default MessagesScreen;