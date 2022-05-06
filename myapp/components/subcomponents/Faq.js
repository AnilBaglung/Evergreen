import { View, Text, ScrollView , StyleSheet} from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Faq = ({navigation}) => {
  const [click, setClick] = useState('')
  const [click1, setClick1] = useState('')
  const [click2, setClick2] = useState('')
  const [click3, setClick3] = useState('')
  const [click4, setClick4] = useState('')
  const [click5, setClick5] = useState('')
  const [click6, setClick6] = useState('')
  const [click7, setClick7] = useState('')
  const [click8, setClick8] = useState('')
  const [click9, setClick9] = useState('')
  const [click10, setClick10] = useState('')
  const [click11, setClick11] = useState('')
  const handleMenu=()=>setClick(!click)
  const handleMenu1=()=>setClick1(!click1)
  const handleMenu2=()=>setClick2(!click2)
  const handleMenu3=()=>setClick3(!click3)
  const handleMenu4=()=>setClick4(!click4)
  const handleMenu5=()=>setClick5(!click5)
  const handleMenu6=()=>setClick6(!click6)
  const handleMenu7=()=>setClick7(!click7)
  const handleMenu8=()=>setClick8(!click8)
  const handleMenu9=()=>setClick9(!click9)
  const handleMenu10=()=>setClick10(!click10)
  const handleMenu11=()=>setClick11(!click11)

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>WHAT IS FINANCIAL PLANING?</Text>
          <Ionicons name={click? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu} style={styles.myicon} />
        </View>
        <Text style={click? styles.answer:styles.hideanswer}>Everyone needs financial advice from time to time. Maybe you need help with your 401(k) investments. Maybe you see retirement on the horizon and you want to know how you can afford it. Maybe retirement is here and you need to know how to make your money last. Maybe you are doing your own investing and you want to make sure you are doing the right thing. The list goes on and on.</Text>
      </View>
      
      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>WHAT IS FINANCIAL PLANNER OR ADVISOR?</Text>
          <Ionicons name={click1? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu1} style={styles.myicon}/>
        </View>
        <Text style={click1? styles.answer:styles.hideanswer}>Anyone can say that he or she is a financial advisor. Find out what the qualifications, credentials, and life experiences of your “planner” or “advisor” are before you pay them anything or entrust them with your finances. We have sebon certified financial advisor in our company and we offer a no obligation get acquainted meeting via phone or in person.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>WHAT IF I NEED TO OBTAIN FINANCIAL OR INSURANCE PRODUCTS?</Text>
          <Ionicons name={click2? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu2} style={styles.myicon}/>
        </View>
        <Text style={click2? styles.answer:styles.hideanswer}>We do not sell products, only time and expertise. We do offer specific recommendations and opinions on various products and services that may be appropriate for a client’s situation. We then can advise a client where to obtain the product or service. So, if you need to obtain an insurance policy, invest in a portfolio of mutual funds or find an estate planning attorney or tax professional, we can direct you to the resources you need or help you obtain these products and services.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>DO I HAVE TO HAVE LOTS OF MONEY TO USE YOU AS AN ADVISOR?</Text>
          <Ionicons name={click3? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu3} style={styles.myicon}/>
        </View>
        <Text style={click3? styles.answer:styles.hideanswer}>No. We have no income or investment account minimums.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>WHO BENEFITS FROM YOUR SERVICE?</Text>
          <Ionicons name={click4? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu4} style={styles.myicon}/>
        </View>
        <Text style={click4? styles.answer:styles.hideanswer}>Any individual or family seeking financial peace of mind can benefit from our services. We serve people from all walks of life. Clients have the flexibility to work with us on a one-time, as-needed, or ongoing basis. We welcome clients who simply need a one-time financial consultation or second opinion, as well as those who need full financial planning or ongoing investment management services. In addition, any business or organization seeking quality unbiased financial education for their employees or members can benefit from financial education programs.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>I HAVE ALREADY ACCUMULATED ASSETS AND I THINK I AM DOING WELL. BUT THINGS ARE GETTING MORE COMPLICATED. I WANT TO BE SURE I AM ON THE RIGHT TRACK. CAN YOU HELP ME?</Text>
          <Ionicons name={click5? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu5} style={styles.myicon}/>
        </View>
        <Text style={click5? styles.answer:styles.hideanswer}>Yes. People who need more sophisticated financial planning or advice will find our services appealing and beneficial. We can provide a professional review or second opinion.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>IF I SEEK YOUR FINANCIAL PLANNING FOR INVESTMENT ADVICE, AM I OBLIGATED TO USE THE RECOMMENDED PRODUCTS?</Text>
          <Ionicons name={click6? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu6} style={styles.myicon}/>
        </View>
        <Text style={click6? styles.answer:styles.hideanswer}>Absolutely not. We offer recommendations in our professional opinion that will meet your needs and objectives. It makes sense to shop around for the best product or service.  For example, if you need a life insurance policy or disability policy, we will suggest the kind of policy, which riders and amounts may be best for you. We will direct you to a choice of companies that provide a quality product, competitive price for you. If you desire, we can help you purchase investments and or establish your account with a third-party custodian.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>WHAT IS YOUR INVESTMENT PHILOSOPHY?</Text>
          <Ionicons name={click7? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu7} style={styles.myicon}/>
        </View>
        <Text style={click7? styles.answer:styles.hideanswer}>The design of the portfolio must take into account the client’s financial objectives, tolerance for risk, needs for current income or liquidity, and special considerations such as income and estate taxes.</Text>
        <Text style={click7? styles.answer:styles.hideanswer}>The important thing to remember is that no one can predict the future. Difference of opinion makes a market. Investment and economic “experts” provided with the same information often come to different conclusions. We do not suggest that we, or that any of the money or mutual fund managers that we may recommend, will make the correct decision every time. We do believe, however, that studying the historic trends and relationships of investment classes and the philosophies and approaches of successful investment managers can provide valuable insight.</Text>
        <Text style={click7? styles.answer:styles.hideanswer}>The appropriate allocation of investment assets for your goals and risk tolerance is the most important component in developing an investment portfolio.

We believe that a diversified, well-balanced portfolio, combined with long-term strategies, affordability, and patience, increases the likelihood that one will achieve his or her long-term financial objectives.</Text>
      </View>


      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>HOW DO YOU SELECT INVESTMENTS FOR A CLIENT?</Text>
          <Ionicons name={click8? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu8} style={styles.myicon} />
        </View>
        <Text style={click8? styles.answer:styles.hideanswer}>Before recommending any investment, we consider the current economic conditions, the outlook for a particular asset class or type of security, and how the investment fits within a client’s portfolio given his or her objectives and tolerance for risk.

As fiduciaries for our clients, we strive to obtain the most appropriate investment vehicles to meet a client’s objectives, while being very conscious of total expenses and risk exposure.</Text>
      </View>

      
      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>HOW DO YOU PRICE YOUR FINANCIAL PLANNING SERVICES?</Text>
          <Ionicons name={click9? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu9} style={styles.myicon}/>
        </View>
        <Text style={click9? styles.answer:styles.hideanswer}>Our fees our based on the actual time meeting with a client or via the phone, researching and analyzing that client’s current situation, and providing specific recommendations and implementation assistance if needed.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>HOW MUCH WILL MY FINANCIAL PLANNING COST?</Text>
          <Ionicons name={click10? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu10} style={styles.myicon}/>
        </View>
        <Text style={click10? styles.answer:styles.hideanswer}>Financial planning fees are determined on a project basis. The total fee will vary based on the specific needs and complexity of your situation. An estimate is provided after the meeting when your personal needs are identified.</Text>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.faq}>
          <Text style={styles.question}>HOW CAN I GET STARTED?</Text>
          <Ionicons name={click11? 'remove-outline':'add-outline'}  size={30} color="#006788" onPress={handleMenu11} style={styles.myicon}/>
        </View>
        <Text style={click11? styles.answer:styles.hideanswer}>Our first step is an initial inquiry. You can reach out to us at broanil52@gmail.com or +9779846151204. The initial meeting is no cost and no obligation and we’ll discuss which of our services is appropriate for you</Text>
        <Text style={click11? styles.answers:styles.hideanswers} onPress={()=>navigation.navigate('Contact Us')} color='blue'>Contact us</Text>
      </View>



    </View>
    </ScrollView>
  )
}

export default Faq

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    backgroundColor:'#f0f2f5',
    marginTop:'5%'
  },
  subcontainer:{
    width:'100%',
    alignContent:'center',
    marginTop:30,
    paddingRight:20
},
faq:{
  paddingTop:15,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignContent:'center',
  textAlignVertical:'center',
  borderBottomColor:'#006788',
  borderBottomWidth:1,
  width:'98%',
  position:'relative'
},
question:{
  fontSize:22,
  color:'#006788',
  paddingLeft:'3%',
  paddingRight:'5%',
  paddingBottom:5
},
hideanswer:{
  display:'none'
},
hideanswers:{
  display:'none'
},
answer:{
  display:'flex',
  paddingTop:10,
  paddingRight:'3%',
  paddingLeft:'3%',
  fontSize:18,
  opacity:0.7
}, 
answers:{
  display:'flex',
  paddingTop:10,
  paddingRight:'3%',
  paddingLeft:'3%',
  fontSize:25,
  opacity:0.7,
  marginBottom:30,
  color:'blue'
}, 
myicon:{
  position:'absolute',
  right:-10,
  top:15,
  marginLeft:10,

}


})