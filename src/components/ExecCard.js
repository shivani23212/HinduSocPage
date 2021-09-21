import React from 'react';
import './ExecCard.css';


function ExecCard(props) {
   return (
    <>
        <div className="exec__card">
            <div className="exec__card__container">                  
                <div className="exec__card__name">{props.name}</div>

                <div className="exec__card__info">
                    <img src = "images/image-1-logo.jpg" className="exec__card__photo"/>
                    <div className="exec__card__desc">Description Here
                    frferiufjriuehgfiehfierjfuierujfierjfierujfierujferf
                    erferf
                    erferfrfnrnferhfiejdidjiewnfreifriejfreihfireufherf
                    refnuierfuierfierhfiernfirbfierbfuibfirefuerfr
                    fiojeowjqendejfrefjierjfrenfnfuiernfirenfirnfirnfirenfirew</div>
                </div>

            </div>
        </div>

    </>
   )
}

export default ExecCard;