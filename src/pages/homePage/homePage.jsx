
import SearchBar from "../../components/searchbar/searchbar";
import "./HomePage.scss";

export default function HomePage(){
    return(
       <div className="homePageContainer">
        <div className="textContainer">
            <div className="wrapper">
                <h1>Find your perfect home</h1>
                <p>Choose your perfect from near by your perfect from near byyour perfect from near by your perfect from near by</p>

                <SearchBar />
                <div className="statsContainer">
                    <div className="statsItem">
                        <h2>16+</h2>
                        <span>Years of experience</span>
                    </div>
                    <div className="statsItem">
                        <h2>200+</h2>
                        <span>Awards Gained</span>
                    </div>
                    <div className="statsItem">
                        <h2>1200+</h2>
                        <span>Properties Listed</span>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="imgContainer">
            <img src="bg.png" alt="" />
        </div>
       </div>
    );
}