import axios from "axios";

const getImageString = async (url: string) => {
    const resp = await axios.get(url, {
        responseType: "blob"
    });

    const fr = new FileReader();
    fr.readAsDataURL(resp.data);

    return new Promise((resolve, reject) => {
        fr.onerror = reject;
        fr.onload = () => resolve(fr.result);
    });
};

getImageString(
    "https://avatars2.githubusercontent.com/u/21223537?s=460&v=4"
).then(result => {
    // tslint:disable-next-line:no-console
    console.log(result);
});

export default (arg: string) => `Hello, ${arg}!`;
