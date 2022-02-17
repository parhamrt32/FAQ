
import React from 'react'
import up from '../faq-accordion-card-main/images/icon-arrow-down.svg'
import FAQsection from './FAQsection';

export default function FAQ({data}){
    
    const [activeIndex , setIndex] = React.useState(1);
    

    return(
        <>
            <div className='faqs'> 
                <h1 className="faq__title">FAQ</h1>
            
            
        {
        data.map( (item , index) => {
        const shown = index === activeIndex ? 'shown' : '';
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
        
        return(
            <FAQsection
            key={index}
                fontWeightBold={fontWeightBold}
                item={item}
                index={index}
                shown={shown}
                onClick={() => {
                    setIndex(index)
                } }
            />
        )

    })
        }
        </div>
        </>
       
    )

   


    

}