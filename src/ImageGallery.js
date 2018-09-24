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
import Gallery from 'react-native-image-gallery';

let page = 0;
let pageCount = 20;
export default class ImageGallery extends React.Component{
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

    constructor(props){
        super(props)
        this.state = {
          data: null,
          nextPageNo: 0,
          prevPageNo: 0,
          rowLength: 0
        }
    }

    componentDidMount(){
      let apiUrl = `http://drsohanrajtater.com/api/imagegallery.php`;
      let pageNo = 0;
      if(this.props.navigation.state.params && this.props.navigation.state.params.page){
        pageNo = this.props.navigation.state.params.page;
      }
      
      if(pageNo>0){
        apiUrl += `?page=${pageNo}`;
      }
      
      fetch(apiUrl)    
        .then(res => res.json())
        .then(res => {
          const data = []
          res.data.forEach(item => {
            data.push(item)
          })
          this.setState({
            data: data,
            rowLength: data.length,
            nextPageNo: (this.props.navigation.state.params && this.props.navigation.state.params.page) ? (this.props.navigation.state.params.page+1) : 1,
            prevPageNo: (this.props.navigation.state.params && this.props.navigation.state.params.page) ? (this.props.navigation.state.params.page-1) : 0
          }) 
        })
        .catch(error => {
          console.error(error)
        })
    }

    render() {
        const {navigate} = this.props.navigation
        if (!this.state.data) {
          return (
            <ActivityIndicator
              animating={true}
              style={styles.indicator}
              size="large"
            />
          );
        }
        return (
          <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableHighlight key="imagegallery">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>IMAGE GALLERY of PROF.(DR.) SOHAN RAJ TATER</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key="imagegalleryold" onPress={ ()=> Linking.openURL(`http://drsohanrajtater.com/gallery`) }>
                        <View style={styles.vids}>
                            <Text style={styles.vidText}>Click for View Old Images</Text>
                        </View>
                    </TouchableHighlight> 
                    <Gallery
                      style={{ flex: 1, backgroundColor: '#fff', width: 320, height: 400 }}
                      images={this.state.data}
                    />
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
    pageHeading: {
        fontSize: 20,
        color: '#9e0472'
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    vidText: {
        fontSize: 18,
        color: '#9e0472',
        paddingBottom: 5,
        paddingTop: 5
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