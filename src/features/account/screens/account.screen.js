import { AccountBackground, AccountContainer, AccountCover, AuthButton, 
    Title, AnimationWrapper } from '../components/accounts.styles';
import LottieView from 'lottie-react-native';


export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover>
                <AnimationWrapper>
                    <LottieView
                        key='animation'
                        autoPlay
                        loop
                        resizeMode='cover'
                        source={require('../../../../assets/watermelon.json')}
                    />
                </AnimationWrapper>
                <Title>Meals To Go</Title>
                <AccountContainer>
                    <AuthButton 
                        icon='lock-open-outline'
                        onPress={() => navigation.navigate("Login")}
                    >Login</AuthButton>
                    <AuthButton
                        icon='account-plus'
                        onPress={() => navigation.navigate("Register")}
                    >Register</AuthButton>
                </AccountContainer>
            </AccountCover>
        </AccountBackground>
    )
};