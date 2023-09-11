import { Loader } from 'lucide-react';

export const Loading = () => {
    return (
        <div className="w-[100%] h-[calc(100vh-90px)] flex items-center justify-center">
            <Loader className="h-10 w-10 animate-spin" />
        </div>
    );
};
