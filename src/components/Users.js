import React from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

const users = [
  '@FormidableLabs',
  '@jevakallio',
  '@ken_wheeler',
  '@divmain',
  '@alexlande'
].map((name, i) => ({ id: i + 1, name }));

const Users = ({ following, followUser, unfollowUser }) => (
  <ScrollView style={styles.list} contentContainerStyle={{ flex: 1 }}>
    {users.map(({ id, name }) => (
      <View style={styles.row} key={`user-${id}`}>
        <Text>{name}</Text>
        {
          following[id] ?
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => unfollowUser(id)}
            >
              <Text style={styles.followText}>Unfollow</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={styles.unFollowButton}
              onPress={() => followUser(id)}
            >
              <Text style={styles.unFollowText}>Follow</Text>
            </TouchableOpacity>
        }
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  row: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24
  },
  followButton: {
    backgroundColor: '#38A1F3',
    padding: 10,
    borderRadius: 20
  },
  unFollowButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#38A1F3',
    borderWidth: 1
  },
  followText: { color: '#ffffff' },
  unFollowText: { color: '#38A1F3' }
});

export default Users;
