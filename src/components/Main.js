import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { followUser, unfollowUser, goOffline, goOnline } from '../redux/actions';

import OfflineQueue from './OfflineQueue';
import Users from './Users';

const mapStateToProps = state => ({
  following: state.users,
  outbox: state.offline.outbox,
  isOnline: state.offline.online
});

const mapDispatchToProps = dispatch => ({
  goOffline: () => dispatch(goOffline()),
  goOnline: () => dispatch(goOnline()),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id))
});

const Main = props => (
  <View style={styles.page}>
    <Users
      following={props.following}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    />
    <OfflineQueue isOnline={props.isOnline} actions={props.outbox} />
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.onlineButton}
        onPress={props.goOnline}
      >
        <Text style={styles.followText}>Go Online</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.offlineButton}
        onPress={props.goOffline}
      >
        <Text style={styles.followText}>Go Offline</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 32
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10
  },
  onlineButton: {
    backgroundColor: '#079e04',
    padding: 10,
    borderRadius: 20
  },
  offlineButton: {
    backgroundColor: '#ff0532',
    padding: 10,
    borderRadius: 20
  },
  followText: { color: '#ffffff' },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
