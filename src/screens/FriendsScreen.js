import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { friends } from "../mockData";
import { globalStyle, colors } from "../styles/styles";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Header from "../components/Header";

import PropTypes from "prop-types";

const FriendsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const RightActions = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.rightAction}>
        <View>
          <Text style={{ color: colors.accentColor, fontWeight: "500" }}>
            Remove Friend
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  RightActions.propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} navigation={navigation} showProfile={true} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search friends"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="rgba(255,255,255,.8)"
        />
        <Text style={{ color: colors.accentColor, marginTop: 15 }}>
          MY FRIENDS ({friends.length})
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredFriends}
            onScroll={() => {
              Keyboard.dismiss();
            }}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(friend) => friend.id.toString()}
            renderItem={({ item }) => (
              <Swipeable
                renderRightActions={() => (
                  <RightActions onPress={() => console.log("delete", item)} />
                )}
              >
                <TouchableHighlight
                  style={styles.friendTile}
                  onPress={() => {
                    navigation.navigate("CreateM", { ReceiverId: item.id });
                  }}
                  underlayColor="rgb(50,50,50)"
                  activeOpacity={0.1}
                >
                  <>
                    <View style={styles.initialsContainer}>
                      <Text style={styles.initials}>
                        {item.nameFirst[0]}
                        {item.nameLast[0]}
                      </Text>
                    </View>
                    <View style={{ justifyContent: "center", marginLeft: 8 }}>
                      <Text style={styles.friendName}>{item.name}</Text>
                      <Text style={styles.username}>{item.username}</Text>
                    </View>
                  </>
                </TouchableHighlight>
              </Swipeable>
            )}
          />
        </View>
        <StatusBar style="light" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 20,
    fontSize: 20,
    color: colors.accentColor,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignSelf: "center",
  },
  friendName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.accentColor,
  },
  listContainer: {},
  friendTile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
    backgroundColor: colors.backgroundColor,
  },
  initials: {
    fontSize: 24,
  },
  initialsContainer: {
    borderRadius: 50,
    backgroundColor: colors.primaryColor,
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").height * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 14,
    marginLeft: 2,
  },
  rightAction: {
    backgroundColor: "#c20000",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
  },
});

export default FriendsScreen;
