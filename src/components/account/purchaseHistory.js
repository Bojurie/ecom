import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchase from './purchase';
import PurchaseDetail from './purchaseDetail';


class PurchaseHistory extends Component {
    render(){
        return(
            <div>
                <PageTitle className='purchase-history__page-title' title='Purchase-History'/>
                <Purchase className='purchase-history__purchases'/>
                <PurchaseDetail className='purchase-history__detail'/>
                <div className='purchase-history__border-bottom'></div>
            </div>
        )
    }
}
export default PurchaseHistory;