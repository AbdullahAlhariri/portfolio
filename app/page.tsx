import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Dropdown from "./components/dropdown";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 animate-fade-in"
				quantity={2000}
			/>
			{/*<nav className="my-10 animate-fade-in">*/}
			{/*	<ul className="flex items-center justify-center ml-4">*/}

			{/*		<Link*/}
			{/*			href="/projects"*/}
			{/*			className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"*/}
			{/*		>*/}
			{/*			Projects*/}
			{/*		</Link>*/}
			{/*		<Link*/}
			{/*			href="/contact"*/}
			{/*			className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 ml-4"*/}
			{/*		>*/}
			{/*			Contact*/}
			{/*		</Link>*/}
			{/*		<Dropdown />*/}
			{/*	</ul>*/}
			{/*</nav>*/}
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Abdullah
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="mb-10 mt-4 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Young self-taught full-stack developer, focust on making secure, <br />stable and scalable web applications using Symfony & Laravel.
				</h2>
			</div>
		</div>
	);
}
