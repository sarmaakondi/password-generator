const CharacterType = () => {
    return (
        <div className="flex flex-col gap-5 px-8 py-5 text-lg text-textColor">
            <div className="flex items-center gap-6">
                <input
                    className="h-6 w-6 appearance-none border-2 border-textColor checked:bg-customGreen"
                    type="checkbox"
                    name="uppercase"
                    id="uppercase"
                />
                <label htmlFor="uppercase">Include Uppercase Letters</label>
            </div>
            <div className="flex items-center gap-6">
                <input
                    className="h-6 w-6 appearance-none border-2 border-textColor checked:bg-customGreen"
                    type="checkbox"
                    name="lowercase"
                    id="lowercase"
                />
                <label htmlFor="lowercase">Include Lowercase Letters</label>
            </div>
            <div className="flex items-center gap-6">
                <input
                    className="h-6 w-6 appearance-none border-2 border-textColor checked:bg-customGreen"
                    type="checkbox"
                    name="numbers"
                    id="numbers"
                />
                <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="flex items-center gap-6">
                <input
                    className="h-6 w-6 appearance-none border-2 border-textColor checked:bg-customGreen"
                    type="checkbox"
                    name="symbols"
                    id="symbols"
                />
                <label htmlFor="symbols">Include Symbols</label>
            </div>
        </div>
    );
};

export default CharacterType;
