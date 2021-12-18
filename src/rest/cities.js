import axios from 'axios';
import idx from 'idx';

const base_url = 'https://us-central1-test-truehome.cloudfunctions.net';
export const getCities = async () => {
    const url = `${base_url}/cities`;
    const response = await axios({
        url,
        method: 'get'
    });
    const datas = idx(response, _ => _.data);
    if (datas) {
        return datas;
    }
};