const Password = () => {
    return (
        <div className="w-[34rem] flex items-center justify-between bg-componentBg px-8 py-5 mb-6">
            <h2 className="text-textColor text-4xl">Password </h2>
            <svg
                className="fill-customGreen hover:fill-textColor cursor-pointer"
                width="21px"
                height="24px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                    <path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" />

                    <path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" />
                </g>
            </svg>
        </div>
    );
};

export default Password;
