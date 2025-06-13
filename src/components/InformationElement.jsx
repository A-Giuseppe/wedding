
const InformationElement = ({image, title, description}) => {

    return(
        <li id={title} className="flex flex-1 flex-col items-center justify-center p-5">
            <h3 className="order-2 text-2xl sm:text-3xl pb-3 font-bold"> {title}</h3>
            <div className="flex justify-center order-1 h-32 sm:h-40 mt-3 mb-3">
                <img src={image} alt="card image"/>
            </div>
            <p className="order-3 text-center text-lg md:text-xl leading-relaxed"> {description}</p>
        </li>
    );

}

export default InformationElement;