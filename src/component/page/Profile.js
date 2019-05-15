import React ,{Component} from 'react';
import febi from './febi.png';

class Profile extends Component{
    render(){
        return(
<div>
<h3>Hello</h3>
<img src={febi} alt="Febi" alignItems="center"/><br/>
<p>Febi Fiolanda Sari S</p>
</div>
        );
    }
}
export default Profile;