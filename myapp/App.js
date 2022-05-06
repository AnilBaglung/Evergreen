import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Investingcalculator from './components/subcomponents/Investingcalculator';
import Blogs from './components/subcomponents/Blogs';
import Faq from './components/subcomponents/Faq';
import AboutUs from './components/subcomponents/AboutUs';
import Contact from './components/subcomponents/Contact';
import Compound from './components/Calculator/Compound';
import EMI from './components/Calculator/EMI';
import SimpleInterest from './components/Calculator/SimpleInterest';
import SIP from './components/Calculator/SIP';
import ROI from './components/Calculator/ROI';
import Intrinsic from './components/Calculator/Intrinsic';
import Whatwedo from './components/About/Whatwedo';
import Service from './components/About/Service';
import Team from './components/About/Team';
import Newsroom from './components/About/Newsroom';
import Insurence from './components/Service/Insurence';
import Mutualfund from './components/Service/Mutualfund';
import Realestate from './components/Service/Realestate';
import Stocks from './components/Service/Stocks';
import Otherassets from './components/Service/Otherassets';
import Daytrading from './components/Academy/Daytrading';
import Fundamental from './components/Academy/Fundamental';
import Investingfor from './components/Academy/Investingfor';
import Personalfinance from './components/Academy/Personalfinance';
import Technical from './components/Academy/Technical';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Calculator' component={Investingcalculator}/>
        <Stack.Screen name='Academy' component={Blogs}/>
        <Stack.Screen name='FAQ' component={Faq}/>
        <Stack.Screen name='About Us' component={AboutUs}/>
        <Stack.Screen name='Contact Us' component={Contact}/>
        <Stack.Screen name='Compound Interest' component={Compound}/>
        <Stack.Screen name='SIP Calculator' component={SIP}/>
        <Stack.Screen name='Simple Interest' component={SimpleInterest}/>
        <Stack.Screen name='ROI Calculator' component={ROI}/>
        <Stack.Screen name='EMI Calculator' component={EMI}/>
        <Stack.Screen name='Intrinsic Value' component={Intrinsic}/>
        <Stack.Screen name='What We Do' component={Whatwedo}/>
        <Stack.Screen name='Our Team' component={Team}/>
        <Stack.Screen name='Our Services' component={Service}/>
        <Stack.Screen name='Newsroom' component={Newsroom}/>
        <Stack.Screen name='Insurence' component={Insurence}/>
        <Stack.Screen name='Managed Fund' component={Mutualfund}/>
        <Stack.Screen name='Real Estate' component={Realestate}/>
        <Stack.Screen name='Stocks' component={Stocks}/>
        <Stack.Screen name='Other Assets' component={Otherassets}/>
        <Stack.Screen name='Investing For Beginners' component={Investingfor}/>
        <Stack.Screen name='Personal Finance' component={Personalfinance}/>
        <Stack.Screen name='Day Trading' component={Daytrading}/>
        <Stack.Screen name='Fundamental Analysis' component={Fundamental}/>
        <Stack.Screen name='Technical Analysis' component={Technical}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
