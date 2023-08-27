"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function App() {
    return (
        <Dropdown className="dark">
            <DropdownTrigger className="block">
                <Button
                    className=" text-sm block duration-500 text-zinc-500 hover:text-zinc-300 p-0"
                    variant="light"
                    data-hover={false}
                    disableRipple={true}
                    fullWidth={false}
                >
                    Resume
                </Button>
            </DropdownTrigger>
            <DropdownMenu >
                <DropdownItem
                    key="english"
                    startContent={<ExternalLink size={15} />}
                    className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                    <Link href="/resume/en.webp" target="_blank">
                        English variant
                    </Link>
                </DropdownItem>
                <DropdownItem
                    startContent={<ExternalLink size={15} />}
                    key="dutch"
                    className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                    <Link href="/resume/nl.webp" target="_blank">
                        Dutch variant
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
