import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';

const OfflineQueue = ({ actions, isOnline }) => (
  <ScrollView style={styles.list}>
    <Text style={[styles.title, isOnline ? styles.onlineText : styles.offlineText]}>
      {isOnline ? 'ONLINE' : 'OFFLINE'}
    </Text>
    <Text style={styles.title}>
      ({actions.length} queued)</Text>
    {actions.map(action => (
      // @TODO Fix
      <Text key={`action-${action.type}-${action.meta.transaction}`}>
        Message: {action.type} {action.payload.userId}
      </Text>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  onlineText: {
    color: '#079e04'
  },
  offlineText: {
    color: '#ff0532'
  }
});

export default OfflineQueue;
