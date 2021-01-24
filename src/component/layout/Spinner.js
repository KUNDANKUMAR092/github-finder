import React, {Fragment} from 'react';
import spinner from '../../component/img/spinner.gif';

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loding..." style={{ width: '200px', margin: 'auto', display: 'block'}}/>
        </Fragment>
    )
}

export default Spinner
