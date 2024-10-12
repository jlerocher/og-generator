import { ModeToggle } from "../theme/ModeToggle";

type Props = {
    title: string;
};

const Header = (props: Props) => {
    return (
        <header className="mb-5 flex w-full items-center justify-between border-b-2 border-border px-2 py-5">
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <ModeToggle />
        </header>
    );
};

export default Header;
