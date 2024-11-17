import CharacterLength from "./CharacterLength";
import CharacterType from "./CharacterType";
import PasswordStrength from "./PasswordStrength";

const Config = () => {
    return (
        <div className="w-[34rem] bg-componentBg flex flex-col">
            <CharacterLength />
            <CharacterType />
            <PasswordStrength />
        </div>
    );
};

export default Config;
