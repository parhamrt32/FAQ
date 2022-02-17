
export default function FAQsection({
    
    fontWeightBold,
    item,
    index,
    shown,
    onClick
}){
    return(
        <div className="faq_section">
        <div className="faq_question_section">
            <p onClick={onClick} className={`faq_question ${fontWeightBold}`} > {item.question} </p>
        </div>
           <p className={`faq_answer ${shown}`} > {item.answer} </p>
        </div>
    )
}