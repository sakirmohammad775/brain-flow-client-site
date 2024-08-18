
const Heading = ({className,title,text}) => {
    return (
        <div className={`${className} max-w-[50rem] mx-auto `}>
            {title && <h2 className="h2 mb-10">{title}</h2>}
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
        </div>
    );
};

export default Heading;