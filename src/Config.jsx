import CharacterLength from "./CharacterLength";
import CharacterType from "./CharacterType";
import PasswordStrength from "./PasswordStrength";
import GenerateButton from "./GenerateButton";

const Config = () => {
    return (
        <div className="w-[34rem] bg-componentBg flex flex-col">
            <CharacterLength />
            <CharacterType />
            <PasswordStrength />
            <GenerateButton />
        </div>
    );
};

export default Config;
