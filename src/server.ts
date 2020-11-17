import app from './app';
import { environment } from './config/environment';

const PORT = environment.serverPort;

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});
