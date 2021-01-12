import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody } from '@windmill/react-ui'
import React from 'react'
import { ArrowRight} from '../../icons'

function InvestmentHeaderComp({title, subtitle, icon, desc1, desc2, desc3, desc4}){
    return (
        
            <Card>
                <CardBody>
                    <div className="m-2">
                        <p className="text-xl font-extrabold text-center text-gray-600 dark:text-gray-400">{title}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-center text-gray-600 dark:text-gray-400">{subtitle}</p>
                    </div>
                    <i className="fa fa-sun-o" />
                    <div className="p-5 divide-y-2 divide-gray-600 dark:divide-gray-400 divide-dashed space-y-4 justify-center">
                        <div className="flex flex-row justify-around">
                           <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">{desc1}</span>
                        </div>
                        <div className="flex space-x-2">
                           <FontAwesomeIcon icon={faCheck} className="stroke-current text-green-600 dark:text-green-400"/>
                           <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">{desc2}</span>
                        </div>
                        <div className="flex space-x-2">
                           <FontAwesomeIcon icon={faUser} className="stroke-current text-green-600 dark:text-green-400"/>
                           <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">{desc3}</span>
                        </div>
                        <div className="flex space-x-2">
                           <FontAwesomeIcon icon={faLock} className="stroke-current text-green-600 dark:text-green-400"/>
                           <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">{desc4}</span>
                        </div>
                        <div className="p-2">
                            <button type="button" className="bg-green-600 text-white p-2 rounded  leading-none flex items-center text-xs">
                                Crazy Rich Robot <span className="bg-white p-1 rounded-full text-green-600 text-xs ml-2"><ArrowRight/></span>
                            </button>
                        </div>
                    </div>
                    
                </CardBody>
            </Card>
    )
}

export default InvestmentHeaderComp;