type ContainerLayoutProps = {
    children: React.ReactNode;
};

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
    return <div className={'container max-w-6xl mx-auto'}>{children}</div>;
};
