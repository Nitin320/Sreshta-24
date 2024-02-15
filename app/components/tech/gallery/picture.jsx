'use client'
import { gsap } from "gsap";
import { useRef,useLayoutEffect,useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css'

import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';

function Picture() {

    const [ManinData, setManinData] = useState("")

    let custom_data = [
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        
    ]

    const container = useRef(null)
    const bigImg = useRef(null)
    const maincontainer = useRef(null)
    const swiperRef = useRef(null);

    const detect = (e)=>{
        // console.log("slide changed",Swiper.activeIndex)
        if(undefined!=custom_data[e]){
            console.log("slide changed",e)
            console.log(custom_data[e].slide_img)
            bigImg.current.src = custom_data[e].slide_img
        }
    }

    const cardClick = (e,i)=>{
        console.log("card clicked",e,i)
        // setManinData(e)
        // bigImg.current.src = e.slide_imgs
        // console.log('index',swiperRef.current.activeIndex = 1)
        swiperRef.current.swiper.slideTo(i,400,false)
    }


    // gsap.registerPlugin(ScrollTrigger) 
    // useLayoutEffect(()=>{
    //     //animatoins
    //     let scrollTween = gsap.to(container.current, {
    //         // xPercent: -100,
    //         // x: () => window.innerWidth,
    //         ease: "none", // <-- IMPORTANT!
    //         scrollTrigger: {    
    //           trigger: maincontainer.current,
    //           start: "top top",
    //         //   end: () => `+=${container.current.offsetWidth} bottom`,
    //           scrub: 1,
    //           markers: true,
    //           onEnter:()=>{
    //             console.log("triggered");
    //             slidAnimation();
    //           }
    //         }
    //     });

    //     const slidAnimation = ()=>{

            
    //         // const tl = gsap.timeline({
    //         //     scrollTrigger: {
    //         //         trigger: container.current,
    //         //         start: "50% 70%",
    //         //         end: "50% 20%",
    //         //         scrub: 1,
    //         //         containerAnimation: scrollTween,
    //         //         markers: true
    //         //     },
    //         // });
    
    //         gsap.to(container.current,{
    //             // x:"-250%",
    //             duration:5,
    //             repeat:-1,
    //             delay:0,
    //             ease:'linear',
    //             // scrollTrigger: {
    //             //     trigger: container.current,
    //             //     start: "50% 70%",
    //             //     end: "50% 20%",
    //             //     scrub: 1,
    //             //     containerAnimation: scrollTween,
    //             //     markers: true
    //             // },
    //         },)
    //     }

    // },[])


    const borderedImageStyle = {
        // border: '20px solid transparent',
        // borderImageSource: `url(/border.png)`,
        // borderImageSlice: 30,
        // borderImageRepeat: 'round',
      };

    return ( 
        <>
        <div  ref={maincontainer} className="h-[110vh] w-full overflow-hidden peat-round pt-20 relative flex justify-center">
            <div className="relative h-[94vh] w-full flex justify-center bg-red-">
                <div className="vertical absolute gap-1 justify-between w-[5%] h-3/6 flex items-center flex-col bg-green-300 top-[25%] right-10">
                    <div>1</div>
                    <div className="bg-blue-500 grow">bar</div>
                    <div>5</div>
                    </div>
                <div className="bg-[] p-2 relative h-[100%] w-[74%] -z-0 flex justify-center">

                    {/* <img className="absolute mix-blend-multiply opacity-30 top-0 w-[85%] h-[90vh]" src="./pexels-jeremy-alford-13172446 2.png" alt="" /> */}
                    {/* <img className="absolute object-cover top-0 w-[100%] h-[100%] z-10" src="./border.png" alt="image" /> */}
                    <img className="absolute top-0 w-[100%] h-[100%] object-cover mix-blend-multiply z-20" src="./670 1.png" alt="img" />
                    <img ref={bigImg} 
                    style={borderedImageStyle} className="transition-all z-10  object-cover top-0 w-[100%] h-[100%] mainImage" src={custom_data[0].slide_img} alt="" />
                    <img className="absolute object-cover top-0 w-[100%] h-[100%] z-30" src="./Vector.png" alt="image" />
                </div>
                <div className="absolute bottom-52 left-72 text-white">
                    <div className="font-['kivi']  tracking-tighter leading-none pl-10">2 Mar 2023</div>
                    <div className="text-[4vw] tracking-tighter leading-none">Motor Show</div>
                    <div className="text-[1.2vw] tracking-tighter leading-nonel pl-32">The classics and the vintage, all in one garage.</div>
                </div>
            <div className="z-20 text-white w-full absolute -bottom-16 h-[25vh]">
                <Swiper
                // onActiveIndexChange={detect}
                    // onSlideChange={detect}
                    ref={swiperRef}
                    initialSlide={0}
                    onRealIndexChange={e=>console.log(swiperRef.current,detect(e.activeIndex))}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={5}
                    // loop={true}
                    freeMode={true}
                    speed={8000}
                    // autoplay={{
                    // delay: 1,
                    // disableOnInteraction: false,
                    // }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="swiper-wrapper">
                        {
                            custom_data.map((e,i)=>{
                                return (
                                        <SwiperSlide key={i} onClick={()=>cardClick(e,i)}>
                                            <img src={e.slide_img} alt="" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                    </div>
                </Swiper>
            </div>
            </div>
        </div>
        </>
     );
}

export default Picture;