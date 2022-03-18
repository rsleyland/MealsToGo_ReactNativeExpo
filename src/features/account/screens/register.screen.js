import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from '../components/accounts.styles';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { ActivityIndicator, Colors } from 'react-native-paper';


export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('rsleyland@hotmail.co.uk');
    const [password, setPassword] = useState('password123');
    const [confirmPassword, setConfirmPassword] = useState('password123');
    const { onRegister, isLoading } = useContext(AuthenticationContext);


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
                    <AuthInput
                        label={'Password Confirm'}
                        value={confirmPassword} 
                        textContentType='password'
                        secureTextEntry
                        onChangeText={(pass) => setConfirmPassword(pass)}
                        autoCapitalize='none'
                    />
                    {!isLoading ? (
                         <AuthButton 
                         icon='account-plus'
                         onPress={() => onRegister(email, password, confirmPassword)}
                     >Register</AuthButton>) : <ActivityIndicator animating={true} color={Colors.blue300} />}
                   
                </AccountContainer>

                <AuthButton 
                        onPress={() => navigation.navigate('Main')}
                    >Back</AuthButton>
            </AccountCover>
        </AccountBackground>
    )
};