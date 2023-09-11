import { Bird } from 'lucide-react';

export const Nothing = () => {
    return (
        <div className="w-[100%] h-[calc(100vh-90px)] flex flex-col items-center justify-center">
            <Bird className="h-10 w-10" />
            <p>Empty :)</p>
        </div>
    );
};
