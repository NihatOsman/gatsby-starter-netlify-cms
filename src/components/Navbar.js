import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logos/logo-shipcars.svg';
import smallLogo from '../assets/logos/small-logo.svg';
import DropDown from './DropDown';


import Button from '@material-ui/core/Button';
const headerCongif = [
  {
    title: 'Products',
    open: false,
    menu: [
      {
        title: 'Calcatron',
        icon: 'calcatron',
        to: '/calcatron-car-shipping-calculator',
        description: 'Access our innovative Predicative Rate Engine'
      },
      {
        title: 'Shipper TMS',
        icon: 'shipper',
        to: '/shipper-tms',
        description: 'Search & post new loads daily'
      },
      {
        title: 'Market Loadboard',
        icon: 'market',
        to: '/market-car-transport-loadboard',
        description: 'Automate your vehicle transport workflows'
      },
      {
        title: 'Carrier TMS',
        icon: 'carrier',
        to: '/carrier-tms',
        description: 'Automate your vehicle shipping processes'
      },
      {
        title: 'Driver ePOD',
        icon: 'driver',
        to: '/driver-epod',
        description: 'Download our mobile app for drivers'
      }
    ]
  },
  {
    title: 'Use Cases',
    class: 'use-case',
    open: false,
    menu: [
      {
        title: 'Shippers & Brokers',
        icon: 'careers',
        to: '/use-cases-brokers-shippers',
        description:
          'Optimize your business & increase productivity with automatic status updates and instant tracking'
      },
      {
        title: 'Carriers & Drivers',
        icon: 'carriers-drivers',
        to: '/use-cases-carriers-drivers',
        description:
          'Discover how to make workplace operations securer and easier with our innovative tech & software'
      }
    ]
  },
  {
    title: 'Company',
    classes: 'company',
    open: false,
    menu: [
      { title: 'About', icon: 'about', to: '/about' },
      { title: 'Prices', icon: 'prices', to: '/prices' },
      { title: 'Careers', icon: 'careers', to: '/careers' },
      { title: 'Contact', icon: 'contact-us', to: '/' }
    ]
  }
];



export default props => {


  return (
    <header className={`header ${props.fixHeader ? 'fixed' : ''}`}>
      <div>
        <Link className="nav-item" to="/">
          <img className="logo" src={logo} alt="ship cars" />
          <img
            className={`small-logo
                ${props.fixHeader ? 'hide' : ''}`}
            src={smallLogo}
            alt="ship cars"
          />
        </Link>
        <div className="navigation">
                <div className="navbar-menu">
                    {headerCongif.map((item, index) => (
                        <DropDown item={item} key={index} />
                    ))}
                    <a className="nav-item" href="https://help.ship.cars/">
                        Knowledge Base
                    </a>
                </div>
            </div>
       
         

      </div>
    </header>
  )
}


