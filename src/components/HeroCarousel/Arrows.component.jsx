import React from 'react';

export const NextArrow = (props) => {

    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#08080A", borderRadius: "8px" }}
                onClick={props.onClick}
            />
        </>
    )
};

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#08080A", borderRadius: "9px" }}
                onClick={props.onClick}
            />
        </>
    )
};