import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const ClubScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Club Screen Content</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ClubScreen;
