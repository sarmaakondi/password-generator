import CharacterLength from "./CharacterLength";
import CharacterType from "./CharacterType";

const Config = () => {
    return (
        <div className="w-[34rem] bg-componentBg flex flex-col">
            <CharacterLength />
            <CharacterType />
        </div>
    );
};

export default Config;
