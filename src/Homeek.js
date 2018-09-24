import React from 'react'
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Button,
  Linking,
  ActivityIndicator 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

let page = 0;
let pageCount = 20;
let revisedLifeSketch = 'http://drsohanrajtater.com/files/Revised_Life_Sketch_SRT_Hindi.pdf'
let tatersProfile = 'http://drsohanrajtater.com/files/Prof_Tater_s_Profile_in English.pdf'

let documentry1 = 'https://www.youtube.com/watch?v=h98JTJ4y6-o&feature=youtu.be'
let documentry2 = 'https://www.youtube.com/watch?v=CCLYpssALNY&feature=youtu.be'
let documentry3 = 'https://www.youtube.com/watch?v=5y7uAWS-AQc&feature=youtu.be'
let documentry4 = 'https://www.youtube.com/watch?v=hl75A4cVf2Q&feature=youtu.be'

let felicitation1 = 'https://www.youtube.com/watch?v=6Skt7mErKtc&feature=youtu.be'
let felicitation2 = 'https://www.youtube.com/watch?v=3wTHYK4uNFU&feature=youtu.be'
let felicitation3 = 'https://www.youtube.com/watch?v=yMhh9Zi7ueU&feature=youtu.be'
let felicitation4 = 'https://www.youtube.com/watch?v=snvupwY_V0c&feature=youtu.be'

let record1 = 'http://drsohanrajtater.com/images/thumb/gnp.jpeg'
let record2 = 'http://drsohanrajtater.com/images/thumb/gnpc.jpeg'

export default class Homeek extends React.Component{
    static navigationOptions = {
        headerTitle: 'PROF.(DR.) SOHAN RAJ TATER E-KNOWLEDGE MUSEUM',
        headerStyle: {
            backgroundColor: '#ef94d5',
        }, 
        headerTitleStyle: {
            color: '#9e0472',
            fontSize: 14.5
        }
    }

    render() {
        const {navigate} = this.props.navigation
        return (
          <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableHighlight key="welcome">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>WELCOME TO PROF.(DR.) SOHAN RAJ TATER E-KNOWLEDGE MUSEUM</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="sliders" onPress={() => navigate('Sliders')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Prof. Tater's Award Wining Images</Text>
                        </View>
                    </TouchableHighlight> 
                    <TouchableHighlight key="record1" onPress={ ()=> Linking.openURL(record1) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Prof. Tater's Got World Record Entry in "Golden Book of Records"</Text>
                        </View>
                    </TouchableHighlight> 
                    <TouchableHighlight key="record2" onPress={ ()=> Linking.openURL(record2) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Prof. Tater's Golden Book of Records Certificate</Text>
                        </View>
                    </TouchableHighlight> 
                    <TouchableHighlight key="lifePhilosophy">
                      <View style={styles.vids}>
                        <Text style={styles.vidText}>
                          To know about Life and Philosophy and 50 years Contribution to Society of Prof. (Dr.) Sohan Raj Tater please visit following:-
                        </Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(revisedLifeSketch) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Prof. Tater's Revised Life Sketch</Text>
                        </View>
                    </TouchableHighlight>  
                    <TouchableHighlight onPress={ ()=> Linking.openURL(tatersProfile) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Prof. Tater's Profile</Text>
                        </View>
                    </TouchableHighlight>  
                    <TouchableHighlight onPress={ ()=> Linking.openURL(documentry1) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>DOCUMENTARY ON PROF.(DR.) SOHAN RAJ TATER (PART-1)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(documentry2) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>DOCUMENTARY ON PROF.(DR.) SOHAN RAJ TATER (PART-2)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(documentry3) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>DOCUMENTARY ON PROF.(DR.) SOHAN RAJ TATER (PART-3)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(documentry4) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>DOCUMENTARY ON PROF.(DR.) SOHAN RAJ TATER (PART-4)</Text>
                        </View>
                    </TouchableHighlight> 
                    <TouchableHighlight onPress={ ()=> Linking.openURL(felicitation1) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Public Felicitation of Prof.(Dr.) Sohan Raj Tater (Part-1)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(felicitation2) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Public Felicitation of Prof.(Dr.) Sohan Raj Tater (Part-2)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(felicitation3) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Public Felicitation of Prof.(Dr.) Sohan Raj Tater (Part-3)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(felicitation4) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}><Icon name='arrow-forward' size={20} color='#444'/></Text>
                            <Text style={styles.vidText}>Public Felicitation of Prof.(Dr.) Sohan Raj Tater (Part-4)</Text>
                        </View>
                    </TouchableHighlight> 
                    <TouchableHighlight key="profilePhoto">
                        <View style={styles.photo}>
                          <Image source={require('../images/drsohan.jpg')} style={{width: 178}}/>     
                        </View>
                    </TouchableHighlight>    
                    <TouchableHighlight key="welcomedetail">
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>
                              Shri Sohan Raj Tater was born at Kanor, a small village in Barmer district on July 5,1947. He has always been an 
                              industrious, studious, simple, humble and soft-spoken. Since his childhood he has been living a detached life. 
                              He has always been a brilliant student and a topper. He stood first in class 9th, 10th, 11th and topped the list in 
                              the whole of Rajasthan in the higher secondary examination in the year 1964 and thus brought name and fame both to 
                              his family and to his Village also. In the year 1965 he was married to Mrs. Laxmidevi. Mrs. Laxmidevi proved the most 
                              perfect match to Shri Sohan Raj Tater. She too has been living a detached life since childhood. Both of them being 
                              disinterested in enjoying sexual pleasure, they observed celibacy for two years right from the first day of their 
                              marriage from 1965 to 1967. They remained in close contact with Munishri Sampatmal Swami, who got shri Sohan Raj to 
                              observe penitential retreat, 25 shlokas and to learn Jain siddhant deepika and Manonushasan, by heart. He also 
                              motivated Shri Sohan Raj Tater and Mrs. Laxmidevi to get initiated as a fair. Both of them were extremely willing to 
                              do so but this could not materialize because their destruction-cum-subsidence of the karmas had not yet been complete.
                              {"\n"}{"\n"}                          
                              Shri Tater is whole-heartedly devoted to the order of Terapanth and has great respect for both Acharyashri Tulsi and 
                              Acharyashri Mahapragya. He had been the secretary of the Terapanth council, Sardaarpura, Jodhpur from 1965 to 1970.
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="honours">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>HONOURS RECEIVED</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="honoursdetail">
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>
                              As Shri Tater was a very bright and intelligent student and as he had a great desire of learning, he sought admission 
                              in an Engineering college in 1964 and got the degree of B.E. (Mechanical), Honours in the year 1969. He maintained his 
                              glorious tradition of standing first and topped the list this time also and became a full-fledged Engineer. In the year 
                              1970, he was selected by Rajasthan Public Service Commission and was appointed as an Assistant Engineer in the Water 
                              Works department. He passed M.E. (Public Health Engineering), being in government service and it goes to his credit 
                              that this time also he got the first rank. As he was very prompt and authentic in service, he was honoured as many as 
                              four times by the Government of Rajasthan.
                              {"\n"}{"\n"}
                              For Bringing water from Mathania to Jodhpur within 90 days in the year 1970.
                              {"\n"}{"\n"}
                              For bringing the canal water to Bikaner in the year 1976.
                              {"\n"}{"\n"}
                              For implementing Asias biggest regional water supply project for 300 villages in Churu district in the year 1984 and
                              {"\n"}{"\n"}
                              For working very promptly for the prevention of flood in Balotra in the year 1990.
                              {"\n"}{"\n"}
                              Shri Sohan Raj has always been associated with Terapanth and has worked incessantly and untiringly for its service and 
                              development. Because of his great devotion to duty, the order and because of having full faith in and great respect for 
                              all the monks and nuns, he was honoured and awarded many times, as is clear from the details given below :
                              {"\n"}{"\n"}
                              Nominated as member, Terapanth Amrit Sansad, Churu region (from 1982 to 1987).
                              {"\n"}{"\n"}
                              Awarded Yuvak Ratna in Delhi in the year 1987, by all India Yuvak Parishad in the holy presence of Acharya Shri Tulsi.
                              {"\n"}{"\n"}
                              Nominated Vice President, All India Yuvak Parishad (from 1988 to 1990).
                              {"\n"}{"\n"}
                              Nominated Member, Executive Council, Jain Vishva Bharati, Ladnun from 1985 to 1990.
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="moreinfo">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>MORE INFORMATION</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="moreinfodetail">
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>
                              It is to be noted that in this period, his role in getting many things in the premises of Jain Vishva Bharati, Ladnun 
                              had been very significant. He played an important part in getting a well dug, building an underground water tank, an 
                              overhead water tank, pipe-lines, distribution of electricity, and installing electricity generator. He also took an 
                              active part in designing, and monitoring the construction of many beautiful buildings like Amritayan and Art Gallery.
                              {"\n"}{"\n"}
                              Shri Sohan Raj Tater devoted all his time to the independent functioning of Yuva Vahini, an organization meant for the 
                              youths in the year 1989 that had been declared as the Yogakshem year. He performed this job while he was giving his 
                              honourary services as Vice-President, All India Terapanth Yuvak Parishad.
                              {"\n"}{"\n"}
                              During Acharya Mahapragyas Ahimsa Yatra, (A march for the cause of non-violence), Shri Sohan Raj Tater, With the 
                              inspiration and blessings of Acharya Mahapragya, and with the permission of his family, left the government service, 
                              while he was on the post of Superintending Engineer, renounced his well-established cement factory worth crores of 
                                rupees and has decided to devote the rest of his life to the self-less service of the order, Terapantha as a life-long 
                              volunteer. He formally announced his decision in the proximity of Acharya Mahapragya, in January, 2002. On 26th January, 
                              2002 Acharyashri and Yuvacharyashri graced his cement factory located at Boranada (Jodhpur) by their holy presence. 
                              On that very day, at the auspicious time of morning, he, with the blessings of Acharyashri and listening to his holy words, 
                              started giving his services to Parmarthik Shikshan Sanstha, Ladnun. On February 18, 2002, Shri Sohan Raj Tater was formally 
                              nominated the trustee and convener of Parmarthik Shikshan Sanstha by the Trust Board of that institution in the gracious 
                              presence of Acharyashri on the occasion of Maryada Mahotsava organized at Pachpadra.
                              {"\n"}{"\n"}
                              Devotion, dedication, respect for Acharyashri and all the elders, Sadhna, perseverance and the desire of serving the 
                              order have always been important parts of his life. He has followed the maxim of Acharyashri Tulsi : first control 
                              yourself; then think of discipline, to the fullest. Simple living and high thinking has been the motto of his life.
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="takeninfo">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>
                              Taken from publication of Yuvadristi monthly magazine of Akhil Bhartiya Terapanth Yuvak Parisad, Ladnun in the editionFebruary, 2003, p. 37-38 under personality heading.
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
            <View style={styles.tabBar}>
              <TouchableOpacity style={styles.tabItems} onPress={() => navigate('Home')}>
                <Icon name='home' size={25} color='#444'/>
                <Text style={styles.tabTitle}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItems} onPress={() => navigate('EknowledgeMuseum')}>
                <Icon name='subscriptions' size={25} color='#444'/>
                <Text style={styles.tabTitle}>E-KNOWLEDGE MUSEUM</Text>
              </TouchableOpacity>          
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30
    },
    vids: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa',
        flexDirection: 'row'
    },
    photo: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa',
        alignItems: 'center'
    },
    pageHeading: {
        fontSize: 20,
        color: '#9e0472',
        fontWeight: 'bold',
        lineHeight: 20
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        textAlign: 'justify'
    },
    vidText: {
        fontSize: 18,
        color: '#9e0472',
        paddingBottom: 5,
        paddingTop: 5,
        textAlign: 'justify',
        lineHeight: 35
    },
    tabBar: {
        backgroundColor: '#fff',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderColor: '#bbb'
    },
    tabItems: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
    tabTitle: {
        fontSize: 11,
        color: '#333',
        paddingTop: 4,
        textDecorationLine: 'underline'
    },
    tabTitleTW: {
        fontSize: 20,
        color: '#9e0472',
        paddingTop: 4
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 80
    },
    tabSpace: {
        paddingLeft:10,
        paddingRight:10
    }
})