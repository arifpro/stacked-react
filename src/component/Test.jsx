import "./Test.scss";

const StackedCardSlider = () => {
  return (
    <main className="cardsBox owlCarousel">
      {/* <SingleCard hide /> */}
      <SingleCard
        img="https://pyimagesearch.com/wp-content/uploads/2019/01/python_ml_header.png"
        title="Applied data science and Machine Leaning"
        recommended
      />
      <SingleCard
        img="https://webappsinfo.files.wordpress.com/2018/12/AndroidAppDev-Trends-min.jpg"
        title="Android App Development"
        recommended
      />
      <SingleCard
        img="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
        title="Learn ReactJs for FrontEnd"
        recommended
      />
    </main>
  );
};

const SingleCard = ({ img, title, recommended, hide }) => {
  return (
    <div className={`stacked__card${hide !== undefined ? " hide" : ""}`}>
      <img src={img} alt="" className="stacked__cardImage" />
      <div className="contentPlaceholder">
        <h3 className="stacked__cardTitle">{title}</h3>
        {recommended && <p className="stacked__cardRecommended">RECOMMENDED</p>}
      </div>
    </div>
  );
};

export default StackedCardSlider;
