"use client";

import {UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {Bird} from 'lucide-react';

import {Button} from "./ui/button";
import {ContainerLayout} from "./layout/ContainerLayout";
import {ModeToggle} from "./mode-toggle";

export const Header = () => {
    return (
        <ContainerLayout>
            <div className="flex items-center justify-between py-2 ">
                <Link className="flex items-center gap-3" href={"/"}>
                    <Bird/> Store
                </Link>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href={"/"}>
                            <Button variant={"link"}>Home</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/cart"}>
                            <Button variant={"link"}>Корзина</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/liked"}>
                            <Button variant={"link"}>Любимые</Button>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                    <ModeToggle/>
                    <UserButton/>
                </div>
            </div>
        </ContainerLayout>
    );
};
