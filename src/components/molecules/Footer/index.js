import React from 'react';
import './footer.scss';
import { LogoBitnami, IconFB, IconIG, IconLinked, IconGH } from '../../../assets';

const Icon = ({img}) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoBitnami} alt="logo"/>           
        </div>
        <div className="social-wrapper">
          <Icon img={IconFB} />
          <Icon img={IconIG} />
          <Icon img={IconLinked} />
          <Icon img={IconGH} />
        </div>
      </div>
      <div className="copyright"><p>Copyright</p></div>
    </div>
  )
}

export default Footer