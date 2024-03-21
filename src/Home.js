import logo from './logo.svg';
import './Styles/App.css'
import Header from './Components/Header';
import ScrollingImages from './Components/ScrollingImages';
import HomeImagePills from './Images/HomePageBottle.png'

function Home() {
    return (
        <div className='homePageContainer'>
            <div className='homePageBoxBox'>
                {/* <div className='sidebarTest'>

        </div> */}
                <div className='homePageBox'>

                    <div className='scrollImages'>
                        <ScrollingImages />
                    </div>
                    <div className='homePageInfo'>
                        <div className='infoPageText'>
                            <h4>Where are we?</h4>
                            <p>
                                Where are we really? - Welcome to ACLabs Dream Modification Pill site,
                                where we offer our whole range of pills to help modify your dreams!
                            </p>
                            <p>
                                Head over to the Buy page to buy all those yummy Dream Modification Pills,
                                or head over to the Sell page and help us enhance our Dream Modification Exprience,
                                by selling us, YOUR dreams!
                            </p>
                            <h4>What is a Dream Modification Pill?</h4>
                            <p>
                                Our Dream Modification Pill, or DMP, is a small medical pill,
                                full of healthy chemicals, that when taken 30mins - 1hour before bedtime,
                                will help your desired dreams become reality.
                            </p>
                            <h5>Have Questions? We have an FAQ on our Buy page!!</h5>
                        </div>
                        <div >
                            <img className='homePageImageCont' src={HomeImagePills} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;
