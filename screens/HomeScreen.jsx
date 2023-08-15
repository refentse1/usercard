import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useColorScheme } from "react-native";
import Form from "../components/form";
import UserList from "../components/UserList";

const HomeScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [url, setURL] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [bio, setBio] = useState();

  const userObject = {
    id: users.length + 1,
    url,
    name,
    age,
    city,
    bio,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />

        <Text style={styles.header}>User Card App</Text>
        <Text style={styles.Subheader}>Add User</Text>

        {/* Form Section */}
        <Form
          object={{
            users,
            setAge,
            setBio,
            setCity,
            setName,
            setURL,
            setUsers,
            userObject,
          }}
        />
        {/* User List Section */}
        <UserList users={users} navigation={navigation} />

      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#445069",
    padding: 10,
  },
  header: {
    flex: 1 / 12,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
  },
  Subheader: {
    flex: 1 / 12,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  list: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // backgroundColor:"black",
    height: "100%",
  },
  list_title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  list_group: {
    marginBottom: 15,
    width: "100%",
  },
  user_name: {
    fontSize: 22,
    color: "white",
  },
});
