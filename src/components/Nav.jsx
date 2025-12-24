const Nav = () => {

    const navData = {
        navItems: [
            {id: 1, text: 'Designers'},
            {id: 2, text: 'Collabs'},
            {id: 3, text: 'Events'},
            {id: 4, text: 'Tasks'},
            {id: 5, text: 'Blog'},
            {id: 6, text: 'Card'},
        ],
        logo: {text: 'DVSY', className: 'logo'},
        ctaButton: {text: 'Get In Touch', className: 'cta-button'}
    }
    return (
            <div
                className="text-white flex justify-between items-center w-full p-4 flex-wrap gap-4 md:gap-0 uppercase"

            >

                <div className="text-4xl">
                    <h4 className="font-semibold">{navData.logo.text}</h4>
                </div>

                <div className=" flex gap-4 md:gap-8 flex-wrap ">
                    {
                        navData.navItems.map((item) => {
                            return <h4
                                key={item.id}
                                className="p-2 bg-[#1e1e1e]  border-none rounded-[10px] font-light text-2xl h-fit
                                hover:bg-gray-600 transition-colors duration-200 cursor-pointer
                                "

                            >{item.text}
                            </h4>
                        })
                    }
                    <button
                        className="p-2 bg-amber-700 border-none rounded-[10px] font-thin-700 text-2xl h-fit
                        hover:bg-amber-600 transition-colors duration-200 cursor-pointer uppercase"
                    >{navData.ctaButton.text}</button>
                </div>
            </div>
    );
};

export default Nav;