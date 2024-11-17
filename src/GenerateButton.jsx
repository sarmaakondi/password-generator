const GenerateButton = () => {
    return (
        <div className="flex px-8 py-5 mb-4">
            <button className="w-[32rem] uppercase text-lg text-pageBg border-2 border-customGreen bg-customGreen px-8 py-5 cursor-pointer hover:bg-componentBg hover:border-2 hover:border-customGreen hover:text-customGreen">
                <div className="flex items-center justify-center gap-6">
                    <span>generate</span>
                    <span>-&gt;</span>
                </div>
            </button>
        </div>
    );
};

export default GenerateButton;
