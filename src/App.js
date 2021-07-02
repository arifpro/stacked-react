import StackedCardSlider from './StackedCardSlider';

const data = [
    {
        img:"https://pyimagesearch.com/wp-content/uploads/2019/01/python_ml_header.png",
        title:"Applied data science and Machine Leaning",
        recommended: true,
    },
    {
        img: "https://webappsinfo.files.wordpress.com/2018/12/AndroidAppDev-Trends-min.jpg",
        title: "Android App Development",
        recommended: true,
    },
    {
        img: "https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png",
        title: "Learn ReactJs for FrontEnd",
        recommended: true,
    },
];

const App = () => {
    return (
        <div>
            <StackedCardSlider data={data} slideTime={3000} />
        </div>
    );
};

export default App;
