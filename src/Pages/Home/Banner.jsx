

const Banner = ({children,id,crosses,crossesOffset,customPaddings,className}) => {
    return (
        <>
            <div className={`relative ${customPaddings|| `py-10 lg:py-16 xl:py-20 ${crosses?"lg:pyy-32 xl:py-40":""} ${className|| "" }`}`}>
                {children}
            </div>
        </>
    );
};

export default Banner;