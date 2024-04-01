import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import data from '../data/data.json'

gsap.registerPlugin(ScrollTrigger)

function LandingPage() {


    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

    // USESTATES
    const [dHero, setDHero] = React.useState(true)
    const [dAbout, setDAbout] = React.useState(false)

    const [dSourcing, setDSourcing] = React.useState(false)
    const [dWarehousing, setDWarehousing] = React.useState(false)
    const [dCallCenter, setDCallCenter] = React.useState(false)
    const [dShipping, setDShipping] = React.useState(false)


    const [dLocation, setDLocation] = React.useState(false)

    const [serviceIndex, setServiceIndex] = React.useState(0)

    

    const [dCTA, setDCTA] = React.useState(data.hero.cta)
    const [dIcon, setDIcon] = React.useState(data.hero.icon)






    // GSAP ELM ANIMATION
    React.useEffect(() => {

        // LENIS SCROLL SMOOTHER
        const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {lenis.raf(time * 0.00006)})

        // GSAP DEFAULTS
        gsap.defaults({
            ease: 'Linear.easeNone'
            // ease: 'Power1.easeInOut'
        })
        ScrollTrigger.defaults({
            trigger: '.landing-page',
            toggleActions: 'restart none reverse none',
            scrub: true,
        })
        /* 



            CHANGER HERO TO ABOUT



        */    
        ScrollTrigger.create({
            start: '800 90%',
            end: '2900 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDAbout(true)},
            onLeaveBack: () => {setDAbout(false)},
            onLeave: () => {
                setDHero(false)
                document.querySelector<HTMLElement>('.c')!.style.zIndex = '0'
            },
            onEnterBack: () => {
                setDHero(true)
                document.querySelector<HTMLElement>('.c')!.style.zIndex = '3'
            },
            // markers: true
        })

        const about = gsap.timeline()
        ScrollTrigger.create({
            start: '900 90%',
            end: '2800 90%',
            animation: about
        })
        about.to('.a', {duration: 5, width: 350, height: 400, left: 'calc(50% + 175px)', top: '56%'}, '0')
        .to('.b', {duration: 5, width: 350, height: 400, left: 'calc(50% - 175px)', top: '56%', opacity: 1}, '0')
        .to('.d .icon > i', {duration: 5, fontSize: '80px'}, '0')
        .to('.c', {duration: 4, top: '10%', color: '#222'}, '0')
        .to('.d', {duration: 4, top: '56%', background: '#ff450000', color: '#ffffff00'}, '0')
        .to('.d .icon', {duration: 4, left: '50%', transform: 'translate(-50%, -50%)'}, '0')
        /* 



            CHANGER ABOUT TO SOURCING



        */
        ScrollTrigger.create({
            start: '3000 90%',
            end: '+=2500 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDSourcing(true)},
            onLeaveBack: () => {setDSourcing(false)},
            onLeave: () => {setDAbout(false)},
            onEnterBack: () => {setDAbout(true)},
            // markers: true
        })

        const sourcing = gsap.timeline()
        ScrollTrigger.create({
            start: '3100 90%',
            end: '+=2300 90%',
            animation: sourcing
        })
        sourcing.to('.a', {duration: 5, width: 320, height: 320, left: 'calc(50% - 290px)', top: 'calc(50% + 115px)'}, '0')
        .to('.b', {duration: 5, width: 320, height: 320, left: 'calc(50% - 75px)', top: 'calc(50% - 115px)'}, '0')
        .to('.d', {duration: 5, width: 350, left: 'calc(50% + 275px)', top: 'calc(50% + 245px)', color: '#222'}, '0')
        .to('.d .txt', {duration: 5, left: '0%', top: '100%', transform: 'translate(0%, -100%)'}, '0')
        .to('.d .icon', {duration: 5, left: '50%', top: '100%', transform: 'translate(-100%, -100%)', color: '#222'}, '0')
        .to('.d .icon > i', {duration: 5, fontSize: '16px'}, '0')
        .to('.c .sub-title', {duration: 5, maskImage: 'linear-gradient(to top, transparent 10%, black 100%)'}, '0')
        .to('.c', {duration: 5, height: 550, top: '50%'}, '0')
        .to('.c', {duration: 4, left: 'calc(50% + 275px)'}, '0')
        .to('.c', {duration: 3, width: 350}, '0')
        /* 



            CHANGER SOURCING TO WAREHOUSING



        */
        ScrollTrigger.create({
            start: '5600 90%',
            end: '+=2000 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDWarehousing(true)},
            onLeaveBack: () => {setDWarehousing(false)},
            onLeave: () => {setDSourcing(false)},
            onEnterBack: () => {setDSourcing(true)},
            // markers: true
        })

        const warehousing = gsap.timeline()
        ScrollTrigger.create({
            start: '5700 90%',
            end: '+=1800 90%',
            animation: warehousing
        })
        warehousing.to('.a', {duration: 5, left: 'calc(50% - 75px)'}, '0')
        .to('.b', {duration: 5, left: 'calc(50% - 290px)'}, '0')
        /* 



            CHANGER WAREHOUSING TO CALLCENTER



        */
        ScrollTrigger.create({
            start: '7700 90%',
            end: '+=2000 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDCallCenter(true)},
            onLeaveBack: () => {setDCallCenter(false)},
            onLeave: () => {setDWarehousing(false)},
            onEnterBack: () => {setDWarehousing(true)},
            // markers: true
        })

        const callCenter = gsap.timeline()
        ScrollTrigger.create({
            start: '7800 90%',
            end: '+=1800 90%',
            animation: callCenter
        })
        callCenter.to('.a', {duration: 5, top: 'calc(50% - 115px)'}, '0')
        .to('.b', {duration: 5, zIndex: 2, top: 'calc(50% + 115px)'}, '0')
        /* 



            CHANGER CALLCENTER TO SHIPPING



        */
        ScrollTrigger.create({
            start: '9800 90%',
            end: '+=2000 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDShipping(true)},
            onLeaveBack: () => {setDShipping(false)},
            onLeave: () => {setDCallCenter(false)},
            onEnterBack: () => {setDCallCenter(true)},
            // markers: true
        })

        const shipping = gsap.timeline()
        ScrollTrigger.create({
            start: '9900 90%',
            end: '+=1800 90%',
            animation: shipping
        })
        shipping.to('.a', {duration: 5, left: 'calc(50% - 290px)'}, '0')
        .to('.b', {duration: 5, left: 'calc(50% - 75px)'}, '0')
        /* 



            SERVICES TO LOCATIONS



        */
        ScrollTrigger.create({
            start: '11900 90%',
            end: '+=3700 90%',
            animation: gsap.timeline(),
            onEnter: () => {setDLocation(true)},
            onLeaveBack: () => {setDLocation(false)},
            onLeave: () => {setDShipping(false)},
            onEnterBack: () => {setDShipping(true)},
            // markers: true
        })

        const location = gsap.timeline()
        ScrollTrigger.create({
            start: '12000 90%',
            end: '+=3500 90%',
            animation: location,
            // markers: true
        })
        location.to('.a', {duration: 5, width: '100vw', height: '100vw', left: '50%', top: '50%'}, '0')
        .to('.b', {duration: 3, width: '100vw', height: '100vw', left: '85%', top: '135%', transform: 'translate(0%, 0%)'}, '0')
        .to('.c', {duration: 2.5, scale: 2.5, left: '118%', top: '13%', transform: 'translate(50%, 50%)'}, '0')
        .to('.d', {duration: 2.5, scale: 2.5, left: '118%', top: '140%', transform: 'translate(50%, 50%)'}, '0')

        .to('.c', {duration: 0, scale: 1, zIndex: 3, left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}, '2.5')

        .to('.b', {duration: 0, zIndex: 33, width: 300, height: 300, left: '20%', top: '80%', transform: 'translate(-50%, -50%)'}, '3.5')





        





    }, [])







    // HERO TO ABOUT
    React.useEffect(() => {
        if (dHero && dAbout) {
            console.log('Change Hero About');
            const hero = gsap.timeline()
            ScrollTrigger.create({
                start: '1000 90%',
                end: '2700 90%',
                animation: hero
            })
            hero.fromTo('.hero-img', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            // HIDE HERO AND SHOW ABOUT TITLE
            .fromTo('.c .title > div > div.hero-title', {transform: 'translateY(0%)'}, {duration: 3, transform: 'translateY(-100%)'}, '1')
            .fromTo('.c .title > div > div.about-title', {transform: 'translateY(100%)'}, {duration: 3, transform: 'translateY(0%)'}, '1')
            // HIDE HERO SUBTITLE
            .fromTo('.c .sub-title > div > div.hero-title', {transform: 'translateY(0%)'}, {duration: 1.5, transform: 'translateY(-100%)', stagger: {amount: 0.5}}, '2')
            // SHOW ABOUT SUBTITLE
            .fromTo('.c .sub-title > div > div.about-title', {transform: 'translateY(100%)'}, {duration: 1.5, transform: 'translateY(0%)', stagger: {amount: 0.5}}, '2')
        }
    }, [dHero, dAbout])

    // ABOUT TO SOURCING
    React.useEffect(() => {
        if (dAbout && dSourcing) {
            const about = gsap.timeline()
            ScrollTrigger.create({
                start: '3200 90%',
                end: '+=2100 90%',
                animation: about
            })
            about.fromTo('.about-img', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            // SHOW SPACE
            .fromTo('.c .title > div:not(:nth-child(1))', {height: 0, marginTop: 0}, {duration: 3, height: 60, marginTop: 25, stagger: {amount: 1}}, '0')
            .fromTo('.c .sub-title > div:not(:nth-child(1)):not(:nth-child(2))', {height: 0, marginTop: 0}, {duration: 2, height: 20, marginTop: 10, stagger: {amount: 1}}, '0')
            // SHOW A MESSAGES
            .fromTo('.a .services .msg.f > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '0')
            // HIDE ABOUT TITLE AND SHOW SERVICES FL
            .fromTo('.c .title > div > div.about-title', {transform: 'translateY(0%)'}, {duration: 3, transform: 'translateY(-100%)'}, '1')
            .fromTo('.c .title > div:nth-child(1) > div.services-title.s1', {transform: 'translateY(100%)'}, {duration: 3, transform: 'translateY(0%)'}, '1')
            // SHOW SERVICES TITLE
            .fromTo('.c .title > div:not(:nth-child(1)) > div.services-title.s1', {transform: 'translateY(100%)'}, {duration: 3, transform: 'translateY(0%)', stagger: {amount: 1}}, '1')

            // SHOW B MESSAGES
            .fromTo('.b .services .msg.f > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '1.5')

            // HIDE ABOUT SUBTITLE
            .fromTo('.c .sub-title > div > div.about-title', {transform: 'translateY(0%)'}, {duration: 1, transform: 'translateY(-100%)', stagger: {amount: .5}}, '2.5')
            // SHOW SERVICES SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s1', {transform: 'translateY(100%)'}, {duration: 1,transform: 'translateY(0%)', stagger: {amount: 1.5}}, '2.5')  
        }
    }, [dAbout, dSourcing])

    // FROM SOURCING TO WAREHOUSING
    React.useEffect(() => {
        if (dSourcing && dWarehousing) {
            const warehousing = gsap.timeline()
            ScrollTrigger.create({
                start: '5700 90%',
                end: '+=1800 90%',
                animation: warehousing
            })
            warehousing.fromTo('.services .img > div.s1', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            // HIDE SERVICE 1 TITLE
            .fromTo('.c .title > div > div.services-title.s1', {transform: 'translateY(0%)'}, {duration: 2, transform: 'translateY(-100%)', stagger: {amount: 2}}, '0')
            // SHOW SERVICE 2 TITLE
            .fromTo('.c .title > div > div.services-title.s2', {transform: 'translateY(100%)'}, {duration: 2, transform: 'translateY(0%)', stagger: {amount: 2}}, '0')
            // HIDE MESSAGES
            .fromTo('.a .services .msg.f > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1.2}}, '0')
            .fromTo('.b .services .msg.f > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1.2}}, '0.5')
            // SHOW MESSAGES
            .fromTo('.a .services .msg.s > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '1.5')
            .fromTo('.b .services .msg.s > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '1.5')
            // HIDE SERVICE 1 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s1', {transform: 'translateY(0%)'}, {duration: 1, transform: 'translateY(-100%)', stagger: {amount: 1.5}}, '2.5')
            // SHOW SERVICE 2 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s2', {transform: 'translateY(100%)'}, {duration: 1, transform: 'translateY(0%)', stagger: {amount: 1.5}}, '2.5')
        }
    }, [dSourcing, dWarehousing])

    // FROM WAREHOUSING TO CALLCENTER
    React.useEffect(() => {
        if (dWarehousing && dCallCenter) {
            const callCenter = gsap.timeline()
            ScrollTrigger.create({
                start: '7800 90%',
                end: '+=1800 90%',
                animation: callCenter
            })
            callCenter.fromTo('.services .img > div.s2', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            // HIDE SERVICE 1 TITLE
            .fromTo('.c .title > div > div.services-title.s2', {transform: 'translateY(0%)'}, {duration: 2, transform: 'translateY(-100%)', stagger: {amount: 2}}, '0')
            // SHOW SERVICE 2 TITLE
            .fromTo('.c .title > div > div.services-title.s3', {transform: 'translateY(100%)'}, {duration: 2, transform: 'translateY(0%)', stagger: {amount: 2}}, '0')
            // HIDE SERVICE 1 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s2', {transform: 'translateY(0%)'}, {duration: 1, transform: 'translateY(-100%)', stagger: {amount: 1.5}}, '2.5')
            // SHOW SERVICE 2 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s3', {transform: 'translateY(100%)'}, {duration: 1, transform: 'translateY(0%)', stagger: {amount: 1.5}}, '2.5')
        }
    }, [dWarehousing, dCallCenter])

    // FROM CALLCENTER TO SHIPPING
    React.useEffect(() => {
        if (dCallCenter && dShipping) {
            const shipping = gsap.timeline()
            ScrollTrigger.create({
                start: '9900 90%',
                end: '+=1800 90%',
                animation: shipping
            })
            shipping.fromTo('.services .img > div.s3', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            // HIDE SERVICE 1 TITLE
            .fromTo('.c .title > div > div.services-title.s3', {transform: 'translateY(0%)'}, {duration: 2, transform: 'translateY(-100%)', stagger: {amount: 2}}, '0')
            // SHOW SERVICE 2 TITLE
            .fromTo('.c .title > div > div.services-title.s4', {transform: 'translateY(100%)'}, {duration: 2, transform: 'translateY(0%)', stagger: {amount: 2}}, '0')
            // HIDE MESSAGES
            .fromTo('.a .services .msg.s > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1.2}}, '0')
            .fromTo('.b .services .msg.s > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1.2}}, '0.5')
            // SHOW MESSAGES
            .fromTo('.a .services .msg.f > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '1.5')
            .fromTo('.b .services .msg.f > div', {opacity: 0}, {duration: 1.5, opacity: 1, stagger: {amount: 2}}, '1.5')
            // HIDE SERVICE 1 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s3', {transform: 'translateY(0%)'}, {duration: 1, transform: 'translateY(-100%)', stagger: {amount: 1.5}}, '2.5')
            // SHOW SERVICE 2 SUBTITLE
            .fromTo('.c .sub-title > div > div.services-title.s4', {transform: 'translateY(100%)'}, {duration: 1, transform: 'translateY(0%)', stagger: {amount: 1.5}}, '2.5')
        }
    }, [dCallCenter, dShipping])



    React.useEffect(() => {

        if (dShipping && dLocation) {

            const hideMSG = gsap.timeline()
            ScrollTrigger.create({
                start: '11900 90%',
                end: '+=800 90%',
                animation: hideMSG
            })
            hideMSG.fromTo('.a .services .msg.f > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1}}, '0')
            .fromTo('.b .services .msg.f > div', {opacity: 1}, {duration: 1, opacity: 0, stagger: {amount: -1}}, '0')

            const location = gsap.timeline()
            ScrollTrigger.create({
                start: '12100 90%',
                end: '+=3300 90%',
                animation: location,
                // markers: true
            })

            
            
            location.fromTo('.a .services .img > div.s4', {opacity: 1}, {duration: 5, opacity: 0}, '0')
            .fromTo('.location-img > div', {width: 'calc(100vw - 0px', height: 'calc(100vh - 0px'}, {duration: 2, width: 'calc(100vw - 15px)', height: 'calc(100vh - 15px)'}, '2')
            // HIDE SPACE
            .fromTo('.c .title > div:not(:nth-child(1))', {height: 60, marginTop: 25}, {duration: 0, height: 0, marginTop: 0}, '2')
            .fromTo('.c .sub-title > div:not(:nth-child(1)):not(:nth-child(2))', {height: 20, marginTop: 10}, {duration: 0, height: 0, marginTop: 0}, '2')
            // HIDE SERVICES TITLE AND SUBTITLE
            .fromTo('.c .title > div > div.services-title.s4', {transform: 'translateY(0%)'}, {duration: 0, transform: 'translateY(-100%)'}, '2')
            .fromTo('.c .sub-title > div > div.services-title.s4', {transform: 'translateY(0%)'}, {duration: 0, transform: 'translateY(-100%)'}, '2')
            // SHOW LOCATION TITLE
            .fromTo('.c .title > div > div.location-title', {transform: 'translateY(100%)'}, {duration: 2, transform: 'translateY(0%)'}, '2.2')
            // SHOW LOCATION SUBTITLE
            .fromTo('.c .sub-title > div > div.location-title', {transform: 'translateY(100%)'}, {duration: 1.5, transform: 'translateY(0%)', stagger: {amount: 0.5}}, '2.5')
            
        }
    }, [dLocation, dShipping])

    function testByClick() {
  
    }


    return (
        <div className='landing-page'>

            <div className='sticky'>

                <div>

                    <div className='s-elm a'>
                        {dHero && <div className='hero-img'></div>}
                        {dAbout && <div className='about-img'></div>}
                        {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div className='services'>
                                <div>
                                    <div className='img'>
                                        {dShipping && <div className='s4'></div>}
                                        {dCallCenter && <div className='s3'></div>}
                                        {dWarehousing && <div className='s2'></div>}
                                        {dSourcing && <div className='s1'></div>}
                                    </div>

                                    <div className='msg f'>
                                        <div>{data.service[serviceIndex].aMsg[0].msg}</div>
                                        <div>{data.service[serviceIndex].aMsg[1].msg}</div>
                                        <div>{data.service[serviceIndex].aMsg[2].msg}</div>
                                        <div>{data.service[serviceIndex].aMsg[3].msg}</div>
                                    </div>

                                    <div className='msg s'>
                                        <div>{data.service[serviceIndex].bMsg[0].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[1].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[2].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[3].msg}</div>
                                    </div>

                                </div>
                        </div>}
                        {dLocation && <div className='location-img'>
                                <div></div>
                            </div>}
                    </div>

                    <div className='s-elm b'>
                        {dAbout && <div className='about-img'></div>}
                        {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div className='services'>
                                <div>
                                    <div className='img'>
                                        {dShipping && <div className='s4'></div>}
                                        {dCallCenter && <div className='s3'></div>}
                                        {dWarehousing && <div className='s2'></div>}
                                        {dSourcing && <div className='s1'></div>}
                                    </div>

                                    <div className='msg f'>
                                        <div>{data.service[serviceIndex].bMsg[0].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[1].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[2].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[3].msg}</div>
                                    </div>

                                    <div className='msg s'>
                                        <div>{data.service[serviceIndex].bMsg[0].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[1].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[2].msg}</div>
                                        <div>{data.service[serviceIndex].bMsg[3].msg}</div>
                                    </div>

                                </div>
                        </div>}
                    </div>

                    <div className='s-elm c column-center'>
                        <div className='column-center'>

                            <div className='title'>

                                {/* first-line */}
                                
                                {(dHero || dAbout || dSourcing || dWarehousing || dCallCenter || dShipping || dLocation) && <div>
                                    <div>first-line</div>
                                    {dHero && <div className='hero-title'>{data.hero.title}</div>}
                                    {dAbout && <div className='about-title'>{data.about.title}</div>}
                                    {dSourcing && <div className='services-title s1'>{data.service[0].title.split('|')[0]}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].title.split('|')[0]}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].title.split('|')[0]}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].title.split('|')[0]}</div>}
                                    {dLocation && <div className='location-title'>{data.location.title}</div>}

                                </div>}

                                {/* second-line */}

                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>second-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].title.split('|')[1]}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].title.split('|')[1]}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].title.split('|')[1]}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].title.split('|')[1]}</div>}

                                </div>}
                                {/* third-line */}

                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>third-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].title.split('|')[2]}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].title.split('|')[2]}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].title.split('|')[2]}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].title.split('|')[2]}</div>}
                                </div>}

                                {/* fourth-line */}

                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>fourth-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].title.split('|')[3]}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].title.split('|')[3]}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].title.split('|')[3]}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].title.split('|')[3]}</div>}
                                </div>}


                                {/* fifth-line */}
                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>fifth-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].title.split('|')[4]}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].title.split('|')[4]}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].title.split('|')[4]}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].title.split('|')[4]}</div>}
                                </div>}



                            </div>



                            <div className='sub-title'>

                                {/* first-line */}
                                
                                {(dHero || dAbout || dSourcing || dWarehousing || dCallCenter || dShipping || dLocation) && <div>
                                    <div>first-line</div>
                                    {dHero && <div className='hero-title'>{data.hero.subTitle.split('|')[0]}</div>}
                                    {dAbout && <div className='about-title'>{data.about.subTitle.split('|')[0]}</div>}
                                    {dSourcing && <div className='services-title s1'>{data.service[0].subTitle}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].subTitle}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].subTitle}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].subTitle}</div>}
                                    {dLocation && <div className='location-title'>{data.location.subTitle.split('|')[0]}</div>}
                                </div>}

                                {/* second-line */}

                                {(dHero || dAbout || dSourcing || dWarehousing || dCallCenter || dShipping || dLocation) && <div>
                                    <div>second-line</div>
                                    {dHero && <div className='hero-title'>{data.hero.subTitle.split('|')[1]}</div>}
                                    {dAbout && <div className='about-title'>{data.about.subTitle.split('|')[1]}</div>}
                                    {dSourcing && <div className='services-title s1'>{data.service[0].subTitle}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].subTitle}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].subTitle}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].subTitle}</div>}
                                    {dLocation && <div className='location-title'>{data.location.subTitle.split('|')[1]}</div>}
                                </div>}

                                {/* third-line */}

                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>third-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].subTitle}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].subTitle}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].subTitle}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].subTitle}</div>}
                                </div>}

                                {/* fourth-line */}

                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>fourth-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].subTitle}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].subTitle}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].subTitle}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].subTitle}</div>}
                                </div>}

                                {/* fifth-line */}
                                {(dSourcing || dWarehousing || dCallCenter || dShipping) && <div>
                                    <div>fifth-line</div>
                                    {dSourcing && <div className='services-title s1'>{data.service[0].subTitle}</div>}
                                    {dWarehousing && <div className='services-title s2'>{data.service[1].subTitle}</div>}
                                    {dCallCenter && <div className='services-title s3'>{data.service[2].subTitle}</div>}
                                    {dShipping && <div className='services-title s4'>{data.service[3].subTitle}</div>}
                                </div>}


                            </div>

                        </div>
                    </div>

                    <div className='s-elm d column-center' onClick={testByClick}>

                        <div className='txt'>
                            <div>{dCTA}</div>
                        </div>

                        <div className='flex-center icon'>
                            <i className={dIcon}>
                        </i></div>
                        
                        {dAbout && <div className='about-video'></div>}

                    </div>

                </div>

            </div>

        </div>
    )
}
export default React.memo(LandingPage)








// Sure! Here's a table that breaks down the animation sequence, the properties that are being animated, and their respective durations:

// Can you provide me with a table that shows the start and end times, duration, delay, and progress of the animations in this code block: