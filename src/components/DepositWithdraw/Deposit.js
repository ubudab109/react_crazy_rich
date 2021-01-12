import { Badge, TableCell, TableRow } from '@windmill/react-ui';
import React, { Fragment } from 'react';


export const DepositData = (props) => {
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
    return(
    <Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <span className="text-sm">{new Date(props.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                    <Badge>{props.depositId}</Badge>
                </TableCell>
                <TableCell>
                    <span className="text-sm">$ {props.usd}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">$ {props.usdt}</span>
                </TableCell>
                <TableCell>
                    <span className={statusColor()}>{props.status}</span>
                </TableCell>
            </TableRow>
    </Fragment>
    )
}