import {getApp} from './app';

const server = (): void => {
    const app = getApp();

    app.listen(3000, () => {
        console.log(3000);
        console.log('Listening on port 3000');
    });
}

server();