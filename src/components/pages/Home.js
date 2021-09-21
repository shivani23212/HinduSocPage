import React, {useEffect, useState} from "react";
import "../../App.css";
import Hero from "../Hero";
import Cards from "../Cards";

function Home() {
    const [imgs, setImgLen] = useState(0);
    const [loadedImgs, setLoadedImgs] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const imgs = document.querySelectorAll('img');
        setImgLen(imgs.length)
        for (let img of imgs) {
            img.addEventListener('load', () => {setLoadedImgs(loadedImgs + 1); console.log('dada')})
        }
    }, [])

    useEffect(() => {
        if (imgs === loadedImgs) {
            console.log('done')
        }
    }, [imgs, loadedImgs])

    return (
        <div>
        <Hero/>
        <Cards/>            
        </div>
    )
}

export default Home;
