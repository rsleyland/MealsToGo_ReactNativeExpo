import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from '../components/accounts.styles';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { ActivityIndicator, Colors } from 'react-native-paper';

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('rsleyland@hotmail.co.uk');
    const [password, setPassword] = useState('password123');
    const { onLogin, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover>
                <AccountContainer>
                    <AuthInput 
                        label={'E-mail'}
                        value={email} 
                        onChangeText={(email) => setEmail(email)}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <AuthInput
                        label={'Password'}
                        value={password} 
                        textContentType='password'
                        secureTextEntry
                        onChangeText={(pass) => setPassword(pass)}
                        autoCapitalize='none'
                    />
                    {!isLoading ? (
                    <AuthButton 
                        icon='lock-open-outline'
                        onPress={() => onLogin(email, password)}
                    >Login</AuthButton>) : <ActivityIndicator animating={true} color={Colors.blue300} />}
                </AccountContainer>
                
                <AuthButton
                    icon="arrow-left-circle" 
                    onPress={() => navigation.navigate('Main')}
                >Back</AuthButton>

            </AccountCover>
        </AccountBackground>
    )
};