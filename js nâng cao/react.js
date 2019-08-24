import react , { componnent } from 'react';
import{
    View,
    Animated,
    PanRespondes
} from 'react-native'

class Deck extends componnent{
    constructor (props){
        super(props);
        const PanRespondes = PanRespondes.create({
            onStartShouldSetPanRespondes: () => true,
            onPanRespondesMove: (event, gesture) => {},
            onPanRespondesRelease: () =>{},
        });
        this.PanRespondes= PanRespondes;
        this.state= {PanRespondes};
    }
    renderCard(){
        return this.props.data.map(item=>{
            return this.props.renderCard(item);
        });
    }
    render(){
        this.create=PanRespondes;
        return (
            <view>
                (this.renderCard());
            </view>
        );
    }
    
}
export default class tien extends componnent{
    
}
export default class Bananas extends Component {
    render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width: 193, height: 110}}/>
      );
    }
  }
