import { TableCell,TableRow } from '@windmill/react-ui';
import React, { Fragment } from 'react';


export const ReferralBonusData = (props) => {
    
    return(
        <Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <span className="text-sm">{new Date(props.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm text-green-500 dark:text-green-300 font-semibold">$ {props.profit}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{props.desc}</span>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}