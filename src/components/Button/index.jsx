import "./index.css"

function Button(props){
    const {
        type = "button",
        variant = "primary",
        size = "md",
        children,
        onClick,
        disabled = false,
    } = props;
    const className = `my-button my-button--${variant} my-button--${size}`;

    return <button type={type} className={className} onClikc={onClick} disabled={disabled}>{children}</button>
        
    
}

export default Button