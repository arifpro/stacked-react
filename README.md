# stacked-react

## install

```sh
npm i stacked-react
```

```sh
yarn add stacked-react
```

## use

```js
import StackedCardSlider from 'stacked-react';

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
            <StackedCardSlider data={data}/>
        </div>
    );
};

export default App;
```

## links

Live link: [https://arifpro.github.io/stacked-react](https://arifpro.github.io/stacked-react)

CodeSandBox: [https://codesandbox.io/s/github/arifpro/StackedCardSlider](https://codesandbox.io/s/github/arifpro/StackedCardSlider)
