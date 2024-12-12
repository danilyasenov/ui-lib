import Typography from "../Typography";
import "./index.css";

const Heading = (props) => {
    const {
        level = 3,
        className = ''
    } = props;

    const combinedClassName = `Heading Heading--${level} ${className}`;
    const Tag = `h${level}`;

    return (
        <Tag className={combinedClassName}>
            {props.children}
        </Tag>
    );
}

export default Heading;
