
const Heading = ({className,title}) => {
    return (
        <div className={`${className} max-w-[50rem] mx-auto `}>
            {title && <h2 className="h2 mb-10">{title}</h2>}
        </div>
    );
};

export default Heading;