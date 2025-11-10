

export function ContactUsPage() {

    return (
        <>
            <main className="flex flex-col gap-10 font-poppins items-center p-5">

                <section className="flex flex-row gap-40">
                    <div className="flex justify-center items-center flex-col">
                        <a
                            href="https://github.com/mnemosyne9643"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/92632083?v=4"
                                className="rounded-full w-50 h-50 hover:border-solid hover:border-2 hover:border-black cursor-pointer"
                                alt="Zoie De Paz"
                            />
                        </a>
                        <label className="font-bold">Zoie De Paz</label>
                        <label>Team Leader</label>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <a
                            href="https://github.com/timocheu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/141370315?v=4"
                                className="rounded-full w-50 h-50 hover:border-solid hover:border-2 hover:border-black cursor-pointer"
                                alt="Timotheo Che Padilla"
                            />
                        </a>
                        <label className="font-bold">Timotheo Che Padilla</label>
                        <label>Main Programmer</label>
                    </div>
                </section>

                <section className="flex flex-row gap-40">
                    <div className="flex justify-center items-center flex-col">
                        <a
                            href="https://github.com/amonMid"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/156290626?v=4"
                                className="rounded-full w-50 h-50 hover:border-solid hover:border-2 hover:border-black cursor-pointer"
                                alt="Anchor Jave Arnejo"
                            />
                        </a>
                        <label className="font-bold">Anchor Jave Arnejo</label>
                        <label>Assistant Programmer</label>
                    </div>


                    <div className="flex justify-center items-center flex-col">
                        <a
                            href="https://github.com/chandyclaire"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/169374594?v=4"
                                className="rounded-full w-50 h-50 hover:border-solid hover:border-2 hover:border-black cursor-pointer"
                                alt="Chandy Claire Rebocqiou"
                            />
                        </a>
                        <label className="font-bold">Chandy Claire Rebocqiou</label>
                        <label>UIX Designer</label>
                    </div>


                </section>
            </main>
        </>
    )

}