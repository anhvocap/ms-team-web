export const fetchToken = async () => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'app_secret': process.env.REACT_APP_CLIENT_SECRET,
            }
        };
        let link_token = (process.env.NODE_ENV === 'development')
            ? 'http://localhost:8001/v1/api/token'
            : '/v1/api/token';
        let res_token = await fetch(link_token, options)
            .then(res => res.json());
        let { access_token } = res_token.data;
        return access_token;
    } catch (err) {
        throw err;
    }
}
