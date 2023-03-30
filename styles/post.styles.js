
import styled from "styled-components";

// Container style for parent view
export const Container = styled.View`
  flex: 1; // Use flex to expand the view and fill the available space
  margin: 0 20px; // Use margin shorthand to set left and right margins to 20px
`;

// InputContainer style for container view
export const InputContainer = styled.View`
  margin-top: 32px;
  flex-direction: row; // Set the flex direction to row to align child views horizontally
`;

// UserPicture style for image view
export const UserPicture = styled.Image`
  width: 50px; // Set the width of the image to 50px
  height: 50px; // Set the height of the image to 50px
  border-radius: 25px; // Create a circular border-radius to make the image circular
  margin-right: 16px; // Set the right margin to 16px for spacing
`;

// ImageContainer style for container view
export const ImageContainer = styled.View`
  height: 550px; // Set the height of the container view to 550px
  margin: 15px -20px; // Use margin shorthand to set top and bottom margins to 15px, left and right margins to -20px to make full width
`;

// PostButton style for button
export const PostButton = styled.Button`
  background-color: #f50057; // Use a bright pink for the background color
  width: 50%; // Set the width of the button to 50% of the parent view
  padding: 15px; // Add some padding to increase the hit area of the button
  margin-bottom: 15px; // Set the bottom margin to 15px for spacing
`;
