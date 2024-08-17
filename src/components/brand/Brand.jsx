import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google}  alt='IMAGE1'/>
    </div>
    <div>
      <img src={slack}  alt='IMAGE2'/>
    </div>
    <div>
      <img src={atlassian}  alt='IMAGE3'/>
    </div>
    <div>
      <img src={dropbox}  alt='IMAGE4'/>
    </div>
    <div>
      <img src={shopify}  alt='IMAGE5'/>
    </div>
  </div>
);

export default Brand;
