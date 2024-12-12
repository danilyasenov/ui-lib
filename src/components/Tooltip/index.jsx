import './index.css';

const Tooltip = (props) => {
    const {
        text = 'tip',
        position = 'top',
        children,
    } = props;

    const className = `Tooltip Tooltip--${position}`;
    
    return (
        <div className="TooltipWrapper">
            <span className={className}>
                {text}
            </span>
            {children}
        </div>
    );
};

export default Tooltip;
