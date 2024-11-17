const PasswordStrength = () => {
    return (
        <div className="flex items-center justify-between px-8 py-5">
            <div className="w-[32rem] flex items-center justify-between bg-pageBg uppercase text-lg px-8 py-5">
                <p className="text-headingColor">strength</p>
                <div className="flex gap-4">
                    <div>
                        <p className="text-textColor text-2xl">medium</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-8 bg-pageBg border-2 border-textColor"></div>
                        <div className="w-3 h-8 bg-pageBg border-2 border-textColor"></div>
                        <div className="w-3 h-8 bg-pageBg border-2 border-textColor"></div>
                        <div className="w-3 h-8 bg-pageBg border-2 border-textColor"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordStrength;
