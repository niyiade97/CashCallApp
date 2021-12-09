import React from 'react';
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import Transaction from '../Components/Dashboard/Transaction';

function TransactionPage() {
    return (
            <div className="w-full flex">
                <Transaction />
            </div>
    )
}

export default TransactionPage;
