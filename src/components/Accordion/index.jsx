import './index.css';
import react, {useState} from 'react';

const Accordion = ({title,defaultOpen = false, children}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return ( 

        <div className="Accordion">
            <div className="AccordionHeader" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="AccordionContent">{children}</div>}
            
        </div>
    );
};
export default Accordion

