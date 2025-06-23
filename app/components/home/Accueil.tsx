"use client";
import React from "react";
import "./accueil.scss";
import Link from "next/link";

export default function Accueil() {
	return (
		<div>
			<div className="home-container">
				<div className="content w-[70%] ">
					<div className="left bg-col1">
						<div className="left-container">
							<div className="up mt-[10%] px-5">
								<div className="text-container p-2">
									<p className="text-justify text-white">
										Chez BIGWASH, la propreté et l'éclat de
										vos vêtements est assuré
									</p>
								</div>
							</div>
							<div className="down px-5">
								<div className="logo-container">
									<img
										src="/logo_bigwash.jpg"
										alt="Logo"
										className="rounded-[20px] "
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="right bg-white -ml-7 rounded-[30px]">
						<div className="right-container">
							<div className="content">
								<div className="the-content">
									<div className="text">
										<p className="text-col3">
											Type de Client
										</p>
									</div>
									<div className="buttons">
										<div className="new">
											<Link
												href="/client"
												className="btn-text bg-col3"
											>
												Nouveau Client
											</Link>
										</div>
										<div className="old">
											<div className="btn-text bg-col3">
												Ancient Client
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
