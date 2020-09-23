import React, {Component} from 'react';
import LandingPagePrWeb from '../presentational/web-view/LandingPage/LandingPagePrWeb';
import LandingPagePrMob from '../presentational/mobile-view/LandingPage/LandingPagePrMob';
import Media from 'react-media';

class LandingPage extends Component{
    render(){
        return (
            <Media queries={{ small: { maxWidth: 599 } }}>
                {matches =>
                    matches.small ? (
                        <LandingPagePrMob/>
                    ) : (
                        <LandingPagePrWeb />
                        )
                }
            </Media>
        )
    }
}

export default LandingPage;