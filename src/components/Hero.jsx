import img2 from '../assets/rt2-2.webp';
import img3 from '../assets/rt2-3.webp';
import img4 from '../assets/rt2-4.webp';


const Hero = () => {

    const heroTitle = ['Design', '& Freedom']
    const heroDescription = 'Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel'
    const cards = [
        {
            id: 1,
            title: 'Independency',
            description: 'Explore the creativity of independent designers from around the globe.'
        },
        {
            id: 2,
            title: 'Uniquity',
            description: 'Discover the charm of unique pieces that stand out effortlessly'
        },
        {
            id: 3,
            title: 'Quality',
            description: 'Experience unparalleled craftsmanship and attention to detail.'
        },
        {
            id: 4,
            title: 'Sustainability',
            description: 'Embrace eco-conscious fashion choice without compromising on style.'
        }
    ];
    const statsData = [
        {
            id: 1,
            statsText: 'designers',
            statsNum: 150,
        },
        {
            id: 2,
            statsText: 'clients',
            statsNum: 500,
        },
        {
            id: 3,
            statsText: 'masterpieces',
            statsNum: 20,
        },
        {
            id: 4,
            statsText: 'events',
            statsNum: 50,
        },
    ];
    const businessInfo = [
        {
            id: 1,
            tag: 'About',
            title: 'WHERE FASHION MEETS FREEDOM',
            description: 'We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation, we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate reach collection with a keen eye for unique designs that inspire confidence and self-expression.',
            img:
                {
                    // src: './assets/rt2-2.webp',
                    src: img2,
                }
        },
        {
            id: 2,
            tag: 'Our Advantages',
            title: ['INDEPENDENT DESIGNERS', 'EXCLUSIVE & UNIQUITY', 'HIGH QUALITY', 'ECO FRIENDLY'],
            description: ['Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.',
                'Indulge in curated collections showcasing exclusive, one-of-a-kind pieces. each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.',
                'Embrace Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur doloremque ducimus iste molestiae molestias, mollitia quasi reiciendis rem consequuntur doloremque ducimus iste molestiae consequuntur doloremque ducimus iste molestiae velit.',
                'Join Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam at cum dolor ea harum id illum, modi nisi perferendis quaerat quasi repellendus soluta veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam at cum dolor ea harum id illum, modi nisi perferendis quaerat quasi repellendus soluta veritatis!',
            ],
            img: {
                src: [
                    // './assets/rt2-3.webp',
                    // './assets/rt2-4.webp',
                    img3, img4,
                ]
            }
        },

    ];



    return (
        <>
            <div
                className="
        bg-[url('./assets/rt2-1.png')]
        {/*bg-contain bg-top bg-no-repeat  rounded-2xl max-w-full h-full m-3 p-3 flex flex-col justify-start*/}
         bg-cover md:bg-contain bg-top bg-no-repeat rounded-2xl max-w-full
         min-h-[400px] md:h-full
         {/*h-[70vh] md:h-[80vh] lg:h-[90vh]*/}
         m-3 p-3 flex flex-col
         justify-start
         {/*justify-between*/}

        "
            >
                <h1 className="
                 {/*text-8xl*/}
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                 uppercase font-light
                 {/*content-end*/}
                 tracking-widest
                 {/*pl-[10%] pt-[30%]*/}
                 pl-[5%] md:pl-[10%]
                 pt-[15%] md:pt-[30%]
                {/*text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-light tracking-widest*/}
                {/*pl-[5%] md:pl-[10%] pt-[20%] md:pt-[30%] lg:pt-[25%]*/}

                "
                >{heroTitle[0]} <br/> <span className="pl-[5%] md:pl-[11%]"> {heroTitle[1]} </span></h1>
                <div className="flex justify-between items-start  pt-[3%] md:pt-[2%] gap-4  md:flex-row flex-col ">
                    <p className="  text-lg md:text-2xl  md:w-1/2 font-light pl-[5%] md:pl-[20%] text-center md:text-left  w-full">{heroDescription}</p>
                    <p className="  text-2xl md:w-1/3 font-light flex justify-center md:justify-end pr-[5%]  uppercase opacity-60 text-end w-full pt-4">
                        <i className={
                            "ri-arrow-down-long-line bg-[gray] rounded-full p-2  w-8 h-8 inline-flex items-center justify-center text-base leading-none "
                        }></i><span className={"px-1"}>Learn More</span>
                    </p>
                </div>
            </div>
            <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 w-full
            {/*flex justify-center items-center overflow-x-hidden flex-wrap gap-4 px-4 w-full*/}
            "
            >
                {cards.map(card => {
                    return (
                        <div
                            className="
                            {/*flex flex-col px-[1.5%] bg-[#171717] border-none justify-between font-light rounded-[1rem] min-w-auto min-h-auto */}
                             flex flex-col
                            p-6
                            bg-[#1e1e1e]
                            rounded-xl
                            font-light
                            w-auto
                            h-60
                            {/*flex-shrink-0   */}
                            justify-between

                            "
                            key={card.id}>
                            <h2 className="font-semibold text-lg p-4"
                            >{card.title}</h2>
                            <p className="text-base py-5 w-70 p-4"
                            >{card.description}
                            </p>
                            <p className={"text-sm uppercase opacity-60 text-end px-[2rem] py-1"}> <i className={"ri-arrow-right-up-long-line p-2 bg-[gray] rounded-[50%]"}></i><span className={"px-1"}>Learn More</span></p>


                        </div>
                    )
                })}
            </div>
            <div
                className="
                grid grid-cols-2 md:grid-cols-4 gap-4 p-8 uppercase
                {/*uppercase flex justify-evenly items-center overflow-x-hidden flex-wrap gap-4 p-[3rem] w-full */}
                ">
                {
                    statsData.map(stat => {
                        return (
                            <div>
                                <h3 className="font-light">{stat.statsText}</h3>
                                <h3 className="font-semibold">
                                    {stat.statsText !== "masterpieces" ? stat.statsNum + "+" : stat.statsNum + "K+"}
                                </h3>
                            </div>

                        )
                    })
                }
            </div>


            <div className={"w-full h-full  flex  pb-2   flex-col md:flex-row "
            }>
                <div
                    className="
                    flex flex-col justify-between items-start gap-[2rem] p-[2rem] bg-[#1e1e1e] mx-4 rounded-2xl w-full md:w-1/2">
                    <h2 className={"uppercase font-light text-lg"}>{businessInfo[0].tag}</h2>
                    <h3 className={"uppercase font-600 opacity-90 text-4xl"}>{businessInfo[0].title}</h3>
                    <p className={"text-lg columns-2 text-justify opacity-60"}>{businessInfo[0].description}</p>
                </div>
                <div className={
                    " h-auto w-full md:w-1/2 p-[2rem]"
                }>
                    {<img src={businessInfo[0].img.src} alt="" className={"w-full h-auto p-[2rem] "}/>}
                </div>
            </div>

            <div>
                {/* Our Advantages Section */}
                <h2 className="w-full  uppercase text-5xl py-[3rem] pl-[6rem] mb-8 ">
                    {businessInfo[1].tag}
                </h2>

                {/* Row configurations */}
                {[
                    { cards: [0, 1], imgIndex: 0, imageOnLeft: true },
                    { cards: [2, 3], imgIndex: 1, imageOnLeft: false }
                ].map((row, rowIndex) => (
                    <div key={rowIndex} className="
                    {/*flex min-h-[400px] mb-6*/}
                    flex flex-col md:flex-row
                    ">
                        {/* Image */}
                        <div className={`
                        w-full md:w-1/2 ${row.imageOnLeft ? '' : 'md:order-2'}`
                            // w-1/2 ${row.imageOnLeft ? '' : 'order-2'}`
                        }>
                            <img
                                src={businessInfo[1].img.src[row.imgIndex]}
                                alt=""
                                className="w-full h-full p-4 object-cover rounded-2xl"
                            />
                        </div>

                        {/* Cards */}
                        <div className={
                            `w-full md:w-1/2 flex flex-col gap-4 p-4 ${row.imageOnLeft ? 'md:order-2' : 'md:order-1'}`
                            // `w-1/2 flex flex-col gap-4 p-4 ${row.imageOnLeft ? '' : 'order-1'}`
                        }>
                            {row.cards.map(cardIndex => (
                                <div key={cardIndex} className="flex-1 bg-[#1e1e1e] rounded-2xl p-6">
                                    <h3 className="uppercase font-light text-lg mb-3">
                                        {businessInfo[1].title[cardIndex]}
                                    </h3>
                                    <p className="text-sm text-justify opacity-60">
                                        {businessInfo[1].description[cardIndex]}
                                    </p>
                                    <p className={"text-sm uppercase opacity-60 text-end px-[2rem] py-5"}
                                    > <i className={"ri-arrow-right-up-long-line p-2  bg-[gray] rounded-[50%]"}></i><span className={"px-1"}></span>Explore</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Hero;