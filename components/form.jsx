import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Form({ object }) {
  const { users, setAge, setBio, setCity, setName, setURL,setUsers, userObject } =
    object;

  const handleInputChange = (event) => {
    setUsers(event.nativeEvent.text);
  };

  const handleButtonPress = () => {
    setUsers((prevUser) => [...prevUser, userObject]);
    console.log("User added");
  };

  return (
    <View style={styles.form}>
      <View style={styles.form_group}>
        <Text style={styles.form_title}>Profile Image Url</Text>
        <TextInput
          style={styles.form_input}
          onChange={(event) => setURL(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.form_title}>Full Name</Text>
        <TextInput
          style={styles.form_input}
          onChange={(event) => setName(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.form_title}>Age</Text>
        <TextInput
          style={styles.form_input}
          onChange={(event) => setAge(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.form_title}>City</Text>
        <TextInput
          style={styles.form_input}
          onChange={(event) => setCity(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.form_title}>Bio</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          style={styles.form_textarea}
          onChange={(event) => setBio(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.form_group}>
        <Button title="Add" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
    // backgroundColor: "black",
  },
  form_group: {
    marginBottom: 20,
    width: "100%",
  },
  form_title: {
    fontSize: 22,
    color: "white",
  },
  form_input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  form_textarea: {
    padding: 10,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  form_button: {
    width: "100%",
    backgroundColor: "blue",
    paddingHorizontal: "100%",
  },
});
