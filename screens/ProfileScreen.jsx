import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ route }) => {
  const { user } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.user_container}>
        <Image style={styles.user_image} source={{ uri: user.url }} />
        <Text style={styles.user_name}>Name: {user.name}</Text>
        <Text style={styles.user_name}>Age: {user.age}</Text>
        <Text style={styles.user_name}>City: {user.city}</Text>
        <Text style={styles.user_name}>Bio: {user.bio}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
  user_container: {
    marginTop: 15,
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
  user_image: {
    width: 150,
    height: 150,
    borderRadius: 360,
  },
  user_name: {
    fontSize: 22,
  },
});
