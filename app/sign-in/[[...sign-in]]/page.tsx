import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="w-[100%] h-[calc(100vh-80px)] flex items-center justify-center">
            <SignIn />
        </div>
    );
}
