import Accordion from "./Accordion";
import i18next from '../i18n'

const Faq = () => {
    return(
        <ul className="flex flex-col">
            <Accordion 
                title={i18next.t("faq.confirmationLimit.question")}
                body={
                    <p>
                        {i18next.t("faq.confirmationLimit.answer.firstParagraph")}
                    </p>
                }
            />

            <Accordion 
                title={i18next.t("faq.dressCode.question")}
                body={
                    <>
                        <p>
                            {i18next.t("faq.dressCode.answer.firstParagraph")}
                        </p>
                        <p>
                            {i18next.t("faq.dressCode.answer.secondParagraph")}
                        </p>
                        <p>
                            {i18next.t("faq.dressCode.answer.thirdParagraph")}
                        </p>
                    </>
                }
            />
            
            <Accordion 
                title={i18next.t("faq.whereToSleep.question")}
                body={
                    <>
                        <p>
                            {i18next.t("faq.whereToSleep.answer.firstParagraph")}
                        </p>
                        <p>
                            {i18next.t("faq.whereToSleep.answer.secondParagraph")}
                        </p>
                    </>
                }
            />

            <Accordion 
                title={i18next.t("faq.inviteOtherPerson.question")}
                body={
                    <p>
                        {i18next.t("faq.inviteOtherPerson.answer.firstParagraph")}
                    </p>
                }
            />

            <Accordion 
                title={i18next.t("faq.childrenAtTheWedding.question")}
                body={
                    <>
                        <p>
                            {i18next.t("faq.childrenAtTheWedding.answer.firstParagraph")}
                        </p>
                        <p>
                            {i18next.t("faq.childrenAtTheWedding.answer.secondParagraph")}
                        </p>
                    </>
                }
            />

            <Accordion 
                title={i18next.t("faq.otherQuestion.question")}
                body={
                    <p>
                        {i18next.t("faq.otherQuestion.answer.firstParagraph")}
                    </p>
                }
            />
        </ul>
    )
}

export default Faq;