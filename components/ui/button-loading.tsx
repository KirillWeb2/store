'use client';

import { RotateCcw } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

export interface ButtonLoadingProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
export function ButtonLoading({ children, onClick, ...rest }: ButtonLoadingProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(
        async (event: React.MouseEvent<HTMLButtonElement>) => {
            setIsLoading(true);
            await onClick?.(event);
            setIsLoading(false);
        },
        [onClick, setIsLoading],
    );

    return (
        <Button onClick={handleClick} disabled={isLoading} {...rest}>
            {isLoading && <RotateCcw className="h-4 w-4 animate-spin" />}
            {!isLoading && children}
        </Button>
    );
}
