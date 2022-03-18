import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeZone } from "../../../components/utility/safe-area.component";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const AvatarCont = styled.View`
  align-items: center;
`;

const UserText = styled.Text`
  margin: 15px 0;
  font-size: 17px;
  font-family: ${(props)=> props.theme.fonts.body};
`;

export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (cUser) => {
      const profilePic = await AsyncStorage.getItem(`${cUser.uid}-photo`);
      if (profilePic) setPhoto(profilePic);
    };
    useFocusEffect(()=> {
      getProfilePicture(user);
    });

    useEffect(()=> {
      getProfilePicture(user);
    }, [user])
  
    return (
      <SafeZone>
        <AvatarCont>
          <TouchableOpacity onPress={()=>navigation.navigate('Camera')}>
            {!photo ? <Avatar.Icon size={150} icon='camera' backgroundColor='#2182BD'/> :
              <Avatar.Image size={150} source={{ uri: photo}} backgroundColor='#2182BD'/>
            }
          </TouchableOpacity>
          <UserText>{user.email}</UserText>
        </AvatarCont>
        <List.Section>
          <SettingsItem
            title='Favourites'
            description='View your favourites'
            left={(props) => <List.Icon {...props} color='black' icon={'heart'} />}
            onPress={()=>navigation.navigate('Favourites')}
          />
          <SettingsItem
            title='Logout'
            left={(props) => <List.Icon {...props} color='black' icon={'door'} />}
            onPress={onLogout}
          />
        </List.Section>
      </SafeZone>
    );
  }