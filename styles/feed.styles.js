/* This code block is using Styled Components, allow us to create styles for React native components.*/
/* Here we are declaring constants that will be used to style the related tags in the application.*/

import styled from "styled-components";

export const Container = styled.View`
  flex: 1; /* Takes up the whole screen */
  align-items: center; /* Aligns items to the center */
  padding-top: 16px; /* Adds padding at the top */
  background-color: #fff; /* Sets the background color to white */
`;

export const Card = styled.View`
  width: 100%; /* Sets the width of each card to be 100% */
  margin-bottom: 15px; /* Adds margin at the bottom of each card */
  border-radius: 10px; /* Adds rounded corners to the card */
`;

export const UserData = styled.View`
  flex-direction: row; /* Positions the inner contents of UserData in a row */
  justify-content: flex-start; /* Aligns the contents to the left */
  padding-top: 6px; /* Adds padding at the top */
  padding-bottom: 10px; /* Adds padding at the bottom */
`;

export const UserPicture = styled.Image`
  width: 35px; /* Sets the width of the user picture to be 35px */
  height: 35px; /* Sets the height of the user picture to be 35px */
  border-radius: 18px; /* Adds rounded corners to the user picture */
`;

export const UserInfoContainer = styled.View`
  flex-direction: column; /* Positions the contents of UserInfoContainer in a column */
  justify-content: center; /* Aligns the contents to the center */
  margin-left: 10px; /* Adds margin of 10px to the left */
`;

export const UserName = styled.Text`
  font-size: 13px; /* Sets the font size of user name to 13px */
  font-weight: bold; /* Sets the font weight to bold */
`;

export const PostTime = styled.Text`
  font-size: 10px; /* Sets the font size to be 10px */
  color: #666; /* Sets the color to a muted grey */
`;

export const PostImage = styled.Image`
  width: 100%; /* Sets the width of the image to be 100% */
  height: 400px; /* Sets the height of the image to be 400px */
`;

export const PostInteractionContainer = styled.View`
  flex-direction: row; /* Positions the contents of PostInteractionContainer in a row */
  padding-top: 6px; /* Adds padding at the top of the container for spacing */
`;

export const LikeCount = styled.Text`
  font-size: 13px; /* Sets the font size to be 13px */
  font-weight: bold;
  padding-top: 6px; /* Adds padding at the top for spacing */
`;

export const PostDescription = styled.Text`
  font-size: 13px; /* Sets the font size to be 13px */
  padding-top: 6px; /* Adds padding at the top for spacing */
  padding-right: 12px; /* Adds padding of 12px to the right for spacing */
`;

export const ViewCommentButton = styled.TouchableOpacity`
  padding-top: 6px; /* Adds padding at the top for spacing */
`;

export const ViewCommentText = styled.Text`
  font-size: 13px; /* Sets the font size to be 13px */
  color: "#666"; /* Sets the color to a muted grey */
`;