import React, {useEffect, useState} from 'react';

export const NotMoin = () => {
    let [nice, setNice] = useState('not Nice');
    //useEffect not working  when using SSR
    useEffect(() => console.error("HIIIIIIIIIIILFEEEEEEEEEEEE"))

    useEffect(() => {
        console.log("okay")
        fetch("http://localhost:8080/string/nice")
            .then(async msg => setNice(await msg.text()))
    },[setNice,nice])

    return (<p>{nice}</p>);
};