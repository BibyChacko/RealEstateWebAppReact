import "./imgSlider.scss";

export default function ImgSlider({images}){
    return (
        <div className="imgSliderContainer">
            <div className="mainImgContainer">
                <img src={images[0]} alt="MainImage" />
            </div>
            <div className="upcomingImgContainer">
                {images.slice(1).map((image,index) => (
                    <img src={image} key={index} alt={index+" Img"}/>)
                )}
            </div>
        </div>
    );
}