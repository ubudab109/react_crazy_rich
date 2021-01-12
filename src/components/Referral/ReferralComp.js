import { Badge, TableCell, TableRow } from '@windmill/react-ui';
import React, { Fragment } from 'react';


export const ReferralComp = (props) => {

    return(
        <Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <span className="text-sm">{props.name}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{props.email}</span>
                </TableCell>
                <TableCell>
                    <span className="text-sm">{new Date(props.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>   
                    <Badge>{props.refCode}</Badge>
                </TableCell>
            </TableRow>

        </Fragment>
    )
}
