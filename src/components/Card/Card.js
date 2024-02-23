const Card = ({ children }) => {
    return (
        <div className="flex flex-col mx-auto w-full sm:w-9/12 justify-start items-center">
            {children}
        </div>
    );
};

export default Card;
