import WhyDtechCard from './why-dtech-card'


const WhyDtech = () => {
    return (
        <div>

            <div className="container container-1480">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-10">
                        <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
                            <h2 className="tp-about-2-section-title">
                                Things that set us <b>Apart</b> 
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-0">

                    <div className="col-xl-4">
                        <WhyDtechCard backgroundImage='https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' title='Reliability' description='Build your business on a foundation of reliability.' backgroundColor='#ffffff' />
                    </div>
                    <div className="col-xl-4">
                        <WhyDtechCard backgroundImage='https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' title='Expertise' description='Stay ahead of the curve with Dtechs leading-edge IT expertise.' backgroundColor='#ffffff' />
                    </div>
                    <div className="col-xl-4">
                        <WhyDtechCard backgroundImage='https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' title='Dedication' description='Beyond solutions, we offer dedication. Experience the difference.' backgroundColor='#ffffff' />
                    </div>
                </div>
                <div className="row gx-0 justify-content-xl-center">
                    <div className="col-xl-4">
                        <WhyDtechCard backgroundImage='https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' title='Adaptability' description='Adaptability to evolving technologies make us the perfect partner for your growing IT needs.' backgroundColor='#ffffff' />
                    </div>
                    <div className="col-xl-4">
                        <WhyDtechCard backgroundImage='https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' title='Partnerships' description='Experience the advantage of collaboration, backed by powerful partnerships.' backgroundColor='#ffffff' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyDtech