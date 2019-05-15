import React ,{Component} from 'react';
import febi from './febi.png';

class Contact extends Component{
    render(){
        return(
<div>
<h1 text-align="center"> You can contact me : </h1>
<img src={febi} alt="Febi"/><br/>
<p>Febi Fiolanda Sari S</p>

</div>
        );
    }
}
export default Contact;