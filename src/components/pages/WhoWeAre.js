import React from 'react';
import '../../App.css';
import './WhoWeAre.css';
import garbaImage from "../../images/garba.jpg";

function WhoWeAre() {
    return (
        <>
            <h1 className="who-we-are">OUR STORY</h1>
            <div className="our-story-container">
                    <img src={garbaImage} alt="Central Zone Navratri" className="our-story-image" />
                    <div className="our-story-information">
                        <p>Chocolate cake dragée chocolate muffin I love cupcake I love. Bonbon bear claw cupcake liquorice sweet.
                            Tootsie roll shortbread carrot cake icing I love. Macaroon gummies muffin candy canes candy canes I love sugar plum.
                            Chocolate cake caramels cheesecake powder liquorice shortbread liquorice gummi bears oat cake. Candy tart ice
                            cream wafer carrot cake soufflé. Tiramisu cheesecake carrot cake fruitcake liquorice cake pudding. I love
                            cheesecake marshmallow icing macaroon sweet roll gingerbread gingerbread bear claw. Chocolate cake 
                            chocolate jujubes dragée lemon drops candy canes.<br/><br/>

                            Biscuit bear claw gingerbread bonbon topping sweet roll. Carrot cake tart jelly beans 
                            cheesecake jelly-o biscuit jelly beans lemon drops. Icing halvah ice cream shortbread 
                            muffin jelly beans. Apple pie gummies jelly-o sesame snaps icing liquorice I love I love. <br/><br/>
                        </p>
                    </div>
            </div>
        </>

    )
}


export default WhoWeAre;
