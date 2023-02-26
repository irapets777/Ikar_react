import React from 'react'

const HomeNewsCard = ({ news }) => {
    const { title, text } = news;
    return (
        <>
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </>

    )
}

export default HomeNewsCard