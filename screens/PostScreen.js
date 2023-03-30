// Import all necessary libraries and modules
import React, { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../utils/firebase";
import { addPost } from "../utils/post";
import { getUser } from "../utils/user";

import {
  Container,
  InputContainer,
  UserPicture,
  ImageContainer,
  PostButton,
} from "../styles/post.styles";

// Declare the PostScreen functional component
const PostScreen = ({ navigation }) => {

  // Declare all the state variables with useState
  const [currentUser, setCurrentUser] = useState("");
  const [userDbInfo, setUserDbInfo] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  // Set PostButtonColor to be either '#F50057' or 'gray' based on whether 'image' is null or not.
  const PostButtonColor = image ? "#F50057" : "gray";

  // UseEffect to fetch the user's information from firestore
  useEffect(() => {
    const fetchUser = async () => {
      // Set the current user
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });

      // Access the Firestore document, if it exists, set the user db info
      const documentSnapshot = await getDoc(doc(db, "users", currentUser?.uid));
      if (documentSnapshot.exists) {
        setUserDbInfo(documentSnapshot.data());
      } else {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // UseEffect with an empty dependency array just to clear out the linter warning.
  useEffect(() => {
  }, []);

  // Console log userDbInfo for testing purposes.
  console.log(userDbInfo);

  // Code to pick an image from the user's phone
  const photoPicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Code to handle the post creation.
  const handlePost = () => {
    addPost({
      currentUser,
      userDbInfo,
      description: description.trim(),
      localImageUri: image,
    })
      .then((ref) => {
        setDescription("");
        setImage(null);
        Alert.alert(
          "Post uploaded",
          "Your post has been successfully uploaded!"
        );
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <>
      {/* Conditional rendering based on if there is a logged in user or not */}
      {!currentUser ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>You must be logged in to post content.</Text>
          <Button
            title="Sign in"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      ) : (
        // Conditional rendering based on if the user's db info exists or not.
        userDbInfo && (
          <Container>
            <InputContainer>
              <UserPicture source={{ uri: userDbInfo.profileImage || "" }} />
              <TextInput
                autoFocus={false}
                multiline={true}
                numberOfLines={4}
                placeholder={"Description of your post"}
                style={{ flex: 1 }}
                value={description}
                onChangeText={(text) => setDescription(text)}
              ></TextInput>
            </InputContainer>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  flexDirection: "row-reverse",
                  right: 0,
                  alignSelf: "flex-end",
                  marginTop: 15,
                  width: 30,
                }}
                onPress={photoPicker}
              >
                <Ionicons name="image-sharp" size={30} color={"gray"} />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={image ? false : true}
                onPress={handlePost}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 3,
                  paddingHorizontal: 16,
                  borderRadius: 3,
                  backgroundColor: PostButtonColor,
                  marginTop: 15,
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Post</Text>
              </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback
              accessible={false}
              onPress={Keyboard.dismiss}
              style={{ height: "90%" }}
            >
              {image && (
                <ImageContainer>
                  <Image
                    source={{ uri: image }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </ImageContainer>
              )}
            </TouchableWithoutFeedback>
          </Container>
        )
      )}
    </>
  );
};

export default PostScreen;