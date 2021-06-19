import React, { ReactNode } from 'react'

// @ts-ignore
import logo from '../images/logo.png'
// @ts-ignore
import signature from '../images/signature.png'

export default class Hero extends React.Component {
  render(): ReactNode {
    return (
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-text-center uk-text-left@s'>
            <img className='uk-margin uk-box-shadow-medium' height='64' width='64' src={logo} alt='' />
          </div>
          <div className='uk-width-1-1 uk-width-2-3@m uk-width-1-2@l uk-margin uk-text-center uk-text-left@s'>
            <div>
              <h1>I design, develop, and manage cloud infrastructure that empowers teams to deploy software faster.</h1>
              <h3>My expertise is in migrating business applications to the cloud, and writing infrastructure-as-code (IaC) using AWS, Docker, and Terraform.</h3>
            </div>
            <div className='uk-text-center uk-text-right@s'>
              <img className='uk-margin uk-height-small' src={signature} alt='' />
            </div>
            <div className="uk-flex uk-flex-center">
              <ul className="uk-iconnav">
                <li><a target="_blank" href="https://github.com/chantzlarge" data-uk-icon="icon:github;"></a></li>
                <li><a target="_blank" href="https://instagram.com/ch__tz" data-uk-icon="icon:instagram;"></a></li>
                <li><a target="_blank" href="https://twitter.com/ch__tz" data-uk-icon="icon:twitter;"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
