import { Children } from 'react';
import './index.css';

const Typography = (props) => {
    const { 
        textSize = 'md',
        className = ''
    } = props;
    
    const combinedClassName = `Typography Typography--${textSize} ${className}`;
    return (
        <div>
            <p className={combinedClassName}>{props.children}</p>
        </div>
    );
}

export default Typography;
