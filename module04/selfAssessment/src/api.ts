import fetch, { Response } from "node-fetch";

const head = <T>(ary: T[]): T => ary[0];

const normalize = (n: number): number => n / 255;

const jsonify = (resp: Response) => resp.json();

export const getRandomAsync = async () => {
    const resp = await fetch(
        "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
    );
    const result = await resp.json();
    return normalize(result.data);
};

// return random number between 0 and 255
export const getRandomPromise = () => {
    return fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8")
        .then(jsonify)
        .then(result => normalize(head(result.data)));
};
