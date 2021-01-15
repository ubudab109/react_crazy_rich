import { Badge, TableCell, TableRow } from '@windmill/react-ui';
import React, { Fragment } from 'react';


export const InvestmentTransaction = (props) => {
    const statusColor = () => {
        let status = props.invest_status;
        switch(status){
            case 'Inactive':
                return 'text-sm font-extrabold text-red-600';
            case 'Active':
                return 'text-sm font-extrabold text-green-400';
            default:
                return '';
        }
    }

    return (
        <Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <span className="text-sm">{new Date(props.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                    <Badge>{props.contract_id}</Badge>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{props.paket_id}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm text-green-500 dark:text-green-300 font-semibold">$ {props.amount_invest}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{props.persen_profit}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{props.day_left}</span>
                </TableCell>
                <TableCell>
                    <span className={statusColor()}>{props.invest_status}</span>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

export const WithdrawInvestment = (props) => {
    const statusColor = () => {
        let status = props.status;
        switch(status){
            case 'Pending':
                return 'text-sm font-extrabold text-orange-400';
            case 'Declined':
                return 'text-sm font-extrabold text-red-600';
            case 'Success':
                return 'text-sm font-extrabold text-green-400';
            default:
                return '';
        }
    }
    return (
        <Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <span className="text-sm">{new Date(props.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm text-green-500 dark:text-green-300 font-semibold">$ {props.wd_beforefee}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm text-green-500 dark:text-green-300 font-semibold">$ {props.total_wd}</span>
                </TableCell>
                <TableCell>
                    <Badge>{props.wd_id}</Badge>
                </TableCell>
                <TableCell>
                    <span className={statusColor()}>{props.status}</span>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}