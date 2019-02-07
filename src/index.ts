import * as _axios from "axios";

// @ts-ignore
const axios: _axios.AxiosStatic = _axios;

const getImageString = async (url: string) => {
    const resp = await axios.get(url, {
        responseType: "blob"
    });

    const fr = new FileReader();
    fr.readAsDataURL(resp.data);

    return new Promise<string>((resolve, reject) => {
        fr.onerror = reject;
        fr.onload = () => resolve(fr.result as string);
    });
};

export default () =>
    getImageString(
        "https://avatars2.githubusercontent.com/u/21223537?s=460&v=4"
    ).then(result => {
        // tslint:disable-next-line:no-console
        // console.log(result);

        const img = new Image();
        img.src = result;
        document.body.append(img);
    });
