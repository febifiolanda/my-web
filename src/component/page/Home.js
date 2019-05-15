import React ,{Component} from 'react';


class Home extends Component{
    render(){
        return(
            <div>
                <div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="img_nature_wide.jpg" style={{width: '100%'}} />
            <div className="text">Caption Text</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="img_snow_wide.jpg" style={{width: '100%'}} />
            <div className="text">Caption Two</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="img_mountains_wide.jpg" style={{width: '100%'}} />
            <div className="text">Caption Three</div>
          </div>
        </div>
        <br />
        <div style={{textAlign: 'center'}}>
          <span className="dot" /> 
          <span className="dot" /> 
          <span className="dot" /> 
        </div>
      </div>

<p backgroundColor="yellow" justify="center">Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. We'll put some happy little leaves here and there. We tell people sometimes: we're like drug dealers,
 come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. God gave you this gift of imagination. Use it.
Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect.</p> 
<p>This is probably the greatest thing to happen in my life - to be able to share this with you. Just go out and talk to a tree. Make friends with it. Put it in, leave it alone. You have to allow the paint to break to make it beautiful.
In your imagination you can go anywhere you want.</p>
<p>Mountains are so simple, they're hard. Trees get lonely too, so we'll give him a little friend. We have all at one time or another mixed some mud. When you buy that first tube of paint it gives you an artist license.
 Go out on a limb - that's where the fruit is. Let all these little things happen. Don't fight them. Learn to use them.</p>
 <p>This is a happy place, little squirrels live here and play. All you have to do is let your imagination go wild. Fluff it up a little and hypnotize it.</p>
 <p>With practice comes confidence. In your world you can create anything you desire. You have to make these big decisions. You're meant to have fun in life. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow.</p>
</div>



        );
    }
}
export default Home;