import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function UserList({ users, navigation }) {
  const [User, setUser] = useState([]);
  // const [id,setId] = useState();

  return (
    <View style={styles.list}>
      <Text style={styles.list_title}>Users</Text>
      <View style={{ marginTop: 15 }}>
        {users.map((user) => {
          let id = user.id;
          return (
            <Pressable
              style={styles.list_group}
              key={user.id}
              onPress={() => {
                users.forEach((current_user) => {
                  if (current_user["id"] == id) {
                    // console.log("user:",current_user);
                    setUser(current_user)
                  }
                });
                if(User.length != 0){
                    // console.log("user:",User);
                    navigation.navigate("Profile", { User });
                }
                // console.log(selectedUser);
                
              }}
            > 
              <Text style={styles.user_name}>{user.name}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
