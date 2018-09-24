import React from 'react'
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class EknowledgeMuseum extends React.Component{
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
                    <TouchableHighlight key="Homeek" onPress={() => navigate('Homeek')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Home</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="articles" onPress={() => navigate('Articles')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Articles</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="books" onPress={() => navigate('Books')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Books</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="gallery" onPress={() => navigate('ImageGallery')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Gallery</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="awards" onPress={() => navigate('Awards')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Awards</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="profile" onPress={() => navigate('Profile')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Profile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="achivements" onPress={() => navigate('Achivements')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Achievements</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="researchcell" onPress={() => navigate('Research')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Research Cell</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="publicopinion" onPress={() => navigate('PublicOpinion')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Public Opinion</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="speeches" onPress={() => navigate('Speeches')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Tater's Speeches</Text>
                            </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="museum" onPress={() => navigate('Museum')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Museum</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="contact" onPress={() => navigate('Contact')}>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Contact</Text>
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
        borderColor: '#aaa'
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    vidText: {
        fontSize: 25,
        color: '#9e0472'
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
    }
})

