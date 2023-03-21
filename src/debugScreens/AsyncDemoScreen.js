import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  setStringValue,
  getStringValue,
  getAllKeys,
  removeValue,
  clearAll,
} from "./../utils/asyncStorage";

/** Async Demo Screen. */
const CreateMScreen = () => {
  const [k, setK] = useState();
  const [v, setV] = useState();
  const [search, setSearch] = useState();
  const [result, setResult] = useState();
  const [result2, setResult2] = useState();
  const [remove, setRemove] = useState();

  const debug = () => {
    console.log("k", k, "v", v, "search", search, "result", result);
    getAllKeys();
  };

  const handleSearch = () => {
    getStringValue(search).then((res) => setResult2(res));
  };

  const handleRemove = () => {
    removeValue(remove);
  };

  const handleClear = () => {
    clearAll();
  };

  const getAll = () => {
    getAllKeys().then((res) => setResult(res));
  };

  return (
    <View style={styles.container}>
      <Text>Async Demo Screen</Text>
      <TextInput placeholder="Key" value={k} onChangeText={setK} />
      <TextInput placeholder="Value" value={v} onChangeText={setV} />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          setStringValue(k, v);
        }}
      >
        <Text>Store in Async Storage</Text>
      </TouchableOpacity>
      <TextInput placeholder="Search" value={search} onChangeText={setSearch} />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          handleSearch();
        }}
      >
        <Text>Get from Async Storage</Text>
      </TouchableOpacity>
      <Text>{result2}</Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          getAll();
        }}
      >
        <Text>Get all</Text>
      </TouchableOpacity>
      {result?.map((item, index) => {
        return (
          <Text key={index}>
            Key {index}: {item}
          </Text>
        );
      })}
      <TextInput placeholder="Remove" value={remove} onChangeText={setRemove} />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          handleRemove();
        }}
      >
        <Text>Remove One</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          handleClear();
        }}
      >
        <Text>Clear all</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  touch: {
    backgroundColor: "lightpink",
    padding: 15,
  },
});

export default CreateMScreen;
