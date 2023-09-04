'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Bird, Home, ShoppingCart, Heart, BookOpenCheck, Lock } from 'lucide-react';

import { Button } from './ui/button';
import { ContainerLayout } from './layout/ContainerLayout';
import { ModeToggle } from './mode-toggle';

export const Header = () => {
    return (
        <ContainerLayout>
            <div className="flex items-center justify-between py-2 ">
                <Link className="flex items-center gap-3" href={'/'}>
                    <Bird /> Store
                </Link>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href={'/'}>
                            <Button className="flex items-center gap-2" variant={'ghost'}>
                                Home <Home width={16} height={16} />
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/cart'}>
                            <Button className="flex items-center gap-2" variant={'ghost'}>
                                Cart <ShoppingCart width={16} height={16} />{' '}
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/liked'}>
                            <Button className="flex items-center gap-2" variant={'ghost'}>
                                Like <Heart width={16} height={16} />
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/orders'}>
                            <Button className="flex items-center gap-2" variant={'ghost'}>
                                Orders <BookOpenCheck width={16} height={16} />
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin'}>
                            <Button className="flex items-center gap-2" variant={'ghost'}>
                                Admin <Lock width={16} height={16} />
                            </Button>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </ContainerLayout>
    );
};
